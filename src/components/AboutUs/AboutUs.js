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
        <title>About Us - Nexus Studio</title>
        <meta name="description" content="Learn about our journey, mission, and commitment to digital excellence." />
        <meta name="keywords" content="Digital Agency, Web Design, Branding, Marketing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                  About
                </span>
                <br />
                <span className="text-white">Our Story</span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mb-8 mx-auto lg:mx-0"></div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src={aaboutus} 
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl ring-4 ring-white/10" 
                alt="About Us" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              In today's fast-paced digital landscape, standing out requires more than just presence—it demands excellence. We don't see challenges; we see opportunities for innovation and growth. As your strategic partner, we combine creativity with data-driven insights to craft experiences that resonate and convert. Our approach blends passion with precision, ensuring every campaign delivers measurable impact. We're not just building brands; we're creating movements that influence trends and set new industry standards. Ready to transform your digital presence? Let's elevate your brand together.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
                <img 
                  src={aboutus2} 
                  alt="Brand History" 
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl ring-4 ring-white/10" 
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Journey</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Born from a vision to transform digital challenges into opportunities, we've grown from humble beginnings into a force of innovation. We're more than a digital agency—we're your growth catalyst, infusing every project with creativity and cutting-edge strategy. From social media mastery to comprehensive brand development and web solutions, we don't just help brands keep up; we help them stand out. Choosing us means committing to excellence, creativity, and transformative results that push boundaries and redefine what's possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="relative bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
              Our Promise
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We create impact through bold innovation and fearless experimentation. By pushing boundaries, we unite cultures, ideas, people, and communities. We approach everything differently, leaving lasting impressions that matter. Our commitment is to innovation, action, and results—delivering what others only dream of.
            </p>
          </div>
        </div>

        {/* Full-Width Image */}
        <div className="w-full mt-12">
          <div className="relative h-96 md:h-[600px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            <img 
              src={aboutus3} 
              alt="Our Promise" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;