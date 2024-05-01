// import React, { useState } from 'react';

// const Calendar = () => {
//   // Dummy data for demonstration
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const daysOfMonth = Array.from({ length: 31 }, (_, i) => i + 1);
//   const months = [
//     "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
//   ];
  
//   const currentDate = new Date();
//   const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
//   const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
//   const [selectedDate, setSelectedDate] = useState(null);

//   // Function to handle date selection
//   const handleDateSelect = (day) => {
//     setSelectedDate(day);
//     // Add your logic to fetch and display event details for the selected date
//   };

//   // Function to handle task creation
//   const handleCreateTask = () => {
//     // Add your logic to create a task for the selected date
//     console.log(`Creating task for ${selectedDate}`);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
//       <h2 className="text-lg font-semibold mb-4 text-center">{months[currentMonth]} {currentYear}</h2>
//       <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 shadow-md">
//         <div className="grid grid-cols-7 gap-2">
//           {/* Render days of the week */}
//           {days.map((day, index) => (
//             <div
//               key={index}
//               className="text-center text-white font-semibold text-sm"
//             >
//               {day}
//             </div>
//           ))}
//           {/* Render days of the month */}
//           {daysOfMonth.map((day, index) => (
//             <div
//               key={index}
//               className={`flex justify-center items-center rounded-full cursor-pointer ${
//                 day === selectedDate ? 'bg-yellow-500 text-gray-800' : 'bg-indigo-500 text-white'
//               } w-8 h-8`}
//               onClick={() => handleDateSelect(day)}
//             >
//               {day}
//             </div>
//           ))}
//         </div>
//         {/* Task creation input */}
//         // Inside the Calendar component

// {/* Task creation input */}
// {selectedDate && (
//   <div className="mt-4">
//     <h3 className="text-lg font-semibold mb-2">Create Task for {selectedDate}</h3>
//     <div className="flex justify-between items-center">
//       <input
//         type="text"
//         placeholder="Enter task name"
//         className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1 mr-2"
//       />
//       <button
//         onClick={handleCreateTask}
//         className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
//       >
//         Create Task
//       </button>
//     </div>
//     <div className="mt-2">
//       <input
//         type="date"
//         placeholder="Due Date"
//         className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1"
//       />
//     </div>
//     <div className="mt-2">
//       <select
//         className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1"
//       >
//         <option value="low">Low Priority</option>
//         <option value="medium">Medium Priority</option>
//         <option value="high">High Priority</option>
//       </select>
//     </div>
//     <div className="mt-2">
//       <textarea
//         placeholder="Task Details"
//         rows="4"
//         className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1"
//       ></textarea>
//     </div>
//   </div>
// )}

//       </div>
//     </div>
//   );
// };

// export default Calendar;
// import React, { useState, useEffect } from 'react';

