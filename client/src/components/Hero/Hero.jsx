import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
       <div className="hero-text">
            <h1>Transforming Laboratories with Innovation</h1>
            <p>"Empower your Laboratories with Our Comprehensive LIMS Solutions."</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt='' /></button>
        </div> 
    </div>
  )
}

export default Hero

// Experience precision in lab management with our expert doctors, skilled lab assistants, and cutting-edge equipment.