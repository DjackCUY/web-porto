document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".ul-navbar");

    hamburger.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});
