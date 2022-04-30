let menuEl = document.querySelectorAll(
  '.sidebar-menu__list > .sidebar-menu__list-el',
);
let menuBurgerEl = document.querySelectorAll(
  '.burger-menu__list > .burger-menu__list-el',
);
const component = document.querySelector('.page__main-component-title');
menuEl = [...menuEl];
menuBurgerEl = [...menuBurgerEl];
menuEl.forEach(item => {if (item.innerText.toLowerCase() === component.innerText.toLowerCase()) {
	item.childNodes[1].classList.add('sidebar-menu__href_active');
}});
menuBurgerEl.forEach(item => {if (item.innerText.toLowerCase() === component.innerText.toLowerCase()) {
	item.childNodes[1].classList.add('burger-menu__list-el-href_active');
}})
// for (let i = 0; i < menuEl.length; i++) {
//   if (menuEl[i].innerText.toLowerCase() === component.innerText.toLowerCase()) {
//     console.log(menuBurgerEl[i].childNodes[1]);
//     menuEl[i].childNodes[1].classList.add('sidebar-menu__href_active');
//     menuBurgerEl[i].childNodes[1].classList.add('burger-menu__list-el-href_active');
//   }
// }
