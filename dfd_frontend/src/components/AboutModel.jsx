import React from "react";
import model from "../images/model.mp4";

const AboutModel = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
        {/* Section 1: How Our Model Helps */}
        <div className="w-full md:w-4/5 mt-10 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left - Model Description */}
          <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-gray-900">
            <video
              src={model}
              controls
              autoPlay
              loop
              playsInline
              className="w-full h-auto max-h-80 rounded-lg border-4 border-gray-500 shadow-md"
            />
          </div>
          
          {/* Right - Deepfake Detection Explanation */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              How Our Model Detects Deepfakes
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our AI model analyzes patterns in images and videos, detecting subtle inconsistencies that indicate manipulation. This helps users verify content authenticity.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              With advanced machine learning techniques, we aim to combat misinformation and enhance digital security.
            </p>
          </div>
        </div>

        {/* Section 2: Deepfake Misinformation */}
        <div className="w-full md:w-4/5 mt-10 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left - Deepfake Video Samples */}
          <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-gray-900">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/pkF3m5wVUYI?si=iao-94eh0bQMcXH-"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg border-4 border-gray-500 shadow-md"
            ></iframe>
          </div>

          {/* Right - Explanation of Deepfake Misinformation */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              The Threat of Deepfake Misinformation
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Deepfakes use AI to create hyper-realistic fake videos and images. These manipulations are often used to spread misinformation, impersonate individuals, and influence public opinion.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This technology can be dangerous in politics, media, and cybersecurity, making it crucial to have reliable detection tools.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutModel;
