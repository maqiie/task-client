// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Notification() {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/notifications", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`
//           }
//         });
//         setNotifications(response.data);
//       } catch (error) {
//         console.error("Error fetching notifications:", error);
//         // Display error notification using react-toastify
//         toast.error("Error fetching notifications");
//       }
//     };

//     // Fetch notifications initially and then every 30 seconds
//     fetchNotifications();
//     const interval = setInterval(fetchNotifications, 30000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h2>Notifications</h2>
//       <ul>
//         {notifications.map(notification => (
//           <li key={notification.id}>
//             {notification.message}
//           </li>
//         ))}
//       </ul>
//       <ToastContainer autoClose={3000} />
//     </div>
//   );
// }

// export default Notification;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Notification() {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/notifications", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`
//           }
//         });
//         setNotifications(response.data);
//       } catch (error) {
//         console.error("Error fetching notifications:", error);
//         // Display error notification using react-toastify
//         toast.error("Error fetching notifications");
//       }
//     };

//     // Fetch notifications initially and then every 30 seconds
//     fetchNotifications();
//     const interval = setInterval(fetchNotifications, 30000);

//     return () => clearInterval(interval);
//   }, []);

//   // Function to format notification schedule
//   const formatSchedule = (schedule) => {
//     switch (schedule) {
//       case "24_hours":
//         return "24 hours before";
//       case "30_minutes":
//         return "30 minutes before";
//       case "15_minutes":
//         return "15 minutes before";
//       case "5_minutes":
//         return "5 minutes before";
//       case "start":
//         return "Start";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div>
//       <h2>Notifications</h2>
//       <ul>
//         {notifications.map(notification => (
//           <li key={notification.id}>
//             <strong>{formatSchedule(notification.schedule)}:</strong> {notification.message}
//           </li>
//         ))}
//       </ul>
//       <ToastContainer autoClose={3000} />
//     </div>
//   );
// }

// export default Notification;
import React, { useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notification() {
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:3001/notifications", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`
          }
        });
        response.data.forEach(notification => {
          toast.info(`${notification.message} (${formatSchedule(notification.schedule)})`, {
            autoClose: getAutoCloseDuration(notification.schedule),
          });
        });
      } catch (error) {
        console.error("Error fetching notifications:", error);
        toast.error("Error fetching notifications");
      }
    };

    // Fetch notifications initially and then every 30 seconds
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);

    return () => clearInterval(interval);
  }, []);

  const formatSchedule = (schedule) => {
    switch (schedule) {
      case "24_hours":
        return "24 hours before";
      case "1_hour":
        return "1 hour before";
      case "30_minutes":
        return "30 minutes before";
      case "5_minutes":
        return "5 minutes before";
      case "start":
        return "at start time";
      default:
        return "";
    }
  };

  const getAutoCloseDuration = (schedule) => {
    switch (schedule) {
      case "24_hours":
      case "1_hour":
        return 10000; // 10 seconds
      case "30_minutes":
      case "5_minutes":
        return 5000; // 5 seconds
      case "start":
        return 2000; // 2 seconds
      default:
        return 3000; // Default to 3 seconds
    }
  };

  return <ToastContainer />;
}

export default Notification;
