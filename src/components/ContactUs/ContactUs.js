
import './ContactUs.css';
import Navbar from '../Navbar';
import bgcontact from "../../assets/backgroundcontact.jpg";
import React, { useState } from 'react';
import Footer from '../Footer/Footer';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log('Form submitted:', { firstName, lastName, email, phoneNumber, message });
  };

  return (
    <>
    
    
    <div className="contents" style={{ backgroundImage: `url(${bgcontact})` }}>
    <Navbar/>
    <div className="contact-header">
          <h1>Contact Our Team</h1>
          <p>Got any questions? We are here to help.<br/>Chat to our friendly team and get onboard in 5 minutes.</p>
        </div>
    <div className='contact-container'>
    
    <form onSubmit={handleSubmit}>

      <div className='names'>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    
    <div className="contact-info">
            <h2>Chat With Us</h2>
            <p>Speak to our friendly team</p>
            <ul>
              <li>📧 Shoot us on E-mail</li>
              <li>📷 Follow us on Instagram</li>
            </ul>
            <h2>Call Us</h2>
            <p>Call our team Mon-Fri from 9am-6pm</p>
            <p>📞 0000000000</p>
            <h2>Services</h2>
            <ul>
              <li>Performance Marketing</li>
              <li>Web Design & Development</li>
              <li>Branding</li>
              <li>Social Media Management</li>
              <li>Content Creation</li>
            </ul>
            </div>
            </div>
    
    
    
    </div>
    <Footer/>
    
    </>
  );
};
export default ContactForm;

