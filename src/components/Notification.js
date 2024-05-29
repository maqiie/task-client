
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Notification = () => {
//   const [reminders, setReminders] = useState([]);
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const fetchReminders = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/reminders", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//           },
//         });
//         console.log("Fetched reminders:", response.data.reminders);
//         setReminders(response.data.reminders || []);
//       } catch (error) {
//         console.error("Error fetching reminders:", error);
//         toast.error("Error fetching reminders");
//       }
//     };

//     const fetchNotifications = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/notifications", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//           },
//         });
//         console.log("Fetched notifications:", response.data.notifications);
//         setNotifications(response.data.notifications || []);
//       } catch (error) {
//         console.error("Error fetching notifications:", error);
//         toast.error("Error fetching notifications");
//       }
//     };

//     fetchReminders();
//     fetchNotifications();

//     const interval = setInterval(() => {
//       fetchReminders();
//       fetchNotifications();
//     }, 30000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const checkNotifications = () => {
//       notifications.forEach((notification) => {
//         const reminder = reminders.find((r) => r.id === notification.reminder_id);
//         if (reminder) {
//           toast.info(notification.message, {
//             autoClose: getAutoCloseDuration(notification.schedule),
//             style: { backgroundColor: "#007bff", color: "#ffffff" },
//           });
//         }
//       });
//     };

//     if (reminders.length > 0 && notifications.length > 0) {
//       checkNotifications();
//     }
//   }, [notifications, reminders]);

//   const getAutoCloseDuration = (schedule) => {
//     switch (schedule) {
//       case "24_hours":
//       case "1_hour":
//         return 10000; // 10 seconds
//       case "30_minutes":
//       case "5_minutes":
//         return 5000; // 5 seconds
//       case "start":
//         return 2000; // 2 seconds
//       default:
//         return 3000; // Default to 3 seconds
//     }
//   };

//   return <ToastContainer />;
// };

// export default Notification;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  const [reminders, setReminders] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [displayedNotifications, setDisplayedNotifications] = useState(
    JSON.parse(localStorage.getItem("displayedNotifications")) || []
  );

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const response = await axios.get("http://localhost:3001/reminders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        console.log("Fetched reminders:", response.data.reminders);
        setReminders(response.data.reminders || []);
      } catch (error) {
        console.error("Error fetching reminders:", error);
        toast.error("Error fetching reminders");
      }
    };

    const fetchNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:3001/notifications", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        console.log("Fetched notifications:", response.data.notifications);
        setNotifications(response.data.notifications || []);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        toast.error("Error fetching notifications");
      }
    };

    fetchReminders();
    fetchNotifications();

    const interval = setInterval(() => {
      fetchReminders();
      fetchNotifications();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkNotifications = () => {
      const currentTime = new Date();
      notifications.forEach((notification) => {
        const notificationTime = new Date(notification.created_at);
        if (
          notificationTime <= currentTime &&
          !displayedNotifications.includes(notification.id)
        ) {
          toast.info(notification.message, {
            autoClose: getAutoCloseDuration(notification.schedule),
            style: { backgroundColor: "#007bff", color: "#ffffff" },
          });
          setDisplayedNotifications((prev) => {
            const newDisplayed = [...prev, notification.id];
            localStorage.setItem(
              "displayedNotifications",
              JSON.stringify(newDisplayed)
            );
            return newDisplayed;
          });
        }
      });
    };

    if (reminders.length > 0 && notifications.length > 0) {
      checkNotifications();
    }

    const interval = setInterval(checkNotifications, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, [notifications, reminders, displayedNotifications]);

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
};

export default Notification;
