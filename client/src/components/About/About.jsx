import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            
        </div>
        <div className="about-right">
            <h3>ABOUT US</h3>
            <h2>Discover how we are Revolutionizing Laboratory Operations.</h2>
            <p>We specialize in transforming laboratory operations through cutting-edge automation and instrument 
            communication solutions. With tailored services designed to streamline workflows and enhance connectivity 
            between analytical platforms, we optimize efficiency and drive performance improvements for our clients.</p>

            <p>Our dedicated team collaborates closely with laboratories to understand their unique requirements and challenges.
            Leveraging our expertise and advanced technology, we deliver customized solutions that improve data accuracy, 
            streamline processes, and maximize productivity.Trust us as your partner in laboratory innovation, dedicated to 
            delivering excellence and driving better patient outcomes.</p>

            <p>With a commitment to excellence and customer satisfaction, we stands out as the trusted choice for laboratories 
            seeking to enhance efficiency and embrace the future of laboratory automation. Join us in revolutionizing 
            laboratory operations and unlocking new possibilities in healthcare. </p>
        </div>
    </div>
  )
}

export default About