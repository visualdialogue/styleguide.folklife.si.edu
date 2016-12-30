// globals, for use in common and unique script documents
// from http://stackoverflow.com/a/7048295
	var site = {};

	site.screenSize = $( window ).width();
	site.$body = $('body');
	// site.isMobile = false;
	site.break1 = 640; // first media query break
	site.break2 = 852; // break to 6 across
	site.fullwidth = 1480; // break to 6 across

	// folkways different mobile scrolling b/c of toggle bar presence
	if (site.$body.hasClass('folkways-site'))
		site.isFolkways = true;
	else
		site.isFolkways = false;


$(document).ready(function () {

/***************************
* General
***************************/
	site.navbar = $('#navbar'); // logo switching for nav

	var firstTimeCheck = true; // check for first time b/c some vars still undefined
	checkMobile(); // initial

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
	 		// console.log('link has children');
	 	}
	 	else {
	 		// console.log('link has NO children');
	 		var hasChildren = false;
	 	}

	 	// if have children, don't follow click on mobile, so can show dropdown sections
	 	if(site.isMobile && hasChildren) {
	 		console.log('dont follow link mobile');
			e.preventDefault ? e.preventDefault() : e.returnValue = false; // for windows too, from http://stackoverflow.com/a/1000606
	 	}

		var $this = $(this);

	 	var $thisUl = $this.next('ul');

		// if you are already open, close all
		if($thisUl.hasClass('nav-show-mobile')) {
			$navLists.removeClass('nav-show-mobile'); // close all other open nav lists
			$navItem.removeClass('active'); // remove all active titles
			
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
	var smallerNav = false;
	var $siteToggle = $('#site-toggle');
	var $navBarHeader = $('.navbar-header');
	var $navspacer = $('#navspacer');

	console.log('site.isFolkways', site.isFolkways);

	var gapNavHeight = $siteToggle.outerHeight();
	if(site.isMobile && !site.isFolkways) {
		gapNavHeight = 0; // activate next condition immediately
	}

	// console.log('gapNavHeight', gapNavHeight);
	$(window).scroll(function() {
		// close all if on phone
		if(site.isMobile) {
			navCloseAll(); // close anything else that's open by default
		}

		// when user scrolls past height of site toggle, make smaller
		if (($(this).scrollTop() > gapNavHeight) && (smallerNav == false)) {  
			site.navbar.addClass("is-smaller");
			switchLogo('inline');

			smallerNav = true;
			if(!site.isMobile) {
				$navspacer.addClass("navspacer-open"); // open right away
			}
		}
		else if (($(this).scrollTop() <= gapNavHeight ) && (smallerNav == true)) {
			site.navbar.removeClass("is-smaller"); // shrink
			console.log(smallerNav);
			smallerNav = false;
			if(!site.isMobile)
				$navspacer.removeClass("navspacer-open"); // gracefully close
			switchLogo('block');
		}
	});

	function switchLogo(direction) {

		// only show block if at top of viewport and nav isn't already open
		if(direction == 'block' && $(window).scrollTop() <= gapNavHeight && menuClosed) {
			$('.one-line-logos').fadeOut('30');
			setTimeout(function(){ 
				$('.block-logos').fadeIn('30');
			}, 30);
		} else {
			$('.block-logos').fadeOut('30');
			setTimeout(function(){ 
				$('.one-line-logos').fadeIn('30');
			}, 30);
		}
	}

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
			site.navbar.addClass('is-open');
			// if(site.isMobile) // switch to one-line logo in mobile view
			// site.navbar.addClass('has-one-line-logo'); // switch to one-line logo
			switchLogo('inline');

			$navbarOutside.css('position', 'fixed'); // activate navbarOutside
			// console.log('one line logo');				
			$notMenuIcon.addClass('lighter-nav-icons'); // grey out other icons
			$megaNav.css('display', 'block'); // show social media icons
			// $navBarHeader.css('z-index', '0'); // make navbar clickable to close
			menuClosed = false; // flag for closing	
			$folkwaysNav.hide(); // hide folkways nav
		} else {
			navCloseAll(); // close anything else that's open by default
			switchLogo('block');
			menuClosed = true;
		}
		
	});

	// hide menu when go to internal anchor link
	$megaNavItem.on('click', function() {
		// console.log('header-navitem clicked');
		navCloseAll();
	});

	// GRAY OUT NAV
	var $allIcons = $menuIcon.add($shareIcon).add($searchIcon);
	var $notMenuIcon = $allIcons.not($menuIcon);
	var $notShareIcon = $allIcons.not($shareIcon);
	var $notSearchIcon = $allIcons.not($searchIcon);

