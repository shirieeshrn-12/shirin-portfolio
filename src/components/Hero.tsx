import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useMagnetic } from '../hooks/useMagnetic';

export const Hero: React.FC = () => {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.25);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Parallax & 3D tilt mouse physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const avatarX = useTransform(smoothMouseX, [-0.5, 0.5], [-14, 14]);
  const avatarY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
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
        {/* LEFT COLUMN: Modern Interactive 3D Tilt & Parallax Portrait              */}
        {/* ========================================================================= */}
        <div className="relative w-full lg:w-[48%] flex items-center justify-center p-6 sm:p-10 lg:p-14 z-10 [perspective:1000px]">
          
          {/* Central Portrait Container */}
          <div className="relative w-full max-w-sm sm:max-w-md my-auto py-6 flex items-center justify-center">
            
            {/* Animated breathing aura glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.45, 0.75, 0.45]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 aspect-square rounded-full bg-gradient-to-tr from-amberAccent/25 via-mustard/20 to-softTeal/30 dark:from-amberAccent/15 dark:via-darkBg-card dark:to-softTeal-dark/20 blur-3xl pointer-events-none"
            />

            {/* Parallax & 3D Tilt Wrapper */}
            <motion.div
              style={{
                x: avatarX,
                y: avatarY,
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d'
              }}
              className="relative z-10 w-full select-none"
            >
              <div className="relative group cursor-pointer">
                
                {/* Rotating decorative orbital accent ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-3 sm:-inset-5 rounded-[3.2rem] border border-dashed border-amberAccent/35 pointer-events-none"
                />

                {/* Floating Top-Right Sparkle Badge */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-2 sm:-right-4 z-20 w-11 h-11 rounded-2xl bg-amberAccent text-charcoal-900 shadow-lg shadow-amberAccent/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
                  title="Creative Thinker"
                >
                  <Sparkles className="w-5 h-5 fill-charcoal-900" />
                </motion.div>

                {/* Main Card with 3D shadow & gentle float */}
                <motion.div
                  initial={{ scale: 0.93, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.34, 1.3, 0.64, 1] }}
                  className="relative rounded-[2.8rem] overflow-hidden shadow-2xl shadow-charcoal-900/20 dark:shadow-black/50 border-4 border-cream-50/90 dark:border-darkBg-card group-hover:border-amberAccent/80 animate-gentle-float aspect-[4/5] bg-cream-200 dark:bg-darkBg-card transition-colors duration-500"
                >
                  {/* Dynamic glass light reflection sheen on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />

                  {/* Portrait with smooth grayscale -> subtle color reveal on hover */}
                  <img
                    src="/shirin-real.jpg"
                    alt="Shirin - CSE (AI) Student at Thejus College"
                    className="w-full h-full object-cover object-[center_15%] grayscale contrast-[1.08] brightness-[0.98] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transform transition-all duration-700 ease-out group-hover:scale-105"
                    onLoad={() => setImageLoaded(true)}
                  />

                  {/* Fallback shimmer while image loads */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-cream-300/50 dark:bg-darkBg-card animate-pulse flex items-center justify-center">
                      <span className="font-display font-medium text-charcoal-600">Loading photo...</span>
                    </div>
                  )}
                </motion.div>

                {/* Floating Bottom-Left Pill Badge: College & Specialization */}
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-3.5 -left-2 sm:-left-4 z-20 py-2 px-3.5 rounded-2xl bg-cream-50/95 dark:bg-darkBg-card/95 border border-cream-200/90 dark:border-darkBg-border shadow-lg backdrop-blur-md flex items-center gap-2 group-hover:scale-105 transition-transform duration-300"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-display font-bold text-xs text-charcoal-900 dark:text-cream-100">
                    CSE (AI) · Thejus College
                  </span>
                </motion.div>

              </div>
            </motion.div>
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

