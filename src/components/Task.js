
// import React, { Component } from "react";
// import axios from 'axios';

// class Task extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       search: "",
//       tasks: [],
//       activeTask: null,
//       isPopupOpen: false,
//       editedTask: null,
//     };
//   }

//   componentDidMount() {
//     this.fetchTasks(); // Fetch tasks when the component mounts
//   }

//   fetchTasks = async () => {
//     try {
//       const authToken = localStorage.getItem('authToken');
//       console.log('Auth token:', authToken); // Log the auth token
      
//       const response = await axios.get("http://localhost:3001/reminders", {
//         headers: {
//           Authorization: `Bearer ${authToken}`, // Include the auth token in the request headers
//           Accept: 'application/json' // Specify that you expect JSON data
//         }
//       });
//       console.log('Tasks:', response.data); // Log the fetched tasks
//       this.setState({ tasks: response.data }); // Update the component state with the fetched tasks
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
//     }
//   };

//   handleSearchChange = (event) => {
//     this.setState({ search: event.target.value });
//   };

//   // handleDateSearch = (event) => {
//   //   const searchDate = new Date(event.target.value);
//   //   this.setState({ search: searchDate.toDateString() });
//   // };
//   handleDateSearch = (event) => {
//     const searchDate = new Date(event.target.value); // Convert input value to Date object
//     const formattedSearchDate = searchDate.toDateString(); // Format the Date object to string
  
//     this.setState({ search: formattedSearchDate }); // Update the search state
//   };
  

//   handleTaskClick = (task) => {
//     this.setState({
//       activeTask: task,
//       editedTask: { ...task },
//       isPopupOpen: true,
//     });
//   };

//   handleClosePopup = () => {
//     this.setState({ isPopupOpen: false });
//   };

//   handleInputChange = (event, property) => {
//     const { editedTask } = this.state;
//     let value = event.target.value;

//     // If the property being changed is 'timestamp', parse the date string into a Date object
//     if (property === "timestamp") {
//       value = new Date(value);
//     }

//     this.setState({ editedTask: { ...editedTask, [property]: value } });
//   };

//   handleSaveChanges = () => {
//     const { tasks, editedTask } = this.state;
//     const updatedTasks = tasks.map((task) =>
//       task.id === editedTask.id ? { ...editedTask } : task
//     );
//     this.setState({ tasks: updatedTasks, isPopupOpen: false });
//   };

//   handleDeleteTask = async () => {
//     const { tasks, editedTask } = this.state;
//     try {
//       const authToken = localStorage.getItem('authToken');

//       // Delete task from the backend
//       await axios.delete(`http://localhost:3001/reminders/${editedTask.id}`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`, // Include the auth token in the request headers
//           Accept: 'application/json' // Specify that you expect JSON data
//         }
//       });
      
//       const updatedTasks = tasks.filter((task) => task.id !== editedTask.id);
//       this.setState({ tasks: updatedTasks, isPopupOpen: false });
//     } catch (error) {
//       console.error("Error deleting task:", error);
//     }
//   };
  

//   render() {
//     const { search, tasks, activeTask, isPopupOpen, editedTask } = this.state;

//     // Filter tasks based on search input
//    // Filter tasks based on search input
// const filteredTasks = tasks.filter(
//   (task) =>
//     task.title.toLowerCase().includes(search.toLowerCase()) ||
//     task.priority.toLowerCase().includes(search.toLowerCase()) ||
//     new Date(task.due_date).toDateString() === search // Compare with formatted due date
// );

//     return (
//       <div className="max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md overflow-hidden">
//         <h2 className="text-3xl font-bold bg-white text-black py-4 text-center">
//           Task 
//         </h2>
//         {/* Search bar */}
//         <div className="px-4 py-2">
//           <input
//             type="text"
//             placeholder="Search tasks by title or priority..."
//             value={search}
//             onChange={this.handleSearchChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
//           />
//           <div className="flex items-center">
//             <label className="block text-gray-700 mr-2">Search by date:</label>
//             <input
//               type="date"
//               onChange={this.handleDateSearch}
//               className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             />
//           </div>
//         </div>
        
