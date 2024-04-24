import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="public/Garden_birthday_party_decoration_by_aicaevents_TPG1closeup.jpg" alt="restaurant" />
      <div className="item">
        <h3>EVENT      PLANNER</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>
            We believe that it is all about the BIG DREAMS and the samll
            details!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;