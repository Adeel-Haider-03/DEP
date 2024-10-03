var header = document.querySelector("header");
window.onscroll = () => {
  header.classList.toggle("sticky", window.scrollY > 100);
  menubar.classList.remove("bx-x");
  navbar.classList.remove("active");
};
let menubar = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
menubar.onclick = () => {
  menubar.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
