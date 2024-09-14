import React from 'react';
import styles from './Home.module.css';
import branding2 from "../../assets/branding2.png";
import img1 from '../../assets/img1.jpg'; // replace with your actual image path
import space from "../../assets/space.jpeg";
import bghome from "../../assets/bg-home.jpeg";
import home1 from "../../assets/home-1.jpeg";
import home2 from "../../assets/home-2.jpeg";
import home3 from "../../assets/home-3.jpeg";
import home4 from "../../assets/home-4.jpeg";
import whatwedo from "../../assets/whatwedo.jpg";
import contentcreation from "../../assets/contentcreation.jpg";
import socialmediamanagement from "../../assets/socialmediamanagement.png";
import webanddevelopment from "../../assets/webanddevelopment.png";
import marketing2 from '../../assets/marketing2.jpg';
// import HeroSection from './HeroSection';
import HS from './HS';

import ConcentricCircle from './ConcentricCircle';
import {Button, Navbar} from 'react-bootstrap';
import Footer from "../Footer/Footer";





const Home = () => {
    
      return (
        <>
        {/* <HeroSection/> */}
        
        <HS/>
        <ConcentricCircle/>
        
        <div className={styles.container}>
            

             <section className={styles.marcaidsHeader}>
                <div className={styles.header}>
              <span style={{color:'white',padding:'60px',fontSize:'1.5rem'}}>MARCAIDS</span>
              <Button variant="light" style={{ fontSize: 'small',fontWeight: '500',borderRadius:'30px',marginLeft:'900px'}} className="custom-button">KNOW MORE</Button>
             </div>
             </section>


             <section className={styles.servicesContainer}>
             <div className={styles.imagesContainer}>
      <h2>Our Services</h2>
      <div className={styles.images}>

        <div class="container">
  <div class="row">
    <div class="col-md-3" style={{backgroundColor:'white',justifyContent:'center'}}>
    <div className={styles.imageItem}>
          <img src={marketing2} alt="Service 1" />
        </div>
    </div>
    <div class="col-md-3" style={{backgroundColor:'white'}}>
    <div className={styles.imageItem}>
          <img src={webanddevelopment} alt="Service 1" />
        </div>
    </div>
    <div class="col-md-3" style={{backgroundColor:'white'}}>
    <div className={styles.imageItem}>
          <img src={branding2} alt="Service 1" />
        </div>
    </div>
    <div class="col-md-3" style={{backgroundColor:'white'}}>
    <div className={styles.imageItem}>
          <img src={socialmediamanagement} alt="Service 1" />
        </div>
    </div>
  </div>
</div>

      </div>
      <Button variant="dark" style={{ fontSize: 'small',fontWeight: '500',borderRadius:'30px',marginLeft:'1100px'}} className="custom-button">KNOW MORE</Button>
     
    </div>
    </section>


            <section className={styles.whatWeDo}>
                <h2>What we do?</h2>
                <div className={styles.whatWeDoContent}>
                    <p>
                        Your brand is outstanding & you are aware of that. All you need to do now is get everyone else on board.
                        We're marcaids, your next door marketing agency that specializes in accelerating the growth of brands that
                        address present issues to create better futures. Because who does not want their brand to be as cool as a
                        talking dog wearing sunglasses & yes, we've got just the trick! We are also honored to share their services
                        and stories with a larger audience because their missions are about purpose as much as profit. We prefer
                        to refer to it as ethical marketing. Sound like we'd be an ideal match?
                    </p>
                    <img src={whatwedo} alt="What we do" />
                </div>
            </section>

            <section className={styles.testimonials}>
                <h2>Testimonials</h2>
                <div className={styles.testimonialCard}>
                    <img src={space} alt="Sandeep Soni" className={styles.testimonialImage} />
                    <div className={styles.testimonialContent}>
                        <h3>Sandeep Soni</h3>
                        <p>CEO, The Space Crafters</p>
                        <blockquote>
                            Partnering with Marcaids has significantly boosted our interior design business.
                        </blockquote>
                        <button className={styles.knowMoreButton}>Know More</button>
                    </div>
                </div>
            </section>

            <section className={styles.clientsWorkSection}>
            <h2 >Our Clients Work</h2>
            
            <div class="container" >
              
               <div class="row">
                  <div class="col-md-8" style={{backgroundColor:'white'}}>
        <img src={home4} class="img-fluid" alt="Large Image"/>
      </div>
      <div class="col-md-4 d-flex flex-column justify-content-between"  style={{backgroundColor:'white'}}>
        <img src={home1} class="img-fluid mb-3" alt="Small Image 1"/>
        <img src={home2} class="img-fluid" alt="Small Image 2"/>
      </div>
    </div>
  </div>

            
        </section>
        </div>
        <Footer/>
        </>
    );
};

export default Home;
