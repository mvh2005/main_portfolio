customElements.define('portfolio-milestones', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="milestones" class="achievements section">
        <div class="container">
          <div class="section-label" data-aos="fade-right">03 / Professional Experience &amp; Milestones</div>
          <h2 class="section-title" data-aos="fade-up">Current Growth Path</h2>

          <div class="achievements-grid">
            <article class="achievement-card" data-aos="fade-up" data-aos-delay="0">
              <div class="achievement-icon">01</div>
              <h3>Industry Footprint</h3>
              <p>Open to internships and entry-level opportunities where I can contribute to web development, AI projects, and production-ready engineering work.</p>
            </article>

            <article class="achievement-card" data-aos="fade-up" data-aos-delay="100">
              <div class="achievement-icon">02</div>
              <h3>Academic / Field Highlights</h3>
              <p>Focused on Artificial Intelligence, machine learning fundamentals, data handling, programming, and full-stack project development.</p>
            </article>

            <article class="achievement-card" data-aos="fade-up" data-aos-delay="200">
              <div class="achievement-icon">03</div>
              <h3>Project Momentum</h3>
              <p>Regularly building and publishing practical projects to improve problem solving, UI quality, GitHub workflow, and technical communication.</p>
            </article>
          </div>
        </div>
      </section>
    `;
  }
});
