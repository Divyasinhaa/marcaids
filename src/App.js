import React from "react";
import "./App.scss";
import {BrowserRouter, Routes,Route , Router} from "react-router-dom";
import Home from "./components/Home/Home.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import ContactPage from "./components/OurServices/ContactPage.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import Blogpage from "./components/Blog/Gallery.js"


function App() {
  return (
    <>
     {/* <BrowserRouter> */}
     
      
      <Routes>
     <Route path="/" element={<Home/>}/>
     
     <Route path="/about" element={<AboutUs/>}/>
     <Route path="/blog" element={<Blogpage/>}/>
      <Route path="/services" element={<ContactPage/>}/>   
      {/* <Route path="/testimonials" element={<TestimonialsFirst/>}/> */}
      <Route path="/contact" element={<ContactUs/>}/>
     </Routes>
    
     
     {/* </BrowserRouter> */}
     </>
  );
}

export default App;
