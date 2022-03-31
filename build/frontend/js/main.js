document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tab');
  const tabsBtn = document.querySelectorAll('.tab__item');
  const tabsContent = document.querySelectorAll('.tabs__content');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab__item')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => {el.classList.remove('tab__item--active')});
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tab__item--active');
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach(el => {el.classList.remove('tabs__content--active')});
    console.log(tabsContent);
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
  
  };
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