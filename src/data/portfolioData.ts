export interface Project {
  id: string;
  title: string;
  category: 'AI / ML' | 'Web Development' | 'Creative';
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  metrics?: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage 0-100
    badge?: string;
  }[];
}

export interface TimelineItem {
  year: string;
  period: string;
  title: string;
  institution: string;
  description: string;
  badge: string;
  skills: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  badgeText: string;
  iconName: string;
}

export const PERSONAL_INFO = {
  name: "Shirin",
  fullName: "Shirin",
  role: "CSE (AI) Student & Developer",
  college: "Thejus College of Engineering",
  location: "Thrissur, Kerala, India",
  degree: "B.Tech Computer Science & Engineering (Artificial Intelligence)",
  year: "1st Year (2024 - 2028)",
  headlineGreeting: "Hey!",
  headlineHand: "🤝",
  tagline: "Be curious today :)",
  subheading: "I'm Shirin, a CSE (AI) student who loves building smart, beautiful things.",
  introParagraph: "First-year B.Tech CSE (Artificial Intelligence) student at Thejus College, Thrissur, Kerala. I sit at the playful crossroads of machine learning, modern web engineering, and thoughtful UI/UX—crafting software that is both intelligent under the hood and warm on the surface.",
  tags: [
    "AI & ML",
    "Web Development",
    "UI/UX Design",
    "Problem Solving"
  ],
  stats: [
    { label: "Projects Built", value: 12, suffix: "+" },
    { label: "Certifications", value: 6, suffix: "+" },
    { label: "Hackathons & Events", value: 3, suffix: "+" },
    { label: "Hours of Coding", value: 650, suffix: "+" },
  ],
  socials: {
    github: "https://github.com/shirieeshrn-12",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "shirin.thejus@gmail.com",
  },
  resumeUrl: "#"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    icon: "code",
    description: "Core programming languages I write code in daily",
    skills: [
      { name: "Python", level: 90, badge: "Primary" },
      { name: "C Language", level: 85, badge: "Academic" },
      { name: "Java", level: 75 },
      { name: "JavaScript (ES6+)", level: 88, badge: "Web" },
      { name: "TypeScript", level: 80 },
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "brain",
    description: "Data modeling, statistical learning, and computer vision",
    skills: [
      { name: "NumPy & Pandas", level: 85, badge: "Data" },
      { name: "Scikit-Learn", level: 80, badge: "ML Models" },
      { name: "Data Visualisation (Matplotlib/Seaborn)", level: 82 },
      { name: "TensorFlow & PyTorch Basics", level: 68, badge: "Learning" },
      { name: "OpenCV Computer Vision", level: 72 },
    ]
  },
  {
    category: "Web Development",
    icon: "layout",
    description: "Crafting modern, accessible, responsive user interfaces",
    skills: [
      { name: "React 18/19", level: 88, badge: "Frontend" },
      { name: "Tailwind CSS", level: 92, badge: "Styling" },
      { name: "HTML5 & Modern CSS", level: 95 },
      { name: "Framer Motion & GSAP", level: 80, badge: "Animations" },
      { name: "REST APIs & JSON", level: 84 },
    ]
  },
  {
    category: "Tools & Ecosystem",
    icon: "wrench",
    description: "Workflow tooling, source control, and design platforms",
    skills: [
      { name: "Git & GitHub", level: 88, badge: "VCS" },
      { name: "VS Code & Extensions", level: 92 },
      { name: "Figma (UI/UX)", level: 78, badge: "Design" },
      { name: "Linux / Bash", level: 74 },
      { name: "Vercel / Netlify", level: 85, badge: "Deploy" },
    ]
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2024",
    period: "August 2024 – Present",
    title: "Joined B.Tech CSE (Artificial Intelligence)",
    institution: "Thejus College of Engineering, Thrissur, Kerala",
    description: "Embarked on my engineering journey with a dedicated specialization in Artificial Intelligence. Active participant in the college tech symposiums, coding club, and AI research study groups.",
    badge: "Milestone",
    skills: ["C Programming", "Discrete Mathematics", "Digital Logic", "Python Fundamentals"]
  },
  {
    year: "2024",
    period: "Late 2024",
    title: "Deep Dive into Modern Web & Intelligent Apps",
    institution: "Self-driven & Student Workshops",
    description: "Combined modern React component ecosystems with intelligent Python backends. Started crafting micro-apps and exploring computer vision with OpenCV.",
    badge: "Exploration",
    skills: ["React", "Tailwind CSS", "NumPy", "Pandas", "OpenCV"]
  },
  {
    year: "2025",
    period: "Early 2025 – Present",
    title: "Interactive AI Projects & First Hackathons",
    institution: "College & State Level Hackathons",
    description: "Collaborated in team hackathons, building solutions for campus resource sharing and regional agricultural crop monitoring using computer vision.",
    badge: "Current Focus",
    skills: ["Machine Learning", "Framer Motion", "TypeScript", "Problem Solving"]
  },
  {
    year: "Next",
    period: "Future Roadmap",
    title: "Advanced Deep Learning & Research Publications",
    institution: "Thejus College & Open Source",
    description: "Aiming to build generative AI tools that empower education and accessibility, with research focus on edge AI inference.",
    badge: "Aspirations",
    skills: ["PyTorch", "LLM APIs", "Full-Stack AI", "Edge Computing"]
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM / Coursera",
    date: "2024",
    description: "Comprehensive hands-on training covering Python data structures, pandas analysis, data scraping, and API integration for AI models.",
    badgeText: "Verified Certificate",
    iconName: "award"
  },
  {
    id: "cert-2",
    title: "Machine Learning Foundations & Supervised Algorithms",
    issuer: "DeepLearning.AI / Stanford Online",
    date: "2024",
    description: "Regression, classification, loss optimization, gradient descent, and evaluation metrics using scikit-learn and NumPy.",
    badgeText: "Honors",
    iconName: "brain"
  },
  {
    id: "cert-3",
    title: "Front-End Developer Specialization",
    issuer: "Meta / Coursera",
    date: "2024",
    description: "Modern JavaScript, responsive UI design, component lifecycles in React, and web accessibility standards.",
    badgeText: "Professional",
    iconName: "layout"
  },
  {
    id: "cert-4",
    title: "Thejus College Tech Fest Coding Sprint",
    issuer: "Thejus College of Engineering",
    date: "2024",
    description: "Ranked among top performers in algorithmic problem solving and time-constrained debugging challenges.",
    badgeText: "Competition",
    iconName: "zap"
  },
  {
    id: "cert-5",
    title: "Git, GitHub & Open Source Collaboration",
    issuer: "GitHub Education",
    date: "2024",
    description: "Mastered branching strategies, pull requests, semantic commit conventions, and open source CI/CD workflows.",
    badgeText: "Completed",
    iconName: "git-branch"
  }
];

