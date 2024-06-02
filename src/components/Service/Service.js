import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Card from "../Card/Card";
import "./Service.scss";

// Photo yaha se import hogi
import Service1 from '../../assets/smm1.jpg';
import Service2 from '../../assets/smm2.jpg'
gsap.registerPlugin(ScrollTrigger);

// Idhar se photo details change krlena
const services = [
  { imgSrc: Service1, caption: "Social Media Marketing" },
  { imgSrc: Service2, caption: "SEO Marketing" }
];

const Service = () => {
  const serviceRef = useRef(null);

  useEffect(() => {
    const element = serviceRef.current;
    const cards = element.querySelectorAll('.gridContaineritem');
    
    gsap.fromTo(cards, {
      scale: 0.5,
      autoAlpha: 0,
    }, {
      scale: 1,
      autoAlpha: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: cards,
        start: 'top center+=200',
        toggleActions: 'play none none reverse'
      },
      stagger: {
        amount: 0.5
      }
    });
}, []);

  return (
    <div ref={serviceRef} className="services" id="services">
      <div className="servicesTextContainer">

        {/* Title */}
        <h1>What We Do.</h1>

        {/* Tagline */}
        <h2>"Igniting Your Brand's Online Potential"</h2>

        {/* Paragraph */}
        <p>At Marcaids, we specialize in supercharging your brand through two core avenues: Social Media Marketing and SEO. With our Social Media Marketing services, we create compelling content and strategies that capture attention, foster connections, and make your brand shine across platforms like Instagram, Facebook, and more.

Through our SEO services, we fine-tune your website behind the scenes so it appears front and center in search results. This means more people finding your business when they're looking for what you offer.

In essence, we're here to make your brand seen, heard, and remembered in the digital world. Partner with Marcaids and let's write your digital success story together</p>
      </div>

      {/* 2 Cards */}
      <div className="servicesGridContainer">
        {services.map((service, index) => (
          <div className="gridContaineritem" key={index}>
            <Card imgSrc={service.imgSrc} caption={service.caption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
