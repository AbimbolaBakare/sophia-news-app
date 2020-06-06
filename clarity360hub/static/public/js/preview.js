(function ($) {
    "use strict";

    /*====================================
            sticky menu js
    ======================================*/
    var windows = $(window);
    var sticky = $('.header-fixed');
    windows.on('scroll', function () {
        var scroll = windows.scrollTop();
        if (scroll < 50) {
            sticky.removeClass('stick');
        } else {
            sticky.addClass('stick');
        }
    });
    /*====================================
            slick nav
        ======================================*/
        var logo_path = $('.mobile-menu').data('logo');
        $('.pre-menu').slicknav({
            appendTo: '.mobile-menu',
            removeClasses: true,
            label: '',
            closedSymbol: '<i class="fa fa-angle-right"><i/>',
            openedSymbol: '<i class="fa fa-angle-down"><i/>',
            brand: '<img src="' + logo_path + '" class="img-fluid" alt="logo">'
        });

       
    /*====================================
                One Page Scroll
    ======================================*/
   
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top - 20;
        
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
      
    })
   
     /*----------- Slick-Slider ------------*/

     $('.blog-slide').slick({
        draggable: false,
        slidesToShow: 5,
        infinite: true,
        slidesToScrol1: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        speed: 3000,
        easing: 'linear',
        variableWidth: true,
        pauseOnHover: true,
        swipeToSlide: true,
    });
    /*====================================
           bottom to top
       ======================================*/
    var btn = $('#btn-to-top');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

   
})(jQuery);