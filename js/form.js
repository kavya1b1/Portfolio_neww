// ── Contact Form ──
(function () {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn  = form.querySelector('button[type="submit"]');
    const span = btn.querySelector('span');
    btn.disabled  = true;
    span.textContent = 'Sending…';

    setTimeout(() => {
      btn.disabled     = false;
      span.textContent = 'Send Message';
      form.reset();
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 5000);
    }, 1500);
  });
})();
