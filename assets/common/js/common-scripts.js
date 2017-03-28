



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

	// festival pause button references functions declared in festival.js
	var carousel, getRandomArbitrary;

	// folkways different mobile scrolling b/c of toggle bar presence
	if (site.$body.hasClass('folkways-site'))
		site.isFolkways = true;
	else
		site.isFolkways = false;

	// global wrap time function that wraps mejs elemeents better. Make global so later mejs elements can call
	var wrapTime;

/*********
* accessibility pause
*********/
	var $pauseButton = $('#pause-button');
	var slickPaused = false;
	$pauseButton.on('click', function() {
		console.log('slickPaused :', slickPaused);
		// pause homepage slideshow
		if(slickPaused) {
			console.log('play slideshow');
			$('#banner-carousel').slick('slickPlay'); // home pages
			$('.ms-banner-slideshow').slick('slickPlay'); // festival program pages
			slickPaused = false;
			
			// festival homepage - start image transforming
			if (site.$body.hasClass('festival-site')) {
				console.log('festival site');
				// if have festival on state carousel
				if(typeof $carousel !== 'undefined') {
					var $activeImage = $carousel.find('.slick-active .banner-slide-image');
					$activeImage.addClass('is-animated');
					$activeImage.css('transform', 'scale(' + getRandomArbitrary(1.04, 1.08) + ') translate(-' + getRandomArbitrary(7, 25) + 'px, ' + getRandomArbitrary(7, 25) + 'px)');
				}
			} else {
				console.log('not festival site');
			}

			// change icon
			$(this).addClass('icon-pause');
			$(this).removeClass('icon-play');
		}
		else {
			console.log('pause slideshow');
			$('#banner-carousel').slick('slickPause'); // home pages
			$('.ms-banner-slideshow').slick('slickPause'); // festival program pages
			slickPaused = true;

			// festival homepage - stop image transforming
			if (site.$body.hasClass('festival-site')) {
				// if have festival on state carousel
				if(typeof $carousel !== 'undefined') {
					var $activeImage = $carousel.find('.slick-active .banner-slide-image');
					$activeImage.removeClass('is-animated');
				}
			}

			// change icon
			$(this).removeClass('icon-pause');
			$(this).addClass('icon-play');
		}
	});

