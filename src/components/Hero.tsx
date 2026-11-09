import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles, BookOpen, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useMagnetic } from '../hooks/useMagnetic';

export const Hero: React.FC = () => {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.25);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Parallax mouse effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const avatarX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const avatarY = useTransform(smoothMouseY, [-0.5, 0.5], [-10, 10]);
  const bgShapeX = useTransform(smoothMouseX, [-0.5, 0.5], [15, -15]);
  const bgShapeY = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-softTeal-light/40 dark:bg-darkBg-base transition-colors duration-300 pt-20 md:pt-0"
    >
      {/* Decorative ambient background blur lights */}
      <motion.div
        style={{ x: bgShapeX, y: bgShapeY }}
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-softTeal/20 dark:bg-softTeal-dark/10 blur-3xl"
      />
      <motion.div
        style={{ x: bgShapeY, y: bgShapeX }}
        className="pointer-events-none absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-mustard/20 dark:bg-amberAccent/10 blur-3xl"
      />

      <div className="w-full min-h-screen flex flex-col lg:flex-row items-stretch">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: 3D Avatar Scene + Floating Tags & Background Room Elements */}
        {/* ========================================================================= */}
        <div className="relative w-full lg:w-[48%] flex flex-col justify-between p-6 sm:p-10 lg:p-14 z-10">
          
          {/* Top Left Tags & Capability List (matches reference layout) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-16 sm:pt-20 lg:pt-24 z-20 space-y-2.5"
          >
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amberAccent-dark dark:text-amberAccent">
                First-Year CSE (Artificial Intelligence)
              </span>
              <h3 className="font-display font-bold text-xl md:text-2xl text-charcoal-900 dark:text-cream-100 tracking-tight">
                Thejus College, Thrissur
              </h3>
            </div>

            {/* Capability Tag list under name */}
            <ul className="text-xs md:text-sm font-medium text-charcoal-700/80 dark:text-cream-300/80 space-y-1 pt-1">
              {PERSONAL_INFO.tags.map((tag) => (
                <li key={tag} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amberAccent" />
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Central 3D Avatar Illustration Container */}
          <div className="relative my-auto py-6 sm:py-10 flex items-center justify-center">
            
            {/* Soft backdrop glow matching room atmosphere */}
            <div className="absolute inset-0 max-w-md mx-auto aspect-square rounded-full bg-gradient-to-tr from-softTeal/30 via-cream-200 to-amberAccent/20 dark:from-darkBg-card dark:to-softTeal-dark/20 blur-2xl transform -translate-y-4" />

            {/* Parallax & Gentle Idle Floating Wrapper */}
            <motion.div
              style={{ x: avatarX, y: avatarY }}
              className="relative z-10 w-full max-w-md md:max-w-lg select-none"
            >
              <div className="relative group">
                {/* Main Avatar Image */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-charcoal-800/10 border-4 border-cream-50/80 dark:border-darkBg-card animate-gentle-float">
                  <img
                    src="/avatar.png"
                    alt="Shirin - 3D illustrated avatar seated at study desk with laptop and plants"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-102"
                    onLoad={() => setImageLoaded(true)}
                  />

                  {/* Fallback shimmer while image loads */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-cream-300/50 dark:bg-darkBg-card animate-pulse flex items-center justify-center">
                      <span className="font-display font-medium text-charcoal-600">Loading avatar...</span>
                    </div>
                  )}
                </div>

                {/* Floating Badge 1: College Info */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-4 -left-3 sm:-left-6 bg-cream-50/95 dark:bg-darkBg-card border border-cream-300 dark:border-darkBg-border py-2 px-3.5 rounded-2xl shadow-lg backdrop-blur-md flex items-center gap-2.5 z-20"
                >
                  <div className="w-8 h-8 rounded-xl bg-amberAccent/20 flex items-center justify-center text-amberAccent-dark">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-charcoal-500 dark:text-cream-400">Student</p>
                    <p className="text-xs font-bold text-charcoal-800 dark:text-cream-100 font-display">Thejus College</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Location Thrissur, Kerala */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -top-3 -right-2 sm:-right-4 bg-cream-50/95 dark:bg-darkBg-card border border-cream-300 dark:border-darkBg-border py-2 px-3.5 rounded-2xl shadow-lg backdrop-blur-md flex items-center gap-2 z-20"
                >
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span className="text-xs font-semibold text-charcoal-800 dark:text-cream-100 font-display">
                    Thrissur, Kerala 🌴
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom left subtle status note */}
          <div className="text-xs text-charcoal-600/70 dark:text-cream-400/60 z-10 hidden sm:block">
            <span>Specialization: Artificial Intelligence & Machine Learning</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: Large Rounded Cream Panel Overlapping Scene */}
        {/* ========================================================================= */}
        <div className="relative w-full lg:w-[52%] flex flex-col justify-center">
          
          {/* The Large Rounded Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full min-h-[92vh] flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 pt-24 sm:pt-28 lg:pt-28 bg-cream-100 dark:bg-darkBg-surface rounded-t-[2.5rem] lg:rounded-t-none lg:rounded-l-[3.8rem] shadow-[-20px_0_50px_-20px_rgba(59,58,51,0.07)] border-l border-cream-200/80 dark:border-darkBg-border transition-colors duration-300"
          >
            {/* Top spacing to accommodate header controls on mobile/desktop */}
            <div className="h-4 sm:h-8" />

            {/* Hero Main Content */}
            <div className="space-y-6 sm:space-y-8 max-w-xl my-auto">
              
              {/* Reference Match: Big "Hey! 🤝" Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-charcoal-900 dark:text-cream-100 tracking-tight leading-none">
                  {PERSONAL_INFO.headlineGreeting}
                </h1>
                <span className="text-4xl sm:text-6xl lg:text-7xl animate-wave cursor-pointer select-none" role="img" aria-label="handshake">
                  {PERSONAL_INFO.headlineHand}
                </span>
              </motion.div>

              {/* Subheading: "I'm Shirin, a CSE (AI) student who loves building smart, beautiful things." */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-[2.65rem] text-charcoal-900 dark:text-cream-100 leading-[1.2] tracking-tight">
                  I'm <span className="underline decoration-amberAccent decoration-wavy decoration-2 underline-offset-6">Shirin</span>, a CSE (AI) student who loves building smart, beautiful things.
                </h2>
              </motion.div>

              {/* Intro story paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="text-base sm:text-lg text-charcoal-700 dark:text-cream-300 font-normal leading-relaxed"
              >
                {PERSONAL_INFO.introParagraph}
              </motion.p>

              {/* Reference Match: Handwritten Script Tagline "Be curious today :)" */}
              <motion.div
                initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                animate={{ opacity: 1, rotate: -4, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="pt-2 flex justify-end pr-6 sm:pr-12 select-none"
              >
                <span className="font-script text-3xl sm:text-4xl font-bold text-charcoal-700 dark:text-cream-200 tracking-wide hover:text-amberAccent transition-colors">
                  {PERSONAL_INFO.tagline}
                </span>
              </motion.div>
            </div>

            {/* Bottom Row: Big CTA "Get to know me ↗" */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="pt-8 sm:pt-12"
            >
              <a
                ref={ctaRef}
                href="#about"
                className="group inline-flex items-center gap-4 text-charcoal-900 dark:text-cream-100 hover:text-amberAccent transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amberAccent rounded-2xl"
              >
                <span className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight group-hover:translate-x-1 transition-transform">
                  Get to know me
                </span>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-amberAccent text-charcoal-900 flex items-center justify-center shadow-lg shadow-amberAccent/30 group-hover:bg-amberAccent-hover group-hover:scale-110 group-hover:rotate-12 transition-all">
                  <ArrowUpRight className="w-7 h-7 sm:w-9 sm:h-9 stroke-[2.5]" />
                </div>
              </a>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

