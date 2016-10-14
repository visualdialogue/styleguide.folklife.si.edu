$(document).ready(function () {

	/***************************
	 * General
	 ***************************/
	var screenSize = $( window ).width(),
		$body = $('body'),
		device, // specify size of screen
		isMobile = false,
		break1 = 640, // first media query break
		break2 = 852; // break to 6 across
		fullwidth = 1480; // break to 6 across

	// set mobile flag
	function checkMobile() {
		console.log('checkMobile()');
		screenSize = $( window ).width();
		if(screenSize < break2) {
			isMobile = true;
			console.log('mobile');
		} else {
			console.log('desktop');
			isMobile = false;
		}
	}

	checkMobile(); // initial
	
	// $(window).resize( $.throttle(125, function() {
	// 	checkMobile();
	// }));

	// make active pseudo styles in mobile safari, from https://alxgbsn.co.uk/2011/10/17/enable-css-active-pseudo-styles-in-mobile-safari/
	document.addEventListener("touchstart", function() {},false);

	/*********************
	 * Mobile dropdown menu
	 *********************/
	 var $navItem = $('.meganav__main-item');
	 var $navLists = $('.meganav__main-item__list');

	 // when click a main list item
	 $navItem.on('click', function() {
	 	var $this = $(this);

	 	var $thisUl = $this.children('ul');
	 	console.log('$thisUl: ', $thisUl);
	 	console.log('$thisUl.hasClass("nav-show-mobile"): ', $thisUl.hasClass("nav-show-mobile"));

	 	// var thisNavOpen = ; // check to see you are already open

	 	// console.log('thisNavOpen: ', thisNavOpen);

	 	// if you are already open, close all
	 	if($thisUl.hasClass('nav-show-mobile')) {
	 		$navLists.removeClass('nav-show-mobile'); // close all other open nav lists
	 		
	 		// BUGBUGBUGBUG - show child, otherwise in loop
	 		$thisUl.addClass('nav-show-mobile'); // show child nav list BUG
	 	}
	 	// else close all and open yourself
	 	else {
	 		$navLists.removeClass('nav-show-mobile'); // close all other open nav lists
	 		$thisUl.addClass('nav-show-mobile'); // show child nav list
	 	}
	 });


	/***************************
	Mobile Header Animation from http://www.webdesignerdepot.com/2014/05/how-to-create-an-animated-sticky-header-with-css3-and-jquery/
	***************************/
	var isNavOpen = false;
	var $navBar = $('.navbar');
	var $navBarHeader = $('.navbar-header');
	var $navspacer = $('#navspacer');


	var gapNavHeight = 62;
	// var gapNavHeight = 10;
	var navSpacerHeight = 95;

	$(window).scroll(function() {
		// check if nav is open
		if (($(this).scrollTop() > gapNavHeight) && (isNavOpen == false)) {  
			$navBar.addClass("smaller-header");
			isNavOpen = true;
			if(!isMobile) {
				$navspacer.addClass("navspacer--taller"); // open right away
				$navspacer.addClass("navspacer-open"); // open right away
			}
			else {
				$socialMediaIconDivMobile.hide();
				shareClosed = true; // flag for closing	
			}
		}
		else if (($(this).scrollTop() <= gapNavHeight ) && (isNavOpen == true)) {
			$navBar.removeClass("smaller-header"); // shrink
			isNavOpen = false;
			if(!isMobile)
				$navspacer.removeClass("navspacer-open"); // gracefully cloase
			
		}

		// // Close Nav if mobile on scroll
		// if(isMobile && (!shareClosed || !menuClosed || !searchClosed )) {
		// 	console.log('close it');
		// 	navCloseAll(); // close anything else that's open
		// }

	});



	/***************************
	 * NAVBARRRR
	***************************/

	// CLICK OUTSIDE MENU
	// activate outside navbar div
	var $navbarOutside = $('.navbar-outside');

	// close nav if clicked
	$navbarOutside.on('click', function() {
		navCloseAll(); // close all auxiliary nav
		$navbarOutside.css('position', 'static'); // not fixed so not active
		$menuIcon.add($shareIcon).add($searchIcon).show(); // show just the main icons again
	});


	/*********************
	 * Social Media Icons
	 *********************/
	var $socialMediaIconDivMobile = $('.social-icons--mobile');
	var $socialMediaIconsMobile = $('.social-icon--mobile');
	var $socialMediaIconsDesktop = $('.social-icons--desktop');
	var $socialMediaIcons = $('.social-icons');
	var $shareIcon = $('#share-icon');
	var shareClosed = true;

	// when click share icon
	$shareIcon.on('click', function() {
		// if not yet open
		if(shareClosed) {
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside			
			navCloseAll(); // close anything else that's open
			$notShareIcon.addClass('lighter-nav-icons'); // grey out other icons
			shareClosed = false; // flag for closing	
			$socialMediaIcons.show();
		}
		// else is open already so JUST CLOSE IT
		else {
			navCloseAll();
		}
		
	});

	/*********************
	 * Search 
	 *********************/
	var $searchBar = $('.search-bar');
	var $searchIcon = $('#search-icon');
	var $browsenav = $('#browsenav');
	var searchClosed = true;

	// when click share icon
	$searchIcon.on('click', function() {
		// if not yet open
		if(searchClosed) {
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside
			navCloseAll(); // close anything else that's open
			$notSearchIcon.addClass('lighter-nav-icons'); // grey out other icons
			$searchBar.add($browsenav).css('display', 'block'); // show social media icons
			searchClosed = false; // flag for closing	
		}
		// else is open already so JUST CLOSE IT
		else {
			navCloseAll();
		}
	});

	/*********************
	 * Menu
	 *********************/
	var $megaNav = $('#meganav');
	var $menuIcon = $('#menu-icon');
	var menuClosed = true;

	// when click share icon
	$menuIcon.on('click', function() {
		// if not yet open
		if(menuClosed) {
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside
			navCloseAll(); // close anything else that's open
			$notMenuIcon.addClass('lighter-nav-icons'); // grey out other icons
			$megaNav.css('display', 'block'); // show social media icons
			// $navBarHeader.css('z-index', '0'); // make navbar clickable to close
			menuClosed = false; // flag for closing	
		}
		// else is open already so JUST CLOSE IT
		else {
			navCloseAll();
		}
		
	});


	// $megaNav.on({
	//   focusout: function () {
	//     $(this.hash).data('timer', setTimeout(function () {
	//       $(this.hash).removeClass('active');
	//       console.log('clickd outside');
	//     }.bind(this), 0));
	//   },
	//   focusin: function () {
	//     clearTimeout($(this.hash).data('timer'));  
	//       console.log('clickd inside');
	//   }
	// });

	// GRAY OUT NAV
	var $allIcons = $menuIcon.add($shareIcon).add($searchIcon);
	var $notMenuIcon = $allIcons.not($menuIcon);
	var $notShareIcon = $allIcons.not($shareIcon);
	var $notSearchIcon = $allIcons.not($searchIcon);

	/*********************
	 * close nav
	 *********************/
	function navCloseAll() {
		// close other icons
		if (isMobile)
	 		$navLists.removeClass('nav-show-mobile'); // close all other open nav lists - mobile only
		$allIcons.removeClass('lighter-nav-icons');
		$megaNav.add($searchBar).add($browsenav).add($socialMediaIcons).hide(); // close auxiliaries
		menuClosed = true;
		searchClosed = true;
		shareClosed = true;
	}


	/*********************
	 * search
	 *********************/
	 $searchBar.on('submit', function() {
	 	alert('We are looking into it...');
	 });

	/*********************
	 * Hero Carousel
	 * Uses slick.js from Ken Wheeler at http://kenwheeler.github.io/slick/
	 *********************/
	var slickCreatedMobile = false; // flag to create and destroy when needed
	var slickCreatedDesktop = false; // flag to create and destroy when needed

	function initiateSlickCarousel() {
		
		// if(slickCreated) {
		// 	$('#banner-carousel').slick('unslick'); // clear the palette first
		// }
		// if(slickCreatedMobile) {
		// 	$('.banner__nav--mobile').slick('unslick'); // clear the palette first
		// }
		if(isMobile) {
			console.log('mobile');
			createBannerMobile();
		} else {
			console.log('desktop');
			createBannerDesktop();
		}
	}

	function createBannerMobile() {
		console.log('creating mobile banner...');
		 $('#banner-carousel').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			asNavFor: '.banner__nav--mobile',
			autoplay: true, // pause for testing
			autoplaySpeed: 4000,
		});
		$('.banner__nav--mobile').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '#banner-carousel',
			dots: true,
			appendDots: '.dots--mobile',
		  	focusOnSelect: true,
			adaptiveHeight: true,
		});
		// slickCreatedDesktop = true; // so can destroy banner
		slickCreatedMobile = true; // so can destroy pager
	}


	function createBannerDesktop() {
		console.log('creating desktop banner...');
		$('#banner-carousel').slick({
			// centerMode: true,
			// centerPadding: '0',
			appendDots: '.dots',
			dots: true,
			mobileFirst: 'true',
			appendArrows: '.slick-list',
			// autoplay: true, // pause for testing
			autoplaySpeed: 4000,
			slidesToShow: 1,
			responsive: [
				{
					breakpoint: 1480,
					settings: {
						centerMode: true,
						centerPadding: 'calc((100vw - 1400px) / 2)',
					}
				}
		   	]
		});
		
		slickCreatedDesktop = true; // set so can destroy on page resize
	}

	// on page load
	initiateSlickCarousel();

	// $(window).resize( $.throttle(125, function() {
	// 	// on resize
	// 	slickCarousel();
	// }));
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	// var unslickifyDesktop = debounce(function() {
	var unslickify = function() {
		console.log('unslickify');
		
		// destroy desktop banner
		if(slickCreatedDesktop) {
			$('#banner-carousel').slick('unslick');
			slickCreatedDesktop = false;
		}
		
		// destroy mobile banner
		if(slickCreatedMobile) {
			$('#banner-carousel').slick('unslick');
			$('.banner__nav--mobile').slick('unslick');
			slickCreatedMobile = false;
		}
	};

	// $(window).on('breakpoint', function(event, _slick, breakpoint) {
	// $(window).resize( $.throttle(125, function() {
	$(window).on('resize', function() {
		checkMobile();

		// if getting smaller
		if(isMobile && slickCreatedDesktop) {
			unslickify(); // destroy
			createBannerMobile();
	 	} else if(!isMobile && slickCreatedMobile) {
			unslickify(); // destroy
			createBannerDesktop();
		}
	});

});