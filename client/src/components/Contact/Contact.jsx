import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "908775a7-7ca1-4fa5-8530-c04401b840d0");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
            <p>Feel free to reach out through contact form or find our 
            contact information below. Your feedback, questions,and suggestions 
            are important to us as we strive to 
                provide exceptional service to our university community.
            </p>
            <ul>
                <li> <img src={mail_icon} alt="" /> Contact@lims.support</li>
                <li> <img src={phone_icon} alt="" /> +91 79248 24982</li>
                <li> <img src={location_icon} alt="" /> 494, 5th cross, 4th Main,<br/> Vajrahalli, Bengaluru</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter Your Name' required />

                <label>Phonne Number</label>
                <input type='rel' name='phone' placeholder='Enter Your Mobile Number' required />

                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your Message' required></textarea>

                <button type='submit' className='btn dark-btn' >Submit now</button>

            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact;