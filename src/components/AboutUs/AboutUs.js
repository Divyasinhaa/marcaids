import React from 'react';
import aboutus1 from "../../assets/aboutus1.jpg";
import aboutus2 from "../../assets/aboutus2.jpg";
import aboutus3 from "../../assets/aboutus3.jpg";
import aaboutus from "../../assets/aaboutus.jpeg";
import Navbar from '../Navbar';
import Footer from "../Footer/Footer";
import "./AboutUs.css"
import { Helmet } from 'react-helmet';

function AboutUs() {
  return (
    <>
      <Navbar />
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the description for my page." />
        <meta name="keywords" content="React, SEO, Meta Tags" />
      </Helmet>

      <section className="aboutUsIntro">
        <div className="container mx-auto lg:px-4 px-0">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-white flex items-center justify-center py-8 lg:py-0">
              <h1 className="text-center text-black font-medium text-3xl lg:text-5xl lg:mb-80">ABOUT US</h1>
            </div>
            <div className="lg:w-2/3 bg-white flex flex-col items-center lg:items-start p-6 lg:p-12">
              <img src={aaboutus} className="w-full object-cover h-64 lg:h-auto mb-4 rounded-2xl" alt="About Us" />
              <h2 className="font-semibold text-2xl text-center lg:text-left mt-5">Why Us?</h2>
              <p className="text-justify mt-2 text-xl " style={{ fontFamily: 'Inika, serif' }}>
              Our marketing platform was built with a clear vision: to bridge the gap between quality products and the right audience. Starting from humble beginnings, we have evolved into a dedicated space where technology, fashion, fitness, and finance meet innovation. In the world of smartphones, we bring the latest models and features directly to consumers through smart digital strategies. For clothing, we showcase brands with a perfect blend of style and individuality, connecting them to fashion-conscious buyers. In the protein and fitness industry, we highlight trustworthy supplements, ensuring fitness enthusiasts find exactly what they need. When it comes to stock prices and financial markets, we deliver reliable, up-to-date information to empower smarter investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="whyUsIntro">
        <div className="container mx-auto px-4 mt-8">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="lg:w-1/2 flex justify-center lg:justify-start mb-4 lg:mb-0">
              <img src={aboutus2} alt="Brand History" className="lg:h-[480px] w-full rounded-2xl" />
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <h2 className="font-semibold text-2xl mt-4 lg:mt-0">History of the Brand</h2>
              <p className="text-justify text-xl" style={{ fontFamily: 'Inika, serif' }}>
              Our marketing platform was built with a clear vision: to bridge the gap between quality products and the right audience. Starting from humble beginnings, we have evolved into a dedicated space where technology, fashion, fitness, and finance meet innovation. In the world of smartphones, we bring the latest models and features directly to consumers through smart digital strategies. For clothing, we showcase brands with a perfect blend of style and individuality, connecting them to fashion-conscious buyers. In the protein and fitness industry, we highlight trustworthy supplements, ensuring fitness enthusiasts find exactly what they need. When it comes to stock prices and financial markets, we deliver reliable, up-to-date information to empower smarter investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ourPromise mt-8 lg:mt-0">
        <div className="container-fluid text-center px-0 ">
          <div className=" mb-6"> 
            <h2 className="font-semibold text-3xl text-[#442004]">OUR PROMISE</h2>
            <p className="mt-4 text-[16px] lg:text-xl  mx-2 text-[#4e3815]" style={{ fontFamily: 'Inika, serif' }}>
            Our promise is simple — to provide accurate, engaging, and trustworthy marketing that not only builds brands but also earns customer loyalty. With a commitment to transparency, creativity, and performance, we aim to create lasting impressions in every industry we touch.
            </p>
          </div>
          {/* Full-Width Image */}
          <div className="w-full">
            <img src={aboutus3} alt="Our Promise" className="w-full object-cover sm:h-100 lg:h-[800px] " />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;
