import React from "react";
// import "./App.scss";
import Navbar from "../Navbar/Navbar.jsx";
import Home from "../Home/Home.js";
import About from "../About/About.js";
import WhyUs from "../WhyUs/WhyUs.js";
import Testimonials from "../Testimonials/Testimonials.js";
// import Service from "./components/Service/Service";
import Contact from "../Contact/Contact.js";
import Footer from "../Footer/Footer.js";
import OurServices from "../OurServices/OurServices.js";
import OurProducts from "../OurProducts/OurProducts.js";
import { Application } from '@splinetool/runtime';
import { Routes,Route} from "react-router-dom";


const Section = ({ id, children }) => (
  <section id={id} className="section">
    {children}
  </section>
);

function LandinPage() {
  return (
    <div className="App" style={{overflowY:"auto"}}> 
      <Navbar />
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="whyus">
        <WhyUs />
      </Section>
      <Section id="testimonials">
        <Testimonials />
      </Section>
      <Section id="our-Services">
        <OurServices />
      </Section>
      <Section id="our-Products">
        <OurProducts />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}

export default LandinPage;
