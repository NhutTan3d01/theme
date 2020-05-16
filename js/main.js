// add class
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >=10) {
        $(".header").addClass("header-fixed");
    } else {
        $(".header").removeClass("header-fixed");
    }
});
// overlay
$('.main-menu-btn').on('click', function(){
      $(this).addClass('active');
      $('.main-menu').addClass('active');
    });
    $('.main-menu-overlay').on('click', function(){
      $('.main-menu-btn').removeClass('active');
      $('.main-menu').removeClass('active');
    });

// back to top
      $(function(){
            $(document).on( 'scroll', function(){
 
            if ($(window).scrollTop() > 100) {
            $('.smoothscroll-top').addClass('show');
            } else {
            $('.smoothscroll-top').removeClass('show');
            }
      });
 
            $('.smoothscroll-top').on('click', scrollToTop);
      });
 
      function scrollToTop() {
          verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
          element = $('body');
          offset = element.offset();
          offsetTop = offset.top;
          $('html, body').animate({scrollTop: offsetTop}, 600, 'linear');
      }
// smooth scroll
$(document).ready(function(){
    $('.scroll-down-link ').click(function() {
        var speed = 1200; 
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var hmenu = $('.header').height();
        var position = target.offset().top - hmenu;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    if ($('.products-detail-slider').length && $('.products-detail-slider-nav').length) {
        $('.products-detail-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<span class="main-slide-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            nextArrow: '<span class="main-slide-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            pauseOnFocus: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.products-detail-slider-nav'
        });
        $('.products-detail-slider-nav').slick({
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            pauseOnFocus: false,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.products-detail-slider',
            focusOnSelect: true,
            centerMode: true,
            centerPadding: 0,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 4,
                    }
                }, 
            ]
        });
    };
    
    $('#quality-count .minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('#quality-count .plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
// popup
$('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade',
     callbacks: {
        open: function() {
          console.log(this.content);
          this.content.find('.slick-slider').slick('setPosition');
      },close: function() {
      }
    }
  });

// menu-mobile
$(document).ready(function() {
    $('.dropdown').click(function() {
        $('.sub-menu-wrap').toggleClass('visible');
    });
});