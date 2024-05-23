// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import SpecialEvents from "./SpecialEvents";
// import axios from 'axios';

// const Home = () => {
//   // Get the current date
//   const currentDate = new Date();
//   const currentDay = currentDate.getDate();
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [task, setTask] = useState(null);
//   const userName = "User";
//   // Initialize selected day with the current day
//   const [selectedDay, setSelectedDay] = useState(currentDate);
//   const [specialEvents, setSpecialEvents] = useState([]);

//   // Generate days of the month
//   const daysInMonth = new Date(
//     currentDate.getFullYear(),
//     currentDate.getMonth() + 1,
//     0
//   ).getDate();
//   const daysArray = Array.from(
//     { length: daysInMonth },
//     (_, index) => index + 1
//   );

//   // Placeholder for current task
//   const currentTask = "Review project proposal";

//   //// Tasks for each day (dummy data for demonstration)
//   // Tasks for each day (dummy data for demonstration)
//   const tasks = {
//     1: ["Task 1", "Task 2"],
//     2: ["Task 3", "Task 4"],
//     12: ["Task for 12 May 2024"], // Task for the 12th of May 2024
//     // Add more tasks for each day as needed
//   };

//   const handleTaskClick = (task) => {
//     setSelectedTask(task);
//   };

//   const handleCloseDetails = () => {
//     setSelectedTask(null);
//   };
//   // Function to handle "Details" button click
//   const handleDetailsClick = (task) => {
//     setSelectedTask(task);
//     setShowPopup(true);
//   };
//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   // Function to handle "Delete" button click
//   const handleDeleteClick = () => {
//     // Implement delete task functionality here
//     // For now, let's just close the pop-up
//     setShowPopup(false);
//     setSelectedTask(null);
//   };
//   // Handle click on a day
//   const handleClickDay = (day) => {
//     setSelectedDay(day);
//   };
//   // Function to add a special event
//   const addSpecialEvent = (date, name) => {
//     const newEvent = { date, name };
//     setSpecialEvents([...specialEvents, newEvent]);
//     setTask("");
//   };
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
//       <div className="w-full px-4 py-8 bg-white rounded-lg shadow-lg mb-8">
//         {/* Container for current task */}
//         <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-4">
//           <h2 className="text-lg font-semibold mb-2">Current Task</h2>
//           <div className="flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-10 w-10 text-yellow-400 mr-2"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <circle
//                 cx="10"
//                 cy="10"
//                 r="7"
//                 className="fill-current text-green-400"
//               />
//             </svg>
//             <div className="flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-200">
//                 Review project proposal
//               </h3>
//               <div className="flex items-center mt-1">
//                 <p className="text-xs text-gray-300 mr-4">
//                   Due: <span className="text-gray-200">May 1, 2024</span>
//                 </p>
//                 <p className="text-xs text-gray-300">
//                   Priority: <span className="text-gray-200">High</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-gray-800">
//           Welcome, {userName}!
//         </h1>

//         <p className="text-gray-600 text-lg md:text-xl mb-8 text-center">
//           Stay organized and boost your productivity!
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <Link to="/create">
//             <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300 block w-full">
//               Create Task
//             </button>
//           </Link>
//           <Link to="/tasks">
//             <button className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition duration-300 block w-full">
//               View Tasks
//             </button>
//           </Link>
//         </div>
//         {/* Task list */}
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4 text-center">
//             Upcoming Tasks
//           </h2>
//           <ul className="divide-y divide-gray-200">
//             {/* Task items */}
//             {Object.keys(tasks).map((day) =>
//               tasks[day].map((task, index) => (
//                 <li key={index} className="py-2 flex items-center">
//                   <div className="flex flex-col">
//                     <h3 className="text-lg font-semibold">{task}</h3>
//                     <p className="text-gray-500 text-sm">Due: 04/30/2024</p>
//                   </div>
//                   <button
//                     onClick={() => handleDetailsClick(task)}
//                     className="ml-auto bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300"
//                   >
//                     Details
//                   </button>
//                 </li>
//               ))
//             )}
//             {/* Add more tasks as needed */}
//           </ul>

//           {/* Popup for task details */}
//           {showPopup && selectedTask && (
//             <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
//               <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>
//               <div className="bg-white rounded-lg p-8 w-96 relative z-10">
//                 <h3 className="text-lg font-semibold mb-4">
//                   {selectedTask.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm mb-2">
//                   Due: {selectedTask.dueDate}
//                 </p>
//                 <p className="text-gray-500 text-sm mb-2">
//                   Time: {selectedTask.time}
//                 </p>
//                 <p className="text-gray-500 text-sm mb-4">
//                   Location: {selectedTask.location}
//                 </p>
//                 <p className="text-gray-700 mb-4">{selectedTask.description}</p>
//                 {/* Additional details */}
//                 <div className="flex justify-between">
//                   {/* Icons for actions */}
//                   <div className="flex items-center">
//                     <svg
//                       onClick={handleClosePopup}
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-700 mr-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                     <span className="text-gray-500 text-sm">Close</span>
//                   </div>
//                   <div className="flex items-center">
//                     <svg
//                       onClick={handleDeleteClick}
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 cursor-pointer text-red-500 hover:text-red-700 mr-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                     <span className="text-red-500 text-sm">Delete</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

