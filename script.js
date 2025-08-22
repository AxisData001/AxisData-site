// AxisData interactions
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
  
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Basic client-side validation + fake submit
const form = document.getElementById('contactForm');
const status = document.querySelector('.form-status');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Enviando...';
    // Example: send with Formspree or your API endpoint.
    // Replace URL with your endpoint when ready.
    const url = 'https://example.com/contact'; // TODO
    const data = Object.fromEntries(new FormData(form));
    try {
      // Simulate success without external call:
      await new Promise(r => setTimeout(r, 800));
      status.textContent = '¡Gracias! Te contactaremos muy pronto.';
      form.reset();
    } catch (err) {
      status.textContent = 'Hubo un error al enviar. Inténtalo más tarde.';
    }
  });
}
