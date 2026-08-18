import React, { useRef, useEffect, useState } from "react";

const SKILLS = [
  { id: "center", label: "MARA VIGNESH", x: 500, y: 300, size: 28, color: "#8B5CF6", main: true },
  { id: "java", label: "Java", x: 220, y: 150, size: 14, color: "#C084FC" },
  { id: "python", label: "Python", x: 360, y: 100, size: 14, color: "#8B5CF6" },
  { id: "c", label: "C", x: 500, y: 80, size: 12, color: "#E9D5FF" },
  { id: "sql", label: "SQL", x: 650, y: 100, size: 12, color: "#A855F7" },
  { id: "react", label: "React", x: 780, y: 150, size: 14, color: "#C084FC" },
  { id: "springboot", label: "Spring Boot", x: 820, y: 280, size: 13, color: "#8B5CF6" },
  { id: "python_ml", label: "Python ML", x: 780, y: 420, size: 13, color: "#A855F7" },
  { id: "sklearn", label: "Scikit-Learn", x: 640, y: 490, size: 12, color: "#C084FC" },
  { id: "numpy", label: "NumPy", x: 500, y: 510, size: 12, color: "#8B5CF6" },
  { id: "pandas", label: "Pandas", x: 360, y: 490, size: 12, color: "#E9D5FF" },
  { id: "mysql", label: "MySQL", x: 220, y: 420, size: 12, color: "#A855F7" },
  { id: "git", label: "Git", x: 170, y: 290, size: 13, color: "#C084FC" },
  { id: "github", label: "GitHub", x: 200, y: 400, size: 12, color: "#A1A1AA" },
  { id: "rest", label: "REST APIs", x: 750, y: 370, size: 12, color: "#8B5CF6" },
  { id: "html", label: "HTML", x: 280, y: 200, size: 12, color: "#E9D5FF" },
  { id: "css", label: "CSS", x: 680, y: 200, size: 12, color: "#C084FC" },
  { id: "streamlit", label: "Streamlit", x: 420, y: 450, size: 12, color: "#8B5CF6" },
  { id: "flask", label: "Flask", x: 600, y: 440, size: 12, color: "#A855F7" },
];

const CONNECTIONS = [
  ...SKILLS.filter(s => !s.main).map(s => ["center", s.id]),
  ["java", "springboot"], ["python", "python_ml"], ["python_ml", "sklearn"],
  ["sklearn", "numpy"], ["numpy", "pandas"], ["react", "rest"],
  ["html", "css"], ["python", "streamlit"], ["python", "flask"],
  ["git", "github"],
];

export default function Skills() {
  const svgRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const offset = useRef({ x: 0, y: 0 });
  const smoothOffset = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      offset.current = {
        x: ((e.clientX / w) - 0.5) * 28,
        y: ((e.clientY / h) - 0.5) * 18,
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const animate = () => {
      if (!svgRef.current) { rafRef.current = requestAnimationFrame(animate); return; }
      smoothOffset.current.x += (offset.current.x - smoothOffset.current.x) * 0.05;
      smoothOffset.current.y += (offset.current.y - smoothOffset.current.y) * 0.05;
      svgRef.current.style.transform = `translate(${smoothOffset.current.x}px, ${smoothOffset.current.y}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const getSkillById = (id) => SKILLS.find((s) => s.id === id);

  const isHighlighted = (skillId) => {
    if (!hovered) return true;
    if (skillId === hovered) return true;
    return CONNECTIONS.some(
      ([a, b]) => (a === hovered && b === skillId) || (b === hovered && a === skillId)
    );
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <span className="section-label">02 / Technical Arsenal</span>
        <h2 className="section-title">
          Skill <span className="highlight">Constellation</span>
        </h2>
        <div className="section-divider" />

        <div className="skills-constellation">
          <svg
            ref={svgRef}
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transition: "transform 0.1s linear", willChange: "transform" }}
          >
            {/* Connection lines */}
            {CONNECTIONS.map(([aId, bId], i) => {
              const a = getSkillById(aId);
              const b = getSkillById(bId);
              if (!a || !b) return null;
              const highlight = hovered && (aId === hovered || bId === hovered);
              return (
                <line
                  key={i}
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke={highlight ? "#C084FC" : "rgba(168, 85, 247, 0.16)"}
                  strokeWidth={highlight ? 1.6 : 0.8}
                  style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                />
              );
            })}

            {/* Skill nodes */}
            {SKILLS.map((skill) => {
              const active = isHighlighted(skill.id);
              const isHov = hovered === skill.id;
              const scale = isHov ? 1.25 : 1;
              const r = skill.main ? 44 : (skill.size + 12);

              return (
                <g
                  key={skill.id}
                  transform={`translate(${skill.x}, ${skill.y}) scale(${scale})`}
                  style={{ cursor: "pointer", transition: "transform 0.3s, opacity 0.3s", opacity: active ? 1 : 0.22, transformOrigin: "0 0" }}
                  onMouseEnter={(e) => {
                    setHovered(skill.id);
                    const rect = e.currentTarget.closest("svg").getBoundingClientRect();
                    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top - 30 });
                  }}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Outer glow */}
                  <circle
                    r={r + 6}
                    fill={skill.color}
                    opacity={isHov ? 0.2 : 0.05}
                    style={{ transition: "opacity 0.3s" }}
                  />
                  {/* Node fill & border */}
                  <circle
                    r={r}
                    fill="#100B1F"
                    stroke={skill.color}
                    strokeWidth={skill.main ? 2 : 1.2}
                    opacity={active ? 1 : 0.6}
                  />
                  {/* Inner subtle tint */}
                  <circle
                    r={r - 1}
                    fill={skill.color}
                    opacity={0.12}
                  />
                  {/* Pulse for main center */}
                  {skill.main && (
                    <circle r={r + 12} stroke="#A855F7" strokeWidth={0.7} fill="none" opacity={0.35} />
                  )}
                  {/* Label */}
                  <text
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={skill.main ? 13 : 10.5}
                    fontFamily="Space Grotesk, sans-serif"
                    fontWeight={skill.main ? 700 : 500}
                    fill={skill.main ? "#F8FAFC" : (isHov ? "#E9D5FF" : skill.color)}
                    letterSpacing="0.02em"
                  >
                    {skill.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Tooltip */}
          {hovered && hovered !== "center" && (
            <div
              className="skill-tooltip visible"
              style={{ left: tooltipPos.x, top: tooltipPos.y }}
            >
              {SKILLS.find(s => s.id === hovered)?.label}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
