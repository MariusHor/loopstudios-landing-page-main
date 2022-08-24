/* eslint-disable require-jsdoc */

//  Reveal Animation

/* const mql = window.matchMedia('(max-width: 36em)');

function reveal() {
  const reveals = document.querySelectorAll('.js-scroll');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementVisible = 50;
    const visibilityLimit = windowHeight - elementVisible;

    reveals.forEach((reveal, index) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < visibilityLimit && !mql.matches) {
        setTimeout(() => {
          reveal.classList.add('scrolled');
        }, index * 250);
      } else if (mql.matches && elementTop < visibilityLimit) {
        setTimeout(() => {
          reveal.classList.add('scrolled');
        }, index * 1);
      }
    });
  }
}

mql.addListener(reveal);
reveal(mql);

setTimeout(() => {
  window.addEventListener('scroll', reveal);
}, 1000);


*/


/* const scrollOffset = 100;

const scrollElements = document.querySelectorAll('.js-scroll');

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};

const displayScrollElement = () => {
  for (const scrollElement of scrollElements) {
    scrollElement.classList.add('scrolled');
  }
};

const hideScrollElement = () => {
  for (const scrollElement of scrollElements) {
    scrollElement.classList.remove('scrolled');
  }
};

const handleScrollAnimation = () => {
  for (const scrollElement of scrollElements) {
    if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
    } else {
      hideScrollElement();
    }
  }
};

setTimeout(() => window.addEventListener('scroll', () => {
  handleScrollAnimation();
}), 500); */


// Hero Title Animation

/* const hero = document.querySelector('.hero__title');
function animate() {
  hero.classList.add('active');
  setTimeout(animate, 1000);
}

window.onload = animate;

*/
