
import React from "react";
import "./Casestudies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faFlask,
  faGear,
  faLeaf
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "PHARMA & BIOTECH",
      icon: faFlask,
      path: "/case-study/column-integrity",
    },
    {
      title: "MACHINE TOOLS & MFG",
      icon: faGear,
      path: "/case-study/machine-tools",
    },
    {
      title: "POULTRY & FEED MILLS",
      icon: faLeaf,
      path: "/case-study/poultry-feed-mills",
    },
  ];

  return (
    <section className="case-section" id="case-studies">
      <div className="case-layout">

        {/* LEFT SIDE */}
        <div className="case-left">

          {/* <div className="case-heading">
            <h2>CASE STUDY</h2>
          </div> */}

          <div className="case-intro">
            <div className="case-intro-title">
              CASE STUDY
            </div>

            <p>
              Explore real-world industrial challenges,
              intelligent solutions and measurable outcomes.
              Discover how connected technologies help
              industries improve performance and efficiency.
            </p>
          </div>

        </div>
        {/* RIGHT SIDE */}
<div className="case-right">

  {categories.map((item, index) => (
    <div
      className={`case-item case-item-${index + 1}`}
      key={item.title}
    >

      <div className="case-item-icon">
        <FontAwesomeIcon icon={item.icon} />
      </div>

      <div className="case-item-content">
        <h3>{item.title}</h3>

        <button
          className="case-action"
          onClick={() => {
  sessionStorage.setItem("homeScrollPosition", window.scrollY);
  navigate(item.path);
}}
        >
          Case Studies<FontAwesomeIcon icon={faArrowUp} className="arrow"/>
        </button>
      </div>

    </div>
  ))}

</div>
      </div>
    </section>
  );
};

export default CaseStudies;
