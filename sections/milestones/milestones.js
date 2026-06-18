customElements.define('portfolio-milestones', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="milestones" class="achievements section">
        <div class="container">
          <div class="section-label" data-aos="fade-right">03 / Professional Experience &amp; Milestones</div>
          <h2 class="section-title" data-aos="fade-up">Experience &amp; Achievements</h2>

          <div class="achievements-grid">
            <article class="achievement-card" data-aos="fade-up" data-aos-delay="0">
              <div class="achievement-icon">01</div>
              <h3>Academic Achievements</h3>
              <p>Selected for <strong>Smart India Hackathon 2025</strong> at college level. Secured a <strong>5-Star badge</strong> on HackerRank in Python. Maintaining <strong>8.25 CGPA</strong> in B.Tech CSE (AI) at MITS.</p>
            </article>

            <article class="achievement-card" data-aos="fade-up" data-aos-delay="100">
              <div class="achievement-icon">02</div>
              <h3>Extracurricular Activities</h3>
              <p>Participated in Flashmob at <strong>ASHV-2025</strong> cultural event. Completed the <strong>Ironman Run Marathon</strong> in 2022. Active interests in photography, video editing, and sports.</p>
            </article>
          </div>
        </div>
      </section>
    `;
  }
});

