// globals, for use in common and unique script documents
// from http://stackoverflow.com/a/7048295
	var site = {};

	site.screenSize = $( window ).width();
	site.$body = $('body');
	site.isMobile = false;
	site.break1 = 640; // first media query break
	site.break2 = 852; // break to 6 across
	site.fullwidth = 1480; // break to 6 across

	$(document).ready(function () {

/***************************
* General
***************************/
	site.navbar = $('#navbar'); // logo switching for nav


	// set mobile flag
	function checkMobile() {
		site.screenSize = $( window ).width();
		if(site.screenSize < site.break2) {
			site.isMobile = true;
		} else {
			site.isMobile = false;
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
	// var $navItem = $('.header-nav-main-item');
	 var $navItem = $('.header-nav-title').add($('.footer-nav-title'));
	// var $footerNavItem = $('.footer-main-item');
	var $navLists = $('.header-nav-list').add($('.footer-nav-list'));

	// when click a main list item
	 $navItem.on('click', function(e) {

	 	// check if this nav item has as ul as next sibling, from http://stackoverflow.com/a/7678513
	 	if($(this).next('ul').length) {
	 		var hasChildren = true;
	 		console.log('link has children');
	 	}
	 	else {
	 		console.log('link has NO children');
	 		var hasChildren = false;
	 	}

	 	// if have children, don't follow click on mobile, so can show dropdown sections
	 	if(site.isMobile && hasChildren) {
	 		console.log('dont follow link mobile');
			e.preventDefault ? e.preventDefault() : e.returnValue = false; // for windows too, from http://stackoverflow.com/a/1000606
	 	}

		var $this = $(this);

	 	var $thisUl = $this.next('ul');
	 	// console.log('$thisUl: ', $thisUl);
	 	// console.log('$thisUl.hasClass("nav-show-mobile"): ', $thisUl.hasClass("nav-show-mobile"));

		// var thisNavOpen = ; // check to see you are already open

		// console.log('thisNavOpen: ', thisNavOpen);

		// if you are already open, close all
		if($thisUl.hasClass('nav-show-mobile')) {
			$navLists.removeClass('nav-show-mobile'); // close all other open nav lists
			$navItem.removeClass('active'); // remove all active titles
			
			// BUGBUGBUGBUG - show child, otherwise in loop
			// $thisUl.addClass('nav-show-mobile'); // show child nav list BUG
		}
		// else close all and open yourself
		else {
			$navItem.removeClass('active'); // remove all active titles
			$navLists.removeClass('nav-show-mobile'); // close all other open nav lists
			$this.addClass('active'); // add css styles to title
			$thisUl.addClass('nav-show-mobile'); // show child nav list
		}
	});

/***************************
* Mobile Header Animation from http://www.webdesignerdepot.com/2014/05/how-to-create-an-animated-sticky-header-with-css3-and-jquery/
***************************/
	var isNavOpen = false;
	var $siteToggle = $('#site-toggle');
	var $navBarHeader = $('.navbar-header');
	var $navspacer = $('#navspacer');

	// var gapNavHeight = 62;
	var gapNavHeight = $siteToggle.outerHeight();
	// var gapNavHeight = 10;
	// var navSpacerHeight = 95;

	$(window).scroll(function() {
		// close all if on phone
		if(site.isMobile) {
			navCloseAll(); // close anything else that's open by default
			gapNavHeight = 0; // activate next condition immediately
		}

		// when user scrolls past height of site toggle, make smaller
		if (($(this).scrollTop() > gapNavHeight) && (isNavOpen == false)) {  
			site.navbar.addClass("smaller-header navbar--open");
			isNavOpen = true;
			if(!site.isMobile) {
				$navspacer.addClass("navspacer--taller"); // open right away
				$navspacer.addClass("navspacer-open"); // open right away
			}
		}
		else if (($(this).scrollTop() <= gapNavHeight ) && (isNavOpen == true)) {
			site.navbar.removeClass("smaller-header"); // shrink
			isNavOpen = false;
			if(!site.isMobile)
				$navspacer.removeClass("navspacer-open"); // gracefully cloase
			
		}

		// // Close Nav if mobile on scroll
		// if(site.isMobile && (!shareClosed || !menuClosed || !searchClosed )) {
		// 	console.log('close it');
		// 	navCloseAll(); // close anything else that's open
		// }

	});

/***************************
* NAVBAR
**************************/

	// CLICK OUTSIDE MENU
	// activate outside navbar div
	var $navbarOutside = $('.navbar-outside');
	var $folkwaysNav = $('.folkways-nav');

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
		console.log('close all');

		// if not yet open
		if(shareClosed) {
			navCloseAll(); // close anything else that's open by default, only after we've determined that share is Closed
			site.navbar.addClass('navbar--open');
			if(site.isMobile) // switch to one-line logo in mobile view
				site.navbar.addClass('logo-swap'); 
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside			
			$notShareIcon.addClass('lighter-nav-icons'); // grey out other icons
			shareClosed = false; // flag for closing	
			$socialMediaIcons.show();
			$folkwaysNav.hide(); // hide folkways nav
		} else {
			navCloseAll(); // close anything else that's open by default
			shareClosed = true; // flag for closing	
		}
	});

/*********************
* Search 
*********************/
	var $searchBar = $('.search-bar');
	var $searchBarMobile = $('.search-bar--mobile');
	var $searchIcon = $('#search-icon');
	var $browsenav = $('#browsenav'); // will only exist on folkways, otherwise hidden with php
	var searchClosed = true;

	// when click share icon
	$searchIcon.on('click', function() {
		// if not yet open
		if(searchClosed) {
			navCloseAll(); // after we've determined that search is closed, close anything else that's open by default
			if(site.isMobile) // switch to one-line logo in mobile view
				site.navbar.addClass('logo-swap'); 
			site.navbar.addClass('navbar--open');
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside
			$notSearchIcon.addClass('lighter-nav-icons'); // grey out other icons
			$searchBar.add($browsenav).show(); // show social media icons
			searchClosed = false; // flag for closing	
			$folkwaysNav.hide(); // hide folkways nav
		} else {
			navCloseAll(); // close anything else that's open by default
			searchClosed = true; // flag for closing	
		}
	});

/*********************
* Menu
*********************/
	var $megaNav = $('#header-nav');
	var $megaNavItem = $('.header-nav-sub-item');
	var $menuIcon = $('#menu-icon');
	var menuClosed = true;

	// when click share icon
	$menuIcon.on('click', function() {

		// if not yet open
		if(menuClosed) {
			navCloseAll(); // after we've determined that menu is closed, close anything else that's open by default
			site.navbar.addClass('navbar--open');
			site.navbar.addClass('logo-swap'); // switch to one-line logo
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside
			console.log('one line logo');				
			$notMenuIcon.addClass('lighter-nav-icons'); // grey out other icons
			$megaNav.css('display', 'block'); // show social media icons
			// $navBarHeader.css('z-index', '0'); // make navbar clickable to close
			menuClosed = false; // flag for closing	
			$folkwaysNav.hide(); // hide folkways nav
		} else {
			navCloseAll(); // close anything else that's open by default
			menuClosed = true;
		}
		
	});

	// hide menu when go to internal anchor link
	$megaNavItem.on('click', function() {
		console.log('header-navitem clicked');
		navCloseAll();
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
		if (site.isMobile)
	 		$navLists.removeClass('nav-show-mobile'); // close all other open nav lists - mobile only
	 	else
			$folkwaysNav.show(); // reset folkways nav, but not on mobile
	 		
		site.navbar.removeClass('navbar--open');
		$allIcons.removeClass('lighter-nav-icons');
		$megaNav.add($searchBar).add($browsenav).add($socialMediaIcons).hide(); // close auxiliaries
		console.log('all closed');
		menuClosed = true;
		searchClosed = true;
		shareClosed = true;

		site.navbar.removeClass('logo-swap'); // switch back to block logo
	}


	/*********************
	* search
	*********************/
		$searchBar.on('submit', function() {
			alert('We are looking into it...');
		});

/*********************
* Video
* dependencies: remodal.js, vimeo-player-js
*********************/
	// initialize here
	var remodalInstanceOptions = {
		hashTracking: true
	}
	var remodalInstance = $('[data-remodal-id=modal]').remodal(remodalInstanceOptions);


	  // var $remodal = $('.remodal');
	  var $remodalIframe = $('.remodal-iframe');
	  var $remodalTitle = $('.remodal-title');
	  var $remodalDescription = $('.remodal-description');
	  var $remodalClose = $('.remodal-close');
	  // var $remodalOverlay = $('.remodal-overlay');
	  var player; // global for playing, pausing
	  var playerLoaded = false;

	  // on playing a video in the gallery...
	  $('.video').on('click', function() {
	  	// console.log('click');
	  	// manually open remodal because sometimes just doesn't do it--\/--
	  	remodalInstance.open();
	  	console.log('opened remodal');


		$video_id = $(this).data('video-id');
		// set title
		$title = $(this).data('title');
		$remodalTitle.html($title);

		// set description
		$description = $(this).data('description');
		$remodalDescription.html($description);

		// show close button
		$remodalClose.removeClass('visually-hidden');

		// if first time loading a video...
		if(!playerLoaded) {
			console.log('first time play');
		  var options = {
			  id: $video_id,
			  width: 640,
			  autoplay: true,
		  }

		  player = new Vimeo.Player('remodal-iframe', options);
		
		  if(player)
			playerLoaded = true;
		}
		// else just reload the player
		else {
			console.log('NOT first time play');
		  	// player = new Vimeo.Player('remodal-iframe', options);

	  		player.loadVideo($video_id).then(function() {
	  			player.play();
	  		});
		}

	  })

	  // listen for closing, from https://github.com/VodkaBears/Remodal
	  $(document).on('closing', '.remodal', function (e) {
	  	player.unload().then( function() {
	  		console.log('unloaded video');
	  	}); // reset iframe
	  	$remodalClose.addClass('visually-hidden');
		// player.pause();
	  });

	// close remodal with X
	$remodalClose.on('click', function() {
		remodalInstance.close();
	});

/********************
* Smooth Scrolling
* from https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
********************/

	$('a[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 400);
	    }
	});

/*********
* Slick nav functions
**********/
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

	// // var unslickifyDesktop = debounce(function() {
	// var unslickify = function() {
	// 	console.log('unslickify');
		
	// 	// destroy desktop banner
	// 	if(slickCreatedDesktop) {
	// 		$('#banner-carousel').slick('unslick');
	// 		slickCreatedDesktop = false;
	// 	}
		
	// 	// destroy mobile banner
	// 	if(slickCreatedMobile) {
	// 		$('#banner-carousel').slick('unslick');
	// 		$('.banner__nav--mobile').slick('unslick');
	// 		slickCreatedMobile = false;
	// 	}
	// };

	// // $(window).on('breakpoint', function(event, _slick, breakpoint) {
	// // $(window).resize( $.throttle(125, function() {
	// $(window).on('resize', function() {
	// 	checkMobile();

	// 	// if getting smaller
	// 	if(site.isMobile && slickCreatedDesktop) {
	// 		unslickify(); // destroy
	// 		createBannerMobile();
	//  	} else if(!site.isMobile && slickCreatedMobile) {
	// 		unslickify(); // destroy
	// 		createBannerDesktop();
	// 	}
	// });

});