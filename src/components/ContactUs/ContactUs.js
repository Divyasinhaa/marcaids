import './ContactUs.css';
import Navbar from '../Navbar';
import bgcontact from "../../assets/backgroundcontact.jpg";
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    service: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="relative min-h-screen">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgcontact})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/85 to-slate-900/90"></div>
        </div>

        <Navbar />
        
        <div className="relative z-10 py-16 px-4">
          {/* Header Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Let's Create
              </span>
              <br />
              <span className="text-white">Together</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Got questions? We're here to help.
              <br />
              Chat with our team and get started in minutes.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Contact Form */}
              <form 
                action="https://formspree.io/f/xyzgroar" 
                method="POST" 
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20"
              >
                <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="mb-6">
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

                <div className="mb-6">
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

                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2 text-sm">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="mb-8">
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
              </form>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Email Section */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
                      <p className="text-gray-300 mb-3">Reach out to our team</p>
                      <p className="text-purple-400">hello@nexusstudio.com</p>
                      <p className="text-purple-400">support@nexusstudio.com</p>
                    </div>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Call Us</h3>
                      <p className="text-gray-300 mb-3">Mon-Fri from 9am-6pm</p>
                      <p className="text-purple-400">+91 8580440313</p>
                      <p className="text-purple-400">+91 8816062696</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Section */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Follow Us</h3>
                      <p className="text-gray-300 mb-4">Stay connected on social media</p>
                      <div className="flex gap-4">
                        <a 
                          href="https://www.instagram.com/your_instagram" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                        >
                          <FontAwesomeIcon icon={faInstagram} className="text-xl text-white" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/your_linkedin" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                        >
                          <FontAwesomeIcon icon={faLinkedin} className="text-xl text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services List */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Services</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Performance Marketing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      Web Design & Development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Brand Strategy
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Social Media Management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      Content Creation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactForm;