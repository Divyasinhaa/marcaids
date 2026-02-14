import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import branding2 from "../../assets/branding2.png";
>>>>>>> 4ceddef6cbb68c23c286d4b8d72847cb75216085
import client1 from "../../assets/client1.jpg";
import webanddevelopment from "../../assets/webanddevelopment.png";
import branding2 from "../../assets/branding2.png";
import socialmediamanagement from "../../assets/socialmediamanagement.png";
import whatwedo from "../../assets/whatwedo.jpg";
import home1 from "../../assets/home-1.jpeg";
import home2 from "../../assets/home-2.jpeg";
import home4 from "../../assets/home-4.jpeg";
import HeroSection from './HeroSection';
import Footer from "../Footer/Footer";
import './Home.module.css';

const Home = () => {
  const services = [
    { src: client1, alt: "Strategic Consulting", title: "Strategy" },
    { src: webanddevelopment, alt: "Web & App Development", title: "Development" },
    { src: branding2, alt: "Brand Identity", title: "Branding" },
    { src: socialmediamanagement, alt: "Digital Marketing", title: "Marketing" }
  ];

  return (
    <>
      <HeroSection />
<<<<<<< HEAD
      
      <div className="font-sans bg-white">
        {/* Top Navigation Bar */}
        <section className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-6 px-8 sticky top-0 z-40 backdrop-blur-lg bg-opacity-95">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Nexus Studio
            </span>
           <Link to="/about">
  <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm text-white font-semibold rounded-full text-base md:text-lg border border-white/20 hover:border-purple-400/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl">
    <span className="relative z-10">Discover Us</span>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </button>
</Link>
          </div>
        </section>

        {/* Services Section - Modern Grid */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                Our Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions tailored to elevate your brand
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={service.src} 
                      alt={service.alt} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link to="/services">
                <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <span className="relative z-10">Explore All Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section - Split Design */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Crafting Digital Excellence
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  We are a collective of creative minds and technical experts dedicated to pushing the boundaries of digital innovation. Every project is an opportunity to create something extraordinary.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  From conceptual design to seamless execution, we transform your vision into impactful digital experiences that resonate with your audience and drive measurable results.
                </p>
                <Link to="/about">
                  <button className="group mt-8 px-8 py-4 bg-white text-slate-900 font-bold rounded-full text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Learn Our Story
                    <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </button>
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
                <img 
                  src={whatwedo} 
                  alt="Our creative process" 
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Modern Card */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
              Client Success Stories
            </h2>
            
            <div className="relative bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
                  <img 
                    src={space} 
                    alt="Sandeep Soni - CEO of The Space Crafters" 
                    className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover ring-4 ring-white shadow-lg" 
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <svg className="w-12 h-12 text-purple-400 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed">
                    Working with this team has been transformational. Their innovative approach and attention to detail have significantly elevated our brand presence and business growth.
                  </p>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Sandeep Soni</h3>
                    <p className="text-lg text-gray-600">CEO, The Space Crafters</p>
                  </div>
                </div>

                <Link to="/testimonials">
                  <button className="md:absolute bottom-6 right-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-sm hover:shadow-lg transition-all duration-300">
                    View All Reviews
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section - Masonry Grid */}
        <section className="py-20 px-6 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Featured Work
              </h2>
              <p className="text-xl text-gray-400">
                Showcasing our latest creative projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Large featured image */}
              <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <img 
                  src={home4} 
                  alt="Featured project showcase" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Brand Evolution</h3>
                    <p className="text-gray-300">Complete brand transformation & digital strategy</p>
                  </div>
                </div>
              </div>

              {/* Smaller images */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <img 
                  src={home1} 
                  alt="Project showcase 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Digital Campaign</h3>
                    <p className="text-sm text-gray-300">Marketing & social strategy</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <img 
                  src={home2} 
                  alt="Project showcase 2" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Web Experience</h3>
                    <p className="text-sm text-gray-300">UI/UX design & development</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link to="/portfolio">
                <button className="group px-10 py-4 bg-white text-slate-900 font-bold rounded-full text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View Full Portfolio
                  <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
=======

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

>>>>>>> 4ceddef6cbb68c23c286d4b8d72847cb75216085
      <Footer />
    </>
  );
};

export default Home;