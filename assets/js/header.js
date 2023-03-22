
window.onload = () => {
  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector(".root header ul li a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
  };
};

menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}
