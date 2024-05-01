// import React, { useState } from 'react';

// const CreateTask = () => {
//   const [taskName, setTaskName] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [priority, setPriority] = useState('');
//   const [location, setLocation] = useState('');
//   const [details, setDetails] = useState('');

//   const handleTaskNameChange = (e) => {
//     setTaskName(e.target.value);
//   };

//   const handleDueDateChange = (e) => {
//     setDueDate(e.target.value);
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic to submit the task data
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
//       <h2 className="text-lg font-semibold mb-4 text-center">Create Task</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="taskName" className="block text-sm font-medium text-gray-700">Task Name</label>
//           <input type="text" id="taskName" value={taskName} onChange={handleTaskNameChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>
//         <div>
//           <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
//           <input type="date" id="dueDate" value={dueDate} onChange={handleDueDateChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>
//         <div>
//           <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
//           <select id="priority" value={priority} onChange={handlePriorityChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
//           <input type="text" id="location" value={location} onChange={handleLocationChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>
//         <div>
//           <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details</label>
//           <textarea id="details" value={details} onChange={handleDetailsChange} rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">Create Task</button>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;

import React, { useState } from 'react';

const CreateTask = () => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the task data (e.g., send to server, store locally)
    console.log('Task submitted:', { taskName, dueDate, priority, location, details });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-center">Create Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="taskName" className="text-sm font-medium text-gray-700 mb-1">Task Name</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={handleTaskNameChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dueDate" className="text-sm font-medium text-gray-700 mb-1">Due Date</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={handleDueDateChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="priority" className="text-sm font-medium text-gray-700 mb-1">Priority</label>
          <select
            id="priority"
            value={priority}
            onChange={handlePriorityChange}
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
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
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="details" className="text-sm font-medium text-gray-700 mb-1">Details</label>
          <textarea
            id="details"
            value={details}
            onChange={handleDetailsChange}
            rows="4"
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
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
