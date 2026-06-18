customElements.define('portfolio-education', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="education" class="education section">
        <div class="container">
          <div class="section-label" data-aos="fade-right">04 / Education</div>
          <h2 class="section-title" data-aos="fade-up">Academic Background</h2>
          <p class="education-subtitle" data-aos="fade-up">Academic background and practical work that shaped my current skill set.</p>

          <div class="education-timeline">

            <!-- EDUCATION ITEM 1 — Copy & edit this block for each entry -->
            <article class="edu-card" data-aos="fade-up" data-aos-delay="0">
              <div class="edu-marker">
                <div class="edu-dot"></div>
                <div class="edu-line"></div>
              </div>
              <div class="edu-content">
                <div class="edu-date">20XX – 20XX</div>
                <h3>Your Degree / Program Title</h3>
                <div class="edu-institution">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/>
                  </svg>
                  <span>Institution Name, Location</span>
                </div>
                <p>Brief description of what you studied, major subjects, CGPA/percentage, or any notable highlights.</p>
                <!-- Optional: Add key highlights -->
                <div class="edu-highlights">
                  <span class="edu-tag">Highlight 1</span>
                  <span class="edu-tag">Highlight 2</span>
                  <span class="edu-tag">Highlight 3</span>
                </div>
              </div>
            </article>

            <!-- EDUCATION ITEM 2 -->
            <article class="edu-card" data-aos="fade-up" data-aos-delay="100">
              <div class="edu-marker">
                <div class="edu-dot"></div>
                <div class="edu-line"></div>
              </div>
              <div class="edu-content">
                <div class="edu-date">20XX – 20XX</div>
                <h3>Your Degree / Program Title</h3>
                <div class="edu-institution">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/>
                  </svg>
                  <span>Institution Name, Location</span>
                </div>
                <p>Brief description of what you studied, major subjects, CGPA/percentage, or any notable highlights.</p>
                <div class="edu-highlights">
                  <span class="edu-tag">Highlight 1</span>
                  <span class="edu-tag">Highlight 2</span>
                </div>
              </div>
            </article>

            <!-- EDUCATION ITEM 3 — Remove or duplicate as needed -->
            <article class="edu-card" data-aos="fade-up" data-aos-delay="200">
              <div class="edu-marker">
                <div class="edu-dot"></div>
                <!-- No line on last item: remove .edu-line or keep it -->
              </div>
              <div class="edu-content">
                <div class="edu-date">20XX – 20XX</div>
                <h3>Your Degree / Program Title</h3>
                <div class="edu-institution">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/>
                  </svg>
                  <span>Institution Name, Location</span>
                </div>
                <p>Brief description of what you studied, major subjects, CGPA/percentage, or any notable highlights.</p>
              </div>
            </article>

          </div>
        </div>
      </section>
    `;
  }
});
