import React,{ useEffect } from 'react'
import "./NavBar.css"
import logo from '../../assets/logo.png'
import { useState } from "react"
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// import Programs from '../Programs/Programs';


const NavBar = () => {


  const Navigate = useNavigate();

  const [sticky, setSticky] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const ToggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt='' className='logo'/>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><button className='btn' onClick={()=>Navigate("/login")}>Already a User?</button></li>
            
        </ul>
        <img src={menu_icon} className='menu-icon'  alt=""  onClick={ToggleMenu}/>
    </nav>
  )
}

export default NavBar