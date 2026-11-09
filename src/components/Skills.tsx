import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Globe, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const marqueeItems = [
  "Python", "NumPy", "Pandas", "Scikit-Learn", "React 18", "Tailwind CSS",
  "TypeScript", "OpenCV", "C Language", "Java", "Git", "GitHub", "Figma",
  "Vite", "Framer Motion", "GSAP", "Linux", "VS Code"
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map(c => c.category)];

  const filteredCategories = activeTab === "All"
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.category === activeTab);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <Code2 className="w-5 h-5" />;
      case 'brain': return <Brain className="w-5 h-5" />;
      case 'layout': return <Globe className="w-5 h-5" />;
      case 'wrench': return <Wrench className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-cream-50 dark:bg-darkBg-surface transition-colors duration-300 relative overflow-hidden">
      
      {/* Infinite Floating Marquee Banner */}
      <div className="absolute top-0 left-0 right-0 py-3 bg-amberAccent/15 dark:bg-amberAccent/10 border-y border-amberAccent/30 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-charcoal-700 dark:text-cream-200">
            {marqueeItems.concat(marqueeItems).map((tech, i) => (
              <span key={i} className="flex items-center gap-3">
                <span>{tech}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amberAccent" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-14 pt-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-softTeal/20 text-softTeal-dark dark:text-softTeal text-xs font-bold tracking-wider uppercase">
            <Brain className="w-3.5 h-3.5" />
            <span>Technical Toolbox</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 dark:text-cream-100 tracking-tight">
            Skills & technologies I craft with.
          </h2>
          <p className="text-charcoal-600 dark:text-cream-300 text-base sm:text-lg">
            From algorithmic data analysis in Python to interactive user interfaces with React, here is what powers my code.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full font-display font-semibold text-sm transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-amberAccent text-charcoal-900 shadow-md shadow-amberAccent/30 scale-105'
                  : 'bg-cream-200/80 dark:bg-darkBg-card text-charcoal-700 dark:text-cream-300 hover:bg-cream-300/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
              className="p-8 rounded-[2rem] bg-cream-100 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border shadow-soft-warm hover:shadow-xl transition-all"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-cream-200 dark:border-darkBg-border">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-amberAccent/20 text-amberAccent-dark dark:text-amberAccent flex items-center justify-center">
                    {getCategoryIcon(group.icon)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-charcoal-900 dark:text-cream-100">
                      {group.category}
                    </h3>
                    <p className="text-xs text-charcoal-500 dark:text-cream-400">
                      {group.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cream-200 dark:bg-darkBg-surface text-charcoal-700 dark:text-cream-200">
                  {group.skills.length} tools
                </span>
              </div>

              {/* Skills List with Progress Rings / Bars */}
              <div className="space-y-4 pt-6">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="font-semibold text-charcoal-800 dark:text-cream-100">
                          {skill.name}
                        </span>
                        {skill.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amberAccent/20 text-amberAccent-dark dark:text-amberAccent">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs font-bold text-charcoal-500 dark:text-cream-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-cream-200 dark:bg-darkBg-surface overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-amberAccent to-mustard"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

