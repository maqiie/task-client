// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = ({ currentUser, onLogout }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg sticky top-0 z-10">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
//         <Link to="/" className="flex items-center text-white">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mr-2" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M3 3a2 2 0 012-2h10a2 2 0 012 2v5a2 2 0 01-2 2h-1v4l-2-2H8l-2 2V10H5a2 2 0 01-2-2V3zm2-1a1 1 0 00-1 1v5a1 1 0 001 1h1v5l3-3h4l3 3v-5h1a1 1 0 001-1V3a1 1 0 00-1-1H5z" clipRule="evenodd" />
//           </svg>
//           <span className="text-lg font-semibold">Tasker</span>
//         </Link>
//         <Link to="/friend" className="text-lg font-semibold text-white mx-4">Friends</Link> {/* New link added */}
//         <ul className="hidden lg:flex lg:space-x-4 lg:items-center">
//           <li>
//             <Link to="/create" className="text-white hover:text-gray-200 transition duration-300">Create</Link>
//           </li>
//           <li>
//             <Link to="/calendar" className="text-white hover:text-gray-200 transition duration-300">Calendar</Link>
//           </li>
//           <li>
//             <Link to="/tasks" className="text-white hover:text-gray-200 transition duration-300">Tasks</Link>
//           </li>
//           {/* Show profile link or logo if user is logged in */}
//           {currentUser && (
//             <li>
//               <Link to="/profile" className="flex items-center text-white hover:text-gray-200 transition duration-300">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-1" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                   <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM3 10a7 7 0 1114 0 7 7 0 01-14 0z" clipRule="evenodd" />
//                 </svg>
//                 Profile
//               </Link>
//             </li>
//           )}
//           {!currentUser && (
//             <li>
//               <Link to="/login" className="text-white hover:text-gray-200 transition duration-300">Login</Link>
//             </li>
//           )}
//           {/* Add Logout button if user is logged in */}
//           {currentUser && (
//             <li>
//               <button className="text-white hover:text-gray-200 transition duration-300 focus:outline-none" onClick={onLogout}>Logout</button>
//             </li>
//           )}
//         </ul>
//         <button className="lg:hidden text-white focus:outline-none" onClick={toggleMenu}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M12 4H3a1 1 0 00-1 1v1a1 1 0 001 1h9a1 1 0 001-1V5a1 1 0 00-1-1zM3 8h9a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1zm9 4H3a1 1 0 00-1 1v1a1 1 0 001 1h9a1 1 0 001-1v-1a1 1 0 00-1-1z" clipRule="evenodd" />
//           </svg>
//         </button>
//         {isMenuOpen && (
//           <div className="lg:hidden absolute top-12 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 rounded-md shadow-md">
//             <ul className="flex flex-col space-y-2">
//               <li>
//                 <Link to="/create" className="text-white transition duration-300" onClick={closeMenu}>Create</Link>
//               </li>
//               <li>
//                 <Link to="/calendar" className="text-white transition duration-300" onClick={closeMenu}>Calendar</Link>
//               </li>
//               <li>
//                 <Link to="/Special" className="text-white transition duration-300" onClick={closeMenu}>Special Events</Link>
//               </li>
//               <li>
//                 <Link to="/tasks" className="text-white transition duration-300" onClick={closeMenu}>Tasks</Link>
//               </li>
//               {/* Show profile link or logo if user is logged in */}
//               {currentUser && (
//                 <li>
//                   <Link to="/profile" className="text-white transition duration-300" onClick={closeMenu}>Profile</Link>
//                 </li>
//               )}
//               {!currentUser && (
//                 <li>
//                   <Link to="/login" className="text-white transition duration-300" onClick={closeMenu}>Login</Link>
//                 </li>
//               )}
//               {/* Add Logout button if user is logged in */}
//               {currentUser && (
//                 <li>
//                   <button className="text-white transition duration-300 focus:outline-none" onClick={() => { closeMenu(); onLogout(); }}>Logout</button>
//                 </li>
//               )}
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.jsx

// BottomNavbar.jsx

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ currentUser, onLogout }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     // <!-- component -->
//     <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex left-0 mx-auto justify-between bg-blue-600 w-11/12 rounded-3xl">
//       <a
//         aria-current="page"
//         class="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white flex-grow"
//         href="#"
//       >
//         <svg
//           class="w-7 h-7"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
//         </svg>
//         <span class="sr-only">Home</span>
//       </a>
//       <a
//         class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
//         href="#"
//       >
//         <svg
//           class="w-7 h-7"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill-rule="evenodd"
//             d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
//             clip-rule="evenodd"
//           ></path>
//         </svg>
//       </a>
//       <span class="sr-only">Upload</span>
//       <button class="relative inline-flex flex-col items-center text-xs font-medium text-white py-3 px-6 flex-grow">
//         <div class="absolute bottom-5 p-3 rounded-full border-4 border-white bg-blue-600">
//           <svg
//             class="w-8 h-8"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//         </div>
//         <span class="sr-only">Chat</span>
//       </button>
//       <a
//         class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
//         href="#"
//       >
//         <svg
//           class="w-7 h-7"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill-rule="evenodd"
//             d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//             clip-rule="evenodd"
//           ></path>
//         </svg>
//         <span class="sr-only">Search</span>
//       </a>
//       <a
//         class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
//         href="#"
//       >
//         <svg
//           class="w-7 h-7"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill-rule="evenodd"
//             d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
//             clip-rule="evenodd"
//           ></path>
//         </svg>
//         <span class="sr-only">Profile</span>
//       </a>
//     </div>
//   );
// };

