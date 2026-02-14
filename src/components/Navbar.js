import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
<<<<<<< HEAD
    <nav className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-text">Nexus</span>
          <span className="brand-accent">Studio</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-menu desktop-menu">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
          <li><NavLink to="/testimonials" className={({ isActive }) => isActive ? 'active' : ''}>Testimonials</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>
          <li>
            <Link to="/contact" className="cta-button">
              Get Started
            </Link>
          </li>
=======
    <>
   
      <nav className="navbar">
       

        {/* Search bar */}
        <div className="searchbarr">
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>

        {/* Hamburger icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" onClick={toggleMenu}>HOME</NavLink></li>
          <li><NavLink to="/services" onClick={toggleMenu}>OUR SERVICES</NavLink></li>
          
          
          <li><NavLink to="/blog" onClick={toggleMenu}>BLOG</NavLink></li>
         
          <li><NavLink to="/contact" onClick={toggleMenu}>CONTACT</NavLink></li>
>>>>>>> 4ceddef6cbb68c23c286d4b8d72847cb75216085
        </ul>

        {/* Mobile Menu Toggle */}
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/testimonials" onClick={closeMenu}>Testimonials</NavLink></li>
            <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
            <li>
              <Link to="/contact" className="cta-button" onClick={closeMenu}>
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;