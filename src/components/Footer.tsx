import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 md:px-12 bg-cream-100 dark:bg-darkBg-base border-t border-cream-200 dark:border-darkBg-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & handwritten motto */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-display font-bold text-2xl text-charcoal-900 dark:text-cream-100">
              shirin<span className="text-amberAccent">.</span>
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cream-200 dark:bg-darkBg-card text-charcoal-700 dark:text-cream-300">
              Thejus College, Thrissur
            </span>
          </div>

          <p className="font-script text-2xl text-charcoal-700 dark:text-cream-300">
            {PERSONAL_INFO.tagline}
          </p>
        </div>

        {/* Central Love Tag */}
        <div className="text-xs text-charcoal-600 dark:text-cream-400 flex items-center gap-1.5 text-center">
          <span>Designed & built with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-current animate-pulse" />
          <span>for curious minds</span>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-cream-50 dark:bg-darkBg-card border border-cream-300 dark:border-darkBg-border text-charcoal-800 dark:text-cream-100 hover:bg-amberAccent hover:text-charcoal-900 shadow-sm transition-all text-xs font-bold font-display"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

