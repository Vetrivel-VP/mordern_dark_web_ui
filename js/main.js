const menu = document.getElementById("menu");
const menuBtn = document.querySelector(".toggleMenu");

menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
});
