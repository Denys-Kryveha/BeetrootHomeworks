const burgerButton = document.getElementById('burger');
const closeButton = document.getElementById('close');
const mobileMenu = document.getElementById('mobile-menu');

burgerButton.addEventListener('click', function handleClick() {
  mobileMenu.style.display = 'flex';
});

closeButton.addEventListener('click', function handleClick() {
  mobileMenu.style.display = 'none';
});
