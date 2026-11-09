import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Github, Linkedin, Instagram, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { num: '01', title: 'Hero / Home', href: '#hero' },
  { num: '02', title: 'About Shirin', href: '#about' },
  { num: '03', title: 'Skills & Stack', href: '#skills' },
  { num: '04', title: 'Featured Projects', href: '#projects' },
  { num: '05', title: 'Academic Journey', href: '#journey' },
  { num: '06', title: 'Certifications', href: '#certificates' },
  { num: '07', title: 'Get In Touch', href: '#contact' },
];

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-6 md:p-12 bg-cream-100/98 dark:bg-darkBg-base/98 backdrop-blur-xl"
        >
          {/* Header row */}
          <div className="flex items-center justify-between max-w-6xl w-full mx-auto">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-display font-medium text-sm text-charcoal-700 dark:text-cream-200">
                1st Year CSE (AI) · Thejus College
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="w-12 h-12 rounded-full bg-charcoal-800 text-cream-100 dark:bg-cream-100 dark:text-charcoal-900 flex items-center justify-center hover:scale-105 transition-transform"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Links */}
          <div className="max-w-6xl w-full mx-auto my-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((item, index) => (
                  <motion.a
                    key={item.num}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.4 }}
                    className="group flex items-baseline gap-4 text-charcoal-800 dark:text-cream-100 hover:text-amberAccent transition-colors py-1 cursor-pointer"
                  >
                    <span className="font-display text-sm md:text-base text-amberAccent opacity-80 group-hover:opacity-100">
                      {item.num}
                    </span>
                    <span className="font-display text-3xl md:text-5xl font-bold tracking-tight transition-transform duration-200 group-hover:translate-x-2">
                      {item.title}
                    </span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amberAccent" />
                  </motion.a>
                ))}
              </nav>

              {/* Aside column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="hidden md:flex flex-col p-8 rounded-3xl bg-cream-50 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border shadow-soft-warm space-y-6"
              >
                <div className="flex items-center gap-2 text-amberAccent font-display font-medium text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Curious Mind & Student Builder</span>
                </div>
                <h4 className="font-display text-2xl font-bold text-charcoal-900 dark:text-cream-100">
                  Let's create something thoughtful together.
                </h4>
                <p className="text-charcoal-600 dark:text-cream-300 text-sm leading-relaxed">
                  Based in Thrissur, Kerala. Always open to discussing AI research, hackathons, innovative open-source ideas, or frontend design systems.
                </p>

                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-charcoal-500 dark:text-cream-400 font-semibold">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.socials.email}`}
                    className="block text-lg font-display font-bold text-amberAccent hover:underline mt-1"
                  >
                    {PERSONAL_INFO.socials.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-cream-200 dark:border-darkBg-border">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-cream-200 dark:bg-darkBg-surface hover:text-amberAccent transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-cream-200 dark:bg-darkBg-surface hover:text-amberAccent transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-cream-200 dark:bg-darkBg-surface hover:text-amberAccent transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.socials.email}`}
                    className="p-3 rounded-full bg-cream-200 dark:bg-darkBg-surface hover:text-amberAccent transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer note */}
          <div className="max-w-6xl w-full mx-auto flex items-center justify-between text-xs text-charcoal-500 dark:text-cream-400">
            <span className="font-script text-xl text-charcoal-700 dark:text-cream-200">
              Be curious today :)
            </span>
            <span>Thrissur, Kerala · © {new Date().getFullYear()} Shirin</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

