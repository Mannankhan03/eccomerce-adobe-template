import React, { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="container">
      <div className="logo-name">
        <h3>VENIA</h3>
      </div>

      <button
        className="toggle-button"
        onClick={handleMenuItemClick}
        onClick={toggleMenu}
      >
        {MenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`sub-category-list ${MenuOpen ? "active" : ""}`}>
        <li className="menu-items" onClick={handleMenuItemClick}>
          Home
        </li>
        <li className="menu-items" onClick={handleMenuItemClick}>
          Men
        </li>
        <li className="menu-items" onClick={handleMenuItemClick}>
          Women
        </li>
        <li className="menu-items" onClick={handleMenuItemClick}>
          Electronics
        </li>
        <li className="menu-items" onClick={handleMenuItemClick}>
          Jewelry
        </li>
      </ul>

      <div className="shopping-bag-cart">
        <FaBagShopping />
      </div>
    </div>
  );
};

export default Navbar;
