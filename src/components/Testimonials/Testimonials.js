import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Testimonials.scss";

// Yaha 3 photo import hogi
import space from "../../assets/space.jpeg";
import man1 from "../../assets/rohan.jpeg";
import woman1 from "../../assets/mac.jpeg";
import woman2 from "../../assets/annu.jpeg";
import rv from "../../assets/rv.jpeg";
import ay from "../../assets/aay.jpg";

gsap.registerPlugin(ScrollTrigger);

// Yaha se Testimonial details change hogi
const testimonialsData = [
  {
    img: space,
    name: "Sandeep Soni",
    designation: "CEO, The Space Crafters",
    alt: "Man1 testimonial",
    text: "❝Partnering with Marcaids has significantly boosted our interior design business. Their lead generation expertise and targeted campaigns have driven increased website visits, resulting in tangible growth. Their transparency and communication make them invaluable partners. Highly recommended❞",
  },
  {
    img: woman1,
    name: "Monika Sharma",
    designation: "Mac Biosciences",
    alt: "Woman1 testimonial",
    text: "❝Since collaborating with Marcaids, Mac biosciences has undergone a complete digital makeover and witnessed an increase in sales. They are a great partner in helping us not only establish and optimize our primary goals but also react to practical difficulties and novel opportunities.❞",
  },
  {
    img: rv,
    name: "Rv Dezigns",
    designation: "Rv Dezigns",
    alt: "Woman2 testimonial",
    text: "❝Hey fellow design aficionados! Ready to turbocharge your online presence? Meet Marcaids . Their savvy lead generation tactics and killer campaigns have skyrocketed our website traffic . Don't let your competitors steal the spotlight. Reach out to Marcaids and watch your business thrive.❞",
  },
  {
    img: woman2,
    name: "Annu Yadav",
    designation: "Data Analyst at Global Infrastructure Hub",
    alt: "Woman2 testimonial",
    text: "❝Thank you Chirag Yadav for setting up my social media handle and for creating my website. It had helped me to reach my objective and I will recommend your service to my colleagues and to other business also. Best wishes for a bright future ahead, Chirag.❞",
  },
  {
    img: man1,
    name: "Rohan Khanna",
    designation: "Senior Consultant, Data Management at Fresh Gravity",
    alt: "Man1 testimonial",
    text: "❝You Seldom come across a person like Chirag in your life. An honest and hard working individual and brings a lot of fresh perspective to the table. His lead generating strategies were so unique and out of the box that we immediately knew that we were in good hands.❞",
  },
  {
    img: ay,
    name: "Aayush Kakkar",
    designation: "Founder, Innovi Soft",
    alt: "Man1 testimonial",
    text: "❝Thanks to Marcaids, our software company has seen remarkable growth. Their tailored strategies and creative campaigns have boosted our visibility and sales. If you're ready to elevate your business, reach out to them today – you won't be disappointed!❞",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    const cards = element.querySelectorAll(".testimonialsGridItem");
    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: "+=100" },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "back.out(1.5)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="testimonials">
      <div className="testimonials-header">
        {/* Title */}
        <span className="testimonials-header_span">What Our Clients Say</span>
      </div>
  
      <div className="testimonialsGridContainer">
        {testimonialsData.map(
          ({ img, alt, text, name, designation }, index) => (
            <div key={index} className="testimonialsGridItem">
              <img src={img} alt={alt} />
              <h3>{name}</h3>
              <h4>{designation}</h4>
              <p>{text}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Testimonials;
