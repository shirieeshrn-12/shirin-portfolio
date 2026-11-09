import React from 'react';
import { Sun, Moon, MoreHorizontal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useMagnetic } from '../hooks/useMagnetic';

interface NavbarProps {
  onOpenMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenu }) => {
  const { theme, toggleTheme } = useTheme();
  const menuBtnRef = useMagnetic<HTMLButtonElement>(0.3);
  const themeBtnRef = useMagnetic<HTMLButtonElement>(0.2);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-10 py-5 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand */}
        <a 
          href="#hero" 
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amberAccent rounded-xl p-1"
        >
          <span className="font-display font-bold text-2xl md:text-3xl text-charcoal-900 dark:text-cream-100 tracking-tight">
            shirin<span className="text-amberAccent">.</span>
          </span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-cream-200/80 dark:bg-darkBg-card text-charcoal-700 dark:text-cream-300 border border-cream-300/60 dark:border-darkBg-border">
            CSE (AI)
          </span>
        </a>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            ref={themeBtnRef}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="w-11 h-11 rounded-full bg-cream-50/90 dark:bg-darkBg-card text-charcoal-800 dark:text-cream-100 border border-cream-300/70 dark:border-darkBg-border flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amberAccent"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-charcoal-700 hover:text-amberAccent transition-colors" />
            ) : (
              <Sun className="w-5 h-5 text-amberAccent hover:text-mustard transition-colors" />
            )}
          </button>

          {/* Reference Match: Round Orange Menu Button with 3 dots */}
          <button
            ref={menuBtnRef}
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
            className="w-12 h-12 rounded-full bg-amberAccent hover:bg-amberAccent-hover text-charcoal-900 flex items-center justify-center shadow-md shadow-amberAccent/30 hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal-800"
          >
            <MoreHorizontal className="w-7 h-7 text-charcoal-900 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
};

