import React from 'react';

const Modal = ({ isOpen, onClose, task }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
      <div className="relative max-w-lg mx-auto px-4 py-6 bg-white rounded-md shadow-lg">
        <div className="absolute top-0 right-0 p-2">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-gray-600">{task.dueDate}</p>
          <p className="text-gray-600">{task.description}</p>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-300">Remove Task</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
