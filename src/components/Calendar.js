
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Calendar = () => {
  const navigate = useNavigate(); // Initialize useNavigate inside the component
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

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0); // Set to the start of the selected date
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999); // Set to the end of the selected date

    try {
      const response = await axios.get(`http://localhost:3001/reminders/index_by_date?date=${date}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setLoadingReminders(false);
      return response.data.map(reminder => ({
        ...reminder,
        time: new Date(reminder.due_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // Format the time
      }));
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

  const handleCreateTask = () => {
    navigate('/create'); // Navigate to the create page
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
    <div className="calendar-container bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button
          className="nav-button text-gray-500 hover:text-gray-700 focus:outline-none rounded-md px-2 py-1 bg-gray-200 hover:bg-gray-300 transition duration-300 sm:px-4 sm:py-2"
          onClick={handlePrevMonth}
        >
          Prev
        </button>
        <h2 className="calendar-title text-lg font-semibold">
          {months[currentMonth]} {currentYear}
        </h2>
        <button
          className="nav-button text-gray-500 hover:text-gray-700 focus:outline-none rounded-md px-2 py-1 bg-gray-200 hover:bg-gray-300 transition duration-300 sm:px-4 sm:py-2"
          onClick={handleNextMonth}
        >
          Next
        </button>
      </div>
      <div className="calendar-grid bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 shadow-md">
        <div className="grid grid-cols-7 gap-2">
          {/* Render days of the week */}
          {days.map((day, index) => (
            <div
              key={index}
              className="day-label text-center text-white font-semibold text-sm"
            >
              {day}
            </div>
          ))}
          {/* Render days of the month */}
          {daysOfMonth.map((day, index) => (
            <div
              key={index}
              className={`calendar-day flex justify-center items-center rounded-full cursor-pointer ${day === selectedDate ? 'bg-yellow-500 text-gray-800' : 'bg-indigo-500 text-white hover:bg-indigo-700 hover:text-gray-100'} w-8 h-8 relative`}
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
                  <div key={idx} className="reminder-card bg-white rounded-lg p-4 shadow-md mb-4">
                    <h3 className="reminder-title text-lg font-semibold text-gray-800 mb-2">{reminder.title}</h3>
                    <p className="reminder-info text-sm text-gray-600 mb-1">Location: {reminder.location}</p>
                    <p className="reminder-info text-sm text-gray-600 mb-1">Time: {reminder.time}</p>
                    <p className="reminder-details text-sm text-gray-700">{reminder.details}</p>
                  </div>
                ))}
              </div>
            )}
            {!loadingReminders && reminders.length === 0 && (
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p>No meetings for {selectedDate}</p>
                <button className="create-task-button mt-2 text-sm text-white bg-indigo-600 px-3 py-1 rounded-md" onClick={handleCreateTask}>
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
