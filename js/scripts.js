const mobileMenu = document.querySelector('.navbar_mobile_icon');
const menu = document.querySelector('.navbar_links');

// Navbar

const openNav = () => {
    menu.classList.toggle('active');
}

mobileMenu.addEventListener('click', openNav);