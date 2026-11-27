
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faIndustry,
  faBolt,
  faHeartPulse,
  faBell,
  faArrowRight,
  faShield,
  faAngleDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

import "./PlatformPreview.css";

const dashboardData = {
  Operations: {
    title: "Plant overview / Today",
    stats: [
      { label: "Units produced", value: "1,284", status: "Updated from plant data" },
      { label: "Line availability", value: "96.8%", status: "Updated from plant data" },
      { label: "Active alerts", value: "03", status: "Attention required" },
    ],
    chartTitle: "Production trend",
    chartLabel: "Hourly pattern",
    chart: [35, 45, 38, 58, 52, 68, 61, 78, 72, 88, 76, 96],
    alert: "Production exception",
    alertDesc: "Packaging line 02 cycle time is above its configured range.",
    alertTime: "Last seen · 20 minutes ago",
  },

  Energy: {
    title: "Utilities / Energy performance",
    stats: [
      { label: "Energy consumed", value: "8,420", status: "Updated from plant data" },
      { label: "Energy intensity", value: "-8.2%", status: "Better than baseline" },
      { label: "Active alerts", value: "03", status: "Attention required" },
    ],
    chartTitle: "Energy trend",
    chartLabel: "Hourly consumption",
    chart: [90, 82, 76, 80, 70, 66, 61, 57, 52, 47, 40, 32],
    alert: "Energy threshold",
    alertDesc: "Energy consumption has changed from the expected operating range.",
    alertTime: "Last seen · 15 minutes ago",
  },

  Assets: {
    title: "Asset health / Machine signals",
    stats: [
      { label: "Connected assets", value: "24", status: "Updated from plant data" },
      { label: "Healthy signals", value: "05", status: "Signals monitored" },
      { label: "Machine alerts", value: "01", status: "Attention required" },
    ],
    chartTitle: "Signal trend",
    chartLabel: "Signal history",
    chart: [28, 34, 31, 43, 40, 48, 52, 57, 62, 68, 72, 88],
    alert: "Asset alert",
    alertDesc: "One machine signal requires attention based on the configured range.",
    alertTime: "Last seen · 20 minutes ago",
  },
};

const sidebarItems = [
  { icon: <FontAwesomeIcon icon={faGauge} />, label: "Overview" },
  { icon: <FontAwesomeIcon icon={faIndustry} />, label: "Production" },
  { icon: <FontAwesomeIcon icon={faBolt} />, label: "Energy" },
  { icon: <FontAwesomeIcon icon={faHeartPulse} />, label: "Asset health" },
  { icon: <FontAwesomeIcon icon={faBell} />, label: "Alerts" },
];

function PlatformPreview() {
  const [activeTab, setActiveTab] = useState("Operations");

  const data = dashboardData[activeTab];

  return (
    <section className="platform-section" id="PlatformPreview">
      {/* HERO SECTION */}

      <div className="platform-hero">
        <div className="platform-eyebrow">
          EXPLORE THE PLATFORM
        </div>

        <h1>
          See the plant.
          <br />
          <span>Not just the presentation.</span>
        </h1>

        <p>
          Explore an interactive representation of the Serkayon experience.
          Switch between operations, energy and asset health to see how
          different signals come together.
        </p>
      </div>

      {/* DASHBOARD */}

      <div className="dashboard-window">
        {/* BROWSER HEADER */}

        <div className="browser-header">
          <div className="browser-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="browser-url">
            app.serkayon.com / plant-intelligence
          </div>

          <div className="demo-status">
            <span></span>
            ILLUSTRATIVE DEMO
          </div>
        </div>

        <div className="dashboard-layout">
          {/* SIDEBAR */}

          <aside className="dashboard-sidebar">
            <div className="brand-logo">
              <span className="brand-symbol">S</span>
              <strong>serkayon</strong>
            </div>

            <div className="sidebar-workspace">
              <small>WORKSPACE</small>
              <strong>Demo Manufacturing</strong>
              <span>Plant A - India</span>
            </div>

            <nav className="sidebar-nav">
              {sidebarItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`sidebar-item ${index === 0 ? "active" : ""}`}
                >
                  <span>{item.icon}</span>
                  {item.label}

                  {item.label === "Alerts" && (
                    <small className="alert-count">3</small>
                  )}
                </div>
              ))}
            </nav>

            <div className="sidebar-user">
              <span>AM</span>

              <div>
                <strong>Plant manager</strong>
                <small>Demo workspace</small>
              </div>
            </div>
          </aside>

          {/* MAIN DASHBOARD */}

          <main className="dashboard-main">
            <div className="dashboard-top">
              <div>
                <small className="dashboard-date">
                  TUESDAY, 17 NOVEMBER 2026
                </small>

                <h2>{data.title}</h2>
              </div>

              <button className="date-filter" type="button">
                Last 24 hours <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>

            {/* INTERACTIVE TABS */}

            <div className="dashboard-tabs">
              {["Operations", "Energy", "Assets"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={activeTab === tab ? "selected" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* STATISTICS */}

            <div className="dashboard-stats">
              {data.stats.map((stat, index) => (
                <div className="stat-card" key={index}>
                  <small>{stat.label}</small>

                  <h3>{stat.value}</h3>

                  <span className={index === 2 ? "warning" : ""}>
                    {index !== 2 && <FontAwesomeIcon icon={faArrowUp} />}
                    {stat.status}
                  </span>
                </div>
              ))}
            </div>

            {/* CHART AND ALERTS */}

            <div className="dashboard-content">
              <div className="chart-card">
                <div className="card-heading">
                  <strong>{data.chartTitle}</strong>
                  <small>{data.chartLabel}</small>
                </div>

                <div className="bar-chart">
                  {data.chart.map((height, index) => (
                    <div
                      key={`${activeTab}-${index}`}
                      className="chart-bar"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>

                <div className="chart-labels">
                  <span>08:00</span>
                  <span>12:00</span>
                  <span>16:00</span>
                </div>
              </div>

              <div className="attention-card">
                <div className="card-heading">
                  <strong>Needs attention</strong>
                  <span className="new-alert">1 new</span>
                </div>

                <div className="attention-item">
                  <span className="attention-icon">
                    <FontAwesomeIcon icon={faBell} />
                  </span>

                  <div>
                    <strong>{data.alert}</strong>
                    <p>{data.alertDesc}</p>
                    <small>{data.alertTime}</small>
                  </div>
                </div>

                <a href="#platform-contact">
                  View all alerts{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="rotate" />
                </a>
              </div>
            </div>

            <div className="dashboard-footer">
              Sample interface with illustrative values. Connect your own
              data in a guided demo.
            </div>
          </main>
        </div>

        {/* LAPTOP BASE */}

        <div className="laptop-base">
          <span></span>
        </div>
      </div>

      {/* BOTTOM CTA */}

      <div className="platform-bottom">
        <div className="sample-note">
          <span>
            <FontAwesomeIcon icon={faShield} />
          </span>
          Illustrative sample data—not a live customer system.
        </div>

        <a
          href="#Footer"
          className="platform-cta"
          // onClick={closeMenu}
          id="platform-contact"
        >
          Request a live walkthrough 
        </a>
      </div>
    </section>
  );
}

export default PlatformPreview;
