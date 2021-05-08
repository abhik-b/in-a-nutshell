const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuBtn.querySelector(".menu").classList.toggle("hidden");
  menuBtn.querySelector(".close").classList.toggle("hidden");
});

function hideMenu() {
  if (window.matchMedia("(max-width: 640px)").matches) {
    menu.classList.add("hidden");
  } else {
    menu.classList.remove("hidden");
  }
}

window.addEventListener("load", hideMenu);
window.addEventListener("resize", hideMenu);
