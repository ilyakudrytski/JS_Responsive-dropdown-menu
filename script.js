const navbar = document.querySelector(".navbar");
const searchBox = document.querySelector(".search-box .bx-search");


searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
});

const navLinks = document.querySelector(".nav-links");
const menuOpenBtn = document.querySelector(".navbar .bx-menu");
const menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.addEventListener('click', () => {
    navLinks.style.left = "0";
})

menuCloseBtn.addEventListener('click', () => {
    navLinks.style.left = "-100%";
})



const htmlcssArrow = document.querySelector(".htmlcss-arrow");
const moreArrow = document.querySelector(".more-arrow");
const jsArrow = document.querySelector(".js-arrow");

htmlcssArrow.addEventListener('click', () => {
    navLinks.classList.toggle("show1");
})

moreArrow.addEventListener('click', () => {
    navLinks.classList.toggle("show2");
})

jsArrow.addEventListener('click', () => {
    navLinks.classList.toggle("show3");
})