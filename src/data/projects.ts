import { Project } from './portfolioData';

export const PROJECTS: Project[] = [
  {
    id: "neural-gesture-vision",
    title: "NeuralVision — AI Gesture Control",
    category: "AI / ML",
    shortDesc: "Real-time hand gesture recognition and spatial control system using lightweight computer vision.",
    fullDesc: "NeuralVision is an interactive AI application that detects hand landmarks at 60 FPS using MediaPipe and OpenCV, translating complex finger gestures into computer controls (volume adjust, presentation slide flipping, and digital canvas drawing). Built to explore practical human-computer interaction with neural models.",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Tkinter"],
    metrics: "97.4% accuracy at 60 FPS",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/shirieeshrn-12",
    liveUrl: "https://shirieeshrn-12.github.io/shirin-portfolio",
    featured: true,
    highlights: [
      "Custom landmark vectorization pipeline for low-latency inference on standard CPU",
      "Robust to background illumination changes using adaptive histogram normalization",
      "Configurable shortcut maps allowing users to bind custom gestures to OS keyboard shortcuts"
    ]
  },
  {
    id: "campuspulse-thejus",
    title: "CampusPulse — Thejus Student Hub",
    category: "Web Development",
    shortDesc: "Collaborative campus event tracker and academic resource portal designed specifically for Thejus students.",
    fullDesc: "A responsive single-page web app built to streamline college announcements, workshop registrations, tech club schedules, and study material sharing for CSE & engineering departments. Features micro-interactions, dark/light themes, and real-time event reminders.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "LocalStorage"],
    metrics: "500+ student queries simulated",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/shirieeshrn-12",
    liveUrl: "https://shirieeshrn-12.github.io/shirin-portfolio",
    featured: true,
    highlights: [
      "Dynamic filtering by department, event date, and registration deadlines",
      "Zero-latency search with client-side indexing and smooth Framer Motion layout animations",
      "Full offline fallback support and accessible ARIA navigation"
    ]
  },
  {
    id: "kerala-crop-guard",
    title: "AgriSense — Kerala Crop Health AI",
    category: "AI / ML",
    shortDesc: "Machine learning classifier for early detection of coconut and pepper leaf blight in Kerala agriculture.",
    fullDesc: "Developed as an exploration of practical AI for regional Kerala agriculture, AgriSense allows farmers and students to upload leaf photos to instantly diagnose common fungal blights and nutrient deficiencies, returning actionable organic remedy recommendations in Malayalam and English.",
    technologies: ["Python", "Scikit-Learn", "OpenCV", "Streamlit", "Matplotlib"],
    metrics: "94.2% diagnostic validation",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/shirieeshrn-12",
    liveUrl: "https://shirieeshrn-12.github.io/shirin-portfolio",
    featured: true,
    highlights: [
      "Trained on curated dataset of coconut palm and black pepper leaf pathology",
      "Color space segmentation (HSV & LAB) to isolate affected necrotic regions",
      "Bilingual interface designed for mobile web usability in rural agricultural zones"
    ]
  },
  {
    id: "neuro-play-canvas",
    title: "NeuroPlay — Visual AI Playground",
    category: "Creative",
    shortDesc: "Interactive browser-based playground visualizing how perceptrons and neural activation functions compute.",
    fullDesc: "An educational sandbox designed for first-year peers to build intuition around how artificial neurons work. Users can drag data points in a 2D plane, watch decision boundaries adapt in real-time, inspect weights, and switch activation functions (ReLU, Sigmoid, Tanh).",
    technologies: ["React", "HTML5 Canvas", "Tailwind CSS", "TypeScript"],
    metrics: "Interactive 60 FPS Canvas",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/shirieeshrn-12",
    liveUrl: "https://shirieeshrn-12.github.io/shirin-portfolio",
    featured: false,
    highlights: [
      "Step-by-step forward pass visualization with color-graded probability heatmaps",
      "Interactive loss curve graphing as weights optimize",
      "Zero external ML library dependencies in the browser core"
    ]
  }
];

