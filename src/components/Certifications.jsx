import React from "react";
import { Cloud, Cpu, Terminal, Sparkles, ShieldCheck, ExternalLink } from "lucide-react";

const CERTS = [
  {
    icon: Cloud,
    issuer: "Oracle",
    title: "OCI Cloud Infrastructure AI Foundations Associate",
    verified: "Verified Enterprise AI Credential",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A912C7CE494CC4548521A5E8493D9231ADE335EAE3DB084E4AD84E46F788F9B0",
    linkLabel: "View Oracle Badge",
    color: "#8B5CF6",
  },
  {
    icon: Cpu,
    issuer: "IBM SkillsBuild",
    title: "Artificial Intelligence Fundamentals",
    verified: "Neural Networks, NLP & Computer Vision",
    link: "https://www.credly.com/badges/7f791675-5bf1-43ef-899a-7ad3e5a61270/linked_in?t=szfhh2",
    linkLabel: "View IBM Badge",
    color: "#C084FC",
  },
  {
    icon: Terminal,
    issuer: "Kaggle",
    title: "Python Programming Certification",
    verified: "Data Structures & Logic",
    link: "https://www.kaggle.com/learn/certification/vigneshm1234/python",
    linkLabel: "View Kaggle Cert",
    color: "#A855F7",
  },
  {
    icon: Sparkles,
    issuer: "Saredufy Web Plus Academy",
    title: "Generative AI Internship Certificate",
    verified: "Python & Gemini Flash API Prototyping",
    link: "./sections/certifications/Saredufy Certificate.pdf",
    linkLabel: "View Certificate",
    color: "#E9D5FF",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <span className="section-label">06 / Certifications</span>
        <h2 className="section-title">
          Industry <span className="highlight">Credentials</span>
        </h2>
        <div className="section-divider" />

        <div className="certs-grid">
          {CERTS.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div key={i} className="glass-card cert-card">
                <div
                  className="cert-icon"
                  style={{
                    background: `${cert.color}15`,
                    borderColor: `${cert.color}35`,
                  }}
                >
                  <Icon size={26} style={{ color: cert.color }} />
                </div>
                <div className="cert-body">
                  <div className="cert-issuer" style={{ color: cert.color }}>
                    {cert.issuer}
                  </div>
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-verified">
                    <ShieldCheck size={13} />
                    {cert.verified}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: 12, padding: "8px 16px" }}
                  >
                    {cert.linkLabel} <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
