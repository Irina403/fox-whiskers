<<<<<<< HEAD
$("#nav-price").hover(function(e){e.preventDefault(),$("#priceWrapper").slideToggle()}),$("#mobile-nav__item").click(function(e){e.preventDefault(),$("#priceMobile").slideToggle()}),$(document).ready(function(e){e(".slider__content").slick({arrows:!0,prevArrow:".arrowButton__arrow--prev",nextArrow:".arrowButton__arrow--next",dots:!1,infinite:!0,speed:800,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}}]}),e(".popup-open").click(function(){return e(".popup-fade").fadeIn(),!1}),e(".popup-close").click(function(){return e(this).parents(".popup-fade").fadeOut(),!1}),e(document).keydown(function(o){27===o.keyCode&&(o.stopPropagation(),e(".popup-fade").fadeOut())}),e(".popup-fade").click(function(o){0==e(o.target).closest(".popup").length&&e(this).fadeOut()})}),new jQueryCollapse($("#custom-show-hide-example"),{open:function(){this.slideDown(500)},close:function(){this.slideUp(500)}});
=======
function myFunction(){document.getElementById("nav").classList.toggle("open"),x.classList.toggle("change")}var x=document.getElementById("contain");x.addEventListener("click",myFunction),$("#nav-price").hover(function(e){e.preventDefault(),$("#priceWrapper").slideToggle()}),$("#mobile-nav__item").click(function(e){e.preventDefault(),$("#priceMobile").slideToggle()}),$(document).ready(function(e){e(".slider__content").slick({arrows:!0,prevArrow:".arrowButton__arrow--prev",nextArrow:".arrowButton__arrow--next",dots:!1,infinite:!0,speed:800,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}}]}),e(".popup-open").click(function(){return e(".popup-fade").fadeIn(),!1}),e(".popup-close").click(function(){return e(this).parents(".popup-fade").fadeOut(),!1}),e(document).keydown(function(o){27===o.keyCode&&(o.stopPropagation(),e(".popup-fade").fadeOut())}),e(".popup-fade").click(function(o){0==e(o.target).closest(".popup").length&&e(this).fadeOut()})}),new jQueryCollapse($("#custom-show-hide-example"),{open:function(){this.slideDown(500)},close:function(){this.slideUp(500)}});
>>>>>>> b400e255bc60d1de90c302eaf7e80cde60f81746
