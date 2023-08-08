import React from "react";
import ContctImg from "../../assets/contact.jpg";
import "./Contact.css";

function Contact() {
  return (
    <section className="c-wrapper">
      <div className="flexCenter paddings innerWidth c-container">
        {/* Left Side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">{/* First Row */}</div>
        </div>
        {/* Right Side */}
        <div className="c-right">
          <div className="image-container">
            <img src={ContctImg} alt="Contact Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
