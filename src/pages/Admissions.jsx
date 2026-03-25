import "../styles/admissions.css";

export const Admissions = () => {
  return (
    <section className="admissions-section">
      <div className="container">
        <div className="admission-heading">
          <div className="admissions-badge" data-aos="zoom-in">
            Admissions Open 2026–27
          </div>
          <h2 data-aos="zoom-in">
            Join Nivedita Gurukulam – Shape a Bright Future Rooted in Values
          </h2>
          <p className="note" data-aos="zoom-in">
            Limited seats – Early enquiry recommended! Visit our campus or
            contact for prospectus/details.
          </p>
        </div>

        <div className="admissions-content">
          <div className="info-box">
            <h3 data-aos="fade-up">Key Details</h3>
            <ul data-aos="fade-up">
              <li>
                <strong>Classes:</strong> From Class IV onwards (Residential
                Gurukulam)
              </li>
              <li>
                <strong>Admission Process:</strong> Merit-based – Admission Test
                + Interview
              </li>
              <li>
                <strong>Class IV Entry:</strong> Through APGPCET (Common
                Entrance Test)
              </li>
              <li>
                <strong>Eligibility:</strong> Students currently in Class III
                for Class IV admission
              </li>
              <li>
                <strong>Test Venue:</strong> Nivedita Gurukulam, Near
                Gannavaram, Unguturu, Krishna District
              </li>
              <li>
                <strong>Contact Immediately:</strong> For dates, fees, syllabus
                & application
              </li>
            </ul>
          </div>

          <div className="cta-box" data-aos="fade-up">
            <h3 data-aos="fade-up">Enquire or Apply Today!</h3>
            <p data-aos="fade-up">
              Call or WhatsApp us – We're here to guide you every step.
            </p>

            <div className="cta-buttons" data-aos="fade-up">
              <a href="tel:+918341153131" className="btn call-btn">
                Call: 83411 53131
              </a>
              <a href="tel:+919666819257" className="btn call-btn">
                Call: 96668 19257
              </a>
              <a
                href="https://wa.me/918341153131?text=Hi%2C%20I'm%20interested%20in%20admissions%20for%202026-27%20at%20Nivedita%20Gurukulam"
                className="btn whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Enquiry
              </a>
              <a href="/contact" className="btn enquiry-btn">
                Fill Enquiry Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