//         {filteredTasks.length === 0 ? (
//           <p className="text-gray-500 px-4 py-2">No tasks found.</p>
//         ) : (
//           filteredTasks.map((task) => (
//             <div
//               key={task.id}
//               className="bg-white rounded-md p-4 mb-4 cursor-pointer hover:shadow-md transition duration-300"
//               onClick={() => this.handleTaskClick(task)}
//             >
//               <h3 className="text-xl font-semibold mb-1">{task.title}</h3>
//               <p className="text-sm text-gray-600 mb-2">
//                 Due Date: {new Date(task.due_date).toLocaleDateString()}
//               </p>
//               <p className="text-sm text-gray-600 mb-2">Location: {task.location}</p>
//               <span
//                 className={`text-xs font-semibold inline-block px-2 py-1 rounded-full ${
//                   task.priority === "high"
//                     ? "bg-red-600 text-white"
//                     : task.priority === "medium"
//                     ? "bg-orange-500 text-white"
//                     : "bg-green-500 text-white"
//                 }`}
//               >
//                 {task.priority}
//               </span>
//             </div>
//           ))
//         )}

//         {/* Task Details Popup */}
//         {isPopupOpen && editedTask && (
//           <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 backdrop-filter backdrop-blur-md bg-gray-100 bg-opacity-50">
//             <div className="bg-white rounded-lg p-6 max-w-md">
//               <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-4">
//                 Edit Task
//               </h2>
//               <input
//                 type="text"
//                 value={editedTask.title}
//                 onChange={(e) => this.handleInputChange(e, "title")}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
//                 placeholder="Task title..."
//               />
//               <textarea
//                 value={editedTask.details}
//                 onChange={(e) => this.handleInputChange(e, "details")}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
//                 rows="4"
//                 placeholder="Task details..."
//               ></textarea>
//               <input
//                 type="datetime-local"
//                 value={editedTask.timestamp ? editedTask.timestamp.toISOString().slice(0, 16) : ""}
//                 onChange={(e) => this.handleInputChange(e, "timestamp")}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
//               />
//               <input/>
               
//                <select
//                value={editedTask.priority}
//                onChange={(e) => this.handleInputChange(e, "priority")}
//                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
//              >
//                <option value="high">High</option>
//                <option value="medium">Medium</option>
//                <option value="low">Low</option>
//              </select>
//              <input
//                type="text"
//                value={editedTask.location}
//                onChange={(e) => this.handleInputChange(e, "location")}
//                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
//                placeholder="Task location..."
//              />
//              <div className="mt-4 flex justify-between">
//                <button
//                  onClick={this.handleSaveChanges}
//                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//                >
//                  Save
//                </button>
//                <button
//                  onClick={this.handleDeleteTask}
//                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
//                >
//                  Delete
//                </button>
//                <button
//                  onClick={this.handleClosePopup}
//                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
//                >
//                  Close
//                </button>
//              </div>
//            </div>
//          </div>
//        )}
//      </div>
//    );
//  }
// }

