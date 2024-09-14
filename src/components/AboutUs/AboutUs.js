import React from 'react'
import aboutus1 from "../../assets/aboutus1.jpg";
import aboutus2 from "../../assets/aboutus2.jpg";
import aboutus3 from "../../assets/aboutus3.jpg";
import aaboutus from "../../assets/aaboutus.jpeg";
import Navbar from '../Navbar';
import Footer from "../Footer/Footer";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
    <Navbar/>


    <section className="aboutUsIntro">
          <div class="container" >
             <div class="row">
                  <div class="col-md-4" style={{backgroundColor:'white'}}>
                  <h1 style={{textDecoration:'none',color:'black',height: '650px',fontWeight:'500',display: 'flex',alignItems:'center',}}>ABOUT US</h1>
      </div>
      <div class="col-md-8 d-flex flex-column justify-content-between"  style={{backgroundColor:'white'}}>
        <img src={aaboutus} class="smallimage" alt="Small Image 1"/>
        <h2 className="font-weight-bold mt-3"  style={{textDecoration:'none'}}>Why Us?</h2>
          <p className="Why-us" style={{backgroundColor:'white',lineSpacing:'1rem'}}>
            In today's competitive landscape, marketing and innovation are the lifeblood of any
            enterprise, yet they can be dauntingly resource-intensive. However, at Marcaids, we
            see these challenges as opportunities. We're not just a marketing agency; we're your
            strategic partner in growth, bringing a blend of creativity and innovation to every
            project. With us, your business isn't just another player in the market; it's a trailblazer,
            setting the pace for others to follow. Choosing Marcaids means choosing excellence.
            We don't just meet expectations; we exceed them, leaving a lasting impression on
            your audience. And while we take our work seriously, we also know how to infuse fun
            and excitement into every campaign, ensuring a dynamic and memorable experience.
            So, if you're ready to take your business to new heights, Marcaids is the answer you've
            been searching for.
          </p>
      </div>
    </div>
  </div>

            
        </section>
        <section className="whyUsIntro">
        <div className="container mt-5" style={{backgroundColor:'white'}}>
      <div className="row align-items-center" style={{backgroundColor:'white'}}>
        <div className="col-md-6 text-center" style={{backgroundColor:'white'}}>
          <img src={aboutus2} alt="Brand History" className="smallimage1" style={{ width: '100%', height: '450px' }}/>
        </div>
        <div className="col-md-6" style={{backgroundColor:'white'}}>
          <h2 className="font-weight-bold" style={{textDecoration:'none'}}>HISTORY OF THE BRAND</h2>
          <p className="History" style={{backgroundColor:'white',lineSpacing:'1rem'}}>
            In today's competitive landscape, marketing and innovation are the lifeblood of any
            enterprise, yet they can be dauntingly resource-intensive. However, at Marcaids, we
            see these challenges as opportunities. We're not just a marketing agency; we're your
            strategic partner in growth, bringing a blend of creativity and innovation to every
            project. With us, your business isn't just another player in the market; it's a trailblazer,
            setting the pace for others to follow. Choosing Marcaids means choosing excellence.
          </p>
        </div>
      </div>
    </div>
    </section>
    <section className="ourPromise">
    <div className="container-fluid our-promise-section">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-10">
          <h2 className="font-weight-bold" style={{textDecoration:'none',fontStyle:'italic'}}>OUR PROMISE</h2>
          <p className="promise">
            WE ALWAYS LEAVE A MARK THROUGH THE ACTIONS WE MAKE. BY BEING BOLD AND DARING TO DO
            THINGS DIFFERENTLY, WE PUSH LIMITS AND REDEFINE HOW THINGS ARE DONE. IT'S A CONNECTION
            BETWEEN CULTURES, IDEAS, ACTIVITIES, PEOPLE AND COMMUNITIES.
          </p>
        </div>
        <img src={aboutus3} alt="Brand History" className="img-fluid" style={{ width: '100%', height: '800px' }}/>
      </div>
    </div>
    </section>
    <Footer/>
    </>
  )
}

export default AboutUs