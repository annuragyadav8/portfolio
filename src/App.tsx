import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import BackgroundEffect from './components/BackgroundEffect';
import LoadingScreen from './components/LoadingScreen';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import GithubStats from './pages/GithubStats';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Disable loading screen if user has already visited in this session for faster reloads
    const hasVisited = sessionStorage.getItem('visited');
    if (hasVisited) {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoading) return;
    
    // Add scroll spy intersection observer
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('visited', 'true');
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <>
      {/* Premium background layout and cursor */}
      <BackgroundEffect />
      <CustomCursor />
      <Navbar activeSection={activeSection} />

      {/* Main content grid */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubStats />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
