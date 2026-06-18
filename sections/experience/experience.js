customElements.define('portfolio-experience', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="experience" class="experience section">
        <div class="container">
          <div class="section-label" data-aos="fade-right">05 / Experience</div>
          <h2 class="section-title" data-aos="fade-up">Work Experience</h2>
          <p class="experience-subtitle" data-aos="fade-up">Practical work and internships that shaped my professional skill set.</p>

          <div class="experience-timeline">

            <!-- EXPERIENCE ITEM 1 — Copy & edit this block for each entry -->
            <article class="exp-card" data-aos="fade-up" data-aos-delay="0">
              <div class="exp-marker">
                <div class="exp-dot"></div>
                <div class="exp-line"></div>
              </div>
              <div class="exp-content">
                <div class="exp-date">Mon 20XX – Mon 20XX</div>
                <div class="exp-type">Internship</div>
                <h3>Your Role / Job Title</h3>
                <div class="exp-company">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  <span>Company Name, Location</span>
                </div>
                <ul class="exp-responsibilities">
                  <li>Key responsibility or accomplishment #1</li>
                  <li>Key responsibility or accomplishment #2</li>
                  <li>Key responsibility or accomplishment #3</li>
                </ul>
                <div class="exp-tech-stack">
                  <span class="exp-tech">Tech 1</span>
                  <span class="exp-tech">Tech 2</span>
                  <span class="exp-tech">Tech 3</span>
                </div>
              </div>
            </article>

            <!-- EXPERIENCE ITEM 2 -->
            <article class="exp-card" data-aos="fade-up" data-aos-delay="100">
              <div class="exp-marker">
                <div class="exp-dot"></div>
                <div class="exp-line"></div>
              </div>
              <div class="exp-content">
                <div class="exp-date">Mon 20XX – Mon 20XX</div>
                <div class="exp-type">Freelance</div>
                <h3>Your Role / Job Title</h3>
                <div class="exp-company">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  <span>Company Name, Location</span>
                </div>
                <ul class="exp-responsibilities">
                  <li>Key responsibility or accomplishment #1</li>
                  <li>Key responsibility or accomplishment #2</li>
                </ul>
                <div class="exp-tech-stack">
                  <span class="exp-tech">Tech 1</span>
                  <span class="exp-tech">Tech 2</span>
                </div>
              </div>
            </article>

            <!-- EXPERIENCE ITEM 3 — Remove or duplicate as needed -->
            <article class="exp-card" data-aos="fade-up" data-aos-delay="200">
              <div class="exp-marker">
                <div class="exp-dot"></div>
                <!-- No line on last item -->
              </div>
              <div class="exp-content">
                <div class="exp-date">Mon 20XX – Mon 20XX</div>
                <div class="exp-type">Part-time</div>
                <h3>Your Role / Job Title</h3>
                <div class="exp-company">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  <span>Company Name, Location</span>
                </div>
                <ul class="exp-responsibilities">
                  <li>Key responsibility or accomplishment #1</li>
                  <li>Key responsibility or accomplishment #2</li>
                </ul>
                <div class="exp-tech-stack">
                  <span class="exp-tech">Tech 1</span>
                  <span class="exp-tech">Tech 2</span>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    `;
  }
});
