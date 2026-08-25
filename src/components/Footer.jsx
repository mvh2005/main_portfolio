import React from "react";
import { Github, Linkedin, Mail, Instagram, Code2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "linear-gradient(135deg, var(--purple-primary), var(--purple-secondary))",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 13, color: "#05030D"
          }}>MV</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-main)" }}>Mara Vignesh</div>
            <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}>
              AI &amp; Full Stack Developer
            </div>
          </div>
        </div>

        <p className="footer-copy">
          © {year} Mara Vignesh. Built with React + Three.js.
        </p>

        <div style={{ display: "flex", gap: 12 }}>
          {[
            { href: "https://github.com/mvh2005", Icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/mara-vignesh-561942279/", Icon: Linkedin, label: "LinkedIn" },
            { href: "https://leetcode.com/u/vigneshmara143/", Icon: Code2, label: "LeetCode" },
            { href: "mailto:vigneshmara143@gmail.com", Icon: Mail, label: "Email" },
            { href: "https://instagram.com/v_ignesh.ikky/", Icon: Instagram, label: "Instagram" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: 36, height: 36, borderRadius: 8,
                border: "1px solid rgba(168, 85, 247, 0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text-muted)",
                transition: "color 0.2s, border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--purple-secondary)";
                e.currentTarget.style.borderColor = "var(--purple-primary)";
                e.currentTarget.style.background = "var(--purple-dim)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.2)";
                e.currentTarget.style.background = "";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
