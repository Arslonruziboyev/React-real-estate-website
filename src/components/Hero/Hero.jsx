import React from "react";
import HeroImg from "../../assets/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import CounterUp from "react-countup";
import { motion } from "framer-motion";
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
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                Discover <br /> Most Suitable <br /> Proberty
              </motion.h1>
            </div>
            <div className="flexColStart hero-descp">
              <span className="secondaryText">
                Find a variety of properties that suit you very easilty
              </span>
              <span className="secondaryText">
                Forget all difficulties in finding a residence for you
              </span>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Search</button>
            </div>
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CounterUp start={8000} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CounterUp start={1950} end={2000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customer</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CounterUp end={28} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Awards Winning</span>
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
