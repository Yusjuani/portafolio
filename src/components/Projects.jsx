import { useTranslation } from 'react-i18next';
import './Projects.css';

const Projects = ({ projects }) => {
  const { t } = useTranslation();

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">{t('projectsTitle')}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span className="placeholder-icon">🚀</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                {project.period && <div className="project-period">📅 {project.period}</div>}
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span className="link-icon">🔗</span>
                    {t('viewProject')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
