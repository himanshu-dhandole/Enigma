import React, { useState } from 'react';
import { Monitor, Smartphone, Laptop, X } from 'lucide-react';

const ActiveSessions = () => {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      deviceName: "MacBook Pro",
      location: "San Francisco, CA",
      lastActive: "Active now",
      deviceType: "laptop",
      ipAddress: "192.168.1.105"
    },
    {
      id: 2,
      deviceName: "iPhone 13",
      location: "New York, NY",
      lastActive: "2 minutes ago",
      deviceType: "mobile",
      ipAddress: "192.168.1.106"
    },
    {
      id: 3,
      deviceName: "Desktop PC",
      location: "Chicago, IL",
      lastActive: "5 minutes ago",
      deviceType: "desktop",
      ipAddress: "192.168.1.107"
    }
  ]);

  const getDeviceIcon = (deviceType) => {
    switch(deviceType) {
      case 'mobile':
        return <Smartphone className="w-6 h-6" />;
      case 'laptop':
        return <Laptop className="w-6 h-6" />;
      default:
        return <Monitor className="w-6 h-6" />;
    }
  };

  const handleTerminate = (id) => {
    setSessions(sessions.filter(session => session.id !== id));
    // Add logic to terminate session
  };

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

      <div className="relative z-10 container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Active Sessions</h2>

        <div className="max-w-2xl mx-auto">
          {sessions.map((session) => (
            <div 
              key={session.id}
              className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 mb-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                    {getDeviceIcon(session.deviceType)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{session.deviceName}</h3>
                    <p className="text-gray-400">{session.location}</p>
                    <div className="flex gap-4">
                      <p className="text-sm text-gray-500">{session.lastActive}</p>
                      <p className="text-sm text-gray-500">{session.ipAddress}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleTerminate(session.id)}
                  className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 transition-colors"
                  title="Terminate Session"
                >
                  <X className="text-red-500 w-5 h-5" />
                </button>
              </div>
            </div>
          ))}

          {sessions.length === 0 && (
            <div className="text-center text-gray-400 py-8">
              No active sessions
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveSessions;