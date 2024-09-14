import React, { useState, useEffect } from "react";
import "./HS.css";
import bghome from "../../assets/bg-home.jpeg";
import Navbar from '../Navbar';

const HS = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTextLayer1, setShowTextLayer1] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowTextLayer1(true);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setShowTextLayer1(false);
    }
  }, [isOpen]);

  return (
    <>
    <div className="App">
      <Navbar/>
      <div 
        className={`HS ${isOpen ? "open" : ""}`} 
        // Conditionally add 'open' class
        style={{ backgroundImage: `url(${bghome})` }} 
        onClick={handleClick}
        
      >
       
        <div className="hero-content">
          <div className={`hero-sec ${isOpen ? "slide-out" : ""}`}>
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <h1>Building</h1>
                </div>
                <div className="col-md-4">
                  <p>Let's build your identity and your brand</p>
                </div>
              </div>
            </div>

            
              <div className="container">
                <div className="row">
                  <div className="col-md-5">
                    <h2>your</h2>
                  </div>
                  <div className="col-md-5">
                    <h1>Business</h1>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>

      {showTextLayer1 && (
        <div className="text-layer-1">
          <span className="text-1">We Build</span><br/>
          <span className="text-2">your brand</span><br/>
          <span className="text-3">with passion</span><br/>
          <span className="text-4">embodying</span><br/>
          <span className="text-5">perfection</span>
        </div>
        
      )}
      </div>
    </>
  );
};

export default HS;
