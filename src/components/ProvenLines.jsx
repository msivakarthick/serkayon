import "./ProvenLines.css";

function ProvenLines() {
  return (
    <section className="proven-lines">
      <div className="proven-wrap">

        <h1>Proven on poultry feed lines</h1>

        <div className="proven-stats">

          <div>
            <strong>2</strong>
            <span>feed manufacturing plants</span>
          </div>

          <div>
            <strong>5</strong>
            <span>production lines</span>
          </div>

          <div>
            <strong>30+</strong>
            <span>sensors</span>
          </div>

          <div>
            <strong>5 days</strong>
            <span>second deployment</span>
          </div>

        </div>

        <p className="proven-text">
          Both plants moved from paper logs and manual batch tracking to a
          live dashboard across both plants, a mobile app on the floor,
          and batch records ready for audit. Measured result:
          [state exactly what was saved, for whom, over what period.]
        </p>

        {/* <div className="proven-placeholder">
          <span>
            Photo or dashboard screenshot (get the customer's permission first).
          </span>
        </div> */}

      </div>
    </section>
  );
}

export default ProvenLines;