import React from 'react';
import './App.css';
import { cvData } from './data/cvData';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="App">
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
