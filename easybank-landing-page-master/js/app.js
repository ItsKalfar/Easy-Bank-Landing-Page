const hamBtn = document.querySelector("#btn");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

hamBtn.addEventListener("click", () => {
  hamBtn.classList.toggle("open");
  menu.classList.toggle("open");
  overlay.classList.toggle("open");

  if (overlay.classList.contains("open")) {
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
    menu.classList.add("fade-in");
    menu.classList.remove("fade-out");
    body.classList.add("noscroll");
  } else {
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    menu.classList.remove("fade-in");
    menu.classList.add("fade-out");
    body.classList.remove("noscroll");
  }
});
