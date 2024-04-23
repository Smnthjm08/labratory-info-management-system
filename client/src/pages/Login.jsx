import React, { Fragment, useState } from 'react';
import Navbar from '../components/Navbar/NavBar';
import {Link}  from "react-router-dom";
import { toast } from 'react-toastify';
import "/src/index.css"

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs

  const onChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value});
  };

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {

      const body = {email, password}

      const response = await fetch("http://localhost:5400/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      if(parseRes.token){
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Login Successfully!")
      } else{
        setAuth(false);
        toast.error(parseRes);
      }

      

    } catch (err) {
      console.err(err.message)
    }
  }

  return (
    <Fragment>
      <div className='hero container'>
        <Navbar />
        <form onSubmit={onSubmitForm} className='lg-form'>
        <h2 className='login'>Login</h2>
          <input 
          type='email' 
          name='email' 
          placeholder='email'
          value = {email}
          onChange={e => onChange(e)}
          autoComplete='email'
        />
          <input 
          type='password' 
          name='password' 
          placeholder='password'
          value = {password}
          onChange={e => onChange(e)}
          autoComplete='current-password'
          />
          <button className='btn' type='submit'>Submit</button>
          <p>New Here?<Link to="/register" ><u>Register</u></Link></p>
        </form>
        
      </div>
    </Fragment>
  );
};

export default Login;

{/* <button onClick={() => setAuth(true)}>Login</button> */}