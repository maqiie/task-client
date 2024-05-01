import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a2 2 0 012-2h10a2 2 0 012 2v5a2 2 0 01-2 2h-1v4l-2-2H8l-2 2V10H5a2 2 0 01-2-2V3zm2-1a1 1 0 00-1 1v5a1 1 0 001 1h1v5l3-3h4l3 3v-5h1a1 1 0 001-1V3a1 1 0 00-1-1H5z" clipRule="evenodd" />
          </svg>
          <span className="text-lg font-semibold text-white">Your Task App</span>
        </div>
        {/* Hamburger menu for small screens */}
        <button className="lg:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 4H3a1 1 0 00-1 1v1a1 1 0 001 1h9a1 1 0 001-1V5a1 1 0 00-1-1zM3 8h9a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1zm9 4H3a1 1 0 00-1 1v1a1 1 0 001 1h9a1 1 0 001-1v-1a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        {/* Navigation links */}
        <ul className={`lg:flex lg:space-x-4 ${isMenuOpen ? 'flex flex-col mt-4' : 'hidden'} lg:items-center lg:mt-0`}>
          <li>
            <a href="#" className="text-white hover:text-gray-200 transition duration-300 block">Home</a>
          </li>
          <li>
            <a href="/create" className="text-white hover:text-gray-200 transition duration-300 block">Tasks</a>
          </li>
          <li>
            <a href="/calendar" className="text-white hover:text-gray-200 transition duration-300 block">Calendar</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200 transition duration-300 block">Notifications</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
