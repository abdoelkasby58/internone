let menuIcon = document.getElementById("menu-icon");
let removeMenu = document.getElementById("remove-menu");
let navResponsiveMenu = document.getElementById("nav-responsive-menu");
let navLinks = document.querySelectorAll(".nav-reponsive-list");
const body = document.body;
// navResponsiveMenu.style.maxHeight = "0px";
removeMenu.addEventListener("click", () => {
  navResponsiveMenu.style.maxHeight = "0px";
  body.classList.remove("noscroll");
  navResponsiveMenu.classList.remove("active");
});
navLinks.forEach((link)=>{
  link.addEventListener("click", () => {
    navResponsiveMenu.style.maxHeight = "0px";
    body.classList.remove("noscroll");
    navResponsiveMenu.classList.remove("active");
  });
})
function ToggleMenu() {
  if (navResponsiveMenu.style.maxHeight === "0px") {
    body.classList.add("noscroll");
    navResponsiveMenu.style.maxHeight = "100vh";
    navResponsiveMenu.classList.add("active");
  } else {
    navResponsiveMenu.style.maxHeight = "0px";
    body.classList.remove("noscroll");
    navResponsiveMenu.classList.remove("active");
  }
}

navResponsiveMenu.classList.remove("active");
navResponsiveMenu.style.maxHeight = "0px";
