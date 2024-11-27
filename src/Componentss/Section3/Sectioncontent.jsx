import React from "react";
import bannerimage2 from "../../Assets/section3image.png";
import "../Section3/Section3.css";

const Sectioncontent = () => {
  return (
    <div className="section3-banner-container">
      <div className="section3-banner">
        <div className="section3-content">
          <h1>
            Taking off in the new <span>Signature Legging</span>
          </h1>
          <h4>Lorem ipsum dolor Temper</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            neque asperiores similique laboriosam! Voluptatum nihil adipisci
          </p>
          <div className="section3-buttons">
            <button className="shopcollection">Shop Collection</button>
            <button className="shopnow">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="section-banner-image">
        <img src={bannerimage2} alt="" />
      </div>
    </div>
  );
};

export default Sectioncontent;
