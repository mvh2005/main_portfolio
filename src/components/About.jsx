import React, { useRef, useEffect } from "react";
import { useCounterAnimation } from "../hooks/useScrollReveal";

function StatCard({ num, label, suffix = "", decimals = 0 }) {
  const numRef = useRef(null);
  useCounterAnimation(numRef, parseFloat(num), 1800, decimals);

  return (
    <div className="big-stat-card glass-card reveal">
      <span className="big-stat-num">
        <span ref={numRef}>{decimals > 0 ? "0.00" : "0"}</span>{suffix}
      </span>
      <span className="big-stat-label">{label}</span>
    </div>
  );
}

export default function About() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // 3D tilt on cards
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");
    cards.forEach((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotX = (-y / rect.height) * 10;
        const rotY = (x / rect.width) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(4px)`;
      };
      const onLeave = () => { card.style.transform = ""; };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      return () => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <span className="section-label">01 / About Me</span>
        <h2 className="section-title">
          Who I <span className="highlight">Am</span>
        </h2>
        <div className="section-divider" />

        <div className="about-grid">
          {/* Bio card */}
          <div className="glass-card about-bio-card reveal tilt-card">
            <h3>Computer Science & AI Undergraduate</h3>
            <p>
              I am a Computer Science and Artificial Intelligence undergraduate with internship
              experience in Machine Learning, Generative AI, and Web Development. I enjoy building
              practical software solutions and exploring intelligent applications that solve real-world problems.
            </p>
            <p>
              My technical interests span from designing robust full-stack architectures using{" "}
              <strong style={{ color: "var(--purple-secondary)" }}>Java, Spring Boot, and React</strong>, to building
              intelligent systems with{" "}
              <strong style={{ color: "var(--purple-soft)" }}>Python, Scikit-learn, and Generative AI</strong>{" "}
              tools. I thrive at the intersection of software engineering and AI.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
              {["Python", "Java", "React", "Spring Boot", "Machine Learning", "Generative AI"].map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Education stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="glass-card edu-card reveal tilt-card" style={{ animationDelay: "0.1s" }}>
              <div className="school">Madanapalle Institute of Technology & Science</div>
              <div className="degree">B.Tech — Computer Science & AI</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                <span className="score">CGPA: 8.25</span>
                <span className="score" style={{ background: "rgba(192,132,252,0.12)", color: "var(--purple-secondary)" }}>2024 – 2027</span>
              </div>
            </div>

            <div className="glass-card edu-card reveal tilt-card" style={{ animationDelay: "0.2s" }}>
              <div className="school">Government Polytechnic, Proddutur</div>
              <div className="degree">Diploma in Computer Engineering</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                <span className="score">87.25%</span>
                <span className="score" style={{ background: "rgba(192,132,252,0.12)", color: "var(--purple-secondary)" }}>2021 – 2024</span>
              </div>
            </div>

            <div className="glass-card edu-card reveal tilt-card" style={{ animationDelay: "0.3s" }}>
              <div className="school">Loyola English Medium High School</div>
              <div className="degree">High School — SSC (Class X)</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                <span className="score">9.3 CGPA</span>
                <span className="score" style={{ background: "rgba(192,132,252,0.12)", color: "var(--purple-secondary)" }}>2018 – 2021</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <StatCard num="8.25" suffix="" label="CGPA" decimals={2} />
          <StatCard num="3" suffix="+" label="Internships" />
          <StatCard num="3" suffix="" label="Major Projects" />
          <StatCard num="1" suffix="M+" label="Dataset Records" />
        </div>
      </div>
    </section>
  );
}
