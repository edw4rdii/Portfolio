// script.js - funcionalidade simples (menu, smooth scroll, back to top)

document.addEventListener('DOMContentLoaded', function() {
  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70; // header height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });

        // close mobile nav if open
        if (nav.classList.contains('open')) nav.classList.remove('open');
      }
    });
  });

  // back to top button visibility
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) backTop.style.display = 'block';
    else backTop.style.display = 'none';
  });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
