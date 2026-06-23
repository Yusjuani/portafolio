import { useTranslation } from 'react-i18next';
import './App.css';
import { cvDataBilingual } from './data/cvDataBilingual';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { i18n } = useTranslation();
  const cvData = cvDataBilingual[i18n.language];

  return (
    <div className="App">
      <LanguageSwitcher />
      <Header personalInfo={cvData.personalInfo} />
      <About summary={cvData.summary} />
      <Experience experience={cvData.experience} />
      <Skills skills={cvData.skills} />
      <Projects projects={cvData.projects} />
      <Education education={cvData.education} />
      <Certifications certifications={cvData.certifications} />
    </div>
  );
}

export default App;
