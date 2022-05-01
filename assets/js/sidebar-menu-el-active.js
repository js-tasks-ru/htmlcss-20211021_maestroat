let menuEl = document.querySelectorAll(
  '.sidebar-menu__list > .sidebar-menu__list-el',
);
let menuBurgerEl = document.querySelectorAll(
  '.burger-menu__list > .burger-menu__list-el',
);
const component = document.querySelector('.page__main-component-title');
if (menuEl) {
  menuEl = [...menuEl];
  menuEl.forEach((item) => {
    if (item.innerText.toLowerCase() === component.innerText.toLowerCase()) {
      item.firstElementChild.classList.add('sidebar-menu__href_active');
    }
  });
}
if (menuBurgerEl) {
  menuBurgerEl = [...menuBurgerEl];
  menuBurgerEl.forEach((item) => {
    if (item.innerText.toLowerCase() === component.innerText.toLowerCase()) {
      item.firstElementChild.classList.add('burger-menu__list-el-href_active');
    }
  });
}
