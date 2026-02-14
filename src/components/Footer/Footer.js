import React from "react";
import { Link } from "react-router-dom";
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