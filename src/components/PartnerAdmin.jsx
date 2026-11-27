import "./PartnerAdmin.css";

function PartnerAdmin() {
  return (
    <section className="partner-admin">
      <div className="partner-wrap">

        <h1>System integrators run every subscription from one admin profile</h1>

        <p className="partner-intro">
          Your customers, their plants and lines, and what each one is subscribed to,
          all in one place. Click the filters to try it.
        </p>

        <div className="admin-panel">

          <div className="admin-header">
            <span>Serkayon Partner Admin</span>
            <span>Your company name</span>
          </div>

          <div className="admin-content">

            <div className="admin-stats">

              <div className="admin-stat">
                <strong>6</strong>
                <span>customers</span>
              </div>

              <div className="admin-stat">
                <strong>11</strong>
                <span>plants</span>
              </div>

              <div className="admin-stat">
                <strong>24</strong>
                <span>lines subscribed</span>
              </div>

              <div className="admin-stat">
                <strong>3</strong>
                <span>renewals due</span>
              </div>

            </div>

            <div className="admin-filters">
              <button className="filter active">All</button>
              <button className="filter">Renewal due</button>
              <button className="filter">Has alerts</button>
            </div>

            <div className="admin-table">

              <div className="admin-row admin-table-head">
                <span>Customer</span>
                <span>Plant</span>
                <span>Lines</span>
                <span>Status</span>
                <span>Renews</span>
                <span></span>
              </div>

              <div className="admin-row">
                <span>Customer 1</span>
                <span>Plant A1</span>
                <span>3</span>
                <span><b className="active-status">Active</b></span>
                <span>12 Jan</span>
                <a href="#">Add line</a>
              </div>

              <div className="admin-row">
                <span>Customer 1</span>
                <span>Plant A2</span>
                <span>2</span>
                <span><b className="alert-status">2 alerts</b></span>
                <span>12 Jan</span>
                <a href="#">Open</a>
              </div>

              <div className="admin-row">
                <span>Customer 2</span>
                <span>Plant B1</span>
                <span>5</span>
                <span><b className="renew-status">Renewal due</b></span>
                <span>30 Oct</span>
                <a href="#">Renew</a>
              </div>

              <div className="admin-row">
                <span>Customer 3</span>
                <span>Plant C1</span>
                <span>4</span>
                <span><b className="active-status">Active</b></span>
                <span>02 Mar</span>
                <a href="#">Add line</a>
              </div>

              <div className="admin-row">
                <span>Customer 4</span>
                <span>Plant D1</span>
                <span>2</span>
                <span><b className="renew-status">Renewal due</b></span>
                <span>05 Nov</span>
                <a href="#">Renew</a>
              </div>

            </div>

            <p className="admin-note">
              Illustrative data. [Confirm which admin actions are live today,
              such as add or pause a line, assign users, view invoices.]
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default PartnerAdmin;