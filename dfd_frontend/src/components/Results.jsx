import React from 'react'
import training_acc from '../images/training_acc.png';
import valid_acc from '../images/valid_acc.png';
import deepfakeimg from '../images/deepfakeimg.png'
const Results = () => {
    return (
        <>
            <div className="flex flex-col space-y-8 w-full  p-8 rounded-lg ">
                <div className="flex flex-col h-96 w-[80%] bg-white rounded-lg p-6 gap-4 mx-auto">
                    {/* Title on the top-left */}
                    <h2 className="text-xl font-bold text-gray-800">What is a Deepfake?</h2>

                    <div className="flex flex-1 gap-6">
                        {/* Left - Training Accuracy Description (60%) */}
                        <div className="w-3/5 flex flex-col space-y-3">
                            <hr className="hrr" />
                            <p className="text-gray-700">
                                <p class="text-gray-700 mt-2">
                                    A <strong>deepfake</strong> is a digitally altered <strong>image or video</strong> created using <strong>AI</strong> to make it look real.
                                    It can <strong>swap faces</strong>, <strong>change expressions</strong>, or even make someone appear to
                                    <strong>say or do things</strong> they never did. These are made using deep learning techniques,
                                    especially <strong>AI models like GANs and deep neural networks</strong>.
                                </p>
                                <p class="text-gray-700 mt-2">
                                    Deepfakes are often used in <strong>movies, social media, and advertising</strong>,
                                    but they can also be misused for <strong>fake news, scams, or misinformation</strong>. 🚀
                                </p>
                            </p>


                        </div>

                        {/* Right - Training Accuracy Graph (40%) */}
                        <div className="w-2/5 flex items-center rounded-lg bg-gray-50 p-4 -mt-4">
                            <img
                                src={deepfakeimg}
                                alt="Training Accuracy Graph"
                                className="w-full h-auto max-h-80 object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
             

                <div className="flex w-[70%] bg-white rounded-lg p-6 gap-6 mx-auto performance">
                  
                    {/* Left - Image Model Performance */}
                    <div className="shadow-lg w-1/2 flex flex-col space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-md">
                        <h2 className="text-xl font-bold text-gray-800">Image Model Performance</h2>

                        <p className="text-gray-700"><span className="font-semibold">Accuracy:</span> 78.61%</p>
                        <p className="text-gray-700"><span className="font-semibold">Precision:</span> 78.47%</p>
                        <p className="text-gray-700"><span className="font-semibold">Recall:</span> 78.42%</p>
                        <p className="text-gray-700"><span className="font-semibold">F1 Score:</span> 78.44%</p>
                    </div>

                    {/* Right - Video Model Performance */}
                    <div className="shadow-lg w-1/2 flex flex-col space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-md">
                        <h2 className="text-xl font-bold text-gray-800">Video Model Performance</h2>

                        <p className="text-gray-700"><span className="font-semibold">Accuracy:</span> 80.12%</p>
                        <p className="text-gray-700"><span className="font-semibold">Precision:</span> 79.89%</p>
                        <p className="text-gray-700"><span className="font-semibold">Recall:</span> 80.03%</p>
                        <p className="text-gray-700"><span className="font-semibold">F1 Score:</span> 79.96%</p>
                    </div>
                </div>

                {/* Training Accuracy Section */}
                <div className="flex flex-col h-96 w-[80%] bg-white rounded-lg p-6 gap-4 mx-auto">
                    {/* Title on the top-left */}
                    <h2 className="text-xl font-bold text-gray-800">Training Accuracy</h2>

                    <div className="flex flex-1 gap-6">
                        {/* Left - Training Accuracy Description (60%) */}
                        <div className="w-3/5 flex flex-col space-y-3">
                            <hr className="hrr" />
                            <p className="text-gray-700">
                                This graph reflects a well-performing deep learning model that shows consistent improvement in both training and validation accuracy over epochs.
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><span className="font-semibold">Training Accuracy:</span> Steadily increases, indicating effective learning.</li>
                                <li><span className="font-semibold">Validation Accuracy:</span> Remains consistently high, showing strong generalization.</li>
                                <li><span className="font-semibold">Accuracy Gap:</span> Minimal difference between training and validation accuracy, reducing overfitting.</li>
                            </ul>
                            <p className="text-green-600 font-semibold">
                                The model is learning effectively and achieving high accuracy, making it a promising approach for deepfake image detection! 🚀
                            </p>
                        </div>

                        {/* Right - Training Accuracy Graph (40%) */}
                        <div className="w-2/5 flex items-center rounded-lg bg-gray-50 p-4 -mt-4">
                            <img
                                src={training_acc}
                                alt="Training Accuracy Graph"
                                className="w-full h-auto max-h-80 object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col h-96 w-[80%] bg-white rounded-lg p-6 gap-4 mx-auto">
                    {/* Title on the top-left */}
                    <h2 className="text-xl font-bold text-gray-800">Validation Accuracy</h2>

                    <div className="flex flex-1 gap-6">
                        {/* Left - Training Accuracy Description (60%) */}
                        <div className="w-3/5 flex flex-col space-y-3">
                            <hr className="hrr" />
                            <p className="text-gray-700">
                                This graph showcases the effective learning process, as the loss consistently decreases over epochs, indicating improved performance.
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><span className="font-semibold">Training Loss:</span> Steadily declines, proving the model is learning effectively.</li>
                                <li><span className="font-semibold">Validation Loss:</span> Consistently decreases, demonstrating strong generalization.</li>
                                <li><span className="font-semibold">Overall Trend:</span> Both curves decline similarly, suggesting minimal overfitting.</li>
                            </ul>
                            <p className="text-green-600 font-semibold">Overall, this model exhibits effective learning and strong generalization, making it a promising solution for deepfake image detection! 🚀</p>

                        </div>

                        {/* Right - Training Accuracy Graph (40%) */}
                        <div className="w-2/5 flex items-center rounded-lg bg-gray-50 p-4 -mt-4">
                            <img
                                src={valid_acc}
                                alt="Training Accuracy Graph"
                                className="w-full h-auto max-h-80 object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Results
