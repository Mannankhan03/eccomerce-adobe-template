import React from "react";
import Mainbanner from "../Mainbanner/Mainbanner";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import Section3 from "../Section3/Sectioncontent";
import Locatorimage from "../Locatorimage/Locatorimage";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Mainbanner />
      <Products />
      <Section3 />
      <Locatorimage />
      <Footer />
    </div>
  );
};

export default Homepage;
