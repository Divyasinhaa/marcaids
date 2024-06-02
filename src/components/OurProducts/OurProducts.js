import React from "react";
import "./OurProducts.css";
import productImage1 from "../../assets/Product1.jpg";
import productImage2 from "../../assets/Product2.jpg";
import productImage3 from "../../assets/Product3.jpg";
import productImage4 from "../../assets/Product4.jpg";
import productImage5 from "../../assets/Product5.jpg";

const OurProducts = () => {
  return (
    <>
    <div style={{marginTop:"20px",marginBottom:"10px"}}>

     <h4 style={{textAlign:"left" ,marginLeft:"10px"}}>Our Clients Work &gt;&gt;&gt; </h4>
    </div>
      <div className="products">
        <div className="card productCard">
          <img
            className="card-img-top"
            src={productImage1}
            alt="Product 1"
          />
        </div>
        <div className="card productCard card_responsive" >
          <img
            className="card-img-top"
            src={productImage2}
            alt="Product 2"
          />
        </div>
        <div className="card productCard">
          <img
            className="card-img-top"
            src={productImage3}
            alt="Product 3"
          />
        </div>
        <div className="card productCard card_responsive">
          <img
            className="card-img-top"
            src={productImage4}
            alt="Product 4"
          />
        </div>
        <div className="card productCard card_responsive">
          <img
            className="card-img-top"
            src={productImage5}
            alt="Product 5"
          />
        </div>
      </div>
    </>
  );
};

export default OurProducts;
