// import React, { useState } from "react";
// import axios from "axios"; // Import Axios
// const isLoggedIn = true; // Placeholder value for isLoggedIn

// const CreateTask = () => {
//   const [taskName, setTaskName] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [dueTime, setDueTime] = useState("");
//   const [priority, setPriority] = useState("");
//   const [location, setLocation] = useState("");
//   const [details, setDetails] = useState("");
//   const [duration, setDuration] = useState("");
//   const [error, setError] = useState(null);

//   const handleTaskNameChange = (e) => {
//     setTaskName(e.target.value);
//   };

//   const handleDueDateChange = (e) => {
//     setDueDate(e.target.value);
//   };

//   const handleDueTimeChange = (e) => {
//     setDueTime(e.target.value);
//   };

//   const handlePriorityChange = (e) => {
//     setPriority(e.target.value);
//   };

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleDetailsChange = (e) => {
//     setDetails(e.target.value);
//   };

//   const handleDurationChange = (e) => {
//     setDuration(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const authToken = localStorage.getItem("authToken");
//       console.log("Auth token:", authToken); // Log the auth token

//       // Combine date and time into a single string without converting to UTC
//       const dueDateTime = `${dueDate}T${dueTime}:00`;

//       // Convert dueDateTime to an ISO string
//       const dueDateTimeISO = new Date(dueDateTime).toISOString();

//       const response = await axios.post(
//         "http://localhost:3001/reminders",
//         {
//           reminder: {
//             title: taskName,
//             due_date: dueDateTimeISO,
//             priority: priority,
//             location: location,
//             description: details,
//             duration: duration,
//           },
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         }
//       );
//       console.log("Task submitted:", response.data); // Log the response data
//       // Optionally, you can handle success and reset form fields here
//       setTaskName("");
//       setDueDate("");
//       setDueTime("");
//       setPriority("");
//       setLocation("");
//       setDetails("");
//       setDuration("");
//       setError(null);
//     } catch (error) {
//       console.error("Error submitting task:", error);
//       setError("Error submitting task. Please try again.");
//     }
//   };

//   // Log the login status
//   console.log("Is user logged in?", isLoggedIn);

//   return (
//     <div className="bg-gray-100 rounded-lg shadow-md p-6 max-w-md mx-auto">
//       <h2 className="text-lg font-semibold mb-4 text-center">Create Task</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex flex-col">
//           <label
//             htmlFor="taskName"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Task Name
//           </label>
//           <input
//             type="text"
//             id="taskName"
//             value={taskName}
//             onChange={handleTaskNameChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label
//             htmlFor="dueDate"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Due Date
//           </label>
//           <input
//             type="date"
//             id="dueDate"
//             value={dueDate}
//             onChange={handleDueDateChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label
//             htmlFor="dueTime"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Due Time
//           </label>
//           <input
//             type="time"
//             id="dueTime"
//             value={dueTime}
//             onChange={handleDueTimeChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500
//                focus:ring-2 focus:ring-blue-500 bg-gray-100 placeholder-gray-400 text-gray-700
//                hover:bg-gray-200 hover:border-gray-400 focus:bg-white focus:shadow-md"
//             // Add Tailwind CSS classes to style the time input
//             style={{ padding: "0.75rem 1rem", borderRadius: "0.375rem" }} // Adjust padding and border-radius for better appearance
//           />
//         </div>

