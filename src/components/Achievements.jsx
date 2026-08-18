import React from "react";
import { Trophy, Star, Cpu, Activity, ExternalLink } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    color: "#8B5CF6",
    title: "Smart India Hackathon 2025",
    desc: "Selected at the college level for SIH 2025 — India's largest hackathon. Demonstrated rapid full-stack prototyping and innovative problem-solving skills for real government challenges.",
    link: "https://www.linkedin.com/in/mara-vignesh-561942279/",
    linkLabel: "View on LinkedIn",
  },
  {
    icon: Star,
    color: "#C084FC",
    title: "5-Star HackerRank Gold Badge",
    desc: "Achieved the highest 5-star Gold Badge in Python on HackerRank, demonstrating consistent algorithmic mastery, strong code execution skills, and data structure proficiency.",
    link: "https://www.hackerrank.com",
    linkLabel: "HackerRank Profile",
  },
  {
    icon: Cpu,
    color: "#A855F7",
    title: "Generative AI Prototyping",
    desc: "Built and deployed Streamlit applications integrated with Google Gemini Flash API during the Saredufy Web Plus Academy internship, earning an industry-verified completion certificate.",
    link: "/sections/certifications/Saredufy Certificate.pdf",
    linkLabel: "View Certificate",
  },
  {
    icon: Activity,
    color: "#E9D5FF",
    title: "Ironman Run Marathon 2022",
    desc: "Completed the Ironman Run Marathon in 2022, demonstrating exceptional personal discipline, stamina, and the long-term commitment that defines everything I do in engineering.",
    link: "https://www.linkedin.com/in/mara-vignesh-561942279/",
    linkLabel: "View Profile",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <span className="section-label">05 / Achievements</span>
        <h2 className="section-title">
          Key <span className="highlight">Accolades</span>
        </h2>
        <div className="section-divider" />

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={i} className="glass-card achievement-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div
                  className="achievement-icon"
                  style={{
                    background: `${a.color}15`,
                    color: a.color,
                    borderColor: `${a.color}35`,
                  }}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <div className="achievement-title">{a.title}</div>
                </div>
                <p className="achievement-desc">{a.desc}</p>
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: 12, padding: "8px 16px" }}
                >
                  {a.linkLabel} <ExternalLink size={12} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
