
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        <Link to="/" className="flex items-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a2 2 0 012-2h10a2 2 0 012 2v5a2 2 0 01-2 2h-1v4l-2-2H8l-2 2V10H5a2 2 0 01-2-2V3zm2-1a1 1 0 00-1 1v5a1 1 0 001 1h1v5l3-3h4l3 3v-5h1a1 1 0 001-1V3a1 1 0 00-1-1H5z" clipRule="evenodd" />
          </svg>
          <span className="text-lg font-semibold">Tasker</span>
        </Link>
        <ul className="hidden lg:flex lg:space-x-4 lg:items-center">
          <li>
            <Link to="/create" className="text-white hover:text-gray-200 transition duration-300">Create</Link>
          </li>
          <li>
            <Link to="/calendar" className="text-white hover:text-gray-200 transition duration-300">Calendar</Link>
          </li>
          <li>
            <Link to="/tasks" className="text-white hover:text-gray-200 transition duration-300">Tasks</Link>
          </li>
          {/* Show profile link or logo if user is logged in */}
          {currentUser && (
            <li>
              <Link to="/profile" className="flex items-center text-white hover:text-gray-200 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM3 10a7 7 0 1114 0 7 7 0 01-14 0z" clipRule="evenodd" />
                </svg>
                Profile
              </Link>
            </li>
          )}
          {!currentUser && (
            <li>
              <Link to="/login" className="text-white hover:text-gray-200 transition duration-300">Login</Link>
            </li>
          )}
          {/* Add Logout button if user is logged in */}
          {currentUser && (
            <li>
              <button className="text-white hover:text-gray-200 transition duration-300 focus:outline-none" onClick={onLogout}>Logout</button>
            </li>
          )}
        </ul>
        <button className="lg:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 4H3a1 1 0 00-1 1v1a1 1 0 001 1h9a1 1 0 001-1V5a1 1 0 00-1-1zM3 8h9a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1zm9 4H3a1 1 0 00-1 1v1a1 1 0 001 1h9a1 1 0 001-1v-1a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="lg:hidden absolute top-12 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 rounded-md shadow-md">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link to="/create" className="text-white transition duration-300" onClick={closeMenu}>Create</Link>
              </li>
              <li>
                <Link to="/calendar" className="text-white transition duration-300" onClick={closeMenu}>Calendar</Link>
              </li>
              <li>
                <Link to="/Special" className="text-white transition duration-300" onClick={closeMenu}>Special Events</Link>
              </li>
              <li>
                <Link to="/tasks" className="text-white transition duration-300" onClick={closeMenu}>Tasks</Link>
              </li>
              {/* Show profile link or logo if user is logged in */}
              {currentUser && (
                <li>
                  <Link to="/profile" className="text-white transition duration-300" onClick={closeMenu}>Profile</Link>
                </li>
              )}
              {!currentUser && (
                <li>
                  <Link to="/login" className="text-white transition duration-300" onClick={closeMenu}>Login</Link>
                </li>
              )}
              {/* Add Logout button if user is logged in */}
              {currentUser && (
                <li>
                  <button className="text-white transition duration-300 focus:outline-none" onClick={() => { closeMenu(); onLogout(); }}>Logout</button>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
