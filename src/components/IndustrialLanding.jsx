
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./IndustrialLanding.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUp,
  faCheck,
  faMicrochip,
  faNetworkWired
} from "@fortawesome/free-solid-svg-icons";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_INDUSTRIAL_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const steps = [
  {
    title: "You bring the customer",
    desc: "Your trusted relationships, machines, projects and domain knowledge."
  },
  {
    title: "Service adds intelligence",
    desc: "Connected software capabilities, data intelligence and digital services."
  },
  {
    title: "Customer gets more value",
    desc: "Better visibility, smarter operations and ongoing digital value."
  }
];

const solutions = [
  {
    icon: <FontAwesomeIcon icon={faNetworkWired} />,
    label: "FOR SYSTEM INTEGRATORS",
    title: "Turn integration projects into connected operations.",
    desc: "You already understand the machines, equipment and the customer's automation requirements. Add intelligence to the machine ecosystem and transform legacy into digital.",
    points: [
      "Connect PLCs, sensors, machines and existing systems",
      "Deliver data dashboards and real-time visibility",
      "Provide digital value with analytics and alerts",
      "Create new recurring revenue and service models"
    ],
    link: "Connect as a system integrator",
    theme: "purple",
    popupType: "integrator"
  },
  {
    icon: <FontAwesomeIcon icon={faMicrochip} />,
    label: "FOR MACHINE BUILDERS",
    title: "Make your equipment digitally connected.",
    desc: "Give customers a connected way to monitor equipment performance and connect machines with intelligence built into their digital operations.",
    points: [
      "Add remote visibility to your machine products",
      "Enable remote access to your equipment fleet",
      "Track performance data and identify machine issues",
      "Build digital services around your machines"
    ],
    link: "Connect as an OEM",
    theme: "orange",
    popupType: "oem"
  }
];

// Escape user input before inserting into email HTML
const escapeHTML = (value) => {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[char];
  });
};

// Create SI purple table or OEM orange table
const createEmailTable = (type, name, email, message) => {
  const isSI = type === "integrator";

  const color = isSI ? "#963d57" : "#ed7250";
  const background = isSI ? "#eee9f5" : "#fff0e9";
  const border = isSI ? "#ddd5e9" : "#f1d5ca";

  const title = isSI
    ? "System Integrator Enquiry"
    : "OEM Enquiry";

  const nameLabel = isSI
    ? "System Integrator Name"
    : "OEM / Company Name";

  return `
    <div style="font-family:Arial,sans-serif;background:#f7f7f7;padding:20px;color:#333;">
      <div style="max-width:600px;margin:auto;background:#fff;border:1px solid ${border};border-radius:10px;overflow:hidden;">

        <div style="background:${background};padding:20px;text-align:center;">
          <h2 style="margin:0;color:${color};">${title}</h2>
        </div>

        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="width:35%;padding:14px;background:${background};border:1px solid ${border};font-weight:bold;color:${color};">
              ${nameLabel}
            </td>
            <td style="padding:14px;border:1px solid ${border};">
              ${escapeHTML(name)}
            </td>
          </tr>

          <tr>
            <td style="padding:14px;background:${background};border:1px solid ${border};font-weight:bold;color:${color};">
              Email ID
            </td>
            <td style="padding:14px;border:1px solid ${border};overflow-wrap:anywhere;">
              ${escapeHTML(email)}
            </td>
          </tr>

          <tr>
            <td style="padding:14px;background:${background};border:1px solid ${border};font-weight:bold;color:${color};">
              Message
            </td>
            <td style="padding:14px;border:1px solid ${border};white-space:pre-wrap;overflow-wrap:anywhere;">
              ${escapeHTML(message)}
            </td>
          </tr>
        </table>

      </div>
    </div>
  `;
};

