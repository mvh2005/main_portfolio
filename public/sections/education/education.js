customElements.define('portfolio-education', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="education" class="education section">
        <div class="container">
          <div class="section-label" data-aos="fade-right">Education</div>
          <h2 class="section-title" data-aos="fade-up">Academic Background</h2>
          <p class="education-subtitle" data-aos="fade-up">Academic background and practical work that shaped my current skill set.</p>

          <div class="education-timeline">

            <!-- B.Tech CSE (AI) -->
            <article class="edu-card" data-aos="fade-up" data-aos-delay="0">
              <div class="edu-marker">
                <div class="edu-dot"></div>
                <div class="edu-line"></div>
              </div>
              <div class="edu-content">
                <div class="edu-date">2024 – 2027 (Pursuing)</div>
                <h3>B.Tech — Computer Science &amp; Engineering (Artificial Intelligence)</h3>
                <div class="edu-institution">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/>
                  </svg>
                  <span>Madanapalle Institute of Technology &amp; Science, Kadiri Road, Andhra Pradesh</span>
                </div>
                <p>Specialising in Artificial Intelligence with a strong foundation in data structures, machine learning, deep learning, and full-stack development. Maintaining a <strong>CGPA of 8.25</strong> (till 5th Semester).</p>
                <div class="edu-highlights">
                  <span class="edu-tag">8.25 CGPA</span>
                  <span class="edu-tag">Smart India Hackathon 2025</span>
                  <span class="edu-tag">5★ HackerRank Python</span>
                  <span class="edu-tag">AI &amp; ML Focus</span>
                </div>
              </div>
            </article>

            <!-- Diploma (SBTET) -->
            <article class="edu-card" data-aos="fade-up" data-aos-delay="100">
              <div class="edu-marker">
                <div class="edu-dot"></div>
                <div class="edu-line"></div>
              </div>
              <div class="edu-content">
                <div class="edu-date">2021 – 2024</div>
                <h3>Diploma (SBTET)</h3>
                <div class="edu-institution">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/>
                  </svg>
                  <span>Government Polytechnic, Proddatur, Kadapa Dist, Andhra Pradesh</span>
                </div>
                <p>Completed a diploma programme under the State Board of Technical Education and Training (SBTET), building strong technical fundamentals and hands-on practical skills.</p>
                <div class="edu-highlights">
                  <span class="edu-tag">87.25 %</span>
                  <span class="edu-tag">SBTET Board</span>
                </div>
              </div>
            </article>

            <!-- SSC / 10th -->
            <article class="edu-card" data-aos="fade-up" data-aos-delay="200">
              <div class="edu-marker">
                <div class="edu-dot"></div>
              </div>
              <div class="edu-content">
                <div class="edu-date">2018 – 2021</div>
                <h3>High School — SSC (Class X)</h3>
                <div class="edu-institution">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/>
                  </svg>
                  <span>Loyola English Medium High School, Dharmavaram, Sri Sathya Sai Dist, Andhra Pradesh</span>
                </div>
                <p>Completed secondary education with an excellent academic record, developing an early interest in technology and computer science.</p>
                <div class="edu-highlights">
                  <span class="edu-tag">9.3 CGPA</span>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    `;
  }
});
