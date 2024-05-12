// import React, { Component } from 'react';
// import Modal from 'react-modal';

// class Task extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             search: '',
//             tasks: [
//                 { id: 1, title: "Task 1", priority: "high", timestamp: new Date("2024-05-02T10:00:00Z") },
//                 { id: 2, title: "Task 2", priority: "low", timestamp: new Date("2024-05-01T15:00:00Z") },
//
//             ],
//             activeTask: null,
//             modalIsOpen: false,
//             modalPosition: { top: 0, left: 0 },
//         };
//     }

//     handleSearchChange = (event) => {
//         this.setState({ search: event.target.value });
//     };

//     handleDateSearch = (event) => {
//         const searchDate = new Date(event.target.value);
//         this.setState({ search: searchDate.toDateString() });
//     };

//     handleTaskClick = (task, position) => {
//         this.setState({ activeTask: task, modalIsOpen: true, modalPosition: position });
//     };

//     handleCloseModal = () => {
//         this.setState({ modalIsOpen: false });
//     };

//     render() {
//         const { search, tasks, activeTask, modalIsOpen, modalPosition } = this.state;

//         // Filter tasks based on search input
//         const filteredTasks = tasks.filter(task =>
//             task.title.toLowerCase().includes(search.toLowerCase()) ||
//             task.priority.toLowerCase().includes(search.toLowerCase())
//         );

//         return (
//             <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-4">
//                 <h2 className="text-xl font-bold mb-4">Tasks</h2>
//                 {/* Search bar */}
//                 <div className="mb-4">
//                     <input
//                         type="text"
//                         placeholder="Search tasks by title or priority..."
//                         value={search}
//                         onChange={this.handleSearchChange}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                     />
//                     <label className="block mt-2 text-gray-700">Search by date:</label>
//                     <input
//                         type="date"
//                         onChange={this.handleDateSearch}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                     />
//                 </div>
//                 {/* Render tasks */}
//                 {filteredTasks.length === 0 ? (
//                     <p className="text-gray-500">No tasks found.</p>
//                 ) : (
//                     filteredTasks.map(task => (
//                         <div key={task.id} className="bg-gray-100 rounded-md p-4 mb-4 cursor-pointer" onClick={(e) => this.handleTaskClick(task, { top: e.clientY, left: e.clientX })}>
//                             <h3 className="text-lg font-semibold">{task.title}</h3>
//                             <p className="text-sm text-gray-600">{task.timestamp.toLocaleString()}</p>
//                             <span className={`text-sm font-semibold inline-block mt-2 px-2 py-1 rounded-full ${task.priority === 'high' ? 'bg-red-600 text-white' : task.priority === 'medium' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}>{task.priority}</span>
//                         </div>
//                     ))
//                 )}
//                 {/* Task Details Modal */}
//                 <Modal
//                     isOpen={modalIsOpen}
//                     onRequestClose={this.handleCloseModal}
//                     className="modal"
//                     overlayClassName="overlay"
//                     style={{
//                         content: {
//                             top: modalPosition.top + 'px',
//                             left: modalPosition.left + 'px'
//                         }
//                     }}
//                 >
//                     <div className="modal-content">
//                         {activeTask && (
//                             <>
//                                 <h2>{activeTask.title}</h2>
//                                 <p>{activeTask.timestamp.toLocaleString()}</p>
//                                 <p>Priority: {activeTask.priority}</p>
//                                 {/* Add more task details here */}
//                             </>
//                         )}
//                         <button onClick={this.handleCloseModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Close</button>
//                     </div>
//                 </Modal>
//             </div>
//         );
//     }
// }

// export default Task;

// import React, { Component } from 'react';

// class Task extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             search: '',
//             tasks: [
//                 { id: 1, title: "Task 1", priority: "high", timestamp: new Date("2024-05-02T10:00:00Z"), details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec diam id purus egestas vehicula." },
//                 { id: 2, title: "Task 2", priority: "low", timestamp: new Date("2024-05-01T15:00:00Z"), details: "Suspendisse potenti. Vestibulum efficitur, velit nec consequat dictum, lectus magna tincidunt odio." },
//                 // Add more tasks here
//             ],
//             activeTask: null,
//             isPopupOpen: false,
//             editedTask: null,
//         };
//     }

//     handleSearchChange = (event) => {
//         this.setState({ search: event.target.value });
//     };

