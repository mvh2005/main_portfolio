/* ============================================================
   MARA VIGNESH PORTFOLIO — script.js
   Handles: AOS init, custom cursor, header scroll,
            mobile nav, active nav, contact form, footer year
   ============================================================ */

/* ---------- 1. AOS (Scroll Animations) ----------
   Loaded via CDN in index.html — no npm needed.
   Just call AOS.init() and use data-aos attributes in HTML. */
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
});

/* ---------- 2. Custom Cursor ---------- */
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

// Follower lags behind slightly for a smooth trailing effect
function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top  = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
  cursor.style.opacity         = '0';
  cursorFollower.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
  cursor.style.opacity         = '1';
  cursorFollower.style.opacity = '0.5';
});

/* ---------- 3. Header — adds .scrolled class on scroll ---------- */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

/* ---------- 4. Mobile Nav (Hamburger) ---------- */
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  // Prevent body scroll when menu is open
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});

// Close mobile nav when a link is clicked
nav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ---------- 5. Active Nav Link on Scroll ---------- */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const observerOptions = {
  rootMargin: '-40% 0px -55% 0px',
  threshold: 0,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

/* ---------- 6. Contact Form (client-side only) ----------
   For real form submission connect to Formspree, EmailJS,
   or any backend. This shows a success message immediately. */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Show success message
  formSuccess.style.display = 'block';

  // Reset form fields
  contactForm.reset();

  // Hide success message after 4 seconds
  setTimeout(() => {
    formSuccess.style.display = 'none';
  }, 4000);

  /* ── To connect to a real backend, replace the above with: ──
  
  const data = new FormData(contactForm);
  
  // Option A: Formspree (free, no backend needed)
  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' },
  })
  .then(res => {
    if (res.ok) {
      formSuccess.style.display = 'block';
      contactForm.reset();
      setTimeout(() => formSuccess.style.display = 'none', 4000);
    }
  });
  ─────────────────────────────────────────────────────────── */
});

/* ---------- 7. Footer Year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- 8. Smooth scroll for anchor links ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
