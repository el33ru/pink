var burgerStatus = document.querySelector('.burger-status');
var pageHeader = document.querySelector('.page-header');

burgerStatus.classList.remove('burger-status--nojs');
pageHeader.classList.remove('page-header--nojs');

$(function() {
    svg4everybody();
});

$('.js__burger').click(function (burger) {
    burger.preventDefault();
    $('.js__burger span:nth-child(1)').toggleClass('first');
    $('.js__burger span:nth-child(2)').toggleClass('middle');
    $('.js__burger span:nth-child(3)').toggleClass('last');
    $('.page-header__wrapper').toggleClass('page-header__background');
    $('.main-nav__list').toggle(300);
});

$(function() {
    $(".about-us__slider").owlCarousel({
        autoplay: true,
        loop: true,
        items: 1,
        nav: false,
        dots: false,
    });
});

$(function() {
    $(".reviews__slider").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
    });
});

$(function() {
    $(".price-slider__list").owlCarousel({
        autoplay: true,
        loop: true,
        items: 1,
        nav: false,
        dots: true,
        stagePadding: 20,
    });
});


$(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    $('.reviews__button--left').click(function() {
        owl.trigger('next.owl.carousel', [300]);
    });

    $('.reviews__button--right').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });
});