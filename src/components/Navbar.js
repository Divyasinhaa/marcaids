import React, { useState } from 'react'
import "./Navbar.css";
import { Link,NavLink} from 'react-router-dom'
import logoo_main from "../assets/logoo_main.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <nav>
      <Link to="/"><img src={logoo_main} alt="" style={{width:'130px', height:"130px"}} class="d-inline-block align-text-top"/>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
        <NavLink to="/about">ABOUT US</NavLink>
        </li>
        <li>
        <NavLink to="/blog">BLOG</NavLink>
        </li>
        <li>
        <NavLink to="/testimonials">TESTIMONIALS</NavLink>
        </li>
        <li>
        <NavLink to="/services">OUR SERVICES</NavLink>
        </li>
        <li>
        <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar