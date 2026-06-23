import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.css';
import { DiDocker, DiReact, DiAngularSimple, DiPython, DiNodejs, DiGit, DiJavascript } from 'react-icons/di';
import { FaCode } from 'react-icons/fa';

const Skills = ({ skills }) => {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState('flowchart');

  const skillCategories = [
    {
      title: t('coreSkills'),
      skills: skills.core,
      icon: '⚡',
      color: '#764ba2',
      level: 'advanced'
    },
    {
      title: t('languages'),
      skills: skills.languages,
      icon: '🌍',
      color: '#ff8c00',
      level: 'expert'
    }
  ];

  const skillIcons = [
    { name: 'JavaScript', icon: DiJavascript, color: '#f7df1e' },
    { name: 'React', icon: DiReact, color: '#61dafb' },
    { name: 'Node.js', icon: DiNodejs, color: '#68a063' },
    { name: 'Python', icon: DiPython, color: '#3776ab' },
    { name: 'Docker', icon: DiDocker, color: '#2496ed' },
    { name: 'APIs REST', icon: FaCode, color: '#4caf50' },
    { name: 'Git', icon: DiGit, color: '#f05032' },
    { name: 'Angular', icon: DiAngularSimple, color: '#dd0031' }
  ];

  const getSkillLevel = (level) => {
    const levels = {
      'expert': { stars: '⭐⭐⭐', percentage: 95, label: t('expert') },
      'advanced': { stars: '⭐⭐', percentage: 80, label: t('advanced') },
      'intermediate': { stars: '⭐', percentage: 65, label: t('intermediate') },
      'basic': { stars: '🔰', percentage: 40, label: t('basic') }
    };
    return levels[level] || levels['intermediate'];
  };

  const renderFlowchart = () => (
    <div className="flowchart-container">  
      {skillCategories.map((category, index) => {
        return (
          <div 
            key={index}
            className="flowchart-node category-node"
            style={{ 
              '--color': category.color
            }}
          >
            <div className="node-content">
              <span className="node-icon">{category.icon}</span>
              <span className="node-title">{category.title}</span>
            </div>
            
            <div className="node-connections">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className="skill-connection"
                >
                  <div className="connection-dot"></div>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderJsonViewer = () => (
    <div className="json-viewer">
      <div className="json-container">
        <div className="json-header">
          <span className="json-icon">📄</span>
          <span className="json-title">skills.json</span>
          <div className="json-status">
            <div className="status-dot"></div>
            <span>Live Data</span>
          </div>
        </div>
        
        <div className="json-content">
          <pre className="json-code">
{`{
  "developer": {
    "name": "Yusjuani Hernández",
    "role": "Frontend Developer",
    "location": "Santiago, Chile",
    "skills": {`}
          </pre>
          
          {skillCategories.map((category, index) => (
            <div key={index} className="json-category">
              <pre className="json-code">
{`    "${category.title.toLowerCase().replace(/\s+/g, '_')}": {
      "level": "${getSkillLevel(category.level).label}",
      "proficiency": ${getSkillLevel(category.level).percentage}%,
      "technologies": [`}
              </pre>
              
              <div className="json-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="json-skill"
                  >
                    <pre className="json-code">
{`        "${skill}"${skillIndex < category.skills.length - 1 ? ',' : ''}`}
                    </pre>
                  </div>
                ))}
              </div>
              
              <pre className="json-code">
{`      ],
      "icon": "${category.icon}",
      "color": "${category.color}"
    }${index < skillCategories.length - 1 ? ',' : ''}`}
              </pre>
            </div>
          ))}
          
          <pre className="json-code">
{`  },
  "last_updated": "${new Date().toISOString().split('T')[0]}",
  "status": "active"
}`}
          </pre>
        </div>
      </div>
    </div>
  );

  const renderNetwork = () => (
    <div className="network-container">
      <div className="network-center">
        <div className="center-node">
          <span className="center-icon">👩‍💻</span>
          <span className="center-title">Yusjuani</span>
        </div>
      </div>
      
      {/* Líneas de conexión */}
      {skillIcons.map((skill, index) => (
        <div 
          key={`line-${index}`}
          className="connection-line"
          style={{ 
            '--angle': `${(index * 360) / skillIcons.length}deg`,
            '--color': skill.color
          }}
        ></div>
      ))}
      
      {/* Iconos individuales */}
      {skillIcons.map((skill, index) => (
        <div 
          key={index}
          className="skill-icon-node"
          style={{ 
            '--angle': `${(index * 360) / skillIcons.length}deg`,
            '--color': skill.color
          }}
        >
          <div className="icon-content">
            <span className="skill-icon">
              {typeof skill.icon === 'string' ? skill.icon : <skill.icon />}
            </span>
            <span className="skill-name">{skill.name}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">{t('skillsTitle')}</span>
          <div className="title-underline"></div>
        </h2>

        <div className="view-controls">
          <button
            className={`view-btn ${viewMode === 'flowchart' ? 'active' : ''}`}
            onClick={() => setViewMode('flowchart')}
          >
            <span className="btn-icon">📋</span>
            <span className="btn-text">{t('skillsByCategory')}</span>
          </button>
          <button
            className={`view-btn ${viewMode === 'json' ? 'active' : ''}`}
            onClick={() => setViewMode('json')}
          >
            <span className="btn-icon">📄</span>
            <span className="btn-text">{t('jsonViewer')}</span>
          </button>
          <button
            className={`view-btn ${viewMode === 'network' ? 'active' : ''}`}
            onClick={() => setViewMode('network')}
          >
            <span className="btn-icon">🕸️</span>
            <span className="btn-text">{t('skillsNetwork')}</span>
          </button>
        </div>
        
        <div className="skills-visualization">
          {viewMode === 'flowchart' && renderFlowchart()}
          {viewMode === 'json' && renderJsonViewer()}
          {viewMode === 'network' && renderNetwork()}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
