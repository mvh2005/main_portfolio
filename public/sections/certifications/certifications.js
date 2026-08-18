customElements.define('portfolio-certifications', class extends HTMLElement {
  connectedCallback() {
    // Auto-deletion logic for OCI Certification
    const ociExpiryDate = new Date('2027-08-18T00:00:00');
    const currentDate = new Date();
    const showOCI = currentDate < ociExpiryDate;

    this.innerHTML = `
      <section id="certifications" class="certifications section">
        <div class="container">
          <div class="section-label" data-aos="fade-right">Certifications</div>
          <h2 class="section-title" data-aos="fade-up">Industry Credentials</h2>

          <div class="certifications-grid">

            ${showOCI ? `
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
              <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=A912C7CE494CC4548521A5E8493D9231ADE335EAE3DB084E4AD84E46F788F9B0" class="cert-link" target="_blank">View Certificate <span class="arrow">→</span></a>
            </article>
            ` : ''}

            <article class="cert-card" data-aos="fade-up" data-aos-delay="100">
              <div class="cert-badge">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div class="cert-issuer">IBM SkillsBuild</div>
              <h3>Artificial Intelligence Fundamentals</h3>
              <p>Comprehensive understanding of AI concepts including neural networks, natural language processing, computer vision, and responsible AI practices.</p>
              <a href="https://www.credly.com/badges/7f791675-5bf1-43ef-899a-7ad3e5a61270/linked_in?t=szfhh2" class="cert-link" target="_blank">View Certificate <span class="arrow">→</span></a>
            </article>

            <article class="cert-card" data-aos="fade-up" data-aos-delay="300">
              <div class="cert-badge">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div class="cert-issuer">Kaggle</div>
              <h3>Python</h3>
              <p>Completed comprehensive training in Python programming, covering syntax, data structures, and foundational logic for data science applications.</p>
              <a href="https://www.kaggle.com/learn/certification/vigneshm1234/python" class="cert-link" target="_blank">View Certificate <span class="arrow">→</span></a>
            </article>
              
            <article class="cert-card" data-aos="fade-up" data-aos-delay="200">
              <div class="cert-badge">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div class="cert-issuer">Saredufy Web Plus Academy</div>
              <h3>Generative AI Internship Certificate</h3>
              <p>Hands-on experience with generative AI tools, Python-based prototyping, Streamlit development, and integration with Google Gemini Flash API.</p>
              
              <a href="./sections/certifications/Saredufy Certificate.pdf" class="cert-link" target="_blank">View Certificate <span class="arrow">→</span></a>
            </article>

          </div>
        </div>
      </section>
    `;
  }
});