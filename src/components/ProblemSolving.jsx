import React, { useEffect, useRef, useState } from "react";
import { Code2, ExternalLink, TrendingUp, CheckCircle } from "lucide-react";

const TOPICS = [
  "Arrays", "Strings", "HashMap", "Two Pointers",
  "Binary Search", "Sorting", "Recursion", "SQL",
  "Linked Lists", "Stack & Queue",
];

const PLATFORMS = [
  {
    name: "LeetCode",
    label: "50+ Problems",
    sub: "Primary Platform",
    href: "https://leetcode.com/u/OSWaacFCbD/",
    color: "#FFA116",
    colorDim: "rgba(255,161,22,0.12)",
    colorBorder: "rgba(255,161,22,0.25)",
    icon: "LC",
  },
  {
    name: "HackerRank",
    label: "5★ Gold Badge",
    sub: "Python",
    href: "https://www.hackerrank.com/profile/vigneshmara143",
    color: "#00EA64",
    colorDim: "rgba(0,234,100,0.10)",
    colorBorder: "rgba(0,234,100,0.22)",
    icon: "HR",
  },
  {
    name: "GeeksforGeeks",
    label: "Practice",
    sub: "DSA Problems",
    href: "https://www.geeksforgeeks.org/profile/vigneshmicje",
    color: "#2F8D46",
    colorDim: "rgba(47,141,70,0.10)",
    colorBorder: "rgba(47,141,70,0.22)",
    icon: "GFG",
  },
  {
    name: "Unstop",
    label: "Competitions",
    sub: "Hackathons & Quizzes",
    href: "https://unstop.com/u/vignemar4251",
    color: "#7C3AED",
    colorDim: "rgba(124,58,237,0.10)",
    colorBorder: "rgba(124,58,237,0.22)",
    icon: "UN",
  },
];

function AnimatedBar({ target = 50, max = 200 }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth((target / max) * 100), 200);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target, max]);

  return (
    <div ref={ref} className="ps-progress-track">
      <div
        className="ps-progress-fill"
        style={{ width: `${width}%` }}
      />
      <div
        className="ps-progress-thumb"
        style={{ left: `calc(${width}% - 6px)` }}
      />
    </div>
  );
}

function CountUp({ end, duration = 1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.floor(eased * end));
            if (t < 1) requestAnimationFrame(step);
            else setCount(end);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function ProblemSolving() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="problem-solving" className="ps-section">
      <div className="container">
        <span className="section-label">05 / Problem Solving</span>
        <h2 className="section-title">
          DSA &amp; <span className="highlight">Competitive Coding</span>
        </h2>
        <div className="section-divider" />

        <div className="ps-layout">
          {/* LEFT — Stats + Progress */}
          <div
            className="ps-left reveal"
            ref={(el) => (itemRefs.current[0] = el)}
          >
            {/* Big count */}
            <div className="glass-card ps-count-card">
              <div className="ps-count-icon">
                <Code2 size={28} />
              </div>
              <div className="ps-count-num">
                <CountUp end={50} />
                <span className="ps-count-plus">+</span>
              </div>
              <div className="ps-count-label">Problems Solved</div>
              <div className="ps-count-sub">Primary Language: Java</div>

              {/* Progress bar */}
              <div className="ps-progress-wrapper">
                <div className="ps-progress-header">
                  <span className="ps-progress-label">Solving Progress</span>
                  <span className="ps-progress-meta">50+ / 200 goal</span>
                </div>
                <AnimatedBar target={50} max={200} />
                <div className="ps-progress-milestones">
                  <span>50+</span>
                  <span>100+</span>
                  <span>150+</span>
                  <span>200+</span>
                </div>
              </div>

              <div className="ps-streak-row">
                <div className="ps-streak-item">
                  <TrendingUp size={14} />
                  <span>Consistently practicing</span>
                </div>
                <div className="ps-streak-item">
                  <CheckCircle size={14} />
                  <span>5★ HackerRank Python</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Topics + Platforms */}
          <div className="ps-right">
            {/* Topics */}
            <div
              className="glass-card ps-topics-card reveal"
              ref={(el) => (itemRefs.current[1] = el)}
            >
              <div className="ps-card-label">Topics Practiced</div>
              <div className="ps-topics-grid">
                {TOPICS.map((topic) => (
                  <span key={topic} className="ps-topic-badge">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="ps-platforms-grid">
              {PLATFORMS.map((p, i) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card ps-platform-card reveal"
                  ref={(el) => (itemRefs.current[2 + i] = el)}
                  style={{
                    transitionDelay: `${i * 0.07}s`,
                    "--p-color": p.color,
                    "--p-dim": p.colorDim,
                    "--p-border": p.colorBorder,
                  }}
                  aria-label={`Visit ${p.name} profile`}
                >
                  <div
                    className="ps-platform-icon"
                    style={{
                      background: p.colorDim,
                      border: `1px solid ${p.colorBorder}`,
                      color: p.color,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div className="ps-platform-body">
                    <div className="ps-platform-name">{p.name}</div>
                    <div
                      className="ps-platform-label"
                      style={{ color: p.color }}
                    >
                      {p.label}
                    </div>
                    <div className="ps-platform-sub">{p.sub}</div>
                  </div>
                  <ExternalLink size={14} className="ps-platform-arrow" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
