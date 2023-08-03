import React from "react";
import { ImageData } from "./data";
import "./Companies.css";

function Companies() {
  return (
    <section className="c-wrapper">
      <div className="flexCenter paddings innerWidth c-container">
        {ImageData.map((props, id) => (
          <img src={props.image} alt={props.title} key={id} />
        ))}
      </div>
    </section>
  );
}

export default Companies;
