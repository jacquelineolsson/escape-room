
const menuButton = document.querySelector(".mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");
const closeButton = document.querySelector(".mobile-nav__close");



menuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav--open");

    if (mobileNav.classList.contains("mobile-nav--open")) {
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.setAttribute("aria-expanded", "false");
    } 
});

closeButton.addEventListener("click", () => {
    mobileNav.classList.remove("mobile-nav--open");
    menuButton.setAttribute("aria-expanded", "false");
});

const menuLinks = document.querySelectorAll(".mobile-nav__link");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("mobile-nav--open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});