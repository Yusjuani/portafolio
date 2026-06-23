import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Certifications.css';

const Certifications = ({ certifications }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="certifications">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">{t('certificationsTitle')}</span>
          <div className="title-underline"></div>
        </h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`certification-card ${isVisible ? 'animate-in' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="cert-header">
                <div className="cert-icon">
                  <span>🏆</span>
                </div>
                <div className="cert-info">
                  <h3 className="cert-name">{cert.name}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>
              
              <div className="cert-details">
                <div className="cert-date">
                  <span className="date-label">{t('year')}:</span>
                  <span className="date-value">{cert.date}</span>
                </div>
                <div className="cert-id">
                  <span className="id-label">{t('id')}:</span>
                  <span className="id-value">{cert.credentialId}</span>
                </div>
              </div>

              <div className="cert-badge">
                <div className="badge-icon">✓</div>
                <span className="badge-text">{t('certified')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
