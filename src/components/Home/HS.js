import React from "react";
import "./HS.css";
import bghome from "../../assets/bg-home.jpeg";

/**
 * Legacy HS component - Consider using HeroSection.jsx instead
 * This component is kept for backward compatibility
 */
const HS = ({ isOpen, onAnimationComplete }) => {
  return (
    <div
      className={`HS ${isOpen ? "open" : ""}`}
      style={{ backgroundImage: `url(${bghome})` }}
    >
      <div className="hero-content">
        <div className={`hero-sec ${isOpen ? "slide-out" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1
                  style={{
                    fontFamily: "'IM Fell Great Primer', serif",
                    fontWeight: 100,
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Building
                </h1>
              </div>
              <div className="col-md-4">
                <p
                  style={{
                    fontFamily: "'IM Fell Great Primer', serif",
                    fontWeight: 100,
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Let's build your identity and your brand
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h2
                  style={{
                    fontFamily: "'IM Fell Great Primer', serif",
                    fontWeight: 100,
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
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
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Business
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HS;