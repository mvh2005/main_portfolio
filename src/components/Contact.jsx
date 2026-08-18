import React, { useRef, useEffect, useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";

function FloatingOrb({ mouseRef }) {
  const orbRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let raf;
    const animate = () => {
      if (orbRef.current && mouseRef.current) {
        pos.current.x += (mouseRef.current.x * 80 - pos.current.x) * 0.04;
        pos.current.y += (mouseRef.current.y * 60 - pos.current.y) * 0.04;
        orbRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={orbRef} className="contact-orb" style={{ pointerEvents: "none" }} />
  );
}

export default function Contact() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -((e.clientY / window.innerHeight) * 2 - 1),
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <FloatingOrb mouseRef={mouseRef} />

      <div className="container contact-inner">
        <span className="section-label">07 / Contact</span>
        <h2 className="contact-headline">
          Let&apos;s Build<br />
          <span className="highlight">Something</span>
        </h2>
        <p className="contact-text">
          Have an opportunity, project, or idea? Let&apos;s build something intelligent together.
          I&apos;m actively seeking internships and collaboration opportunities.
        </p>

        <div className="contact-buttons">
          <a href="mailto:vigneshmara143@gmail.com" className="btn btn-primary">
            <Mail size={16} /> Email Me
          </a>
          <a href="https://github.com/mvh2005" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/mara-vignesh-561942279/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper glass-card" style={{ padding: "40px", borderRadius: 20 }}>
          <h3>Send a Message</h3>

          {status === "sent" ? (
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              gap: 16, padding: "40px 0", color: "#C084FC", textAlign: "center"
            }}>
              <CheckCircle size={48} color="#A855F7" />
              <div style={{ fontSize: 18, fontWeight: 600, color: "var(--text-main)" }}>Message Received!</div>
              <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button className="btn btn-ghost" onClick={() => setStatus("idle")}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Tell me about the opportunity, project, or idea..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "14px 24px" }}
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
