
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

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create/*" element={currentUser ? <CreateTask /> : <Navigate to="/login" />} />
        <Route path="/calendar/*" element={<Calendar />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/tasks" element={currentUser ? <Task /> : <Navigate to="/login" />} />
        <Route path="/special" element={<SpecialEvents />} />
        <Route path="/profile" element={<UserProfile userData={currentUser} />} />
      </Routes>
    </Router>
  );
}

export default App;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import CreateTask from "./components/CreateTask";
// import Calendar from "./components/Calendar";
// import Login from "./components/Login";
// import Task from "./components/Task";
// import SpecialEvents from "./components/SpecialEvents";

// function App() {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3001/auth/validate_token"
//         );
//         const userData = response.data.data;
//         setCurrentUser(userData);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     const storedToken = localStorage.getItem("authToken");
//     const isLoggedIn = !!storedToken;

//     if (isLoggedIn) {
//       fetchUserData();
//     }
//   }, []);

//   return (
//     <div>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/create/*" element={<CreateTask />} />
//           <Route path="/calendar/*" element={<Calendar />} />
//           <Route path="/login/*" element={<Login />} />
//           <Route path="/tasks" element={<Task />} />
//           <Route path="/special" element={<SpecialEvents />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
