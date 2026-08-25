import React from "react";
import { Download, FileText, ArrowRight } from "lucide-react";

const TARGET_ROLES = [
  "Software Engineer Intern",
  "Java Developer Intern",
  "Full Stack Developer Intern",
  "AI / ML Intern",
  "Python Developer Intern",
];

export default function ResumeCTA() {
  return (
    <section id="resume" className="resume-cta-section">
      <div className="container">
        <div className="resume-cta-inner glass-card">
          {/* Decorative glow orb */}
          <div className="resume-orb" aria-hidden="true" />

          <div className="resume-cta-content">
            <div className="resume-cta-icon">
              <FileText size={32} />
            </div>

            <span className="section-label" style={{ marginBottom: 12 }}>
              Resume
            </span>

            <h2 className="resume-cta-headline">
              Want the complete picture?
            </h2>
            <p className="resume-cta-sub">
              Download my latest resume — internships, projects, certifications, and skills in one document.
            </p>

            <div className="resume-roles">
              {TARGET_ROLES.map((role) => (
                <span key={role} className="resume-role-chip">
                  <ArrowRight size={11} />
                  {role}
                </span>
              ))}
            </div>

            <a
              href="/sections/resume-modal/vignesh_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary resume-download-btn"
              aria-label="Download Mara Vignesh Resume PDF"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
