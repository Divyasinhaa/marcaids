// WhyUs.jsx

import React from "react";
import "./WhyUs.scss";
import whyUsImage from "../../assets/pexels-diimejii-3314294.jpg"; // Import your image here

const WhyUs = () => (
  <>
  <section className="whyus">
    <div className="main_whyUs">
      
    </div>
  <div className="whyusImageContainer">
   <img src={whyUsImage} alt="Why Us" style={{height:"500px"}} />
  </div>
    <div className="whyusTextContainer">
     
      <h3 style={{ color: "#2c1a46",marginRight:"auto"}} className="whyusHeading">
      Why Us?
    </h3>
    
      <p>
        In today's competitive landscape, marketing and innovation are the
        lifeblood of any enterprise, yet they can be dauntingly
        resource-intensive. However, at Marcaids, we see these challenges as
        opportunities. We're not just a marketing agency; we're your strategic
        partner in growth, bringing a blend of creativity and innovation to
        every project. With us, your business isn't just another player in the
        market; it's a trailblazer, setting the pace for others to follow.
        Choosing Marcaids means choosing excellence. We don't just meet
        expectations; we exceed them, leaving a lasting impression on your
        audience. And while we take our work seriously, we also know how to
        infuse fun and excitement into every campaign, ensuring a dynamic and
        memorable experience. So, if you're ready to take your business to new
        heights, Marcaids is the answer you've been searching for.
      </p>
    </div>
 
  </section>
 </>
);

export default WhyUs;
