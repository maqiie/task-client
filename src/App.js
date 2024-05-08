import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import { Routes } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CreateTask from "./components/CreateTask";
import Calendar from "./components/Calendar";
import Login from "./components/Login";
import Task from "./components/Task";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route name="home" path="/" element={<Home />} />
          <Route name="navbar" path="/:id" element={<Navbar />} />
          <Route name="createTask" path="/create/*" element={<CreateTask />} />
          <Route name="calendar" path="/calendar/*" element={<Calendar />}/>
          <Route name="login" path="/login/*" element={<Login />} />
          <Route name="task" path="/tasks" element={<Task />} />
          
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
