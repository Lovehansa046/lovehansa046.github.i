'use strict';
const menuButton = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
function closeMenu() {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', window.HanmI18n ? window.HanmI18n.t('menu.label') : 'Открыть меню');
}
menuButton.addEventListener('click', () => {
  const open = !nav.classList.contains('is-open');
  nav.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', window.HanmI18n ? window.HanmI18n.t(open ? 'menu.close' : 'menu.label') : (open ? 'Закрыть меню' : 'Открыть меню'));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => {
  if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
document.getElementById('year').textContent = String(new Date().getFullYear());
const links = Array.from(nav.querySelectorAll('a'));
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
    if (visible) {
      links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + visible.target.id));
    }
  }, {rootMargin:'-15% 0px -65% 0px',threshold:[0,.2,.5]});
  sections.forEach(section => observer.observe(section));
}