// export default Task;
import React, { Component } from "react";
import axios from 'axios';
// Convert the local time to UTC before sending it to the server
const currentTimeUTC = new Date().toISOString();

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      tasks: [],
      activeTask: null,
      isPopupOpen: false,
      editedTask: null,
    };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get("http://localhost:3001/reminders", {
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: 'application/json'
        }
      });
      this.setState({ tasks: response.data });
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleDateSearch = (event) => {
    const searchDate = new Date(event.target.value);
    const formattedSearchDate = searchDate.toDateString();
    this.setState({ search: formattedSearchDate });
  };

  handleTaskClick = (task) => {
    this.setState({
      activeTask: task,
      editedTask: { ...task },
      isPopupOpen: true,
    });
  };

  handleClosePopup = () => {
    this.setState({ isPopupOpen: false });
  };
  handleInputChange = (event, property) => {
    const { editedTask } = this.state;
    let value = event.target.value;
  
    if (property === "timestamp") {
      // Convert the selected time to the user's local time zone
      const selectedTime = new Date(value);
      const offset = selectedTime.getTimezoneOffset() * 60000; // Offset in milliseconds
      value = new Date(selectedTime.getTime() - offset);
    }
  
    this.setState({ editedTask: { ...editedTask, [property]: value } });
  };
  

  handleSaveChanges = async () => {
    const { editedTask } = this.state;
    const authToken = localStorage.getItem('authToken');
  
    // Get the current time in the browser's time zone
    const currentTime = new Date().toISOString().slice(0, 16);
  
    // Update the task with the current time
    const updatedTask = { ...editedTask, timestamp: currentTime };
  
    try {
      const response = await axios.put(`http://localhost:3001/reminders/${updatedTask.id}`, 
        { reminder: updatedTask }, 
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
  
      const updatedTasks = this.state.tasks.map(task =>
        task.id === updatedTask.id ? { ...updatedTask } : task
      );
  
      this.setState({ tasks: updatedTasks, isPopupOpen: false });
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Check if errors is an array before joining its elements
        const errorMessage = Array.isArray(error.response.data.errors) 
          ? error.response.data.errors.join(', ') 
          : error.response.data.errors;
        alert(`Error: ${errorMessage}`);
      } else {
        console.error("Error saving task:", error);
      }
    }
  };
  
  
  
  
  

  handleDeleteTask = async () => {
    const { tasks, editedTask } = this.state;
    try {
      const authToken = localStorage.getItem('authToken');
      await axios.delete(`http://localhost:3001/reminders/${editedTask.id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: 'application/json'
        }
      });

      const updatedTasks = tasks.filter((task) => task.id !== editedTask.id);
      this.setState({ tasks: updatedTasks, isPopupOpen: false });
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  render() {
    const { search, tasks, isPopupOpen, editedTask } = this.state;

    const filteredTasks = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.priority.toLowerCase().includes(search.toLowerCase()) ||
        new Date(task.due_date).toDateString() === search
    );

    return (
      <div className="max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <h2 className="text-3xl font-bold bg-white text-black py-4 text-center">
          Task
        </h2>
        <div className="px-4 py-2">
          <input
            type="text"
            placeholder="Search tasks by title or priority..."
            value={search}
            onChange={this.handleSearchChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
          />
          <div className="flex items-center">
            <label className="block text-gray-700 mr-2">Search by date:</label>
            <input
              type="date"
              onChange={this.handleDateSearch}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 px-4 py-2">No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-md p-4 mb-4 cursor-pointer hover:shadow-md transition duration-300"
              onClick={() => this.handleTaskClick(task)}
            >
              <h3 className="text-xl font-semibold mb-1">{task.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                Due Date: {new Date(task.due_date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 mb-2">Location: {task.location}</p>
              <span
                className={`text-xs font-semibold inline-block px-2 py-1 rounded-full ${
                  task.priority === "high"
                    ? "bg-red-600 text-white"
                    : task.priority === "medium"
                    ? "bg-orange-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {task.priority}
              </span>
            </div>
          ))
        )}

        {isPopupOpen && editedTask && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 backdrop-filter backdrop-blur-md bg-gray-100 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-md">
              <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-4">
                Edit Task
              </h2>
              <input
                type="text"
                value={editedTask.title}
                onChange={(e) => this.handleInputChange(e, "title")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                placeholder="Task title..."
              />
              <textarea
                value={editedTask.details}
                onChange={(e) => this.handleInputChange(e, "details")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                rows="4"
                placeholder="Task details..."
              ></textarea>
              <input
                type="datetime-local"
                value={editedTask.timestamp ? new Date(editedTask.timestamp).toISOString().slice(0, 16) : ""}
                onChange={(e) => this.handleInputChange(e, "timestamp")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
              />
              <select
                value={editedTask.priority}
                onChange={(e) => this.handleInputChange(e, "priority")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <input
                type="text"
                value={editedTask.location}
                onChange={(e) => this.handleInputChange(e, "location")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                placeholder="Task location..."
              />
              <div className="mt-4 flex justify-between">
                <button
                  onClick={this.handleSaveChanges}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={this.handleDeleteTask}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={this.handleClosePopup}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Task;
