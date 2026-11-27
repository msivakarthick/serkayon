import "./Architecture.css";
import { useState, useEffect, useRef } from "react";
function Architecture() {
    const [showTrace, setShowTrace] = useState(false);
    const sectionRef = useRef(null);
    const [hasEntered, setHasEntered] = useState(false);
   useEffect(() => {
  const section = sectionRef.current;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setHasEntered(true);
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
    <section ref={sectionRef} className={`architecture ${hasEntered ? "scroll-visible" : ""}`}>

      {/* Company */}
      <div className="company">
        <img
          src="/Images/company.webp"
          alt="Company"
          className="company-image"
        />

        <h1>Company</h1>
        {/* <p>One company. Multiple plants.</p> */}
      </div>

      {/* Connection line */}
      <div className="company-connector"></div>

      {/* Three plants */}
      <div className="plants">

        {/* Plant 1 */}
        <div className="plant-card plant-one">
          <img
            src="/Images/plant.jpg"
            alt="Plant 1"
          />

          <h2>Plant 1</h2>
          <p>Manufacturing Facility</p>
        </div>

        {/* Plant 2 */}
        <div className="plant-card plant-two">
          <img
            src="/Images/plant.jpg"
            alt="Plant 2"
          />

          <h2>Plant 2</h2>
          <p>Manufacturing Facility</p>
        </div>

        {/* Plant 3 */}
       <div className="plant-card plant-three">
          <img
            src="/Images/plant.jpg"
            alt="Plant 3"
          />

          <h2>Plant 3</h2>
          <p>Manufacturing Facility</p>
        </div>

      </div>
      {/* Next animation button */}
<button
  className="next-trace-button"
  onClick={() => {
    const nextState = !showTrace;
    setShowTrace(nextState);

    if (nextState) {
      setTimeout(() => {
        document.querySelector(".trace-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }}
>
  {showTrace ? "Close Traceability ↑" : "View Traceability ↓"}
</button>

{/* Second animation */}
{showTrace && (
  <div className="trace-section">
    <p className="trace-label">PRODUCT TRACEABILITY</p>

    <h2>Every output has a history.</h2>

    <p className="trace-description">
      Follow the journey from raw material to finished product.
    </p>

    <div className="trace-flow">

  {/* STEP 01 - Raw Material */}
  <div className="trace-step trace-raw">
    <span>STEP 01</span>
    <h3>Raw Material</h3>
    <p>Material Lot RM-458</p>
  </div>

  {/* Arrow 1 */}
  <div className="trace-arrow arrow-one">→</div>

  {/* STEP 02 - Batch */}
  <div className="trace-step trace-batch">
    <span>STEP 02</span>
    <h3>Batch</h3>
    <p>Batch #2601</p>
  </div>

  {/* Arrow 2 */}
  <div className="trace-arrow arrow-two">→</div>

  {/* STEP 03 - Recipe */}
  <div className="trace-step trace-recipe">
    <span>STEP 03</span>
    <h3>Recipe</h3>
    <p>Recipe R-104</p>
  </div>

  {/* Arrow 3 */}
  <div className="trace-arrow arrow-three">→</div>

  {/* STEP 04 - Production */}
  <div className="trace-step trace-production">
    <span>STEP 04</span>
    <h3>Production</h3>
    <p>Line 2 · Machine 03</p>
  </div>

  {/* Arrow 4 */}
  <div className="trace-arrow arrow-four">→</div>

  {/* STEP 05 - Output Bag */}
  <div className="trace-step trace-output">
    <span>STEP 05</span>
    <h3>Output Bag</h3>
    <p>Bag #2601-084</p>
  </div>

</div>
  </div>
)}
    </section>
  );
}

export default Architecture;






// import "./Architecture.css";
// import { useState } from "react";

// function Architecture() {
//   const [isConnected, setIsConnected] = useState(true);

//   return (
//     <section>
//       <div className="mobile-phone">
//         <div className="phone-frame">
//           <div className="phone-speaker"></div>

//           <div className="phone-screen">
//             {/* Top navigation */}
//             <div className="app-nav">
//               <button className="nav-icon">‹</button>

//               <div className="nav-title">
//                 <strong>Serkayon</strong>
//                 <span>Plant A1</span>
//               </div>

//               <button className="nav-icon">⋮</button>
//             </div>

//             {/* Alert */}
//             <div className="alert-box">
//               <div className="alert-top">
//                 <span>●</span>
//                 <strong>Plant A1, Line 2</strong>
//                 <small>{isConnected ? "now" : "offline"}</small>
//               </div>

//               <p>
//                 {isConnected
//                   ? "Line stopped. Reason not logged."
//                   : "Connection lost. Live data unavailable."}
//               </p>

//               <button
//                 className="alert-button"
//                 disabled={!isConnected}
//               >
//                 {isConnected
//                   ? "Tap to record it"
//                   : "Data unavailable"}
//               </button>
//             </div>

//             {/* Line heading */}
//             <div className="line-heading">
//               <div>
//                 <h3>Line 2 Packing</h3>
//                 <span>Production line</span>
//               </div>

//               <button
//                 type="button"
//                 className={`live-dot ${
//                   isConnected ? "connected" : "disconnected"
//                 }`}
//                 onClick={() =>
//                   setIsConnected((previous) => !previous)
//                 }
//                 aria-pressed={isConnected}
//               >
//                 <span className="connection-dot"></span>
//                 {isConnected ? "Connected" : "Disconnected"}
//               </button>
//             </div>

//             {/* Status */}
//             <div className="phone-card">
//               <div className="data-row">
//                 <span>Status</span>

//                 <strong
//                   className={
//                     isConnected
//                       ? "stopped-badge"
//                       : "disconnected-badge"
//                   }
//                 >
//                   {isConnected ? "Stopped 6 min" : "Unavailable"}
//                 </strong>
//               </div>

//               <div className="data-row">
//                 <span>Stops this shift</span>
//                 <strong>
//                   {isConnected ? "14" : "14 (last)"}
//                 </strong>
//               </div>

//               <div className="data-row">
//                 <span>Bags counted</span>
//                 <strong>
//                   {isConnected ? "1,240" : "1,240 (last)"}
//                 </strong>
//               </div>

//               <div className="data-row">
//                 <span>Motor temperature</span>

//                 <strong
//                   className={
//                     isConnected
//                       ? "normal-badge"
//                       : "disconnected-badge"
//                   }
//                 >
//                   {isConnected ? "Normal" : "Unavailable"}
//                 </strong>
//               </div>

//               <div className="data-row">
//                 <span>Batch</span>
//                 <strong>0002601</strong>
//               </div>
//             </div>

//             {/* Bottom navigation */}
//             <div className="bottom-nav">
//               <button className="bottom-nav-item active">
//                 <span>⌂</span>
//                 <small>Overview</small>
//               </button>

//               <button className="bottom-nav-item">
//                 <span>◷</span>
//                 <small>Stops</small>
//               </button>

//               <button className="bottom-nav-item">
//                 <span>▥</span>
//                 <small>Production</small>
//               </button>

//               <button className="bottom-nav-item">
//                 <span>⚙</span>
//                 <small>More</small>
//               </button>
//             </div>
//           </div>

//           <div className="home-indicator"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Architecture;