// const Calendar = () => {
//   // Dummy data for demonstration
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const months = [
//     "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
//   ];
  
//   const currentDate = new Date();
//   const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
//   const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [daysOfMonth, setDaysOfMonth] = useState([]);

//   // Function to handle date selection
//   const handleDateSelect = (day) => {
//     setSelectedDate(day);
//     // Add your logic to fetch and display event details for the selected date
//   };

//   // Function to handle task creation
//   const handleCreateTask = () => {
//     // Add your logic to create a task for the selected date
//     console.log(`Creating task for ${selectedDate}`);
//   };

//   // Function to handle switching to the next month
//   const handleNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   // Function to get the days of the month for the selected month and year
//   const getDaysOfMonth = (year, month) => {
//     // Get the number of days in the selected month
//     const numDays = new Date(year, month + 1, 0).getDate();
//     // Generate an array of days from 1 to the number of days in the month
//     return Array.from({ length: numDays }, (_, i) => i + 1);
//   };

//   // Update daysOfMonth when currentMonth or currentYear changes
//   useEffect(() => {
//     setDaysOfMonth(getDaysOfMonth(currentYear, currentMonth));
//   }, [currentYear, currentMonth]);

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
//       <div className="flex items-center justify-between mb-4">
//         <button
//           className="text-gray-500 hover:text-gray-700 focus:outline-none"
//           onClick={() => setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1)}
//         >
//           Prev
//         </button>
//         <h2 className="text-lg font-semibold">
//           {months[currentMonth]} {currentYear}
//         </h2>
//         <button
//           className="text-gray-500 hover:text-gray-700 focus:outline-none"
//           onClick={handleNextMonth}
//         >
//           Next
//         </button>
//       </div>
//       <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 shadow-md">
//         <div className="grid grid-cols-7 gap-2">
//           {/* Render days of the week */}
//           {days.map((day, index) => (
//             <div
//               key={index}
//               className="text-center text-white font-semibold text-sm"
//             >
//               {day}
//             </div>
//           ))}
//           {/* Render days of the month */}
//           {daysOfMonth.map((day, index) => (
//             <div
//               key={index}
//               className={`flex justify-center items-center rounded-full cursor-pointer ${
//                 day === selectedDate ? 'bg-yellow-500 text-gray-800' : 'bg-indigo-500 text-white'
//               } w-8 h-8`}
//               onClick={() => handleDateSelect(day)}
//             >
//               {day}
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Task creation input */}
//       {selectedDate && (
//         <div className="mt-4">
//           <h3 className="text-lg font-semibold mb-2">Create Task for {selectedDate}</h3>
//           <div className="flex justify-between items-center">
//             <input
//               type="text"
//               placeholder="Enter task name"
//               className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1 mr-2"
//             />
//             <button
//               onClick={handleCreateTask}
//               className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
//             >
//               Create Task
//             </button>
//           </div>
//           <div className="mt-2">
//             <input
//               type="date"
//               placeholder="Due Date"
//               className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1"
//             />
//           </div>
//           <div className="mt-2">
//             <select
//               className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1"
//             >
//               <option value="low">Low Priority</option>
//               <option value="medium">Medium Priority</option>
//               <option value="high">High Priority</option>
//             </select>
//           </div>
//           <div className="mt-2">
//             <textarea
//               placeholder="Task Details"
//               rows="4"
//               className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1"
//             ></textarea>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Calendar;
import React, { useState, useEffect } from 'react';

const Calendar = () => {
  // Array of days of the week
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // Array of months
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  // State variables
  const [currentMonth, setCurrentMonth] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [daysOfMonth, setDaysOfMonth] = useState([]);

  // Function to handle date selection
  const handleDateSelect = (day) => {
    setSelectedDate(day);
    // Add your logic to fetch and display event details for the selected date
  };

  // Function to handle task creation
  const handleCreateTask = () => {
    // Add your logic to create a task for the selected date
    console.log(`Creating task for ${selectedDate}`);
  };

  // Function to handle switching to the next month
  const handleNextMonth = () => {
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
  };

  // Function to handle switching to the previous month
  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
  };

  // Use effect hook to initialize the calendar
  useEffect(() => {
    const currentDate = new Date();
    setCurrentMonth(currentDate.getMonth());
    setCurrentYear(currentDate.getFullYear());
  }, []);

  // Use effect hook to update the days of the month when the month or year changes
  useEffect(() => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysArray = Array.from({ length: firstDayOfMonth }, () => 0).concat(
      Array.from({ length: numDaysInMonth }, (_, i) => i + 1)
    );
    setDaysOfMonth(daysArray);
  }, [currentMonth, currentYear]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={handlePrevMonth}
        >
          Prev
        </button>
        <h2 className="text-lg font-semibold">
          {months[currentMonth]} {currentYear}
        </h2>
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={handleNextMonth}
        >
          Next
        </button>
      </div>
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 shadow-md">
        <div className="grid grid-cols-7 gap-2">
          {/* Render days of the week */}
          {days.map((day, index) => (
            <div
              key={index}
              className="text-center text-white font-semibold text-sm"
            >
              {day}
            </div>
          ))}
          {/* Render days of the month */}
          {daysOfMonth.map((day, index) => (
            <div
              key={index}
              className={`flex justify-center items-center rounded-full cursor-pointer ${
                day === selectedDate ? 'bg-yellow-500 text-gray-800' : 'bg-indigo-500 text-white'
              } w-8 h-8`}
              onClick={() => handleDateSelect(day)}
            >
              {day > 0 ? day : ''}
            </div>
          ))}
        </div>
      </div>
      {/* Task creation input */}
      {selectedDate && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Create Task for {selectedDate}</h3>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Enter task name"
              className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1 mr-2"
            />
            <button
              onClick={handleCreateTask}
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
            >
              Create Task
            </button>
          </div>
          <div className="mt-2">
            <input
              type="date"
              placeholder="Due Date"
              className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1"
            />
          </div>
          <div className="mt-2">
            <select
              className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
          </div>
          <div className="mt-2">
            <textarea
              placeholder="Task Details"
              rows="4"
              className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1"
            ></textarea>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

