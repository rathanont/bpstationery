$(document).ready(function () {
  'use strict'

  $('[data-toggle="menu"]').on('click', function () {
    $(this).toggleClass('active');
    $('.nav-collapse').toggleClass('open');
  });
  $('.nav-menu .nav-link').on('click', function () {
    $('[data-toggle="menu"]').removeClass('active');
    $('.nav-collapse').removeClass('open');
  });

  $('.carousel').carousel({
    interval: 2000,
    pause: false,
    touch: false
  });

  $("#sec5 .slick-for").slick({
    asNavFor: '.slick-nav',
    prevArrow: '<button type="button" class="slick-prev"><img src="./assets/images/icons/arrow-prev.svg" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./assets/images/icons/arrow-next.svg" /></button>'
  });
  $("#sec5 .slick-nav").slick({
    slidesToShow: 7,
    asNavFor: '.slick-for',
    focusOnSelect: true
  });

  var swiper = new Swiper('#main', {
    // initialSlide: 4,
    hashNavigation: true,
    direction: 'vertical',
    mousewheel: true,
    keyboard: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'progressbar',
      progressbarOpposite: true,
    },
    on: {
      slideChangeTransitionEnd: function () {
        $('.swiper-slide').find('video').each(function () {
          this.pause();
          this.currentTime = 0;
        });
        $('.swiper-slide-active').find('video').each(function () {
          this.play();
        });
      },
    }
  });
  $('#slide1').click(swiper, function () {
    swiper.slideTo(0);
  })
  $('#slide2').click(swiper, function () {
    swiper.slideTo(1);
  })
  $('#slide3').click(swiper, function () {
    swiper.slideTo(2);
  })
  $('#slide4').click(swiper, function () {
    swiper.slideTo(3);
  })
  $('#slide5').click(swiper, function () {
    swiper.slideTo(4);
  })
  $('#slide6').click(swiper, function () {
    swiper.slideTo(5);
  })
});