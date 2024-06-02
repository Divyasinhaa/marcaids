import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import Logo from '../../assets/logoo_main.png';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { FaBars, FaTimes } from "react-icons/fa";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const sections = ['home', 'about', 'whyus', 'testimonials',  'our-Services', 'contact'];
  const [activeLink, setActiveLink] = useState(sections[0]);
  const [showMenu, setShowMenu] = useState(false); 

  const handleNavLink = (e, id) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: `#${id}`, ease: 'power1.out' });
    setActiveLink(id);
    setShowMenu(false); 
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const onScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        let section = document.querySelector(`#${sections[i]}`);
        if (section?.getBoundingClientRect()?.top < window.innerHeight / 2) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [setActiveLink]);

  return (
    <div className="navbar">
      <nav className="menu">
      <a href="#home" className="menuLogo"> 
          <img src={Logo} width={60} height={50} alt="Logo" />
        </a>
        <div className="menu-icon" onClick={handleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`menuItems ${showMenu ? 'show' : ''}`}  style={{marginLeft:"260px"}}>
          {sections.map((section) => (
            <a
            
              key={section}
              onClick={(e) => handleNavLink(e, section)}
              className={activeLink === section ? 'active' : ''}
            >
              {section === 'whyus' ? 'WHY US' : section.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
