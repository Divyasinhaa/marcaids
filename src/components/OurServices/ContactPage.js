import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactPage.css";
import logoo_main from "../../assets/logoo_main.png";
import OurServices from "./OurServices";
import CarouselComponent from "./CarouselComponent";
import Footer from "../Footer/Footer";




 const ContactPage = () => {


  return (
     
    <>
    <CarouselComponent/>
   <OurServices/>
    <div className="contact-page container-fluid">
      <nav class="navbar" style={{boxShadow: 'none' ,maxWidth:'1200px'}}>
  <div class="container-n" >
    <ul className="navbar-nav d-flex flex-row ms-auto">
          <li className="nav-item nav-item-custom ms-5">
            <a className="nav-link active" aria-current="page" href="#">PROJECTS</a>
          </li>       
          <li className="nav-item nav-item-custom ms-5">
            <a className="nav-link active" aria-current="page" href="#">CONTACT</a>
          </li>
        </ul>
  </div>
  
</nav>
      <div className="row justify-content-center">
        <div className="col-md-4 contact-info">
          <h2 className="text-center">CONTACT</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="contact-details">
            <p>
              <h6>Address</h6> Khmelnytskyi, Beregova str., 44
            </p>
            <p>
              <h6>Phone</h6> +380 (99) 111-22-33
            </p>
            <p>
              <h6>E-mail</h6> tyra@gmail.com
            </p>
          </div>
        </div>
        <div className="col-md-4 contact-form">
          <h2 className="text-center">CONTACT FORM</h2>


          <form action="https://formspree.io/f/xpwawaod"
            method="POST"
            className="contact-inputs">

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                autoComplete="off"
                required
              />
              <span></span>
              <label htmlFor="name">Your name</label>
            </div>

            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                autoComplete="off"
                required
              />
              <span></span>
              <label htmlFor="phone">Your phone</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                autoComplete="off"
                required
              />
              <span></span>
              <label htmlFor="email">Your email</label>
            </div>

            <div className="btnCont">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                autoComplete="off"
                required
              >
                Select your service
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" >
                    Performance Marketing
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" >
                    Web Design and Development
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" >
                    Branding
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" >
                    Social Media Management
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" >
                    Content Creator
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" >
                    Consultant
                  </a>
                </li>
              </ul>
            </div>

            <div className="form-group">
              <textarea
                className="form-control custom-textarea"
                id="message"
                name="message"
                autoComplete="off"
                required
              />
              <span></span>
              <label htmlFor="message">Message</label>
            </div>
            <div className="btnCont">
              <button type="submit" class="btn btn-dark" value="send" >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;
