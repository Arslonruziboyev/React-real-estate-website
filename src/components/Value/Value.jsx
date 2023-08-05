import React from "react";
import "./Value.css";
import valuePng from "../../assets/value.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

function Value() {
  return (
    <section className="v-wrapper">
      <div className="flexCenter paddings innerWidth v-container">
        {/* Left Side */}
        <div className="v-left">
          <div className="image-container">
            <img src={valuePng} alt="Valus PNG" />
          </div>
        </div>
        {/* Right Side */}
        <div className="flexColStart v-right">
          <span>Our Value</span>
          <span>Value We Give To You</span>
          <span>
            We always ready to help by providijng the best services for you.{" "}
            <br />
            We beleive a good blace to live can make your life better
          </span>
        </div>
      </div>
    </section>
  );
}

export default Value;