//         <div className="flex flex-col">
//           <label
//             htmlFor="priority"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Priority
//           </label>
//           <select
//             id="priority"
//             value={priority}
//             onChange={handlePriorityChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           >
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//         </div>
//         <div className="flex flex-col">
//           <label
//             htmlFor="location"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Location
//           </label>
//           <input
//             type="text"
//             id="location"
//             value={location}
//             onChange={handleLocationChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label
//             htmlFor="details"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Details
//           </label>
//           <textarea
//             id="details"
//             value={details}
//             onChange={handleDetailsChange}
//             rows="4"
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label
//             htmlFor="duration"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Duration
//           </label>
//           <select
//             id="duration"
//             value={duration}
//             onChange={handleDurationChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue
//             -500"
//           >
//             <option value="">Select Duration</option>
//             <option value="0-30 minutes">0-30 minutes</option>
//             <option value="1 hour">1 hour</option>
//             <option value="2 hours">2 hours</option>
//             <option value="3 hours">3 hours</option>
//             <option value="4 hours and above">4 hours and above</option>
//           </select>
//         </div>
//         {error && <p className="text-red-500">{error}</p>}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
//         >
//           Create Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;
// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import Axios

// const isLoggedIn = true; // Placeholder value for isLoggedIn

// const CreateTask = () => {
//   const [taskName, setTaskName] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [dueTime, setDueTime] = useState("");
//   const [priority, setPriority] = useState("");
//   const [location, setLocation] = useState("");
//   const [details, setDetails] = useState("");
//   const [duration, setDuration] = useState("");
//   const [error, setError] = useState(null);
//   const [tasks, setTasks] = useState([]);
//   const [conflict, setConflict] = useState(null);

//   useEffect(() => {
//     if (dueDate) {
//       const fetchTasks = async () => {
//         try {
//           const authToken = localStorage.getItem("authToken");
//           const response = await axios.get(
//             `http://localhost:3001/reminders?date=${dueDate}`, // Fetch tasks for the selected date
//             {
//               headers: {
//                 Authorization: `Bearer ${authToken}`,
//               },
//             }
//           );
//           setTasks(response.data);
//         } catch (error) {
//           console.error("Error fetching tasks:", error);
//         }
//       };

//       fetchTasks();
//     }
//   }, [dueDate]);

//   const handleTaskNameChange = (e) => {
//     setTaskName(e.target.value);
//   };

//   const handleDueDateChange = (e) => {
//     setDueDate(e.target.value);
//   };

//   const handleDueTimeChange = (e) => {
//     setDueTime(e.target.value);
//   };

