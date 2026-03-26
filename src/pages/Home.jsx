import React from "react";
import "../styles/home.css";
import Navbar from "../components/layout/Header";
// import residential from "../assets/images/residental.png";
import residential from "../assets/images/bus.jpg";
// import holistic from "../assets/images/hoilticEducation.png";
import holistic from "../assets/images/girlLittle.jpg";
// import { Gallery } from "./Gallery";
import { Admissions } from "./Admissions";
import { GalleryPreview } from "../components/ui/GalleryPreview";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 data-aos="zoom-in">Nivedita Gurukulam</h1>
          <p className="tagline" data-aos="zoom-in">
            Blending Vedic Wisdom with Modern Excellence
          </p>
          <p className="sub-tagline" data-aos="zoom-in">
            Residential English Medium School | Classes IV onwards
          </p>

          <div className="hero-buttons" data-aos="zoom-in">
            <NavLink href="admissions" className="btn primary">
              Admissions 2026–27
            </NavLink>
            <NavLink href="contact" className="btn secondary">
              Enquire Now
            </NavLink>
          </div>
        </div>
      </section>
      {/* why choose */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlight-heading">
            <h2 data-aos="zoom-in">Why Choose Nivedita Gurukulam?</h2>
            <p className="subtitle" data-aos="zoom-in">
              Discover what makes our residential gurukulam special for your
              child's future.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up">
              <div className="icon">
                {" "}
                {/* icon here */}
                <img src={holistic} alt="img" className="feature-img" />
              </div>
              <h3>Value-Based Holistic Education</h3>
              <p>
                Blending Vedic wisdom with modern English-medium learning for
                character and knowledge growth.
              </p>
            </div>

            <div className="feature-card" data-aos="fade-up">
              <div className="icon">
                <img src={residential} alt="image" className="feature-img" />
                {/* ... */}{" "}
              </div>
              <h3>Safe Residential Life</h3>
              <p>
                Comfortable hostel facilities in a peaceful, caring environment
                that feels like home.
              </p>
            </div>

            {/* Add the other 3–4 cards similarly */}
          </div>

          <a href="about" className="btn more-btn" data-aos="fade-up">
            Learn More About Us
          </a>
        </div>
      </section>

      {/* You can add more sections: activities preview, gallery teaser, etc. */}
      <GalleryPreview />

      {/* // admissions */}
      <Admissions />
    </div>
  );
};

export default Home;
