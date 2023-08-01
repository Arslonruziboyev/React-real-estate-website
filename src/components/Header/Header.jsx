import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container">
        <img src={logo} alt="Logo png" width={100} />

        <div className="h-menu">
          <a href="#">Residencies</a>
          <a href="#">Our Value</a>
          <a href="#">Contact us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="#">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
