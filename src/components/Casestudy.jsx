import "./Casestudy.css";
import { useState, useEffect, useRef } from "react";

function Casestudy() {
  const sectionRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

 useEffect(() => {
  const section = sectionRef.current;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setHasEntered(true);

        // First time வந்தவுடன் observer-ஐ stop பண்ணிடும்
        observer.unobserve(section);
      }
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

  return (
    <section
      ref={sectionRef}
      className={`case-study ${hasEntered ? "scroll-visible" : ""}`}
    >
      {/* Case Study box */}
      <div className="case-title">
        <h1>Case Study</h1>

        <div className="case-details">
          <p>Monitor machine performance and energy usage</p>
          <p>Record production, downtime and batch details</p>
          <p>Trace finished products back to raw materials</p>
        </div>
      </div>

      {/* Verticals heading */}
      <div className="verti">
        <h1>Verticals</h1>
      </div>

      {/* Energy → Water → Traceability */}
      <div className="verticals">

        <div className="energy">
          <h2>Energy</h2>
          <p>Monitor power usage</p>
        </div>

        {/* First arrow */}
        <span className="arrow-one">⟶</span>

        <div className="water">
          <h2>Water</h2>
          <p>Track water consumption</p>
        </div>

        {/* Second arrow */}
        <span className="arrow-two">⟶</span>

        <div className="traceability">
          <h2>Traceability</h2>
          <p>Track product history</p>
        </div>

      </div>
    </section>
  );
}

export default Casestudy;