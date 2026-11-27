
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <section className="error-page">
      <div className="error-container">

        <div className="error-image">
          <img
            src="/Images/error.jpg"
            alt="404 Page Not Found"
          />
        </div>

        <div className="error-content">
          <span className="error-label">PAGE NOT FOUND</span>

          <h1>
            Oops! <span>Lost Your Way?</span>
          </h1>

          <p>
           The page you requested could not be found. Return to the homepage.
          </p>

          <div className="error-buttons">
            <button
              className="home-btn"
              onClick={() => navigate("/")}
            >
              Back to Home <span>→</span>
            </button>

            <button
              className="back-btn"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>

          <div className="error-brand">
            SERKAYON <span>INDUSTRIAL INTELLIGENCE</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ErrorPage;
