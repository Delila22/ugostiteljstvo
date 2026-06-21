(function () {
  const hamburger = document.getElementById('hamburger');
  if (!hamburger) return;

  /* collect links from desktop nav */
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPath = location.pathname.split('/').pop() || 'index.html';

  /* build overlay */
  const overlay = document.createElement('div');
  overlay.className = 'mobile-nav';
  overlay.id = 'mobile-nav';

  /* close button inside overlay */
  const closeBtn = document.createElement('button');
  closeBtn.className = 'mobile-nav-close';
  closeBtn.setAttribute('aria-label', 'Zatvori meni');
  closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  overlay.appendChild(closeBtn);

  navLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.innerHTML = link.innerHTML; /* keeps .t-bs / .t-en spans */
    const page = link.getAttribute('href');
    if (page === currentPath || (currentPath === '' && page === 'index.html')) {
      a.classList.add('mob-active');
    }
    overlay.appendChild(a);
  });

  /* divider + social icons */
  const div = document.createElement('div');
  div.className = 'mobile-nav-divider';
  overlay.appendChild(div);

  const socials = [
    { href: 'https://www.instagram.com/visit_rozaje/', icon: 'fa-brands fa-instagram', label: 'Instagram' },
    { href: 'https://www.facebook.com/p/Turisticka-organizacija-Rozaje-100082855320254/', icon: 'fa-brands fa-facebook-f', label: 'Facebook' },
    { href: 'https://www.tiktok.com/@visit_rozaje', icon: 'fa-brands fa-tiktok', label: 'TikTok' },
  ];
  const socialWrap = document.createElement('div');
  socialWrap.className = 'mobile-nav-social';
  socials.forEach(s => {
    const a = document.createElement('a');
    a.href = s.href;
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', s.label);
    a.innerHTML = `<i class="${s.icon}"></i>`;
    socialWrap.appendChild(a);
  });
  overlay.appendChild(socialWrap);

  document.body.appendChild(overlay);

  /* toggle */
  function openMenu() {
    hamburger.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    hamburger.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);

  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
})();
