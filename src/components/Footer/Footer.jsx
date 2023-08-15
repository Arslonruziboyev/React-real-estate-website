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
        {/* Right Side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
