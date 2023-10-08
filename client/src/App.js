import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp"
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element= { <Login /> } />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/settings" element={<Settings />} /> 
      </Routes>
    </Router>
  );
}

export default App;
