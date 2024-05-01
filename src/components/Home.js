import React, { useState } from "react";

const Home = () => {
  // Get the current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const [selectedTask, setSelectedTask] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [task, setTask] = useState(null);

  // Generate days of the month
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  // State for selected day
  const [selectedDay, setSelectedDay] = useState(currentDay);

  // Placeholder for current task
  const currentTask = "Review project proposal";

  // Tasks for each day (dummy data for demonstration)
  const tasks = {
    1: ["Task 1", "Task 2"],
    2: ["Task 3", "Task 4"],
    // Add more tasks for each day as needed
  };
  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleCloseDetails = () => {
    setSelectedTask(null);
  };
  // Function to handle "Details" button click
  const handleDetailsClick = (task) => {
    setSelectedTask(task);
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Function to handle "Delete" button click
  const handleDeleteClick = () => {
    // Implement delete task functionality here
    // For now, let's just close the pop-up
    setShowPopup(false);
    setSelectedTask(null);
  };
  // Handle click on a day
  const handleClickDay = (day) => {
    setSelectedDay(day);
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full px-4 py-8 bg-white rounded-lg shadow-lg mb-8">
        {/* Container for current task */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg p-4">
          <h2 className="text-lg font-semibold">Current Task</h2>
          <div className="flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.293 17.707a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 1.414-1.414L9 14.586l6.293-6.293a1 1 0 0 1 1.414 1.414l-7 7z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-sm font-medium">
                Task:{" "}
                <span className="text-gray-200">Review project proposal</span>
              </p>
              <p className="text-xs text-gray-300">
                Due: <span className="text-gray-200">May 1, 2024</span>
              </p>
              <p className="text-xs text-gray-300">
                Priority: <span className="text-gray-200">High</span>
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Welcome to Your Task App
        </h1>
        <p className="text-gray-700 text-sm md:text-base mb-6 text-center">
          Get organized and stay productive!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300 w-full">
            Create Task
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-300 w-full">
            View Tasks
          </button>
        </div>
        {/* Task list */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Upcoming Tasks
          </h2>
          <ul className="divide-y divide-gray-200">
            {/* Task items */}
            {Object.keys(tasks).map((day) =>
              tasks[day].map((task, index) => (
                <li key={index} className="py-2 flex items-center">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{task}</h3>
                    <p className="text-gray-500 text-sm">Due: 04/30/2024</p>
                  </div>
                  <button
                    onClick={() => handleDetailsClick(task)}
                    className="ml-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300"
                  >
                    Details
                  </button>
                </li>
              ))
            )}
            {/* Add more tasks as needed */}
          </ul>

          {/* Popup for task details */}
          {showPopup && selectedTask && (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>
    <div className="bg-white rounded-lg p-8 w-96 relative z-10">
      <h3 className="text-lg font-semibold mb-4">{selectedTask.title}</h3>
      <p className="text-gray-500 text-sm mb-2">Due: {selectedTask.dueDate}</p>
      <p className="text-gray-500 text-sm mb-2">Time: {selectedTask.time}</p>
      <p className="text-gray-500 text-sm mb-4">Location: {selectedTask.location}</p>
      <p className="text-gray-700 mb-4">{selectedTask.description}</p>
      {/* Additional details */}
      <div className="flex justify-between">
        {/* Icons for actions */}
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
            onClick={handleDeleteClick}
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
          <h2 className="text-xl font-semibold mb-4">Calendar</h2>
          {/* Calendar */}
          <div className="bg-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-7 gap-1">
              {/* Render days of the week */}
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, index) => (
                  <div key={index} className="text-center font-semibold">
                    {day}
                  </div>
                )
              )}
              {/* Render days of the month */}
              {daysArray.map((day, index) => (
                <div
                  key={index}
                  className={`text-center py-2 rounded-lg ${
                    day === currentDay ? "bg-blue-500 text-white" : ""
                  } ${day === selectedDay ? "bg-yellow-500" : ""}`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
          {/* Display tasks for the selected day */}
          {tasks[selectedDay] ? (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-4">
                Tasks for {currentDate.getMonth() + 1}/{selectedDay}/2024
              </h2>
              <ul className="space-y-2">
                {/* Display tasks for the selected day */}
                {tasks[selectedDay].map((task, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-between rounded-lg px-4 py-2 ${
                      selectedDay === currentDay ? "bg-blue-100" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`${
                        selectedDay === currentDay
                          ? "text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      {task}
                    </span>
                    <span className="text-gray-500 text-xs">
                      Due: {currentDate.getMonth() + 1}/{selectedDay}/2024
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="mt-4 text-center text-gray-500">
              No tasks available for the selected day.
              <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300">
                Create Task
              </button>
            </div>
          )}
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          {/* Notifications */}
          <ul className="space-y-2">
            <li className="flex items-center bg-blue-100 rounded-lg px-4 py-2">
              <span className="text-blue-600">
                You have a new task due today!
              </span>
            </li>
            {/* Add more notifications as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
