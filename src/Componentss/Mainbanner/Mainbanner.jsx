import React from "react";
import bannerimage from "../../Assets/homepage-main.png";
import "../Mainbanner/Mainbanner.css";

const Mainbanner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="content">
          <h1>
            Shop the new <span>Signature Collection</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            neque asperiores similique laboriosam! Voluptatum nihil adipisci
            unde tempore voluptate iusto laborum ex ipsam, ipsum distinctio
            repellendus recusandae, error deserunt dicta!
          </p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="banner-image">
        <img src={bannerimage} alt="" />
      </div>
    </div>
  );
};

export default Mainbanner;
