import React from "react";
import "./Contact.scss";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

const Contact = () => (
  <section id="contact" className="contact">
    
    {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfE9og4A4uoo0qs3qxaLQcTheahLQCyj8LO-eix_Rh9a8x2rg/viewform?embedded=true" width="640" height="989" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}

    <div className="contactTextContainer">
      <div className="contactLeftContainerText">

        {/* Contact Info Card */}
        <h1>Contact Info</h1>
        <h5>
          <MdOutlineLocationOn /> Suncity C-35,Haryana 


        </h5>
        <h5><FiMail /> chirag@marcaids.com</h5>
        <h5><FiPhoneCall /> +91 8816062696</h5>
      </div>

      {/* Send Message Box */}
      <div >
        {/* <h1>Send a message</h1> */}
        {/* <form>
          <input type="text" id="first" name="first" placeholder="First Name" required /> 
          <input type="text" id="last" name="last" placeholder="Last Name" required /> 
          <input type="email" id="email" name="email" placeholder="Email Address" required /> 
          <textarea rows="2" cols="20" name="message" placeholder="Enter message" required /> 
          <button type="submit">Send</button>
        </form> */}

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfE9og4A4uoo0qs3qxaLQcTheahLQCyj8LO-eix_Rh9a8x2rg/viewform?embedded=true" width="640" height="986" frameborder="0" marginheight="0" marginwidth="0" className="contactForm">Loading…</iframe>
      </div>
    </div>
    
  </section>

);

export default Contact;
