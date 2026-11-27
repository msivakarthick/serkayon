
import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-section" id="Footer">

      {/* CTA Section */}

      <div className="footer-cta">

        <div className="footer-cta-content">

          <div className="footer-eyebrow">
            START WITH ONE PLANT
          </div>

          <h1 className="footer-heading">
            Make your industrial data
            <br />
            <span>work harder.</span>
          </h1>

          <p className="footer-description">
            Tell us about your plant, equipment or a decision you want
            to make sooner.
            <br />
            We'll help identify a practical first use case.
          </p>

        </div>

        <div className="footer-circle"></div>

      </div>


      {/* Footer Main */}

      <div className="footer-main">

        <div className="footer-container">

          {/* Brand */}

          <div className="footer-brand">

            <img
              src="/Images/serkayon_logo.jpg"
              className="footer-logo-image"
              alt="Serkayon Logo"
            />

            <p>
              Industrial intelligence.
              <br />
              From sensor to boardroom.
            </p>

          </div>


          {/* Navigation */}

          <div className="footer-nav-column">

            <a href="#PlantNetworkVisual">Home</a>
            <a href="#ScrollCards">Industries</a>
            <a href="#About">About</a>

          </div>


          {/* Ecosystem */}

          <div className="footer-nav-column">

            <a href="#PlatformPreview">Platform</a>
            <a href="#TechnologyProof">Partners</a>

          </div>


          {/* Contact */}

          <div className="footer-contact">

            <h4>START A CONVERSATION</h4>

            <a href="mailto:support@serkayon.com">
              support@serkayon.com
            </a>

          </div>

        </div>


        {/* Bottom Footer */}

        <div className="footer-bottom">

          <p className="rights">
  © {new Date().getFullYear()} Serkayon Industrial Intelligence Pvt. Ltd. All Rights Reserved.
</p>

          {/* <a href="#top" className="footer-back-top" aria-label="Back to top">
            Back to Top<FontAwesomeIcon icon={faArrowUp} />
          </a> */}

        </div>

      </div>

    </footer>
  );
};

export default Footer;
