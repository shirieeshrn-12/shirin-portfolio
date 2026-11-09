import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink, Sparkles, Trophy, BookOpen, ShieldCheck } from 'lucide-react';
import { CERTIFICATES_DATA, CertificateItem } from '../data/portfolioData';

export const Certificates: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Horizontal scroll mapping for pinned section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Transform vertical scroll progress into horizontal translation percentage
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  const getIcon = (name: string) => {
    switch (name) {
      case 'award': return <Award className="w-6 h-6 text-amberAccent-dark" />;
      case 'brain': return <Trophy className="w-6 h-6 text-mustard-dark" />;
      case 'layout': return <BookOpen className="w-6 h-6 text-softTeal-dark" />;
      case 'zap': return <Sparkles className="w-6 h-6 text-amberAccent-dark" />;
      default: return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="certificates" className="relative bg-cream-100 dark:bg-darkBg-base transition-colors duration-300">
      
      {/* ========================================================================= */}
      {/* DESKTOP (md+): Pinned Horizontal Scrolling Experience                      */}
      {/* ========================================================================= */}
      <div ref={containerRef} className="hidden md:block relative h-[240vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-8 lg:px-14 py-12">
          
          {/* Header */}
          <div className="max-w-6xl mx-auto w-full mb-8 flex items-end justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-softTeal/20 text-softTeal-dark dark:text-softTeal text-xs font-bold tracking-wider uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>Recognition & Validation</span>
              </div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-charcoal-900 dark:text-cream-100 tracking-tight">
                Certifications & Hackathons.
              </h2>
              <p className="text-charcoal-600 dark:text-cream-300 text-base">
                Scroll to explore courses completed, achievements, and competitive sprints.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold font-display text-amberAccent-dark dark:text-amberAccent">
              <span>Scroll down to navigate cards →</span>
            </div>
          </div>

          {/* Horizontal Track */}
          <div className="max-w-7xl mx-auto w-full overflow-visible">
            <motion.div
              style={{ x }}
              className="flex gap-8 items-stretch"
            >
              {CERTIFICATES_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="w-[400px] shrink-0 p-8 rounded-[2.2rem] bg-cream-50 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border shadow-soft-warm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-amberAccent/20 flex items-center justify-center">
                      {getIcon(cert.iconName)}
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-cream-200 dark:bg-darkBg-surface text-charcoal-700 dark:text-cream-300 text-xs font-bold font-display">
                      {cert.badgeText}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amberAccent-dark dark:text-amberAccent">
                      {cert.issuer} · {cert.date}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-charcoal-900 dark:text-cream-100 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-charcoal-600 dark:text-cream-300 text-sm leading-relaxed pt-1">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-cream-200 dark:border-darkBg-border flex items-center justify-between text-xs font-semibold text-charcoal-500 dark:text-cream-400">
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Verified Credential</span>
                    </div>
                    <span className="font-mono text-[11px] text-charcoal-400">#AI-CSE</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-6xl mx-auto w-full mt-8 flex justify-center">
            <div className="h-1.5 w-44 rounded-full bg-cream-300/60 dark:bg-darkBg-border overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full bg-amberAccent origin-left rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE (md:hidden): Native Touch-Friendly Horizontal Swipe Carousel         */}
      {/* ========================================================================= */}
      <div className="md:hidden py-20 px-6 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-softTeal/20 text-softTeal-dark dark:text-softTeal text-xs font-bold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Certifications</span>
          </div>
          <h2 className="font-display font-bold text-3xl text-charcoal-900 dark:text-cream-100 tracking-tight">
            Recognitions & Courses.
          </h2>
          <p className="text-charcoal-600 dark:text-cream-300 text-sm">
            Swipe left to view credentials and achievements.
          </p>
        </div>

        {/* Swipeable Container */}
        <div className="flex gap-4 overflow-x-auto pb-4 pt-2 -mx-6 px-6 snap-x snap-mandatory scrollbar-none">
          {CERTIFICATES_DATA.map((cert) => (
            <div
              key={cert.id}
              className="w-[85vw] max-w-[340px] shrink-0 snap-center p-6 rounded-[2rem] bg-cream-50 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border shadow-soft-warm flex flex-col justify-between space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amberAccent/20 flex items-center justify-center">
                  {getIcon(cert.iconName)}
                </div>
                <span className="px-3 py-0.5 rounded-full bg-cream-200 dark:bg-darkBg-surface text-charcoal-700 dark:text-cream-300 text-[11px] font-bold font-display">
                  {cert.badgeText}
                </span>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amberAccent-dark dark:text-amberAccent">
                  {cert.issuer} · {cert.date}
                </span>
                <h3 className="font-display font-bold text-xl text-charcoal-900 dark:text-cream-100 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 text-xs leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-cream-200 dark:border-darkBg-border flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified</span>
                </div>
                <span className="font-mono text-[10px] text-charcoal-400">#AI-CSE</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

