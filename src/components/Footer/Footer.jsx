import React from "react";
import Logo from "../../assets/logo2.png";
import "./Footer.css";
function Footer() {
  return (
    <section className="f-wrapper">
      <div className="flexCenter paddings innerWidth f-container">
        {/* Left Side */}

        <div className="flexColStart g-left">
          <img src={Logo} alt="Logo" width={120} />

          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div className="flexColStart f-right"></div>
      </div>
    </section>
  );
}

export default Footer;
