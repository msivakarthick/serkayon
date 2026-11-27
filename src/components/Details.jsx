import "./Details.css";

function IndustryIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M5 39V17L17 25V17L29 25V10L40 5V39H5Z" />
      <path d="M13 32V35M23 32V35M33 29V35M4 40H44" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="18" y="4" width="12" height="10" rx="2" />
      <rect x="4" y="34" width="12" height="10" rx="2" />
      <rect x="32" y="34" width="12" height="10" rx="2" />
      <path d="M24 14V24M10 34V24H38V34" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="10" rx="17" ry="6" />
      <path d="M7 10V37C7 41 15 44 24 44S41 41 41 37V10" />
      <path d="M7 19C7 23 15 26 24 26S41 23 41 19M7 29C7 33 15 36 24 36S41 33 41 29" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="10" y="10" width="28" height="28" rx="5" />
      <path d="M17 5V10M24 5V10M31 5V10M17 38V43M24 38V43M31 38V43M5 17H10M5 24H10M5 31H10M38 17H43M38 24H43M38 31H43" />
      <text x="24" y="29" textAnchor="middle">AI</text>
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M5 42H44M10 37V27H19V37M23 37V19H32V37M36 37V8H43" />
      <path d="M8 21L19 15L28 17L42 5M34 5H42V13" />
    </svg>
  );
}

const steps = [
  {
    title: "UNDERSTAND THE INDUSTRY",
    description:
      "Understand plant operations, identify challenges and assess existing infrastructure.",
    icon: <IndustryIcon />,
    color: "industry",
  },
  {
    title: "CONNECT INDUSTRIAL SYSTEMS",
    description:
      "Integrate machines, legacy PLCs, sensors and automation systems.",
    icon: <NetworkIcon />,
    color: "systems",
  },
  {
    title: "ACQUIRE & PROCESS DATA",
    description:
      "Collect, consolidate and process machine and operational data.",
    icon: <DatabaseIcon />,
    color: "data",
  },
  {
    title: "APPLY INTELLIGENCE",
    description:
      "Use analytics, AI and intelligent monitoring to identify patterns, deviations and opportunities.",
    icon: <AIIcon />,
    color: "intelligence",
  },
  {
    title: "DELIVER OPERATIONAL VALUE",
    description:
      "Provide actionable insights that help teams improve visibility, efficiency and decision-making.",
    icon: <GrowthIcon />,
    color: "value",
  },
];

function Details() {
  return (
    <section className="details-section">
      <div className="details-container">

        {/* LEFT SIDE - 50% */}
        <div className="details-left">

          <div className="details-heading">
            <h2>
              At Serkayon, we work to bridge
              <span> that gap.</span>
            </h2>

            <p>
              From understanding your industry to delivering actionable
              intelligence, we connect every stage of your industrial journey.
            </p>
          </div>

          <div className="details-steps">
            {steps.map((step, index) => (
              <div className="details-step-wrapper" key={step.title}>
                <div className={`details-card ${step.color}`}>
                  <div className="details-icon">
                    {step.icon}
                  </div>

                  <div className="details-divider"></div>

                  <div className="details-text">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>

                {index !== steps.length - 1 && (
                  <div className="details-arrow">
                    <span></span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE - 50% IMAGE */}
        <div className="details-right">
          <img
            src="/Images/Details-images.jpeg"
            alt="Serkayon Industrial Intelligence"
            className="details-main-image"
          />
        </div>

      </div>
      <div className="details-right">
  <picture>
    {/* <source
      media="(max-width: 600px)"
      srcSet="/Images/architecture-mobile.png"
    /> */}

    <img
      src="/Images/architecture1.png"
      alt="Serkayon Industrial Intelligence"
      className="architecture"
    />
  </picture>
</div>
    </section>
  );
}

export default Details;