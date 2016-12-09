$(document).ready(function () {

/***************************
* Common scripts defined in styleguide.folklife.si.edu/code/assets/common/js/common-scripts.js
***************************/

/*********************
* Hero Carousel
 Uses slick.js from Ken Wheeler at http://kenwheeler.github.io/slick/
*********************/
	var slickCreatedMobile = false; // flag to create and destroy when needed
	var slickCreatedDesktop = false; // flag to create and destroy when needed

	// after banner created...
	$('#banner-carousel').on('init', function() {

		console.log('banner init');

		// cache arrows for selecting
		var $slickArrow = $('.slick-arrow');

		// add event handler to arrows to pause slider when clicked
		$slickArrow.on('click', function() {
			$('#banner-carousel').slick('slickPause');
			console.log('banner paused');
		});
	});

	function initiateSlickCarousel() {
		if(site.isMobile) {
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
		}).on('init', function() {
			console.log('slider created');
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
			appendDots: '.dots',
			dots: true,
			mobileFirst: 'true',
			appendArrows: '.slick-list',
			autoplay: true, // pause for testing
			autoplaySpeed: 5000,
			slidesToShow: 1,
			centerMode: true,
			centerPadding: '80px',
			// pauseOnFocus: true,
			pauseOnHover: false,
			responsive: [
				{
					breakpoint: 1560,
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
		// checkMobile();

		// if getting smaller
		if(site.isMobile && slickCreatedDesktop) {
			unslickify(); // destroy
			createBannerMobile();
	 	} else if(!isMobile && slickCreatedMobile) {
			unslickify(); // destroy
			createBannerDesktop();
		}
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


/* Syntax Highlighting
 * from highlightjs.org */
 	// start highlighter on page load
	hljs.initHighlightingOnLoad();
});