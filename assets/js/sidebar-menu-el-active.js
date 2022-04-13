let menuEl = document.querySelectorAll('.sidebar-menu__list-el');
let menuBurgerEl = document.querySelectorAll('.burger-menu__list-el');
const component = document.querySelector('.page__main-component-title');
// menuEl = [...menuEl];
// menuBurgerEl = [...menuBurgerEl];
// menuEl.forEach(item => {if (item.innerText.toLowerCase() === component.innerText.toLowerCase()) {
// 	item.firstChild.classList.add('left-menu__list-el_active');
// }})
for (let i=0; i<menuEl.length; i++) {
	if (menuEl[i].innerText.toLowerCase() === component.innerText.toLowerCase()) {
	menuEl[i].firstChild.classList.add('sidebar-menu__list-el_active');
	menuBurgerEl[i].firstChild.classList.add('sidebar-menu__list-el_active');
}
}

