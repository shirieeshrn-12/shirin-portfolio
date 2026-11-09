import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useLenis } from './hooks/useLenis';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { FullscreenMenu } from './components/FullscreenMenu';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { JourneyTimeline } from './components/JourneyTimeline';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  useLenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-cream-100 dark:bg-darkBg-base text-charcoal-800 dark:text-cream-100 selection:bg-amberAccent/30 selection:text-charcoal-900 transition-colors duration-300">
      {/* Scroll depth indicator bar */}
      <ScrollProgress />

      {/* Trailing Custom Cursor */}
      <CustomCursor />

      {/* Initial Intro Curtain Preloader */}
      <Preloader />

      {/* Global Fixed Navbar */}
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Fullscreen Animated Navigation Overlay */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main Single-Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <JourneyTimeline />
        <Certificates />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

