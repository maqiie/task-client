
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Notification.css"; // Ensure this path is correct

const Notification = ({ currentUser }) => {
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
        // console.log("Fetched reminders:", response.data);
        setReminders(response.data || []);
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
        // console.log("Fetched notifications:", response.data.notifications);
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
    const checkNotifications = async () => {
      const currentTime = new Date();
      notifications.forEach(async (notification) => {
        const notificationTime = new Date(notification.created_at);
        // console.log("Notification time check:", notificationTime, currentTime);
        if (
          notificationTime <= currentTime &&
          !displayedNotifications.includes(notification.id)
        ) {
          console.log("Displaying notification:", notification);

          // Trigger email sending by making a request to your backend
          try {
            const authToken = localStorage.getItem("authToken");
            await axios.post(
              "http://localhost:3001/notifications/send_notification_email",
              {
                recipient: currentUser.email, // Use currentUser.email here
                message: notification.message,
              },
              {
                headers: {
                  Authorization: `Bearer ${authToken}`,
                },
              }
            );
            console.log("Email sent successfully");
          } catch (error) {
            console.error("Error sending email:", error);
            toast.error("Error sending email");
          }

          const toastId = toast.info(notification.message, {
            className: "custom-toast",
            bodyClassName: "custom-toast-body",
            progressClassName: "custom-toast-progress",
            position: "top-right", // Specify the position as a string
            transition: cssTransition({
              enter: "fadeIn",
              exit: "fadeOut",
              duration: 750,
            }),
          });

          setDisplayedNotifications((prev) => {
            const newDisplayed = [...prev, notification.id];
            localStorage.setItem(
              "displayedNotifications",
              JSON.stringify(newDisplayed)
            );
            return newDisplayed;
          });

          setTimeout(() => {
            toast.dismiss(toastId);
          }, getAutoCloseDuration(notification.schedule));
        }
      });
    };

    if (reminders.length > 0 && notifications.length > 0) {
      checkNotifications();
    }

    const interval = setInterval(checkNotifications, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, [notifications, reminders, displayedNotifications, currentUser]);

  const getAutoCloseDuration = (schedule) => {
    switch (schedule) {
      case "24_hours":
      case "1_hour":
        return 10000; // 10 seconds
      case "30_minutes":
      case "5_minutes":
        return 5000; // 5 seconds
      case "Now":
        return 2000; // 2 seconds
      default:
        return 3000; // Default to 3 seconds
    }
  };

  return <ToastContainer />;
};

export default Notification;
