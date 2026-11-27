import "./ManyPlants.css";

function ManyPlants() {
  return (
    <section className="many-plants">
      <div className="many-plants-wrap">

        <h1>Built for companies with many plants</h1>

        <p className="many-intro">
          Start with one line. Prove it. Then add lines, plants and countries
          without changing the platform. Each person sees their own level.
        </p>

        <div className="role-table">

          <div className="role-row role-head">
            <span>Who</span>
            <span>What they see</span>
            <span>The decision it supports</span>
          </div>

          <div className="role-row">
            <span>Line supervisor</span>
            <span>Live stops and alerts for their line</span>
            <span>Fix it now</span>
          </div>

          <div className="role-row">
            <span>Plant head</span>
            <span>All lines in the plant, ranked by loss</span>
            <span>Where to send the maintenance team</span>
          </div>

          <div className="role-row">
            <span>Corporate operations</span>
            <span>All plants compared on the same measures</span>
            <span>Which plant to investigate, and whether a fix worked</span>
          </div>

        </div>

        <p className="many-note">
          Plant comparisons are fair only when output, product mix and shifts are
          accounted for. This is built into how we set each line's baseline.
          [Confirm what is live today and what is planned.]
        </p>

      </div>
    </section>
  );
}

export default ManyPlants;