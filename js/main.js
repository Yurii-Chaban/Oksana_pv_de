// for main menu mobile
$(function () {
    $('.hidden-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('hidden-menu-active');
        }
    });
});

// for main menu desctop
$(function () {
    $('.main-menu .list-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('desctop-menu-active');
        }
    });
});

// for footer menu
$(function () {
    $('.footer-menu .menu-list li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('footer-menu-active');
        }
    });
});

// submenu
$(function () {
    $('.toggle-submenu-list li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('submenu-item-active');
        }
    });
});

// mobile blog more slider
var swiper = new Swiper('.swiper-container-mobile', {
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    slidesPerView: 1,
    paginationClickable: true,
    simulateTouch: true,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    spaceBetween: 0
});
// desctop blog more slider
var swiper = new Swiper('.swiper-container-desctop', {
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    slidesPerView: 3,
    paginationClickable: true,
    simulateTouch: true,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    spaceBetween: 0
});
// FOR DROPDOWN ACTIVE
$(document).ready(function($) {
    $('.ui.dropdown')
    .dropdown();
});     
// FOR DISABLED / ANABLED LENGUAGE
$( document ).ready(function() {

    $( '.girlLanguage').parent('li').find('input[type=radio]').attr('disabled',true);

    $('.girlLanguage').on('change',function(){
        $( '.girlLanguage:checked').parent('li').find('input[type=radio]').attr('disabled',false);
        $( '.girlLanguage').filter(":not(':checked')").parent('li').find('input[type=radio]').attr('disabled',true);
    });

}); 
// FIND DROPDOVN AND ADD CLASS ANGLE DOWN IN SELECT CITY BLOCK
$(document).ready(function($) {
    $(".select-city").find(".icon").addClass('angle down');
});
//for mobile submenu
$(".hidden-menu .toggle-menu").click(function() {
    $(this).find(".toggle-submenu").toggleClass("toggle-active");
});

// Empfehlungen
var swiper_main = new Swiper('.swiper-container-design-mobile', {
    paginationClickable: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    freeMode: true,
    watchSlidesProgress: true,
    autoplayDisableOnInteraction: false
});
// $(document).ready(function(){
//   var mySwiper = new Swiper('.swiper-container-design-mobile',{
//     centeredSlides: true,
//     simulateTouch: false,
//     loop: true,
//     slidesPerView: 3,
//     spaceBetween: 30,
//     autoplay: 3500,
//     speed: 1000,
//     freeMode: true,
//     slidesPerView: 'auto'
//   });
//   function fixSwiper() {
//     if ($(window).width() < 1375) {
//       //For example 3 slides per slide:
//       $('.swiper-slide').css({width: mySwiper.width/3})
//     }
//     if ($(window).width() < 675) {
//       //For example 2 slides per slide:
//       $('.swiper-slide').css({width: mySwiper.width/2})
//     }
//     if ($(window).width() <= 320) {
//       //For example 2 slides per slide:
//       $('.swiper-slide').css({width: mySwiper.width})
//     }
//     mySwiper.reInit()
//   }
//   //Fix it right after initialization
//   fixSwiper();
//   //And on window resize
//   $(window).resize(function(){ fixSwiper() })
// })