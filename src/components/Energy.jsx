// import "./Energy.css";

// function Energy() {
//   return (
//     <section className="case-study">
//       <h1>Case Study</h1>

//       <div className="verti">
//         <h1>Verticals</h1>
//       </div>

//       <div className="verticals">
//         <div className="energy">
//           <h2>Energy</h2>
//         </div>

//           <span className="arrow-icon">⟶</span>

//         <div className="water">
//           <h2>Water</h2>
//         </div>

//           <span className="arrow-icon">⟶</span>

//         <div className="traceability">
//           <h2>Traceability</h2>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Energy;

// import "./Energy.css";
// import { useState, useEffect, useRef } from "react";

// function Energy() {
//   const sectionRef = useRef(null);
//   const [hasEntered, setHasEntered] = useState(false);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setHasEntered(entry.isIntersecting);
//       },
//       { threshold: 0.15 }
//     );

//     observer.observe(section);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`case-study ${hasEntered ? "scroll-visible" : ""}`}
//     >
//       <h1>Case Study</h1>

//       <div className="verti">
//         <h1>Verticals</h1>
//       </div>

//       <div className="verticals">
//         <div className="energy">
//           <h2>Energy</h2>
//         </div>

//         <span className="arrow-icon arrow-one">⟶</span>

//         <div className="water">
//           <h2>Water</h2>
//         </div>

//         <span className="arrow-icon arrow-one">⟶</span>

//         <div className="traceability">
//           <h2>Traceability</h2>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Energy;

import "./energy.css";
import { useState, useEffect, useRef } from "react";

function Energy() {
  const sectionRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasEntered(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`case-study ${hasEntered ? "scroll-visible" : ""}`}
    >
      <h1>Case Study</h1>

      <div className="verti">
        <h1>Verticals</h1>
      </div>

      <div className="verticals">
        {/* Energy box */}
        <div className="energy">
          <h2>Energy</h2>
        </div>

        {/* First arrow */}
        <span className="arrow-one">⟶</span>

        {/* Water box */}
        <div className="water">
          <h2>Water</h2>
        </div>

        {/* Second arrow */}
        <span className="arrow-two">⟶</span>

        {/* Traceability box */}
        <div className="traceability">
          <h2>Traceability</h2>
        </div>
      </div>
    </section>
  );
}

export default Energy;








/* Main section */
.case-study {
  padding: 30px;
  background-color: #f3e8ef;
}

/* Verticals heading box */
.verti {
  margin: 25px 0;
  background-color: #f3e8ef;;
  padding: 15px 20px;
  width: 150px;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 30px;
  font-size: 50px;
}

/* Desktop layout */
.verticals {
  display: flex;
  align-items: center;
  margin: auto 100px;
  justify-content: center;
}

/* Energy, Water, Traceability boxes */
.energy,
.water,
.traceability {
  background-color: #dea2de;
  color: white;
  padding: 20px;
  width: 150px;
  margin: 10px;
  text-align: center;
}

/* Initial state for boxes */
.case-study .verti,
.case-study .energy,
.case-study .water,
.case-study .traceability {
  opacity: 0;
  transform: translateY(25px);
}

/* Verticals heading animation */
.case-study.scroll-visible .verti {
  animation: headingAppear 0.6s ease 0.2s both;
}

/* Energy box animation */
.case-study.scroll-visible .energy {
  animation: energyAppear 0.6s ease 0.5s both;
}

/* Water box animation */
.case-study.scroll-visible .water {
  animation: waterAppear 0.6s ease 1.4s both;
}

/* Traceability box animation */
.case-study.scroll-visible .traceability {
  animation: traceabilityAppear 0.6s ease 2.8s both;
}


/* =====================================
   FIRST ARROW - DESKTOP
===================================== */

.arrow-one {
  display: inline-block;
  flex-shrink: 0;
  font-size: 35px;
  color: black;
  margin-left: 20px;

  opacity: 0;
  transform: translateX(-15px);
}

.case-study.scroll-visible .arrow-one {
  animation: firstArrowMove 0.6s ease 0.9s both;
}

@keyframes firstArrowMove {
  from {
    opacity: 0;
    transform: translateX(-15px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}


/* =====================================
   SECOND ARROW - DESKTOP
===================================== */

.arrow-two {
  display: inline-block;
  flex-shrink: 0;
  font-size: 35px;
  color: black;
  margin-left: 20px;

  opacity: 0;
  transform: translateX(-15px);
}

.case-study.scroll-visible .arrow-two {
  animation: secondArrowMove 0.6s ease 2.2s both;
}

@keyframes secondArrowMove {
  from {
    opacity: 0;
    transform: translateX(-15px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}


/* =====================================
   BOX ANIMATIONS
===================================== */

@keyframes headingAppear {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes energyAppear {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes waterAppear {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes traceabilityAppear {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* =====================================
   MOBILE VIEW
===================================== */

@media (max-width: 768px) {
  .verticals {
    flex-direction: column;
    align-items: center;
  }

  /* First arrow spacing */
  .arrow-one {
    margin: 12px 0;
  }

  /* Second arrow spacing */
  .arrow-two {
    margin: 12px 0;
  }


  /* FIRST ARROW - MOBILE */
  .case-study.scroll-visible .arrow-one {
    animation: firstArrowDown 0.6s ease 0.9s both;
  }

  @keyframes firstArrowDown {
    from {
      opacity: 0;
      transform: translateY(-15px) rotate(90deg);
    }

    to {
      opacity: 1;
      transform: translateY(0) rotate(90deg);
    }
  }


  /* SECOND ARROW - MOBILE */
  .case-study.scroll-visible .arrow-two {
    animation: secondArrowDown 0.6s ease 2.2s both;
  }

  @keyframes secondArrowDown {
    from {
      opacity: 0;
      transform: translateY(-15px) rotate(90deg);
    }

    to {
      opacity: 1;
      transform: translateY(0) rotate(90deg);
    }
  }
}

.case-title {
  background-color: #590d65;
  color: white;
  padding: 20px;
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  border-radius: 8px;
}
.case-study h1{
    color: aliceblue;
}