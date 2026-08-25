import React, { useRef, useEffect, useState, lazy, Suspense } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Code2 } from "lucide-react";

const HeroScene = lazy(() => import("../three/HeroScene"));

const ROLES = [
  "AI & ML Engineer",
  "Full Stack Developer",
  "Java Developer",
  "Python Developer",
  "Computer Science Student",
];

function TypeWriter() {
  const [text, setText] = useState("");
  const [role, setRole] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const current = ROLES[role];
    const delay = deleting ? 50 : 110;

    const tid = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setPause(true);
          setTimeout(() => { setDeleting(true); setPause(false); }, 1800);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setRole((r) => (r + 1) % ROLES.length);
        }
      }
    }, delay);

    return () => clearTimeout(tid);
  }, [text, deleting, role, pause]);

  return (
    <div className="hero-role">
      {text}<span className="hero-role-cursor" />
    </div>
  );
}

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/mvh2005",
    icon: Github,
    ariaLabel: "GitHub profile",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mara-vignesh-561942279/",
    icon: Linkedin,
    ariaLabel: "LinkedIn profile",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/vigneshmara143/",
    icon: Code2,
    ariaLabel: "LeetCode profile",
  },
  {
    label: "Email",
    href: "mailto:vigneshmara143@gmail.com",
    icon: Mail,
    ariaLabel: "Send email",
  },
];

export default function Hero() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -((e.clientY / window.innerHeight) * 2 - 1),
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home">
      <div className="hero-section">
        {/* LEFT — Content */}
        <div className="hero-content">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Computer Science &amp; AI Undergraduate
          </div>

          <div className="hero-name">
            <span className="hero-name-first">Mara </span>
            <span className="hero-name-last">Vignesh</span>
          </div>

          <TypeWriter />

          <h2 className="hero-headline">
            Building Intelligent, Scalable<br />
            &amp; User-Focused Software
          </h2>

          <p className="hero-description">
            Building intelligent, scalable, and user-focused software with Java, Python,
            AI&nbsp;/&nbsp;ML, React, and modern backend technologies.
          </p>

          <div className="hero-ctas">
            <button
              className="btn btn-primary"
              onClick={() => scrollTo("#projects")}
            >
              View Projects <ArrowRight size={16} />
            </button>
            <a
              href="/sections/resume-modal/vignesh_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          {/* Social Links Strip */}
          <div className="hero-socials">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon, ariaLabel }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="hero-social-link"
              >
                <Icon size={16} />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-value">8.25</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">3+</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">50+</span>
              <span className="stat-label">LeetCode</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">5★</span>
              <span className="stat-label">HackerRank</span>
            </div>
          </div>
        </div>

        {/* RIGHT — 3D Canvas — sits above global background */}
        <div className="hero-canvas-wrapper">
          <Suspense fallback={
            <div style={{
              width: "100%", height: "100%",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(16,11,31,0.4)"
            }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#C084FC", opacity: 0.7 }}>
                Initializing 3D Engine...
              </div>
            </div>
          }>
            <HeroScene mouseRef={mouseRef} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
