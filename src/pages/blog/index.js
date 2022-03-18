var html = document.querySelector("html");

var mobileMenuOpen = document.querySelector(".open-mobile-popup");
var mobileMenuClose = document.querySelector(".close-mobile-popup");


mobileMenuOpen.addEventListener("click", function(){
    html.classList.toggle("hide-menu");
    html.classList.toggle("active");
});

mobileMenuClose.addEventListener("click", function(){
    html.classList.toggle("hide-menu");
    html.classList.toggle("active");
});