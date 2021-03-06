(function ($) {
	"use strict";
	
	/*----------------------------
	Responsive menu Active
	------------------------------ */
	$(".mainmenu ul#primary-menu").slicknav({
		allowParentLinks: true,
		prependTo: '.responsive-menu'
	});
	

	/*-------------------------
	START - search bar toggle
	--------------------------*/
	$(".toggle-pade").on('click', function() {
		$(".navbar-form").toggle( "slow" );
		return false;
	});
	$(".menubar-icon").on('click', function() {
		$(".offcanvas-menu").addClass( "active" );
		return false;
	});
	$(".offcanvasmenu-close").on('click', function() {
		$(".offcanvas-menu").removeClass( "active" );
		$(".offcanvas-menu li").removeClass( "showul" );
	});
	$(".offcanvas-menu li").on('click', function() {
		$(this).toggleClass( "showul" );
	});
	
	/*----------------------------
    START - Slider activation
    ------------------------------ */
	$('.hero-area-slide').owlCarousel({
		dots:true,
		loop:true,
		autoplay: true,
		autoplayTimeout:4000,
		margin:0,
		items:1,
		nav: false,
	});
	$('.testimonial-slider').owlCarousel({
		dots:true,
		loop:true,
		autoplay: false,
		autoplayTimeout:4000,
		margin:0,
		items:1,
		nav: false,
		responsive:{
			768:{
				items:2,
				margin: 30
			}
		}
	});
    $('.partner-slide').owlCarousel({
        dots:false,
        nav:false,
        loop:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
				margin: 0
            },
            360:{
                items:2,
				margin: 30
            },
            600:{
                items:3,
				margin: 30
            },
            1200:{
                items:4,
				margin: 30
            }
        }
    });
	$('.testimonial-slider2').owlCarousel({
		dots:true,
		loop:true,
		autoplay: true,
		autoplayTimeout:4000,
		items:1,
		nav: false,
		navText: ["<i class='icofont icofont-curved-left'></i>", "<i class='icofont icofont-curved-right'></i>"],
		responsive:{
			992:{
				nav: true,
			}
		}
	});
	
	/*----------------------------
	START - videos popup
	------------------------------ */
	$('.popup-youtube').magnificPopup({type:'iframe'});
	//iframe scripts
	$.extend(true, $.magnificPopup.defaults, {  
		iframe: {
			patterns: {
				//youtube videos
				youtube: {
					index: 'youtube.com/', 
					id: 'v=', 
					src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
				}
			}
		}
	});
	
	/*----------------------------
    START - Counterup
    ------------------------------ */
	$('.counter').counterUp({
		delay: 20,
		time: 500
	});
	
	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 600) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
	
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	jQuery(window).on('load', function () {
		jQuery("#preloader").fadeOut(500);
	});

}(jQuery));