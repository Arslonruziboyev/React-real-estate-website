import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={logo} alt="Logo png" width={100} />

        <div className="flexCenter h-menu">
          <a href="#">Residencies</a>
          <a href="#">Our Value</a>
          <a href="#">Contact us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="#">Contact</a>
          </button>
        </div>
      </div>
      <div className="menu-icon">
        <BiMenuAltRight size={30} />
      </div>
    </section>
  );
};

export default Header;
