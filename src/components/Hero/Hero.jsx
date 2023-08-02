import React from "react";
import HeroImg from "../../assets/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="flexCenter paddings innerWidth hero-container">
          {/* Left Side of Header */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="circle-title" />
              <h1>
                Discover <br /> Most Suitable <br /> Proberty
              </h1>
            </div>
            <div className="flexColStart hero-descp">
              <span>
                Find a variety of properties that suit you very easilty
              </span>
              <span>
                Forget all difficulties in finding a residence for you
              </span>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Search</button>
            </div>
            <div className="flexCenter stats">
              <div className="flexColStart">
                <span>
                  <CounterUp start={8000} end={9000} duration={4} />
                  <span>+</span>
                </span>
              </div>
            </div>
          </div>
          {/* Rught Side of Header*/}
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src={HeroImg} alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
