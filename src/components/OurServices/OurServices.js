import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1c from "../../assets/img1c-removebg-preview.png";
import img2c from "../../assets/img2c-removebg-preview.png";
import img3c from "../../assets/img3c-removebg-preview.png";
import img4c from "../../assets/img4c-removebg-preview.png";
import img5c from "../../assets/img5c-removebg-preview.png";

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
      </div>
    </div>
  );
}

export default OurServices;