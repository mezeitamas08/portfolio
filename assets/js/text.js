let typingText = new Typed("#home__text", {
  strings: [
    "Tamás",
    "Designer",
    "Coder",
    "FullStack Developer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
});

window.scroll({
  top: 500, 
  left: 0, 
  behavior: 'smooth'
});


ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay:200
})

ScrollReveal().reveal('.home__left, .heading', {origin:'top'})
ScrollReveal().reveal('.home__right, .form, .projects__box,.about__heading-span, .projects__years', {origin:'bottom'})
