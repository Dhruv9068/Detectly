import { useRef, useState, useEffect, useCallback } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';
import Webcam from 'react-webcam';
import Header from './Header'; // Importing Header component
import Footer from './Footer'; // Importing Footer component

const Experience = () => {
  const [model, setModel] = useState(null);
  const [detections, setDetections] = useState([]);
  const [uploadedImageDetections, setUploadedImageDetections] = useState([]);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  // Load the TensorFlow model
  useEffect(() => {
    const loadModel = async () => {
      const model = await cocoSsd.load();
      setModel(model);
    };
    loadModel();
  }, []);

  // Memoize the detectLiveFeed function to prevent unnecessary re-renders
  const detectLiveFeed = useCallback(async () => {
    if (webcamRef.current && webcamRef.current.video.readyState === 4 && model) {
      const video = webcamRef.current.video;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const predictions = await model.detect(video);
      setDetections(predictions);

      // Clear previous drawings
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw bounding boxes and labels
      predictions.forEach((prediction) => {
        const [x, y, width, height] = prediction.bbox;
        context.strokeStyle = 'red';
        context.lineWidth = 2;
        context.strokeRect(x, y, width, height);
        context.fillStyle = 'white';
        context.fillText(prediction.class, x, y > 10 ? y - 5 : y + 15);
      });

      // Throttle detection for better performance (run every 200ms)
      setTimeout(detectLiveFeed, 200);
    }
  }, [model]);

  // Detect objects in the live feed when the camera is ready
  useEffect(() => {
    if (isCameraReady && model) {
      detectLiveFeed();
    }
  }, [isCameraReady, model, detectLiveFeed]);

  // Handle image upload and object detection
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.src = url;

      img.onload = async () => {
        const result = await model.detect(img);
        setUploadedImageDetections(result);
        URL.revokeObjectURL(url); // Free up memory
      };
    }
  };

  return (
    <div className="bg-[rgb(38,38,39)] min-h-screen p-8">
      <Header /> {/* Include Header component */}
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-green-400 text-center mb-8 relative">
          Experience Object Detection with Detectly
          <span className="block w-20 h-1 mx-auto mt-2 bg-green-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></span> {/* Neon underline */}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Camera Detection Section */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg relative">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Detect Objects Using Camera
            </h2>
            <div className="relative">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="w-full h-64 rounded-lg"
                onUserMedia={() => setIsCameraReady(true)}
              />
              <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <div className="mt-4">
              <ul className="list-disc pl-5 text-white">
                {detections.map((detection, index) => (
                  <li key={index}>
                    {detection.class} - {(detection.score * 100).toFixed(2)}%
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Upload Detection Section */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Try Image Feature
            </h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-4"
              ref={fileInputRef}
            />
            <div>
              {uploadedImageDetections.length > 0 && (
                <ul className="list-disc pl-5 text-white">
                  {uploadedImageDetections.map((detection, index) => (
                    <li key={index}>
                      {detection.class} - {(detection.score * 100).toFixed(2)}%
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Include Footer component */}
    </div>
  );
};

export default Experience;
