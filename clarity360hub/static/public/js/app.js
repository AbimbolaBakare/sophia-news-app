jQuery(document).ready(function ($) {
    "use strict";
    /*====================================
        sticky menu js
      ======================================*/
    var windows = $(window);
    var sticky = $(".header-fixed");
    windows.on("scroll", function () {
        var scroll = windows.scrollTop();
        if (scroll < 50) {
            sticky.removeClass("stick");
        } else {
            sticky.addClass("stick");
        }
    });
    /*====================================
      slick nav
  ======================================*/
    var logo_path = $(".mobile-menu").data("logo");
    $(".navbar-nav").slicknav({
        appendTo: ".mobile-menu",
        removeClasses: true,
        label: "",
        closedSymbol: '<i class="fa fa-angle-right"><i/>',
        openedSymbol: '<i class="fa fa-angle-down"><i/>',
        brand: '<img src="images/logo.jpeg" alt="logo" class="logo">',
    });
    /*====================================
      slick  slider
  ======================================*/
    $(".hero-slide").slick({
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $(".hero-slide-three").slick({
        infinite: true,
        dots: true,
        speed: 3000,
        fade: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(".testi-slide-one").slick({
        centerMode: true,
        slidesToShow: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                },
            },
        ],
    });
    $(".client-slide").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 2,
                },
            },
        ],
    });

    $(".testi-slide-two").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });
    /*====================================
      counter
  ======================================*/
    $(".counter").counterUp({
        delay: 10,
        time: 1000,
    });
    /*====================================
      bottom to top
  ======================================*/
    var btn = $("#btn-to-top");
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass("show");
        } else {
            btn.removeClass("show");
        }
    });
    btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            "300"
        );
    });

    /*====================================
      ACCORDION WITH TOGGLE ICONS
  ======================================*/
    function toggleIcon(e) {
        $(e.target)
            .prev(".panel-heading")
            .find(".more-less")
            .toggleClass("fa-angle-down fa-angle-up");
    }
    $(".panel-group").on("hidden.bs.collapse", toggleIcon);
    $(".panel-group").on("shown.bs.collapse", toggleIcon);
});
