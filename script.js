window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  const arrow = document.getElementById('downArrow');
  if (window.scrollY > 50) {
    hero.classList.add('scrolled');
    arrow.style.display = 'none';
  } else {
    hero.classList.remove('scrolled');
    arrow.style.display = 'flex';
  }
});
