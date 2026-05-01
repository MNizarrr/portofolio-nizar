import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100" style={{
      backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #0f172a 50%, #1e293b 75%, #0f172a 100%)'
    }}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 left-0 w-96 h-96 bg-violet-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 right-20 w-96 h-96 bg-indigo-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-20 min-h-screen flex items-center">
          <Hero />
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-purple-500/10">
          <Skills />
        </section>
        
        {/* Education Section */}
        <section id="education" className="py-20 border-t border-purple-500/10">
          <Education />
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20 border-t border-purple-500/10">
          <Certificates />
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-purple-500/10">
          <Projects />
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-purple-500/10">
          <Contact />
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
