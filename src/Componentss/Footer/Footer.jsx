import React from "react";
import "../Footer/Footer.css";
import { CiInstagram } from "react-icons/ci";
import { LuFacebook } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-content">
        <div>
          <h2>Account</h2>
          <ul className="footer-category-names">
            <li>
              <a className="list-items" href="#signin">
                Sign In
              </a>
            </li>
            <li>
              <a className="list-items" href="#register">
                Register
              </a>
            </li>
            <li>
              <a className="list-items" href="#orderstatus">
                Order Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>About Us</h2>
          <ul className="footer-category-names">
            <li>
              <a className="list-items" href="#story">
                Our Story
              </a>
            </li>
            <li>
              <a className="list-items" href="#careers">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Help</h2>
          <ul className="footer-category-names">
            <li>
              <a className="list-items" href="#login">
                Contact Us
              </a>
            </li>
            <li>
              <a className="list-items" href="#register">
                Order status
              </a>
            </li>
            <li>
              <a className="list-items" href="#profile">
                Return
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Follow Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            neque asperiores similique laboriosam! Voluptatum nihil adipisci
          </p>
          <div className="icons">
            <CiInstagram />
            <LuFacebook />
            <CiTwitter />
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div className="company-name">
          <h2> VENIA </h2>
        </div>
        <div className="company-name">
          <h5> @Company Nme Address Ave, City Name, State Zip </h5>
        </div>
        <div className="term-condition">
          <ul>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
