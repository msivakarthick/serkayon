
import { useEffect, useRef, useState } from "react";
import "./verticals.css";

const verticalData = [
  {
    title: "Energy, Utilities & Infrastructure",
    points: [
      "Energy intelligence",
      "Utility consumption monitoring",
      "Remote asset monitoring",
      "Environmental and operational monitoring",
    ],
  },
  {
    title: "Heavy Engineering & Industrial Equipment",
    points: [
      "Legacy PLC connectivity",
      "Industrial data acquisition",
      "Machine condition monitoring",
      "Automation and system integration",
    ],
  },
  {
    title: "Food Processing & Poultry",
    points: [
      "Production monitoring",
      "Energy monitoring",
      "Automated bag counting",
      "Process automation and operational analytics",
    ],
  },
  {
    title: "Pharmaceuticals & Life Sciences",
    points: [
      "Bioreactor monitoring",
      "Batch-level traceability",
      "Cleanroom compliance and PPE monitoring",
      "Equipment monitoring and predictive maintenance",
    ],
  },
  {
    title: "Automotive & Mobility",
    points: [
      "Machine data acquisition",
      "Production line monitoring",
      "Vision-based quality inspection",
      "Predictive maintenance",
    ],
  },
];

const STEP_MS = 6000;

function Verticals() {
  const sectionRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(-1);
  const [started, setStarted] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  // Start animation when section enters the screen
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          setActiveIndex(0);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Automatic animation from first box to fifth box
  useEffect(() => {
    if (!started || introDone) return;

    const timer = setTimeout(() => {
      if (activeIndex < verticalData.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else {
        setActiveIndex(-1);
        setIntroDone(true);
      }
    }, STEP_MS);

    return () => clearTimeout(timer);
  }, [started, activeIndex, introDone]);

  // Click to open and close boxes
  const handleTabClick = (index) => {
    setIntroDone(true);

    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="verticals"
      ref={sectionRef}
      className={`verticals ${started ? "in-view" : ""}`}
    >
      <div className="verticals-container">

        <div className="verticals-head">
          <h2 className="verticals-heading">
            Industrial Verticals
            {/* <sup>({String(verticalData.length).padStart(2, "0")})</sup> */}
          </h2>

          {/* <span className="verticals-eyebrow">
            02 — INDUSTRIES WE SERVE
          </span> */}
        </div>

        <div className="verticals-list">

          {verticalData.map((vertical, index) => {
            const open = activeIndex === index;

            return (
              <div
                key={vertical.title}
                className={`vertical-row ${open ? "active" : ""}`}
              >
                <button
                  type="button"
                  className="vertical-row-bar"
                  aria-expanded={open}
                  aria-controls={`vertical-panel-${index}`}
                  onClick={() => handleTabClick(index)}
                >
                  <span className="vertical-row-title">
                    {vertical.title}
                  </span>

                  <span className="vertical-row-icon" aria-hidden="true">
                    +
                  </span>
                </button>

                <div
                  className="vertical-row-panel"
                  id={`vertical-panel-${index}`}
                  aria-hidden={!open}
                  inert={!open}
                >
                  <div className="vertical-row-panel-inner">
                    <ul>
                      {vertical.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Verticals;
