const navMenu = document.querySelector('.nav__links--mobile');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('overflow-hidden')
})