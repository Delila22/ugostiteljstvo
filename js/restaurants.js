/* scroll-reveal */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'none'; }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.card, .info-item, .savjet').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(32px)';
  el.style.transition = 'opacity .65s ease, transform .65s ease';
  observer.observe(el);
});

/* card click → open Google search */
document.querySelectorAll('.card[data-url]').forEach(card => {
  card.addEventListener('click', () => {
    window.open(card.dataset.url, '_blank', 'noopener');
  });
});

/* filter tabs */
function filterCards(cat, btn) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.card').forEach(card => {
    const cats = (card.dataset.cat || '').split(' ');
    if (cat === 'sve' || cats.includes(cat)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

/* language toggle BS ↔ EN */
let isEn = false;
function toggleLang() {
  isEn = !isEn;
  document.documentElement.className = isEn ? 'en' : 'bs';
  document.documentElement.lang = isEn ? 'en' : 'bs';
  document.getElementById('langBtn').textContent = isEn ? 'BS' : 'EN';
}
