var x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("nav");
  element.classList.toggle("open");

  x.classList.toggle("change");
};


$( "#nav-price" ).hover(function(e) {
  e.preventDefault();
  $( "#priceWrapper" ).slideToggle();
});

$( "#mobile-nav__item" ).click(function(e) {
  e.preventDefault();
  $( "#priceMobile" ).slideToggle();
});

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



  new jQueryCollapse($("#custom-show-hide-example"), {
    open: function() {
      this.slideDown(500);
      // $('.pricePage__arrow').html('<img src="images/svg/arrow-up.svg", alt="";/>');
    },
    close: function() {
      this.slideUp(500);
      // $('.pricePage__arrow').html('<img src="images/svg/arrow-down.svg", alt="";/>');
    }
   
  });

  new jQueryCollapse($("#laboratory-price"), {
    open: function() {
      this.slideDown(500);
      // $('.pricePage__arrow').html('<img src="images/svg/arrow-up.svg", alt="";/>');
    },
    close: function() {
      this.slideUp(500);
      // $('.pricePage__arrow').html('<img src="images/svg/arrow-down.svg", alt="";/>');
    }
   
  });

	// $(document).ready(function(){
	// 	// set up hover panels
	// 	// although this can be done without JavaScript, we've attached these events
	// 	// because it causes the hover to be triggered when the element is tapped on a touch device
	// 	$('.hover').hover(function(){
	// 		$(this).addClass('flip');
	// 	},function(){
	// 		$(this).removeClass('flip');
	// 	});
	// });