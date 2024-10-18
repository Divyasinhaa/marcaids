import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import blog from '../../assets/blog.jpg';
import Footer from "../Footer/Footer";

const ClientSuccessTales = () => {
  return (
    <>
      <div className="flex flex-col justify-between bg-[#555d50] text-white max-w-[1521px] h-[400px] md:h-[800px]">
        
        {/* Button to View Blog */}
        <div className="flex justify-end pr-4 md:pr-8 mb-4"> {/* Adjust the padding and margin for positioning */}
          <Link to="/blog">
          <button className="px-6 py-2  lg:py-3 mr-0 lg:mr-0 bg-[#000000] text-white font-semibold rounded-full text-xs sm:text-sm lg:text-base ml-52 lg:ml-0">
  VIEW BLOG
</button>
          </Link>
        </div>

        {/* Header Content */}
        <div className="flex flex-col items-center mb-5">
          <h2 className="font-serif text-[5vw] md:text-[5.8vw] font-medium text-center">
            CLIENTS SUCCESS TALES
          </h2>
        </div>

        {/* Image Container */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-[1521px] overflow-hidden pt-[50%] rounded-t-full bg-gray-700 h-[400px] md:h-[800px]">
            <img
              src={blog}
              alt="Brand Colours Document"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Ensure Footer is always at the bottom */}
      </div>
      <Footer />
    </>
  );
};

export default ClientSuccessTales;
