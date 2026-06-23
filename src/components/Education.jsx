import { useTranslation } from 'react-i18next';
import './Education.css';

const Education = ({ education }) => {
  const { t } = useTranslation();

  return (
    <section className="education">
      <div className="container">
        <h2 className="section-title">{t('educationTitle')}</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-marker">
                <span className="marker-icon">🎓</span>
              </div>
              <div className="education-content">
                <h3 className="degree-title">{edu.degree}</h3>
                <div className="institution">{edu.institution}</div>
                <div className="education-period">{edu.period}</div>
                <div className="education-location">📍 {edu.location}</div>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
