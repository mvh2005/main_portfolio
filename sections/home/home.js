customElements.define('portfolio-home', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="home" class="hero">
        <div class="hero-bg-grid"></div>
        <div class="hero-blob blob-1"></div>
        <div class="hero-blob blob-2"></div>

        <div class="hero-inner">
          <div class="hero-text">
            <p class="hero-eyebrow" data-aos="fade-up" data-aos-delay="0">Hello, I'm</p>
            <h1 class="hero-name" data-aos="fade-up" data-aos-delay="100">Mara Vignesh</h1>
            <p class="hero-role" data-aos="fade-up" data-aos-delay="200">
              <span class="role-tag">B.Tech CSE (AI)</span>
              <span class="role-sep">x</span>
              <span class="role-tag">Full Stack Developer</span>
              <span class="role-sep">x</span>
              <span class="role-tag">Machine Learning</span>
            </p>
            <p class="hero-desc" data-aos="fade-up" data-aos-delay="300">
              Computer Science student focused on AI, full-stack web development, and practical projects that turn clear ideas into working software.
            </p>
            <div class="hero-actions" data-aos="fade-up" data-aos-delay="400">
              <a href="#projects" class="btn btn-primary">View My Work</a>
              <a href="sections/resume-modal/resume_vignesh.pdf" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">Resume</a>
              <a href="https://github.com/mvh2005" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/vignesh-mara-561942279/" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div class="scroll-hint" data-aos="fade-up" data-aos-delay="600">
          <span>Scroll</span>
          <div class="scroll-line"></div>
        </div>
      </section>
    `;
  }
});
