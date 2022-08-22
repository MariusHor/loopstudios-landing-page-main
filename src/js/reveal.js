let mql = window.matchMedia('(max-width: 36em)'); 

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      const elementVisible = 50;
      const visibilityLimit = windowHeight - elementVisible;
      
      reveals.forEach((reveal, index) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < visibilityLimit && !mql.matches) {
          setTimeout(() => {
            reveal.classList.add("active")
          }, index * 150);
        } else if (mql.matches && elementTop < visibilityLimit) {
          setTimeout(() => {
            reveal.classList.add("active")
          }, index * 1);
        }
        else {
          reveal.classList.remove("active");
        }
      });
    }
  }

  mql.addListener(reveal)
reveal(mql)

setTimeout(() => {   window.addEventListener("scroll", reveal);}, 1000);



const hero = document.querySelector('.hero__title');
function animate() {
    hero.classList.add('active')
    setTimeout(animate, 1000)
}

window.onload = animate



