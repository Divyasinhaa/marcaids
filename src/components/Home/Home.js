import React from 'react';
import { Link } from 'react-router-dom';
import branding2 from "../../assets/branding2.png";
import client1 from "../../assets/client1.jpg";
import webanddevelopment from "../../assets/webanddevelopment.png";
import socialmediamanagement from "../../assets/socialmediamanagement.png";
import whatwedo from "../../assets/whatwedo.jpg";
import home1 from "../../assets/home-1.jpeg";
import home2 from "../../assets/home-2.jpeg";
import home4 from "../../assets/home-4.jpeg";
import HeroSection from './HeroSection';
import Footer from "../Footer/Footer";
import './Home.module.css';

const Home = () => {
  return (
    <>
      <HeroSection />

      <div className="font-sans text-black">

        {/* Alumni Header Section */}
        <section className="bg-[#4f3c31] h-24 flex items-center justify-between px-8">
          <span className="text-white text-xl sm:text-4xl">
            SkillBridge Alumni Network
          </span>

          <Link to="/about">
            <button className="px-2 py-2 lg:py-3 bg-white text-black font-semibold rounded-full text-xs sm:text-sm lg:text-base">
              ABOUT US
            </button>
          </Link>
        </section>

        {/* Learning Services Section */}
        <section className="text-left mt-10">
          <h2 className="text-4xl font-semibold mb-6 lg:mb-8 sm:text-4xl lg:text-5xl ml-6 lg:ml-12 mt-8 lg:mt-5">
            Our Learning Services
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6 lg:gap-8 justify-items-center">
            {[client1, webanddevelopment, branding2, socialmediamanagement].map(
              (image, index) => (
                <div
                  key={index}
                  className="w-40 h-40 lg:w-64 lg:h-64 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform"
                >
                  <img
                    src={image}
                    alt={`Learning Service ${index + 1}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              )
            )}
          </div>

          <div className="mt-8 flex justify-center lg:justify-end">
            <Link to="/services">
              <button className="px-6 py-2 lg:py-3 bg-black text-white font-semibold rounded-full text-xs sm:text-sm lg:text-base">
                EXPLORE SERVICES
              </button>
            </Link>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="relative bg-[#867c6e] p-8 mt-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-6xl mb-2 text-left"
            style={{ fontFamily: 'Imprima, sans-serif' }}
          >
            What we do?
          </h2>

          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 ml-2 mr-2">
            <p
              className="flex-1 mb-2 lg:mb-0 text-base sm:text-lg lg:text-4xl leading-relaxed text-left mt-4"
              style={{ fontFamily: 'Imprima, sans-serif' }}
            >
              SkillBridge connects students, alumni, and professionals through
              peer-to-peer learning and micro-mentorship. Learners gain practical
              skills through real-world guidance, alumni share experience, and
              mentors help bridge the gap between academics and industry.
              The platform encourages collaborative growth, hands-on learning,
              and knowledge sharing across domains such as technology, business,
              design, and career development.
            </p>

            <img
              src={whatwedo}
              alt="What we do"
              className="w-full max-h-[250px] sm:max-h-[350px] lg:max-h-[390px] lg:w-[390px] rounded-lg object-cover mt-6"
            />
          </div>

          <div className="flex justify-end mt-4">
            <Link to="/about">
              <button className="absolute bottom-3 lg:bottom-6 right-6 px-6 py-2 sm:py-3 bg-black text-white font-semibold rounded-full text-xs sm:text-sm lg:text-base">
                LEARN MORE
              </button>
            </Link>
          </div>
        </section>

        {/* Alumni Showcase Section */}
        <section className="clientsWorkSection mt-28">
          <div className="container">
            <div className="row">
              <div className="col-md-8" style={{ backgroundColor: 'white' }}>
                <h2 className="lg:text-[46px]">Our Alumni Community</h2>

                <img
                  src={home4}
                  className="lg:w-[750px] lg:h-[1065px]"
                  alt="Alumni Network"
                  style={{ marginLeft: '60px' }}
                />
              </div>

              <div
                className="col-md-4 d-flex flex-column justify-content-between"
                style={{ backgroundColor: 'white' }}
              >
                <img
                  src={home1}
                  className="img-fluid lg:w-[473px] lg:h-[685px] lg:mb-8"
                  alt="Alumni Session"
                />
                <img
                  src={home2}
                  className="img-fluid lg:w-[473px] lg:h-[685px] mb-4"
                  alt="Mentorship Program"
                />
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default Home;
