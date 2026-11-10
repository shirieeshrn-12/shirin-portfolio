import { Project } from './portfolioData';

export const PROJECTS: Project[] = [
  {
    id: "shirin-portfolio",
    title: "Shirin — Modern Creative Portfolio",
    category: "Web Development",
    shortDesc: "A responsive, playful personal portfolio featuring 3D parallax physics, smooth Lenis scrolling, and automated Firebase Hosting.",
    fullDesc: "Designed and engineered as a modern, friendly developer portfolio for a first-year CSE (AI) student. Built with React 18, TypeScript, and Tailwind CSS, featuring split-hero architecture, custom cursor interactions, Framer Motion micro-interactions, dark/light theme switching, and continuous CI/CD via GitHub Actions and Firebase Hosting.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis", "Firebase Hosting", "Vite"],
    metrics: "Live on Firebase · 100% Responsive",
    image: "/shirin-about.jpg",
    githubUrl: "https://github.com/shirieeshrn-12/shirin-portfolio",
    liveUrl: "https://shirin-shriee.web.app",
    featured: true,
    highlights: [
      "Engineered with React 18, TypeScript, and Tailwind CSS for high performance and clean maintainability",
      "Interactive 3D perspective card tilt with dynamic glass sheen reflections and mouse tracking",
      "Smooth Lenis inertia scrolling site-wide and Framer Motion layout animations",
      "Automated continuous deployment directly to Firebase Hosting via GitHub Actions"
    ]
  }
];
