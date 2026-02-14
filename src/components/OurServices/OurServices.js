import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1c from "../../assets/img1c-removebg-preview.png";
import img2c from "../../assets/img2c-removebg-preview.png";
import img3c from "../../assets/img3c-removebg-preview.png";
import img4c from "../../assets/img4c-removebg-preview.png";

function OurServices() {
  const services = [
    {
      img: img1c,
      title: "Performance Marketing",
      description: "Transform your digital presence with data-driven strategies that deliver measurable results. Our expert team optimizes every campaign for maximum ROI and ROAS, ensuring your investment drives real business growth."
    },
    {
      img: img2c,
      title: "Web Design & Development",
      description: "Create stunning digital experiences that captivate and convert. From Shopify to WordPress, we build responsive, high-performance websites that perfectly blend aesthetics with functionality."
    },
    {
      img: img3c,
      title: "Brand Strategy",
      description: "Build a brand that resonates and endures. Our strategic approach combines creative vision with market insights to craft authentic identities that stand out in crowded markets."
    },
    {
      img: img4c,
      title: "Social Media Excellence",
      description: "Elevate your social presence with content that engages and inspires. We create cohesive strategies across platforms that build communities and drive meaningful interactions."
    },
    {
      img: img5c,
      title: "Content Creation",
      description: "Tell your story through compelling content that converts. Our team crafts SEO-optimized, engaging narratives that amplify your brand voice and connect with your audience."
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center py-20 px-4">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Our Expertise
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Carousel section */}
        <div className="w-full max-w-6xl mx-auto">
          <Carousel 
            interval={5000}
            indicators={true}
            controls={true}
            className="modern-carousel"
          >
            {services.map((service, index) => (
              <Carousel.Item key={index}>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    
                    {/* Image container */}
                    <div className="w-full md:w-1/3 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30"></div>
                        <img 
                          src={service.img} 
                          alt={service.title} 
                          className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full ring-4 ring-white/20 shadow-xl" 
                        />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="w-full md:w-2/3 text-center md:text-left">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                        {service.title}
                      </h2>
                      <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                      <Link to="/contact">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                          <span className="relative z-10">Get Started</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
=======
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
>>>>>>> 4ceddef6cbb68c23c286d4b8d72847cb75216085
      </div>
    </div>
  );
}

export default OurServices;