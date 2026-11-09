import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, X, Layers, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { Project } from '../data/portfolioData';

// 3D Tilt Project Card
const ProjectCard: React.FC<{
  project: Project;
  onSelect: (p: Project) => void;
}> = ({ project, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={() => onSelect(project)}
      className="group cursor-pointer rounded-[2.2rem] overflow-hidden bg-cream-50 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border shadow-soft-warm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
    >
      {/* Image Thumbnail with Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden bg-cream-200 dark:bg-darkBg-surface">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
          <span className="text-xs font-bold text-cream-100 bg-amberAccent/90 px-3 py-1 rounded-full backdrop-blur-sm">
            Click to view case study ↗
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-cream-100/90 dark:bg-darkBg-card/90 text-charcoal-800 dark:text-cream-100 text-xs font-bold font-display shadow-sm backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {project.metrics && (
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold shadow-sm backdrop-blur-md">
              {project.metrics}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-charcoal-900 dark:text-cream-100 group-hover:text-amberAccent transition-colors">
            {project.title}
          </h3>
          <p className="text-charcoal-600 dark:text-cream-300 text-sm leading-relaxed line-clamp-2">
            {project.shortDesc}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-cream-200/70 dark:bg-darkBg-surface text-charcoal-700 dark:text-cream-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-semibold px-2 py-1 rounded-lg bg-cream-200/40 text-charcoal-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Link Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-cream-200/80 dark:border-darkBg-border text-xs font-semibold text-charcoal-500 dark:text-cream-400">
          <span className="group-hover:text-amberAccent flex items-center gap-1 font-display transition-colors">
            Explore details <ExternalLink className="w-3.5 h-3.5" />
          </span>
          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="p-1.5 rounded-full hover:bg-cream-200 dark:hover:bg-darkBg-surface hover:text-amberAccent transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Live Demo"
                className="p-1.5 rounded-full hover:bg-cream-200 dark:hover:bg-darkBg-surface hover:text-amberAccent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Accessible Escape key listener & body scroll lock
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-cream-100 dark:bg-darkBg-base transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amberAccent/20 text-charcoal-900 dark:text-cream-100 text-xs font-bold tracking-wider uppercase">
              <Layers className="w-3.5 h-3.5 text-amberAccent-dark" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 dark:text-cream-100 tracking-tight">
              Featured works & experiments.
            </h2>
            <p className="text-charcoal-600 dark:text-cream-300 text-base sm:text-lg">
              Real code combining machine learning intelligence, practical student utilities, and modern web architectures.
            </p>
          </div>

          <p className="text-xs font-semibold text-charcoal-500 dark:text-cream-400 font-mono">
            // Centralized in src/data/projects.ts
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal-900/60 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-[2.5rem] bg-cream-50 dark:bg-darkBg-card border border-cream-200 dark:border-darkBg-border shadow-2xl overflow-hidden my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-cream-100/90 dark:bg-darkBg-surface/90 text-charcoal-800 dark:text-cream-100 flex items-center justify-center hover:scale-110 shadow-md transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Cover Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-200 dark:bg-darkBg-surface">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                  <div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amberAccent text-charcoal-900 font-display">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-4xl text-cream-100 mt-2">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="font-display font-bold text-lg text-charcoal-900 dark:text-cream-100 mb-2">
                    Overview & Objective
                  </h4>
                  <p className="text-charcoal-700 dark:text-cream-300 text-sm sm:text-base leading-relaxed">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="font-display font-bold text-lg text-charcoal-900 dark:text-cream-100 mb-2">
                    Key Features & Technical Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal-700 dark:text-cream-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-charcoal-500 dark:text-cream-400 mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-xl bg-cream-200 dark:bg-darkBg-surface text-charcoal-800 dark:text-cream-200 font-semibold text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-cream-200 dark:border-darkBg-border">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-charcoal-900 text-cream-100 dark:bg-cream-100 dark:text-charcoal-900 font-display font-bold text-sm hover:scale-102 transition-transform shadow-md"
                    >
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-amberAccent hover:bg-amberAccent-hover text-charcoal-900 font-display font-bold text-sm hover:scale-102 transition-transform shadow-md shadow-amberAccent/30"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