//   const handlePriorityChange = (e) => {
//     setPriority(e.target.value);
//   };

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleDetailsChange = (e) => {
//     setDetails(e.target.value);
//   };

//   const handleDurationChange = (e) => {
//     setDuration(e.target.value);
//   };

//   const getTaskDurationMinutes = (duration) => {
//     return {
//       "0-30 minutes": 30,
//       "1 hour": 60,
//       "2 hours": 120,
//       "3 hours": 180,
//       "4 hours and above": 240,
//     }[duration];
//   };

//   const checkForConflicts = () => {
//     if (!dueDate || !dueTime || !duration) return null;

//     const dueDateTime = new Date(`${dueDate}T${dueTime}:00`);
//     const taskDurationMinutes = getTaskDurationMinutes(duration);
//     const dueEndTime = new Date(dueDateTime.getTime() + taskDurationMinutes * 60000);

//     for (let task of tasks) {
//       const taskStartTime = new Date(task.due_date);
//       const taskEndTime = new Date(taskStartTime.getTime() + task.duration * 60000);
//       if (
//         (dueDateTime >= taskStartTime && dueDateTime < taskEndTime) ||
//         (dueEndTime > taskStartTime && dueEndTime <= taskEndTime) ||
//         (taskStartTime >= dueDateTime && taskStartTime < dueEndTime)
//       ) {
//         return task;
//       }
//     }

//     return null;
//   };

//   const suggestAlternativeTime = () => {
//     const taskDurationMinutes = getTaskDurationMinutes(duration);
//     const conflictingTaskEndTime = new Date(conflict.due_date).getTime() + conflict.duration * 60000;
//     let alternativeStartTime = new Date(conflictingTaskEndTime + 60000); // Start from the minute after the end of the conflicting task

//     while (true) {
//       let conflictFound = false;
//       for (let task of tasks) {
//         const taskStartTime = new Date(task.due_date);
//         const taskEndTime = new Date(taskStartTime.getTime() + task.duration * 60000);
//         if (
//           (alternativeStartTime >= taskStartTime && alternativeStartTime < taskEndTime) ||
//           (new Date(alternativeStartTime.getTime() + taskDurationMinutes * 60000) > taskStartTime &&
//             new Date(alternativeStartTime.getTime() + taskDurationMinutes * 60000) <= taskEndTime)
//         ) {
//           alternativeStartTime = new Date(taskEndTime.getTime() + 60000); // Move to the next minute after the conflicting task ends
//           conflictFound = true;
//           break;
//         }
//       }

//       if (!conflictFound) {
//         const alternativeEndTime = new Date(alternativeStartTime.getTime() + taskDurationMinutes * 60000);
//         if (alternativeEndTime.getDate() === new Date(dueDate).getDate()) {
//           return alternativeStartTime;
//         } else {
//           return null; // Entire day is fully booked
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     const conflictTask = checkForConflicts();
//     setConflict(conflictTask);
//     if (!conflictTask) {
//       setError(null);
//     }
//   }, [dueDate, dueTime, duration, tasks]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (conflict) {
//       const alternativeTime = suggestAlternativeTime();
//       if (alternativeTime) {
//         setError(`Task "${conflict.title}" is/will be at this time. Consider this alternative time: ${alternativeTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}.`);
//       } else {
//         setError(`Task "${conflict.title}" is/will be at this time. The entire day is fully booked.`);
//       }
//       return;
//     }
//     try {
//       const authToken = localStorage.getItem("authToken");

//       const dueDateTime = `${dueDate}T${dueTime}:00`;
//       const dueDateTimeISO = new Date(dueDateTime).toISOString();

//       const response = await axios.post(
//         "http://localhost:3001/reminders",
//         {
//           reminder: {
//             title: taskName,
//             due_date: dueDateTimeISO,
//             priority: priority,
//             location: location,
//             description: details,
//             duration: getTaskDurationMinutes(duration),
//           },
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         }
//       );

//       setTaskName("");
//       setDueDate("");
//       setDueTime("");
//       setPriority("");
//       setLocation("");
//       setDetails("");
//       setDuration("");
//       setError(null);
//       setConflict(null);
//       setTasks([...tasks, response.data]); // Update tasks with the new task
//     } catch (error) {
//       console.error("Error submitting task:", error);
//       setError("Error submitting task. Please try again.");
//     }
//   };

//   return (
//     <div className="bg-gray-100 rounded-lg shadow-md p-6 max-w-md mx-auto">
//       <h2 className="text-lg font-semibold mb-4 text-center">Create Task</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex flex-col">
//           <label
//             htmlFor="taskName"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Task Name
//           </label>
//           <input
//             type="text"
//             id="taskName"
//             value={taskName}
//             onChange={handleTaskNameChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label
//             htmlFor="dueDate"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Due Date
//           </label>
//           <input
//             type="date"
//             id="dueDate"
//             value={dueDate}
//             onChange={handleDueDateChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label
//             htmlFor="dueTime"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Due Time
//           </label>
//           <input
//             type="time"
//             id="dueTime"
//             value={dueTime}
//             onChange={handleDueTimeChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label
//             htmlFor="priority"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Priority
//           </label>
//           <select
//             id="priority"
//             value={priority}
//             onChange={handlePriorityChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           >
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//         </div>
//         <div className="flex flex-col">
//           <label
//             htmlFor="location"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Location
//           </label>
//           <input
//             type="text"
//             id="location"
//             value={location}
//             onChange={handleLocationChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label
//             htmlFor="details"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Details
//           </label>
//           <textarea
//             id="details"
//             value={details}
//             onChange={handleDetailsChange}
//             rows="4"
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label
//             htmlFor="duration"
//             className="text-sm font-medium text-gray-700 mb-1"
//           >
//             Duration
//           </label>
//           <select
//             id="duration"
//             value={duration}
//             onChange={handleDurationChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           >
//             <option value="">Select Duration</option>
//             <option value="0-30 minutes">0-30 minutes</option>
//             <option value="1 hour">1 hour</option>
//             <option value="2 hours">2 hours</option>
//             <option value="3 hours">3 hours</option>
//             <option value="4 hours and above">4 hours and above</option>
//           </select>
//         </div>
//         {error && <p className="text-red-500">{error}</p>}
//         {conflict && !error && (
//           <p className="text-red-500">
//             Task "{conflict.title}" is be at this time. Select another time.
//           </p>
//         )}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
//         >
//           Create Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CreateTask = () => {
//   const [taskName, setTaskName] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [dueTime, setDueTime] = useState("");
//   const [priority, setPriority] = useState("");
//   const [location, setLocation] = useState("");
//   const [details, setDetails] = useState("");
//   const [duration, setDuration] = useState("");
//   const [error, setError] = useState(null);
//   const [tasks, setTasks] = useState([]);
//   const [conflict, setConflict] = useState(null);
//   const [alternativeTime, setAlternativeTime] = useState(null);

