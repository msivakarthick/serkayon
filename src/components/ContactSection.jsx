// import "./ContactSection.css";

// function ContactSection() {
//   return (
//     <section className="contact-section">
//       <div className="contact-wrap">

//         <div className="contact-content">

//           <div className="contact-info">
//             <p className="contact-eyebrow">GET IN TOUCH</p>

//             <h1>
//               Tell us about your plants or your customers
//             </h1>

//             <p className="contact-intro">
//               Integrators and OEMs: which plants do you serve?
//               Plant owners: which lines would you want to see first?
//               We reply within [X] working days.
//             </p>

//             <a
//   className="email-button"
//   href="https://mail.google.com/mail/?view=cm&fs=1&to=alfin@serkayon.com"
//   target="_blank"
//   rel="noreferrer"
// >
//   Email alfin@serkayon.com
// </a>

//             <p className="company-name">
//               Serkayon Industrial Intelligence Pvt Ltd
//             </p>

//             <p className="contact-phone">
//               Chennai and Trichy, India.{" "}
//               <a href="tel:+918870288649">
//                 +91 88702 88649
//               </a>
//             </p>
//           </div>

//         </div>


//         {/* Locations */}

//         <div className="locations">

//           {/* R&D Centre */}

//           <div className="location-card">

//             <div className="location-heading">
//               <div>
//                 <p className="location-label">R&D CENTRE</p>

//                 <h2>R&D Centre</h2>
//               </div>

//               <span className="location-icon">⌖</span>
//             </div>

//             <p className="address">
//               10, Thilakar St,<br />
//               Gandhi Nagar, East Tambaram,<br />
//               Tambaram, Tamil Nadu – 600059
//             </p>

//             <div className="map-wrapper">
//               <iframe
//                 title="Serkayon R&D Centre"
//                 src="https://www.google.com/maps?q=10%2C%20Thilakar%20St%2C%20Gandhi%20Nagar%2C%20East%20Tambaram%2C%20Tambaram%2C%20Tamil%20Nadu%20600059&output=embed"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>

//             <a
//               className="directions-link"
//               href="https://www.google.com/maps/search/?api=1&query=10%2C%20Thilakar%20St%2C%20Gandhi%20Nagar%2C%20East%20Tambaram%2C%20Tambaram%2C%20Tamil%20Nadu%20600059"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Get directions →
//             </a>

//           </div>


//           {/* Corporate Head Office */}

//           <div className="location-card">

//             <div className="location-heading">
//               <div>
//                 <p className="location-label">CORPORATE HEAD OFFICE</p>

//                 <h2>Corporate Head Office</h2>
//               </div>

//               <span className="location-icon">⌖</span>
//             </div>

//             <p className="address">
//               No. 18, Thippiran Thotti Street,<br />
//               Clock Tower,<br />
//               Tiruchirappalli, Tamil Nadu – 620008
//             </p>

//             <div className="map-wrapper">
//               <iframe
//                 title="Serkayon Corporate Head Office"
//                 src="https://www.google.com/maps?q=No.%2018%2C%20Thippiran%20Thotti%20Street%2C%20Clock%20Tower%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620008&output=embed"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>

//             <a
//               className="directions-link"
//               href="https://www.google.com/maps/search/?api=1&query=No.%2018%2C%20Thippiran%20Thotti%20Street%2C%20Clock%20Tower%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620008"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Get directions →
//             </a>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default ContactSection;


import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-wrap">

        {/* Contact information */}
        <div className="contact-content">
          <div className="contact-info">

            <p className="contact-eyebrow">
              GET IN TOUCH
            </p>

            <h1>
              Tell us about your plants or your customers
            </h1>

            <p className="contact-intro">
              Integrators and OEMs: which plants do you serve?
              Plant owners: which lines would you want to see first?
              We reply within [X] working days.
            </p>

            <a
              className="email-button"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alfin@serkayon.com"
              target="_blank"
              rel="noreferrer"
            >
              Email alfin@serkayon.com
            </a>

            <p className="company-name">
              Serkayon Industrial Intelligence Pvt Ltd
            </p>

            <p className="contact-phone">
              Chennai and Trichy, India.{" "}
              <a href="tel:+918870288649">
                +91 88702 88649
              </a>
            </p>

          </div>
        </div>

        {/* Office locations */}
        <div className="locations">

          {/* R&D Centre */}
          <div className="location-card">

            <div className="location-heading">
              <div>
                <p className="location-label">
                  R&D CENTRE
                </p>

                <h2>R&D Centre</h2>
              </div>

              <a
                className="location-icon"
                href="https://www.google.com/maps/search/?api=1&query=10%2C%20Thilakar%20St%2C%20Gandhi%20Nagar%2C%20East%20Tambaram%2C%20Tambaram%2C%20Tamil%20Nadu%20600059"
                target="_blank"
                rel="noreferrer"
                aria-label="Open R&D Centre in Google Maps"
                title="View location in Google Maps"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </a>
            </div>

            <p className="address">
              10, Thilakar St,
              <br />
              Gandhi Nagar, East Tambaram,
              <br />
              Tambaram, Tamil Nadu – 600059
            </p>

            <a
              className="location-link"
              href="https://www.google.com/maps/search/?api=1&query=10%2C%20Thilakar%20St%2C%20Gandhi%20Nagar%2C%20East%20Tambaram%2C%20Tambaram%2C%20Tamil%20Nadu%20600059"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps ↗
            </a>

          </div>

          {/* Corporate Head Office */}
          <div className="location-card">

            <div className="location-heading">
              <div>
                <p className="location-label">
                  CORPORATE HEAD OFFICE
                </p>

                <h2>Corporate Head Office</h2>
              </div>

              <a
                className="location-icon"
                href="https://www.google.com/maps/search/?api=1&query=No.%2018%2C%20Thippiran%20Thotti%20Street%2C%20Clock%20Tower%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620008"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Corporate Head Office in Google Maps"
                title="View location in Google Maps"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </a>
            </div>

            <p className="address">
              No. 18, Thippiran Thotti Street,
              <br />
              Clock Tower,
              <br />
              Tiruchirappalli, Tamil Nadu – 620008
            </p>

            <a
              className="location-link"
              href="https://www.google.com/maps/search/?api=1&query=No.%2018%2C%20Thippiran%20Thotti%20Street%2C%20Clock%20Tower%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620008"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps ↗
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;