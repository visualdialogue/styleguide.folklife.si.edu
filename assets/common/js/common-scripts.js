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
	// set mobile flag
	function checkMobile() {
		console.log('checkMobile()');
		site.screenSize = $( window ).width();
		if(site.screenSize < site.break2) {
			site.isMobile = true;
			console.log('mobile');
		} else {
			console.log('desktop');
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
	// var $navItem = $('.header-nav__main-item');
	 var $navItem = $('.header-nav__title').add($('.footer__title'));
	// var $footerNavItem = $('.footer__main-item');
	var $navLists = $('.header-nav__list').add($('.footer__list'));

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
			if(!site.isMobile) {
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
	var $browsenav = $('#browsenav'); // will only exist on folkways, otherwise hidden with php
	var searchClosed = true;

	// when click share icon
	$searchIcon.on('click', function() {
		// if not yet open
		if(searchClosed) {
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside
			navCloseAll(); // close anything else that's open
			$notSearchIcon.addClass('lighter-nav-icons'); // grey out other icons
			$searchBar.add($browsenav).show(); // show social media icons
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
	var $megaNav = $('#header-nav');
	var $megaNavItem = $('.header-nav__sub-item');
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
* Video
* dependencies: remodal.js, vimeo-player-js
*********************/
	// initialize here
	var remodalInstanceOptions = {
		hashTracking: true
	}
	var remodalInstance = $('[data-remodal-id=modal]').remodal(remodalInstanceOptions);


	  // var $remodal = $('.remodal');
	  var $remodalIframe = $('.remodal__iframe');
	  var $remodalTitle = $('.remodal__title');
	  var $remodalDescription = $('.remodal__description');
	  var $remodalClose = $('.remodal-close');
	  // var $remodalOverlay = $('.remodal-overlay');
	  var player; // global for playing, pausing
	  var playerLoaded = false;

	  // on playing a video in the gallery...
	  $('.video__thumbnail').on('click', function() {
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

		  player = new Vimeo.Player('remodal__iframe', options);
		
		  if(player)
			playerLoaded = true;
		}
		// else just reload the player
		else {
			console.log('NOT first time play');
		  	// player = new Vimeo.Player('remodal__iframe', options);

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

});
