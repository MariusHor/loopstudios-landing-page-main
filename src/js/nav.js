const navMenu = document.querySelector('.fullscreen-menu');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const body = document.querySelector('body')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('overflow-hidden')
});

closeBtn.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    body.classList.remove('overflow-hidden')
});


