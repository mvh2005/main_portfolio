customElements.define('portfolio-certifications', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="certifications" class="certifications section">
        <div class="container">
          <div class="section-label" data-aos="fade-right">0 / Certifications</div>
          <h2 class="section-title" data-aos="fade-up">Industry Credentials</h2>

          <div class="certifications-grid">
            <article class="cert-card" data-aos="fade-up" data-aos-delay="0">
              <div class="cert-badge">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div class="cert-issuer">Oracle</div>
              <h3>OCI Cloud Infrastructure 2025 AI Foundations Associate</h3>
              <p>Cloud infrastructure and AI foundations certification covering Oracle Cloud services, machine learning concepts, and enterprise AI deployment.</p>
            </article>

            <article class="cert-card" data-aos="fade-up" data-aos-delay="100">
              <div class="cert-badge">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div class="cert-issuer">Amazon Web Services</div>
              <h3>Cloud Fundamentals Training Badge</h3>
              <p>Foundational knowledge in AWS cloud services, core infrastructure, security best practices, and cloud architecture principles.</p>
            </article>

            <article class="cert-card" data-aos="fade-up" data-aos-delay="200">
              <div class="cert-badge">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div class="cert-issuer">IBM SkillHub</div>
              <h3>Artificial Intelligence Fundamentals</h3>
              <p>Comprehensive understanding of AI concepts including neural networks, natural language processing, computer vision, and responsible AI practices.</p>
            </article>

            <article class="cert-card" data-aos="fade-up" data-aos-delay="300">
              <div class="cert-badge">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div class="cert-issuer">Saredufy Web Plus Academy</div>
              <h3>Generative AI Internship Certificate</h3>
              <p>Hands-on experience with generative AI tools, Python-based prototyping, Streamlit development, and integration with Google Gemini Flash API.</p>
            </article>
          </div>
        </div>
      </section>
    `;
  }
});
