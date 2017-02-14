/*


  ___|   |           |                     _)      |             ___|              _)         |         
\___ \   __|  |   |  |   _ \   _` |  |   |  |   _` |   _ \     \___ \    __|   __|  |  __ \   __|   __| 
      |  |    |   |  |   __/  (   |  |   |  |  (   |   __/           |  (     |     |  |   |  |   \__ \ 
_____/  \__| \__, | _| \___| \__, | \__,_| _| \__,_| \___|     _____/  \___| _|    _|  .__/  \__| ____/ 
             ____/           |___/                                                    _|                


*/

$(document).ready(function () {


/*********
* Audio card - Playlist
* plugin from duozersk
* https://github.com/duozersk/mep-feature-playlist
*********/

	$('.playlist-audio').mediaelementplayer({
		pluginPath: "/path/to/shims/", 
		success: function(mediaElement, originalNode) {
			console.log('mejs audio created');

			// Event Listeners
			mediaElement.addEventListener('ended', function (e) {
				playNextTrack();
			}, false);
		}
	});
	// To access player after its creation through jQuery use:
	var playerId = $('.playlist-audio').attr('id');
	// or $('#mediaplayer').closest('.mejs-container').attr('id') in "legacy" stylesheet

	var playlistPlayer = mejs.players[playerId];

	var tracks = ['13','14','15','16','17'];

	// index for current track
	var currentTrack = 1;

	// $('#pause-button').click(function() {
	// 	// console.log(playlistPlayer);
	// 	// console.log($('.playlist-audio')[0]);
	// 	playlistPlayer.pause();
	// });
	// Track Skipping
	$('#previous-button').click(function() {
		console.log('currentTrack: ', currentTrack);
		
		// update track
		if(currentTrack == 0)
			currentTrack = tracks.length - 1;
		else
			currentTrack--;
		console.log('currentTrack now: ', currentTrack);

		playlistPlayer.setSrc('/assets/audio/SFW40568/SFW40568_' + tracks[currentTrack] + '.mp3');
		playlistPlayer.play();
	})
	$('#next-button').click(function() {
		// console.log(tracks[1]);
		// console.log(tracks.length)
		console.log('currentTrack: ', currentTrack);

		// update track
		if(currentTrack == tracks.length - 1)
			currentTrack = 0;
		else
			currentTrack++;
		
		console.log('currentTrack now: ', currentTrack);

		playlistPlayer.setSrc('/assets/audio/SFW40568/SFW40568_' + tracks[currentTrack] + '.mp3'); // set new src
		playlistPlayer.play(); // play track

	})

	function playNextTrack() {
		if(currentTrack == tracks.length - 1)
			currentTrack = 0;
		else
			currentTrack++;
		console.log('currentTrack now: ', currentTrack);

		playlistPlayer.setSrc('/assets/audio/SFW40568/SFW40568_' + tracks[currentTrack] + '.mp3'); // set new src
		playlistPlayer.play(); // play track
	}
	// $('.playlist-audio').mediaelementplayer({
	// 	loop: true,
	// 	shuffle: true,
	// 	playlist: true,
	// 	audioHeight: 30,
	// 	playlistposition: 'bottom',
	// 	features: ['playlistfeature', 'prevtrack', 'playpause', 'nexttrack', 'loop', 'shuffle', 'playlist', 'current', 'progress', 'duration', 'volume'],
	// });

/***************************
* Nav
***************************/
	// hide in-page nav on click
	$('.header-nav a').on('click', function() {
		site.navCloseAll();
	})

/***************************
* Show Code
***************************/
	// var $showCode = $('.show-code');
	var $showHTML = $('.show-html');
	var $showSASS = $('.show-sass');

	// show on click
	$showHTML.on('click', function () {
		$(this).toggleClass('active');
		$showSASS.removeClass('active');
		$(this).closest('.codeblock').find('pre.sass').hide();
		$(this).closest('.codeblock').find('pre.html').toggle();
	});
	$showSASS.on('click', function () {
		$(this).toggleClass('active');
		$showHTML.removeClass('active');
		$(this).closest('.codeblock').find('pre.html').hide();
		$(this).closest('.codeblock').find('pre.sass').toggle();
	});

/***************************
/* Syntax Highlighting
 * from highlightjs.org
***************************/
 	// start highlighter on page load
	// hljs.configure({tabReplace: ' '});
	hljs.initHighlightingOnLoad();
});