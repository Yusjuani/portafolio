import React from 'react';
import './About.css';

const About = ({ summary }) => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">Acerca de Mí</h2>
        <div className="about-content">
          <p className="summary">{summary}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
