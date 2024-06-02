import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import WhyUs from "./components/WhyUs/WhyUs.js";
import Testimonials from "./components/Testimonials/Testimonials";
// import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import OurServices from "./components/OurServices/OurServices.js"
import OurProducts from "./components/OurProducts/OurProducts.js";
import { Application } from '@splinetool/runtime';


const Section = ({ id, children }) => (
  <section id={id} className="section">
    {children}
  </section>
);

function App() {
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

export default App;
