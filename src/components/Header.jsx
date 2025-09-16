import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ personalInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="header">
      <div className="header-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>
      </div>
      
      <div className="header-content">
        <div className={`profile-section ${isVisible ? 'animate-in' : ''}`}>
          <div className="profile-image">
            <div className="avatar-container">
              <div className="avatar-ring"></div>
              <div className="avatar-placeholder">
                <span>{personalInfo.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
            </div>
          </div>
          
          <div className="profile-info">
            <h1 className="name">
              <span className="name-line">{personalInfo.name.split(' ')[0]}</span>
              <span className="name-line">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <h2 className="title">{personalInfo.title}</h2>
            <p className="location">
              <span className="location-icon">📍</span>
              {personalInfo.location}
            </p>
          </div>
        </div>
        
        <div className={`contact-info ${isVisible ? 'animate-in' : ''}`}>
          <div className="contact-grid">
            <a href={`mailto:${personalInfo.email}`} className="contact-card">
              <div className="contact-icon">📧</div>
              <span className="contact-text">{personalInfo.email}</span>
            </a>
            
            <a href={`https://wa.me/${personalInfo.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">💬</div>
              <span className="contact-text">{personalInfo.phone}</span>
            </a>
            
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">💼</div>
              <span className="contact-text">LinkedIn</span>
            </a>
            
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">🐙</div>
              <span className="contact-text">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