/**********
* Pause banner slideshow on arrow click
* important to declare BEFORE slick is created, so will occur on init
**********/
	// banner Carousels on home pages
	var $bannerCarousel = $('#banner-carousel');
	// if exists on page
	if(typeof $bannerCarousel !== 'undefined') {
		$bannerCarousel.on('init', function() {
			// cache arrows for selecting
			var $slickArrow = $('.slick-arrow');
			// add event handler to arrows to pause slider when clicked
			$slickArrow.on('click', function() {
				$bannerCarousel.slick('slickPause');
				console.log('banner paused');
				// control pause button
				slickPaused = true;
				// change icon
				$pauseButton.removeClass('icon-pause');
				$pauseButton.addClass('icon-play');
			});
		});
	}

	// carousels on micro site pages
	var $msBannerSlideshow = $('.ms-banner-slideshow');
	// if exists on page
	if(typeof $msBannerSlideshow !== 'undefined') {
		// console.info('we have a banner on this page!');
		$msBannerSlideshow.on('init', function() {
			// cache arrows for selecting
			var $slickArrow = $('.slick-arrow');
			// add event handler to arrows to pause slider when clicked
			$slickArrow.on('click', function() {
				$msBannerSlideshow.slick('slickPause');
				console.log('banner paused');
				// control pause button
				slickPaused = true;
				// change icon
				$pauseButton.removeClass('icon-pause');
				$pauseButton.addClass('icon-play');
			});
		});
	}


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
	 		// console.log('dont follow link mobile');
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
			// site.navCloseAll(); // close anything else that's open by default // too confusing for long menu
		}

		// when user scrolls past height of site toggle, make smaller if not already
		if (($(this).scrollTop() > gapNavHeight) && smallerNav == false) {  
			site.navbar.addClass("is-smaller");
			smallerNav = true;
			// if menu isn't already open, swap logo
			if(menuClosed)
				switchLogo('inline');
			if(!site.isMobile) {
				$navspacer.addClass("navspacer-open"); // open right away
			}
		}
		// if user is still at top of window
		else if ($(this).scrollTop() <= gapNavHeight && smallerNav == true) {
			site.navbar.removeClass("is-smaller"); // shrink
			smallerNav = false;
			if(!site.isMobile)
				$navspacer.removeClass("navspacer-open"); // gracefully close
			// if menu is not already open, switch back to block logo
			if(menuClosed)
				switchLogo('block');
		}
	});

	/********* 
	* Switch Logo - pure CSS
	* @param direction dictates which logo to switch to, block or inline
	* @depen prepareTransition plugin ensures correct display state until end of css transition
	**********/
	var $blockLogos = $('.block-logos');
	var $oneLineLogos = $('.one-line-logos');
	var logoIsBlock = true;

	function switchLogo(direction) {
		// toggle class '.is-transitioning' during opacity fade in/out, then add .hidden when done. Remove hidden when coming back.
		// $blockLogos.prepareTransition().toggleClass('hidden');
		// only show block if at top of viewport and nav isn't already open
		// if(direction == 'block' && $(window).scrollTop() <= gapNavHeight && menuClosed) {
		if(direction == 'block') {
			// $('.one-line-logos').fadeOut('30');
			// $('.block-logos').fadeIn('30');
			if(!smallerNav && !logoIsBlock) { // go to block if not scrolled down the page and if not already block
				// console.log('going to block');3
				$blockLogos.prepareTransition().removeClass('hidden');

				// CSS only
				$logo.removeClass('logo-is-one-line');
				$logo.addClass('logo-is-block');
				// accessibility prevent double tabbing for 2 logos
				$blockLogos.find('a').attr('tabindex', "0");
				$oneLineLogos.find('a').attr('tabindex', "-1");
				logoIsBlock = true;
			}
		} else {
			// $('.block-logos').fadeOut('30');
			// $('.one-line-logos').fadeIn('30');
			// CSS only
			// if(smallerNav) { // go to one line only if not at top of page
				$blockLogos.prepareTransition().addClass('hidden');
				// console.log('going one-line');
				$logo.removeClass('logo-is-block');
				$logo.addClass('logo-is-one-line');			
				$blockLogos.find('a').attr('tabindex', "-1");
				$oneLineLogos.find('a').attr('tabindex', "0");
				logoIsBlock = false;
			// }
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
		toggleMenu();
	});

	/*********************
	* Accessibility
	* example at from https://nationalzoo.si.edu/ although zoo not work in firefox or safari b/c no tabindex="0"?
	*********************/
	$('.skip-main').on('click', function() {
		$(this).blur();
		$('#main-content').focus();
	});
	$menuIcon.focusin(function() {
		// $(this).click();
		// $megaNav.find('a').first().focus(); // go to first nav item otherwise will go to shareIcon
	});
	
	// keyboard commands, from from http://stackoverflow.com/a/16145062 and http://keycode.info/
	$(window).keyup(function (e) {
		// get keycode
	    var code = (e.keyCode ? e.keyCode : e.which);
		// when hamburger is focused, show menu
	    // if was tab and menu icon is focused, show menu for accessibility
	    if (code == 9 && $menuIcon.is(":focus")) {
	        // alert('I was tabbed!');
			toggleMenu();
			$megaNav.find('a').first().focus(); // go to first nav item otherwise will go to shareIcon
	    }

	    // show search on enter
	    if (code == 13 && $searchIcon.is(":focus")) {
			$searchIcon.click();
	    }

		// show share on enter
		if (code == 13 && $shareIcon.is(":focus")) {
			$shareIcon.click();
		}

	});

	$megaNav.find('a').last().focusout(function() {
		site.navCloseAll(); // close mega nav
		$shareIcon.focus(); // go back to nav icons
	});
	$menuIcon.keydown(function(event) {
	    // $(this).addClass('open');
	});

	// $('.header-nav-sub-item a').on({
	//        focus : function() {
	//            $(this).closest('.header-nav-sub-item').css('outline','1px dotted #000');
	//        },
	//        blur : function() {
	//            $(this).closest('.header-nav-sub-item').css('outline','none');
	//        }
	//    });

	// hide menu when go to internal anchor link
	$megaNavItem.on('click', function() {
		site.navCloseAll();
	});

	function toggleMenu() {
		// if not yet open
		if(menuClosed) {
			site.navCloseAll(); // after we've determined that menu is closed, close anything else that's open by default
			site.navbar.addClass('is-open');
			// if logo not already one-line because scrolled down
			console.log('open the menu!');
			if(logoIsBlock)
				switchLogo('one-line');

			$navbarOutside.css('position', 'fixed'); // activate navbarOutside
			$notMenuIcon.addClass('lighter-nav-icons'); // grey out other icons
			$megaNav.css('display', 'block'); // show social media icons
			menuClosed = false; // flag for closing	
			$folkwaysNav.hide(); // hide folkways nav
		} else {
			console.log('menuClosed :',menuClosed);
			site.navCloseAll(); // close anything else that's open by default, and sets menuClosed to true
			// if user is still at top of window
			console.log('might go to block');
			// menuClosed = true;
		}
	}

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

		if ($(window).scrollTop() <= gapNavHeight && menuClosed == false) {
			console.log('swith to block');
			switchLogo('block');
		}
	 	
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
		hashTracking: false
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
	  // console.log('video started');
	}
	function stopYTVideo() {
		youTubePlayer.stopVideo();
		// console.log('video stopped');
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

			console.log('play vimeo video');

			// close any slideshow that's open
			if(galleryIsSlick) {
				// hide remodal gallery
				$remodalGallery.hide();
				$remodalCaptions.hide();
			}

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
				$youTubeIframeWrapper.hide();
				$vimeoIframe.show();
				// if first time loading a video...
					var options = {
						id: $videoID,
						width: 640,
						autoplay: true,
					}
					// console.log('id updated');		

				// load vimeo player once
				if(!vimeoPlayerIsLoaded) {
					vimeoPlayer = new Vimeo.Player('vimeo-iframe', options);
					vimeoPlayerIsLoaded = true;
					vimeoPlayer.play();
				}
				// else just reload the vimeoPlayer
				else {
					vimeoPlayer.loadVideo($videoID).then(function() {
						// console.log('not set');
						vimeoPlayer.play();
					});
				}

			// else is YouTube
			} else {
				$vimeoIframe.hide();
				$youTubeIframeWrapper.show(); // unhide

				// youtube replaces passed div id with iframe, unlive vimeo which makes child element
				// so need to target child here
				youTubePlayer = new YT.Player('youtube-iframe', {
					videoId: $videoID,
					events: {
					'onReady': onYouTubePlayerReady,
					}
				});
			}
		})
	}

	// activate all videos that exist on page load
	site.videoPopupBuilder($('.video'));