//   useEffect(() => {
//     if (dueDate) {
//       const fetchTasks = async () => {
//         try {
//           const authToken = localStorage.getItem("authToken");
//           const response = await axios.get(
//             `http://localhost:3001/reminders?date=${dueDate}`,
//             {
//               headers: {
//                 Authorization: `Bearer ${authToken}`,
//               },
//             }
//           );
//           setTasks(response.data);
//         } catch (error) {
//           console.error("Error fetching tasks:", error);
//         }
//       };

//       fetchTasks();
//     }
//   }, [dueDate]);

//   const handleTaskNameChange = (e) => {
//     setTaskName(e.target.value);
//   };

//   const handleDueDateChange = (e) => {
//     setDueDate(e.target.value);
//   };

//   const handleDueTimeChange = (e) => {
//     setDueTime(e.target.value);
//   };

//   const handlePriorityChange = (e) => {
//     setPriority(e.target.value);
//   };

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleDetailsChange = (e) => {
//     setDetails(e.target.value);
//   };

//   const handleDurationChange = (e) => {
//     setDuration(e.target.value);
//   };

//   const getTaskDurationMinutes = (duration) => {
//     return {
//       "0-30 minutes": 30,
//       "1 hour": 60,
//       "2 hours": 120,
//       "3 hours": 180,
//       "4 hours and above": 240,
//     }[duration];
//   };

//   const checkForConflicts = () => {
//     if (!dueDate || !dueTime || !duration) return null;

//     const dueDateTime = new Date(`${dueDate}T${dueTime}:00`);
//     const taskDurationMinutes = getTaskDurationMinutes(duration);
//     const dueEndTime = new Date(dueDateTime.getTime() + taskDurationMinutes * 60000);

//     for (let task of tasks) {
//       const taskStartTime = new Date(task.due_date);
//       const taskEndTime = new Date(taskStartTime.getTime() + task.duration * 60000);
//       if (
//         (dueDateTime >= taskStartTime && dueDateTime < taskEndTime) ||
//         (dueEndTime > taskStartTime && dueEndTime <= taskEndTime) ||
//         (taskStartTime >= dueDateTime && taskStartTime < dueEndTime)
//       ) {
//         return task;
//       }
//     }

//     return null;
//   };

//   const suggestAlternativeTime = () => {
//     const taskDurationMinutes = getTaskDurationMinutes(duration);
//     const conflictingTaskEndTime = new Date(conflict.due_date).getTime() + conflict.duration * 60000;
//     let alternativeStartTime = new Date(conflictingTaskEndTime + 60000);

//     while (true) {
//       let conflictFound = false;
//       for (let task of tasks) {
//         const taskStartTime = new Date(task.due_date);
//         const taskEndTime = new Date(taskStartTime.getTime() + task.duration * 60000);
//         if (
//           (alternativeStartTime >= taskStartTime && alternativeStartTime < taskEndTime) ||
//           (new Date(alternativeStartTime.getTime() + taskDurationMinutes * 60000) > taskStartTime &&
//             new Date(alternativeStartTime.getTime() + taskDurationMinutes * 60000) <= taskEndTime)
//         ) {
//           alternativeStartTime = new Date(taskEndTime.getTime() + 60000);
//           conflictFound = true;
//           break;
//         }
//       }

//       if (!conflictFound) {
//         const alternativeEndTime = new Date(alternativeStartTime.getTime() + taskDurationMinutes * 60000);
//         if (alternativeEndTime.getDate() === new Date(dueDate).getDate()) {
//           return alternativeStartTime;
//         } else {
//           return null;
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     const conflictTask = checkForConflicts();
//     setConflict(conflictTask);
//     if (!conflictTask) {
//       setError(null);
//     }
//   }, [dueDate, dueTime, duration, tasks]);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Client-side validation
//     if (!taskName || !dueDate || !dueTime || !duration) {
//       setError("Please fill in all required fields.");
//       return;
//     }
  
//     // Check if the due date is in the past
//     const currentDate = new Date();
//     const selectedDateTime = new Date(`${dueDate}T${dueTime}:00`);
//     if (selectedDateTime < currentDate) {
//       setError("Due date cannot be in the past.");
//       return;
//     }
  
//     // Check for conflicts with existing tasks
//     const conflictTask = checkForConflicts();
//     if (conflictTask) {
//       setError(`Conflict with existing task: ${conflictTask.title}.`);
//       setAlternativeTime(suggestAlternativeTime());
//       return;
//     }
  
//     try {
//       const authToken = localStorage.getItem("authToken");
  
//       const dueDateTime = `${dueDate}T${dueTime}:00`;
//       const dueDateTimeISO = new Date(dueDateTime).toISOString();
//       const taskDurationMinutes = getTaskDurationMinutes(duration);
  
//       const payload = {
//         reminder: {
//           title: taskName,
//           due_date: dueDateTimeISO,
//           priority: priority,
//           location: location,
//           description: details,
//           duration: taskDurationMinutes,
//         },
//       };
  
//       const response = await axios.post(
//         "http://localhost:3001/reminders",
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         }
//       );
  
