// Variables
const langBtn = document.querySelector(".user-menu__link_lang");
const langText = document.querySelector(".user-menu__link-text");
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

langBtn.addEventListener("click", changeLanguage);

function changeLanguage() {
  if (langText.textContent === "En") {
    langText.textContent = "Ru";
  } else {
    langText.textContent = "En";
  }
}

burger.addEventListener("click", showMobileMenu);

function showMobileMenu() {
  mobileMenu.classList.toggle("opened");
  burger.classList.toggle("active");
}
