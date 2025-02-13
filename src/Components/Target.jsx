import React, { useState } from 'react';
import { Camera, MapPin } from 'lucide-react';

const Target = () => {
  // Dummy data for tracked users
  const [trackedUsers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      camera: {
        status: "Active",
        lastImage: "10:30 AM",
        location: "Living Room"
      },
      location: {
        status: "Online",
        coordinates: "40.7128° N, 74.0060° W",
        lastUpdate: "2 mins ago"
      }
    },
    {
      id: 2, 
      name: "Mike Peters",
      camera: {
        status: "Inactive",
        lastImage: "Yesterday",
        location: "Front Door"
      },
      location: {
        status: "Offline",
        coordinates: "34.0522° N, 118.2437° W",
        lastUpdate: "1 hour ago"
      }
    }
  ]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Target Monitoring</h2>
          
          <div className="grid gap-6">
            {trackedUsers.map(user => (
              <div key={user.id} className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">{user.name}</h3>
                
                {/* Camera Status */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-1 backdrop-blur-xl bg-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Camera className="text-white w-5 h-5" />
                      <span className="text-white font-medium">Camera</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Status: 
                        <span className={user.camera.status === "Active" ? " text-green-400 ml-2" : " text-red-400 ml-2"}>
                          {user.camera.status}
                        </span>
                      </p>
                      <p className="text-sm text-gray-400">Last Image: {user.camera.lastImage}</p>
                      <p className="text-sm text-gray-400">Location: {user.camera.location}</p>
                    </div>
                  </div>

                  {/* Location Status */}
                  <div className="flex-1 backdrop-blur-xl bg-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="text-white w-5 h-5" />
                      <span className="text-white font-medium">Location</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Status:
                        <span className={user.location.status === "Online" ? " text-green-400 ml-2" : " text-red-400 ml-2"}>
                          {user.location.status}
                        </span>
                      </p>
                      <p className="text-sm text-gray-400">Coordinates: {user.location.coordinates}</p>
                      <p className="text-sm text-gray-400">Last Update: {user.location.lastUpdate}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Target;
