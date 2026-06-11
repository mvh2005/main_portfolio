customElements.define('portfolio-projects', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="projects" class="projects section">
        <div class="container">
          <div class="section-label" data-aos="fade-right">02 / Flagship Projects</div>
          <h2 class="section-title" data-aos="fade-up">Project Case Studies</h2>

          <div class="projects-grid">
            <article class="project-card" data-aos="fade-up" data-aos-delay="0">
              <div class="project-number">01</div>
              <div class="project-status completed">Completed</div>
              <h3>AI Movie Recommendation System</h3>
              <p><strong>The Hook:</strong> A recommendation engine that helps users discover movies similar to their interests.</p>
              <div class="project-tech">
                <span>Python</span>
                <span>Machine Learning</span>
                <span>Pandas</span>
                <span>Scikit-learn</span>
              </div>
              <p><strong>Core Impact:</strong> Uses similarity-based recommendation logic, data preprocessing, and model-driven ranking to make discovery faster and more personal.</p>
              <a href="https://github.com/mvh2005/AI-Based-Movie-Recommendation-System.git"
                 class="project-link" target="_blank" rel="noopener noreferrer">
                GitHub Repository <span class="arrow">-&gt;</span>
              </a>
            </article>

            <article class="project-card" data-aos="fade-up" data-aos-delay="100">
              <div class="project-number">02</div>
              <div class="project-status completed">Completed</div>
              <h3>Birthday Message Generator</h3>
              <p><strong>The Hook:</strong> A small utility that creates personalized birthday messages quickly.</p>
              <div class="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>Python</span>
              </div>
              <p><strong>Core Impact:</strong> Combines form-style inputs, message templates, and simple generation logic to produce friendly, reusable greetings.</p>
              <a href="https://github.com/mvh2005/Birthday_Message-Generator.git"
                 class="project-link" target="_blank" rel="noopener noreferrer">
                GitHub Repository <span class="arrow">-&gt;</span>
              </a>
            </article>

            <article class="project-card" data-aos="fade-up" data-aos-delay="200">
              <div class="project-number">03</div>
              <div class="project-status completed">Completed</div>
              <h3>Aqua Tracker - Water Intake</h3>
              <p><strong>The Hook:</strong> A hydration tracker that makes daily water intake visible and easy to manage.</p>
              <div class="project-tech">
                <span>TypeScript</span>
                <span>Firebase</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
              <p><strong>Core Impact:</strong> Tracks intake progress with interactive UI states, persistent data support, and clean feedback for daily habit building.</p>
              <a href="https://github.com/mvh2005/Aqua_Tracker.git"
                 class="project-link" target="_blank" rel="noopener noreferrer">
                GitHub Repository <span class="arrow">-&gt;</span>
              </a>
            </article>
          </div>
        </div>
      </section>
    `;
  }
});
