/* scroll-reveal */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'none'; }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.kontakt-item, .info-item, .quick-link-card').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});

/* language toggle BS ↔ EN */
let isEn = false;
function toggleLang() {
  isEn = !isEn;
  document.documentElement.className = isEn ? 'en' : 'bs';
  document.documentElement.lang = isEn ? 'en' : 'bs';
  document.getElementById('langBtn').textContent = isEn ? 'BS' : 'EN';
}
