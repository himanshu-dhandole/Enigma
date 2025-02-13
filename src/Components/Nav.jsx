import React from 'react';
function Nav() {
  return (
    <nav className="fixed w-full z-50">
    <div className="backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-white">
            ENIGMA
          </div>
          <div className="flex space-x-8">
            <a
              href="#jobs"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Track
            </a>
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Share
            </a>
            <a
              href="#culture"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Logs
            </a>
            <a
              href="#benefits"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Benefits
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Nav;
