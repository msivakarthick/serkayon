import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faLaptopCode,
  faIndustry,
  faMicrochip,
  faGlobe,
  faUsers,
  faArrowRight,
  faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";

import "./Partnerships.css";

function Partnerships() {
     const [showPopup, setShowPopup] = useState(false);
  return (
    <section className="partnerships-section">

      <div className="partnerships-container">

        {/* Left Content */}
        <div className="partnerships-content">

          <p className="partnerships-label">
            PARTNERSHIPS
          </p>

          <h1>
            Building industrial
            capabilities through
            <span> partnerships</span>
          </h1>

          <p>
            No single company can solve every industrial
            challenge alone.
          </p>

          <p>
            We believe strong partnerships can accelerate the
            adoption of practical industrial intelligence.
          </p>

          <p>
            Serkayon works with organisations looking to extend
            their engineering capabilities through industrial
            connectivity, data platforms, AI-powered monitoring
            and custom technology development.
          </p>

          <button
  className="partnerships-button"
  onClick={() => setShowPopup(true)}
>
  Become a Technology Partner
  <FontAwesomeIcon icon={faArrowRight} />
</button>

        </div>

        {/* Right Partnership Diagram */}
        <div className="partnerships-visual">

          <div className="partnership-orbit"></div>

          {/* Top Card */}
          <div className="partner-card partner-oem">
            <FontAwesomeIcon icon={faScrewdriverWrench} />
            <h3>OEMs &amp;<br />Machine Manufacturers</h3>
            <p>Embed intelligence and connectivity in machines</p>
          </div>
          <FontAwesomeIcon icon={faArrowRight}className="mobile-partner-arrow" />

          {/* Left Top Card */}
          <div className="partner-card partner-system">
            <FontAwesomeIcon icon={faLaptopCode} />
            <h3>System Integrators<br />&amp; Automation Companies</h3>
            <p>Extend solution capabilities and project delivery</p>
          </div>
          <FontAwesomeIcon icon={faArrowRight}className="mobile-partner-arrow" />
          {/* Right Top Card */}
          <div className="partner-card partner-sensor">
            <FontAwesomeIcon icon={faMicrochip} />
            <h3>Technology &amp;<br />Sensor Manufacturers</h3>
            <p>Integrate and scale industry-ready technologies</p>
          </div>
          <FontAwesomeIcon icon={faArrowRight}className="mobile-partner-arrow" />
          {/* Left Bottom Card */}
          <div className="partner-card partner-consultants">
            <FontAwesomeIcon icon={faUsers} />
            <h3>Industrial Consultants &amp;<br />Engineering Companies</h3>
            <p>Co-create and deliver fit-for-purpose solutions</p>
          </div>
          <FontAwesomeIcon icon={faArrowRight}className="mobile-partner-arrow" />
          {/* Right Bottom Card */}
          <div className="partner-card partner-global">
            <FontAwesomeIcon icon={faGlobe} />
            <h3>International<br />Technology Partners</h3>
            <p>Collaborate on solutions, markets and deployments</p>
          </div>

          {/* Center Circle */}
          <div className="partnership-center">
            <FontAwesomeIcon icon={faHandshake} />
            <h2>Serkayon</h2>
            <p>Technology<br />Partnerships</p>
          </div>

        </div>

      </div>

      {/* Bottom CTA */}
      <div className="partnerships-cta" id="contact">

        <h2>Have an industrial challenge?</h2>

        <h3>Let's engineer a better way forward.</h3>

        <p>
          Whether you are looking to connect existing machines,
          improve operational visibility, implement AI-based
          monitoring or build a technology partnership, let's
          discuss what is possible.
        </p>

      </div>
    {showPopup && (
  <div className="popup-overlay" onClick={() => setShowPopup(false)}>
    <div className="popup-box" onClick={(e) => e.stopPropagation()}>

      <button
        className="popup-close"
        onClick={() => setShowPopup(false)}
      >
        &times;
      </button>

      <h2>Become a Technology Partner</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitted successfully!");
          setShowPopup(false);
        }}
      >
        <input type="text" placeholder="OEM / Company Name" required />

        <input type="email" placeholder="Email ID" required />

        <button type="submit" className="popup-submit">
          Submit
        </button>
      </form>

    </div>
  </div>
)}
    </section>
  );
}

export default Partnerships;
