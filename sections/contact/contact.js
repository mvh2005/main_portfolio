customElements.define('portfolio-contact', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="contact" class="contact section">
        <div class="container">
          <div class="section-label" data-aos="fade-right">Contact</div>
          <br><br>
          <p class="contact-sub" data-aos="fade-up" data-aos-delay="100">
            Recruiters, collaborators, and mentors can reach out for internships, project work, or developer opportunities.
          </p>

          <div class="contact-grid">
            <div class="contact-links" data-aos="fade-up" data-aos-delay="150">

              <a href="mailto:vigneshmara143@gmail.com" class="contact-card">
                <span class="contact-icon">@</span>
                <div>
                  <p class="contact-label">Email</p>
                  <p class="contact-value">vigneshmara143@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mara-vignesh-561942279/"
                 target="_blank" rel="noopener noreferrer" class="contact-card">

                <span class="contact-icon">in</span>
                <div>
                  <p class="contact-label">LinkedIn</p>
                  <p class="contact-value">Vignesh Mara</p>
                </div>
              </a>
              <a href="https://github.com/mvh2005"
                 target="_blank" rel="noopener noreferrer" class="contact-card">
                <span class="contact-icon">gh</span>
                <div>
                  <p class="contact-label">GitHub</p>
                  <p class="contact-value">vigneshgit2005</p>
                </div>
              </a>
            </div>

            <form class="contact-form" id="contactForm" data-aos="fade-up" data-aos-delay="200">
              <div id="formSuccess" class="form-success" style="display:none;">
                Message received! I'll get back to you soon.
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }
});
