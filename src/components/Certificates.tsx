import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Github, ExternalLink, Sparkles, CheckCircle2, Code2, Globe } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export const Certificates: React.FC = () => {
  const project = PROJECTS[0];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-cream-100 dark:bg-darkBg-base transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amberAccent/20 text-charcoal-900 dark:text-cream-100 text-xs font-bold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 text-amberAccent-dark" />
            <span>Featured Project</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 dark:text-cream-100 tracking-tight">
            My Portfolio Project.
          </h2>
          <p className="text-charcoal-600 dark:text-cream-300 text-base sm:text-lg">
            A modern, responsive creative portfolio engineered from scratch with React, TypeScript, and Firebase.
          </p>
        </div>

        {/* Featured Project Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.8rem] bg-cream-50 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border shadow-soft-warm hover:shadow-2xl transition-all duration-300 overflow-hidden p-6 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Project Visual Preview */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-[2.2rem] overflow-hidden aspect-[4/5] bg-cream-200 dark:bg-darkBg-surface border-4 border-cream-50 dark:border-darkBg-border shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-[center_15%] grayscale contrast-[1.08] group-hover:grayscale-0 group-hover:scale-104 transition-all duration-700 ease-out"
                />
                
                {/* Live Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-cream-100/95 dark:bg-darkBg-card/95 text-charcoal-800 dark:text-cream-100 text-xs font-bold font-display shadow-sm backdrop-blur-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live on Firebase</span>
                  </span>
                </div>

                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-amberAccent text-charcoal-900 text-xs font-bold font-display shadow-md">
                    B.Tech CSE (AI)
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Project Narrative & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amberAccent-dark dark:text-amberAccent">
                  <Globe className="w-4 h-4" />
                  <span>Production Web Application</span>
                </div>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-charcoal-900 dark:text-cream-100">
                  {project.title}
                </h3>
                <p className="text-charcoal-700 dark:text-cream-300 text-base leading-relaxed">
                  {project.fullDesc}
                </p>
              </div>

              {/* Key Features & Highlights */}
              <div className="space-y-2.5 pt-2">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-500 dark:text-cream-400">
                  Architecture & Features
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal-700 dark:text-cream-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-2 pt-2">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-500 dark:text-cream-400">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl bg-cream-200 dark:bg-darkBg-surface text-charcoal-800 dark:text-cream-200 font-semibold text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-cream-200 dark:border-darkBg-border">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-charcoal-900 text-cream-100 dark:bg-cream-100 dark:text-charcoal-900 font-display font-bold text-sm hover:scale-102 transition-transform shadow-md"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-amberAccent hover:bg-amberAccent-hover text-charcoal-900 font-display font-bold text-sm hover:scale-102 transition-transform shadow-md shadow-amberAccent/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Live Website</span>
                  </a>
                )}
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
