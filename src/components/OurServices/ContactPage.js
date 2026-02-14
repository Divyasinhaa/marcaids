import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OurServices from "./OurServices";
import CarouselComponent from "./CarouselComponent";
import Footer from "../Footer/Footer";
import FAQ from "./FAQ";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <CarouselComponent />
      <OurServices />
      <FAQ />
      
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 p-6 md:p-16">
        {/* Top Navigation Links */}
        <div className="max-w-7xl mx-auto flex justify-center md:justify-end space-x-8 md:space-x-16 mb-12">
          <a 
            href="/blog" 
            className="text-white font-semibold text-lg hover:text-purple-400 transition-colors duration-300 no-underline"
          >
            PROJECTS
          </a>
          <a 
            href="/contact" 
            className="text-white font-semibold text-lg hover:text-pink-400 transition-colors duration-300 no-underline"
          >
            CONTACT
          </a>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info */}
            <div className="text-center md:text-left p-8 space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Let's Connect
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mb-8"></div>
              </div>
              
              <div className="space-y-4 text-gray-300 text-lg">
                <div className="flex items-start md:items-center gap-3">
                  <svg className="w-6 h-6 text-purple-400 mt-1 md:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>Delhi, Gurugram</p>
                </div>
                
                <div className="flex items-start md:items-center gap-3">
                  <svg className="w-6 h-6 text-purple-400 mt-1 md:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p>+91 8580440313</p>
                    <p>+91 8816062696</p>
                  </div>
                </div>
                
                <div className="flex items-start md:items-center gap-3">
                  <svg className="w-6 h-6 text-purple-400 mt-1 md:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p>hello@nexusstudio.com</p>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-gray-400 text-base leading-relaxed">
                  Ready to elevate your digital presence? Let's discuss how we can transform your vision into reality.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/xyzgroar"
              method="POST"
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Send us a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Select Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                  >
                    <option value="" className="bg-slate-800">Choose a service</option>
                    <option value="Performance Marketing" className="bg-slate-800">Performance Marketing</option>
                    <option value="Web Development" className="bg-slate-800">Web Development</option>
                    <option value="Branding" className="bg-slate-800">Brand Strategy</option>
                    <option value="Social Media" className="bg-slate-800">Social Media Management</option>
                    <option value="Content Creation" className="bg-slate-800">Content Creation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ContactPage;