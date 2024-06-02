// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/admin" exact element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
