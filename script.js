/* ============================================================
   MARA VIGNESH PORTFOLIO - script.js
   Handles animations, cursor, navigation, contact form, footer year,
   smooth scrolling, and the resume modal.
   ============================================================ */

if (window.AOS) {
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
  });
}

/* ---------- Custom Cursor ---------- */
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

if (cursor && cursorFollower) {
  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    cursorFollower.style.left = `${followerX}px`;
    cursorFollower.style.top = `${followerY}px`;
    requestAnimationFrame(animateFollower);
  }

  animateFollower();

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '0.5';
  });
}

/* ---------- Header Scroll State ---------- */
const header = document.getElementById('header');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ---------- Mobile Nav ---------- */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  nav.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ---------- Active Nav Link on Scroll ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

if (sections.length && navLinks.length) {
  const observerOptions = {
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));
}

/* ---------- Contact Form ---------- */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm && formSuccess) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    formSuccess.style.display = 'block';
    contactForm.reset();

    setTimeout(() => {
      formSuccess.style.display = 'none';
    }, 4000);
  });
}

/* ---------- Footer Year ---------- */
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

/* ---------- Smooth Scroll for Anchor Links ---------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ---------- Resume Modal ---------- */
const resumeModal = document.getElementById('resumeModal');
const resumeOverlay = document.getElementById('resumeOverlay');
const resumeClose = document.getElementById('resumeClose');
const resumeBtn = document.getElementById('resumeBtn');

if (resumeModal && resumeOverlay && resumeClose && resumeBtn) {
  function openResumeModal() {
    resumeModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    resumeModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  resumeBtn.addEventListener('click', openResumeModal);
  resumeOverlay.addEventListener('click', closeResumeModal);
  resumeClose.addEventListener('click', closeResumeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && resumeModal.classList.contains('open')) {
      closeResumeModal();
    }
  });
}
