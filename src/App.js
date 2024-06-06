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
import {BrowserRouter, Routes,Route} from "react-router-dom";
import LandinPage from "./components/LandingPage/LandingPage.js";
import TermsNCond from "./components/tnc/tnc.js";

const Section = ({ id, children }) => (
  <section id={id} className="section">
    {children}
  </section>
);

function App() {
  return (
    <div className="App" style={{overflowY:"auto"}}> 
     {/* <BrowserRouter> */}
     <Routes>
      <Route path="/" element={<LandinPage/>}/>
      <Route path="/tnc" element={<TermsNCond/>}/>
     </Routes>
     {/* </BrowserRouter> */}

      
      
    </div>
  );
}

export default App;
