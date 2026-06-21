/* scroll reveal */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('in-view');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* language toggle — persists across pages */
function applyLang(isEn) {
  document.documentElement.className = isEn ? 'en' : 'bs';
  document.documentElement.lang      = isEn ? 'en' : 'bs';
  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = isEn ? 'EN' : 'CG';
  localStorage.setItem('lang', isEn ? 'en' : 'bs');
}
function toggleLang() {
  applyLang(document.documentElement.className !== 'en');
}
applyLang(localStorage.getItem('lang') === 'en');
