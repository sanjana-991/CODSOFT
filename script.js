// Sticky nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// CTA form (demo only)
const form = document.getElementById('ctaForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.querySelector('input').value.trim();
  if (!email.endsWith('.edu')) {
    msg.textContent = 'Please use a valid .edu email address.';
    msg.style.color = '#ff8080';
    return;
  }
  msg.textContent = `🎉 Account claimed for ${email}! Check your inbox.`;
  msg.style.color = 'var(--mint)';
  form.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal-on-scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .step, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});
