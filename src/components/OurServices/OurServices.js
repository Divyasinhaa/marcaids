import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1c from "../../assets/img1c-removebg-preview.png";
import img2c from "../../assets/img2c-removebg-preview.png";
import img3c from "../../assets/img3c-removebg-preview.png";
import img4c from "../../assets/img4c-removebg-preview.png";

function OurServices() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10">
      <div className="text-4xl lg:text-5xl md:text-4xl font-bold underline text-center mb-5">
        OUR SERVICES
      </div>

      {/* Carousel section */}
      <div className="w-full max-w-7xl px-4">
        <Carousel>

          {/* Slide 1: Peer-to-Peer Skill Learning */}
          <Carousel.Item>
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-400 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img src={img1c} alt="Peer Learning" className="w-40 h-40 object-cover rounded-full" />
              </div>

              <div className="w-full md:w-2/3 md:pl-8 text-start">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                  PEER-TO-PEER SKILL LEARNING
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-6">
                  SkillBridge enables learners to connect directly with peers who have real-world experience.
                  Instead of one-way teaching, users learn through shared knowledge, discussions, and
                  collaborative problem-solving across technical and non-technical domains.
                </p>
                <Link to="/contact">
                  <button className="bg-gray-700 text-white rounded-full py-3 px-8 hover:bg-gray-800 transition">
                    Start Learning
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>

          {/* Slide 2: Micro-Mentorship */}
          <Carousel.Item>
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-400 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img src={img2c} alt="Micro Mentorship" className="w-40 h-40 object-cover rounded-full" />
              </div>

              <div className="w-full md:w-2/3 md:pl-8 text-start">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                  MICRO-MENTORSHIP SESSIONS
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-6">
                  Learners can book short, focused mentorship sessions with peers and seniors to gain
                  clarity on concepts, career paths, projects, and interviews. This flexible model
                  ensures guidance without long-term commitments.
                </p>
                <Link to="/contact">
                  <button className="bg-gray-700 text-white rounded-full py-3 px-8 hover:bg-gray-800 transition">
                    Book a Session
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>

          {/* Slide 3: Career & Project Guidance */}
          <Carousel.Item>
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-400 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img src={img3c} alt="Career Guidance" className="w-40 h-40 object-cover rounded-full" />
              </div>

              <div className="w-full md:w-2/3 md:pl-8 text-start">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                  CAREER & PROJECT GUIDANCE
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-6">
                  SkillBridge connects students with peers who have already worked on similar projects,
                  internships, or job roles. Learners receive practical insights, project feedback,
                  and real career advice based on firsthand experience.
                </p>
                <Link to="/contact">
                  <button className="bg-gray-700 text-white rounded-full py-3 px-8 hover:bg-gray-800 transition">
                    Get Guidance
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>

          {/* Slide 4: Community-Driven Learning */}
          <Carousel.Item>
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-400 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img src={img4c} alt="Community Learning" className="w-40 h-40 object-cover rounded-full" />
              </div>

              <div className="w-full md:w-2/3 md:pl-8 text-start">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                  COMMUNITY-DRIVEN LEARNING
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-6">
                  Through discussion rooms, peer groups, and collaborative challenges, SkillBridge
                  builds a learning community where users grow together. Knowledge sharing,
                  peer feedback, and collaboration form the core of our learning ecosystem.
                </p>
                <Link to="/contact">
                  <button className="bg-gray-700 text-white rounded-full py-3 px-8 hover:bg-gray-800 transition">
                    Join Community
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
  );
}

export default OurServices;
