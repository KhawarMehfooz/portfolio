// Show Nav Menu on small devices
const menuContainer = document.getElementById('menu-container')
const toggleOpen = document.getElementById('toggle-open');
const toggleClose = document.getElementById('toggle-close');

// Show Menu
toggleOpen.addEventListener('click', () => {
    menuContainer.classList.add('show-menu-container')
})
// Hide Menu
toggleClose.addEventListener('click', () => {
    menuContainer.classList.remove('show-menu-container')
})
