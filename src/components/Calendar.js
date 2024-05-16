
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Calendar = () => {
//   // Array of days of the week
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   // Array of months
//   const months = [
//     "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
//   ];

//   // State variables
//   const [currentMonth, setCurrentMonth] = useState(null);
//   const [currentYear, setCurrentYear] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [daysOfMonth, setDaysOfMonth] = useState([]);
//   const [reminders, setReminders] = useState([]);

//   // Function to fetch reminders by date
//   const fetchRemindersByDate = async (date) => {
//     const authToken = localStorage.getItem('authToken');
//     if (!authToken) {
//       console.error("User not authenticated");
//       return [];
//     }

//     try {
//       const response = await axios.get(`http://localhost:3001/reminders/index_by_date?date=${date}`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching reminders:", error);
//       return [];
//     }
//   };

//   // Function to handle date selection
//   const handleDateSelect = async (day) => {
//     setSelectedDate(day);
//     const formattedDate = `${currentYear}-${currentMonth + 1}-${day}`; // Format the selected date as needed
//     const fetchedReminders = await fetchRemindersByDate(formattedDate);
//     setReminders(fetchedReminders);
//   };

//   // Function to handle switching to the next month
//   const handleNextMonth = () => {
//     setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
//     setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
//   };

//   // Function to handle switching to the previous month
//   const handlePrevMonth = () => {
//     setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
//     setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
//   };

//   // Use effect hook to initialize the calendar
//   useEffect(() => {
//     const currentDate = new Date();
//     setCurrentMonth(currentDate.getMonth());
//     setCurrentYear(currentDate.getFullYear());
//   }, []);

//   // Use effect hook to update the days of the month when the month or year changes
//   useEffect(() => {
//     const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
//     const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//     const daysArray = Array.from({ length: firstDayOfMonth }, () => 0).concat(
//       Array.from({ length: numDaysInMonth }, (_, i) => i + 1)
//     );
//     setDaysOfMonth(daysArray);
//   }, [currentMonth, currentYear]);

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
//       <div className="flex items-center justify-between mb-4">
//         <button
//           className="text-gray-500 hover:text-gray-700 focus:outline-none rounded-md px-2 py-1 bg-gray-200 hover:bg-gray-300 transition duration-300 sm:px-4 sm:py-2"
//           onClick={handlePrevMonth}
//         >
//           Prev
//         </button>
//         <h2 className="text-lg font-semibold">
//           {months[currentMonth]} {currentYear}
//         </h2>
//         <button
//           className="text-gray-500 hover:text-gray-700 focus:outline-none rounded-md px-2 py-1 bg-gray-200 hover:bg-gray-300 transition duration-300 sm:px-4 sm:py-2"
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
//               {day > 0 ? day : ''}
//               {reminders.length > 0 && reminders.find(reminder => reminder.due_date === `${currentYear}-${currentMonth + 1}-${day}`) ? (
//   reminders.filter(reminder => reminder.due_date === `${currentYear}-${currentMonth + 1}-${day}`).map(reminder => (
//     <div key={reminder.id} className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1">
//       {reminder.title}
//     </div>
//   ))
// ) : (
//   <div className="absolute -top-1 -right-1 bg-yellow-500 text-gray-800 rounded-full px-1">
//     Nothing created
//   </div>
// )}

//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calendar;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calendar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  const [currentMonth, setCurrentMonth] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [daysOfMonth, setDaysOfMonth] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [loadingReminders, setLoadingReminders] = useState(false);

  const fetchRemindersByDate = async (date) => {
    setLoadingReminders(true);
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      console.error("User not authenticated");
      setLoadingReminders(false);
      return [];
    }

    try {
      const response = await axios.get(`http://localhost:3001/reminders/index_by_date?date=${date}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setLoadingReminders(false);
      return response.data;
    } catch (error) {
      console.error("Error fetching reminders:", error);
      setLoadingReminders(false);
      return [];
    }
  };

  const handleDateSelect = async (day) => {
    setSelectedDate(day);
    const formattedDate = `${currentYear}-${currentMonth + 1}-${day}`;
    const fetchedReminders = await fetchRemindersByDate(formattedDate);
    setReminders(fetchedReminders);
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
  };

  // Placeholder function for handling task creation
  const handleCreateTask = () => {
    console.log("Creating a new task...");
    // Implement your task creation logic here
  };

  useEffect(() => {
    const currentDate = new Date();
    setCurrentMonth(currentDate.getMonth());
    setCurrentYear(currentDate.getFullYear());
  }, []);

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
          className="text-gray-500 hover:text-gray-700 focus:outline-none rounded-md px-2 py-1 bg-gray-200 hover:bg-gray-300 transition duration-300 sm:px-4 sm:py-2"
          onClick={handlePrevMonth}
        >
          Prev
        </button>
        <h2 className="text-lg font-semibold">
          {months[currentMonth]} {currentYear}
        </h2>
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none rounded-md px-2 py-1 bg-gray-200 hover:bg-gray-300 transition duration-300 sm:px-4 sm:py-2"
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
              } w-8 h-8 relative`}
              onClick={() => handleDateSelect(day)}
            >
              {day > 0 && day}
            </div>
          ))}
        </div>
        {selectedDate && (
          <div className="mt-6">
            {loadingReminders && <p>Loading reminders...</p>}
            {!loadingReminders && reminders.length > 0 && (
              <div>
                {reminders.map((reminder, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 shadow-md mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{reminder.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">Location: {reminder.location}</p>
                    <p className="text-sm text-gray-600 mb-1">Time: {reminder.time}</p>
                    <p className="text-sm text-gray-700">{reminder.details}</p>
                  </div>
                ))}
              </div>
            )}
            {!loadingReminders && reminders.length === 0 && (
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p>No meetings for {selectedDate}</p>
                <button className="mt-2 text-sm text-white bg-indigo-600 px-3 py-1 rounded-md" onClick={handleCreateTask}>
                  Create Meeting
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
