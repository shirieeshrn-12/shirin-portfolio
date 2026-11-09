# Shirin's Portfolio 🎓✨

A modern, playful, and responsive personal portfolio built for **Shirin**, a first-year B.Tech Computer Science & Engineering (Artificial Intelligence) student at **Thejus College**, Thrissur, Kerala.

Inspired by friendly 3D designer portfolios, featuring an asymmetrical split-hero with a warm cream panel, chunky rounded typography, interactive tilt cards, and smooth storytelling animations.

---

## 🎨 Visual Identity & Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animation Suite**:
  - [Framer Motion](https://www.framer.com/motion/) (UI state animations, entry reveals, modals)
  - [Lenis](https://github.com/darkroomengineering/lenis) (Smooth butter scroll)
  - [Canvas Confetti](https://github.com/catdad/canvas-confetti) (Interactive celebration on contact send)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**:
  - Headings: `Fredoka` & `Baloo 2` (Chunky rounded geometric display)
  - Body: `Plus Jakarta Sans` (Clean, legible geometric sans)
  - Taglines: `Caveat` (Warm handwritten script)
- **Color Palette**:
  - Warm Cream: `#F7F3EC`
  - Deep Charcoal: `#3B3A33`
  - Vivid Amber: `#FFA94D`
  - Soft Teal: `#7FBFC4`
  - Mustard Yellow: `#F2C14E`

---

## 📂 Project Structure

```text
shirin-portfolio/
├── public/
│   ├── avatar.png          # Your 3D avatar (replace anytime)
│   ├── favicon.svg         # Animated wave & avatar favicon
│   └── og-image.png        # Social preview image
├── src/
│   ├── data/
│   │   ├── portfolioData.ts # Centralized bio, college, stats, certs & socials
│   │   └── projects.ts      # Projects list (add/edit your apps here)
│   ├── components/
│   │   ├── Navbar.tsx       # Brand mark, dark mode toggle & menu button
│   │   ├── FullscreenMenu.tsx # Fullscreen animated overlay menu
│   │   ├── Hero.tsx         # Reference split hero with 3D avatar & cream panel
│   │   ├── About.tsx        # Story, college badges & animated counters
│   │   ├── Skills.tsx       # Tech categories + progress rings + infinite marquee
│   │   ├── Projects.tsx     # 3D tilt cards + interactive details modal
│   │   ├── JourneyTimeline.tsx # Vertical timeline drawing itself on scroll
│   │   ├── Certificates.tsx # Pinned horizontal scrolling cards
│   │   ├── Contact.tsx      # Contact form + confetti + copy email
│   │   ├── Footer.tsx       # "Be curious today :)" & back to top
│   │   ├── CustomCursor.tsx # Trailing magnetic cursor dot & ring
│   │   ├── ScrollProgress.tsx # Top amber progress indicator
│   │   └── Preloader.tsx    # Playful monogram curtain intro
│   ├── context/
│   │   └── ThemeContext.tsx # Light/dark mode provider
│   ├── hooks/
│   │   ├── useLenis.ts      # Smooth scrolling integration
│   │   └── useMagnetic.ts   # Physical spring pull on hover
│   ├── styles/
│   │   └── index.css        # Tailwind & custom keyframe styling
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🛠️ How to Customize Your Portfolio

All your personal details are organized in a single folder: `src/data/`:

### 1. Update Bio, College, & Socials
Open `src/data/portfolioData.ts`:
- Change your name, college, location, or taglines
- Update your social links (`github`, `linkedin`, `instagram`, `email`)
- Update your skill lists and proficiency levels
- Update your academic journey milestones and certificates

### 2. Add or Edit Projects
Open `src/data/projects.ts`:
- Edit titles, descriptions, metrics, tags, and screenshots
- Add your GitHub and Live Demo links

### 3. Replace Your Avatar Image
Drop your custom illustration or photo into:
```text
public/avatar.png
```
The site automatically picks it up with the gentle breathing animation and mouse parallax.

---

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser.

---

## 🚀 How to Deploy (Vercel & Netlify)

### Option 1: Deploy to Vercel (Recommended)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: Shirin modern portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/shirin-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New Project"** and import `shirin-portfolio`.
4. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your portfolio is live in under 60 seconds with free SSL!

### Option 2: Deploy to Netlify
1. Go to [netlify.com](https://www.netlify.com/).
2. Click **"Add new site"** → **"Import an existing project"** → connect GitHub.
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **"Deploy Shirin's Portfolio"**.

