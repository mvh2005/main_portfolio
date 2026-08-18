import React, { useEffect } from "react";
import BackgroundScene from "./three/BackgroundScene";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      {/* Global full-screen reactive WebGL background */}
      <BackgroundScene />

      {/* Custom cursor */}
      <Cursor />

      {/* All site content sits above the background */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
