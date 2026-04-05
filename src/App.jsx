import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Link } from 'react-scroll';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Apply dark class to html
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-x-hidden">
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Hero Section */}
      <section id="hero" className="section-padding min-h-screen flex items-center">
        <Hero />
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="section-padding bg-slate-800/50">
        <Skills />
      </section>
      
      {/* Education Section */}
      <section id="education" className="section-padding">
        <Education />
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section-padding bg-slate-800/50">
        <Projects />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <Contact />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

