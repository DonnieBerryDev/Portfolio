AOS.init({
  duration: 1000,
  offset: 200,
});

const nav = document.querySelector("nav");
const hamburger = document.querySelector("#hamburger");
const hamburgerBar = document.querySelector(".hamburgerBar");
const navLinks = document.querySelectorAll("nav a");
const showMore = document.querySelector(".hero_showmore");
const doc = document.querySelector("html");
function scrollEvent() {
  if (window.scrollY > 100) {
    nav.classList.add("active-nav");
    showMore.classList.add("fadeOutHide");
    hamburgerBar.classList.add("hamurgerActive");
    console.log(showMore);
  } else {
    nav.classList.remove("active-nav");
    hamburgerBar.classList.remove("hamurgerActive");
  }
}

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("nav-open");
    hamburger.classList.remove("hamburgerOpen");
    document.body.classList.remove("disableScroll");
    html.classList.remove("disableScroll");
  });
});

hamburger.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
  hamburger.classList.toggle("hamburgerOpen");
  document.body.classList.toggle("disableScroll");
  html.classList.toggle("disableScroll");
});

document.addEventListener("scroll", scrollEvent);
