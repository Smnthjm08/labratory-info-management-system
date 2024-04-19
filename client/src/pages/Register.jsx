import React, { Fragment, useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import {Link} from "react-router-dom";
import { toast } from "react-toastify"

const Register = ({setAuth}) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  });

const {email, password, name} = inputs;

const onChange = (e) =>{
  setInputs({...inputs, [e.target.name] : e.target.value });
};



const onSubmitForm = async (e) => {
  e.preventDefault();
  try {
    const body = {email, password, name};
    const response = await fetch("http://localhost:5400/auth/register", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
        },
      body: JSON.stringify(body)
    });

    const parsedRes = await response.json();
    if(parsedRes.token){
      localStorage.setItem("token", parsedRes.token);
      setAuth(true);
      toast.success("Register Successful")
    }else{
      setAuth(false);
      toast.error(parsedRes);
    }
    



    console.log(parsedRes)
    
    
  } catch (err) {
    console.error(err.message)
  }
}

  return (
    <Fragment>
      <div className='hero container'>
          <NavBar />
          <h1>Register</h1>
          <form onSubmit={onSubmitForm}>
            <input 
              type='email' 
              name='email' 
              placeholder='Enter your email'
              value={email} 
              onChange= {e => onChange(e)} 
            />

            <input 
              type='password' 
              name='password' 
              placeholder='Enter your password' 
              value={password}
              onChange= {e => onChange(e)}
            />
            <input 
              type='text' 
              name='name' 
              placeholder='Enter your name' 
              value={name}
              onChange= {e => onChange(e)}
            />
            <button className='btn'>Sign Up</button>
          </form>
          <Link to = "/login">Login</Link>
      </div>
    </Fragment>
  );
};

export default Register;