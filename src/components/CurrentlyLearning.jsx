import React, { useEffect, useRef } from "react";
import { CheckCircle, Circle, ArrowDown } from "lucide-react";

const ROADMAP = [
  {
    title: "Java DSA",
    desc: "Arrays, Strings, HashMap, Two Pointers, Binary Search — building algorithmic foundations.",
    status: "active",
    tag: "In Progress",
  },
  {
    title: "Advanced SQL",
    desc: "Complex queries, joins, window functions, and database optimization techniques.",
    status: "active",
    tag: "In Progress",
  },
  {
    title: "Spring Boot",
    desc: "REST API development, dependency injection, and enterprise Java backend patterns.",
    status: "upcoming",
    tag: "Upcoming",
  },
  {
    title: "AWS Cloud",
    desc: "Cloud fundamentals, EC2, S3, Lambda — building toward cloud-native development.",
    status: "upcoming",
    tag: "Upcoming",
  },
  {
    title: "Generative AI / LLMs",
    desc: "Prompt engineering, LLM APIs, RAG pipelines, and building AI-powered applications.",
    status: "upcoming",
    tag: "Upcoming",
  },
];

export default function CurrentlyLearning() {
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
      { threshold: 0.1 }
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="learning" className="learning-section">
      <div className="container">
        <span className="section-label">10 / Learning Roadmap</span>
        <h2 className="section-title">
          Currently <span className="highlight">Learning</span>
        </h2>
        <div className="section-divider" />

        <div className="learning-layout">
          <div className="learning-intro reveal" ref={(el) => (itemRefs.current[0] = el)}>
            <p className="learning-desc">
              A focused, progressive learning path — building depth in algorithms, backend engineering,
              cloud, and AI to become a well-rounded software engineer.
            </p>
          </div>

          <div className="learning-roadmap">
            {ROADMAP.map((item, i) => (
              <React.Fragment key={item.title}>
                <div
                  className={`learning-item reveal ${item.status}`}
                  ref={(el) => (itemRefs.current[1 + i] = el)}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="learning-icon">
                    {item.status === "active" ? (
                      <div className="learning-icon-active">
                        <span className="learning-pulse" />
                        <div className="learning-dot-inner" />
                      </div>
                    ) : (
                      <Circle size={20} className="learning-icon-upcoming" />
                    )}
                  </div>
                  <div className="glass-card learning-card">
                    <div className="learning-card-header">
                      <span className="learning-title">{item.title}</span>
                      <span className={`learning-tag ${item.status}`}>{item.tag}</span>
                    </div>
                    <p className="learning-card-desc">{item.desc}</p>
                  </div>
                </div>
                {i < ROADMAP.length - 1 && (
                  <div className={`learning-connector ${item.status}`}>
                    <ArrowDown size={14} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
