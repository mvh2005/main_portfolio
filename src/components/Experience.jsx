import React, { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Machine Learning Intern",
    company: "Edunet Foundation",
    period: "May 2025 – Jul 2025",
    location: "Remote",
    color: "#8B5CF6",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML Models"],
    bullets: [
      "Implemented 8+ supervised and unsupervised ML models across classification and regression tasks",
      "Worked with 5 real-world datasets containing 15,000+ records for model training and validation",
      "Applied feature engineering and hyperparameter tuning to improve prediction accuracy by up to 18%",
      "Built model evaluation pipelines using cross-validation, confusion matrices, and ROC-AUC metrics",
    ],
  },
  {
    title: "Generative AI Intern",
    company: "Saredufy Web Plus Academy Pvt Ltd",
    period: "Jun 2025 – Aug 2025",
    location: "Remote",
    color: "#C084FC",
    tags: ["Python", "Streamlit", "Google Gemini Flash API", "Prompt Engineering"],
    bullets: [
      "Developed an AI-powered Birthday Message Generator with 10+ customizable themes",
      "Integrated Google Gemini Flash API for real-time AI-generated personalized messages",
      "Built interactive Streamlit web applications with prompt engineering pipelines",
      "Designed clean application logic and responsive UI for end-to-end functionality",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "ApexPlanet Software Pvt Ltd",
    period: "May 2025 – Jul 2025",
    location: "Remote",
    color: "#A855F7",
    tags: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
    bullets: [
      "Developed 5+ responsive webpages with modern layouts and cross-browser compatibility",
      "Improved page load performance by optimizing assets and applying lazy loading techniques",
      "Built reusable frontend components following component-based architecture",
      "Collaborated on design implementation to achieve pixel-perfect UI from Figma mockups",
    ],
  },
];

export default function Experience() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <span className="section-label">03 / Experience</span>
        <h2 className="section-title">
          Work <span className="highlight">Timeline</span>
        </h2>
        <div className="section-divider" />

        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="timeline-item"
              ref={(el) => (itemRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="timeline-dot"
                style={{
                  borderColor: exp.color,
                  boxShadow: `0 0 14px ${exp.color}60`,
                }}
              />
              <div className="glass-card timeline-card">
                <div className="timeline-period" style={{ color: exp.color }}>
                  {exp.period}
                </div>
                <div className="timeline-title">{exp.title}</div>
                <div className="timeline-company">
                  <MapPin size={13} style={{ color: exp.color }} />
                  <span>{exp.company}</span>
                  <span style={{ color: "var(--gray-600)" }}>•</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="timeline-list">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="tech-tag"
                      style={{
                        color: exp.color,
                        borderColor: `${exp.color}40`,
                        background: `${exp.color}14`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
