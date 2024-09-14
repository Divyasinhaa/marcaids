import React from "react";
import "./Testimonials.css";
import {Carousel,Card} from 'react-bootstrap';

// Yaha 6 testimonial photo import hogi
import space from "../../assets/space.jpeg";
import mac from "../../assets/mac.jpeg";
import rv from "../../assets/rv.jpeg";
import annu from "../../assets/annu.jpeg";
import rohan from "../../assets/rohan.jpeg";
import ay from "../../assets/aay.jpg";

const Testimonials = () => {
  return (
    <>

      <div className="background-container">
        <div className="semi-circle"></div>

        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div className="content">
                <blockquote>“</blockquote>
                <p>Clients Testimonials</p>
              </div>
            </div>
            <div class="col-md-2"></div>

            <div class="col-md-5 ">



            <Carousel>
            <Carousel.Item>
            <Card className="testimonial-cards">
            <div className="testimonial-container">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <p>
                      Partnering with Marcaids has significantly boosted our
                      interior design business. Their lead generation expertise
                      and targeted campaigns have driven increased website
                      visits, resulting in tangible growth. Their transparency
                      and communication make them invaluable partners. Highly
                      recommended
                    </p>
                  </div>
                  <div className="testimonial-client">
                    <p className="client-name">Sandeep Soni</p>
                    <p className="client-title">CEO, The Space Crafters</p>
                  </div>
                </div>
                <img
                  src={space}
                  alt="The Space Crafters Logo"
                  className="client-logo"
                />
              </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
            <Card className="testimonial-cards">
            <div className="testimonial-container">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <p>
                    "Since collaborating with Marcaids, Mac biosciences has undergone a complete digital makeover and 
                     witnessed an increase in sales. They are a great partner in helping us not only establish and optimize
                     our primary goals but also react to practical difficulties and novel opportunities."
                    </p>
                  </div>
                  <div className="testimonial-client">
                    <p className="client-name">Monika Sharma</p>
                    <p className="client-title">Mac Biosciences</p>
                  </div>
                </div>
                <img
                  src={mac}
                  alt="The Space Crafters Logo"
                  className="client-logo"
                />
              </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
            <Card className="testimonial-cards">
            <div className="testimonial-container">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <p>
                    "Hey fellow design aficionados! Ready to turbocharge your online presence? Meet Marcaids.
                     Their savvy lead generation tactics and killer campaigns have skyrocketed our website traffic. Don't let your competitors
                     steal the spotlight. Reach out to Marcaids and watch your business thrive."
                    </p>
                  </div>
                  <div className="testimonial-client">
                    <p className="client-name">Rv Dezigns</p>
                    <p className="client-title">Rv Dezigns</p>
                  </div>
                </div>
                <img
                  src={rv}
                  alt="The Space Crafters Logo"
                  className="client-logo"
                />
              </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
            <Card className="testimonial-cards">
            <div className="testimonial-container">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <p>
                    "Thank you Chirag Yadav for setting up my social media handle and for creating 
                    my website. It had helped me to reach my objective and I will recommend your service
                    to my colleagues and to other business also. Best wishes for a bright future ahead, Chirag."
                    </p>
                  </div>
                  <div className="testimonial-client">
                    <p className="client-name">Annu Yadav</p>
                    <p className="client-title">Data Analyst at Global Infrastructure Hub</p>
                  </div>
                </div>
                <img
                  src={annu}
                  alt="The Space Crafters Logo"
                  className="client-logo"
                />
              </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
            <Card className="testimonial-cards">
            <div className="testimonial-container">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <p>
                    "You Seldom come across a person like Chirag in your life.
                     An honest and hard working individual and brings a lot of fresh perspective
                     to the table. His lead generating strategies were so unique and out of 
                     the box that we immediately knew that we were in good hands."
                    </p>
                  </div>
                  <div className="testimonial-client">
                    <p className="client-name">Rohan Khanna</p>
                    <p className="client-title">Senior Consultant, Data Management at Fresh Gravity</p>
                  </div>
                </div>
                <img
                  src={rohan}
                  alt="The Space Crafters Logo"
                  className="client-logo"
                />
              </div>
    </Card>
    </Carousel.Item>

    <Carousel.Item>
            <Card className="testimonial-cards">
            <div className="testimonial-container">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <p>
                    Thanks to Marcaids, our software company has seen remarkable growth.
                    Their tailored strategies and creative campaigns have boosted our visibility and sales. 
                    If you're ready to elevate your business, reach out to them today - you won't be disappointed!"
                    </p>
                  </div>
                  <div className="testimonial-client">
                    <p className="client-name">Aayush Kakkar</p>
                    <p className="client-title">Founder, Innovi Soft</p>
                  </div>
                </div>
                <img
                  src={ay}
                  alt="The Space Crafters Logo"
                  className="client-logo"
                />
              </div>
    </Card>
    </Carousel.Item>
           </Carousel>


              {/* <div className="testimonial-container">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <p>
                      Partnering with Marcaids has significantly boosted our
                      interior design business. Their lead generation expertise
                      and targeted campaigns have driven increased website
                      visits, resulting in tangible growth. Their transparency
                      and communication make them invaluable partners. Highly
                      recommended
                    </p>
                  </div>
                  <div className="testimonial-client">
                    <p className="client-name">Sandeep Soni</p>
                    <p className="client-title">CEO, The Space Crafters</p>
                  </div>
                </div>
                <img
                  src={space}
                  alt="The Space Crafters Logo"
                  className="client-logo"
                />
              </div> */}


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
