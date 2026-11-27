
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faTowerCell,
  faNetworkWired,
  faLayerGroup,
  faMagicWandSparkles,
  faGauge,
  faCheck,
  faAsterisk,
  faArrowAltCircleRight,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

import "./ArchitecturePage.css";

const steps = [
  {
    number: "01",
    title: "Capture",
    icon: <FontAwesomeIcon icon={faTowerCell} />,
    description: "Sensors, meters, PLCs, cameras and machines generate the signals.",
  },
  {
    number: "02",
    title: "Connect",
    icon: <FontAwesomeIcon icon={faNetworkWired} />,
    description: "Edge and cloud connectivity bring data from different assets together.",
  },
  {
    number: "03",
    title: "Contextualise",
    icon: <FontAwesomeIcon icon={faLayerGroup} />,
    description: "Organise data by company, plant, line, machine, batch and shift.",
  },
  {
    number: "04",
    title: "Understand",
    icon: <FontAwesomeIcon icon={faMagicWandSparkles} />,
    description: "Dashboards, rules, analytics and AI surface what needs attention.",
  },
  {
    number: "05",
    title: "Act & verify",
    icon: <FontAwesomeIcon icon={faGauge} />,
    description: "Teams respond, record outcomes and track operational improvement.",
  },
];

const hierarchy = [
  {
    label: "SENSORS & SIGNALS",
    items: ["Temperature", "Pressure", "Vibration", "Energy", "Vision"],
  },
  {
    label: "MACHINES & ASSETS",
    items: ["Motors", "Mixers", "Compressors", "Filling lines"],
  },
  {
    label: "PRODUCTION LINES",
    items: ["Line 01", "Line 02", "Line 03"],
  },
  {
    label: "PLANTS & COMPANIES",
    items: ["Plant A", "Plant B", "Plant C"],
  },
];

function HierarchyLines() {
  return (
    <div className="architecture-connectors">
      <div className="connector c1"></div>
      <div className="connector c2"></div>
      <div className="connector c3"></div>
      <div className="connector c4"></div>
      <div className="connector c5"></div>
      <div className="connector c6"></div>
      <div className="connector c7"></div>
      <div className="connector c8"></div>
      <div className="connector c9"></div>
      <div className="connector c10"></div>
    </div>
  );
}

function HierarchyDiagram() {
  return (
    <div className="architecture-dark-panel">
      <div className="architecture-panel-heading">
        <span>▤</span>
        THE HIERARCHY BELOW THE DASHBOARD
      </div>

      <div className="architecture-hierarchy">
        <HierarchyLines />

        {hierarchy.map((row, index) => (
          <div className="architecture-row" key={row.label}>
            <div className="architecture-row-label">
              {row.label}
            </div>

            <div className={`architecture-items row-${index + 1}`}>
              {row.items.map((item) => (
                <div className="architecture-node" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="architecture-brand">
        <div className="architecture-brand-icon">S</div>

        <div>
          <h4>SERKAYON ARCHITECTURE</h4>
          <p>
            Shared data model · Multi-tenant cloud / edge ·
            Dashboards · Intelligence · Mobile
          </p>
        </div>
      </div>

      <div className="architecture-partners">
        <span>OEMs</span>
        <span>SYSTEM INTEGRATORS</span>
      </div>

      <p className="architecture-partner-caption">
        Deploy · Embed · Configure · Scale
      </p>

      <div className="architecture-features">
        <span><FontAwesomeIcon icon={faCheck} /> Batch-level context</span>
        <span><FontAwesomeIcon icon={faCheck} /> Multi-tenant architecture</span>
        <span><FontAwesomeIcon icon={faCheck} /> Mobile-first visibility</span>
        <span><FontAwesomeIcon icon={faCheck} /> ESG & audit traceability</span>
        <span><FontAwesomeIcon icon={faCheck} /> One-time / subscription licensing</span>
      </div>
    </div>
  );
}

function ArchitecturePage() {
  return (
    <section className="architecture-page" id="ArchitecturePage">
      <div className="architecture-header">
        <div>
          <span className="architecture-eyebrow">
            THE SERKAYON PLATFORM
          </span>

          <h2>One connected operating model</h2>
        </div>

        <div className="architecture-cloud">
          <FontAwesomeIcon icon={faCloud} /> Cloud + Edge
        </div>
      </div>

      <div className="architecture-process">
        {steps.map((step, index) => (
          <div className="architecture-process-wrapper" key={step.number}>
            <div className="architecture-card">
              <div className="architecture-card-top">
                <span>{step.number}</span>
                <strong>{step.icon}</strong>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            {index !== steps.length - 1 && (
              <div className="architecture-arrow"><FontAwesomeIcon icon={faArrowRight}/></div>
            )}
          </div>
        ))}
      </div>

      <HierarchyDiagram />

      <div className="architecture-note">
        <span><FontAwesomeIcon icon={faAsterisk}/></span>

        <p>
          Built around existing operations. Connect legacy and new
          equipment where interfaces and site conditions permit.
          The integration scope is confirmed during technical discovery.
        </p>
      </div>
    </section>
  );
}

export default ArchitecturePage;
