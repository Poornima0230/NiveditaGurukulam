import "../styles/about.css";
export const About = () => {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1 data-aos="zoom-in">About Nivedita Gurukulam</h1>
          <p className="tagline" data-aos="zoom-in">
            Where Ancient Wisdom Meets Modern Excellence
          </p>
        </div>

        <div className="about-content">
          <h2 data-aos="fade-up">Our Vision</h2>
          <p data-aos="fade-up">
            Nivedita Gurukulam is a premier residential English medium school
            located in Unguturu, Krishna District, Andhra Pradesh. We are
            committed to nurturing young minds through a perfect blend of
            traditional Vedic values and contemporary education.
          </p>

          <p data-aos="fade-up">
            Inspired by the ancient Gurukulam system, we provide a holistic
            learning environment where discipline, respect, cultural pride, and
            academic excellence grow together. Our students not only excel in
            studies but also develop strong character, moral values, and
            leadership qualities.
          </p>

          <h2 data-aos="fade-up">What Makes Us Special</h2>
          <div className="features" data-aos="fade-up">
            <div className="feature-item">
              <h3>🏛️ Gurukulam Tradition</h3>
              <p>
                Modern adaptation of the ancient Indian education system with
                personalized care and guidance.
              </p>
            </div>
            <div className="feature-item">
              <h3>📚 English Medium Education</h3>
              <p>
                Quality education from Class IV onwards with strong foundation
                in English, Mathematics, Science &amp; Social Studies.
              </p>
            </div>
            <div className="feature-item">
              <h3>🌿 Vedic Values &amp; Culture</h3>
              <p>
                Daily prayers, Sanskrit, Vedic Mathematics, Yoga, and moral
                education to build strong character.
              </p>
            </div>
            <div className="feature-item">
              <h3>🏠 Safe Residential Campus</h3>
              <p>
                Secure and homely hostel facilities with nutritious food and
                round-the-clock care.
              </p>
            </div>
          </div>

          <h2 data-aos="fade-up">Our Mission</h2>
          <p data-aos="fade-up">
            To create confident, compassionate, and culturally rooted
            individuals who are ready to face the challenges of the modern world
            while remaining deeply connected to their Indian heritage.
          </p>

          <h2 data-aos="fade-up">Our Journey</h2>
          <p data-aos="fade-up">
            Established with a vision to provide value-based education, Nivedita
            Gurukulam has been shaping young lives through academic rigor and
            spiritual growth. Our new campus building stands as a symbol of our
            commitment to provide the best infrastructure along with traditional
            values.
          </p>
        </div>

        {/* Optional: Principal's Message */}
        <div className="principal-message">
          <h2 data-aos="zoom-in">Principal's Message</h2>
          <p data-aos="zoom-in">
            "At Nivedita Gurukulam, we believe every child is unique. Our goal
            is not just to impart knowledge, but to ignite curiosity, build
            character, and prepare students to become responsible citizens of
            tomorrow."
          </p>
          <p className="principal-name" data-aos="zoom-in">
            - Principal, Nivedita Gurukulam
          </p>
        </div>
      </div>
    </section>
  );
};
