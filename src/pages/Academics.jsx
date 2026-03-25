import React from "react";
import "../styles/acedamics.css";

export const Academics = () => {
  return (
    <div className="academics-page">
      <div className="container">
        <div className="page-header">
          <h1 data-aos="zoom-in">Academics</h1>
          <p data-aos="zoom-in">Blending Vedic Wisdom with Modern Education</p>
        </div>

        <section className="intro" data-aos="fade-up">
          <h2 data-aos="fade-up">Our Academic Philosophy</h2>
          <p data-aos="fade-up">
            At Nivedita Gurukulam, we follow a unique blend of traditional
            Indian education system and modern curriculum. We focus on overall
            development — intellectual, emotional, physical, and spiritual
            growth of every child.
          </p>
        </section>

        {/* Classes Offered */}
        <div className="cls-cur">
          <section className="classes-section">
            <h2 data-aos="fade-up">Classes Offered</h2>
            <div className="classes-grid" data-aos="fade-up">
              <div className="class-card">Class IV</div>
              <div className="class-card">Class V</div>
              <div className="class-card">Class VI</div>
              <div className="class-card">Class VII</div>
              <div className="class-card">Class VIII</div>
              <div className="class-card">Class IX</div>
              <div className="class-card">Class X</div>
            </div>
            <p className="note" data-aos="fade-up">
              * Residential facility available from Class IV onwards
            </p>
          </section>

          {/* Curriculum */}
          <section className="curriculum">
            <h2 data-aos="fade-up">Our Curriculum</h2>
            <div className="curriculum-grid">
              <div className="curriculum-card" data-aos="fade-up">
                <h3>English Medium</h3>
                <p>
                  Strong focus on English language and communication skills with
                  CBSE/State Board pattern.
                </p>
              </div>
              <div className="curriculum-card" data-aos="fade-up">
                <h3>Vedic &amp; Value Education</h3>
                <p>
                  Sanskrit, Vedic Mathematics, Moral Science, Yoga and daily
                  prayers.
                </p>
              </div>
              <div className="curriculum-card" data-aos="fade-up">
                <h3>Core Subjects</h3>
                <p>
                  Mathematics, Science, Social Studies, Telugu, English, and
                  Computer Science.
                </p>
              </div>
              <div className="curriculum-card" data-aos="fade-up">
                <h3>Holistic Development</h3>
                <p>Arts, Crafts, Music, Dance, Sports and Life Skills.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Special Features */}
        <section className="special-features">
          <h2 data-aos="fade-up">Special Features of Our Academics</h2>
          <ul>
            <li data-aos="fade-up">
              Small batch size for personalized attention
            </li>
            <li data-aos="fade-up">Activity-based and experiential learning</li>
            <li data-aos="fade-up">
              Regular assessment and parent-teacher meetings
            </li>
            <li data-aos="fade-up">
              Focus on conceptual clarity rather than rote learning
            </li>
            <li data-aos="fade-up">
              Integration of technology with traditional teaching
            </li>
            <li data-aos="fade-up">Vedic Maths and Mental Ability Training</li>
            <li data-aos="fade-up">
              Special coaching for competitive exams (from Class 8 onwards)
            </li>
          </ul>
        </section>

        {/* Teaching Methodology */}
        <section className="methodology">
          <h2 data-aos="fade-up">Our Teaching Methodology</h2>
          <p data-aos="fade-up">
            We believe in the ancient Gurukulam style of teaching — where the
            teacher (Guru) acts as a mentor and guide. Modern teaching aids,
            smart classrooms, practical labs, and project-based learning are
            combined with value-based education.
          </p>
        </section>
      </div>
    </div>
  );
};
