/* floating light particles (green & blue, no emojis) */
const dotColors = ['#3FA060','#5BB871','#2E86AB','#5FB0CE'];
const container = document.getElementById('particles');
for(let i=0;i<20;i++){
  const p = document.createElement('div');
  p.className = 'particle';
  const size = 4 + Math.random()*6;
  p.style.cssText = `left:${Math.random()*100}vw;width:${size}px;height:${size}px;
    border-radius:50%;background:${dotColors[Math.floor(Math.random()*dotColors.length)]};
    animation-duration:${13+Math.random()*14}s;animation-delay:-${Math.random()*22}s`;
  container.appendChild(p);
}

/* scroll-reveal */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.style.opacity=1; e.target.style.transform='none'; } });
},{threshold:0.1});
document.querySelectorAll('.card,.feat,.stat').forEach(el=>{
  el.style.opacity='0'; el.style.transform='translateY(32px)';
  el.style.transition='opacity .65s ease, transform .65s ease';
  observer.observe(el);
});

/* subtle mountain parallax on scroll */
const mtnWrap = document.querySelector('.mountains-wrap');
window.addEventListener('scroll',()=>{
  const y = window.scrollY;
  if(mtnWrap && y < window.innerHeight){
    mtnWrap.style.transform = `translateY(${y * 0.18}px)`;
  }
},{passive:true});

/* modal open/close */
function openModal(id){
  const el = document.getElementById('modal-'+id);
  if(el){ el.classList.add('open'); document.body.style.overflow='hidden'; }
}
function closeModal(id){
  const el = document.getElementById('modal-'+id);
  if(el){ el.classList.remove('open'); document.body.style.overflow=''; }
}
document.addEventListener('click', e=>{
  if(e.target.classList.contains('modal-overlay'))
    closeModal(e.target.id.replace('modal-',''));
});
document.addEventListener('keydown', e=>{
  if(e.key==='Escape') document.querySelectorAll('.modal-overlay.open')
    .forEach(m=>closeModal(m.id.replace('modal-','')));
});

/* contact form — mailto fallback */
function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('cf-name').value;
  const email = document.getElementById('cf-email').value;
  const msg  = document.getElementById('cf-msg').value;
  window.location.href =
    `mailto:info@turistickaorganizacijarozaje.me?subject=${encodeURIComponent('Poruka od '+name)}&body=${encodeURIComponent(msg+'\n\nEmail: '+email)}`;
  e.target.reset();
  const succ = document.getElementById('contact-success');
  succ.style.display='block';
  setTimeout(()=>succ.style.display='none', 5000);
}

/* language toggle BS ↔ EN — persists across pages */
function applyLang(isEn){
  document.documentElement.className = isEn ? 'en' : 'bs';
  document.documentElement.lang      = isEn ? 'en' : 'bs';
  const btn = document.getElementById('langBtn');
  if(btn) btn.textContent = isEn ? 'EN' : 'CG';
  localStorage.setItem('lang', isEn ? 'en' : 'bs');
}
function toggleLang(){
  applyLang(document.documentElement.className !== 'en');
}
applyLang(localStorage.getItem('lang') === 'en');
