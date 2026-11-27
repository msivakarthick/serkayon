
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faMobile,
  faBell,
  faHeartPulse,
  faCircle,
  faCheck,
  faIndustry,
  faWaveSquare,
  faSkullCrossbones,
  faCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./PlantNetworkVisual.css";

const industries = [
  {
    tabname: "Feed mill · Plant A",
    tabpara: "3 lines running",
    tab: "Food & feed",
    title: "Feed mill · Plant A",
    subtitle: "3 lines running",
    metrics: [
      ["14", "Batches today"],
      ["98.2%", "Recipe adherence"],
      ["2", "Active alerts"],
    ],
    alert:
      "Mixer temperature above threshold on batch 042. Line 2 notified.",
    values: "M0 29 C100 28 130 22 200 26 S400 28 600 14",
  },
  {
    tabname: "Inspection line 2",
    tabpara: "Diameter check",
    tab: "Machine 02",
    title: "Inspection line 2",
    subtitle: "Diameter check",
    metrics: [
      ["1,240", "Parts checked"],
      ["0.6%", "Out of tolerance"],
      ["1", "Drift warning"],
    ],
    alert:
      "Diameter is drifting toward the upper limit. Inspect the next lot.",
    values: "M0 32 C100 30 130 27 200 23 S400 16 600 10",
  },
  {
    tabname: "Bioreactor hall",
    tabpara: "3 units monitored",
    tab: "Pharma & bio",
    title: "Bioreactor hall",
    subtitle: "3 units monitored",
    metrics: [
      ["5 of 6", "Healthy"],
      ["37.0°C", "Avg temperature"],
      ["1", "Needs attention"],
    ],
    alert:
      "Bioreactor 3 is trending toward a fault. Inspect before the next run.",
    values: "M0 35 C100 32 130 30 200 20 S400 22 600 12",
  },
  {
    tabname: "Utilities · All sites",
    tabpara: "Against production",
    tab: "Energy & water",
    title: "Utilities · All sites",
    subtitle: "Against production",
    metrics: [
      ["8,420", "kWh today"],
      ["92,000", "Litres of water"],
      ["3", "Avoidable uses"],
    ],
    alert:
      "Night-time water flow is above baseline. Check for idle process usage.",
    values: "M0 10 C100 18 130 30 200 34 S400 24 600 15",
  }
];

const networkNodes = [
  { className: "node-top", title: "PLANT 05", sub: "Remote Site" },
  {
    className: "node-left-top",
    title: "PLANT 04",
    sub: "Proces industry",
  },
  {
    className: "node-right-top",
    title: "PLANT 03",
    sub: "Utilities",
  },
  {
    className: "node-left-bottom",
    title: "PLANT 02",
    sub: "Manufacturing",
  },
  {
    className: "node-right-bottom",
    title: "PLANT 01",
    sub: "south Asia",
  },
];

