/* eslint-disable require-jsdoc */

//  Reveal Animation
let elements;

window.addEventListener('load', (event) => {
  elements = document.querySelector('.reveal-left');

  createObserver();
}, false);

function createObserver() {
  let observer;

  const options = {
    root: null,
    rootMargin: '50px',
    threshold: 0.4,
  };

  observer = new IntersectionObserver(handleIntersect, options);

  function handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-left');
        return;
      } else {
        entry.target.classList.remove('fade-in-left');
      }
    });
  }

  observer.observe(elements);
}


// Hero Title Animation

const hero = document.querySelector('.hero__title');
function animate() {
  hero.classList.add('active');
  setTimeout(animate, 1000);
}

window.onload = animate;
