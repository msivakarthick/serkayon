
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faKey,
  faSitemap,
  faMobileScreenButton,
  faCloud,
  faSliders,
  faTowerBroadcast,
  faBuilding,
  faIndustry,
  faGears,
  faTemperatureHalf,
  faGaugeHigh,
  faWaveSquare,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

import "./Serkayonarchitecture.css";

// Reusable card
function Card({ icon, children, row }) {
  return (
    <div className={`sk-card ${row ? "sk-card-row" : ""}`}>
      <FontAwesomeIcon icon={icon} className="sk-card-icon" />
      <span>{children}</span>
    </div>
  );
}

// Reusable left label
function Label({ icon, title, text }) {
  return (
    <div className="sk-lbl">
      <div className="sk-ico">
        <FontAwesomeIcon icon={icon} />
      </div>

      <div className="sk-label-text">
        <b>{title}</b>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default function SerkayonArchitecture() {
  return (
    <section className="sk-root">
      <div className="sk-wrap">

        <h1>From sensor to boardroom — one connected platform</h1>

        <div className="sk-logo">SERKAYON</div>
        <div className="sk-vline"></div>

        {/* LICENSING */}

        <div className="sk-band sk-partner-band">

          <Label
            icon={faKey}
            title="LICENSING"
            text="Subscription basis control"
          />

          <div className="sk-pill">
            <FontAwesomeIcon icon={faSitemap} />

            <div>
              <b>OEM / System Integrators</b>
              <span>Deploy, control &amp; scale the platform</span>
            </div>
          </div>

        </div>

        {/* COMPANIES */}

        <div className="sk-band sk-band-companies">
          <Label
            icon={faMobileScreenButton}
            title="COMPANIES"
            text="Mobile Application"
          />

          <div className="sk-cols">

            {["A", "B", "C"].map((name) => (
              <div className="sk-col single" key={name}>
                <Card icon={faBuilding} row>
                  <span>
                    Company {name}
                    <br />
                    Manufacturer
                  </span>
                </Card>
              </div>
            ))}
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
        </div>

        {/* PLANTS */}

        <div className="sk-band sk-band-plants">
          <Label
            icon={faCloud}
            title="PLANTS"
            text="Cloud / Edge based monitoring & traceability for auditing & ESG"
          />

          <div className="sk-cols">

            <div className="sk-col single">
              <Card icon={faIndustry}>Plant A1</Card>
            </div>

            <div className="sk-col multi" style={{ "--count": 2 }}>
              <Card icon={faIndustry}>Plant B1</Card>
              <Card icon={faIndustry}>Plant B2</Card>
            </div>

            <div className="sk-col multi" style={{ "--count": 3 }}>
              <Card icon={faIndustry}>Plant C1</Card>
              <Card icon={faIndustry}>Plant C2</Card>
              <Card icon={faIndustry}>Plant C3</Card>
            </div>
            <div className="line3"></div>
            <div className="line4"></div>
            <div className="line5"></div>
          </div>
        </div>

        {/* PRODUCTION LINES */}

        <div className="sk-band sk-band-lines">

          <Label
            icon={faSliders}
            title="PRODUCTION LINES"
            text="Control over the batch change"
          />

          <div className="sk-cols">

            <div className="sk-col multi" style={{ "--count": 2 }}>
              <Card icon={faGears}>Line 1<br />Mixing</Card>
              <Card icon={faGears}>Line 2<br />Mixing</Card>
            </div>

            <div className="sk-col empty"></div>

            <div className="sk-col multi" style={{ "--count": 3 }}>
              <Card icon={faGears}>Line 1<br />Mixing</Card>
              <Card icon={faGears}>Line 2<br />Mixing</Card>
              <Card icon={faGears}>Line 3<br />Mixing</Card>
            </div>

          </div>
          <div className="line6"></div>
          <div className="line7"></div>
        </div>

        {/* SENSORS */}

        <div className="sk-band sk-band-sensors">

          <Label
            icon={faTowerBroadcast}
            title="SENSORS"
            text="Live data capture at the source"
          />

          <div className="sk-cols">

            <div className="sk-col multi" style={{ "--count": 2 }}>
              <Card icon={faTemperatureHalf}>Temperature</Card>
              <Card icon={faGaugeHigh}>Pressure</Card>
            </div>

            <div className="sk-col empty"></div>

            <div className="sk-col multi sk-sensor-left" style={{ "--count": 4 }}>
              <Card icon={faTemperatureHalf} className="size">Temperature</Card>
              <Card icon={faGaugeHigh}  className="size">Pressure</Card>
              <Card icon={faWaveSquare} className="size">Vibration</Card>
              <Card icon={faDroplet}>Flow</Card>
            </div>

          </div>
          <div className="line8"></div>
          <div className="line9"></div>
        </div>

        {/* FOOTER */}

        <div className="sk-foot">
          <div>Real-time Visibility</div>
          <div>ESG &amp; audit Traceability</div>
          <div>Batch-level control</div>
          <div>Mobile-first</div>
        </div>

      </div>
    </section>
  );
}