// export default Navbar;
// Navbar.jsx

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ currentUser, onLogout }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex left-0 mx-auto justify-between bg-purple-600 w-11/12 rounded-3xl">
//       <Link
//         to="/"
//         className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white flex-grow"
//       >
//         <svg
//           className="w-7 h-7"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
//         </svg>
//         <span className="sr-only">Home</span>
//       </Link>
//       <Link
//         to="/create"
//         className="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
//       >
//         <svg
//           className="w-7 h-7"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
//             clipRule="evenodd"
//           ></path>
//         </svg>
//         <span className="sr-only">Upload</span>
//       </Link>
//       <link
//        to="/tasks">
//       <button
//         className="relative inline-flex flex-col items-center text-xs font-medium text-white py-3 px-6 flex-grow"
//       >
//         <div className="absolute bottom-5 p-3 rounded-full border-4 border-white bg-blue-600">
//           <svg
//             className="w-8 h-8"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </div>
//         <span className="sr-only">Chat</span>
//       </button>
//       </link>

//       <Link
//         to="/friends"
//         className="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
//       >
//         <svg
//           className="w-7 h-7"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//             clipRule="evenodd"
//           ></path>
//         </svg>
//         <span className="sr-only">Search</span>
//       </Link>
//       <Link
//         to="/profile"
//         className="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
//       >
//         <svg
//           className="w-7 h-7"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
//             clipRule="evenodd"
//           ></path>
//         </svg>
//         <span className="sr-only">Profile</span>
//       </Link>
//     </div>
//   );
// };

// export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ currentUser, onLogout }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex left-0 mx-auto justify-between bg-purple-600 w-11/12 rounded-3xl">
//       <div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
//         <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
//           <button
//             data-tooltip-target="tooltip-home"
//             type="button"
//             class="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
//           >
//             <svg
//               class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
//             </svg>
//             <span class="sr-only">Home</span>
//           </button>
//           <div
//             id="tooltip-home"
//             role="tooltip"
//             class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
//           >
//             Home
//             <div class="tooltip-arrow" data-popper-arrow></div>
//           </div>
//           <button
//             data-tooltip-target="tooltip-wallet"
//             type="button"
//             class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
//           >
//             <svg
//               class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
//               <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
//             </svg>
//             <span class="sr-only">Wallet</span>
//           </button>
//           <div
//             id="tooltip-wallet"
//             role="tooltip"
//             class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
//           >
//             Wallet
//             <div class="tooltip-arrow" data-popper-arrow></div>
//           </div>
//           <div class="flex items-center justify-center">
//             <button
//               data-tooltip-target="tooltip-new"
//               type="button"
//               class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
//             >
//               <svg
//                 class="w-4 h-4 text-white"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 18 18"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M9 1v16M1 9h16"
//                 />
//               </svg>
//               <span class="sr-only">New item</span>
//             </button>
//           </div>
//           <div
//             id="tooltip-new"
//             role="tooltip"
//             class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
//           >
//             Create new item
//             <div class="tooltip-arrow" data-popper-arrow></div>
//           </div>
//           <button
//             data-tooltip-target="tooltip-settings"
//             type="button"
//             class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
//           >
//             <svg
//               class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
//               />
//             </svg>
//             <span class="sr-only">Settings</span>
//           </button>
//           <div
//             id="tooltip-settings"
//             role="tooltip"
//             class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
//           >
//             Settings
//             <div class="tooltip-arrow" data-popper-arrow></div>
//           </div>
//           <button
//             data-tooltip-target="tooltip-profile"
//             type="button"
//             class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
//           >
//             <svg
//               class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
//             </svg>
//             <span class="sr-only">Profile</span>
//           </button>
//           <div
//             id="tooltip-profile"
//             role="tooltip"
//             class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
//           >
//             Profile
//             <div class="tooltip-arrow" data-popper-arrow></div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex left-0 mx-auto justify-between bg-purple-600 w-11/12 rounded-3xl">
      <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          <button
            data-tooltip-target="tooltip-home"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="sr-only">Home</span>
          </button>
          <div
            id="tooltip-home"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-wallet"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
              <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
            </svg>
            <span className="sr-only">Wallet</span>
          </button>
          <div
            id="tooltip-wallet"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Wallet
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <div className="flex items-center justify-center">
            <button
              data-tooltip-target="tooltip-new"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
              <span className="sr-only">New item</span>
            </button>
          </div>
          <div
            id="tooltip-new"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Create new item
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-settings"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
              />
            </svg>
            <span className="sr-only">Settings</span>
          </button>
          <div
            id="tooltip-settings"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Settings
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-profile"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <span className="sr-only">Profile</span>
          </button>
          <div
            id="tooltip-profile"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Profile
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
