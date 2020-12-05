var MainMenuButton = document.querySelector('.menu-button'),
  SubMenuButton = document.querySelector('.sub-menu-button'),
  MainMenu = document.querySelector('.main-menu'),
  SubMenu = document.querySelector('.sub-menu'),
  MenuButtonLine = document.querySelector('.menu-button_line');

MainMenuButton.addEventListener('click', () => {
  // MainMenu.classList.toggle('main-menu_active');
  MainMenuButton.classList.toggle('main-menu_active');
});
SubMenuButton.addEventListener('click', () => {
  // SubMenu.classList.toggle('sub-menu_active');
  SubMenuButton.classList.toggle('sub-menu_active');
});