/*********************
* Image Gallery
* dependencies: remodal.js
*********************/
	var $remodalGallery = $remodal.find('.remodal-gallery');
	var $remodalCaptions = $remodal.find('.remodal-captions');
	var $remodalOverlay = $('.remodal-overlay');
	var galleryIsOpen = false;
	var galleryIsSlick = false;
	var singleImage = false;

	// @param $initialSlide is number of slide that was clicked so can show up first in gallery
	$('.image-gallery').on('click', function() {
		// cancel last slick so can start a new one on same class?
		// adds something to dom, so called before empty(), but necessary to be able to call again
		if(galleryIsSlick) {
			$remodalGallery.slick('unslick');
			$remodalCaptions.slick('unslick');
		}

		// if single image
		if($(this).hasClass('single-image-popup')) {
			console.log('single image');
			singleImage = true;
			$remodalCaptions.addClass('single-image-caption');
		}

		// flag for closing
		galleryIsOpen = true;

		// hide videos
		$youTubeIframeWrapper.hide();
		$vimeoIframe.hide();
		// show gallery in case was hidden by videos
		$remodalGallery.show();
		$remodalCaptions.show();

		// clear remodal gallery of old images
		$remodalGallery.empty();
		$remodalCaptions.empty();

		// temp hide until loaded
		$remodalGallery.css('visibility', 'hidden');

		// build gallery
		// get images for gallery by going up to grandparent, then finding all classed images, then copying them for use in remodal
		$(this).find('.gallery-list').children().clone().appendTo($remodalGallery);

		// build captions
		$(this).find('.gallery-list-captions').children().clone().appendTo($remodalCaptions);
		
		// manually open remodal because sometimes just doesn't do it
		remodalInstance.open();

		// flag to destroy
		galleryIsSlick = true;

		// show gallery before call slick because needs to be right size or visible or something?
		$remodal.addClass('remodal-gallery-is-open remodal-image-gallery');

		// get position of image to center captions after slider inits
		// DOESNT WORK WITH LARGE CAPTIONS
		// $remodalGallery.on('init', function(slick) {
		// 	var imageOffset = $('.slick-active img').offset();
		// 	var magicOffset = 12;
		// 	$('.gallery-caption').css('padding-left', imageOffset.left + magicOffset);
		// });

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
			// centerMode: true,
			// centerPadding: '0',
			slidesToShow: 1,
			asNavFor: '.remodal-gallery',
			arrows: false,
			// respondTo: 'slider', // width
			responsive: [
				{
					breakpoint: site.break2,
					settings: {
						speed: 300,
						// centerPadding: '40px',
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
* Closing the Remodal
* listen for closing, from https://github.com/VodkaBears/Remodal
********************/
	$(document).on('closing', '.remodal', function (e) {
		// unload vidoe if video was open
		if(videoPlayerIsOpen) {
			if(isVimeo) {
				vimeoPlayer.unload().then( function() {
					// console.log('unloaded video');
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

		// reset after image gallery
		if(galleryIsOpen) {
			// delay to prevent flash of video bg
			setTimeout( function(){
				$remodal.removeClass('remodal-gallery-is-open remodal-image-gallery');
				// console.log('gallery classes removed');			
				galleryIsOpen = false; // reset flag
			}, 500); // delay 500 ms

			// remove single image designation so can show gallery captions next
			$remodalCaptions.removeClass('single-image-caption');
			// console.log('single-image-caption class removed');
			singleImage = false; // reset
		}

		$remodalClose.addClass('visually-hidden');
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
* Microsite Gallery Slider
* Uses slick.js from Ken Wheeler at http://kenwheeler.github.io/slick/
*********************/
	// $('.ms-header-inner').slick({
	$msBannerSlideshow.slick({
		mobileFirst: 'true',
		// combine with mobile
		arrows: false,
		autoplaySpeed: 4000,
		autoplay: true, // pause for testing
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 852,
				settings: {
					centerPadding: '80px',
					arrows: true,
					appendDots: '.dots',
					dots: true,
					autoplaySpeed: 5000,
				}
			},
			{
				breakpoint: 1560,
				settings: {
					// padding on both sides is screen width minus width of main area, divided by 2 for each side
					centerPadding: 'calc((100vw - 1400px) / 2)',
					arrows: true,
					dots: true,
					appendDots: '.dots',
				}
			}
		]
	});

/*********
* Audio card - Media Element JS
*********/
	// wrap time elements together after load. They don't come togethery by default and it is impossible to line them up according to the layout without having a parent wrapper.
	// set as var so can call when other mejs elements load, after page load
	wrapTime = function($currentTime) {
		var $durationTime = $currentTime.siblings('.mejs-duration-container');
		// wrap current time and duration time in new div for correct positioning
		$currentTime.add($durationTime).wrapAll('<div class="mejs-time-wrapper">');
	}
	
	// find currenttime containers and wrap them with closest duration container
	$('.mejs-currenttime-container').each(function() {
		// get closest duration time
		wrapTime($(this));
	});
	
	// keep play button visible after click
	var showPause = true;

	var buttonControl = function($playButton) {
		// console.log('buttonControl', $playButton);
		$playButton.click(function() {
			// console.log('audio clicked');
			var $track = $(this).closest('.track');
			var $trackNumber = $track.find('.track-number'); // get closest so don't show all
			// check if this button is playing or not
			if($track.find('.mejs-playpause-button').hasClass('mejs-play'))
				$trackNumber.addClass('hidden');
			else
				$trackNumber.removeClass('hidden');
		})
	}

	// manually init so can hear when pausing
	$('.track-audio').mediaelementplayer({
		startVolume: 0.5, 
		setDimensions: false,
		features: ["playpause"], // don't show time on track listing
		pluginPath: "/path/to/shims/", 
		success: function(mediaElement, originalNode) {
			// $originalNode = $(originalNode); // jquery cache
			// console.log('mediaElement', mediaElement);

			// pass playpause button to get listener
			buttonControl($(mediaElement.player.controls[0].firstChild));

			// Bring Track number back when audio paused
			mediaElement.addEventListener('pause', function (e) {
				var $trackAudio = $(e.target);
				var $track = $(this).closest('.track');
				var $trackNumber = $track.find('.track-number'); // get closest so don't show all
				$trackNumber.removeClass('hidden');
			}, false);
		}
	});



/*********
* Audio card - Playlist
* plugin from duozersk
* https://github.com/duozersk/mep-feature-playlist
*********/

	var playlist = []; // global playlist var so can access everywhere
	// console.log(myPlaylist[0]);

	// initialize player so can get id for vars
	/**********
	* Start media element player
	* after build, make new playlist with data from 
	**********/
	$('.playlist-audio').mediaelementplayer({
		pluginPath: "/path/to/shims/", 
		success: function(mediaElement, originalNode) {
			console.log('mejs audio created');
			console.log('mediaElement.player', mediaElement.player);
			console.log('originalNode', originalNode);

			// better mejs html
			var currentTimeContainer = $(originalNode).find('.mejs-currenttime-container');

			console.log('currentTimeContainer :', mediaElement.player.currenttime[0].parentNode);
			// console.log(currentTimeContainer);
			wrapTime($(mediaElement.player.currenttime[0].parentNode));

			var playerID = mediaElement.player.id;
			console.log('playerID :', playerID);

			// initialize player because elements now exist
			playlist[playerID] = new Playlist(playerID); 
			// set first track
			// playlist.cover = 
			playlist[playerID].cover.attr('src', myPlaylist[0].cover); // update album cover
			playlist[playerID].title.html(myPlaylist[0].title); // update album title
			playlist[playerID].artist.html(myPlaylist[0].artist); // update album artist
			playlist[playerID].audioElement[0].setSrc(myPlaylist[0].mp3); // set new track to play

			// Event Listeners
			mediaElement.addEventListener('ended', function (e) {
				playlist[playerID].playNextTrack();
			}, false);
		}
	});
	

	/**********
	* Playlist constructor function
	* inspired by http://stackoverflow.com/a/15174529
	* var myPlayList is array with playlist data, loaded from script tag in html
	**********/
	function Playlist(playerID) {
		// get local audio card in case others on page
		var $audioCard = $('#' + playerID).closest('.audio-card');
		// this.mejsPlayer = mejs.players[this.playerID];
		this.mejsPlayer = mejs.players[playerID];
		this.player = this.mejsPlayer;

		console.log('this.player :', this.mejsPlayer);
		this.cover = $audioCard.find('.playlist-cover');
		this.coverLink = $audioCard.find('.image a');
		this.title = $audioCard.find('.playlist-title');
		this.artist = $audioCard.find('#playlist-artist');
		this.trackLink = $audioCard.find('.title');
		// this.audioElement = $('#playlist-audio');
		// this.audioElement = $audioCard.find('.playlist-audio');
		this.audioElement = this.player.$media;

		console.log('this.audioElement :', this.audioElement);
		// this.audioElement = this.player.node;
		this.currentTrack = 0;
		this.length = Object.keys(myPlaylist).length;

		/**********
		* Update playlist player
		* @param track is album json data
		**********/
		this.updatePlayer = function(track) {
			console.log('track', track);
			// console.log($playlist.audioElement);
			this.cover.attr('src', track.cover); // update album cover
			this.coverLink.attr('href', track.url); // update album cover
			this.trackLink.attr('href', track.url); // update album cover
			console.log('this.coverLink', this.coverLink);
			this.title.html(track.title); // update album title
			this.artist.html(track.artist); // update album artist
			this.audioElement[0].setSrc(track.mp3); // set new track to play
			this.player.play(); // play track
		}

		/**********
		* Play previous track
		**********/
		this.playPrevTrack = function($player) {
			// if current track is 0, change to last track
			if ( playlist[playerID].currentTrack == 0 )
				playlist[playerID].currentTrack = playlist[playerID].length - 1;
			// else play track - 1 
			else
				playlist[playerID].currentTrack--;
			
			// update player with image, src, play, etc.
			playlist[playerID].updatePlayer(myPlaylist[this.currentTrack]);
		}

		/**********
		* Play next track
		**********/
		this.playNextTrack = function($player) {
			if(this.currentTrack == this.length - 1)
				this.currentTrack = 0;
			else
				this.currentTrack++;

			console.log('$player :', $player);

			// update player with image, src, play, etc.
			// playlist.updatePlayer(myPlaylist[this.currentTrack]);
			playlist[playerID].updatePlayer(myPlaylist[this.currentTrack]);
		}
	}

	/**********
	* Track Skipping Buttons
	**********/
	// Previous Track
	$('.previous-button').click(function() {
		$audio = $(this).parent().siblings('.playlist-audio');
		currentPlayerID = $audio.attr('id');
		playlist[currentPlayerID].playPrevTrack();
	})

	// Next Track
	$('.next-button').click(function() {
		// get closest audio player
		$audio = $(this).parent().siblings('.playlist-audio');
		currentPlayerID = $audio.attr('id');
		playlist[currentPlayerID].playNextTrack();
	})

/*********************
* Show figcaption
* When click +
*********************/
	// for any program page image
	// if (site.$body.hasClass('program-page') || site.$body.hasClass('program-category-page') || site.$body.hasClass('general-page') || site.$body.hasClass('lesson-plan-page') || site.$body.hasClass('blog-article-page')) {
	// work on all pages until run into conflict with figure tag
		var $figcaption = $('.container').find('figcaption'); // get all figures on the page
		// if click on figure, show figcaption
		// important that pointer-events have been set to none for <figure> This allows us to listen to :after element
		$figcaption.on('click', function() {
			// console.log('show caption');
			$this = $(this); // cache var
			$thisInner = $this.find('.figcaption-inner')
			if($thisInner.css('visibility') == 'hidden') { // if hidden, show
				// $this.css('visibility', 'visible');
				$thisInner.css('visibility', 'visible');
				$this.addClass('minus-sign');// add minus sign
				// $this.attr('data-content');// add minus sign
				// pause micro site banner if exists
				if($this.parents('.ms-banner-slideshow').length) {
					// console.log('banner paused');
					$msBannerSlideshow.slick('slickPause');
					slickPaused = true;
					// change icon
					$pauseButton.removeClass('icon-pause');
					$pauseButton.addClass('icon-play');
				}
			}
			else { // else hide
				// $this.css('visibility', 'hidden');
				$thisInner.css('visibility', 'hidden');
				$this.removeClass('minus-sign');// add minus sign
				// play micro site banner if exists
				if($this.parents('.ms-banner-slideshow').length) {
					// console.log('banner paused');
					$msBannerSlideshow.slick('slickPlay');
					slickPaused = false;
					// change icon
					$pauseButton.removeClass('icon-play');
					$pauseButton.addClass('icon-pause');
				}
			}
		});

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
	// console.log(numLanguages);

	// when click any language button...
	$allLanguageButtons.click(function() {
		$allLanguageButtons.removeClass('is-active'); // reset all
		var $buttonIndex = $(this).index(); // get position of this button so can change mobile or desktop buttons too
		// console.log($buttonIndex);
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

/***************************
* Bootstrap accordian
* http://v4-alpha.getbootstrap.com/components/collapse/#accordion-example
**************************/
	var $collapse = $('.collapse');
	$collapse.collapse()
	// more link and arrow changer
	// var $more_link = $('.accordian-toggle').find('.more-link-text');
	$('.more-link-will-change').on('click', function() {
		var text = $(this).find('.more-link-text');
		if(text.html() == 'more') {
			text.html('less');
			// text.addClass('more-link-less');
		} else {
			text.html('more');
			// text.removeClass('more-link-less');
		}
	})


/*********************
* Translation Button
*********************/
    $('.language-buttons').find('a').each(function (index) {
        var elt = $(this);
        var url = "" + window.location;
        var normalizedURL = url.replace(/en-espanol\/smithsonian$/, 'smithsonian');
        var spanishURL = normalizedURL.replace(/smithsonian$/, 'en-espanol/smithsonian');

        var isSpanish = url.match(/en-espanol/);
        var onIndex;
        if (isSpanish)
            onIndex = 1;
        else
            onIndex = 0

        if (index == 0)
            elt.attr('href', normalizedURL);
        else
            elt.attr('href', spanishURL);

        if (index == onIndex)
            elt.attr('class', 'is-active')
    });


}); // end document model ready