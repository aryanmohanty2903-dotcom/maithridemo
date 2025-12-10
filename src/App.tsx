import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchPillars from './components/ResearchPillars';
import ClimateQuadrants from './components/ClimateQuadrants';
import ProjectTracking from './components/ProjectTracking';
import Collaboration from './components/Collaboration';
import NewsPublications from './components/NewsPublications';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <ResearchPillars darkMode={darkMode} />
        <ClimateQuadrants darkMode={darkMode} />
        <ProjectTracking darkMode={darkMode} />
        <Collaboration darkMode={darkMode} />
        <NewsPublications darkMode={darkMode} />
        <Awards darkMode={darkMode} />
        <Gallery darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;