//     handleDateSearch = (event) => {
//         const searchDate = new Date(event.target.value);
//         this.setState({ search: searchDate.toDateString() });
//     };

//     handleTaskClick = (task) => {
//         this.setState({ activeTask: task, editedTask: { ...task }, isPopupOpen: true });
//     };

//     handleClosePopup = () => {
//         this.setState({ isPopupOpen: false });
//     };

//     handleInputChange = (event, property) => {
//         const { editedTask } = this.state;
//         const value = event.target.value;
//         this.setState({ editedTask: { ...editedTask, [property]: value } });
//     };

//     handleSaveChanges = () => {
//         const { tasks, editedTask } = this.state;
//         const updatedTasks = tasks.map(task =>
//             task.id === editedTask.id ? { ...editedTask } : task
//         );
//         this.setState({ tasks: updatedTasks, isPopupOpen: false });
//     };

//     handleDeleteTask = () => {
//         const { tasks, editedTask } = this.state;
//         const updatedTasks = tasks.filter(task => task.id !== editedTask.id);
//         this.setState({ tasks: updatedTasks, isPopupOpen: false });
//     };

//     render() {
//         const { search, tasks, activeTask, isPopupOpen, editedTask } = this.state;

//         // Filter tasks based on search input
//         const filteredTasks = tasks.filter(task =>
//             task.title.toLowerCase().includes(search.toLowerCase()) ||
//             task.priority.toLowerCase().includes(search.toLowerCase())
//         );

//         return (
//             <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//                 <h2 className="text-2xl font-bold bg-indigo-600 text-white py-4 text-center">Tasks</h2>
//                 {/* Search bar */}
//                 <div className="px-4 py-2">
//                     <input
//                         type="text"
//                         placeholder="Search tasks by title or priority..."
//                         value={search}
//                         onChange={this.handleSearchChange}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                     />
//                     <label className="block mt-2 text-gray-700">Search by date:</label>
//                     <input
//                         type="date"
//                         onChange={this.handleDateSearch}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mt-2"
//                     />
//                 </div>
//                 {/* Render tasks */}
//                 {filteredTasks.length === 0 ? (
//                     <p className="text-gray-500 px-4 py-2">No tasks found.</p>
//                 ) : (
//                     filteredTasks.map(task => (
//                         <div key={task.id} className="bg-gray-100 rounded-md p-4 mb-4 cursor-pointer hover:shadow-md transition duration-300" onClick={() => this.handleTaskClick(task)}>
//                             <h3 className="text-xl font-semibold mb-1">{task.title}</h3>
//                             <p className="text-sm text-gray-600">{task.timestamp.toLocaleString()}</p>
//                             <span className={`text-xs font-semibold inline-block mt-2 px-2 py-1 rounded-full ${task.priority === 'high' ? 'bg-red-600 text-white' : task.priority === 'medium' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}>{task.priority}</span>
//                         </div>
//                     ))
//                 )}
//                 {/* Task Details Popup */}
//                 {isPopupOpen && editedTask && (
//                     <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 backdrop-filter backdrop-blur-md bg-indigo-100 bg-opacity-50">
//                         <div className="bg-white rounded-lg p-6 max-w-md">
//                             <h2 className="text-2xl font-bold mb-2">Edit Task</h2>
//                             <input
//                                 type="text"
//                                 value={editedTask.title}
//                                 onChange={(e) => this.handleInputChange(e, 'title')}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mb-4"
//                                 placeholder="Task title..."
//                             />
//                             <textarea
//                                 value={editedTask.details}
//                                 onChange={(e) => this.handleInputChange(e, 'details')}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mb-4"
//                                 rows="4"
//                                 placeholder="Task details..."
//                             ></textarea>
//                             <input
//                                 type="datetime-local"
//                                 value={editedTask.timestamp.toISOString().slice(0, 16)}
//                                 onChange={(e) => this.handleInputChange(e, 'timestamp')}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mb-4"
//                             />
//                             <select
//                                 value={editedTask.priority}
//                                 onChange={(e) => this.handleInputChange(e, 'priority')}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mb-4"
//                             >
//                                 <option value="high">High</option>
//                                 <option value="medium">Medium</option>
//                                 <option value="low">Low</option>
//                             </select>
//                             <div className="mt-4 flex justify-between">
//                                 <button onClick={this.handleSaveChanges} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Save</button>
//                                 <button onClick={this.handleDeleteTask} className="px-4 py-2 bg-red-600 text-white rounded-md">Delete</button>
//                                 <button onClick={this.handleClosePopup} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Close</button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

