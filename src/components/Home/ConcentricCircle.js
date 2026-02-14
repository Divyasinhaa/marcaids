import React from 'react';
import home1 from "../../assets/home-1.jpeg";
import home5 from "../../assets/home-5.jpeg";
import Navbar from '../Navbar';
import './ConcentricCircle.css';

const ConcentricCircle = ({ onClick }) => {
  return (
    <>
      <div className="concentric-circle-container">
       
        
        {/* Animated background gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Center circle container */}
        <div className="circle-wrapper">
          {/* Center image with glow effect */}
          <div className="circle center-image" onClick={onClick}>
            <div className="image-glow"></div>
            <img src={home5} alt="Team Center" />
          </div>

          {/* SVG for rotating text */}
          <svg className="circle-svg" viewBox="0 0 100 100">
            <defs>
              {/* Inner circle path */}
              <path
                id="innerCirclePath"
                d="M 50,50 m -15,0 a 15,15 0 1,1 30,0 a 15,15 0 1,1 -30,0"
              />
              {/* Middle circle path */}
              <path
                id="middleCirclePath"
                d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
              />
              {/* Outer circle path */}
              <path
                id="outerCirclePath"
                d="M 50,50 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
              />
            </defs>

            {/* Inner rotating text */}
            <text className="circle-text inner-text">
              <textPath href="#innerCirclePath" startOffset="0%">
                INNOVATION • CREATIVITY • EXCELLENCE • 
              </textPath>
            </text>

            {/* Middle rotating text */}
            <text className="circle-text middle-text">
              <textPath href="#middleCirclePath" startOffset="0%">
                DIGITAL SOLUTIONS • BRAND STRATEGY • WEB DEVELOPMENT • 
              </textPath>
            </text>

            {/* Outer rotating text */}
            <text className="circle-text outer-text">
              <textPath href="#outerCirclePath" startOffset="0%">
                TRANSFORMING VISIONS INTO REALITY • CRAFTING DIGITAL EXCELLENCE • 
              </textPath>
            </text>
          </svg>
        </div>

        {/* Call to action text */}
        <div className="cta-text">
          <p className="text-white text-lg md:text-xl text-center animate-pulse">
            Click the center to explore
          </p>
        </div>
      </div>
    </>
  );
};

export default ConcentricCircle;