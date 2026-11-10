import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useMagnetic } from '../hooks/useMagnetic';

const GREETINGS = [
  "Welcome to my portfolio! ✨",
  "Glad you're here! 🌸",
  "Be curious today :) 🚀",
  "CSE (AI) student @ Thejus 🎓"
];

export const Hero: React.FC = () => {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.25);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isWaving, setIsWaving] = useState(true);
  const [greetingIndex, setGreetingIndex] = useState(0);

  // Trigger active waving for 3.5s on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWaving(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleWaveClick = () => {
    setIsWaving(true);
    setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.45, x: 0.3 },
      colors: ['#FFA94D', '#F2C14E', '#7FBFC4']
    });
    setTimeout(() => setIsWaving(false), 2000);
  };

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
        {/* LEFT COLUMN: Clean 3D Avatar Scene (New Avatar)                           */}
        {/* ========================================================================= */}
        <div className="relative w-full lg:w-[48%] flex items-center justify-center p-6 sm:p-10 lg:p-14 z-10">
          
          {/* Central 3D Avatar Illustration Container */}
          <div className="relative w-full max-w-md md:max-w-lg my-auto py-4 flex items-center justify-center">
            
            {/* Soft ambient backdrop glow */}
            <div className="absolute inset-0 max-w-md mx-auto aspect-square rounded-full bg-gradient-to-tr from-softTeal/30 via-cream-200 to-amberAccent/20 dark:from-darkBg-card dark:to-softTeal-dark/20 blur-3xl transform -translate-y-2 pointer-events-none" />

            {/* Parallax & Gentle Idle Floating Wrapper */}
            <motion.div
              style={{ x: avatarX, y: avatarY }}
              className="relative z-10 w-full select-none"
            >
              <div className="relative group">
                {/* Waving Speech Bubble saying "Hi!" */}
                <motion.div
                  initial={{ scale: 0, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, type: 'spring', damping: 14 }}
                  onClick={handleWaveClick}
                  className="absolute -top-5 -right-2 sm:-top-7 sm:-right-4 z-30 cursor-pointer select-none"
                  title="Click to say hi!"
                >
                  <div className="relative bg-cream-50/98 dark:bg-darkBg-card border-2 border-amberAccent py-2 px-3.5 sm:py-2.5 sm:px-4 rounded-3xl shadow-xl shadow-amberAccent/20 backdrop-blur-md flex items-center gap-2.5 sm:gap-3 hover:scale-105 active:scale-95 transition-transform">
                    {/* Hand Waving Animation */}
                    <motion.span
                      animate={
                        isWaving
                          ? { rotate: [0, 32, -22, 32, -15, 24, 0] }
                          : { rotate: [0, 16, -10, 16, 0] }
                      }
                      transition={{
                        duration: isWaving ? 0.9 : 2.2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className="text-3xl sm:text-4xl inline-block origin-bottom-right filter drop-shadow"
                    >
                      👋
                    </motion.span>

                    <div className="text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="font-display font-bold text-xs sm:text-sm text-charcoal-900 dark:text-cream-100">
                          Hi! I'm Shirin
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-amberAccent fill-amberAccent" />
                      </div>
                      <p className="text-[10px] sm:text-[11px] font-medium text-charcoal-600 dark:text-cream-300">
                        {GREETINGS[greetingIndex]}
                      </p>
                    </div>

                    {/* Speech pointer tail */}
                    <div className="absolute -bottom-1.5 left-8 w-3 h-3 bg-cream-50 dark:bg-darkBg-card border-r-2 border-b-2 border-amberAccent rotate-45 transform" />
                  </div>
                </motion.div>

                {/* Main Avatar Image with Greeting Entrance */}
                <motion.div
                  initial={{ scale: 0.93, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.34, 1.3, 0.64, 1] }}
                  className="relative rounded-[2.8rem] overflow-hidden shadow-2xl shadow-charcoal-800/15 border-4 border-cream-50/90 dark:border-darkBg-card animate-gentle-float aspect-square"
                >
                  <img
                    src="/avatar.png"
                    alt="Shirin - CSE (AI) Student at Thejus College"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-103"
                    onLoad={() => setImageLoaded(true)}
                  />

                  {/* Fallback shimmer while image loads */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-cream-300/50 dark:bg-darkBg-card animate-pulse flex items-center justify-center">
                      <span className="font-display font-medium text-charcoal-600">Loading avatar...</span>
                    </div>
                  )}
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

