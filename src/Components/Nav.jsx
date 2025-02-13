import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="fixed w-full z-50">
      <div className="backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold text-white">
              ENIGMA
            </Link>
            <div className="flex space-x-8">
              <Link
                to="/"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/tracking"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Track
              </Link>
              <Link
                to="/target" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                Share
              </Link>
              <Link
                to="/sessions"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Sessions
              </Link>
              <Link
                to="/requests"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Requests
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