//       setTaskName("");
//       setDueDate("");
//       setDueTime("");
//       setPriority("");
//       setLocation("");
//       setDetails("");
//       setDuration("");
//       setError(null);
//       setConflict(null);
//       setAlternativeTime(null);
//       setTasks([...tasks, response.data]);
//     } catch (error) {
//       console.error("Error submitting task:", error);
//       setError("Error submitting task. Please try again.");
//     }
//   };

//   return (
//     <div className="bg-gray-100 rounded-lg shadow-md p-6 max-w-md mx-auto">
//       <h2 className="text-lg font-semibold mb-4 text-center">Create Task</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex flex-col">
//           <label htmlFor="taskName" className="text-sm font-medium text-gray-700 mb-1">
//             Task Name
//           </label>
//           <input
//             type="text"
//             id="taskName"
//             value={taskName}
//             onChange={handleTaskNameChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="dueDate" className="text-sm font-medium text-gray-700 mb-1">
//             Due Date
//           </label>
//           <input
//             type="date"
//             id="dueDate"
//             value={dueDate}
//             onChange={handleDueDateChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="dueTime" className="text-sm font-medium text-gray-700 mb-1">
//             Due Time
//           </label>
//           <input
//             type="time"
//             id="dueTime"
//             value={dueTime}
//             onChange={handleDueTimeChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="priority" className="text-sm font-medium text-gray-700 mb-1">
//             Priority
//           </label>
//           <select
//             id="priority"
//             value={priority}
//             onChange={handlePriorityChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           >
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-1">
//             Location
//           </label>
//           <input
//             type="text"
//             id="location"
//             value={location}
//             onChange={handleLocationChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="details" className="text-sm font-medium text-gray-700 mb-1">
//             Details
//           </label>
//           <textarea
//             id="details"
//             value={details}
//             onChange={handleDetailsChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="duration" className="text-sm font-medium text-gray-700 mb-1">
//             Duration
//           </label>
//           <select
//             id="duration"
//             value={duration}
//             onChange={handleDurationChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//           >
//               <option value="">Select Duration</option>
//             <option value="0-30 minutes">0-30 minutes</option>
//             <option value="1 hour">1 hour</option>
//             <option value="2 hours">2 hours</option>
//             <option value="3 hours">3 hours</option>
//             <option value="4 hours and above">4 hours and above</option>
//           </select>
//         </div>
//         {conflict && (
//           <div className="flex flex-col">
//             <label htmlFor="alternativeTime" className="text-sm font-medium text-gray-700 mb-1">
//               Alternative Time
//             </label>
//             <input
//               type="text"
//               id="alternativeTime"
//               value={alternativeTime ? alternativeTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
//               readOnly
//               className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
//             />
//           </div>
//         )}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white rounded-md p-3 w-full transition duration-300 ease-in-out hover:bg-blue-600"
//         >
//           Create Task
//         </button>
//         {error && (
//           <div className="text-red-500 text-sm mt-2">
//             {error}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default CreateTask;
import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateTask = () => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [priority, setPriority] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [conflict, setConflict] = useState(null);
  const [alternativeTime, setAlternativeTime] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (dueDate) {
      const fetchTasks = async () => {
        try {
          const authToken = localStorage.getItem("authToken");
          const response = await axios.get(
            `http://localhost:3001/reminders?date=${dueDate}`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
          setTasks(response.data);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      };

      fetchTasks();
    }
  }, [dueDate]);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleDueTimeChange = (e) => {
    setDueTime(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const getTaskDurationMinutes = (duration) => {
    return {
      "0-30 minutes": 30,
      "1 hour": 60,
      "2 hours": 120,
      "3 hours": 180,
      "4 hours and above": 240,
    }[duration];
  };

  const checkForConflicts = () => {
    if (!dueDate || !dueTime || !duration) return null;

    const dueDateTime = new Date(`${dueDate}T${dueTime}:00`);
    const taskDurationMinutes = getTaskDurationMinutes(duration);
    const dueEndTime = new Date(dueDateTime.getTime() + taskDurationMinutes * 60000);

    for (let task of tasks) {
      const taskStartTime = new Date(task.due_date);
      const taskEndTime = new Date(taskStartTime.getTime() + task.duration * 60000);
      if (
        (dueDateTime >= taskStartTime && dueDateTime < taskEndTime) ||
        (dueEndTime > taskStartTime && dueEndTime <= taskEndTime) ||
        (taskStartTime >= dueDateTime && taskStartTime < dueEndTime)
      ) {
        return task;
      }
    }

    return null;
  };

  const suggestAlternativeTime = () => {
    const taskDurationMinutes = getTaskDurationMinutes(duration);
    const conflictingTaskEndTime = new Date(conflict.due_date).getTime() + conflict.duration * 60000;
    let alternativeStartTime = new Date(conflictingTaskEndTime + 60000);

    while (true) {
      let conflictFound = false;
      for (let task of tasks) {
        const taskStartTime = new Date(task.due_date);
        const taskEndTime = new Date(taskStartTime.getTime() + task.duration * 60000);
        if (
          (alternativeStartTime >= taskStartTime && alternativeStartTime < taskEndTime) ||
          (new Date(alternativeStartTime.getTime() + taskDurationMinutes * 60000) > taskStartTime &&
            new Date(alternativeStartTime.getTime() + taskDurationMinutes * 60000) <= taskEndTime)
        ) {
          alternativeStartTime = new Date(taskEndTime.getTime() + 60000);
          conflictFound = true;
          break;
        }
      }

      if (!conflictFound) {
        const alternativeEndTime = new Date(alternativeStartTime.getTime() + taskDurationMinutes * 60000);
        if (alternativeEndTime.getDate() === new Date(dueDate).getDate()) {
          return alternativeStartTime;
        } else {
          return null;
        }
      }
    }
  };

  useEffect(() => {
    const conflictTask = checkForConflicts();
    setConflict(conflictTask);
    if (!conflictTask) {
      setError(null);
    }
  }, [dueDate, dueTime, duration, tasks]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!taskName || !dueDate || !dueTime || !duration) {
      setError("Please fill in all required fields.");
      return;
    }

    // Check if the due date is in the past
    const currentDate = new Date();
    const selectedDateTime = new Date(`${dueDate}T${dueTime}:00`);
    if (selectedDateTime < currentDate) {
      setError("Due date cannot be in the past.");
      return;
    }

    // Check for conflicts with existing tasks
    const conflictTask = checkForConflicts();
    if (conflictTask) {
      setError(`Conflict with existing task: ${conflictTask.title}.`);
      setAlternativeTime(suggestAlternativeTime());
      return;
    }

    try {
      const authToken = localStorage.getItem("authToken");

      const dueDateTime = `${dueDate}T${dueTime}:00`;
      const dueDateTimeISO = new Date(dueDateTime).toISOString();
      const taskDurationMinutes = getTaskDurationMinutes(duration);

      const payload = {
        reminder: {
          title: taskName,
          due_date: dueDateTimeISO,
          priority: priority,
          location: location,
          description: details,
          duration: taskDurationMinutes,
        },
      };

      const response = await axios.post(
        "http://localhost:3001/reminders",
        payload,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setTaskName("");
      setDueDate("");
      setDueTime("");
      setPriority("");
      setLocation("");
      setDetails("");
      setDuration("");
      setError(null);
      setConflict(null);
      setAlternativeTime(null);
      setTasks([...tasks, response.data]);

      // Display success notification
      setSuccessMessage("Task created successfully!");
      setTimeout(() => setSuccessMessage(null), 3000); // Clear the message after 3 seconds
    } catch (error) {
      console.error("Error submitting task:", error);
      setError("Error submitting task. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-center">Create Task</h2>
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">{successMessage}</strong>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="taskName" className="text-sm font-medium text-gray-700 mb-1">
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={handleTaskNameChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dueDate" className="text-sm font-medium text-gray-700 mb-1">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={handleDueDateChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dueTime" className="text-sm font-medium text-gray-700 mb-1">
            Due Time
          </label>
          <input
            type="time"
            id="dueTime"
            value={dueTime}
            onChange={handleDueTimeChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="priority" className="text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            id="priority"
            value={priority}
            onChange={handlePriorityChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="details" className="text-sm font-medium text-gray-700 mb-1">
            Details
          </label>
          <textarea
            id="details"
            value={details}
            onChange={handleDetailsChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="duration" className="text-sm font-medium text-gray-700 mb-1">
            Duration
          </label>
          <select
            id="duration"
            value={duration}
            onChange={handleDurationChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
          >
            <option value="">Select Duration</option>
            <option value="0-30 minutes">0-30 minutes</option>
            <option value="1 hour">1 hour</option>
            <option value="2 hours">2 hours</option>
            <option value="3 hours">3 hours</option>
            <option value="4 hours and above">4 hours and above</option>
          </select>
        </div>
        {conflict && (
          <div className="flex flex-col">
            <label htmlFor="alternativeTime" className="text-sm font-medium text-gray-700 mb-1">
              Alternative Time
            </label>
            <input
              type="text"
              id="alternativeTime"
              value={alternativeTime ? alternativeTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
              readOnly
              className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-3 w-full transition duration-300 ease-in-out hover:bg-blue-600"
        >
          Create Task
        </button>
        {error && (
          <div className="text-red-500 text-sm mt-2">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default CreateTask;
