const html = document.documentElement;

const changer = document.getElementById('theme-changer');
changer.addEventListener('change', function() {
    if (html.hasAttribute('data-theme-dark') === true) 
    	html.removeAttribute('data-theme-dark')
    else html.setAttribute('data-theme-dark', true)
});
const changerBurger = document.getElementById('theme-changer-burger');

changerBurger.addEventListener('change', function() {
    if (html.hasAttribute('data-theme-dark') === true) 
    	html.removeAttribute('data-theme-dark')
    else html.setAttribute('data-theme-dark', true)
})

// changer.addEventListener('change', function() {
//     html.toggleAttribute('data-theme-dark');
// });
// changerBurger.addEventListener('change', function() {
//     html.toggleAttribute('data-theme-dark');
// });
