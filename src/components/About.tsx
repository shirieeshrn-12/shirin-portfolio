import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, Heart, Brain, Code, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Animated Counter Sub-component
const CounterItem: React.FC<{ target: number; suffix?: string; label: string }> = ({
  target,
  suffix = '',
  label,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="p-6 rounded-3xl bg-cream-50 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border shadow-soft-warm text-center hover:scale-103 transition-transform">
      <div className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 dark:text-cream-100 flex items-center justify-center">
        <span>{count}</span>
        <span className="text-amberAccent">{suffix}</span>
      </div>
      <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-charcoal-600 dark:text-cream-300">
        {label}
      </p>
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-cream-100 dark:bg-darkBg-base transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amberAccent/20 text-charcoal-900 dark:text-cream-100 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amberAccent-dark" />
            <span>Behind the Screen</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 dark:text-cream-100 tracking-tight">
            Curious, driven & always building.
          </h2>
          <p className="text-charcoal-600 dark:text-cream-300 text-base sm:text-lg">
            A peek into my world as a first-year Artificial Intelligence student navigating algorithms, clean code, and human-centered design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Visual Card with photo & badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[2.8rem] overflow-hidden bg-cream-200 dark:bg-darkBg-card border-4 border-cream-50 dark:border-darkBg-border shadow-2xl p-4">
              <div className="rounded-[2.2rem] overflow-hidden aspect-[4/5]">
                <img
                  src="/shirin-about.jpg"
                  alt="Shirin - CSE (AI) Student at Thejus College"
                  className="w-full h-full object-cover object-[center_15%] grayscale contrast-[1.08] brightness-[0.98] hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Floating Highlight Card */}
              <div className="mt-4 p-4 rounded-2xl bg-cream-50 dark:bg-darkBg-surface border border-cream-200 dark:border-darkBg-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-softTeal/20 text-softTeal-dark flex items-center justify-center">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-charcoal-500 dark:text-cream-400">Current Focus</p>
                    <p className="text-sm font-bold font-display text-charcoal-900 dark:text-cream-100">AI + Creative Web</p>
                  </div>
                </div>
                <span className="text-2xl">🌱</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Story & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-charcoal-900 dark:text-cream-100">
                Hi, I'm Shirin! 👋
              </h3>
              <p className="text-charcoal-700 dark:text-cream-300 leading-relaxed text-base sm:text-lg">
                I'm a first-year student pursuing <strong className="text-charcoal-900 dark:text-cream-100">Computer Science & Engineering (Artificial Intelligence)</strong> at <strong className="text-charcoal-900 dark:text-cream-100">Thejus College</strong> in Thrissur, Kerala.
              </p>
              <p className="text-charcoal-700 dark:text-cream-300 leading-relaxed text-base sm:text-lg">
                My curiosity ignited with logic puzzles and Python scripting, and quickly grew into exploring neural representations and interactive web interfaces. I believe technology should not only be mathematically rigorous, but also warm, friendly, and empowering for everyday people.
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-cream-50 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amberAccent/20 flex items-center justify-center text-amberAccent-dark shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-charcoal-500 dark:text-cream-400 uppercase">Institution</p>
                  <p className="text-sm font-bold text-charcoal-800 dark:text-cream-100 font-display">Thejus College, Thrissur</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-softTeal/20 flex items-center justify-center text-softTeal-dark shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-charcoal-500 dark:text-cream-400 uppercase">Specialization</p>
                  <p className="text-sm font-bold text-charcoal-800 dark:text-cream-100 font-display">B.Tech CSE (AI)</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-mustard/20 flex items-center justify-center text-mustard-dark shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-charcoal-500 dark:text-cream-400 uppercase">Hometown</p>
                  <p className="text-sm font-bold text-charcoal-800 dark:text-cream-100 font-display">Thrissur, Kerala 🌴</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-charcoal-500 dark:text-cream-400 uppercase">Batch</p>
                  <p className="text-sm font-bold text-charcoal-800 dark:text-cream-100 font-display">Class of 2024–2028</p>
                </div>
              </div>
            </div>

            {/* Quote / Philosophy */}
            <div className="p-5 rounded-2xl bg-amberAccent/10 border-l-4 border-amberAccent">
              <p className="font-script text-2xl text-charcoal-800 dark:text-cream-200 font-bold">
                “Every line of code is an opportunity to make someone smile or solve a real puzzle.”
              </p>
            </div>
          </motion.div>

        </div>

        {/* Animated Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
          {PERSONAL_INFO.stats.map((stat) => (
            <CounterItem
              key={stat.label}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

