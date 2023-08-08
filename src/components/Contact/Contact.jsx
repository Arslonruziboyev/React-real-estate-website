import React from "react";
import ContctImg from "../../assets/contact.jpg";
import "./Contact.css";

function Contact() {
  return (
    <section className="c-wrapper">
      <div className="flexCenter paddings innerWidth c-container">
        {/* Left Side */}
        <div className="c-left">Left</div>
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
