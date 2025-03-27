import React from 'react';
import training_acc from '../images/training_acc.png';
import valid_acc from '../images/valid_acc.png';
import deepfakeimg from '../images/deepfakeimg.png';

const Results = () => {
    return (
        <div className="flex flex-col space-y-8 w-full p-4 md:p-8 bg-gray-100">
            {/* What is a Deepfake? Section */}
            <div className="w-full md:w-4/5 mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-3/5">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">What is a Deepfake?</h2>
                    <p className="text-gray-700">
                        A <strong>deepfake</strong> is a digitally altered <strong>image or video</strong> created using
                        <strong> AI</strong> to make it look real. It can <strong>swap faces</strong>, <strong>change expressions</strong>,
                        or even make someone appear to <strong>say or do things</strong> they never did.
                    </p>
                    <p className="text-gray-700 mt-3">
                        While deepfakes are used in <strong>movies, social media, and advertising</strong>, they can also be misused for
                        <strong> fake news, scams, or misinformation</strong>. 🚀
                    </p>
                </div>
                <div className="w-full md:w-2/5 flex items-center justify-center">
                    <img src={deepfakeimg} alt="Deepfake Example" className="w-full h-auto max-h-80 object-contain rounded-lg" />
                </div>
            </div>

            {/* Model Performance Section */}
            <div className="w-full md:w-4/5 mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-md">
                    <h2 className="text-xl font-bold text-gray-800">Image Model Performance</h2>
                    <p className="text-gray-700"><span className="font-semibold">Accuracy:</span> 78.61%</p>
                    <p className="text-gray-700"><span className="font-semibold">Precision:</span> 78.47%</p>
                    <p className="text-gray-700"><span className="font-semibold">Recall:</span> 78.42%</p>
                    <p className="text-gray-700"><span className="font-semibold">F1 Score:</span> 78.44%</p>
                </div>
                <div className="w-full md:w-1/2 bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-md">
                    <h2 className="text-xl font-bold text-gray-800">Video Model Performance</h2>
                    <p className="text-gray-700"><span className="font-semibold">Accuracy:</span> 80.12%</p>
                    <p className="text-gray-700"><span className="font-semibold">Precision:</span> 79.89%</p>
                    <p className="text-gray-700"><span className="font-semibold">Recall:</span> 80.03%</p>
                    <p className="text-gray-700"><span className="font-semibold">F1 Score:</span> 79.96%</p>
                </div>
            </div>

            {/* Training Accuracy Section */}
            <div className="w-full md:w-4/5 mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-3/5">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Training Accuracy</h2>
                    <p className="text-gray-700">
                        This graph reflects a well-performing deep learning model that shows consistent improvement in both training and validation accuracy over epochs.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
                        <li><span className="font-semibold">Training Accuracy:</span> Steadily increases, indicating effective learning.</li>
                        <li><span className="font-semibold">Validation Accuracy:</span> Remains consistently high, showing strong generalization.</li>
                        <li><span className="font-semibold">Accuracy Gap:</span> Minimal difference between training and validation accuracy, reducing overfitting.</li>
                    </ul>
                </div>
                <div className="w-full md:w-2/5 flex items-center justify-center">
                    <img src={training_acc} alt="Training Accuracy Graph" className="w-full h-auto max-h-80 object-contain rounded-lg" />
                </div>
            </div>

            {/* Validation Accuracy Section */}
            <div className="w-full md:w-4/5 mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-3/5">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Validation Accuracy</h2>
                    <p className="text-gray-700">
                        This graph showcases the effective learning process, as the loss consistently decreases over epochs, indicating improved performance.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
                        <li><span className="font-semibold">Training Loss:</span> Steadily declines, proving the model is learning effectively.</li>
                        <li><span className="font-semibold">Validation Loss:</span> Consistently decreases, demonstrating strong generalization.</li>
                        <li><span className="font-semibold">Overall Trend:</span> Both curves decline similarly, suggesting minimal overfitting.</li>
                    </ul>
                </div>
                <div className="w-full md:w-2/5 flex items-center justify-center">
                    <img src={valid_acc} alt="Validation Accuracy Graph" className="w-full h-auto max-h-80 object-contain rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Results;