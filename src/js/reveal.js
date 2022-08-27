/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

//  Reveal Animation
let elementsFadeInLeft;
let elementsFadeUp;

window.addEventListener('load', (event) => {
  elementsFadeInLeft = document.querySelectorAll('.fade-in-left');
  elementsFadeUp = document.querySelectorAll('.fade-up');

  createObserver();
}, false);

function createObserver() {
  const options = {
    root: null,
    rootMargin: '100px',
    threshold: 0.4,
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  function handleIntersect(entries) {
    const navMenu = document.querySelector('.nav__menu');
    const navItems = document.querySelectorAll('.nav__item');
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('reveal');
          return;
        }, index * 150);
      } else if (!entry.isIntersecting && !navMenu.classList.contains('.active')) {
        for (const item of navItems) {
          item.classList.remove('reveal');
        }
      }
      /* else {
        entry.target.classList.remove('reveal'); // Activate to make the animation active on scroll-up as well
      }*/
    });
  }


  elementsFadeInLeft.forEach((elementFadeInLeft) => {
    observer.observe(elementFadeInLeft);
  });
  elementsFadeUp.forEach((elementFadeUp) => {
    observer.observe(elementFadeUp);
  });
}


// Hero Title Animation

const hero = document.querySelector('.hero__title');
function animate() {
  hero.classList.add('reveal');
  setTimeout(animate, 1000);
}

window.onload = animate;
