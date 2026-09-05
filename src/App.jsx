import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [debugOn, setDebugOn] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (debugOn) {
      document.body.classList.add('debug-on');
    } else {
      document.body.classList.remove('debug-on');
    }
  }, [debugOn]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }, [mobileOpen]);

  useEffect(() => {
    const sections = ['home', 'education', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      let current = 'home';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        debugOn={debugOn}
        onToggleDebug={() => setDebugOn((prev) => !prev)}
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((prev) => !prev)}
        onCloseMobile={() => setMobileOpen(false)}
      />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
