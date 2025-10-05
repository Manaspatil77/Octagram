const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});

document.querySelectorAll('#primary-nav a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Testimonials slider controls
const scroller = document.querySelector('.t-scroller');
const prevBtn = document.querySelector('.t-btn.prev');
const nextBtn = document.querySelector('.t-btn.next');

function scrollByCard(dir = 1){
  if (!scroller) return;
  const card = scroller.querySelector('.t-card');
  const step = card ? card.getBoundingClientRect().width + 16 : 320;
  scroller.scrollBy({ left: dir * step, behavior: 'smooth' });
}

prevBtn?.addEventListener('click', () => scrollByCard(-1));
nextBtn?.addEventListener('click', () => scrollByCard(1));
