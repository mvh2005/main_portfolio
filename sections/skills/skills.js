customElements.define('portfolio-skills', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="skills" class="skills section">
        <div class="container">
          <div class="section-label" data-aos="fade-right">Technical Skills</div>
          <h2 class="section-title" data-aos="fade-up">Skills I Work With</h2>

          <div class="skills-grid">
            <div class="skill-group" data-aos="fade-up" data-aos-delay="0">
              <h3 class="skill-group-title"><span class="skill-num">01</span> Languages</h3>
              <div class="skill-tags">
                <span class="tag">Python</span>
                <span class="tag">JavaScript</span>
                <span class="tag">TypeScript</span>
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
                <span class="tag">SQL Basics</span>
              </div>
            </div>

            <div class="skill-group" data-aos="fade-up" data-aos-delay="100">
              <h3 class="skill-group-title"><span class="skill-num">02</span> Frameworks &amp; Ecosystems</h3>
              <div class="skill-tags">
                <span class="tag">NumPy</span>
                <span class="tag">Pandas</span>
                <span class="tag">Seaborn</span>
                <span class="tag">Scikit-learn</span>
                <span class="tag">Firebase</span>
                <span class="tag">Responsive Web</span>
              </div>
            </div>

            <div class="skill-group" data-aos="fade-up" data-aos-delay="200">
              <h3 class="skill-group-title"><span class="skill-num">03</span> Tools &amp; Developer Utilities</h3>
              <div class="skill-tags">
                <span class="tag">Git</span>
                <span class="tag">GitHub</span>
                <span class="tag">VS Code</span>
                <span class="tag">Cursor</span>
                <span class="tag">Docker</span>
                <span class="tag">npm</span>
                <span class="tag">Debugging</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
});
