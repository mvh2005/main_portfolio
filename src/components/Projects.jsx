import React, { useState, useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    number: "01",
    title: "Citizen360 — Civic Management System",
    desc: "Built a civic complaint management system featuring automated complaint classification using NLP keyword routing, secure authentication, admin dashboard, and real-time complaint tracking.",
    tags: ["React", "Spring Boot", "MySQL", "AI Routing", "REST APIs"],
    category: ["all", "fullstack", "ai"],
    github: "https://github.com/mvh2005",
    accent: "#8B5CF6",
    svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0B0718" rx="10"/>
      <rect x="15" y="15" width="370" height="190" fill="#100B1F" rx="6" stroke="rgba(168,85,247,0.2)" stroke-width="1"/>
      <rect x="30" y="30" width="340" height="35" fill="#18112E" rx="4"/>
      <text x="45" y="52" fill="#C084FC" font-family="JetBrains Mono, monospace" font-size="11" font-weight="bold">Citizen360 AI • Automated Civic Router</text>
      <circle cx="340" cy="48" r="8" fill="#8B5CF6"/>
      <rect x="30" y="75" width="165" height="110" fill="#18112E" rx="4" stroke="rgba(168,85,247,0.25)" stroke-width="1"/>
      <text x="42" y="95" fill="#F8FAFC" font-family="Space Grotesk, sans-serif" font-size="10" font-weight="bold">AI Department Routing</text>
      <rect x="42" y="105" width="140" height="18" fill="#100B1F" rx="3"/>
      <text x="48" y="118" fill="#C084FC" font-family="Space Grotesk, sans-serif" font-size="8">Roads &amp; Sanitation</text>
      <rect x="42" y="128" width="140" height="18" fill="#100B1F" rx="3"/>
      <text x="48" y="141" fill="#8B5CF6" font-family="Space Grotesk, sans-serif" font-size="8">Water Supply &amp; Power</text>
      <rect x="42" y="151" width="140" height="18" fill="#100B1F" rx="3"/>
      <text x="48" y="164" fill="#E9D5FF" font-family="Space Grotesk, sans-serif" font-size="8">GPS + Photo Evidence</text>
      <rect x="205" y="75" width="165" height="110" fill="#18112E" rx="4" stroke="rgba(192,132,252,0.25)" stroke-width="1"/>
      <text x="218" y="95" fill="#C084FC" font-family="Space Grotesk, sans-serif" font-size="10" font-weight="bold">Admin Analytics HUD</text>
      <circle cx="288" cy="138" r="30" fill="none" stroke="#261642" stroke-width="6"/>
      <circle cx="288" cy="138" r="30" fill="none" stroke="#8B5CF6" stroke-width="6" stroke-dasharray="140 50"/>
      <text x="274" y="142" fill="#F8FAFC" font-family="Space Grotesk, sans-serif" font-size="11" font-weight="bold">94%</text>
      <text x="218" y="174" fill="#A1A1AA" font-family="Space Grotesk, sans-serif" font-size="8">Resolution Velocity</text>
    </svg>`,
  },
  {
    id: 2,
    number: "02",
    title: "Movie Recommendation System",
    desc: "Developed a movie recommendation system using the TMDB dataset with 1M+ records, generating Top-10 personalized recommendations using TF-IDF vectorization and cosine similarity in under one second.",
    tags: ["Python", "Machine Learning", "TF-IDF", "Cosine Similarity", "Pandas"],
    category: ["all", "ai"],
    github: "https://github.com/mvh2005/AI-Based-Movie-Recommendation-System",
    accent: "#C084FC",
    svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0B0718" rx="10"/>
      <rect x="15" y="15" width="370" height="190" fill="#100B1F" rx="6" stroke="rgba(168,85,247,0.2)" stroke-width="1"/>
      <rect x="30" y="30" width="340" height="35" fill="#18112E" rx="4"/>
      <text x="45" y="52" fill="#E9D5FF" font-family="JetBrains Mono, monospace" font-size="11" font-weight="bold">AI Movie Recommendation ML Vectorizer</text>
      <rect x="30" y="75" width="160" height="110" fill="#18112E" rx="4" stroke="rgba(168,85,247,0.2)" stroke-width="1"/>
      <text x="40" y="95" fill="#F8FAFC" font-family="Space Grotesk, sans-serif" font-size="9" font-weight="bold">Feature Matrix (NLP/Tags)</text>
      <text x="40" y="125" fill="#A1A1AA" font-family="JetBrains Mono, monospace" font-size="8">Sci-Fi • Space • Time</text>
      <text x="40" y="142" fill="#C084FC" font-family="JetBrains Mono, monospace" font-size="8">Cosine Similarity: 0.94</text>
      <rect x="40" y="155" width="135" height="18" fill="rgba(139,92,246,0.2)" rx="3"/>
      <text x="48" y="168" fill="#E9D5FF" font-family="Space Grotesk, sans-serif" font-size="8">Model: Scikit-learn</text>
      <rect x="200" y="75" width="170" height="110" fill="#18112E" rx="4" stroke="rgba(192,132,252,0.2)" stroke-width="1"/>
      <text x="210" y="95" fill="#C084FC" font-family="Space Grotesk, sans-serif" font-size="9" font-weight="bold">Top Recommendation</text>
      <rect x="210" y="105" width="150" height="32" fill="#100B1F" rx="4"/>
      <text x="218" y="120" fill="#F8FAFC" font-family="Space Grotesk, sans-serif" font-size="9" font-weight="bold">Interstellar (2014)</text>
      <text x="218" y="132" fill="#8B5CF6" font-family="Space Grotesk, sans-serif" font-size="8">Match Score: 98.4%</text>
      <rect x="210" y="144" width="150" height="28" fill="#100B1F" rx="4"/>
      <text x="218" y="158" fill="#F8FAFC" font-family="Space Grotesk, sans-serif" font-size="9" font-weight="bold">Inception (2010)</text>
      <text x="218" y="168" fill="#8B5CF6" font-family="Space Grotesk, sans-serif" font-size="8">Match Score: 95.1%</text>
    </svg>`,
  },
  {
    id: 3,
    number: "03",
    title: "Aqua Tracker App",
    desc: "Designed and developed a water-intake tracker with hourly reminders, daily and weekly analytics, personalized hydration goals, and persistent Firebase data synchronization.",
    tags: ["TypeScript", "Firebase", "HTML5", "CSS3", "Analytics"],
    category: ["all", "fullstack"],
    github: "https://github.com/mvh2005/Aqua_Tracker",
    accent: "#A855F7",
    svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0B0718" rx="10"/>
      <rect x="15" y="15" width="370" height="190" fill="#100B1F" rx="6" stroke="rgba(168,85,247,0.2)" stroke-width="1"/>
      <rect x="30" y="30" width="340" height="35" fill="#18112E" rx="4"/>
      <text x="45" y="52" fill="#C084FC" font-family="JetBrains Mono, monospace" font-size="11" font-weight="bold">Aqua Tracker • Daily Hydration Engine</text>
      <circle cx="110" cy="130" r="45" fill="none" stroke="#261642" stroke-width="8"/>
      <circle cx="110" cy="130" r="45" fill="none" stroke="#8B5CF6" stroke-width="8" stroke-dasharray="210 70" stroke-linecap="round"/>
      <text x="88" y="132" fill="#F8FAFC" font-family="Space Grotesk, sans-serif" font-size="16" font-weight="bold">2.4 L</text>
      <text x="85" y="148" fill="#C084FC" font-family="Space Grotesk, sans-serif" font-size="9">of 3.0 L Goal</text>
      <rect x="190" y="75" width="180" height="110" fill="#18112E" rx="4" stroke="rgba(168,85,247,0.2)" stroke-width="1"/>
      <text x="202" y="95" fill="#F8FAFC" font-family="Space Grotesk, sans-serif" font-size="10" font-weight="bold">Daily Habit Analytics</text>
      <rect x="202" y="105" width="156" height="22" fill="#100B1F" rx="3"/>
      <text x="210" y="120" fill="#E9D5FF" font-family="Space Grotesk, sans-serif" font-size="9">✓ Streak: 14 Days Active</text>
      <rect x="202" y="134" width="156" height="22" fill="#100B1F" rx="3"/>
      <text x="210" y="149" fill="#C084FC" font-family="Space Grotesk, sans-serif" font-size="9">⚡ Firebase Realtime Sync</text>
      <rect x="202" y="162" width="156" height="12" fill="#8B5CF6" rx="6" opacity="0.4"/>
    </svg>`,
  },
  {
    id: 4,
    number: "04",
    title: "Birthday Message Generator",
    desc: "AI-powered birthday message generator supporting 10+ message themes with real-time personalized content generation using the Google Gemini Flash API via Streamlit.",
    tags: ["Python", "Streamlit", "Google Gemini API", "Generative AI"],
    category: ["all", "ai"],
    github: "https://github.com/mvh2005/Birthday_Message-Generator",
    accent: "#E9D5FF",
    svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0B0718" rx="10"/>
      <rect x="15" y="15" width="370" height="190" fill="#100B1F" rx="6" stroke="rgba(168,85,247,0.2)" stroke-width="1"/>
      <rect x="30" y="30" width="340" height="35" fill="#18112E" rx="4"/>
      <text x="45" y="52" fill="#E9D5FF" font-family="JetBrains Mono, monospace" font-size="11" font-weight="bold">Birthday Message Generator • AI Engine</text>
      <rect x="30" y="75" width="340" height="55" fill="#18112E" rx="4" stroke="rgba(168,85,247,0.2)" stroke-width="1"/>
      <text x="45" y="97" fill="#A1A1AA" font-family="JetBrains Mono, monospace" font-size="9">Prompt: Generate a heartfelt birthday message...</text>
      <text x="45" y="114" fill="#C084FC" font-family="JetBrains Mono, monospace" font-size="9">Theme: Inspirational  |  Tone: Warm  |  Name: Alex</text>
      <rect x="30" y="140" width="340" height="55" fill="#18112E" rx="4" stroke="rgba(192,132,252,0.2)" stroke-width="1"/>
      <text x="45" y="162" fill="#C084FC" font-family="Space Grotesk, sans-serif" font-size="9" font-weight="bold">✨ AI Response (Gemini Flash API)</text>
      <text x="45" y="178" fill="#F8FAFC" font-family="Space Grotesk, sans-serif" font-size="9">Wishing you a day filled with joy, laughter, and...</text>
    </svg>`,
  },
];

const FILTERS = [
  { label: "All Projects", value: "all" },
  { label: "AI & Machine Learning", value: "ai" },
  { label: "Full Stack", value: "fullstack" },
];

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotX = (-y / rect.height) * 12;
      const rotY = (x / rect.width) * 12;
      card.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(6px)`;
    };
    const onLeave = () => { card.style.transform = ""; };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="glass-card project-card" style={{ transition: "transform 0.15s ease-out, box-shadow 0.3s" }}>
      <div className="project-mockup-area" dangerouslySetInnerHTML={{ __html: project.svg }} />
      <div className="project-body">
        <div className="project-number" style={{ color: project.accent }}>
          {project.number}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t} className="tech-tag" style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}12` }}>
              {t}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: 13 }}>
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = PROJECTS.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <span className="section-label">04 / Selected Projects</span>
        <h2 className="section-title">
          Featured <span className="highlight">Work</span>
        </h2>
        <div className="section-divider" />

        <div className="project-filters">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter-btn${filter === f.value ? " active" : ""}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="https://github.com/mvh2005" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <Github size={16} /> View All on GitHub <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
