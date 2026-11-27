
import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="about-section" id="About">

      <div className="about-container">

        {/* Left Content */}
        <div className="about-left">

          <div className="about-eyebrow">
            ABOUT SERKAYON
          </div>

          <h1 className="about-heading">
            Industrial intelligence
            <br />
            built around <span>reality.</span>
          </h1>

        </div>

        {/* Right Content */}
        <div className="about-right">

          <p className="about-description">
            Industrial environments are complex. Machines speak
            different protocols, production processes change from
            plant to plant, and important information is often
            spread across disconnected systems.
          </p>

          <p className="about-description">
            Serkayon brings industrial automation, connected data
            and intelligence into one ecosystem—designed to work
            with the equipment and people already in place.
          </p>

          {/* Divider */}
          <div className="about-divider"></div>

          {/* Features */}
          <div className="about-features">

            <div className="about-feature">
              <span className="about-check"><FontAwesomeIcon icon={faCheck}/></span>
              <span>Connect existing assets</span>
            </div>

            <div className="about-feature">
              <span className="about-check"><FontAwesomeIcon icon={faCheck}/></span>
              <span>Contextualise operational data</span>
            </div>

            <div className="about-feature">
              <span className="about-check"><FontAwesomeIcon icon={faCheck}/></span>
              <span>Scale across plants</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
