import "./Integrators.css";

function Integrators() {
  return (
    <section className="integrators">
      <div className="integrators-wrap">

        <h1>For system integrators and OEMs</h1>

        <p className="integrators-intro">
          You already serve the plants. Serkayon gives you a monitoring and
          traceability offer you can add to what you sell, without building
          a platform yourself.
        </p>

        <div className="integrator-cards">

          <div className="integrator-card">
            <h2>What you get</h2>

            <ul>
              <li>
                A ready platform: cloud dashboard, a mobile app for every
                role, multi-plant structure.
              </li>

              <li>
                One admin profile to manage all your customers' subscriptions.
              </li>

              <li>
                Standard deployment steps your engineers can repeat.
              </li>

              <li>
                Recurring revenue: one-time or subscription licence.
                [Add partner revenue share.]
              </li>

              <li>
                Your customer relationship stays with you.
              </li>
            </ul>
          </div>

          <div className="integrator-card">
            <h2>Who does what</h2>

            <ul>
              <li>
                You: sell, install the edge device, and give first-line support.
              </li>

              <li>
                Serkayon: the platform, updates, and second-line support.
                [Confirm support terms.]
              </li>

              <li>
                Target: partners deploy without Serkayon engineers on site.
              </li>

              <li>
                Not included: custom software built for one customer.
              </li>
            </ul>
          </div>

        </div>

        <h2 className="deployment-title">Your first deployment</h2>

        <div className="deployment-steps">

          <div className="deployment-step">
            <span>Step 1</span>
            <p>Pick one line at a customer plant.</p>
          </div>

          <div className="deployment-step">
            <span>Step 2</span>
            <p>
              Fit sensors and the edge device. A second feed will
              fill took 5 days, hardware and software.
            </p>
          </div>

          <div className="deployment-step">
            <span>Step 3</span>
            <p>Go live on the dashboard and app.</p>
          </div>

          <div className="deployment-step">
            <span>Step 4</span>
            <p>
              Review the first month's alerts with the customer,
              then expand to more lines.
            </p>
          </div>

        </div>

        <button className="partner-button">
          Become a partner
        </button>

      </div>
    </section>
  );
}

export default Integrators;