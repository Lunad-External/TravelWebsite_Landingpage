const btn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul");

btn.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  btn.setAttribute("aria-expanded", isOpen);
});