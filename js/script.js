const menuBtn = document.querySelector('.menu-btn');
const menuTop = document.querySelector('.menu-top')
// const menuTopLink = document.querySelectorAll('.menu-top__link');

menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('menu-active');

   menuTop.classList.toggle('menu-active');
})