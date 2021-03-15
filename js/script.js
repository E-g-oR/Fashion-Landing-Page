var MainMenuButton = document.querySelector('.menu-button'),
  SubMenuButton = document.querySelector('.sub-menu-button'),
  MainMenu = document.querySelector('.menu'),
  SubMenu = document.querySelector('.sub-menu'),
  MenuButtonLine = document.querySelector('.menu-button_line');

MainMenuButton.addEventListener('click', () => {
  MainMenu.classList.toggle('main-menu_active');
  MainMenuButton.classList.toggle('main-menu_active');
});
document.addEventListener('scroll', () => {
  MainMenu.classList.remove('main-menu_active');
  MainMenuButton.classList.remove('main-menu_active');
});