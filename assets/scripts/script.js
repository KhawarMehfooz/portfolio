// Show Nav Menu on small devices
const navbarItems = document.getElementById('navbar__items');
const toggleOpen = document.getElementById('hamburger');
const toggleClose = document.getElementById('toggle-close');

toggleOpen.addEventListener('click', () => {
    navbarItems.classList.add('active')
    toggleOpen.style.display = "none";
    toggleClose.style.display = "block"
})
toggleClose.addEventListener('click', () => {
    navbarItems.classList.remove('active')
    toggleClose.style.display = "none"
    toggleOpen.style.display = "block";
})