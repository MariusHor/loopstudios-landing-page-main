function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

setTimeout(() => {   window.addEventListener("scroll", reveal);}, 1000);


const hero = document.querySelector('.hero__title');

function animate() {
    hero.classList.add('active')
    setTimeout(animate, 900)
}

window.onload = animate