const IndustrialLanding = () => {
  const [popupType, setPopupType] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const closePopup = () => {
    setPopupType(null);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    const htmlTable = createEmailTable(
      popupType,
      formData.name,
      formData.email,
      formData.message
    );

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
      enquiry_type:
        popupType === "integrator"
          ? "System Integrator"
          : "OEM",
      html_table: htmlTable
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      alert("Your enquiry has been sent successfully!");
      closePopup();

    } catch (error) {
      console.log("EmailJS Status:", error.status);
      console.log("EmailJS Error:", error.text);

      alert(
        error.text ||
        "Unable to send your enquiry. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="industrial-page" id="IndustrialLanding">
      <div className="industrial-container">

        {/* HERO SECTION */}
<section className="industrial-hero">

  <div className="industrial-hero-content">

    <div className="industrial-eyebrow">
      SMART DATA. REAL VALUE.
    </div>

    <h1>
      You bring the industrial
      
      reach.
      <br />
      <span>We bring the intelligence</span>
      <span>layer.</span>
    </h1>

    <p className="industrial-subtitle">
      Add connected software capabilities to the machines and
      industrial projects you already deliver — without having
      to build and maintain the entire platform yourself.
    </p>

  </div>

  <div className="industrial-hero-image">
    <img src="./Images/arc.jpeg" alt="Industrial Intelligence" />
  </div>

</section>

        {/* PROCESS SECTION */}
        <section className="industrial-process">
          {steps.map((step, index) => (
            <div className="process-item" key={index}>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>

              {index !== 2 && (
                <span className="process-arrow"><FontAwesomeIcon icon={faArrowRight}/></span>
              )}
            </div>
          ))}
        </section>

        {/* SOLUTION CARDS */}
        <section className="industrial-solutions">
          {solutions.map((solution, index) => (
            <div
              className={`solution-card ${solution.theme}`}
              key={index}
            >
              <div className="solution-icon">
                {solution.icon}
              </div>

              <div className="solution-label">
                {solution.label}
              </div>

              <h2>{solution.title}</h2>

              <p className="solution-desc">
                {solution.desc}
              </p>

              <ul className="solution-points">
                {solution.points.map((point, i) => (
                  <li key={i}>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="solution-note">
                <strong>Your role</strong>
                <br />
                Customer relationship · Site integration · Commissioning
              </div>

              <button
                type="button"
                className="solution-link"
                onClick={() => setPopupType(solution.popupType)}
              >
                {solution.link}

                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="arrow"
                />
              </button>
            </div>
          ))}
        </section>

        {/* INTELLIGENCE BANNER */}
        <section className="industrial-banner">
          <div>
            <div className="banner-label">
              YOUR INTELLIGENCE FOUNDATION
            </div>

            <h3>
              A common intelligence architecture — not a one-off
              dashboard project.
            </h3>

            <p>
              Reusable platform. Connected assets. Real-time intelligence.
              Built for long-term digital growth.
            </p>
          </div>

          <div className="banner">
            <img
              src="./Images/serkayon_logo.jpg"
              className="logo"
              alt="Serkayon"
            />
          </div>
        </section>

      </div>

      {/* POPUP */}
      {popupType && (
        <div
          className="industrial-popup-overlay"
          onClick={closePopup}
        >
          <div
            className="industrial-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="industrial-popup-close"
              type="button"
              onClick={closePopup}
            >
              ×
            </button>

            <div className="popup-eyebrow">
              CONNECT WITH SERKAYON
            </div>

            <h2>
              {popupType === "integrator"
                ? "Become a System Integrator Partner"
                : "Connect as a Machine Builder / OEM"}
            </h2>

            <p className="popup-description">
              {popupType === "integrator"
                ? "Let's explore how we can bring connected intelligence to your industrial integration projects."
                : "Let's explore how we can make your machines digitally connected and create more value for your customers."}
            </p>

            <form onSubmit={handleSubmit}>

              <label>
                {popupType === "integrator"
                  ? "System Integrator Name"
                  : "OEM / Company Name"}
              </label>

              <input
                type="text"
                placeholder={
                  popupType === "integrator"
                    ? "Enter system integrator name"
                    : "Enter OEM / company name"
                }
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value
                  })
                }
                required
              />

              <label>Email ID</label>

              <input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value
                  })
                }
                required
              />

              <label>Message</label>

              <textarea
                placeholder="Enter your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value
                  })
                }
                rows="4"
                required
              />

              <button
                type="submit"
                className="industrial-popup-submit"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Submit"}
              </button>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default IndustrialLanding;
