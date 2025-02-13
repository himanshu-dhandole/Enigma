import React, { useState, useEffect, useRef } from 'react';
import { Camera, MapPin } from 'lucide-react';
import map from '../assets/map.png';
const TargetCamLoc = () => {
  const [stars, setStars] = useState(() => {
    // Generate 100 random stars on initial load
    const initialStars = [];
    for (let i = 0; i < 100; i++) {
      initialStars.push({
        id: i,
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 3 + 1}px`, // Random size
          height: `${Math.random() * 3 + 1}px`, // Random size
          opacity: Math.random() // Random opacity
        },
      });
    }
    return initialStars;
  });

  const position = [51.505, -0.09]; // Example coordinates
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [stream, setStream] = useState(null); // State for camera stream
  const videoRef = useRef(null); // Ref for the video element

  useEffect(() => {
    const updateInterval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(updateInterval);
  }, []);

  useEffect(() => {
    // Access the camera
    const getCameraStream = async () => {
      try {
        const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(newStream);
        if (videoRef.current) {
          videoRef.current.srcObject = newStream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    getCameraStream();

    return () => {
      // Clean up the camera stream when the component unmounts
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);


  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              ...star.style,
              backgroundColor: 'white', // Ensure white color
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Real-time Tracking</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Camera Feed */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="text-white h-full" />
              <h3 className="text-xl font-semibold text-white">Live Camera</h3>
            </div>
            <div className="rounded-xl overflow-hidden">
              {stream ? (
                <video ref={videoRef} autoPlay className="w-full h-64 object-cover"></video>
              ) : (
                <div className="w-full h-64 bg-gray-800 flex items-center justify-center text-white">
                  Camera feed not available
                </div>
              )}
            </div>
          </div>

          {/* Location Map */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-white w-6 h-6" />
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden">
              <img
                src={map}
                alt="Map Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-gray-400">
              <p>Coordinates: {position[0]}° N, {position[1]}° W</p>
              <p>Last Updated: {lastUpdated.toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetCamLoc;
