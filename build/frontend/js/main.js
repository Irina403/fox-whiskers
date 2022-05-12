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
    $('.sliderSlick').slick({
      arrows: true,
      prevArrow: '.arrowSlder__wrapp-prev',
      nextArrow: '.arrowSlder__wrapp-next',
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
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
    },
    close: function() {
      this.slideUp(500);
    }
  });

  new jQueryCollapse($("#laboratory-price"), {
    open: function() {
      this.slideDown(500);
    },
    close: function() {
      this.slideUp(500);
    }
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

// tabs
function tabs(link, block) {
  let linkSelector = $(link),
      blockSelector = $(block);

  $(linkSelector).on('click', function (e) {
      e.preventDefault();

      let $this = $(this),
          currentData = $(this).data('tab');

      $(blockSelector).removeClass('active_tab');
      $(linkSelector).removeClass('active_tab');

      $(block + '[data-tab="' + currentData + '"]').addClass('active_tab');
      $this.addClass('active_tab');

  });
}

tabs('.professionals__btn', '.doc_itemProff');