import React from "react";
import "./HeroSection.css";
import bghome from "../../assets/bg-home.jpeg";
import Navbar from '../Navbar';

const HeroSection = () => {
  
  return (
    <>
    
    <div className="hero-section" style={{ backgroundImage: `url(${bghome})` }}>
      <Navbar/>
      <div className="hero-content">
          <div class="container">
             <div class="row">
                <div class="col-md-7" >
                <h1>Building</h1>
                </div>
                <div class="col-md-4">
                <p>Let's build your identity and your brand</p>
                </div>
            </div>
          </div>

          <div class="container">
             <div class="row">
                <div class="col-md-5">
                <h2>your</h2>
                </div>
                <div class="col-md-5">
                <h1>Business</h1>
                </div>
            </div>
          </div>
      
      </div>
    </div>
    </>
  );
};

export default HeroSection;
