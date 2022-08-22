const navMenu = document.querySelector('.nav__menu');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
    setHamburgerMenuState()
    /*addAriaHiddenAttr(mql);*/
});

function setHamburgerMenuState() {
    
    if (navMenu.classList.contains("active")) {
        hamburger.setAttribute("aria-expanded", "true")
    } else if (!navMenu.classList.contains("active")) {
        hamburger.setAttribute("aria-expanded", "false")
    } 
}
 



// This was another way to make the menu links accessible

/*function addAriaHiddenAttr(event) {
    let mql = window.matchMedia('(max-width: 62em)');
    const links = document.querySelectorAll(".nav__itemlink");
    
    if ((navMenu.classList.contains("active") && event.matches) || !event.matches) {
        for (const link of links) {
            link.ariaHidden = "false";
           /* link.removeAttribute("tabindex", "-1")
        }
    } else if (event.matches) {
        for (const link of links) {
            link.ariaHidden = "true";
            /*link.setAttribute("tabindex", "-1")
        }
    } 
}
 

mql.addListener(addAriaHiddenAttr)
addAriaHiddenAttr(mql)*/