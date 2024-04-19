import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean)};

  async function isAuth() {
    try {
      const response  = await fetch("http://localhost:5400/auth/is-verify",{
            method: "POST",
            headers: {token : localStorage.token }
            });
      const parseRes = await response.json()
      parseRes === true ? setIsAuthenticated(true):
      setIsAuthenticated(false);

    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(()=>{
    isAuth()
  }, []);

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={!isAuthenticated ? <Login setAuth={setAuth} /> : 
            <Navigate replace to="/dashboard" />}
          />
          <Route
            path="/register"
            element={!isAuthenticated ? <Register setAuth={setAuth} /> : 
            <Navigate replace to="/login" />}
          />
          
          <Route 
            path="/dashboard"
            element={isAuthenticated ? <Dashboard setAuth={setAuth}/> : 
            <Navigate replace to="/login" />}
          />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
