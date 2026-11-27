import React from "react";
import "./PlantConnection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const PlantConnection = () => {
  return (
    <section className="plant-connection" id="PlantConnection">
      <div className="plant-box">
        <div className="plant-container">

          {/* LEFT CONTENT */}
          <div className="plant-hero">
            <div className="plant-eyebrow">
              THE GAP WE BRIDGE
            </div>

            <h1>
              Different plants. Different
              <br />
              systems.
              <br />
              <span>One operational picture.</span>
            </h1>

            <p>
              Production data lives in machines. Energy data sits in meters.
              Quality and maintenance updates live in separate systems.
              Serkayon connects those signals into one view that operators
              and leadership can use.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="plant-image-box right-image-box">
            {/* <div className="image-label image-label2">
              <span className="label-dot label-dot2"></span>
              CONNECTED PLANT INTELLIGENCE
            </div> */}

            <div className="mobile-monitor-animation">

              <img
                src="/Images/girl.png"
                alt="Woman monitoring industrial plants"
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
                    d="
                      M65 25 H355
                      A45 45 0 0 1 400 70
                      V215
                      A45 45 0 0 1 355 260
                      H125 L8 320 L55 260
                      A45 45 0 0 1 20 215
                      V70
                      A45 45 0 0 1 65 25 Z
                    "
                    fill="white"
                    stroke="#231f20"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="notification-bubble-content">
                  <div className="notification-stack">

                    <div className="plant-notification notification-one">
                      <div className="notification-icon production-icon">
                        <span>▥</span>
                      </div>

                      <div className="notification-details">
                        <small>TODAY'S PRODUCTION</small>
                        <strong>
                          On track <span>+4.8%</span>
                        </strong>
                      </div>

                      <div className="notification-check">✓</div>
                    </div>

                    <div className="plant-notification notification-two">
                      <div className="notification-icon energy-icon">
                        <span>
                          <FontAwesomeIcon icon={faBolt} />
                        </span>
                      </div>

                      <div className="notification-details">
                        <small>ENERGY CONSUMPTION</small>
                        <strong>12,480 kWh</strong>
                        <b>8.2% saved vs baseline</b>
                      </div>
                    </div>

                    <div className="plant-notification notification-three">
                      <div className="notification-icon alert-icon">
                        <span>♧</span>
                      </div>

                      <div className="notification-details">
                        <small>MACHINE ALERT</small>
                        <strong>Press line 02</strong>
                        <b className="alert-text">
                          Inspection recommended
                        </b>
                      </div>

                      <div className="alert-dot"></div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlantConnection;
