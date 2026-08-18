
  <h1>Mara Vignesh — 3D Interactive Developer Portfolio</h1>
  <p><strong>A futuristic 3D digital workspace & AI visualization built with React, Vite, Three.js, and React Three Fiber.</strong></p>

  <p>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=black" alt="React" /></a>
    <a href="https://threejs.org/"><img src="https://img.shields.io/badge/Three.js-r168-black?style=flat&logo=three.js&logoColor=white" alt="Three.js" /></a>
    <a href="https://docs.pmnd.rs/react-three-fiber"><img src="https://img.shields.io/badge/R3F-8.x-purple?style=flat" alt="R3F" /></a>
    <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel&logoColor=white" alt="Vercel" /></a>
  </p>
</div>

---

## 🔮 Overview & Key Changes

This repository has been completely rebuilt from a static portfolio into a **state-of-the-art 3D interactive portfolio** featuring a cohesive **Midnight Purple futuristic aesthetic**.

### 💎 What's New:
- **Signature Irregular 3D Crystalline Structure**: A bespoke, non-primitive procedural 3D sculpture featuring harmonic geometric lobes, holographic exoskeleton wireframes, an inner neural nucleus, and orbiting crystal shards.
- **Living Autonomous Motion**: Continuous harmonic oscillation, floating hover, geometric breathing, and pulsing internal light.
- **Dynamic Mouse Interactivity**:
  - 3-axis smooth rotation & parallax tilt.
  - Proximity-based magnetic displacement & core lighting flares.
  - Interactive spore and particle dispersal with spring damping.
- **Scroll Choreography**: The 3D structure morphs its position, scale, and orientation smoothly as you scroll across Hero, About, Skills, Projects, and Contact.
- **Interactive Skill Constellation**: SVG-based dynamic node graph with interactive hover lines and mouse parallax.
- **3D Perspective Project Cards**: Interactive tilt cards showcasing key projects (Citizen360, AI Movie Recommendation, Aqua Tracker, Birthday Generator).
- **Midnight Purple Theme & Glassmorphism**: Tailored dark palette (`#05030D` base, `#8B5CF6` / `#C084FC` accents, `rgba(15, 10, 30, 0.65)` glass cards).

---

## 🎨 Color System Tokens

| Token | Value | Usage |
|---|---|---|
| **Primary Background** | `#05030D` | Deep canvas across all sections |
| **Secondary Background** | `#0B0718` | Section & mockup contrast |
| **Dark Surface** | `#100B1F` | Card bases and inner SVG panels |
| **Primary Accent** | `#8B5CF6` | Buttons, active navigation, timeline indicators |
| **Secondary Accent** | `#C084FC` | Typography highlights, tags, orbital rings |
| **3D Glow** | `#A855F7` | 3D lighting, wireframe glow, spore flare |
| **Soft Highlight** | `#E9D5FF` | Lavender rim lighting, text accents |
| **Glassmorphism** | `rgba(15, 10, 30, 0.65)` | Backdrop blur cards with `rgba(168, 85, 247, 0.20)` border |

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 5
- **3D Engine**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Styling**: Vanilla CSS Design System (Custom Design Tokens, Glassmorphism, CSS Grid, Custom Scrollbars)
- **Icons**: Lucide React
- **Animations**: Spring damping, requestAnimationFrame lerp loops, CSS hardware-accelerated transforms

---

## 📁 Project Structure

```
main_portfolio/
├── public/                     # Static assets (Resume PDF, Certificates)
│   └── sections/
├── src/
│   ├── components/             # React UI components
│   │   ├── Cursor.jsx          # Custom interactive cursor
│   │   ├── Navbar.jsx          # Glass navbar with scrollspy
│   │   ├── Hero.jsx            # Hero section with typewriter & CTAs
│   │   ├── About.jsx           # Bento bio & animated counter cards
│   │   ├── Skills.jsx          # Interactive SVG skill constellation
│   │   ├── Experience.jsx      # Vertical work timeline
│   │   ├── Projects.jsx        # 3D tilt project cards & filters
│   │   ├── Achievements.jsx    # Accolades cards
│   │   ├── Certifications.jsx  # Verified credential cards
│   │   ├── Contact.jsx         # Contact form & floating energy orb
│   │   └── Footer.jsx          # Footer with social links
│   ├── hooks/                  # Custom hooks (useMouseParallax, useScrollReveal)
│   ├── three/                  # 3D scenes & procedural graphics
│   │   ├── BackgroundScene.jsx # Global full-screen 3D abstract structure & particles
│   │   └── HeroScene.jsx       # Holographic telemetry interface
│   ├── App.jsx                 # Main application layout
│   ├── index.css               # Global Midnight Purple design system
│   └── main.jsx                # Application root entry
├── index.html                  # HTML entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended ⚡)
1. Push this repository to GitHub.
2. Sign in to **[Vercel](https://vercel.com/)** and click **Add New Project**.
3. Import this repository (`main_portfolio`).
4. Vercel will automatically detect **Vite** (`npm run build` -> `dist`).
5. Click **Deploy**. Your site will be live on a global Edge CDN in seconds!

---

## 👤 Author

**Mara Vignesh**  
*Computer Science & Artificial Intelligence Undergraduate*  
- GitHub: [@mvh2005](https://github.com/mvh2005)  
- LinkedIn: [Mara Vignesh](https://www.linkedin.com/in/mara-vignesh-561942279/)  
- Email: vigneshmara143@gmail.com
