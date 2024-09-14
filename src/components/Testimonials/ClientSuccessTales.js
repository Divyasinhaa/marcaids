import React from 'react';
import './ClientSuccessTales.css'; 
import blog from '../../assets/blog.jpg';
import logoo_main from "../../assets/logoo_main.png";
import Footer from "../Footer/Footer";

const ClientSuccessTales = () => {
  return (
    <>
     <div className="container-outer">
      <div className="header-content">
        <div className="logo-1">
        {/* <img src={logoo_main} alt="" width="230" height="150"/> */}
        </div>
        <div className='heading-content'>
        CLIENTS SUCCESS TALES
        </div>
      </div>
      <div className="content-image">
      <div className="image-container">
        <img src={blog} alt="Brand Colours Document" />
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ClientSuccessTales;
