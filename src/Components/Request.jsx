import React, { useState } from 'react';
import { UserPlus, X, Check } from 'lucide-react';

const Request = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      relationship: "Family Member",
      time: "2 hours ago",
      slot: "10:00 hrs"
    },
    {
      id: 2, 
      name: "Mike Peters",
      relationship: "Friend",
      time: "5 hours ago",
      slot: "09:00 hrs"
    },
    {
      id: 3,
      name: "Emma Wilson",
      relationship: "Family Member", 
      time: "1 day ago",
      slot: "02:00 hrs"
    }
  ]);

  const handleAccept = (id) => {
    setRequests(requests.filter(request => request.id !== id));
    // Add logic to handle acceptance
  };

  const handleReject = (id) => {
    setRequests(requests.filter(request => request.id !== id));
    // Add logic to handle rejection
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
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Location Access Requests</h2>

        <div className="max-w-2xl mx-auto">
          {requests.map((request) => (
            <div 
              key={request.id}
              className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 mb-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <UserPlus className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{request.name}</h3>
                    <p className="text-gray-400">{request.relationship}</p>
                    <p className="text-sm text-gray-500">{request.time}</p>
                    <p className="text-sm text-white">slot : {request.slot}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAccept(request.id)}
                    className="p-2 rounded-full bg-green-500/20 hover:bg-green-500/30 transition-colors"
                  >
                    <Check className="text-green-500 w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleReject(request.id)}
                    className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 transition-colors"
                  >
                    <X className="text-red-500 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {requests.length === 0 && (
            <div className="text-center text-gray-400 py-8">
              No pending requests
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Request;
