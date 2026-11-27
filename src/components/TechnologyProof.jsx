
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faBoxesStacked,
  faGaugeHigh,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";

import "./TechnologyProof.css";

const industries = [
  {
    icon: faIndustry,
    title: "Manufacturing",
    description: "Machine and production visibility",
  },
  {
    icon: faBoxesStacked,
    title: "Food & poultry",
    description: "Production and process monitoring",
  },
  {
    icon: faGaugeHigh,
    title: "Industrial inspection",
    description: "Machine vision and quality applications",
  },
  {
    icon: faAtom,
    title: "Bioprocess",
    description: "Process data and equipment intelligence",
  },
];

const partners = [
  {
    name: "CLIENT LOGO 01",
    image: "./Images/client-logo-1.webp",
  },
  {
    name: "CLIENT LOGO 02",
    image: "./Images/client-logo-2.webp",
  },
  {
    name: "CLIENT LOGO 03",
    image: "./Images/client-logo-3.webp",
  },
  {
    name: "CLIENT LOGO 04",
    image: "./Images/client-logo-4.png",
  },
  {
    name: "CLIENT LOGO 05",
    image: "./Images/client-logo-5.png",
  },
  {
    name: "CLIENT LOGO 06",
    image: "./Images/client-logo-6.webp",
  },
];

const TechnologyProof = () => {
  return (
    <section className="technology-proof" id="TechnologyProof">

      {/* Header */}
      <div className="tp-header">
        <div className="tp-heading">

          <div className="tp-eyebrow">
            BUILT IN REAL OPERATING ENVIRONMENTS
          </div>

          <h1>
            Technology is proven
            <br />
            on the <span>factory floor.</span>
          </h1>

        </div>

        <p className="tp-description">
          Serkavon's work spans industrial automation, machine
          connectivity, monitoring and AI-enabled applications.
          Add approved customer and technology partner logos here
          as the portfolio is cleared for public use.
        </p>
      </div>

      {/* Industry Cards */}
      <div className="tp-industries">

        {industries.map((item, index) => (
          <div className="tp-card" key={index}>

            <div className="tp-icon">
              <FontAwesomeIcon icon={item.icon} />
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}

      </div>

      {/* Customer & Technology Partners */}
      <div className="tp-partners">

        <h4>CUSTOMER & TECHNOLOGY PARTNERS</h4>

        <div className="tp-partner-slider">

          <div className="tp-partner-track">

            {[0, 1].map((group) => (
              <div
                className="tp-partner-group"
                key={group}
                aria-hidden={group === 1}
              >

                {partners.map((partner, index) => (
                  <div className="tp-partner-box" key={index}>

                    <img
                      src={partner.image}
                      alt={partner.name}
                    />

                  </div>
                ))}

              </div>
            ))}

          </div>

        </div>

        {/* <p className="tp-note">
          Replace these placeholders with customer marks approved
          for publication. Do not display a company logo without permission.
        </p> */}

      </div>

    </section>
  );
};

export default TechnologyProof;
