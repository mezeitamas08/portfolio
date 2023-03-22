function reveal() {
  var reveals = document.querySelectorAll(".skill-box");
  var bar=document.querySelectorAll(".bar")

  for (var i = 0; i < bar.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = bar[i].getBoundingClientRect().top;
    var elementVisible = 20;

    if (elementTop < windowHeight - elementVisible) {
      bar[i].classList.add("active");
    } else {
      bar[i].classList.remove("active");
    }
  }

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 25;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);