/*********************
* Social Media Icons
*********************/
	var $socialMediaIconDivMobile = $('.mobile-social-icons');
	var $socialMediaIconsMobile = $('.mobile-social-icon');
	var $socialMediaIconsDesktop = $('.desktop-social-icons');
	var $socialMediaIcons = $('.social-icons');
	var $shareIcon = $('#share-icon');
	var shareClosed = true;

	// when click share icon
	$shareIcon.on('click', function() {
		// console.log('close all');

		// if not yet open
		if(shareClosed) {
			navCloseAll(); // close anything else that's open by default, only after we've determined that share is Closed
			site.navbar.addClass('is-open');
			if(site.isMobile) { // switch to one-line logo in mobile view
				site.navbar.addClass('has-one-line-logo'); 
				switchLogo('one-line');
			}
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside			
			$notShareIcon.addClass('lighter-nav-icons'); // grey out other icons
			shareClosed = false; // flag for closing	
			$socialMediaIcons.show();
			// $folkwaysNav.hide(); // hide folkways nav
		} else {
			navCloseAll(); // close anything else that's open by default
			shareClosed = true; // flag for closing	
			switchLogo('block');
		}
	});

/*********************
* Search 
*********************/
	var $searchBar = $('.search-bar');
	var $searchBarMobile = $('.mobile-search-bar');
	var $searchIcon = $('#search-icon');
	var $browsenav = $('#browsenav'); // will only exist on folkways, otherwise hidden with php
	var searchClosed = true;

	// when click share icon
	$searchIcon.on('click', function() {
		// if not yet open
		if(searchClosed) {
			navCloseAll(); // after we've determined that search is closed, close anything else that's open by default
			if(site.isMobile) { // switch to one-line logo in mobile view
				site.navbar.addClass('has-one-line-logo'); 
				switchLogo('one-line');
			}
			site.navbar.addClass('is-open');
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside
			$notSearchIcon.addClass('lighter-nav-icons'); // grey out other icons
			$searchBar.add($browsenav).show(); // show social media icons
			searchClosed = false; // flag for closing	
			$folkwaysNav.hide(); // hide folkways nav
		} else {
			navCloseAll(); // close anything else that's open by default
			searchClosed = true; // flag for closing	
			switchLogo('block');
		}
	});

/*********************
* close nav
*********************/
	function navCloseAll() {
		// close other icons
		if (site.isMobile)
	 		$navLists.removeClass('nav-show-mobile'); // close all other open nav lists - mobile only
	 	else
			$folkwaysNav.show(); // reset folkways nav, but not on mobile
	 	
		$navbarOutside.css('position', 'static'); // remove outside clicker so can hover rest of page
		site.navbar.removeClass('is-open');
		$allIcons.removeClass('lighter-nav-icons');
		$megaNav.add($searchBar).add($browsenav).add($socialMediaIcons).hide(); // close auxiliaries
		// console.log('all closed');
		menuClosed = true;
		searchClosed = true;
		shareClosed = true;

		site.navbar.removeClass('has-one-line-logo'); // switch back to block logo
	}


	/*********************
	* search
	*********************/
		// $searchBar.on('submit', function() {
			// alert('We are looking into it...');
		// });

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
	  	// manually open remodal because sometimes just doesn't do it
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

/*********************
* Show figcaption
* When click +
*********************/
	// for any program page image
	if (site.$body.hasClass('program-page') || site.$body.hasClass('program-category-page') || site.$body.hasClass('lesson-plan-page') || site.$body.hasClass('blog-article-page')) {
		var $figcaption = $('.container').find('figcaption'); // get all figures on the page
		console.log('figure loaded');
		// if click on figure, show figcaption
		// important that pointer-events have been set to none for <figure> This allows us to listen to :after element
		$figcaption.on('click', function() {
			console.log('show caption');
			$this = $(this); // cache var
			if($this.css('visibility') == 'hidden') { // if hidden, show
				$this.css('visibility', 'visible');
				$this.addClass('minus-sign');// add minus sign
				// $this.attr('data-content');// add minus sign
			}
			else { // else hide
				$this.css('visibility', 'hidden');
				$this.removeClass('minus-sign');// add minus sign
			}
		})
	}

/**********
* Match Heights
* from https://github.com/liabru/jquery-match-height
**********/
	$('.audio-card .details-inner').matchHeight();

