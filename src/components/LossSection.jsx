// import "./LossSection.css";
import "./LossSection.css";

function LossSection() {
  return (
    <section id="how-it-works" className="loss-section">
      <div className="wrap">
        <p className="eyebrow">THE PROBLEM</p>

        <h2>Three losses plants find out about too late</h2>

        <p className="section-intro">
          Most plants still rely on paper logs and end-of-day reports.
          By the time a problem shows up, the production, energy or audit
          evidence is already gone.
        </p>

        <div className="grid3">
          <div className="card">
            <h3>Stops and slow running</h3>

            <p className="loss">
              Short stops and reduced speed go unrecorded.
            </p>

            <p>
              Operators note the big breakdowns. The five-minute jams
              never reach the shift report, so no one knows what they
              add up to.
            </p>

            <div className="see">
              <b>What Serkayon shows</b>

              <p>
                Stops per line per shift, how long each lasted, and which
                line is slowest.
              </p>
            </div>
          </div>

          <div className="card">
            <h3>Idle energy and water</h3>

            <p className="loss">
              Utilities keep running when production is idle.
            </p>

            <p>
              Motors, pumps and other equipment can continue consuming
              resources when no useful production is happening.
            </p>

            <div className="see">
              <b>What Serkayon shows</b>

              <p>
                Unexpected consumption patterns and periods when
                equipment runs without production.
              </p>
            </div>
          </div>

          <div className="card">
            <h3>Batches you cannot trace</h3>

            <p className="loss">
              Production records are incomplete or on paper.
            </p>

            <p>
              When an audit or quality issue arrives, teams struggle
              to connect the batch, production line and machine history.
            </p>

            <div className="see">
              <b>What Serkayon shows</b>

              <p>
                A clearer digital production history to support
                investigation and traceability.
              </p>
            </div>
          </div>
        </div>

        <p className="chat">
          An alert says something is abnormal. A person still checks the
          cause. Serkayon does not claim that every anomaly is waste.
        </p>
      </div>
    </section>
  );
}

export default LossSection;
// function LossSection() {
//   return (
//     <section id="how-it-works" className="loss-section">
//       <div className="wrap">
//         <p className="eyebrow">HOW IT WORKS</p>

//         <h2>Three ways plants lose money</h2>

//         <p className="section-intro">
//           Small problems become expensive when nobody sees them early.
//         </p>

//         <div className="grid3">
//           <div className="card">
//             <span className="card-number">01</span>

//             <h3>Unexpected downtime</h3>

//             <p>
//               Machines stop and production waits.
//             </p>

//             <p className="loss">
//               Lost production time
//             </p>
//           </div>

//           <div className="card">
//             <span className="card-number">02</span>

//             <h3>Energy waste</h3>

//             <p>
//               Equipment consumes energy without producing.
//             </p>

//             <p className="loss">
//               Unnecessary energy cost
//             </p>
//           </div>

//           <div className="card">
//             <span className="card-number">03</span>

//             <h3>Quality problems</h3>

//             <p>
//               Problems are discovered after production.
//             </p>

//             <p className="loss">
//               Wasted material and output
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default LossSection;