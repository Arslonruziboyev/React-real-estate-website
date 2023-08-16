import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={logo} alt="Logo png" width={100} />

        <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
          <a href="#">Residencies</a>
          <a href="#">Our Value</a>
          <a href="#">Contact us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="#">Contact</a>
          </button>
        </div>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
