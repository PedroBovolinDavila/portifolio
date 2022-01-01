const mobileMenu = document.querySelector('.navbar_mobile_icon');
const menu = document.querySelector('.navbar_links');

// Navbar

const openNav = () => {
    menu.classList.toggle('active');
}

mobileMenu.addEventListener('click', openNav);

// Hero Animations

gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-animate', {
    duration: 0.8,
    opacity: 0,
    x: -150,
    stagger: 0.1
})

gsap.from('.hero-animate-image', {
    duration: 1,
    opacity: 0,
    x: -150,
})