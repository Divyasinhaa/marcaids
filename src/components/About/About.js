// About.jsx

import React from 'react';
import "./About.scss";
import aboutImage from '../../assets/img10.jpg'; // Import your image here

const About = () => (
  <section className="about">
    <div className="aboutTextContainer" >

      {/* Title */}
      <h1 className="aboutTitle" style={{ color: '#2c1a46', textAlign:'left',fontSize: 'xxx-large',fontWeight: '300'}}>What we do?</h1> 

      {/* Paragraph */}
      <p>Your brand is outstanding & you are aware of that. All you need to do now is get everyone else on board. We're marcaids, your next door marketing agency that specializes in accelerating the growth of brands that address present issues to create better futures. Because who does not want their brands to be as cool as a talking dog wearing sunglasses & yes, We've got just the trick! We are also honored to share their services and stories with a larger audience because their missions are about purpose as much as profit. We prefer to refer to it as ethical marketing. Sound like we'd be an Ideal match?</p>
    </div>

    {/* Image */}
    <div className="aboutImageContainer" id='about'>
      <img src={aboutImage} alt="About" />
    </div>
  </section>
);

export default About;
