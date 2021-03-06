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

gsap.from('.social-animate', {
    duration: 1,
    opacity: 0,
    x: -150,
    delay: 0.3,
    stagger: 0.4
})

// About animations

gsap.from('.about-heading-animate', {
    scrollTrigger: '.about',
    duration: 0.5,
    opacity: 0,
    y: -150,
    stagger: 0.4
})

gsap.from('.about-card-animate', {
    scrollTrigger: '.about',
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.5,
    delay: 0.3
})

// Techs

gsap.from('.tech-image-animate',{
    scrollTrigger: '.tech',
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.5,
})

gsap.from('.tech-card-text-animate',{
    scrollTrigger: '.tech',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.4,
})

// Projetos 

const notOnGithub = () => {
    alert('Esse projeto não esta no Github');
}

gsap.from('.projetos-heading-animate', {
    scrollTrigger: '.projetos',
    duration: 0.5,
    opacity: 0,
    y: -150,
    stagger: 0.4
})

gsap.from('.projetos-card-animate', {
    scrollTrigger: '.projetos',
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.2,
    delay: 0.3
})