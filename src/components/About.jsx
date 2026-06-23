import { useTranslation } from 'react-i18next';
import './About.css';

const About = ({ summary }) => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">{t('aboutTitle')}</h2>
        <div className="about-content">
          <p className="summary">{summary}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
