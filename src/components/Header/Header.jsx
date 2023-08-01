import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container">
        <img src={logo} alt="Logo png" width={100} />

        <div className="h-menu">
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
    </section>
  );
};

export default Header;
