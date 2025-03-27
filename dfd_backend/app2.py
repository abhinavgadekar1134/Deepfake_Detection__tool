from flask import Flask
import os
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Render is working!"

if __name__ == "__main__":
    port = os.environ.get("PORT")
    app.run(port=port)


# flask-cors tensorflow opencv-python numpy gdown pillow 