
import React, { useState, useEffect } from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import consumer from "../cable"; // Ensure this path is correct for Action Cable consumer setup
import './createTask.css';
import Loader from "./Loader";

const CreateTask = () => {
  const [loading, setLoading] = useState(false);
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
  const [acceptedUsers, setAcceptedUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [suggestAddFriend, setSuggestAddFriend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);



  useEffect(() => {
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

    if (dueDate) {
      fetchTasks();
    }
  }, [dueDate]);

  useEffect(() => {
    // Simulating acceptedUsers fetching for demonstration
    const fetchAcceptedUsers = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await axios.get("http://localhost:3001/friend_requests/${userId}/accepted", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setAcceptedUsers(response.data);
      } catch (error) {
        console.error("Error fetching accepted users:", error);
      }
    };

    fetchAcceptedUsers();
  }, []);

  const handleSearch = debounce(async (searchTerm) => {
    try {
      setSearchTerm(searchTerm.trim().toLowerCase());
      setLoading(true);
  
      if (!searchTerm || !acceptedUsers) {
        setFilteredUsers([]);
        setLoading(false);
        return;
      }
  
      const filtered = acceptedUsers.filter((user) => {
        const senderName = user.sender.name ? user.sender.name.toLowerCase() : "";
        const senderEmail = user.sender.email ? user.sender.email.toLowerCase() : "";
  
        return (
          senderName.includes(searchTerm) ||
          senderEmail.includes(searchTerm)
        );
      });
  
      setFilteredUsers(filtered);
      setLoading(false);
    } catch (error) {
      console.error("Error filtering users:", error);
      setLoading(false);
    }
  }, 300);
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     // Validate task creation fields (if needed)

  //     // Prepare task payload
  //     const authToken = localStorage.getItem("authToken");
  //     const dueDateTime = `${dueDate}T${dueTime}:00`;
  //     const dueDateTimeISO = new Date(dueDateTime).toISOString();
  //     const taskDurationMinutes = getTaskDurationMinutes(duration);

  //     const taskPayload = {
  //       reminder: {
  //         title: taskName,
  //         due_date: dueDateTimeISO,
  //         priority: priority,
  //         location: location,
  //         description: details,
  //         duration: taskDurationMinutes,
  //       },
  //     };

  //     // Send task creation request
  //     const response = await axios.post(
  //       "http://localhost:3001/reminders",
  //       taskPayload,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${authToken}`,
  //         },
  //       }
  //     );

  //     // If users are selected, create invitations
  //     if (selectedUsers.length > 0) {
  //       const invitationPromises = selectedUsers.map(user => {
  //         const invitationPayload = {
  //           invitation: {
  //             user_id: user.id,
  //             reminder_id: response.data.reminder.id,
  //             status: 'pending',
  //           },
  //         };

  //         return axios.post(
  //           "http://localhost:3001/invitations",
  //           invitationPayload,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${authToken}`,
  //             },
  //           }
  //         );
  //       });

  //       await Promise.all(invitationPromises);

  //       console.log("Invitations created successfully");
  //     }

  //     // Reset form fields and state after successful submission
  //     setTaskName("");
  //     setDueDate("");
  //     setDueTime("");
  //     setPriority("");
  //     setLocation("");
  //     setDetails("");
  //     setDuration("");
  //     setError(null);
  //     setConflict(null);
  //     setAlternativeTime(null);
  //     setTasks([...tasks, response.data.reminder]); // Assuming tasks state is an array of reminders
  //     setSuccessMessage("Task created successfully!");
  //     setSelectedUsers([]);

  //     // Clear success message after a delay
  //     setTimeout(() => setSuccessMessage(null), 3000);
  //   } catch (error) {
  //     console.error("Error submitting task:", error);
  //     if (error.response) {
  //       console.error("Response data:", error.response.data);
  //     }
  //     setError("Error submitting task. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  
  //   try {
  //     // Prepare task payload
  //     const authToken = localStorage.getItem("authToken");
  //     const dueDateTime = `${dueDate}T${dueTime}:00`;
  //     const dueDateTimeISO = new Date(dueDateTime).toISOString();
  //     const taskDurationMinutes = getTaskDurationMinutes(duration);
  
  //     const taskPayload = {
  //       reminder: {
  //         title: taskName,
  //         due_date: dueDateTimeISO,
  //         priority: priority,
  //         location: location,
  //         description: details,
  //         duration: taskDurationMinutes,
  //         user_ids: selectedUsers.map(user => user.id) // Include selected user ids
  //       },
  //     };
  
  //     // Send task creation request
  //     const response = await axios.post(
  //       "http://localhost:3001/reminders",
  //       taskPayload,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${authToken}`,
  //         },
  //       }
  //     );
  
  //     // If users are selected, create invitations (if needed)
  
  //     // Reset form fields and state after successful submission
  //     setTaskName("");
  //     setDueDate("");
  //     setDueTime("");
  //     setPriority("");
  //     setLocation("");
  //     setDetails("");
  //     setDuration("");
  //     setError(null);
  //     setConflict(null);
  //     setAlternativeTime(null);
  //     setTasks([...tasks, response.data.reminder]); // Assuming tasks state is an array of reminders
  //     setSuccessMessage("Task created successfully!");
  //     setSelectedUsers([]);
  
  //     // Clear success message after a delay
  //     setTimeout(() => setSuccessMessage(null), 3000);
  //   } catch (error) {
  //     console.error("Error submitting task:", error);
  //     if (error.response) {
  //       console.error("Response data:", error.response.data);
  //     }
  //     setError("Error submitting task. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  console.log("Setting loading state to true");

  try {
    // Prepare task payload
    const authToken = localStorage.getItem("authToken");
    const dueDateTime = `${dueDate}T${dueTime}:00`;
    const dueDateTimeISO = new Date(dueDateTime).toISOString();
    const taskDurationMinutes = getTaskDurationMinutes(duration);

    const taskPayload = {
      reminder: {
        title: taskName,
        due_date: dueDateTimeISO,
        priority: priority,
        location: location,
        description: details,
        duration: taskDurationMinutes,
        user_ids: selectedUsers.map(user => user.id) // Include selected user ids
      },
    };

    // Send task creation request
    const response = await axios.post(
      "http://localhost:3001/reminders",
      taskPayload,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    console.log("API response:", response.data); // Log the API response data

    // If users are selected, create invitations (if needed)

    // Reset form fields and state after successful submission
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
    setTasks([...tasks, response.data.reminder]); // Assuming tasks state is an array of reminders
    setSuccessMessage("Task created successfully!");
    setSelectedUsers([]);

    // Clear success message after a delay
    setTimeout(() => setSuccessMessage(null), 3000);
  } catch (error) {
    console.error("Error submitting task:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
    setError("Error submitting task. Please try again.");
  } finally {
    setIsLoading(false);
    console.log("Setting loading state to false");
  }
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
    const dueEndTime = new Date(
      dueDateTime.getTime() + taskDurationMinutes * 60000
    );

    for (let task of tasks) {
      const taskStartTime = new Date(task.due_date);
      const taskEndTime = new Date(
        taskStartTime.getTime() + task.duration * 60000
      );
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

  const handleChange = (e) => {
    const { value } = e.target;
    handleSearch(value); // Call handleSearch with input value
  };

  const suggestAlternativeTime = () => {
    if (!conflict) return null;

    const taskDurationMinutes = getTaskDurationMinutes(duration);
    const conflictingTaskEndTime =
      new Date(conflict.due_date).getTime() + conflict.duration * 60000;
    let alternativeStartTime = new Date(conflictingTaskEndTime + 60000);

    while (true) {
      let conflictFound = false;
      for (let task of tasks) {
        const taskStartTime = new Date(task.due_date);
        const taskEndTime = new Date(
          taskStartTime.getTime() + task.duration * 60000
        );
        if (
          (alternativeStartTime >= taskStartTime &&
            alternativeStartTime < taskEndTime) ||
          (new Date(
            alternativeStartTime.getTime() + taskDurationMinutes * 60000
          ) > taskStartTime &&
            new Date(
              alternativeStartTime.getTime() + taskDurationMinutes * 60000
            ) <= taskEndTime)
        ) {
          alternativeStartTime = new Date(taskEndTime.getTime() + 60000);
          conflictFound = true;
          break;
        }
      }

      if (!conflictFound) {
        const alternativeEndTime = new Date(
          alternativeStartTime.getTime() + taskDurationMinutes * 60000
        );
        if (alternativeEndTime.getDate() === new Date(dueDate).getDate()) {
          return alternativeStartTime;
        } else {
          return null;
        }
      }
    }
  };

  const handleTaskNameChange = (e) => setTaskName(e.target.value);
  const handleDueDateChange = (e) => setDueDate(e.target.value);
  const handleDueTimeChange = (e) => setDueTime(e.target.value);
  const handlePriorityChange = (e) => setPriority(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleDetailsChange = (e) => setDetails(e.target.value);
  const handleDurationChange = (e) => setDuration(e.target.value);

  useEffect(() => {
    setConflict(checkForConflicts());
  }, [dueDate, dueTime, duration, tasks]);

  useEffect(() => {
    setAlternativeTime(suggestAlternativeTime());
  }, [conflict, duration]);

  const handleUserSelect = (user) => {
    setSelectedUsers(prevSelectedUsers => {
      const isAlreadySelected = prevSelectedUsers.some(selectedUser => selectedUser.id === user.id);

      if (isAlreadySelected) {
        return prevSelectedUsers.filter(selectedUser => selectedUser.id !== user.id);
      } else {
        return [...prevSelectedUsers, user];
      }
    });
  };

  const renderSelectedUsers = () => {
    return (
      <ul className="selected-users-list">
        {selectedUsers.map(user => (
          <li key={user.id} className="selected-user-item">
            {user.sender.name} ({user.sender.email})
            <button onClick={() => handleUserSelect(user)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  };

  const renderFilteredUsers = () => {
    return (
      <ul className="filtered-users-list">
        {filteredUsers.map(user => (
          <li key={user.id} onClick={() => handleUserSelect(user)}>
            {user.sender.name} ({user.sender.email})
          </li>
        ))}
      </ul>
    );
  };

  return (
        <div className=" create-task-container bg-gradient-to-r from-purple-300 to-indigo-400  shadow-md p-6 max-w-md mx-auto border border-gray-300">

    {/* // <div className="create-task-container"> */}
      <h2>Create Task</h2>
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="taskName">Task Name:</label>
          <input type="text" id="taskName" value={taskName} onChange={handleTaskNameChange} />
        </div>
        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input type="date" id="dueDate" value={dueDate} onChange={handleDueDateChange} />
        </div>
        <div>
          <label htmlFor="dueTime">Due Time:</label>
          <input type="time" id="dueTime" value={dueTime} onChange={handleDueTimeChange} />
        </div>
        <div>
          <label htmlFor="priority">Priority:</label>
          <select id="priority" value={priority} onChange={handlePriorityChange}>
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={handleLocationChange} />
        </div>
        <div>
          <label htmlFor="details">Details:</label>
          <textarea id="details" value={details} onChange={handleDetailsChange}></textarea>
        </div>
        <div>
          <label htmlFor="duration">Duration:</label>
          <select id="duration" value={duration} onChange={handleDurationChange}>
            <option value="">Select duration</option>
            <option value="0-30 minutes">0-30 minutes</option>
            <option value="1 hour">1 hour</option>
            <option value="2 hours">2 hours</option>
            <option value="3 hours">3 hours</option>
            <option value="4 hours and above">4 hours and above</option>
          </select>
        </div>
        <div>
          <label htmlFor="search">Invite Users:</label>
          <input type="text" id="search" value={searchTerm} onChange={handleChange} />
          {loading && <div>Loading...</div>}
          {renderFilteredUsers()}
        </div>
        {renderSelectedUsers()}
        <button type="submit" disabled={loading}>
          {loading ? "Creating Task..." : "Create Task"}
        </button>
      </form>
      {conflict && (
        <div className="conflict">
          <strong>Conflict with existing task:</strong> {conflict.title} (Duration: {conflict.duration} minutes)
          {alternativeTime && (
            <div>
              <strong>Suggested Alternative Time:</strong> {alternativeTime.toLocaleTimeString()}
            </div>
          )}
        </div>
      )}
            {isLoading && <Loader />}

    </div>
  );
};

export default CreateTask;
