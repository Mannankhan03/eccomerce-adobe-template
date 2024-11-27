import React from "react";
import bannerimage3 from "../../Assets/adventureimage.png";
import "../Locatorimage/Locator.css";
const Locatorimage = () => {
  return (
    <div className="locator-adventures">
      <div className="adventure-image">
        <img src={bannerimage3} alt="" />
      </div>
      <div className="adventure-content-buttons">
        <div className="adventure-content-deatils">
          <h1>
            conquer your <span> next adventure</span>
          </h1>
          <p> Lorem Ipsum Dolor Temper </p>
          <button>Shop devices</button>
        </div>
      </div>
    </div>
  );
};

export default Locatorimage;
