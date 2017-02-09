



/*

  ___|                                                  ___|              _)         |         
 |       _ \   __ `__ \   __ `__ \    _ \   __ \      \___ \    __|   __|  |  __ \   __|   __| 
 |      (   |  |   |   |  |   |   |  (   |  |   |           |  (     |     |  |   |  |   \__ \ 
\____| \___/  _|  _|  _| _|  _|  _| \___/  _|  _|     _____/  \___| _|    _|  .__/  \__| ____/ 
                                                                             _|                

*/

/***************************
* globals, for use in common and unique script documents
* from http://stackoverflow.com/a/7048295
***************************/
	var site = {};
	site.screenSize = $( window ).width();
	site.screenHeight = $( window ).height();
	site.$body = $('body');
	site.break1 = 640; // first media query break
	site.break2 = 852; // break to 6 across
	site.fullwidth = 1480; // break to 6 across
	site.videoPopupBuilder; // global for use in local script files

	// folkways different mobile scrolling b/c of toggle bar presence
	if (site.$body.hasClass('folkways-site'))
		site.isFolkways = true;
	else
		site.isFolkways = false;

/**********************
 * youtube must be in GLOBAL scope
 * Must have ...?enablejsapi=1 added to youtube link
 * see http://stackoverflow.com/a/22998910
 * YouTube API here: https://developers.google.com/youtube/iframe_api_reference
**********************/

	// load the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// global player var
	var youTubePlayer;

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
	var $navItem = $('.header-nav-title').add($('.footer-nav-title'));
	var $navLists = $('.header-nav-list').add($('.footer-nav-list'));

	// when click a main list item
	 $navItem.on('click', function(e) {

	 	// check if this nav item has as ul as next sibling, from http://stackoverflow.com/a/7678513
	 	if($(this).next('ul').length) {
	 		var hasChildren = true;
	 	}
	 	else {
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
* Mobile Header Animation 
* from http://www.webdesignerdepot.com/2014/05/how-to-create-an-animated-sticky-header-with-css3-and-jquery/
***************************/
	var isNavOpen = false;
	var smallerNav = false;
	var $siteToggle = $('#site-toggle');
	var $navBarHeader = $('.navbar-header');
	var $navspacer = $('#navspacer');
	var $logo = $('#logo');	
	var $logoSwitchTimer;
	var gapNavHeight = $siteToggle.outerHeight();

	if(site.isMobile) {
		gapNavHeight = 0; // activate next condition immediately
	}

	$(window).scroll(function() {
		// close all if on phone
		if(site.isMobile) {
			site.navCloseAll(); // close anything else that's open by default
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
			smallerNav = false;
			if(!site.isMobile)
				$navspacer.removeClass("navspacer-open"); // gracefully close
			switchLogo('block');
		}
	});

	/********* 
	* Switch Logo - pure CSS
	* @param direction dictates which logo to switch to, block or inline
	**********/
	var $blockLogos = $('.block-logos');

	function switchLogo(direction) {
		// toggle class '.is-transitioning' during transition, then add .hidden when done. Remove hidden when coming back.
		$blockLogos.prepareTransition().toggleClass('hidden');
		// only show block if at top of viewport and nav isn't already open
		if(direction == 'block' && $(window).scrollTop() <= gapNavHeight && menuClosed) {
			// $('.one-line-logos').fadeOut('30');
			// $('.block-logos').fadeIn('30');
			// CSS only
			$logo.removeClass('logo-is-one-line');
			$logo.addClass('logo-is-block');
		} else {
			// $('.block-logos').fadeOut('30');
			// $('.one-line-logos').fadeIn('30');
			// CSS only
			$logo.removeClass('logo-is-block');
			$logo.addClass('logo-is-one-line');			
		}
	}

	/********* 
	* Switch Logo with jQuery animation
	* @param direction dictates which logo to switch to, block or inline
	**********/
	// function switchLogo(direction) {
	// 	// clear timeout so prevent multiple firings
	// 	clearTimeout($logoSwitchTimer);
	// 	// only show block if at top of viewport and nav isn't already open
	// 	if(direction == 'block' && $(window).scrollTop() <= gapNavHeight && menuClosed) {
	// 		$('.one-line-logos').fadeOut('30');
	// 		$logoSwitchTimer = setTimeout(function(){ 
	// 			$('.block-logos').fadeIn('30');
	// 		}, 30);
	// 	} else {
	// 		$('.block-logos').fadeOut('30');
	// 		$logoSwitchTimer = setTimeout(function(){ 
	// 			$('.one-line-logos').fadeIn('30');
	// 		}, 30);
	// 	}
	// }

/***************************
* Navbar
**************************/

	// CLICK OUTSIDE MENU
	// activate outside navbar div
	var $navbarOutside = $('.navbar-outside');
	var $folkwaysNav = $('.folkways-nav');

	// Icons
	var $menuIcon = $('#menu-icon');
	var $shareIcon = $('#share-icon');
	var $searchIcon = $('#search-icon');
	
	// GRAY OUT NAV
	var $allIcons = $menuIcon.add($shareIcon).add($searchIcon);
	var $notMenuIcon = $allIcons.not($menuIcon);
	var $notShareIcon = $allIcons.not($shareIcon);
	var $notSearchIcon = $allIcons.not($searchIcon);

	// close nav if clicked
	$navbarOutside.on('click', function() {
		site.navCloseAll(); // close all auxiliary nav
		$navbarOutside.css('position', 'static'); // not fixed so not active
		$menuIcon.add($shareIcon).add($searchIcon).show(); // show just the main icons again
	});

/*********************
* Menu
*********************/
	var $megaNav = $('#header-nav');
	var $megaNavItem = $('.header-nav-sub-item');
	var menuClosed = true;

	// when click share icon
	$menuIcon.on('click', function() {

		// if not yet open
		if(menuClosed) {
			site.navCloseAll(); // after we've determined that menu is closed, close anything else that's open by default
			site.navbar.addClass('is-open');
			switchLogo('one-line');
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside
			$notMenuIcon.addClass('lighter-nav-icons'); // grey out other icons
			$megaNav.css('display', 'block'); // show social media icons
			menuClosed = false; // flag for closing	
			$folkwaysNav.hide(); // hide folkways nav
		} else {
			site.navCloseAll(); // close anything else that's open by default
			switchLogo('block');
			menuClosed = true;
		}
		
	});

	// hide menu when go to internal anchor link
	$megaNavItem.on('click', function() {
		site.navCloseAll();
	});

/*********************
* Social Media Icons
*********************/
	var $socialMediaIconDivMobile = $('.mobile-social-icons');
	var $socialMediaIconsMobile = $('.mobile-social-icon');
	var $socialMediaIconsDesktop = $('.desktop-social-icons');
	var $socialMediaIcons = $('.social-icons');
	var shareClosed = true;

	// when click share icon
	$shareIcon.on('click', function() {
		// if not yet open
		if(shareClosed) {
			site.navCloseAll(); // close anything else that's open by default, only after we've determined that share is Closed
			site.navbar.addClass('is-open');
			if(site.isMobile) { // switch to one-line logo in mobile view
				site.navbar.addClass('has-one-line-logo'); 
				switchLogo('one-line');
			}
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside			
			$notShareIcon.addClass('lighter-nav-icons'); // grey out other icons
			shareClosed = false; // flag for closing	
			$socialMediaIcons.show();
		} else {
			site.navCloseAll(); // close anything else that's open by default
			shareClosed = true; // flag for closing	
			switchLogo('block');
		}
	});

/*********************
* Search 
*********************/
	var $searchBar = $('.search-bar');
	var $searchBarMobile = $('.mobile-search-bar');
	var $browsenav = $('#browsenav'); // will only exist on folkways, otherwise hidden with php
	var searchClosed = true;
	var $searchInput = $('#search-input');

	// when click share icon
	$searchIcon.on('click', function() {
		// if not yet open
		if(searchClosed) {
			site.navCloseAll(); // after we've determined that search is closed, close anything else that's open by default
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
			$searchInput.focus();// focus in field
		} else {
			site.navCloseAll(); // close anything else that's open by default
			searchClosed = true; // flag for closing	
			switchLogo('block');
		}
	});

/*********************
* global close nav
* for access by local site script files
*********************/
	site.navCloseAll = function() {
		// close other icons
		if (site.isMobile)
	 		$navLists.removeClass('nav-show-mobile'); // close all other open nav lists - mobile only
	 	else
			$folkwaysNav.show(); // reset folkways nav, but not on mobile
	 	
		$navbarOutside.css('position', 'static'); // remove outside clicker so can hover rest of page
		site.navbar.removeClass('is-open');
		$allIcons.removeClass('lighter-nav-icons');
		$megaNav.add($searchBar).add($browsenav).add($socialMediaIcons).hide(); // close auxiliaries
		menuClosed = true;
		searchClosed = true;
		shareClosed = true;
		site.navbar.removeClass('has-one-line-logo'); // switch back to block logo
	}

/*********************
* Video
* dependencies: remodal.js, vimeo-player-js
*********************/
	// initialize here
	var remodalInstanceOptions = {
		hashTracking: true
	}
	var remodalInstance = $('[data-remodal-id=modal]').remodal(remodalInstanceOptions);

	var $remodal = $('.remodal');
	// var $remodalIframe = $remodal.find('.remodal-iframe');
	var $remodalTitle = $remodal.find('.remodal-title');
	var $remodalDescription = $remodal.find('.remodal-description');
	var $remodalClose = $remodal.find('.remodal-close');
	var videoPlayerIsOpen = false;

	// Vimeo
	var $vimeoIframe = $('#vimeo-iframe');
	var vimeoPlayerIsLoaded = false;
	var vimeoPlayer; // global for playing, pausing
	var isVimeo; // global for determining if using Vimeo or YouTube

	// YouTube
	var $youTubeIframeWrapper = $('#youtube-iframe-wrapper');
	var $youTubeIframe = $('#youtube-iframe');

	function playYTVideo() {
		youTubePlayer.playVideo();
	  // player.playVideo();
	  console.log('video started');
	}
	function stopYTVideo() {
		youTubePlayer.stopVideo();
		console.log('video stopped');
	}
	// 4. The API will call this function when the video player is ready.
	function onYouTubePlayerReady(event) {
		event.target.playVideo();
	}

	/*********
	* wrap videos as function so can call after magazine article sidebar created
	*********/
	site.videoPopupBuilder = function(video) {

		// on playing a video in the gallery...
		// $('.video').on('click', function() {
		$(video).on('click', function() {

		  	// manually open remodal because sometimes just doesn't do it
		  	remodalInstance.open();

		  	// flag for checking against image gallery
		  	videoPlayerIsOpen = true;

		  	// Get video info from html data-* attributes
			$videoType = $(this).data('type');
			$videoID = $(this).data('id');
			$videoTitle = $(this).data('title');
			$description = $(this).data('description');

			// Set video type
			if($videoType == 'youtube') {
				isVimeo = false;
			} else
				isVimeo = true;

			// Set video info in html
			$remodalTitle.html($videoTitle);
			$remodalDescription.html($description);

			// show close button
			$remodalClose.removeClass('visually-hidden');

			if(isVimeo) {
				console.log('play vimeo');
				console.log('vimeoPlayerIsLoaded: ', vimeoPlayerIsLoaded);
				console.log('$videoID: ', $videoID);
				$youTubeIframeWrapper.hide();
				$vimeoIframe.show();
				// if first time loading a video...
					var options = {
						id: $videoID,
						width: 640,
						autoplay: true,
					}
					console.log('id updated');		

				// load vimeo player once
				if(!vimeoPlayerIsLoaded) {
					vimeoPlayer = new Vimeo.Player('vimeo-iframe', options);
					vimeoPlayerIsLoaded = true;
					vimeoPlayer.play();
				}
				// else just reload the vimeoPlayer
				else {
					vimeoPlayer.loadVideo($videoID).then(function() {
						console.log('not set');
						vimeoPlayer.play();
					});
				}

			// else is YouTube
			} else {
				// function onYouTubeIframeAPIReady() {
				// 	player = new YT.Player('my-little-bakery-video');
				// }
				// remove any Vimeo players
				// $remodalIframe.find('iframe').remove(); // remove iframe so can play youtube next
				// vimeoPlayerIsLoaded = false;

				$vimeoIframe.hide();
				$youTubeIframeWrapper.show(); // unhide
				// add iframe inside .remodal-iframe wrapper for youtube (vimeo does it automatically)
				// load the IFrame Player API code asynchronously.
				// var youtubeIframe = document.createElement('iframe');

				// make iframe with youtube params and add to inside of .remodal-iframe
				// $('<iframe src="https://www.youtube.com/embed/' + $videoID + '?autoplay=1&enablejsapi=1" frameborder="0" allowfullscreen></iframe>').appendTo($remodalIframe); // add to correct position
				// player = new YT.Player($youtubeIframe);
				// playYTVideo();

				// youtube replaces passed div id with iframe, unlive vimeo which makes child element
				// so need to target child here
				console.log('play youtube');
				youTubePlayer = new YT.Player('youtube-iframe', {
					// height: '390',
					// width: '640',
					videoId: $videoID,
					events: {
					'onReady': onYouTubePlayerReady,
					// 'onStateChange': onPlayerStateChange
					}
				});
				// play video
				// player.playVideo();

			}
		})
	}

	// activate all videos that exist on page load
	site.videoPopupBuilder($('.video'));

	// listen for closing, from https://github.com/VodkaBears/Remodal
	$(document).on('closing', '.remodal', function (e) {
		// unload vidoe if video was open
		if(videoPlayerIsOpen) {
			if(isVimeo) {
				vimeoPlayer.unload().then( function() {
					console.log('unloaded video');
				}); // reset iframe	
			// is YouTube
			} else {
				// stopYTVideo();
				// if player had time to start
					youTubePlayer.stopVideo();
					youTubePlayer.destroy(); // so can build again
			}

			// reset flag
			videoPlayerIsOpen = false;
		}
		$remodalClose.addClass('visually-hidden');
	});

	// close remodal with X
	$remodalClose.on('click', function() {
		remodalInstance.close();
	});

/*********************
* Image Gallery
* dependencies: remodal.js
*********************/
	var $remodalGallery = $remodal.find('.remodal-gallery');
	var $remodalCaptions = $remodal.find('.remodal-captions');
	var $remodalOverlay = $('.remodal-overlay');
	var galleryIsSlick = false;

	// @param $initialSlide is number of slide that was clicked so can show up first in gallery
	$('.image-gallery').on('click', function() {
		// cancel last slick so can start a new one on same class?
		// adds something to dom, so called before empty(), but necessary to be able to call again
		if(galleryIsSlick) {
			$remodalGallery.slick('unslick');
			$remodalCaptions.slick('unslick');
		}

		// clear remodal gallery of old images
		$remodalGallery.empty();
		$remodalCaptions.empty();

		// temp hide until loaded
		$remodalGallery.css('visibility', 'hidden');

		// build gallery
		// get images for gallery by going up to grandparent, then finding all classed images, then copying them for use in remodal
		$('.gallery-list').children().clone().appendTo($remodalGallery);

		// build captions
		$('.gallery-list-captions').children().clone().appendTo($remodalCaptions);
		
		// manually open remodal because sometimes just doesn't do it
		remodalInstance.open();

		// flag to destroy
		galleryIsSlick = true;

		// show gallery before call slick because needs to be right size or visible or something?
		$remodal.addClass('remodal-gallery-is-open remodal-image-gallery');

		// initiate slick gallery on images
		$remodalGallery.slick({
			speed: 0,
			mobileFirst: true,
			centerMode: true,
			centerPadding: '40px',
			variableWidth: true,
			slidesToShow: 1,
			asNavFor: '.remodal-captions',
			adaptiveHeight: true,
			centerPadding: '0',
			responsive: [
				{
					breakpoint: site.break2,
					settings: {
						speed: 300,
						centerPadding: '40px',
					}

				}
			]
		});
		// initiate captions
		$remodalCaptions.slick({
			mobileFirst: true,
			speed: 0,
			centerMode: true,
			centerPadding: '0',
			slidesToShow: 1,
			asNavFor: '.remodal-gallery',
			arrows: false,
			responsive: [
				{
					breakpoint: site.break2,
					settings: {
						speed: 300,
						centerPadding: '40px',
					}

				}
			]
		})

		// show it now
		$remodalGallery.css('visibility', 'visible');

	});

/*********************
* Cover Art Popup
* dependencies: remodal.js
*********************/
	var $remodalGallery = $remodal.find('.remodal-gallery');
	var galleryIsSlick = false;

	// on clicking an image with the class .cover art...
	// @param $initialSlide is number of slide that was clicked so can show up first in gallery
	$('.cover-art').on('click', function() {
		// cancel last slick so can start a new one on same class?
		// adds something to dom, so called before empty(), but necessary to be able to call again
		if(galleryIsSlick) {
			$remodalGallery.slick('unslick');
		}

		// clear remodal gallery of old images
		$remodalGallery.empty();

		// get initial slide
		var initialSlide = $(this).data('slide-index');

		// build gallery
		// get images for gallery by going up to grandparent, then finding all classed images, then copying them for use in remodal
		$('.cover-art-popup').clone().appendTo($remodalGallery);
		
		// manually open remodal because sometimes just doesn't do it
		remodalInstance.open();

		// flag to destroy
		galleryIsSlick = true;

		// show gallery before initiate slick so can open correctly
		$remodal.addClass('remodal-gallery-is-open remodal-image-gallery');

		// initiate slick gallery on images
		$remodalGallery.slick({
			mobileFirst: true,
			variableWidth: true,
			adaptiveHeight: true,
			"initialSlide": initialSlide,
			speed: 0,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1,
			infinite: false,
			responsive: [
				{
					breakpoint: site.break2,
					settings: {
						speed: 300,
						centerPadding: '40px',
					}

				}
			]
		});
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

/*********
* Sound card - Media Element JS
*********/
	// wrap time elements together after load. They don't come togethery by default and it is impossible to line them up according to the layout without having a parent wrapper.
	// find currenttime containers and wrap them with closest duration container
	$('.mejs-currenttime-container').each(function() {
		// get closest duration time
		var $durationTime = $(this).siblings('.mejs-duration-container');
		// wrap current time and duration time in new div for correct positioning
		$(this).add($durationTime).wrapAll('<div class="mejs-time-wrapper">');
	});

/*********************
* Show figcaption
* When click +
*********************/
	// for any program page image
	if (site.$body.hasClass('program-page') || site.$body.hasClass('program-category-page') || site.$body.hasClass('general-page') || site.$body.hasClass('lesson-plan-page') || site.$body.hasClass('blog-article-page')) {
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

/***************************
* Language Buttons
**************************/
	var $languageButtons = $('.language-buttons')
	var $allLanguageButtons = $languageButtons.find('.button');
	var numLanguages = $allLanguageButtons.length / 2;
	console.log(numLanguages);

	// when click any language button...
	$allLanguageButtons.click(function() {
		$allLanguageButtons.removeClass('is-active'); // reset all
		var $buttonIndex = $(this).index(); // get position of this button so can change mobile or desktop buttons too
		console.log($buttonIndex);
		// $languageButtons.children().eq($buttonIndex).addClass('is-active'); // change all
		$languageButtons.children().eq($buttonIndex).addClass('is-active'); // activate desktop and mobile buttons for this language
		$languageButtons.children().eq($buttonIndex + numLanguages).addClass('is-active'); // activate desktop and mobile buttons for this language
	});

/**********
* Check Mobile every time resize the browser
**********/
	// set mobile flag
	function checkMobile() {
		site.screenSize = $( window ).width();
		// only do it if already not mobile or initial
		if(site.screenSize < site.break2) {
			site.isMobile = true;
		// only check if already mobile and bigger
		} else if (site.screenSize > site.break2) {
			site.isMobile = false;
		}
	}
	
	// get new dimensions on resize
	$(window).on('resize', function() {
		checkMobile();
	});

/***************************
* Social Sharing
**************************/
	// Set correct href for social sharing, for Orchard CMS
	var pageURL = window.location.href;
	$('.social-icons a').each(function() {
		var oldHref = $(this).attr('href'); // get old href
		var newHref = oldHref.replace('#PageURL', pageURL); // replace #PageURL with real one
		$(this).attr('href', newHref);// set url to newHref
	});

	// get facebook sdk
	window.fbAsyncInit = function() {
		FB.init({
			appId      : '405718899770730',
			xfbml      : true,
			version    : 'v2.8'
		});
		FB.AppEvents.logPageView();
	};

	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	// set button
	if($('#share-facebook')) {
		$('#share-facebook').click(function() {
			FB.ui({
				method: 'share',
				display: 'popup',
				href: pageURL,
			}, function(response){});
		})
	}

}); // end document model ready