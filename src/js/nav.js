/* eslint-disable require-jsdoc */

const navMenu = document.querySelector('.nav__menu');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');
const mql = window.matchMedia('(max-width: 62em)');


hamburger.addEventListener('click', () => {
  setTimeout(() => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
    setHamburgerMenuState();
    addAriaHiddenAttr(mql);
  }, 200);
});


function setHamburgerMenuState() {
  if (navMenu.classList.contains('active')) {
    hamburger.setAttribute('aria-expanded', 'true');
  } else if (!navMenu.classList.contains('active')) {
    hamburger.setAttribute('aria-expanded', 'false');
  }
}


// I prefer this over visibility hidden

function addAriaHiddenAttr(event) {
  const links = document.querySelectorAll('.nav__itemlink');

  // eslint-disable-next-line max-len
  if ((navMenu.classList.contains('active') && event.matches) || !event.matches) {
    for (const link of links) {
      link.ariaHidden = 'false';
      link.removeAttribute('tabindex', '-1');
    }
  } else if (event.matches) {
    for (const link of links) {
      link.ariaHidden = 'true';
      link.setAttribute('tabindex', '-1');
    }
  }
}


mql.addListener(addAriaHiddenAttr);
addAriaHiddenAttr(mql);
