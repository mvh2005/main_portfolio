import React, { useEffect } from "react";
import BackgroundScene from "./three/BackgroundScene";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProblemSolving from "./components/ProblemSolving";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import CurrentlyLearning from "./components/CurrentlyLearning";
import ResumeCTA from "./components/ResumeCTA";
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
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <ProblemSolving />
          <Skills />
          <Achievements />
          <Certifications />
          <CurrentlyLearning />
          <ResumeCTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
