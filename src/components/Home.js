import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SpecialEvents from "./SpecialEvents";

const Home = () => {
  // Get the current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const [selectedTask, setSelectedTask] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [task, setTask] = useState(null);
  const userName = "User";
  // Initialize selected day with the current day
  const [selectedDay, setSelectedDay] = useState(currentDate);
  const [specialEvents, setSpecialEvents] = useState([]);


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


  // Placeholder for current task
  const currentTask = "Review project proposal";

  //// Tasks for each day (dummy data for demonstration)
  // Tasks for each day (dummy data for demonstration)
  const tasks = {
    1: ["Task 1", "Task 2"],
    2: ["Task 3", "Task 4"],
    12: ["Task for 12 May 2024"], // Task for the 12th of May 2024
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
    // Function to add a special event
    const addSpecialEvent = (date, name) => {
      const newEvent = { date, name };
      setSpecialEvents([...specialEvents, newEvent]);
      setTask("");
    };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full px-4 py-8 bg-white rounded-lg shadow-lg mb-8">
        {/* Container for current task */}
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
                Review project proposal
              </h3>
              <div className="flex items-center mt-1">
                <p className="text-xs text-gray-300 mr-4">
                  Due: <span className="text-gray-200">May 1, 2024</span>
                </p>
                <p className="text-xs text-gray-300">
                  Priority: <span className="text-gray-200">High</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-gray-800">
          Welcome, {userName}!
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-8 text-center">
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
                    className="ml-auto bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300"
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
                <h3 className="text-lg font-semibold mb-4">
                  {selectedTask.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  Due: {selectedTask.dueDate}
                </p>
                <p className="text-gray-500 text-sm mb-2">
                  Time: {selectedTask.time}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Location: {selectedTask.location}
                </p>
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
          {/* Calendar */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              Calendar
            </h2>
            {/* Calendar */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <Calendar
                onChange={setSelectedDay}
                value={selectedDay}
                className="w-full border border-gray-200"
                tileClassName={({ date, view }) =>
                  view === "month" && date.getDate() === selectedDay
                    ? "bg-purple-500 text-white rounded-full" // Highlight the current date
                    : ""
                }
                tileContent={({ date, view }) =>
                  view === "month" && date.getDate() === selectedDay ? (
                    <span className="text-lg font-bold">{date.getDate()}</span>
                  ) : null
                }
              />
            </div>
          </div>

          {/* Display tasks for the selected day */}
          {tasks[selectedDay] ? (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-4">
                Tasks for{" "}
                {currentDate.toLocaleDateString("en-US", {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                })}
              </h2>
              <ul className="space-y-4">
                {/* Display tasks for the selected day */}
                {tasks[selectedDay].map((task, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 ${
                      selectedDay === currentDay ? "bg-blue-100" : "bg-gray-100"
                    } shadow-md hover:shadow-lg`}
                  >
                    <span
                      className={`${
                        selectedDay === currentDay
                          ? "text-blue-600"
                          : "text-gray-700"
                      } font-semibold`}
                    >
                      {task}
                    </span>
                    <span className="text-gray-500 text-xs">
                      Due:{" "}
                      {currentDate.toLocaleDateString("en-US", {
                        month: "numeric",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="mt-4 text-center text-gray-500">
              No tasks available for the selected day.
              <Link to="/create">
                <button className="ml-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300">
                  Create Task
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Special Events</h2>
          <ul className="space-y-4">
            {specialEvents.map((event, index) => (
              <li key={index} className="flex items-center">
                <span className="text-lg font-semibold">{event.name}</span>
                <span className="text-gray-500 text-sm ml-2">
                  {event.date.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </li>
            ))}
          </ul>
          {/* Form to add special event */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Event Name"
              className="border border-gray-300 px-3 py-2 rounded-md mr-2"
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300"
              onClick={() => addSpecialEvent(selectedDay, task)}
            >
              Add Event
            </button>
          </div>
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
