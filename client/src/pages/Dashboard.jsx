import React, { Fragment, useState, useEffect } from 'react';
import { toast } from "react-toastify";


const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("")

  async function getName(){
    try {
      const response = await fetch("http://localhost:5400/dashboard/",
      {
        method: "POST",
        headers: { token: localStorage.token }
      });
      const parseRes = await response.json()
      setName(parseRes.user_name)
    } catch (err) {
      console.error(err.message)
    }
  };

  const logout = (e) => {
    e.preventDefault()
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() =>{
    getName();
  }, []);

  return (
    <Fragment>
      <div className='hero container'>
        <h1>dash, {name}</h1>
        <button className='btn'
              onClick = {e => logout(e)}
        >Logout</button>
      </div>
    </Fragment>
  );
};

export default Dashboard;


{/* <button onClick={() => setAuth(false)}>Logout</button> */}