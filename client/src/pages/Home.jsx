import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NavBar from "../components/Navbar/NavBar";
import Hero from "../components/Hero/Hero";
import Title from "../components/Title/Title";
import Programs from "../components/Programs/Programs";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer  from "../components/Footer/Footer";



const Home = () => {
  return (
    <>
    <NavBar />
      <Hero/>
      <div className="container">
        <Title subTitle= 'Our Services' title='What We Provide'/>
        <Programs />
        <About />
        <Title subTitle= 'Contact Us' title='Get in Touch'/>
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Home