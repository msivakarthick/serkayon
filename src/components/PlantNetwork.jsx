import "./PlantNetwork.css";
import { useState } from "react";
function PlantNetwork() {
  const [popupType, setPopupType] = useState("");
  return (
    <section className="plant-network-section">

      {/* LEFT SIDE - CONTENT */}
      <div className="plant-network-content">

        <h1 className="plant-network-label">
          Partners in making industries{" "}
          <span className="changing-word">
            <span>Smarter</span>
            <span className="connect">Connected</span>
            <span className="efficient">Efficient</span>
          </span>
        </h1>

        <p className="plant-network-description">
          Serkayon partners with System Integrators and OEMs to extend
          their engineering capabilities with industrial connectivity,
          automation and intelligent monitoring technologies.

          <br /><br />

          For plant owners, we deliver practical solutions that connect
          existing machines, improve operational visibility and turn
          industrial data into actionable insights.
        </p>

        {/* CTA BUTTONS */}
        <div className="cta">
  <button className="btn" onClick={() => setPopupType("partner")}>
    I am a system integrator or OEM
  </button>

  <button className="btn alt" onClick={() => setPopupType("plant")}>
    I run a plant or a group of plants
  </button>
</div>

      </div>

      {/* RIGHT SIDE - VIDEO + NOTIFICATIONS */}
      <div className="plant-network-visual">

        <div className="plant-network-video">
          <video autoPlay loop muted playsInline>
            <source
              src="/Videos/network4.mp4"
              type="video/mp4"
            />
            Your browser does not support video playback.
          </video>
        </div>

        {/* LADY + MESSAGE BUBBLE */}
        <div className="mobile-monitor-animation">

          <img
            src="/Images/lady2.png"
            alt="Person monitoring industrial plants on a mobile phone"
            className="lady-mobile-image"
          />

          <div className="plant-notification-popup">

            <svg
              className="notification-bubble-svg"
              viewBox="0 0 420 340"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M65 25 H355
                A45 45 0 0 1 400 70
                V215
                A45 45 0 0 1 355 260
                H125 L8 320 L55 260
                A45 45 0 0 1 20 215
                V70
                A45 45 0 0 1 65 25 Z"
                fill="white"
                stroke="#231f20"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>

            <div className="notification-bubble-content">

              <div className="notification-header">
                <span>Plant Monitoring</span>
                <span className="notification-live">LIVE</span>
              </div>

              <div className="plant-status plant-good plant-one">
                <span className="status-indicator" />
                <div className="plant-status-text">
                  <strong>Plant 1</strong>
                  <small>Normal Temperature</small>
                </div>
              </div>

              <div className="plant-status plant-good plant-two">
                <span className="status-indicator" />
                <div className="plant-status-text">
                  <strong>Plant 2</strong>
                  <small>Using High Energy</small>
                </div>
              </div>

              <div className="plant-status plant-issue plant-three">
                <span className="status-indicator" />
                <div className="plant-status-text">
                  <strong>Plant 3</strong>
                  <small>Production Stopped</small>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {popupType && (
  <div className="popup-overlay" onClick={() => setPopupType("")}>
    <div className="popup-box" onClick={(e) => e.stopPropagation()}>

      <button className="popup-close" onClick={() => setPopupType("")}>
        &times;
      </button>

      <h2>
        {popupType === "partner"
          ? "Become a Technology Partner"
          : "Connect Your Plant"}
      </h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        alert("Submitted successfully!");
        setPopupType("");
      }}>

        <input
          type="text"
          placeholder={popupType === "partner" ? "OEM Name" : "Company Name"}
          required
        />

        <input
          type="email"
          placeholder={popupType === "partner" ? "OEM's Email ID" : "Company Email ID"}
          required
        />

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

export default PlantNetwork;