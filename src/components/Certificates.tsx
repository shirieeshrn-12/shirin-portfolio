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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Realistic Laptop + Mobile Phone Mockup Elements */}
            <div className="lg:col-span-7 relative flex items-center justify-center py-6 sm:py-8">
              
              {/* Background ambient glow behind devices */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-amberAccent/20 via-orange-400/15 to-transparent blur-3xl pointer-events-none" />

              {/* Main Device Stage */}
              <div className="relative w-full max-w-xl flex items-end justify-center">
                
                {/* 1. LAPTOP MOCKUP */}
                <div className="w-[88%] sm:w-[84%] relative group/laptop">
                  {/* Laptop Lid / Screen Bezel */}
                  <div className="relative bg-neutral-900 rounded-t-[1.6rem] sm:rounded-t-[2rem] p-2.5 sm:p-3 pb-2 sm:pb-2.5 shadow-2xl border-[3px] border-neutral-700/80 ring-1 ring-white/10">
                    
                    {/* Laptop Web Camera Dot */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 ring-1 ring-neutral-700 inline-block" />
                      <span className="w-0.5 h-0.5 rounded-full bg-emerald-500/70 inline-block" />
                    </div>

                    {/* Laptop Screen Display Window */}
                    <div className="relative rounded-t-xl overflow-hidden bg-neutral-950 aspect-[16/10] border border-neutral-800 shadow-inner">
                      
                      {/* Browser Mini Header Bar */}
                      <div className="bg-neutral-900/95 px-3 py-1.5 border-b border-neutral-800/80 flex items-center justify-between gap-2 backdrop-blur">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-rose-500/90 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-amber-500/90 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-emerald-500/90 inline-block" />
                        </div>
                        <div className="px-2.5 py-0.5 rounded-md bg-neutral-800/80 border border-neutral-700/50 text-[9px] sm:text-[10px] font-mono text-neutral-300 flex items-center gap-1 max-w-[180px] sm:max-w-[220px] truncate shadow-inner">
                          <span className="text-emerald-400 text-[8px]">🔒</span>
                          <span className="truncate">shirin-shriee.web.app</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[9px] font-bold text-neutral-400 hidden sm:inline">LIVE</span>
                        </div>
                      </div>

                      {/* Website Screenshot on Laptop Display */}
                      <div className="relative w-full h-[calc(100%-25px)] overflow-hidden bg-neutral-900">
                        <img
                          src="/portfolio-preview.jpg"
                          alt="Shirin Portfolio Website on Desktop/Laptop"
                          className="w-full h-full object-cover object-top group-hover/laptop:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* Glass Sheen */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Laptop Base / Bottom Chassis & Hinge */}
                  <div className="relative">
                    {/* Hinge recess */}
                    <div className="h-1 bg-neutral-800 mx-auto w-1/3 rounded-b-sm" />
                    {/* Base plate */}
                    <div className="relative h-3 sm:h-4 bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-800 rounded-b-xl shadow-2xl flex items-center justify-center border-t border-neutral-500/40">
                      {/* Notch to open display */}
                      <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-neutral-800 rounded-b-md mx-auto" />
                    </div>
                    {/* Rubber feet shadow */}
                    <div className="w-[94%] mx-auto h-2 bg-charcoal-900/60 dark:bg-black/60 blur-md rounded-full mt-0.5" />
                  </div>
                </div>

                {/* 2. MOBILE PHONE MOCKUP (Overlapping in the foreground, angled UI) */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className="absolute -right-1 sm:-right-3 -bottom-4 sm:-bottom-5 w-[38%] sm:w-[35%] max-w-[190px] z-20 group/phone"
                >
                  {/* Phone Outer Chassis / Curved Titanium Edge */}
                  <div className="relative bg-neutral-950 p-2 sm:p-2.5 rounded-[2.2rem] sm:rounded-[2.6rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-[3.5px] border-neutral-800/90 ring-1 ring-white/15">
                    
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-3 sm:top-3.5 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-3.5 sm:h-4 bg-black rounded-full z-30 flex items-center justify-end px-2 gap-1 border border-neutral-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-neutral-900 border border-neutral-700 inline-block" />
                    </div>

                    {/* Phone Screen Display */}
                    <div className="relative rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden bg-neutral-900 aspect-[9/18] border border-neutral-800 shadow-inner">
                      
                      {/* Mobile Screenshot */}
                      <img
                        src="/portfolio-preview.jpg"
                        alt="Shirin Portfolio Website Mobile Screen"
                        className="w-full h-full object-cover object-left-top group-hover/phone:scale-110 transition-transform duration-700 ease-out"
                      />

                      {/* Mobile Glass Sheen Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />

                      {/* Modern Bottom Home Indicator Bar */}
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-1 bg-white/70 rounded-full backdrop-blur-md shadow-sm z-30" />
                    </div>

                    {/* Side Hardware Volume / Power Buttons Simulation */}
                    <div className="absolute -left-[5.5px] top-12 w-[3px] h-6 bg-neutral-700 rounded-l-sm" />
                    <div className="absolute -left-[5.5px] top-20 w-[3px] h-6 bg-neutral-700 rounded-l-sm" />
                    <div className="absolute -right-[5.5px] top-14 w-[3px] h-10 bg-neutral-700 rounded-r-sm" />
                  </div>

                  {/* Floating Pill Tag */}
                  <div className="absolute -top-3 -left-3 sm:-left-4 z-30">
                    <span className="px-2.5 py-1 rounded-full bg-amberAccent text-charcoal-900 text-[10px] font-bold font-display shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-charcoal-900 stroke-none" />
                      <span>Mobile Ready</span>
                    </span>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Right: Project Narrative & Details */}
            <div className="lg:col-span-5 space-y-6">
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
