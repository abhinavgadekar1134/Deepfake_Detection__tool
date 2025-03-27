import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [media, setMedia] = useState(null); // Store media preview URL
  const [mediaFile, setMediaFile] = useState(null); // Store actual file object
  const [mediaType, setMediaType] = useState(null); // Track media type (image or video)
  const [isFake, setIsFake] = useState(null); // Store prediction result (fake or real)
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const API_URL = process.env.REACT_APP_API_URL;

  // Function to handle media upload
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsFake(null); // Reset previous results
      setIsLoading(false); // Reset loading state
      setMediaFile(file); // Store the actual file object
      setMedia(URL.createObjectURL(file)); // Generate preview URL
      setMediaType(file.type.split("/")[0]); // Determine media type (image/video)
    }
  };

  // Function to handle prediction (fake or real)
  const handlePredict = async () => {
    if (!mediaFile) {
      console.error("No media file selected.");
      return;
    }

    setIsLoading(true); // Show loader
    setIsFake(null); // Reset previous result

    const formData = new FormData();
    formData.append("file", mediaFile); // Use stored file object

    try {
      const response = await fetch(`${API_URL}predict`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Prediction Response:", data);

      setIsFake(data.prediction === "Deepfake"); // Set result based on response
    } catch (error) {
      console.error("Error predicting:", error);
    } finally {
      setIsLoading(false); // Hide loader after response
    }
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-4 tracking-wide">
        <span className="bg-gradient-to-r from-gray-900 to-gray-900 text-transparent bg-clip-text">
          Deepfake Detection Tool
        </span>
      </h1>

      {/* Scan & Detect Section */}
      <p className="text-lg text-gray-700 text-center mb-6">
        Upload a <span className="font-semibold text-blue-600">video/image</span> to scan and detect deepfakes.
      </p>

      {/* Main Content Box */}
      <div className="w-full max-w-4xl rounded-lg p-6 flex flex-col lg:flex-row bg-white shadow-lg border border-gray-200">
        {/* Left Side - Preview Media */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 mb-4 lg:mb-0">
          {media ? (
            mediaType === "image" ? (
              <img
                src={media}
                alt="Preview"
                className={`w-full h-auto max-h-80 object-contain rounded-lg border-2 filesss ${isFake === true ? "border-red-500" : isFake === false ? "border-green-500" : "border-gray-300"}`}
              />
            ) : (
              <video
                src={media}
                controls
                autoPlay
                playsInline
                className={`w-full h-auto max-h-80 rounded-lg border-2 filesss ${isFake === true ? "border-red-500" : isFake === false ? "border-green-500" : "border-gray-300"}`}
              />
            )
          ) : (
            <div className="w-full h-80 flex items-center justify-center bg-gray-200 text-gray-500 rounded-lg filesss">
              No File Selected
            </div>
          )}
        </div>

        {/* Right Side - Upload & Predict */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center space-y-4 p-4">
          <input
            type="file"
            accept="image/*, video/*"
            onChange={handleUpload}
            className="p-2 border rounded-md w-full text-gray-700"
          />

          <button
            onClick={handlePredict}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? "Analyzing..." : "Predict"}
          </button>

          {/* Loader */}
          {isLoading && (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
            </div>
          )}

          {/* Deepfake Result */}
          {isFake !== null && !isLoading && (
            <div
              className={`text-lg font-bold px-4 py-2 rounded-lg w-full text-center ${isFake ? "text-red-600 bg-red-200 border-red-400" : "text-green-600 bg-green-200 border-green-400"
                } border`}
            >
              {isFake ? "Fake Media" : "Real Media"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
