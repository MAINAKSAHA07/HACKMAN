import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, CheckCircle, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const ImageCapture = () => {
  const navigate = useNavigate();
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [currentAngle, setCurrentAngle] = useState('front');

  const angles = [
    { id: 'front', label: 'Front View' },
    { id: 'left', label: 'Left Profile' },
    { id: 'right', label: 'Right Profile' },
    { id: 'up', label: 'Upward Angle' },
  ];

  const handleCapture = () => {
    // Simulate capturing an image
    const newImage = `simulated-image-${currentAngle}.png`;
    setCapturedImages([...capturedImages, newImage]);

    const nextAngleIndex = angles.findIndex(angle => angle.id === currentAngle) + 1;
    if (nextAngleIndex < angles.length) {
      setCurrentAngle(angles[nextAngleIndex].id);
    } else {
      // All images captured
      setTimeout(() => navigate('/dashboard'), 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card max-w-2xl w-full space-y-8">
        <div className="text-center">
          <Camera className="mx-auto h-12 w-12 text-cyan-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">Face Capture</h2>
          <p className="mt-2 text-gray-400">
            Let's capture your face from different angles
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {angles.map((angle, index) => (
            <div
              key={angle.id}
              className={`relative aspect-square rounded-lg overflow-hidden
                ${capturedImages.length > index ? 'bg-gray-700' : 'bg-gray-800'}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {capturedImages.length > index ? (
                  <CheckCircle className="h-8 w-8 text-green-400" />
                ) : (
                  <Camera className="h-8 w-8 text-gray-500" />
                )}
              </div>
              <p className="absolute bottom-2 inset-x-0 text-center text-sm text-gray-400">
                {angle.label}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {capturedImages.length < angles.length ? (
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="h-12 w-12 text-gray-500" />
                <p className="absolute bottom-4 text-gray-400">
                  Position your face for {angles.find(angle => angle.id === currentAngle)?.label}
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="text-center text-green-400">
              <CheckCircle className="mx-auto h-12 w-12 mb-2" />
              <p>All angles captured successfully!</p>
            </div>
          )}

          {capturedImages.length < angles.length ? (
            <button
              onClick={handleCapture}
              className="btn-primary w-full"
            >
              Capture {angles.find(angle => angle.id === currentAngle)?.label}
            </button>
          ) : (
            <button
              onClick={() => navigate('/dashboard')}
              className="btn-primary w-full"
            >
              Continue to Dashboard
            </button>
          )}

          {capturedImages.length > 0 && capturedImages.length < angles.length && (
            <button
              onClick={() => {
                setCapturedImages([]);
                setCurrentAngle('front');
              }}
              className="btn-secondary w-full flex items-center justify-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Start Over
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCapture;