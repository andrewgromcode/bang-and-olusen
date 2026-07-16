const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.querySelector('.header');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open');
  menuToggle.classList.toggle('is-open');
  header.classList.toggle('menu-open');
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    header.classList.remove('menu-open');
  });
});
