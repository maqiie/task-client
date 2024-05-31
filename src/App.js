
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import CreateTask from "./components/CreateTask";
// import Calendar from "./components/Calendar";
// import Login from "./components/Login";
// import Task from "./components/Task";
// import SpecialEvents from "./components/SpecialEvents";
// import UserProfile from "./components/UserProfile";

// function App() {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const timezone = "Africa/Nairobi"; // Example timezone - replace with your desired timezone

//   // Set the timezone for all Date objects
// Date.prototype.toLocaleString = function () {
//   return new Intl.DateTimeFormat(undefined, {
//     timeZone: timezone,
//     /* other options */
//   }).format(this);
// };

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const storedToken = localStorage.getItem("authToken");
//       const isLoggedIn = !!storedToken;
      
//       if (isLoggedIn) {
//         try {
//           console.log("Fetching user data...");
//           const response = await axios.get(
//             "http://localhost:3001/auth/validate_token",
//             {
//               headers: {
//                 Authorization: `Bearer ${storedToken}`
//               }
//             }
//           );
//           console.log("User data fetched successfully:", response.data);
//           const userData = response.data.data;
//           setCurrentUser(userData);
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setLoading(false);
//       }
//     };
  
//     fetchUserData();
//   }, []);

//   const handleLogout = () => {
//     // Clear user data and token from localStorage
//     localStorage.removeItem("authToken");
//     setCurrentUser(null);
//   };

//   return (
//     <Router>
//       <Navbar currentUser={currentUser} onLogout={handleLogout} />
//       <Routes>
//       <Route path="/" element={<Home currentUser={currentUser} />} />
//         <Route path="/create/*" element={currentUser ? <CreateTask /> : <Navigate to="/login" />} />
//         <Route path="/calendar/*" element={<Calendar />} />
//         <Route path="/login/*" element={<Login />} />
//         <Route path="/tasks" element={currentUser ? <Task /> : <Navigate to="/login" />} />
//         <Route path="/special" element={<SpecialEvents />} />
//         <Route path="/profile" element={<UserProfile userData={currentUser} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import CreateTask from "./components/CreateTask";
// import Calendar from "./components/Calendar";
// import Login from "./components/Login";
// import Task from "./components/Task";
// import SpecialEvents from "./components/SpecialEvents";
// import UserProfile from "./components/UserProfile";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Footer from "./components/Footer";

// function App() {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const storedToken = localStorage.getItem("authToken");
//       const isLoggedIn = !!storedToken;
      
//       if (isLoggedIn) {
//         try {
//           console.log("Fetching user data...");
//           const response = await axios.get(
//             "http://localhost:3001/auth/validate_token",
//             {
//               headers: {
//                 Authorization: `Bearer ${storedToken}`
//               }
//             }
//           );
//           console.log("User data fetched successfully:", response.data);
//           const userData = response.data.data;
//           setCurrentUser(userData);
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setLoading(false);
//       }
//     };
  
//     fetchUserData();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     setCurrentUser(null);
//   };

//   const notify = (message) => toast.info(message); // Function to display notifications
//   const fetchScheduledNotifications = async () => {
//     try {
//       const storedToken = localStorage.getItem("authToken");
//       const response = await axios.get("http://localhost:3001/notifications", {
//         headers: {
//           Authorization: `Bearer ${storedToken}`
//         }
//       });
//       const notifications = response.data.notifications;
//       // Display notifications...
//     } catch (error) {
//       console.error("Error fetching scheduled notifications:", error);
//       // Handle error...
//     }
//   };
  

//   return (
//     <Router>
//       <Navbar currentUser={currentUser} onLogout={handleLogout} />
//       <ToastContainer />
//       <Routes>
//         <Route path="/" element={<Home currentUser={currentUser} />} />
//         <Route path="/create/*" element={currentUser ? <CreateTask /> : <Navigate to="/login" />} />
//         <Route path="/calendar/*" element={<Calendar />} />
//         <Route path="/login/*" element={<Login />} />
//         <Route path="/tasks" element={currentUser ? <Task /> : <Navigate to="/login" />} />
//         <Route path="/special" element={<SpecialEvents />} />
//         <Route path="/profile" element={<UserProfile userData={currentUser} />} />
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import CreateTask from "./components/CreateTask";
// import Calendar from "./components/Calendar";
// import Login from "./components/Login";
// import Task from "./components/Task";
// import SpecialEvents from "./components/SpecialEvents";
// import UserProfile from "./components/UserProfile";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Footer from "./components/Footer";
// import Notification from "./components/Notification"; // Import Notification

// function App() {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const storedToken = localStorage.getItem("authToken");
//       const isLoggedIn = !!storedToken;
      
//       if (isLoggedIn) {
//         try {
//           console.log("Fetching user data...");
//           const response = await axios.get(
//             "http://localhost:3001/auth/validate_token",
//             {
//               headers: {
//                 Authorization: `Bearer ${storedToken}`
//               }
//             }
//           );
//           console.log("User data fetched successfully:", response.data);
//           const userData = response.data.data;
//           setCurrentUser(userData);
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setLoading(false);
//       }
//     };
  
//     fetchUserData();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     setCurrentUser(null);
//   };

//   return (
//     <Router>
//       <Navbar currentUser={currentUser} onLogout={handleLogout} />
//       <ToastContainer />
//       <Notification /> {/* Add Notification component */}
//       <Routes>
//         <Route path="/" element={<Home currentUser={currentUser} />} />
//         <Route path="/create/*" element={currentUser ? <CreateTask /> : <Navigate to="/login" />} />
//         <Route path="/calendar/*" element={<Calendar />} />
//         <Route path="/login/*" element={<Login />} />
//         <Route path="/tasks" element={currentUser ? <Task /> : <Navigate to="/login" />} />
//         <Route path="/special" element={<SpecialEvents />} />
//         <Route path="/profile" element={<UserProfile userData={currentUser} />} />
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CreateTask from "./components/CreateTask";
import Calendar from "./components/Calendar";
import Login from "./components/Login";
import Task from "./components/Task";
import SpecialEvents from "./components/SpecialEvents";
import UserProfile from "./components/UserProfile";
import Notification from "./components/Notification"; // Import the Notification component
import Footer from "./components/Footer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const timezone = "Africa/Nairobi"; // Example timezone - replace with your desired timezone

  // Set the timezone for all Date objects
  Date.prototype.toLocaleString = function () {
    return new Intl.DateTimeFormat(undefined, {
      timeZone: timezone,
      /* other options */
    }).format(this);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const storedToken = localStorage.getItem("authToken");
      const isLoggedIn = !!storedToken;
      
      if (isLoggedIn) {
        try {
          console.log("Fetching user data...");
          const response = await axios.get(
            "http://localhost:3001/auth/validate_token",
            {
              headers: {
                Authorization: `Bearer ${storedToken}`
              }
            }
          );
          console.log("User data fetched successfully:", response.data);
          const userData = response.data.data;
          setCurrentUser(userData);
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    // Clear user data and token from localStorage
    localStorage.removeItem("authToken");
    setCurrentUser(null);
  };

  return (
    <Router>
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      <Notification currentUser={currentUser} /> {/* Pass currentUser here */}

      <Routes>
        <Route path="/" element={<Home currentUser={currentUser} />} />
        <Route path="/create/*" element={currentUser ? <CreateTask /> : <Navigate to="/login" />} />
        <Route path="/calendar/*" element={<Calendar />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/tasks" element={currentUser ? <Task /> : <Navigate to="/login" />} />
        <Route path="/special" element={<SpecialEvents />} />
        <Route path="/profile" element={<UserProfile userData={currentUser} />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
