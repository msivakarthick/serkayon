
import React from "react";
import "./ScrollCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faBolt, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cardData = [
  {
    title: "Bio-Pm",
    product: "Serkayon Product Suite",
    work: "Bio-Predictive Maintenance",
    para: "Improve productivity with real-time production intelligence, machine monitoring, and AI-driven operational insights.",
    points: [
      "Live production dashboards",
      "OEE & downtime analytics",
      "Machine performance monitoring",
      "AI-powered operational insights"
    ]
  },
  {
    title: "Poultry ERP",
    product: "Serkayon Product Suite",
    work: "Feed Mill ERP",
    para: "Digitize feed mill operations with complete production, inventory, quality, and traceability management.",
    points: [
      "End-to-end batch traceability",
      "Inventory & raw material management",
      "Production planning & execution",
      "Business intelligence dashboards"
    ]
  },
  {
    title: "Bio-CIG",
    product: "Serkayon Product Suite",
    work: "Column Integrity Guard",
    para: "Continuously monitor packed-bed bioreactor column health to maximize process reliability and product quality.",
    points: [
      "Column integrity monitoring",
      "Real-time process analytics",
      "Predictive maintenance alerts",
      "Compliance-ready reporting"
    ]
  },
  {
    title: "Machine Tools",
    product: "Serkayon Product Suite",
    work: "Diameter Quality Inspection",
    para: "Real-time diameter inspection platform with automated Cp/Cpk analysis, traceability, historian dashboards, and professional PDF reporting.",
    points: [
      "Real-time diameter inspection monitoring",
      "Automated Cp/Cpk capability analysis",
      "Measurement history & batch traceability",
      "Professional PDF & CSV inspection reports"
    ]
  },
  {
    title: "EM",
    product: "Serkayon Product Suite",
    work: "Energy Monitoring",
    para: "Gain complete visibility into plant-wide energy consumption to reduce costs, improve efficiency, and support sustainability initiatives.",
    points: [
      "Real-time utility monitoring",
      "Machine-wise energy analytics",
      "Cost optimization insights",
      "Automated alerts & reports"
    ]
  }
];

export default function ScrollPage() {
  return (
    <main className="page" id="ScrollCards">

      <section className="intro">
        <p className="eyebrow">OUR INDUSTRIES</p>

        <h1>
          Different Industries.
          <br />
          <span>One Intelligence Foundation.</span>
        </h1>

        <p className="description">
          A flexible platform connecting teams,
          data and decisions together.
        </p>
      </section>

      {cardData.map((card, index) => (
        <section className={`energy-box card-${index + 1}`} key={card.title}>

          <div className="energy-content">

            <div className="energy-label">
              {/* <i></i> */}
              <span className="card-title">{card.title}</span>
            </div>

            <h2>{card.product}</h2>
            <h3>{card.work}</h3>
            <p>{card.para}</p>

            <div className="energy-tags">
              {card.points.map((point, i) => (
                <span key={i}>
                  <FontAwesomeIcon icon={faBolt} className="bold"/>
                  {point}
                </span>
              ))}
            </div>


          </div>

          <div className="energy-dashboard">
            <div className="dashboard-header"></div>

            <div className="dashboard-body">
              <img
                src={`/Images/${card.title.toLowerCase().replaceAll(" ", "-")}.png`}
                alt={`${card.title} dashboard`}
              />
            </div>
          </div>

        </section>
      ))}

    </main>
  );
}