// <div className="mt-8">
//   {/* Calendar */}
//   <div className="mt-8">
//     <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
//       Calendar
//     </h2>
//     {/* Calendar */}
//     <div className="bg-white rounded-lg p-4 shadow-md">
//       <Calendar
//         onChange={setSelectedDay}
//         value={selectedDay}
//         className="w-full border border-gray-200"
//         tileClassName={({ date, view }) =>
//           view === "month" && date.getDate() === selectedDay
//             ? "bg-purple-500 text-white rounded-full" // Highlight the current date
//             : ""
//         }
//         tileContent={({ date, view }) =>
//           view === "month" && date.getDate() === selectedDay ? (
//             <span className="text-lg font-bold">{date.getDate()}</span>
//           ) : null
//         }
//       />
//     </div>
//   </div>

//   {/* Display tasks for the selected day */}
//   {tasks[selectedDay] ? (
//     <div className="mt-4">
//       <h2 className="text-xl font-semibold mb-4">
//         Tasks for{" "}
//         {currentDate.toLocaleDateString("en-US", {
//           month: "numeric",
//           day: "numeric",
//           year: "numeric",
//         })}
//       </h2>
//       <ul className="space-y-4">
//         {/* Display tasks for the selected day */}
//         {tasks[selectedDay].map((task, index) => (
//           <li
//             key={index}
//             className={`flex items-center justify-between rounded-lg px-4 py-3 ${
//               selectedDay === currentDay ? "bg-blue-100" : "bg-gray-100"
//             } shadow-md hover:shadow-lg`}
//           >
//             <span
//               className={`${
//                 selectedDay === currentDay
//                   ? "text-blue-600"
//                   : "text-gray-700"
//               } font-semibold`}
//             >
//               {task}
//             </span>
//             <span className="text-gray-500 text-xs">
//               Due:{" "}
//               {currentDate.toLocaleDateString("en-US", {
//                 month: "numeric",
//                 day: "numeric",
//                 year: "numeric",
//               })}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   ) : (
//     <div className="mt-4 text-center text-gray-500">
//       No tasks available for the selected day.
//       <Link to="/create">
//         <button className="ml-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300">
//           Create Task
//         </button>
//       </Link>
//     </div>
//   )}
// </div>
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">Special Events</h2>
//           <ul className="space-y-4">
//             {specialEvents.map((event, index) => (
//               <li key={index} className="flex items-center">
//                 <span className="text-lg font-semibold">{event.name}</span>
//                 <span className="text-gray-500 text-sm ml-2">
//                   {event.date.toLocaleDateString("en-US", {
//                     month: "long",
//                     day: "numeric",
//                     year: "numeric",
//                   })}
//                 </span>
//               </li>
//             ))}
//           </ul>
//           {/* Form to add special event */}
//           <div className="mt-4">
//             <input
//               type="text"
//               placeholder="Event Name"
//               className="border border-gray-300 px-3 py-2 rounded-md mr-2"
//               onChange={(e) => setTask(e.target.value)}
//             />
//             <button
//               className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300"
//               onClick={() => addSpecialEvent(selectedDay, task)}
//             >
//               Add Event
//             </button>
//           </div>
//         </div>
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">Notifications</h2>
//           {/* Notifications */}
//           <ul className="space-y-2">
//             <li className="flex items-center bg-blue-100 rounded-lg px-4 py-2">
//               <span className="text-blue-600">
//                 You have a new task due today!
//               </span>
//             </li>
//             {/* Add more notifications as needed */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import axios from "axios";
// import "./Home.css";

// const Home = ({ currentUser }) => {
//   const currentDate = new Date();
//   const currentDay = currentDate.getDate();
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState(null);
//   const [selectedDay, setSelectedDay] = useState(currentDate);
//   const [specialEvents, setSpecialEvents] = useState([]);

//   useEffect(() => {
//     // Fetch tasks from the API
//     const fetchTasks = async () => {
//       const authToken = localStorage.getItem("authToken");
//       try {
//         const response = await axios.get("http://localhost:3001/reminders", {
//           headers: {
//             Authorization: `Bearer ${authToken}`, // Include the auth token in the request headers
//             Accept: "application/json", // Specify that you expect JSON data
//           },
//         }); // Adjust the endpoint based on your API
//         setTasks(response.data); // Assuming the API response is an array of tasks
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//       }
//     };

//     fetchTasks();
//   }, []);

//   const handleTaskClick = (task) => {
//     setSelectedTask(task);
//   };

//   const handleCloseDetails = () => {
//     setSelectedTask(null);
//   };

