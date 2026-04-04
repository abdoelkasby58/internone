let menuIcon = document.getElementById("menu-icon");
let removeMenu = document.getElementById("remove-menu");
let navResponsiveMenu = document.getElementById("nav-responsive-menu");
const body = document.body;
// navResponsiveMenu.style.maxHeight = "0px";
removeMenu.addEventListener("click", () => {
  navResponsiveMenu.style.maxHeight = "0px";
  body.classList.remove("noscroll");
  navResponsiveMenu.classList.remove("active");
});
navResponsiveMenu.maxHeight = "0px";

function TogggleMenu() {
  if (navResponsiveMenu.style.maxHeight === "0px") {
    body.classList.add("noscroll");
    navResponsiveMenu.style.maxHeight = "100vh";
    navResponsiveMenu.classList.add("active");
  } else {
    navResponsiveMenu.style.maxHeight = "0px";
    body.classList.remove("noscroll");
  }
}
