customElements.define('portfolio-footer', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="container footer-inner">
          <p class="footer-copy">Copyright <span id="year"></span> Mara Vignesh. All rights reserved.</p>
          <div class="footer-links">
            <a href="https://github.com/mvh2005" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mara-vignesh-561942279/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

          </div>
        </div>
      </footer>
    `;
  }
});
