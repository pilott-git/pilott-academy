let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px"; // Hide navbar when scrolling down
    } else {
        navbar.style.top = "0"; // Show navbar when scrolling up
    }
    lastScrollTop = scrollTop;
});
