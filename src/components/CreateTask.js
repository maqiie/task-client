import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
const isLoggedIn = true; // Placeholder value for isLoggedIn

const CreateTask = () => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [priority, setPriority] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [error, setError] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = localStorage.getItem('authToken');
      console.log('Auth token:', authToken); // Log the auth token
      
      const dueDateTime = new Date(dueDate + 'T' + dueTime + ':00').toISOString(); // Combine date and time
      const response = await axios.post('http://localhost:3001/reminders', {
        reminder: {
          title: taskName,
          due_date: dueDateTime,
          priority: priority,
          location: location,
          description: details
        }
      }, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log('Task submitted:', response.data); // Log the response data
      // Optionally, you can handle success and reset form fields here
      setTaskName('');
      setDueDate('');
      setDueTime('');
      setPriority('');
      setLocation('');
      setDetails('');
      setError(null);
    } catch (error) {
      console.error('Error submitting task:', error);
      setError('Error submitting task. Please try again.');
    }
  };
  
  // Log the login status
  console.log('Is user logged in?', isLoggedIn);

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-center">Create Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="taskName" className="text-sm font-medium text-gray-700 mb-1">Task Name</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={handleTaskNameChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dueDate" className="text-sm font-medium text-gray-700 mb-1">Due Date</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={handleDueDateChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
          />
        </div>
        {/* <div className="flex flex-col">
          <label htmlFor="dueTime" className="text-sm font-medium text-gray-700 mb-1">Due Time</label>
          <input
            type="time"
            id="dueTime"
            value={dueTime}
            onChange={handleDueTimeChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
          />
        </div> */}
        <div className="flex flex-col">
  <label htmlFor="dueTime" className="text-sm font-medium text-gray-700 mb-1">Due Time</label>
  <input
    type="time"
    id="dueTime"
    value={dueTime}
    onChange={handleDueTimeChange}
    className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500
               focus:ring-2 focus:ring-blue-500 bg-gray-100 placeholder-gray-400 text-gray-700
               hover:bg-gray-200 hover:border-gray-400 focus:bg-white focus:shadow-md"
    // Add Tailwind CSS classes to style the time input
    style={{ padding: '0.75rem 1rem', borderRadius: '0.375rem' }} // Adjust padding and border-radius for better appearance
  />
</div>

        <div className="flex flex-col">
          <label htmlFor="priority" className="text-sm font-medium text-gray-700 mb-1">Priority</label>
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
          <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="details" className="text-sm font-medium text-gray-700 mb-1">Details</label>
          <textarea
            id="details"
            value={details}
            onChange={handleDetailsChange}
            rows="4"
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full transition duration-300 ease-in-out hover:border-blue-500"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;

// import React, { useState } from 'react';
// import axios from 'axios'; // Import Axios
// const isLoggedIn = true; // Placeholder value for isLoggedIn

// const CreateTask = () => {
//   const [taskName, setTaskName] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [dueTime, setDueTime] = useState('');
//   const [priority, setPriority] = useState('');
//   const [location, setLocation] = useState('');
//   const [details, setDetails] = useState('');
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const authToken = localStorage.getItem('authToken');
//       console.log('Auth token:', authToken); // Log the auth token
      
//       const dueDateTime = new Date(dueDate + 'T' + dueTime + ':00').toISOString(); // Combine date and time
//       const response = await axios.post('http://localhost:3001/reminders', {
//         reminder: {
//           title: taskName,
//           due_date: dueDateTime,
//           priority: priority,
//           location: location,
//           description: details
//         }
//       }, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });
//       console.log('Task submitted:', response.data); // Log the response data
//       // Optionally, you can handle success and reset form fields here
//       setTaskName('');
//       setDueDate('');
//       setDueTime('');
//       setPriority('');
//       setLocation('');
//       setDetails('');
//       setError(null);
//     } catch (error) {
//       console.error('Error submitting task:', error);
//       setError('Error submitting task. Please try again.');
//     }
//   };
  
//   // Log the login status
//   console.log('Is user logged in?', isLoggedIn);

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
//       <h2 className="text-lg font-semibold mb-4 text-center">Create Task</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex flex-col">
//           <label htmlFor="taskName" className="text-sm font-medium text-gray-700 mb-1">Task Name</label>
//           <input
//             type="text"
//             id="taskName"
//             value={taskName}
//             onChange={handleTaskNameChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="dueDate" className="text-sm font-medium text-gray-700 mb-1">Due Date</label>
//           <input
//             type="date"
//             id="dueDate"
//             value={dueDate}
//             onChange={handleDueDateChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="dueTime" className="text-sm font-medium text-gray-700 mb-1">Due Time</label>
//           <input
//             type="time"
//             id="dueTime"
//             value={dueTime}
//             onChange={handleDueTimeChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="priority" className="text-sm font-medium text-gray-700 mb-1">Priority</label>
//           <select
//             id="priority"
//             value={priority}
//             onChange={handlePriorityChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//           >
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-1">Location</label>
//           <input
//             type="text"
//             id="location"
//             value={location}
//             onChange={handleLocationChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="details" className="text-sm font-medium text-gray-700 mb-1">Details</label>
//           <textarea
//             id="details"
//             value={details}
//             onChange={handleDetailsChange}
//             rows="4"
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//           />
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
// import React, { useState } from 'react';
// import axios from 'axios'; // Import Axios
// const isLoggedIn = true; // Placeholder value for isLoggedIn

// const CreateTask = () => {
//   const [taskName, setTaskName] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [dueTime, setDueTime] = useState('');
//   const [priority, setPriority] = useState('');
//   const [location, setLocation] = useState('');
//   const [details, setDetails] = useState('');
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const authToken = localStorage.getItem('authToken');
//       console.log('Auth token:', authToken); // Log the auth token
      
//       const dueDateTime = new Date(dueDate + 'T' + dueTime + ':00').toISOString(); // Combine date and time
//       const response = await axios.post('http://localhost:3001/reminders', {
//         reminder: {
//           title: taskName,
//           due_date: dueDateTime,
//           priority: priority,
//           location: location,
//           description: details
//         }
//       }, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });
//       console.log('Task submitted:', response.data); // Log the response data
//       // Optionally, you can handle success and reset form fields here
//       setTaskName('');
//       setDueDate('');
//       setDueTime('');
//       setPriority('');
//       setLocation('');
//       setDetails('');
//       setError(null);
//     } catch (error) {
//       console.error('Error submitting task:', error);
//       setError('Error submitting task. Please try again.');
//     }
//   };
  
//   // Log the login status
//   console.log('Is user logged in?', isLoggedIn);

//   return (
//     <div className="bg-gray-100 rounded-lg shadow-md p-6 max-w-md mx-auto">
//       <h2 className="text-lg font-semibold mb-4 text-center">Create Task</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex flex-col">
//           <label htmlFor="taskName" className="text-sm font-medium text-gray-700 mb-1">Task Name</label>
//           <input
//             type="text"
//             id="taskName"
//             value={taskName}
//             onChange={handleTaskNameChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="dueDate" className="text-sm font-medium text-gray-700 mb-1">Due Date</label>
//           <input
//             type="date"
//             id="dueDate"
//             value={dueDate}
//             onChange={handleDueDateChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="dueTime" className="text-sm font-medium text-gray-700 mb-1">Due Time</label>
//           <input
//             type="time"
//             id="dueTime"
//             value={dueTime}
//             onChange={handleDueTimeChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="priority" className="text-sm font-medium text-gray-700 mb-1">Priority</label>
//           <select
//             id="priority"
//             value={priority}
//             onChange={handlePriorityChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full"
//           >
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-1">Location</label>
//           <input
//             type="text"
//             id="location"
//             value={location}
//             onChange={handleLocationChange}
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="details" className="text-sm font-medium text-gray-700 mb-1">Details</label>
//           <textarea
//             id="details"
//             value={details}
//             onChange={handleDetailsChange}
//             rows="4"
//             className="rounded-md border border-gray-300 p-3 focus:outline-none focus:border-blue-500 w-full"
//           />
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
