
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
import FriendSearch from "./components/Friend";
import Invitations from "./components/Invitations";
import Loader from "./components/Loader";
import { ActionCableProvider } from '@thrash-industries/react-actioncable-provider';


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
    <ActionCableProvider url="ws://localhost:3001/cable">

    <Router>
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      <Notification currentUser={currentUser} /> {/* Pass currentUser here */}

      <Routes>
        <Route  path="/" element={<Home currentUser={currentUser} />} />
        <Route path="/create/*" element={currentUser ? <CreateTask /> : <Navigate to="/login" />} />
        <Route path="/calendar/*" element={<Calendar />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/tasks" element={currentUser ? <Task /> : <Navigate to="/login" />} />
        <Route path="/special" element={<SpecialEvents />} />
        <Route path="/profile" element={<UserProfile userData={currentUser} onLogout={handleLogout} />} />
        <Route path="/friend" element={<FriendSearch userData={currentUser}/>} />
        <Route path="/invitations" element={<Invitations userData={currentUser}/>}/>
        <Route path="/loader" element={<Loader/> }/>
      </Routes>
      <Footer/>
    </Router>
    </ActionCableProvider>

  );
}

export default App;