//   const handleDetailsClick = (task) => {
//     setSelectedTask(task);
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const handleDeleteClick = async (taskId) => {
//     try {
//       await axios.delete(`/tasks/${taskId}`);
//       setTasks(tasks.filter((task) => task.id !== taskId));
//       setShowPopup(false);
//       setSelectedTask(null);
//     } catch (error) {
//       console.error("Error deleting task:", error);
//     }
//   };

//   const handleClickDay = (day) => {
//     setSelectedDay(day);
//   };

//   const addSpecialEvent = (date, name) => {
//     const newEvent = { date, name };
//     setSpecialEvents([...specialEvents, newEvent]);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
//       <div className="w-full px-4 py-8 bg-white rounded-lg shadow-lg mb-8">
//         <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-4">
//           <h2 className="text-lg font-semibold mb-2">Current Task</h2>
//           <div className="flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-10 w-10 text-yellow-400 mr-2"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <circle
//                 cx="10"
//                 cy="10"
//                 r="7"
//                 className="fill-current text-green-400"
//               />
//             </svg>
//             <div className="flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-200">
//                 Review project proposal
//               </h3>
//               <div className="flex items-center mt-1">
//                 <p className="text-xs text-gray-300 mr-4">
//                   Due: <span className="text-gray-200">May 1, 2024</span>
//                 </p>
//                 <p className="text-xs text-gray-300">
//                   Priority: <span className="text-gray-200">High</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h1 className="text-2xl md:text-4xl font-semibold mb-1 mt-4 text-center text-gray-800">
//           Welcome,{" "}
//           <span className="text-purple-600 font-bold">
//             {currentUser ? currentUser.name : "Guest"}
//           </span>
//           !
//         </h1>

//         <p className="text-gray-600 text-lg md:text-xl mb-4 text-center">
//           Stay organized and boost your productivity!
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <Link to="/create">
//             <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300 block w-full">
//               Create Task
//             </button>
//           </Link>
//           <Link to="/tasks">
//             <button className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition duration-300 block w-full">
//               View Tasks
//             </button>
//           </Link>
//         </div>

//         {/* <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4 text-center">
//             Upcoming Tasks
//           </h2>
//           <ul className="divide-y divide-gray-200">
//             {tasks
//               .sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
//               .map((task) => (
//                 <li key={task.id} className="py-2 flex items-center">
//                   <div className="flex flex-col">
//                     <h3 className="text-lg font-semibold">{task.title}</h3>
//                     <p className="text-gray-500 text-sm">
//                       Due: {new Date(task.due_date).toLocaleDateString()}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => handleDetailsClick(task)}
//                     className="ml-auto bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300"
//                   >
//                     Details
//                   </button>
//                 </li>
//               ))}
//           </ul>

//           {showPopup && selectedTask && (
//             <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
//               <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>
//               <div className="bg-white rounded-lg p-8 w-96 relative z-10">
//                 <h3 className="text-lg font-semibold mb-4">
//                   {selectedTask.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm mb-2">
//                   Due: {new Date(selectedTask.due_date).toLocaleDateString()}
//                 </p>
//                 <p className="text-gray-500 text-sm mb-2">
//                   Location: {selectedTask.location}
//                 </p>
//                 <p className="text-gray-700 mb-4">{selectedTask.description}</p>
//                 <div className="flex justify-between">
//                   <div className="flex items-center">
//                     <svg
//                       onClick={handleClosePopup}
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-700 mr-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                     <span className="text-gray-500 text-sm">Close</span>
//                   </div>
//                   <div className="flex items-center">
//                     <svg
//                       onClick={() => handleDeleteClick(selectedTask.id)}
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 cursor-pointer text-red-500 hover:text-red-700 mr-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                     <span className="text-red-500 text-sm">Delete</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div> */}
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4 text-center">
//             Upcoming Tasks
//           </h2>
//           <ul className="divide-y divide-gray-200">
//             {tasks
//               .filter((task) => new Date(task.due_date) >= new Date()) // Filter tasks that haven't passed
//               .sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
//               .slice(0, 4) // Only show the next 4 upcoming tasks
//               .map((task) => (
//                 <li key={task.id} className="py-2 flex items-center">
//                   <div className="flex flex-col">
//                     <h3 className="text-lg font-semibold">{task.title}</h3>
//                     <p className="text-gray-500 text-sm">
//                       Due: {new Date(task.due_date).toLocaleDateString()}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => handleDetailsClick(task)}
//                     className="ml-auto bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300"
//                   >
//                     Details
//                   </button>
//                 </li>
//               ))}
//           </ul>

//           {showPopup && selectedTask && (
//             <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
//               <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>
//               <div className="bg-white rounded-lg p-8 w-96 relative z-10">
//                 <h3 className="text-lg font-semibold mb-4">
//                   {selectedTask.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm mb-2">
//                   Due: {new Date(selectedTask.due_date).toLocaleDateString()}
//                 </p>
//                 <p className="text-gray-500 text-sm mb-2">
//                   Location: {selectedTask.location}
//                 </p>
//                 <p className="text-gray-700 mb-4">{selectedTask.description}</p>
//                 <div className="flex justify-between">
//                   <div className="flex items-center">
//                     <svg
//                       onClick={handleClosePopup}
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-700 mr-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                     <span className="text-gray-500 text-sm">Close</span>
//                   </div>
//                   <div className="flex items-center">
//                     <svg
//                       onClick={() => handleDeleteClick(selectedTask.id)}
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 cursor-pointer text-red-500 hover:text-red-700 mr-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                     <span className="text-red-500 text-sm">Delete</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
//             Calendar
//           </h2>
//           <div className="calendar-grid bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 shadow-md">
//             <Calendar
//               onChange={setSelectedDay}
//               value={selectedDay}
//               className="w-full border border-gray-200"
//               tileClassName={({ date, view }) =>
//                 view === "month" && date.getDate() === selectedDay.getDate()
//                   ? "bg-purple-500 text-white rounded-full"
//                   : ""
//               }
//             />
//           </div>

