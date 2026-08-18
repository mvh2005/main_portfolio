import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scrollspy
    const sections = document.querySelectorAll("section[id]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          <a href="#home" className="nav-logo" onClick={() => handleNav("#home")}>
            <div className="logo-badge">MV</div>
            <div className="logo-text">
              <span className="logo-name">Mara Vignesh</span>
              <span className="logo-sub">Java • Full Stack • AI</span>
            </div>
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link${activeSection === link.href.slice(1) ? " active" : ""}`}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="#contact" className="btn btn-primary nav-cta" onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}>
              Get In Touch <ArrowUpRight size={14} />
            </a>
            <button className="nav-mobile-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <X size={20} />
        </button>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}>
          Get In Touch
        </a>
      </div>
    </>
  );
}
