import React from "react";
import ContctImg from "../../assets/contact.jpg";
import { MdCall } from "react-icons/md";
import { BsFillChatFill } from "react-icons/bs";
import { HiChat } from "react-icons/hi";
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

          <div className="flexColStart contactModes">
            {/* First Row */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Call</span>
                    <span>010 4888 7450</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
