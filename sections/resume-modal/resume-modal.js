class ResumeModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="resumeOverlay" class="resume-overlay"></div>
      <div id="resumeModal" class="resume-modal">
        <div class="resume-modal-header">
          <h2>Resume</h2>
          <button id="resumeClose" class="resume-close">&times;</button>
        </div>
        <div class="resume-modal-content">
          <iframe id="resumeFrame" src="sections\resume-modal\resume_vignesh.pdf" type="application/pdf"></iframe>
        </div>
      </div>
    `;
 
    this.style.cssText = `
      --resume-modal-bg: white;
      --resume-modal-text: #1a1a1a;
      --resume-overlay-bg: rgba(0, 0, 0, 0.5);
    `;
  }
}
 
customElements.define('portfolio-resume-modal', ResumeModal);
