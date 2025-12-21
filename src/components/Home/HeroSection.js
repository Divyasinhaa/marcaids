import React from "react";
import Navbar from "../Navbar";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="App">
      <div className="HS">
        <Navbar />
        <div className="hero-content">
          <div className="hero-sec">
            <div className="container">
              <div className="row">
                <div className="col-md-7 k">
                  <h1 
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif",
                      fontWeight: 100,
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
                    }}
                    className="text-black"
                  >
                    SkillBridge
                  </h1>
                </div>
                <div className="col-md-4 text-white ml-10">
                  <p 
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif",
                      fontWeight: 100,
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    Let's build your identity and the Alumni
                  </p>
                </div>
              </div>
            </div>

            <div className="container text-black mt-4">
              <div className="row">
                <div className="col-md-5">
                  <h2 
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif",
                      fontWeight: 100,
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    your
                  </h2>
                </div>
                <div className="col-md-5">
                  <h1 
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif",
                      fontWeight: 100,
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    Alumni
                  </h1>
                </div>
              </div>
            </div>

            {/* Static Text Layer */}
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
