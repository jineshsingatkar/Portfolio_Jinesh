// Main App component that combines all sections
import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;