/**********
* Custom dropdowns
**********/
	// $('.dropdown-select').niceSelect();
	// add class for dropdown arrows, from http://stackoverflow.com/a/21253034
	$('.dropdown-title ~ ul.title-has-dropdown').addClass('has-sub');


/*********************
* Search page Filter
*********************/

	// More/Less button
	var secondFilterRowIsClosed = true;
	// class selectors b/c mobile and desktop buttons
	$('.filter-more-button').on('click', function() {
		if(secondFilterRowIsClosed) {
			$(this).html('Less');
			$('.filter-more-band').show();	
			secondFilterRowIsClosed = false;
		} else {
			$(this).html('More');
			$('.filter-more-band').hide();	
			secondFilterRowIsClosed = true;
		}
	});

	// FILTER DROPDOWNS ON MOBILE, NO HOVER
	// Set open/closed tracker for 3 levels of dropdown menus
	var $dropdowns = $('.dropdown-wrapper ul'); // can close all on mobile
	var $firstLevelDropdownTitles = $('.first-level-dropdown-title');
	var $secondLevelDropdownTitles = $('.second-level-dropdown-title');
	var $thirdLevelDropdownTitles = $('.third-level-dropdown-title');
	var $allDropdownTitles = $firstLevelDropdownTitles.add($secondLevelDropdownTitles).add($thirdLevelDropdownTitles);

	// set it up, even on window resizing
	function dropdownToggleInit() {

		// open or close first level dropdown
		$firstLevelDropdownTitles.on('click', function() {
			dropdownToggle($(this), 'first');
		});

		// open or close second level dropdown
		$secondLevelDropdownTitles.on('click', function() {
			dropdownToggle($(this), 'second');
		});

		// open or close third level dropdown
		$thirdLevelDropdownTitles.on('click', function() {
			dropdownToggle($(this), 'third');
		});
	}

	// destroy on screen resize
	function dropdownToggleDestroy() {
		$firstLevelDropdownTitles.unbind();
		$secondLevelDropdownTitles.unbind();
		$thirdLevelDropdownTitles.unbind();
	}


	// dropdown toggle for mobile shows and hides child dropdowns
	// @param $this is element that was clicked
	// @param level is boolean saying whether dropdown open or closed on that dropdown level (first, second third)
	function dropdownToggle($this, level) {
		// close all other filters at same level to start out
		if (level == 'first') {
			$firstLevelDropdownTitles.not($this).removeClass('dropdown-title-is-open'); // reset title status of all other titles at same level
			$firstLevelDropdownTitles.next('ul').hide(); // hide all dropdowns
		}
		if (level == 'second') {
			$secondLevelDropdownTitles.not($this).removeClass('dropdown-title-is-open'); // reset title status
			$secondLevelDropdownTitles.next('ul').hide(); // hide all dropdowns
		}
		if (level == 'third') {
			$thirdLevelDropdownTitles.not($this).removeClass('dropdown-title-is-open'); // reset title status
			$thirdLevelDropdownTitles.next('ul').hide(); // hide all dropdowns
		}

		// close dropdown
		if ($this.hasClass('dropdown-title-is-open')) {
			$this.removeClass('dropdown-title-is-open'); // show other dropdowns
		} else {
			$this.addClass('dropdown-title-is-open'); // show other dropdowns
			$this.next('ul').show(); // show other dropdowns
			$filterOutside.css('position', 'fixed'); // activate navbarOutside
		}
	}

	// click outside to close all on mobile
	var $filterOutside = $('.filter-outside');
	
	$filterOutside.on('click', function() {
		// close all filter dropdowns on search page and reset
		$filterOutside.css('position', 'static'); // not fixed so not active
		$allDropdownTitles.removeClass('dropdown-title-is-open'); // reset all titles
		$('.dropdown-wrapper ul').hide(); // close all dropdowns
	});

	// init
	if(site.isMobile)
		dropdownToggleInit();


/**********
* Check Mobile every time resize the browser
**********/
	
	
	// set mobile flag
	function checkMobile() {
		site.screenSize = $( window ).width();
		// only do it if already not mobile or initial
		if(site.screenSize < site.break2) {
			site.isMobile = true;
			// prevent destroying variables that haven't yet been defined, later on in js file
			if(!firstTimeCheck) {
				// dropdownToggleDestroy(); // remove duplicate in case
				// firstTimeCheck = false;
				// dropdownToggleInit();
			}
		// only check if already mobile and bigger
		} else if (site.screenSize > site.break2) {
			site.isMobile = false;
		}
	}
	
	// get new dimensions on resize
	$(window).on('resize', function() {
		checkMobile();
	});


});