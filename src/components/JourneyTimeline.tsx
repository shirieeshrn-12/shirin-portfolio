import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Compass, GraduationCap, Sparkles, Calendar, BookOpen, Flag } from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section id="journey" className="py-24 px-6 md:px-12 bg-cream-50 dark:bg-darkBg-surface transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mustard/20 text-mustard-dark dark:text-mustard text-xs font-bold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Path & Milestones</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 dark:text-cream-100 tracking-tight">
            My academic journey so far.
          </h2>
          <p className="text-charcoal-600 dark:text-cream-300 text-base sm:text-lg">
            From discovering programming fundamentals to stepping onto the Thejus campus as an Artificial Intelligence student.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative pt-6">
          
          {/* Animated Central Drawing Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-cream-200 dark:bg-darkBg-border -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY }}
              className="w-full h-full bg-gradient-to-b from-amberAccent via-mustard to-softTeal origin-top"
            />
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-16">
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Pin */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cream-100 dark:bg-darkBg-card border-4 border-amberAccent flex items-center justify-center z-10 shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-charcoal-900 dark:bg-cream-100" />
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                    className={`ml-14 md:ml-0 md:w-[45%] ${
                      isEven ? 'md:pl-10 text-left' : 'md:pr-10 text-left md:text-right'
                    }`}
                  >
                    <div className="p-7 rounded-[2.2rem] bg-cream-100 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border shadow-soft-warm hover:shadow-xl transition-all space-y-4">
                      
                      {/* Top Badges */}
                      <div className={`flex flex-wrap items-center gap-2 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                        <span className="px-3 py-1 rounded-full bg-amberAccent/20 text-amberAccent-dark dark:text-amberAccent text-xs font-bold font-display">
                          {item.year}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cream-200/80 dark:bg-darkBg-surface text-charcoal-700 dark:text-cream-300 text-xs font-semibold flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>
                      </div>

                      {/* Title & School */}
                      <div>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-charcoal-900 dark:text-cream-100">
                          {item.title}
                        </h3>
                        <p className="text-sm font-semibold text-softTeal-dark dark:text-softTeal mt-1 flex items-center gap-1.5">
                          <GraduationCap className="w-4 h-4 shrink-0" />
                          <span>{item.institution}</span>
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-charcoal-600 dark:text-cream-300 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Skill chips */}
                      <div className={`flex flex-wrap gap-1.5 pt-2 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-cream-200/60 dark:bg-darkBg-surface text-charcoal-700 dark:text-cream-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

