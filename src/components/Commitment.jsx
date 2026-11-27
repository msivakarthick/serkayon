import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBolt,
  faGears,
  faComputer,
  faRightLong,
  faMicrochip,
  faLaptop,
  faChartLine,
  faCircleCheck,
  faBullseye,
  faGear,
  faSackDollar,
  faGaugeHigh,
  faCalendarCheck,
  faLeaf,
  faPeopleGroup,
  faShieldHalved,
  faCloudArrowDown,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import "./Commitment.css";

function Commitment() {
  return (
    <section className="commitment-section">
      <div className="commitment-container">

        {/* Heading */}
        <div className="commitment-heading">
          <p className="commitment-label">OUR COMMITMENT</p>

          <h2>
            From Operational Data to
            <span>ESG &amp; Carbon Capture</span>
          </h2>

          <p className="commitment-intro">
            We turn your industrial data into operational intelligence that
            drives resource efficiency, ESG performance and a lower carbon
            footprint.
          </p>
        </div>

        {/* Complete flow */}
        <div className="commitment-flow">

          {/* 1. Industrial Operations */}
          <div className="industrial-operations">
            <div className="industrial-title">
              <FontAwesomeIcon icon={faBullseye} />
              <h3>Industrial Operations</h3>
            </div>

            <div className="industrial-item">
              <div className="industrial-item-icon">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <div>
                <h4>Energy Monitoring</h4>
                <p>Power, consumption, load and efficiency</p>
              </div>
            </div>

            <div className="industrial-item">
              <div className="industrial-item-icon">
                <FontAwesomeIcon icon={faGears} />
              </div>
              <div>
                <h4>Machine Data</h4>
                <p>Performance, utilisation and health</p>
              </div>
            </div>

            <div className="industrial-item">
              <div className="industrial-item-icon">
                <FontAwesomeIcon icon={faComputer} />
              </div>
              <div>
                <h4>Process Monitoring</h4>
                <p>Production, material and resource use</p>
              </div>
            </div>
          </div>

          <div className="flow-arrow">
            <FontAwesomeIcon icon={faRightLong} />
          </div>

          {/* 2. Intelligence Layer */}
          <div className="intelligence-box">
            <div className="intelligence-title">
              <FontAwesomeIcon icon={faMicrochip} />
              <h3>Intelligence Layer</h3>
            </div>

            <div className="intelligence-laptop">
              <FontAwesomeIcon icon={faLaptop} />
            </div>

            <div className="intelligence-content">
              <h4><FontAwesomeIcon icon={faCircleCheck} /> Data Integration</h4>
              <h4><FontAwesomeIcon icon={faCircleCheck} /> Analytics &amp; AI</h4>
              <h4><FontAwesomeIcon icon={faCircleCheck} /> Real-time Insights</h4>
              <h4><FontAwesomeIcon icon={faCircleCheck} /> Actionable Recommendations</h4>
            </div>
          </div>

          <div className="flow-arrow">
            <FontAwesomeIcon icon={faRightLong} />
          </div>

          {/* 3. Operational Outcomes */}
          <div className="outcomes-box">
            <div className="outcomes-title">
              <FontAwesomeIcon icon={faChartLine} />
              <h3>Operational Outcomes</h3>
            </div>

            <div className="outcomes-content">
              <h4><FontAwesomeIcon icon={faGear} /> Energy Efficiency</h4>
              <h4><FontAwesomeIcon icon={faSackDollar} /> Reduced Operational Costs</h4>
              <h4><FontAwesomeIcon icon={faGaugeHigh} /> Improved Productivity</h4>
              <h4><FontAwesomeIcon icon={faCalendarCheck} /> ESG &amp; Carbon Reduction</h4>
            </div>
          </div>

          <div className="flow-arrow">
            <FontAwesomeIcon icon={faRightLong} />
          </div>

          {/* 4. ESG circle */}
          <div className="esg-circle">
            <div className="esg-inner">
              <div className="esg-icon">
                <FontAwesomeIcon icon={faLeaf} />
              </div>

              <h2>ESG</h2>
              <h4>Performance &amp;</h4>
              <h4>Carbon Capture</h4>
              <p>Decarbonisation</p>
            </div>
          </div>

        </div>

        {/* Connected value chain */}
        <div className="connected-value-chain">

          <div className="value-chain-heading">
            <span>The Connected Value Chain</span>
          </div>

          <div className="commitment-values">

            <div className="commitment-value">
              <div className="value-icon">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <div className="value-box">
                <h3>Environment (E)</h3>
                <p>Lower emissions, better energy and resource efficiency</p>
              </div>
            </div>

            <div className="commitment-value">
              <div className="value-icon">
                <FontAwesomeIcon icon={faPeopleGroup} />
              </div>
              <div className="value-box">
                <h3>Social (S)</h3>
                <p>Safer, more reliable and compliant operations</p>
              </div>
            </div>

            <div className="commitment-value">
              <div className="value-icon">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div className="value-box">
                <h3>Governance (G)</h3>
                <p>Data-driven, transparent and accountable operations</p>
              </div>
            </div>

            <div className="commitment-value">
              <div className="value-icon">
                <FontAwesomeIcon icon={faCloudArrowDown} />
              </div>
              <div className="value-box">
                <h3>Carbon Capture</h3>
                <p>
                  Identify, measure and reduce emissions through efficiency and
                  process intelligence
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Our belief */}
        <div className="commitment-belief">
          <div className="belief-icon">
            <FontAwesomeIcon icon={faLightbulb} />
          </div>

          <p>
            <span className="belief-label">Our Belief :</span>
            Industrial progress should create value for both business and the
            environment.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Commitment;
