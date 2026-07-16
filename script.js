const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open');
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mobileMenu.classList.remove('is-open'));
});
