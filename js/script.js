const hamburger = document.querySelector(".nav-toggle");
const body = document.body;
const page = document.documentElement;

function doToggle() {
    body.classList.toggle('menu-open');
    page.classList.toggle('noscroll');
}
hamburger.addEventListener('click', doToggle);