customElements.define('portfolio-resume-modal', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="resume-modal" id="resumeModal">
        <div class="resume-modal-overlay" id="resumeOverlay"></div>
        <div class="resume-modal-content">
          <button class="resume-modal-close" id="resumeClose" aria-label="Close resume">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <div class="resume-modal-header">
            <h2>Mara Vignesh</h2>
            <p>B.Tech CSE (AI) | Full Stack Developer | Machine Learning</p>
            <div class="resume-contact-info">
              <span>vigneshmara143@gmail.com</span>
              <span>|</span>
              <span>LinkedIn: vignesh-mara</span>
              <span>|</span>
              <span>GitHub: vigneshgit2005</span>
            </div>
          </div>
          <div class="resume-section">
            <h3>Education</h3>
            <div class="resume-item">
              <div class="resume-item-header">
                <strong>B.Tech CSE (Artificial Intelligence)</strong>
                <span>Pursuing</span>
              </div>
              <p>MIT School of Engineering, MITS Deemed University</p>
            </div>
            <div class="resume-item">
              <div class="resume-item-header">
                <strong>Diploma in Computer Science</strong>
                <span>2024</span>
              </div>
              <p>Govt. Polytechnic, Proddutur</p>
            </div>
          </div>
          <div class="resume-section">
            <h3>Skills</h3>
            <div class="resume-skills-grid">
              <div><strong>Languages:</strong> Python, JavaScript, TypeScript, HTML, CSS, SQL</div>
              <div><strong>Frameworks:</strong> NumPy, Pandas, Scikit-learn, Firebase, Responsive Web</div>
              <div><strong>Tools:</strong> Git, GitHub, Docker, VS Code, Cursor, npm</div>
            </div>
          </div>
          <div class="resume-section">
            <h3>Projects</h3>
            <div class="resume-item">
              <div class="resume-item-header">
                <strong>AI Movie Recommendation System</strong>
                <span>Python, ML, Pandas, Scikit-learn</span>
              </div>
              <p>Similarity-based recommendation engine with data preprocessing and model-driven ranking.</p>
            </div>
            <div class="resume-item">
              <div class="resume-item-header">
                <strong>Aqua Tracker - Water Intake App</strong>
                <span>TypeScript, Firebase, HTML, CSS</span>
              </div>
              <p>Hydration tracker with persistent data, interactive UI states, and daily habit feedback.</p>
            </div>
            <div class="resume-item">
              <div class="resume-item-header">
                <strong>Birthday Message Generator</strong>
                <span>HTML, CSS, Python</span>
              </div>
              <p>Utility that generates personalized birthday messages using form inputs and templates.</p>
            </div>
          </div>
          <div class="resume-section">
            <h3>Experience</h3>
            <div class="resume-item">
              <div class="resume-item-header">
                <strong>Open to Internships &amp; Entry-Level Opportunities</strong>
                <span>Current</span>
              </div>
              <p>Seeking roles in web development, AI projects, and production-ready engineering work.</p>
            </div>
          </div>
          <div class="resume-modal-actions">
            <a href="sections/resume-modal/resume_vignesh.pdf" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Download PDF</a>
          </div>
        </div>
      </div>
    `;
  }
});
