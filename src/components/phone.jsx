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

// export default Phone;

import "./Architecture.css";
import { useState } from "react";

function Phone() {
  const [isConnected, setIsConnected] = useState(true);

  return (
    <section>
      <div className="mobile-phone">
        <div className="phone-frame">
          <div className="phone-speaker"></div>

          <div className="phone-screen">
            {/* Top navigation */}
            <div className="app-nav">
              <button className="nav-icon">‹</button>

              <div className="nav-title">
                <strong>Serkayon</strong>
                <span>Plant A1</span>
              </div>

              <button className="nav-icon">⋮</button>
            </div>

            {/* Alert */}
            <div className="alert-box">
              <div className="alert-top">
                <span>●</span>
                <strong>Plant A1, Line 2</strong>
                <small>{isConnected ? "now" : "offline"}</small>
              </div>

              <p>
                {isConnected
                  ? "Line stopped. Reason not logged."
                  : "Connection lost. Live data unavailable."}
              </p>

              <button
                className="alert-button"
                disabled={!isConnected}
              >
                {isConnected
                  ? "Tap to record it"
                  : "Data unavailable"}
              </button>
            </div>

            {/* Line heading */}
            <div className="line-heading">
              <div>
                <h3>Line 2 Packing</h3>
                <span>Production line</span>
              </div>

              <button
                type="button"
                className={`live-dot ${
                  isConnected ? "connected" : "disconnected"
                }`}
                onClick={() =>
                  setIsConnected((previous) => !previous)
                }
                aria-pressed={isConnected}
              >
                <span className="connection-dot"></span>
                {isConnected ? "Connected" : "Disconnected"}
              </button>
            </div>

            {/* Status */}
            <div className="phone-card">
              <div className="data-row">
                <span>Status</span>

                <strong
                  className={
                    isConnected
                      ? "stopped-badge"
                      : "disconnected-badge"
                  }
                >
                  {isConnected ? "Stopped 6 min" : "Unavailable"}
                </strong>
              </div>

              <div className="data-row">
                <span>Stops this shift</span>
                <strong>
                  {isConnected ? "14" : "14 (last)"}
                </strong>
              </div>

              <div className="data-row">
                <span>Bags counted</span>
                <strong>
                  {isConnected ? "1,240" : "1,240 (last)"}
                </strong>
              </div>

              <div className="data-row">
                <span>Motor temperature</span>

                <strong
                  className={
                    isConnected
                      ? "normal-badge"
                      : "disconnected-badge"
                  }
                >
                  {isConnected ? "Normal" : "Unavailable"}
                </strong>
              </div>

              <div className="data-row">
                <span>Batch</span>
                <strong>0002601</strong>
              </div>
            </div>

            {/* Bottom navigation */}
            <div className="bottom-nav">
              <button className="bottom-nav-item active">
                <span>⌂</span>
                <small>Overview</small>
              </button>

              <button className="bottom-nav-item">
                <span>◷</span>
                <small>Stops</small>
              </button>

              <button className="bottom-nav-item">
                <span>▥</span>
                <small>Production</small>
              </button>

              <button className="bottom-nav-item">
                <span>⚙</span>
                <small>More</small>
              </button>
            </div>
          </div>

          <div className="home-indicator"></div>
        </div>
      </div>
    </section>
  );
}

export default Phone;