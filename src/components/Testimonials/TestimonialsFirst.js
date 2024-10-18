import React from 'react';
import Testimonials from './Testimonials';
import ClientSuccessTales from './ClientSuccessTales';
import Navbar from '../Navbar';
import testimonialsbg from '../../assets/testimonialsbg.jpeg';

function TestimonialsFirst() {
  return (
    <>
      <div 
        className="bg-cover bg-center min-h-screen flex flex-col" 
        style={{ backgroundImage: `url(${testimonialsbg})` }}
      >
        <Navbar />
        <div className="flex justify-center items-center pt-32 pb-6 lg:ml-40">
          <svg viewBox="0 0 500 150" className="w-3/5 lg:w-2/5" xmlns="http://www.w3.org/2000/svg">
            <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text width="500">
              <textPath href="#curve" startOffset="50%" textAnchor="middle" className="font-serif font-medium text-black uppercase text-[13vw] md:text-[4vw] lg:text-[58px] ">
                TESTIMONIALS
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <Testimonials/>
      <ClientSuccessTales />
    </>
  );
}

export default TestimonialsFirst;
