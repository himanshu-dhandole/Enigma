import React, { useState } from 'react';
import { Search } from 'lucide-react';

const TrackingList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Example tracked users data
  const trackedUsers = [
    { id: 1, name: "Sarah Johnson", status: "Active", lastSeen: "2 mins ago", location: "Central Park, NY" },
    { id: 2, name: "Mike Peters", status: "Inactive", lastSeen: "1 hour ago", location: "Times Square, NY" },
    { id: 3, name: "Emma Wilson", status: "Active", lastSeen: "Just now", location: "Brooklyn Bridge, NY" },
    { id: 4, name: "James Smith", status: "Active", lastSeen: "5 mins ago", location: "Battery Park, NY" },
  ];

  const filteredUsers = trackedUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-black overflow-hidden pt-20">
      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-white/50" />
            <input
              type="text"
              placeholder="Search tracked users..."
              className="w-full bg-white/5 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Users List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          {filteredUsers.map(user => (
            <div 
              key={user.id}
              className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{user.name}</h3>
                  <p className="text-gray-400 mt-1">{user.location}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    user.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {user.status}
                  </span>
                  <p className="text-gray-400 mt-1 text-sm">{user.lastSeen}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background stars (matching Hero component) */}
      <div className="absolute inset-0 -z-10">
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
    </div>
  );
};

export default TrackingList;