function NetworkDiagram() {
  return (
    <div className="pnv-network" id="PlantNetworkVisual">
      <div className="pnv-network-heading">
        <span className="pnv-status-dot"></span>
        CONNECTED INDUSTRIAL ECOSYSTEM
        <span className="pnv-network-live">MULTI-PLANT · MULTI-SITE · ONE VIEW</span>
      </div>

      <div className="pnv-network-canvas">
        <svg
          className="pnv-network-lines"
          viewBox="0 0 600 300"
          preserveAspectRatio="none"
        >
         {/* Top Left */}
<path id="ball-top" d="M300 150 L-35 -65" />

{/* Top Right */}
<path id="ball-right" d="M300 150 L635 -65" />

{/* Bottom Left */}
<path id="ball-bottom" d="M300 150 L-35 365" />

{/* Bottom Right */}
<path id="ball-left" d="M300 150 L635 365" />
          <path id="path-top" d="M100 100 Q200 35 300 40" />
          <path
            id="path-left-top"
            d="M270 135 Q190 80 105 90"
          />
          <path
            id="path-right-top"
            d="M330 135 Q410 80 495 90"
          />
          <path
            id="path-left-bottom"
            d="M270 165 Q190 220 105 220"
          />
          <path
            id="path-right-bottom"
            d="M330 165 Q410 220 495 220"
          />
          <path
            id="path-bottom-left-extra"
            d="M490 275 Q50 320 105 220"
          />

          {/* FOUR OUTWARD MOVING BALLS */}

{["top", "right", "bottom", "left"].map((side) => (
  <circle key={side} r="2" className="pnv-outward-ball">

    <animateMotion
      dur="3s"
      begin="0s"
      repeatCount="indefinite"
      rotate="0"
    >
      <mpath href={`#ball-${side}`} />
    </animateMotion>

    <animate
      attributeName="r"
      values="2;7"
      dur="3s"
      begin="0s"
      repeatCount="indefinite"
    />

    <animate
      attributeName="opacity"
      values="1;1;0"
      keyTimes="0;0.8;1"
      dur="3s"
      begin="0s"
      repeatCount="indefinite"
    />

  </circle>
))}
        </svg>

        {networkNodes.map((node) => (
          <div
            className={`pnv-node ${node.className}`}
            key={node.title}
          >
            <span className="pnv-node-icon"><FontAwesomeIcon icon={faIndustry}/></span>
            <div>
              <strong>{node.title}</strong>
              <small>{node.sub}</small>
            </div>
          </div>
        ))}

        <div className="pnv-central-hub">
          <span className="pnv-hub-icon"><FontAwesomeIcon icon={faCrosshairs}/></span>
          <strong>SERKAYON</strong>
          <small>INDUSTRIAL INTELLIGENCE</small>
        </div>

        <div className="pnv-network-caption">
          <FontAwesomeIcon icon={faCircle} className="green"/>One connected view
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industries[activeIndex];

  return (
    <div className="pnv-dashboard">
      <div className="pnv-dashboard-top">
        <div>
          <span className="pnv-dashboard-dot"></span>
          <strong>INDUSTRIAL OPERATIONS</strong>
        </div>
        <span className="pnv-dashboard-live"><FontAwesomeIcon icon={faCircle}/> LIVE NOW</span>
      </div>

      <div className="pnv-dashboard-heading" key={activeIndex}>
        <h3>{active.tabname}</h3>
        <span>{active.tabpara}</span>
      </div>

      <div className="pnv-tabs">
        {industries.map((item, index) => (
          <button
            key={item.tab}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            {item.tab}
          </button>
        ))}
      </div>

      <div
        className="pnv-metrics"
        key={`metrics-${activeIndex}`}
      >
        {active.metrics.map((metric, index) => (
          <div className="pnv-metric" key={index}>
            <strong>{metric[0]}</strong>
            <small>{metric[1]}</small>
          </div>
        ))}
      </div>

      <div className="pnv-graph">
        <svg
          viewBox="0 0 600 45"
          preserveAspectRatio="none"
        >
          <path
            d={active.values}
            className="pnv-graph-line"
          />
          <circle
            cx="595"
            cy="10"
            r="5"
            className="pnv-graph-ball"
          />
        </svg>
      </div>

      <div
        className="pnv-alert"
        key={`alert-${activeIndex}`}
      >
        <span className="pnv-alert-icon"><FontAwesomeIcon icon={faBell}/></span>
        <p>{active.alert}</p>
      </div>
    </div>
  );
}

function PlantNetworkVisual() {
  return (
    <section className="pnv-section">
      <div className="pnv-particles">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className={`pnv-particle particle-${index + 1}`}
          />
        ))}
      </div>

      <div className="pnv-container">
        <div className="pnv-content">
          <div className="pnv-eyebrow">
            INDUSTRIAL INTELLIGENCE · CONNECTED OPERATIONS
          </div>

          <h1>
            One intelligence
            <br />
            layer.
            <br />
            Every plant.
            <br />
            <span>Every decision.</span>
          </h1>

          <p className="pnv-description">
            From sensor to boardroom, Serkayon connects industrial
            assets, operational data and intelligence — so teams can
            see what is happening, understand what matters and act
            with confidence.
          </p>

          <div className="pnv-benefits">
            <span><FontAwesomeIcon icon={faCheck}/> Works with existing assets</span>
            <span><FontAwesomeIcon icon={faCheck}/> Multi-plant visibility</span>
            <span><FontAwesomeIcon icon={faCheck}/> Cloud and edge ready</span>
          </div>
        </div>

        <div className="pnv-visual">
          <NetworkDiagram />

          <Dashboard />

          <div className="hero-visual-foot" >
            <div className="font-style">
              <FontAwesomeIcon icon={faWaveSquare} className="icon"/>
              <h6>Live operational context</h6>
            </div>

            <div className="font-style">
              <FontAwesomeIcon icon={faCloud} className="icon"/>
              <h6>Cloud + edge architecture</h6>
            </div>

            <div className="font-style">
              <FontAwesomeIcon icon={faMobile} className="icon"/>
              <h6>Mobile visibility</h6>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="scroll">Scroll To Explore</p> */}
    </section>
  );
}

export default PlantNetworkVisual;






