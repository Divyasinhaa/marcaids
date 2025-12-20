import './ContactUs.css';
import Navbar from '../Navbar';
import bgcontact from "../../assets/backgroundcontact.jpg";
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bgcontact})` }}
      >
        <Navbar />

        <div className="text-center lg:mb-8 mb-6">
          <h1
            className="text-4xl lg:text-6xl font-medium mt-4"
            style={{ fontFamily: 'Mona Sans, sans-serif' }}
          >
            Connect with SkillBridge
          </h1>
          <p
            className="text-gray-500 mt-4 text-xl lg:text-2xl"
            style={{ fontFamily: 'Söhne, sans-serif' }}
          >
            Have learning goals or questions?<br />
            Talk to our community and get started in minutes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mx-auto px-4 lg:px-0 w-full max-w-6xl space-y-8 lg:space-y-0 lg:space-x-8">

          {/* Learning Request Form */}
          <form
            action="https://formspree.io/f/mpwdqaaj"
            method="POST"
            className="bg-[#A6836A] bg-opacity-40 p-6 rounded-3xl shadow-md w-full lg:w-[55%] mx-auto mb-20 lg:mt-6 text-[#000000]"
          >
            <div
              className="flex flex-col md:flex-row justify-between mb-4"
              style={{ fontFamily: 'Söhne, sans-serif' }}
            >
              <div className="flex flex-col w-full md:max-w-xs lg:w-[244px] mb-2">
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="border-black border-2 rounded-xl p-2"
                />
              </div>

              <div className="flex flex-col w-full md:max-w-xs md:ml-4 lg:w-[244px]">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="border-black border-2 rounded-xl p-2"
                />
              </div>
            </div>

            <div className="mb-4">
              <label>Select Learning Support:</label>
              <select
                name="service"
                required
                className="w-full p-3 border-black border-2 rounded-xl"
              >
                <option value="">Choose an option</option>
                <option value="Peer Learning">Peer-to-Peer Learning</option>
                <option value="Micro Mentorship">Micro-Mentorship Session</option>
                <option value="Career Guidance">Career & Project Guidance</option>
                <option value="Skill Sharing">Skill Sharing / Doubt Solving</option>
              </select>
            </div>

            <div className="mb-4">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-black border-2 rounded-xl p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label>Phone Number:</label>
              <input
                type="text"
                name="phoneno"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="border-black border-2 rounded-xl p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label>What do you want to learn?</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="border-black border-2 rounded-xl p-2 w-full h-24"
              />
            </div>

            <button
              type="submit"
              className="bg-white text-gray-800 rounded-lg py-2 px-6 hover:bg-gray-100 transition"
            >
              Submit Learning Request
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-white bg-opacity-10 p-6 lg:w-[40%] w-full text-left">
            <h2 className="text-xl lg:text-2xl font-semibold">
              SkillBridge Community
            </h2>
            <p className="text-xl">Learn together. Grow together.</p>

            <ul className="list-none p-0 text-xl">
              <li>📧 support@skillbridge.com</li>
              <li className="flex items-center mt-2">
                Follow us:
                <a href="#" className="ml-2">
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
                <a href="#" className="ml-2">
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                </a>
              </li>
            </ul>

            <h2 className="text-xl lg:text-2xl font-semibold mt-4">
              Learning Support
            </h2>
            <p className="text-xl">Mon–Fri | 9 AM – 6 PM</p>
            <p className="text-xl">📞 +91 123456789</p>

            <h2 className="text-xl lg:text-2xl font-semibold mt-4">
              What We Offer
            </h2>
            <ul className="list-none p-0 text-xl">
              <li>Peer-to-Peer Learning</li>
              <li>Micro-Mentorship</li>
              <li>Career & Project Guidance</li>
              <li>Skill Sharing Communities</li>
              <li>Student-Led Learning</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactForm;
