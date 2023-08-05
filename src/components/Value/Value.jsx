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
      </div>
    </section>
  );
}

export default Value;
