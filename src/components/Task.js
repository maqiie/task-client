import React, { Component } from 'react';
import Modal from 'react-modal';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            tasks: [
                { id: 1, title: "Task 1", priority: "high", timestamp: new Date("2024-05-02T10:00:00Z") },
                { id: 2, title: "Task 2", priority: "low", timestamp: new Date("2024-05-01T15:00:00Z") },
                { id: 3, title: "Task 3", priority: "high", timestamp: new Date("2024-05-01T12:00:00Z") },
                { id: 4, title: "Task 4", priority: "medium", timestamp: new Date("2024-05-01T08:00:00Z") },
                { id: 5, title: "Task 5", priority: "medium", timestamp: new Date("2024-05-03T08:00:00Z") },
                { id: 6, title: "Task 6", priority: "low", timestamp: new Date("2024-05-03T10:00:00Z") },
                { id: 7, title: "Task 7", priority: "high", timestamp: new Date("2024-05-04T12:00:00Z") },
                { id: 8, title: "Task 8", priority: "high", timestamp: new Date("2024-05-04T15:00:00Z") },
                { id: 9, title: "Task 9", priority: "low", timestamp: new Date("2024-05-05T08:00:00Z") },
            ],
            activeTask: null,
            modalIsOpen: false,
            modalPosition: { top: 0, left: 0 },
        };
    }

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    };

    handleDateSearch = (event) => {
        const searchDate = new Date(event.target.value);
        this.setState({ search: searchDate.toDateString() });
    };

    handleTaskClick = (task, position) => {
        this.setState({ activeTask: task, modalIsOpen: true, modalPosition: position });
    };

    handleCloseModal = () => {
        this.setState({ modalIsOpen: false });
    };

    render() {
        const { search, tasks, activeTask, modalIsOpen, modalPosition } = this.state;

        // Filter tasks based on search input
        const filteredTasks = tasks.filter(task =>
            task.title.toLowerCase().includes(search.toLowerCase()) ||
            task.priority.toLowerCase().includes(search.toLowerCase())
        );

        return (
            <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-4">
                <h2 className="text-xl font-bold mb-4">Tasks</h2>
                {/* Search bar */}
                <div className="mb-4">
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>
                {/* Render tasks */}
                {filteredTasks.length === 0 ? (
                    <p className="text-gray-500">No tasks found.</p>
                ) : (
                    filteredTasks.map(task => (
                        <div key={task.id} className="bg-gray-100 rounded-md p-4 mb-4 cursor-pointer" onClick={(e) => this.handleTaskClick(task, { top: e.clientY, left: e.clientX })}>
                            <h3 className="text-lg font-semibold">{task.title}</h3>
                            <p className="text-sm text-gray-600">{task.timestamp.toLocaleString()}</p>
                            <span className={`text-sm font-semibold inline-block mt-2 px-2 py-1 rounded-full ${task.priority === 'high' ? 'bg-red-600 text-white' : task.priority === 'medium' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}>{task.priority}</span>
                        </div>
                    ))
                )}
                {/* Task Details Modal */}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={this.handleCloseModal}
                    className="modal"
                    overlayClassName="overlay"
                    style={{
                        content: {
                            top: modalPosition.top + 'px',
                            left: modalPosition.left + 'px'
                        }
                    }}
                >
                    <div className="modal-content">
                        {activeTask && (
                            <>
                                <h2>{activeTask.title}</h2>
                                <p>{activeTask.timestamp.toLocaleString()}</p>
                                <p>Priority: {activeTask.priority}</p>
                                {/* Add more task details here */}
                            </>
                        )}
                        <button onClick={this.handleCloseModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Close</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Task;



// import React, { Component } from 'react';

// class Task extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             search: '',
//             tasks: [
//                 { id: 1, title: "Task 1", priority: "high", timestamp: new Date("2024-05-02T10:00:00Z") },
//                 { id: 2, title: "Task 2", priority: "low", timestamp: new Date("2024-05-01T15:00:00Z") },
//                 { id: 3, title: "Task 3", priority: "high", timestamp: new Date("2024-05-01T12:00:00Z") },
//                 { id: 4, title: "Task 4", priority: "medium", timestamp: new Date("2024-05-01T08:00:00Z") },
//                 { id: 5, title: "Task 5", priority: "medium", timestamp: new Date("2024-05-03T08:00:00Z") },
//                 { id: 6, title: "Task 6", priority: "low", timestamp: new Date("2024-05-03T10:00:00Z") },
//                 { id: 7, title: "Task 7", priority: "high", timestamp: new Date("2024-05-04T12:00:00Z") },
//                 { id: 8, title: "Task 8", priority: "high", timestamp: new Date("2024-05-04T15:00:00Z") },
//                 { id: 9, title: "Task 9", priority: "low", timestamp: new Date("2024-05-05T08:00:00Z") },
//             ]
//         };
//     }

//     handleSearchChange = (event) => {
//         this.setState({ search: event.target.value });
//     };

//     handleDateSearch = (event) => {
//         const searchDate = new Date(event.target.value);
//         this.setState({ search: searchDate.toDateString() });
//     };

//     render() {
//         const { search, tasks } = this.state;

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
//                         <div key={task.id} className="bg-gray-100 rounded-md p-4 mb-4">
//                             <h3 className="text-lg font-semibold">{task.title}</h3>
//                             <p className="text-sm text-gray-600">{task.timestamp.toLocaleString()}</p>
//                             <span className={`text-sm font-semibold inline-block mt-2 px-2 py-1 rounded-full ${task.priority === 'high' ? 'bg-red-600 text-white' : task.priority === 'medium' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}>{task.priority}</span>
//                         </div>
//                     ))
//                 )}
//             </div>
//         );
//     }
// }

// export default Task;
