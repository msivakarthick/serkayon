import "./ManagerSection.css";
function ManagerSection() {
  return (
    <section className="Manager">
      <h1>What a manager sees instead</h1>

      <p>
        NOt a wall of charts. Specific alerts that say where to look first.
        These are illustrative examples, not customer data.
      </p>

      <div className="plant1">
        <div className="dot"></div>

        <p>Plant A1, Line 2 stopped 14 times this shift</p>

        <p>Total 52 minutes, none logged by operators</p>
      </div>

      <div className="plant1">
        <div className="dot"></div>

        <p>Plant A2 is drawing power with no production</p>

        <p>Idle since 22:10, on three machines</p>
      </div>

      <div className="plant1">
        <div className="dot"></div>

        <p>
          Batch 0002601: conditioning temperature went out of range at 14:10
        </p>

        <p>Affected output traced to bags 140 to 168</p>
      </div>
    </section>
  );
}

export default ManagerSection;