//           {tasks
//             .filter(
//               (task) =>
//                 new Date(task.due_date).toDateString() ===
//                 selectedDay.toDateString()
//             )
//             .map((task, index) => (
//               <div key={index} className="mt-4">
//                 <ul className="space-y-4">
//                   <li className="task-item bg-white rounded-lg p-4 shadow-md hover:shadow-lg">
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-800 font-semibold">
//                         {task.title}
//                       </span>
//                       <span className="text-gray-500 text-sm">
//                         Due: {new Date(task.due_date).toLocaleTimeString()}
//                       </span>
//                     </div>
//                     <p className="text-gray-600 mt-2">{task.description}</p>
//                     <div className="flex justify-end mt-2">
//                       <button className="text-sm text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none">
//                         Edit
//                       </button>
//                       <button className="ml-2 text-sm text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none">
//                         Delete
//                       </button>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             ))}
//         </div>

//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">Notifications</h2>
//           <ul className="space-y-2">
//             {tasks
//               .filter((task) => new Date(task.due_date) < new Date())
//               .map((task, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center bg-red-100 rounded-lg px-4 py-2"
//                 >
//                   <span className="text-red-600">
//                     You missed the task: {task.title}
//                   </span>
//                   <button className="ml-auto text-sm text-gray-600 bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300">
//                     Reschedule
//                   </button>
//                 </li>
//               ))}
//             <li className="flex items-center bg-blue-100 rounded-lg px-4 py-2">
//               <span className="text-blue-600">
//                 You have a new task due today!
//               </span>
//             </li>
//             {/* Other app notifications go here */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import axios from "axios";
// import "./Home.css";

// const Home = ({ currentUser }) => {
//   // const currentDate = new Date();
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   // const [selectedDay, setSelectedDay] = useState(currentDate);
//   const [specialEvents, setSpecialEvents] = useState([]);
//   const [completedTasks, setCompletedTasks] = useState([]);
//   const [upcomingTask, setUpcomingTask] = useState(null);
//   const [currentTask, setCurrentTask] = useState(null);
//   const currentDate = new Date(); // This gets the current date and time in UTC
//   const localCurrentDate = new Date(
//     currentDate.getTime() - currentDate.getTimezoneOffset() * 60000
//   ); // This converts the UTC time to local time

//   const [selectedDay, setSelectedDay] = useState(localCurrentDate);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const authToken = localStorage.getItem("authToken");
//       try {
//         const response = await axios.get("http://localhost:3001/reminders", {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//             Accept: "application/json",
//           },
//         });
//         setTasks(response.data);
//         console.log("Fetched tasks:", response.data); // Log the fetched tasks
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//       }
//     };

//     fetchTasks();
//   }, []);

//   useEffect(() => {
//     const current = tasks.find(
//       (task) =>
//         new Date(task.due_date).getTime() <= currentDate.getTime() &&
//         new Date(task.due_date).getTime() + task.duration * 60000 >
//           currentDate.getTime()
//     );

//     setCurrentTask(current);

//     const upcoming = tasks
//       .filter(
//         (task) => new Date(task.due_date).getTime() > currentDate.getTime()
//       )
//       .sort((a, b) => new Date(a.due_date) - new Date(b.due_date))[0];

//     setUpcomingTask(upcoming);
//   }, [tasks, currentDate]);

//   const calculateTimeUntil = (dueDate) => {
//     const diff = dueDate - currentDate;
//     if (diff <= 0) return "Now";
//     const seconds = Math.floor((diff / 1000) % 60);
//     const minutes = Math.floor((diff / (1000 * 60)) % 60);
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
//   };
//   useEffect(() => {
//     const updateCurrentTask = () => {
//       const current = tasks.find(
//         (task) =>
//           new Date(task.due_date).getTime() <= localCurrentDate.getTime() &&
//           new Date(task.due_date).getTime() + task.duration * 60000 >
//             localCurrentDate.getTime()
//       );
//       setCurrentTask(current);
//     };

//     // Call the function initially
//     updateCurrentTask();

//     // Update the current task every minute
//     const interval = setInterval(updateCurrentTask, 60000);

//     // Clear the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, [tasks, localCurrentDate]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSelectedDay(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);
//   const calculateEndTime = (dueDate, duration) => {
//     const [start, end] = duration.split("-").map((time) => {
//       const [hours, minutes] = time.split(":").map(Number);
//       return hours * 60 + minutes;
//     });

//     const dueDateTime = new Date(dueDate);
//     dueDateTime.setHours(start / 60, start % 60);

//     const endTime = new Date(dueDateTime);
//     endTime.setMinutes(end);

//     return endTime;
//   };
//   useEffect(() => {
//     const interval = setInterval(() => {
//       updateCurrentTask();
//     }, 1000); // Update every second

//     // Clear the interval on component unmount
//     return () => clearInterval(interval);
//   }, []); // Run once on component mount

// const updateCurrentTask = () => {
//   const now = localCurrentDate.getTime();
//   const upcomingIndex = tasks.findIndex(
//     (task) => new Date(task.due_date).getTime() > now
//   );

