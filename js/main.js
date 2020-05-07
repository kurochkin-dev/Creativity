// гамбургер меню отображающееся на маленьких разрешениях
window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".header__menu"),
        menuItem = document.querySelectorAll(".menu__element"),
        hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active");
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.toggle("hamburger_active");
            menu.classList.toggle("menu_active");
        });
    });
});

// кнопка прокрутки вверх вниз
jQuery(function(){
    $(".scroll__up").hide();
    if ($(window).scrollTop()>=250) $(".scroll__up").fadeIn("slow")
    $(window).scroll(function(){
     if ($(window).scrollTop()<=250) $(".scroll__up").fadeOut("slow")
     else $(".scroll__up").fadeIn("slow")
    });
   
    $(".scroll__down").hide();
    if ($(window).scrollTop()<=$(document).height()-999) $(".scroll__down").fadeIn("slow")
    $(window).scroll(function(){
     if ($(window).scrollTop()>=$(document).height()-999) $(".scroll__down").fadeOut("slow")
     else $(".scroll__down").fadeIn("slow")
    });
   
    $(".scroll__up").click(function(){
     $("html, body").animate({scrollTop:0}, "slow")
    })
    $(".scroll__down").click(function(){
     $("html, body").animate({scrollTop:$(document).height()}, "slow")
    })
   });
