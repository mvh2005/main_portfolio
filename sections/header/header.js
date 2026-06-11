customElements.define('portfolio-header', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header" id="header">
        <div class="header-inner">
          <a href="#home" class="logo">M Vignesh <span>Portfolio</span></a>
          <nav class="nav" id="nav">
            <a href="#home" class="nav-link">Home</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#milestones" class="nav-link">Milestones</a>
            <a href="#contact" class="nav-link">Contact</a>
          </nav>
          <button class="hamburger" id="hamburger" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
    `;
  }
});
