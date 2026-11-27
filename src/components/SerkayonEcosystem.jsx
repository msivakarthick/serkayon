
import React from "react";
import "./SerkayonEcosystem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
      faChartColumn,
      faCircle,
      faGauge,
      faIndustry,
      faLayerGroup,
      faMicrochip,
      faNetworkWired,
      faShield,
      faSprayCanSparkles,
      faWandSparkles,
      faZap,
} from "@fortawesome/free-solid-svg-icons";
const participants = [
  {
    icon: "▤",
     icon: <FontAwesomeIcon icon={faBuilding}/>,
    desc: "Own the operations and create value",
  },
  {
    icon: <FontAwesomeIcon icon={faMicrochip}/>,
    title: "OEMs",
    desc: "Design connected products",
  },
  {
     icon: <FontAwesomeIcon icon={faNetworkWired}/>,
    title: "System integrators",
    desc: "Connect systems and platforms",
  },
  {
     icon: <FontAwesomeIcon icon={faWandSparkles}/>,
    title: "Technology providers",
    desc: "Enable capabilities through technologies",
  },
];

const outcomes = [
  {
     icon: <FontAwesomeIcon icon={faGauge}/>,
    title: "Operational visibility",
    desc: "One view across operations",
  },
  {
     icon: <FontAwesomeIcon icon={faChartColumn}/>,
    title: "Better decisions",
    desc: "Insights become actionable",
  },
  {
     icon: <FontAwesomeIcon icon={faZap}/>,
    title: "Efficiency insights",
    desc: "Drive better performance",
  },
  {
     icon: <FontAwesomeIcon icon={faShield}/>,
    title: "Traceable operations",
    desc: "Track, audit and control",
  },
];

const capabilities = [
  {
    number: "01",
    icon: <FontAwesomeIcon icon={faBuilding}/>,
    title: "Industrial participants",
    desc: "Manufacturers, Platform OEMs, System integrators",
  },
  {
    number: "02",
    icon: <FontAwesomeIcon icon={faIndustry}/>,
    title: "Connected operations",
    desc: "Sensors, PLCs, Machines, Production lines, Utilities",
  },
  {
    number: "03",
    icon: <FontAwesomeIcon icon={faNetworkWired}/>,
    title: "Technology connections",
    desc: "Automation systems, Cloud & Edge, APIs",
  },
  {
    number: "04",
    icon: <FontAwesomeIcon icon={faLayerGroup}/>,
    title: "Serkayon intelligence layer",
    desc: "Unified data access, Multi-plant visibility, Analytics",
  },
];

const SerkayonEcosystem = () => {
  return (
    <section className="serkayon" id="SerkayonEcosystem">
      <div className="serkayon-container">

        {/* HEADER */}
        <div className="serkayon-header">

          <div>
            <div className="serkayon-eyebrow">
                THE SERKAYON ECOSYSTEM
            </div>

            <h1 className="serkayon-heading">
              One connected
              <br />
              ecosystem.
              <br />
              <span>Many ways to create</span>
              <br />
              <span>value.</span>
            </h1>
          </div>

          <div className="serkayon-intro">
            Serkayon brings manufacturers, OEMs, system
            integrators and technology providers into a
            shared industrial intelligence architecture.
            Each participant contributes what they do best.
            The intelligence layer connects the work.

            <br />

            <span className="serkayon-pill">
              <FontAwesomeIcon icon={faNetworkWired}/> CONNECT · CONTEXTUALISE · INTELLIGENCE · SCALE
            </span>
          </div>

        </div>


        {/* MAIN ECOSYSTEM */}
        <div className="serkayon-diagram">

          <div className="diagram-top">
            <span>HOW THE ECOSYSTEM CONNECTS</span>

            <span className="diagram-status">
              <FontAwesomeIcon icon={faCircle} className="circle"/>ONE SHARED INTELLIGENCE FOUNDATION
            </span>
          </div>


          {/* TOP FOUR BOXES */}
          <div className="participants-network">

            <div className="participants">

              {participants.map((item, index) => (
                <div className="participant-card" key={index}>

                  <div className="participant-icon">
                    {item.icon}
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>

                </div>
              ))}

            </div>

          </div>


          {/* SERKAYON CENTRAL BOX */}
          <div className="serkayon-core">

            <div className="core-brand">

              <div className="core-logo">
                S
              </div>

              <div>
                <h3>SERKAYON</h3>

                <small>
                  INDUSTRIAL INTELLIGENCE LAYER
                </small>
              </div>

            </div>


            <div className="core-tags">

              <span>Connected assets</span>

              <span>Unified data context</span>

              <span>Analytics intelligence</span>

              <span>Coordinated workflows</span>

              <span>Measured outcomes</span>

            </div>


            <p className="core-caption">
              One reusable architecture connects equipment,
              plants, teams and workflows.
            </p>

          </div>


          {/* BOTTOM FOUR BOXES */}
          <div className="outcomes-network">

            <div className="outcomes">

              {outcomes.map((item, index) => (
                <div className="outcome-card" key={index}>

                  <div className="outcome-icon">
                    {item.icon}
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* BOTTOM FOUR SEPARATE BOXES */}
        <div className="capabilities">

          {capabilities.map((item, index) => (
            <div className="capability-card" key={index}>

              <span className="cap-number">
                {item.number}
              </span>

              <span className="cap-icon">
                {item.icon}
              </span>

              <div className="cap-content">

                <h4>{item.title}</h4>

                <p>{item.desc}</p>

              </div>

            </div>
          ))}

        </div>


        {/* FINAL NOTE */}
        <div className="serkayon-note">

          <span><FontAwesomeIcon icon={faShield}/></span>

          <p>
            <strong>
              Designed to work with the ecosystem — not replace it.
            </strong>{" "}
            Serkayon connects existing equipment and software
            through stable interfaces, integrations and
            deployment partners. Control actions remain
            subject to site engineering, permissions and
            safety requirements.
          </p>

        </div>

      </div>
    </section>
  );
};

export default SerkayonEcosystem;