//   if (upcomingIndex !== -1) {
//     const upcomingTask = tasks[upcomingIndex];
//     const dueDateTime = new Date(upcomingTask.due_date).getTime();
//     const endTime = calculateEndTime(
//       upcomingTask.due_date,
//       upcomingTask.duration
//     ).getTime();

//     if (now >= dueDateTime && now <= endTime) {
//       setCurrentTask(upcomingTask);
//     } else {
//       setCurrentTask(null);
//     }
//   } else {
//     setCurrentTask(null);
//   }
// };

//   const handleTaskClick = (task) => {
//     setSelectedTask(task);
//   };

//   const handleCloseDetails = () => {
//     setSelectedTask(null);
//   };

//   const handleDetailsClick = (task) => {
//     setSelectedTask(task);
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const handleDeleteClick = async (taskId) => {
//     try {
//       await axios.delete(`/tasks/${taskId}`);
//       setTasks(tasks.filter((task) => task.id !== taskId));
//       setShowPopup(false);
//       setSelectedTask(null);
//     } catch (error) {
//       console.error("Error deleting task:", error);
//     }
//   };

//   const handleClickDay = (day) => {
//     setSelectedDay(day);
//   };

//   const addSpecialEvent = (date, name) => {
//     const newEvent = { date, name };
//     setSpecialEvents([...specialEvents, newEvent]);
//   };
//   const handleCompleteTask = async (taskId) => {
//     try {
//       await axios.put(`/tasks/${taskId}`, { completed: true });
//       setTasks(
//         tasks.map((task) => {
//           if (task.id === taskId) {
//             return { ...task, completed: true };
//           }
//           return task;
//         })
//       );
//     } catch (error) {
//       console.error("Error completing task:", error);
//     }
//   };
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import "./Home.css";

const Home = ({ currentUser }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [specialEvents, setSpecialEvents] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [upcomingTask, setUpcomingTask] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);
  const [selectedDay, setSelectedDay] = useState(new Date());
  const currentDate = new Date(); // This gets the current date and time in UTC

  const localCurrentDate = new Date(
    currentDate.getTime() - currentDate.getTimezoneOffset() * 60000
  ); // This converts the UTC time to local time

  useEffect(() => {
    const fetchTasks = async () => {
      const authToken = localStorage.getItem("authToken");
      try {
        const response = await axios.get("http://localhost:3001/reminders", {
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: "application/json",
          },
        });
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const calculateEndTime = (dueDate, duration) => {
    if (!duration) {
      return dueDate; // Return dueDate if duration is null
    }

    const durationMinutes = parseInt(duration.split("-")[1], 10);
    const endTime = new Date(dueDate);
    endTime.setMinutes(endTime.getMinutes() + durationMinutes);
    return endTime;
  };

  const updateTasks = () => {
    const now = new Date();
    console.log("Updating tasks at", now);

    const upcoming = tasks
      .filter((task) => new Date(task.due_date).getTime() > now.getTime())
      .sort((a, b) => new Date(a.due_date) - new Date(b.due_date));

    const ongoing = tasks
      .filter((task) => {
        const dueDate = new Date(task.due_date);
        const endTime = calculateEndTime(dueDate, task.duration);
        return now >= dueDate && now < endTime;
      })
      .sort((a, b) => new Date(a.due_date) - new Date(b.due_date));

    if (ongoing.length > 0) {
      setCurrentTask(ongoing[0]);
      setUpcomingTask(
        upcoming[0] && ongoing[0].id !== upcoming[0].id ? upcoming[0] : null
      );
    } else if (upcoming.length > 0) {
      setCurrentTask(null);
      setUpcomingTask(upcoming[0]);
    } else {
      setCurrentTask(null);
      setUpcomingTask(null);
    }

    console.log("Current task:", currentTask);
    console.log("Upcoming task:", upcomingTask);
  };

  useEffect(() => {
    updateTasks();
    const interval = setInterval(updateTasks, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [tasks]);

  const calculateTimeUntil = (dueDate) => {
    const diff = new Date(dueDate) - new Date();
    if (diff <= 0) return "Now";
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };
  const calculateTimeRemaining = (endTime) => {
    const now = new Date();
    const diff = endTime - now;

    if (diff <= 0) {
      return "Task is already over";
    }

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  // Usage
  if (currentTask) {
    const endTime = calculateEndTime(
      new Date(currentTask.due_date),
      currentTask.duration
    );
    const timeRemaining = calculateTimeRemaining(endTime);
    console.log("Time remaining for current task:", timeRemaining);
  }

  // 
  useEffect(() => {
    const interval = setInterval(() => {
      updateTasks();
    }, 1000); // Update every second

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run once on component mount
  const handleCompleteTask = async (taskId) => {
    try {
      await axios.put(`/tasks/${taskId}`, { completed: true });
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, completed: true } : task
        )
      );
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleCloseDetails = () => {
    setSelectedTask(null);
  };

  const handleDetailsClick = (task) => {
    setSelectedTask(task);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDeleteClick = async (taskId) => {
    try {
      await axios.delete(`/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
      setShowPopup(false);
      setSelectedTask(null);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleClickDay = (day) => {
    setSelectedDay(day);
  };

  const addSpecialEvent = (date, name) => {
    const newEvent = { date, name };
    setSpecialEvents([...specialEvents, newEvent]);
  };
  return (
    // <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
    <div className="w-full px-4 py-8 bg-white rounded-lg shadow-lg mb-8">
      <div className="w-full px-4 py-8 bg-white rounded-lg shadow-lg mb-8">
        {currentTask ? (
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Current Task</h2>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-yellow-400 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="7"
                  className="fill-current text-green-400"
                />
              </svg>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-200">
                  {currentTask.title}
                </h3>
                <div className="flex items-center mt-1">
                  <p className="text-xs text-gray-300 mr-4">
                    Due:{" "}
                    <span className="text-gray-200">
                      {new Date(currentTask.due_date).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="text-xs text-gray-300 mr-4">
                    Priority:{" "}
                    <span className="text-gray-200">
                      {currentTask.priority}
                    </span>
                  </p>
                  <p className="text-xs text-gray-300">
                    Duration:{" "}
                    <span className="text-gray-200">
                      {currentTask.duration}
                    </span>
                  </p>
                  <p className="text-xs text-gray-300">
                    Time Remaining:{" "}
                    <span className="text-gray-200">
                      {calculateTimeUntil(new Date(currentTask.due_date))}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => handleCompleteTask(currentTask.id)}
                  className="mt-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition duration-300"
                >
                  Complete
                </button>
              </div>
            </div>
          </div>
        ) : upcomingTask ? (
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Upcoming Task</h2>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-yellow-400 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="7"
                  className="fill-current text-green-400"
                />
              </svg>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-200">
                  {upcomingTask.title}
                </h3>
                <div className="flex items-center mt-1">
                  <p className="text-xs text-gray-300 mr-4">
                    Due:{" "}
                    <span className="text-gray-200">
                      {new Date(upcomingTask.due_date).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="text-xs text-gray-300 mr-4">
                    Priority:{" "}
                    <span className="text-gray-200">
                      {upcomingTask.priority}
                    </span>
                  </p>
                  <p className="text-xs text-gray-300">
                    Time Until:{" "}
                    <span className="text-gray-200">
                      {calculateTimeUntil(new Date(upcomingTask.due_date))}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : tasks.length > 0 ? (
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">No Tasks</h2>
            <p className="text-gray-200">You have no upcoming tasks.</p>
          </div>
        ) : null}

        <h1 className="text-2xl md:text-4xl font-semibold mb-1 mt-4 text-center text-gray-800">
          Welcome,{" "}
          <span className="text-purple-600 font-bold">
            {currentUser ? currentUser.name : "Guest"}
          </span>
          !
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-4 text-center">
          Stay organized and boost your productivity!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/create">
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300 block w-full">
              Create Task
            </button>
          </Link>
          <Link to="/tasks">
            <button className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition duration-300 block w-full">
              View Tasks
            </button>
          </Link>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Upcoming Tasks
          </h2>
          <ul className="divide-y divide-gray-200">
            {tasks
              .filter((task) => new Date(task.due_date) >= new Date()) // Filter tasks that haven't passed
              .sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
              .slice(0, 4) // Only show the next 4 upcoming tasks
              .map((task) => (
                <li key={task.id} className="py-2 flex items-center">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-gray-500 text-sm">
                      Due: {new Date(task.due_date).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDetailsClick(task)}
                    className="ml-auto bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300"
                  >
                    Details
                  </button>
                </li>
              ))}
          </ul>

          {showPopup && selectedTask && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>
              <div className="bg-white rounded-lg p-8 w-96 relative z-10">
                <h3 className="text-lg font-semibold mb-4">
                  {selectedTask.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  Due: {new Date(selectedTask.due_date).toLocaleDateString()}
                </p>
                <p className="text-gray-500 text-sm mb-2">
                  Location: {selectedTask.location}
                </p>
                <p className="text-gray-700 mb-4">{selectedTask.description}</p>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <svg
                      onClick={handleClosePopup}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-700 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-gray-500 text-sm">Close</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      onClick={() => handleDeleteClick(selectedTask.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer text-red-500 hover:text-red-700 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-red-500 text-sm">Delete</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            Calendar
          </h2>
          <div className="calendar-grid bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 shadow-md">
            <Calendar
              onChange={setSelectedDay}
              value={selectedDay}
              className="w-full border border-gray-200"
              tileClassName={({ date, view }) =>
                view === "month" && date.getDate() === selectedDay.getDate()
                  ? "bg-purple-500 text-white rounded-full"
                  : ""
              }
            />
          </div>

          {tasks
            .filter(
              (task) =>
                new Date(task.due_date).toDateString() ===
                selectedDay.toDateString()
            )
            .map((task, index) => (
              <div key={index} className="mt-4">
                <ul className="space-y-4">
                  <li className="task-item bg-white rounded-lg p-4 shadow-md hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-semibold">
                        {task.title}
                      </span>
                      <span className="text-gray-500 text-sm">
                        Due: {new Date(task.due_date).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">{task.description}</p>
                    <div className="flex justify-end mt-2">
                      <button className="text-sm text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none">
                        Edit
                      </button>
                      <button className="ml-2 text-sm text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none">
                        Delete
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <ul className="space-y-2">
            {tasks
              .filter((task) => new Date(task.due_date) < new Date())
              .map((task, index) => (
                <li
                  key={index}
                  className="flex items-center bg-red-100 rounded-lg px-4 py-2"
                >
                  <span className="text-red-600">
                    You missed the task: {task.title}
                  </span>
                  <button className="ml-auto text-sm text-gray-600 bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300">
                    Reschedule
                  </button>
                </li>
              ))}
            <li className="flex items-center bg-blue-100 rounded-lg px-4 py-2">
              <span className="text-blue-600">
                You have a new task due today!
              </span>
            </li>
            {tasks
              .filter((task) => completedTasks.includes(task.id))
              .map((task) => (
                <li
                  key={task.id}
                  className="flex items-center bg-green-100 rounded-lg px-4 py-2"
                >
                  <span className="text-green-600 line-through">
                    Task completed: {task.title}
                  </span>
                </li>
              ))}{" "}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import axios from "axios";
// import "./Home.css";

// const Home = ({ currentUser }) => {
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [specialEvents, setSpecialEvents] = useState([]);
//   const [completedTasks, setCompletedTasks] = useState([]);
//   const [upcomingTask, setUpcomingTask] = useState(null);
//   const [currentTask, setCurrentTask] = useState(null);
//   const [selectedDay, setSelectedDay] = useState(new Date());

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const authToken = localStorage.getItem("authToken");
//       try {
//         const response = await axios.get("http://localhost:3001/reminders", {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//             Accept: "application/json",
//           },
//         });
//         setTasks(response.data);
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//       }
//     };

//     fetchTasks();
//   }, []);

//   const calculateEndTime = (dueDate, duration) => {
//     if (!duration) {
//       return dueDate; // Return dueDate if duration is null
//     }

//     const durationMinutes = parseInt(duration.split('-')[1], 10);
//     const endTime = new Date(dueDate);
//     endTime.setMinutes(endTime.getMinutes() + durationMinutes);
//     return endTime;
//   };

//   const updateTasks = () => {
//     const now = new Date();
//     console.log("Updating tasks at", now);

//     const upcoming = tasks
//       .filter(task => new Date(task.due_date).getTime() > now.getTime())
//       .sort((a, b) => new Date(a.due_date) - new Date(b.due_date));

//     const ongoing = tasks
//       .filter(task => {
//         const dueDate = new Date(task.due_date);
//         const endTime = calculateEndTime(dueDate, task.duration);
//         return now >= dueDate && now < endTime;
//       })
//       .sort((a, b) => new Date(a.due_date) - new Date(b.due_date));

//     if (ongoing.length > 0) {
//       setCurrentTask(ongoing[0]);
//       setUpcomingTask(upcoming[0] && ongoing[0].id !== upcoming[0].id ? upcoming[0] : null);
//     } else if (upcoming.length > 0) {
//       setCurrentTask(null);
//       setUpcomingTask(upcoming[0]);
//     } else {
//       setCurrentTask(null);
//       setUpcomingTask(null);
//     }

//     console.log("Current task:", currentTask);
//     console.log("Upcoming task:", upcomingTask);
//   };

//   useEffect(() => {
//     updateTasks();
//     const interval = setInterval(updateTasks, 60000); // Update every minute
//     return () => clearInterval(interval);
//   }, [tasks]);

//   const calculateTimeUntil = (dueDate) => {
//     const diff = new Date(dueDate) - new Date();
//     if (diff <= 0) return "Now";
//     const seconds = Math.floor((diff / 1000) % 60);
//     const minutes = Math.floor((diff / (1000 * 60)) % 60);
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
//   };
//   const calculateTimeRemaining = (endTime) => {
//     const now = new Date();
//     const diff = endTime - now;

//     if (diff <= 0) {
//         return "Task is already over";
//     }

//     const seconds = Math.floor((diff / 1000) % 60);
//     const minutes = Math.floor((diff / (1000 * 60)) % 60);
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));

//     return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
// };

// // Usage
// if (currentTask) {
//     const endTime = calculateEndTime(new Date(currentTask.due_date), currentTask.duration);
//     const timeRemaining = calculateTimeRemaining(endTime);
//     console.log("Time remaining for current task:", timeRemaining);
// }

//   const handleCompleteTask = async (taskId) => {
//     try {
//       await axios.put(`/tasks/${taskId}`, { completed: true });
//       setTasks(
//         tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task))
//       );
//     } catch (error) {
//       console.error("Error completing task:", error);
//     }
//   };

//   const handleTaskClick = (task) => {
//     setSelectedTask(task);
//   };

//   const handleCloseDetails = () => {
//     setSelectedTask(null);
//   };

//   const handleDetailsClick = (task) => {
//     setSelectedTask(task);
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const handleDeleteClick = async (taskId) => {
//     try {
//       await axios.delete(`/tasks/${taskId}`);
//       setTasks(tasks.filter((task) => task.id !== taskId));
//       setShowPopup(false);
//       setSelectedTask(null);
//     } catch (error) {
//       console.error("Error deleting task:", error);
//     }
//   };

//   const handleClickDay = (day) => {
//     setSelectedDay(day);
//   };

//   const addSpecialEvent = (date, name) => {
//     const newEvent = { date, name };
//     setSpecialEvents([...specialEvents, newEvent]);
//   };

//   return (
//     <div className="w-full px-4 py-8 bg-white rounded-lg shadow-lg mb-8">
//       {currentTask ? (
//         <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-4">
//           <h2 className="text-lg font-semibold mb-2">Current Task</h2>
//           <div className="flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-10 w-10 text-yellow-400 mr-2"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <circle cx="10" cy="10" r="7" className="fill-current text-green-400" />
//             </svg>
//             <div className="flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-200">{currentTask.title}</h3>
//               <div className="flex items-center mt-1">
//                 <p className="text-xs text-gray-300 mr-4">
//                   Due:{" "}
//                   <span className="text-gray-200">
//                     {new Date(currentTask.due_date).toLocaleDateString()}
//                   </span>
//                 </p>
//                 <p className="text-xs text-gray-300 mr-4">
//                   Priority: <span className="text-gray-200">{currentTask.priority}</span>
//                 </p>
//                 <p className="text-xs text-gray-300">
//                   Duration: <span className="text-gray-200">{currentTask.duration} mins</span>
//                 </p>
//               </div>
//               <button
//                 onClick={() => handleCompleteTask(currentTask.id)}
//                 className="mt-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition duration-300"
//               >
//                 Complete
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : upcomingTask ? (
//         <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-4">
//           <h2 className="text-lg font-semibold mb-2">Upcoming Task</h2>
//           <div className="flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-10 w-10 text-yellow-400 mr-2"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <circle cx="10" cy="10" r="7" className="fill-current text-green-400" />
//             </svg>
//             <div className="flex flex-col">
//               <h3 className="text-lg font-semibold text-gray-200">{upcomingTask.title}</h3>
//               <div className="flex items-center mt-1">
//                 <p className="text-xs text-gray-300 mr-4">
//                   Due:{" "}
//                   <span className="text-gray-200">
//                     {new Date(upcomingTask.due_date).toLocaleDateString()}
//                   </span>
//                 </p>
//                 <p className="text-xs text-gray-300 mr-4">
//                   Priority: <span className="text-gray-200">{upcomingTask.priority}</span>
//                 </p>
//                 <p className="text-xs text-gray-300">
//                   Time Until:{" "}
//                   <span className="text-gray-200">
//                     {calculateTimeUntil(new Date(upcomingTask.due_date))}
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-4">
//           <h2 className="text-lg font-semibold mb-2">No Upcoming or Current Tasks</h2>
//           <p className="text-gray-200">You're all caught up!</p>
//         </div>
//       )}

//       <h1 className="text-4xl font-semibold mb-1 mt-4 text-center text-gray-800">
//         Welcome,{" "}
//         <span className="text-purple-600 font-bold">
//           {currentUser ? currentUser.name : "Guest"}
//         </span>
//         !
//       </h1>

//       <p className="text-gray-600 text-lg md:text-xl mb-4 text-center">
//         Stay organized and boost your productivity!
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Link to="/create">
//           <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-4 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300 w-full">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-10 w-10 text-yellow-400 mr-2"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Create New Task
//           </button>
//         </Link>

//         <Link to="/completed">
//           <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-4 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 w-full">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-10 w-10 text-yellow-400 mr-2"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M16.707 4.707a1 1 0 00-1.414-1.414L8 10.586 4.707 7.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             View Completed Tasks
//           </button>
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-2">Tasks</h2>
//           {tasks.length > 0 ? (
//             <ul className="space-y-2">
//               {tasks.map((task) => (
//                 <li key={task.id} className="flex items-center">
//                   <span className="mr-2 text-gray-700 font-medium">{task.title}</span>
//                   <button
//                     onClick={() => handleDetailsClick(task)}
//                     className="text-blue-600 hover:text-blue-800 transition duration-300 focus:outline-none"
//                   >
//                     View Details
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No tasks available.</p>
//           )}
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-2">Special Events</h2>
//           {specialEvents.length > 0 ? (
//             <ul className="space-y-2">
//               {specialEvents.map((event, index) => (
//                 <li key={index} className="flex items-center">
//                   <span className="mr-2 text-gray-700 font-medium">{event.name}</span>
//                   <span className="text-gray-500">{new Date(event.date).toLocaleDateString()}</span>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No special events available.</p>
//           )}
//         </div>
//       </div>

//       <div className="mt-8">
//         <Calendar value={selectedDay} onClickDay={handleClickDay} />
//       </div>

//       {selectedTask && showPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold mb-4">Task Details</h2>
//             <p className="text-gray-700 mb-2">
//               <strong>Title:</strong> {selectedTask.title}
//             </p>
//             <p className="text-gray-700 mb-2">
//               <strong>Description:</strong> {selectedTask.description}
//             </p>
//             <p className="text-gray-700 mb-2">
//               <strong>Due Date:</strong> {new Date(selectedTask.due_date).toLocaleDateString()}
//             </p>
//             <p className="text-gray-700 mb-2">
//               <strong>Priority:</strong> {selectedTask.priority}
//             </p>
//             <p className="text-gray-700 mb-4">
//               <strong>Duration:</strong> {selectedTask.duration} mins
//             </p>
//             <div className="flex justify-end">
//               <button
//                 onClick={handleClosePopup}
//                 className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-300 mr-2"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={() => handleDeleteClick(selectedTask.id)}
//                 className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-300"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