// export default Task;
import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      tasks: [
        {
          id: 1,
          title: "Task 1",
          priority: "high",
          timestamp: new Date("2024-05-02T10:00:00Z"),
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec diam id purus egestas vehicula.",
        },
        {
          id: 2,
          title: "Task 2",
          priority: "low",
          timestamp: new Date("2024-05-01T15:00:00Z"),
          details:
            "Suspendisse potenti. Vestibulum efficitur, velit nec consequat dictum, lectus magna tincidunt odio.",
        },
        {
          id: 3,
          title: "Task 3",
          priority: "high",
          timestamp: new Date("2024-05-01T12:00:00Z"),
        },
        {
          id: 4,
          title: "Task 4",
          priority: "medium",
          timestamp: new Date("2024-05-01T08:00:00Z"),
        },
        {
          id: 5,
          title: "Task 5",
          priority: "medium",
          timestamp: new Date("2024-05-03T08:00:00Z"),
        },
        {
          id: 6,
          title: "Task 6",
          priority: "low",
          timestamp: new Date("2024-05-03T10:00:00Z"),
        },
        {
          id: 7,
          title: "Task 7",
          priority: "high",
          timestamp: new Date("2024-05-04T12:00:00Z"),
        },
        {
          id: 8,
          title: "Task 8",
          priority: "high",
          timestamp: new Date("2024-05-04T15:00:00Z"),
        },
        {
          id: 9,
          title: "Task 9",
          priority: "low",
          timestamp: new Date("2024-05-05T08:00:00Z"),
        },
      ],
      activeTask: null,
      isPopupOpen: false,
      editedTask: null,
    };
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleDateSearch = (event) => {
    const searchDate = new Date(event.target.value);
    this.setState({ search: searchDate.toDateString() });
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
    const value = event.target.value;
    this.setState({ editedTask: { ...editedTask, [property]: value } });
  };

  handleSaveChanges = () => {
    const { tasks, editedTask } = this.state;
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? { ...editedTask } : task
    );
    this.setState({ tasks: updatedTasks, isPopupOpen: false });
  };

  handleDeleteTask = () => {
    const { tasks, editedTask } = this.state;
    const updatedTasks = tasks.filter((task) => task.id !== editedTask.id);
    this.setState({ tasks: updatedTasks, isPopupOpen: false });
  };

  render() {
    const { search, tasks, activeTask, isPopupOpen, editedTask } = this.state;

    // Filter tasks based on search input
    const filteredTasks = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.priority.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-2xl font-bold bg-indigo-600 text-white py-4 text-center">
          Tasks
        </h2>
        {/* Search bar */}
        <div className="px-4 py-2">
          <input
            type="text"
            placeholder="Search tasks by title or priority..."
            value={search}
            onChange={this.handleSearchChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
          <label className="block mt-2 text-gray-700">Search by date:</label>
          <input
            type="date"
            onChange={this.handleDateSearch}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mt-2"
          />
        </div>
        {/* Render tasks */}
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 px-4 py-2">No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="bg-gray-100 rounded-md p-4 mb-4 cursor-pointer hover:shadow-md transition duration-300"
              onClick={() => this.handleTaskClick(task)}
            >
              <h3 className="text-xl font-semibold mb-1">{task.title}</h3>
              <p className="text-sm text-gray-600">
                {task.timestamp.toLocaleString()}
              </p>
              <span
                className={`text-xs font-semibold inline-block mt-2 px-2 py-1 rounded-full ${
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
        {/* Task Details Popup */}
        {isPopupOpen && editedTask && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 backdrop-filter backdrop-blur-md bg-indigo-100 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-md">
              <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-4">
                Edit Task
              </h2>
              <input
                type="text"
                value={editedTask.title}
                onChange={(e) => this.handleInputChange(e, "title")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mb-4"
                placeholder="Task title..."
              />
              <textarea
                value={editedTask.details}
                onChange={(e) => this.handleInputChange(e, "details")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mb-4"
                rows="4"
                placeholder="Task details..."
              ></textarea>
              <input
                type="datetime-local"
                value={editedTask.timestamp.toISOString().slice(0, 16)}
                onChange={(e) => this.handleInputChange(e, "timestamp")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mb-4"
              />
              <select
                value={editedTask.priority}
                onChange={(e) => this.handleInputChange(e, "priority")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mb-4"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={this.handleSaveChanges}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
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
