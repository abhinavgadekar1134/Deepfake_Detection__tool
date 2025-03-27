import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [media, setMedia] = useState(null);
  const [mediaFile, setMediaFile] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [isFake, setIsFake] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false); // New state for tracking file upload
  const API_URL = process.env.REACT_APP_API_URL;

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsFake(null);
      setIsLoading(false);
      setIsUploading(true); // Set uploading to true
      setMediaFile(file);

      // Simulate an upload delay (optional)
      setTimeout(() => {
        setMedia(URL.createObjectURL(file));
        setMediaType(file.type.split("/")[0]);
        setIsUploading(false); // Set uploading to false when done
      }, 1000); // Simulate 1s delay
    }
  };

  const handlePredict = async () => {
    if (!mediaFile) return;
    setIsLoading(true);
    setIsFake(null);
    const formData = new FormData();
    formData.append("file", mediaFile);
    try {
      const response = await fetch(`${API_URL}predict`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setIsFake(data.prediction === "Deepfake");
    } catch (error) {
      console.error("Error predicting:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Deepfake Detection Tool</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Upload a <span className="font-semibold text-blue-600">video/image</span> to scan and detect deepfakes.
      </p>

      {/* Upload Box */}
      <label className="w-full max-w-4xl rounded-lg p-6 flex items-center justify-center bg-white shadow-lg border border-gray-200 cursor-pointer">
        <input type="file" accept="image/*, video/*" className="hidden" onChange={handleUpload} />
        {media ? (
          mediaType === "image" ? (
            <img src={media} alt="Preview" className={`w-full h-auto max-h-80 object-contain rounded-lg border-2 ${isFake === true ? "border-red-500" : isFake === false ? "border-green-500" : "border-gray-300"}`} />
          ) : (
            <video src={media} controls className={`w-full h-auto max-h-80 rounded-lg border-2 ${isFake === true ? "border-red-500" : isFake === false ? "border-green-500" : "border-gray-300"}`} />
          )
        ) : (
          <div className="w-full h-80 flex items-center justify-center text-gray-500">Click to Upload Image/Video</div>
        )}
      </label>

      {/* Predict Button & Result */}
      <div className="mt-4 w-full max-w-4xl flex flex-col items-center">
        <button
          onClick={handlePredict}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full"
          disabled={isLoading || isUploading || !mediaFile} // Disable while uploading
        >
          {isUploading ? "Uploading..." : isLoading ? "Analyzing..." : "Predict"}
        </button>

        {isFake !== null && !isLoading && (
          <div className={`text-lg font-bold px-4 py-2 rounded-lg mt-4 w-full text-center ${isFake ? "text-red-600 bg-red-200 border-red-400" : "text-green-600 bg-green-200 border-green-400"} border`}>
            {isFake ? "Fake Media" : "Real Media"}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
