  $(document).ready(function($) {
    $('.slider__content').slick({
      arrows: true,
      prevArrow: '.arrowButton__arrow--prev',
      nextArrow: '.arrowButton__arrow--next',
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
        }
      ]
    });


    $('.popup-open').click(function() {
      $('.popup-fade').fadeIn();
      return false;
    });	
    
    $('.popup-close').click(function() {
      $(this).parents('.popup-fade').fadeOut();
      return false;
    });		
   
    $(document).keydown(function(e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $('.popup-fade').fadeOut();
      }
    });
    
    $('.popup-fade').click(function(e) {
      if ($(e.target).closest('.popup').length == 0) {
        $(this).fadeOut();					
      }
    });
  });