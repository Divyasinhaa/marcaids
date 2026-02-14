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
<<<<<<< HEAD
        <title>About Us - Nexus Studio</title>
        <meta name="description" content="Learn about our journey, mission, and commitment to digital excellence." />
        <meta name="keywords" content="Digital Agency, Web Design, Branding, Marketing" />
=======
        <title>My Page Title</title>
        <meta name="description" content="This is the description for my page." />
        <meta name="keywords" content="React, SEO, Meta Tags" />
>>>>>>> 4ceddef6cbb68c23c286d4b8d72847cb75216085
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
<<<<<<< HEAD

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src={aaboutus} 
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl ring-4 ring-white/10" 
                alt="About Us" 
              />
=======
            <div className="lg:w-2/3 bg-white flex flex-col items-center lg:items-start p-6 lg:p-12">
              <img src={aaboutus} className="w-full object-cover h-64 lg:h-auto mb-4 rounded-2xl" alt="About Us" />
              <h2 className="font-semibold text-2xl text-center lg:text-left mt-5">Why Us?</h2>
              <p className="text-justify mt-2 text-xl " style={{ fontFamily: 'Inika, serif' }}>
The core objective is to understand the impact of P2P learning on student performance and motivation, identify key success factors for effective implementation, and analyze the challenges faced in both in-person and digital P2P environments. The research also includes a comparative analysis between traditional instructor-led models and peer-driven models, supported by empirical data, surveys, and literature reviews.
Key components of the project include:
•	Reviewing existing models of P2P learning (e.g., Peer Instruction, Peer-Led Team Learning, Peer-Assisted Reflection)
•	Conducting surveys or interviews with students and educators engaged in P2P formats
•	Evaluating the effectiveness of peer learning in enhancing retention, participation, and collaborative problem-solving
•	Identifying tools and platforms that facilitate effective peer interactions (e.g., forums, group chat apps, collaborative docs)
•	Recommending best practices and strategies for integrating P2P learning into curriculum design
This study ultimately aims to highlight the benefits of peer-led engagement, address implementation gaps, and contribute insights to educators and institutions seeking to modernize their teaching strategies through collaborative, student-centric learning models.
              </p>
>>>>>>> 4ceddef6cbb68c23c286d4b8d72847cb75216085
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      <section className="whyUsIntro">
        <div className="container mx-auto px-4 mt-8">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="lg:w-1/2 flex justify-center lg:justify-start mb-4 lg:mb-0">
              <img src={aboutus2} alt="Brand History" className="lg:h-[480px] w-full rounded-2xl" />
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <h2 className="font-semibold text-2xl mt-4 lg:mt-0">History of the Brand</h2>
              <p className="text-justify text-xl" style={{ fontFamily: 'Inika, serif' }}>
Our peer-to-peer learning platform was built with a clear vision: to bridge the gap between learners and the right knowledge through meaningful human connections. What began as a simple idea has evolved into a collaborative space where skills, experience, and curiosity come together. Across domains such as technology, academics, career growth, and personal development, we enable individuals to learn directly from peers who have been there and done that. Learners gain practical insights through shared experiences, while mentors and peers exchange real-world knowledge rather than textbook theory. By fostering micro-mentorship, discussion, and community-driven learning, we empower people to grow together, learn faster, and build confidence through shared learning journeys.              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ourPromise mt-8 lg:mt-0">
        <div className="container-fluid text-center px-0 ">
          <div className=" mb-6"> 
            <h2 className="font-semibold text-3xl text-[#442004]">OUR PROMISE</h2>
            <p className="mt-4 text-[16px] lg:text-xl  mx-2 text-[#4e3815]" style={{ fontFamily: 'Inika, serif' }}>
Our promise is simple — to enable accurate, engaging, and trustworthy learning experiences that build real skills and lasting confidence. With a strong commitment to transparency, collaboration, and meaningful outcomes, we strive to foster genuine peer connections and create long-term impact for every learner and mentor who becomes part of our community.            </p>
>>>>>>> 4ceddef6cbb68c23c286d4b8d72847cb75216085
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