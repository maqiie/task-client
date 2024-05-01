import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import { Routes } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Modal from "./components/Modal";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route name="home" path="/" element={<Home />} />
          <Route name="modal" path="/:id" element={<Modal />} />
          {/* <Route name="login" path="/login" element={<Login />} /> */}
          {/* <Route name="signup" path="/signup" element={<SignUp />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
