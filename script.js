// Hamburger Menu Toggle for Mobile Devices
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
