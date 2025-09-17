import React from 'react';
import './Experience.css';

const Experience = ({ experience }) => {
  return (
    <section className="experience">
      <div className="container">
        <h2 className="section-title">Experiencia Profesional</h2>
        <div className="experience-timeline">
          {experience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-company">{job.company}</div>
                  <div className="job-period">{job.period}</div>
                  <div className="job-location">📍 {job.location}</div>
                </div>
                <p className="job-description">{job.description}</p>
                <ul className="job-achievements">
                  {job.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      <span className="achievement-bullet">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
