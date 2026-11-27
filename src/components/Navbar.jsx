
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });

      setContactOpen(false);

      setAlertData({
        type: "success",
        title: "Thank You!",
        message: "Your enquiry has been submitted successfully.",
      });

    } catch (error) {
      console.error("Email Status:", error.status);
      console.error("Email Error:", error.text);

      setAlertData({
        type: "error",
        title: "Oops! Something went wrong",
        message: "Your enquiry could not be submitted. Please try again.",
      });

    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <header className="site-header">
        <div className="site-nav">
          <img src="./Images/serkayon_logo.jpg" alt="Serkayon Logo" />

          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={menuOpen ? "site-nav-links open" : "site-nav-links"}>
            <a href="#PlantNetworkVisual" onClick={closeMenu}>Home</a>
            <a href="#PlatformPreview" onClick={closeMenu}>Platform</a>
            <a href="#ScrollCards" onClick={closeMenu}>Industries</a>
            <a href="#TechnologyProof" onClick={closeMenu}>Partners</a>
            <a href="#About" onClick={closeMenu}>About</a>

            <button
              className="nav-cta"
              type="button"
              onClick={() => {
                closeMenu();
                setContactOpen(true);
              }}
            >
              Talk to Serkayon
              <FontAwesomeIcon icon={faArrowRight} className="talk-btn" />
            </button>
          </nav>
        </div>
      </header>

      {contactOpen && (
        <div
          className="contact-overlay"
          onClick={() => !loading && setContactOpen(false)}
        >
          <div
            className="contact-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="contact-close"
              type="button"
              disabled={loading}
              onClick={() => setContactOpen(false)}
            >
              &times;
            </button>

            <h2>Talk to Serkayon</h2>

            <p className="contact-description">
              Let's discuss how Serkayon can help your business.
              Share your requirements and our team will connect with you.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={formData.user_name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email Address"
                value={formData.user_email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      {alertData && (
        <div className="custom-alert-overlay">
          <div className="custom-alert-popup">
            <div
              className={`custom-alert-icon ${
                alertData.type === "success" ? "success" : "error"
              }`}
            >
              {alertData.type === "success" ? "✓" : "!"}
            </div>

            <h2>{alertData.title}</h2>

            <p>{alertData.message}</p>

            <button
              type="button"
              className="custom-alert-button"
              onClick={() => setAlertData(null)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
