
import os
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"  # Disable GPU

import tensorflow as tf
tf.config.set_visible_devices([], 'GPU')  # Another way to disable GPU

from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import gdown

app = Flask(__name__)
CORS(app)  # Allow frontend requests
#load models from google drive
# https://drive.google.com/file/d/1RUdmCUbgGLrK2G5Hxusa7wMG_oszX-Bg/view?usp=sharing
MODEL_DIR = "models" 
MODEL_URL1 = "https://drive.google.com/uc?id=1RUdmCUbgGLrK2G5Hxusa7wMG_oszX-Bg"  # Replace with your actual file ID
MODEL_PATH1 = os.path.join(MODEL_DIR, "hybrid_model_im.keras")
os.makedirs("models", exist_ok=True)
def download_model1():
    if not os.path.exists(MODEL_PATH1):
        gdown.download(MODEL_URL1, MODEL_PATH1, quiet=False)
    return tf.keras.models.load_model(MODEL_PATH1)

hybrid_model_image = download_model1()
MODEL_URL2 = "https://drive.google.com/uc?id=1rWr5SvYKMH-gLNpVwSgaNFelkjAVuiwQ"  # Replace with your actual file ID
MODEL_PATH2 = os.path.join(MODEL_DIR, "deepfake_detection_model.keras")

def download_model2():
    if not os.path.exists(MODEL_PATH2):
        gdown.download(MODEL_URL2, MODEL_PATH2, quiet=False)
    return tf.keras.models.load_model(MODEL_PATH2)

hybrid_model_video = download_model2()
print(MODEL_PATH2)

# Load trained models
# hybrid_model_video = tf.keras.models.load_model("deepfake_detection_model.keras")
# hybrid_model_image = tf.keras.models.load_model("hybrid_model_im.keras")

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def extract_frames_from_video(video_path, image_size=(128, 128), max_frames=10, frame_step=5):
    cap = cv2.VideoCapture(video_path)
    frames = []
    frame_count = 0
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        frame = cv2.resize(frame, image_size)
        frames.append(frame)
        frame_count += 1
        if frame_count >= max_frames:
            break
        if frame_count % frame_step == 0:
            continue
    cap.release()

    if len(frames) < max_frames:
        frames.extend([np.zeros_like(frames[0])] * (max_frames - len(frames)))  # Padding
    frames = frames[:max_frames]
    return np.array(frames)

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    try:
        if file.content_type.startswith('image'):
            image = load_img(file_path, target_size=(150, 150))
            image_array = img_to_array(image) / 255.0
            image_array = np.expand_dims(image_array, axis=(0, 1))  # Add batch and time dim

            pred_value = hybrid_model_image.predict(image_array)[0, 0]
            pred_class = 'Deepfake' if pred_value < 0.5 else 'Real'

        elif file.content_type.startswith('video'):
            frames = extract_frames_from_video(file_path, image_size=(128, 128), max_frames=10, frame_step=5)
            frames = np.expand_dims(frames, axis=0)

            pred_value = hybrid_model_video.predict(frames)[0, 0]
            pred_class = 'Deepfake' if pred_value > 0.5 else 'Real'

        else:
            return jsonify({"error": "Unsupported file type"}), 400

        confidence = pred_value
        print(pred_class)
        return jsonify({
            "prediction": pred_class,
            "confidence": f"{confidence * 100:.2f}%",
            "file_type": "video" if file.content_type.startswith('video') else "image"
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = os.environ.get("PORT")
    app.run(port=port)
