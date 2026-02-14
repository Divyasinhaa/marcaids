import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import './Footer.css';

const Footer = () => {
  return (
    <footer className="compact-footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <h3 className="footer-brand">Nexus Studio</h3>
            <p className="footer-tagline">Crafting digital excellence through innovation</p>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/company/marcaids/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-list">
              <li>Performance Marketing</li>
              <li>Web Development</li>
              <li>Brand Strategy</li>
              <li>Social Media</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-list contact-list">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                Haryana, India
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                +91 8816062696
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                hello@nexusstudio.com
              </li>
            </ul>
          </div>
=======
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "black", position: "absolute", width: "100%" }}
      className="footer_div"
    >
      <MDBFooter className="text-center text-lg-start text-muted">
        <section>
          <MDBContainer className="text-center text-md-start">
            <MDBRow style={{ paddingTop: "50px" }}>

              {/* About SkillBridge */}
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <p className="text-white">
                  SkillBridge is a peer-to-peer learning and micro-mentorship
                  platform that connects learners with real-world experience.
                  Learn, share skills, and grow together through community-driven education.
                </p>

                <div className="socialIconsFooter text-white">
                  <a href="#" style={{ color: "white" }}>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    style={{ color: "white", marginLeft: "7px" }}
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    style={{ color: "white", marginLeft: "7px" }}
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://x.com/"
                    style={{ color: "white", marginLeft: "7px" }}
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </MDBCol>

              {/* Location */}
              <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4 footer_column">
                <h5 className="text-white fw-bold mb-4 footer_heading" style={{ fontSize: "1.6rem" }}>
                  Our Location
                </h5>
                <p className="text-white">Delhi, India</p>
                <p className="text-white">
                  <i className="fa-solid fa-phone"></i> +91 1234567890
                </p>
                <p className="text-white">
                  <i className="fa-solid fa-phone"></i> +91 1234567890
                </p>
              </MDBCol>

              {/* Quick Links */}
              <MDBCol md="3" lg="2" xl="3" className="mx-auto mb-4 footer_column">
                <h5 className="text-white fw-bold mb-4 footer_heading" style={{ fontSize: "1.6rem" }}>
                  Quick Links
                </h5>
                <p><a href="/" className="text-white">Home</a></p>
                <p><a href="/about" className="text-white">About SkillBridge</a></p>
                <p><a href="/services" className="text-white">Learning Services</a></p>
                <p><a href="/services" className="text-white">Community Stories</a></p>
                <p>
                  <Link to="/tnc" style={{ color: "white" }}>
                    Terms & Conditions
                  </Link>
                </p>
              </MDBCol>

              {/* Support Hours */}
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 footer_column">
                <h5 className="text-white fw-bold mb-4 footer_heading" style={{ fontSize: "1.6rem" }}>
                  Support Hours
                </h5>

                <p className="text-white timing_p">
                  <i className="far fa-clock"></i> Monday to Friday
                  <p style={{ marginLeft: "35px", color: "white" }}>
                    9:00 AM – 5:30 PM
                  </p>
                </p>

                <p className="text-white timing_p">
                  <i className="far fa-clock"></i> Saturday
                  <p style={{ marginLeft: "35px", color: "white" }}>
                    10:00 AM – 4:00 PM
                  </p>
                </p>

                <p className="schedule">
                  <a href="/contact" style={{ color: "white", fontSize: "0.9rem" }}>
                    REQUEST A LEARNING SESSION
                  </a>
                </p>
              </MDBCol>

            </MDBRow>
          </MDBContainer>
        </section>

        <hr style={{ color: "white" }} />

        {/* Bottom Bar */}
        <div className="ml-5 p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2025 SkillBridge
          <span style={{ marginLeft: "65%" }}>
            Built with <i className="fa-solid fa-heart"></i> for learners
          </span>
>>>>>>> 4ceddef6cbb68c23c286d4b8d72847cb75216085
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p>© 2024 Nexus Studio. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/tnc">Terms</Link>
              <span>•</span>
              <Link to="/privacy">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
