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
The core objective is to understand the impact of P2P learning on student performance and motivation, identify key success factors for effective implementation, and analyze the challenges faced in both in-person and digital P2P environments. The research also includes a comparative analysis between traditional instructor-led models and peer-driven models, supported by empirical data, surveys, and literature reviews.
Key components of the project include:
•	Reviewing existing models of P2P learning (e.g., Peer Instruction, Peer-Led Team Learning, Peer-Assisted Reflection)
•	Conducting surveys or interviews with students and educators engaged in P2P formats
•	Evaluating the effectiveness of peer learning in enhancing retention, participation, and collaborative problem-solving
•	Identifying tools and platforms that facilitate effective peer interactions (e.g., forums, group chat apps, collaborative docs)
•	Recommending best practices and strategies for integrating P2P learning into curriculum design
This study ultimately aims to highlight the benefits of peer-led engagement, address implementation gaps, and contribute insights to educators and institutions seeking to modernize their teaching strategies through collaborative, student-centric learning models.
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
