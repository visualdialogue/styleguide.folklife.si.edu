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

	var playlist; // global playlist var so can access everywhere
	console.log(myPlaylist[0]);

	// initialize player so can get id for vars
	/**********
	* Start media element player
	* after build, make new playlist with data from 
	**********/
	$('.playlist-audio').mediaelementplayer({
		pluginPath: "/path/to/shims/", 
		success: function(mediaElement, originalNode) {
			console.log('mejs audio created');
			// better mejs html
			var currentTimeContainer = $('.playlist-audio').find('.mejs-currenttime-container');
			console.log(currentTimeContainer);
			wrapTime(currentTimeContainer);

			// initialize player because elements now exist
			playlist = new Playlist(); 
			// set first track
			// playlist.cover = 
			playlist.cover.attr('src', myPlaylist[0].cover); // update album cover
			playlist.title.html(myPlaylist[0].title); // update album title
			playlist.artist.html(myPlaylist[0].artist); // update album artist

			// Event Listeners
			mediaElement.addEventListener('ended', function (e) {
				playlist.playNextTrack();
			}, false);
		}
	});
	

	/**********
	* Playlist constructor function
	* inspired by http://stackoverflow.com/a/15174529
	* var myPlayList is array with playlist data, loaded from script tag in html
	**********/
	function Playlist() {
		this.playerId = $('.playlist-audio').attr('id');
		this.mejsPlayer = mejs.players[this.playerId];
		this.player = this.mejsPlayer;
		this.cover = $('#playlist-cover');
		this.title = $('#playlist-title');
		this.artist = $('#playlist-artist');
		this.audioElement = $('#playlist-audio');
		this.currentTrack = 0;
		this.length = Object.keys(myPlaylist).length;

		/**********
		* Update playlist player
		* @param track is album json data
		**********/
		this.updatePlayer = function(track) {
			// console.log($playlist.audioElement);
			this.cover.attr('src', track.cover); // update album cover
			this.title.html(track.title); // update album title
			this.artist.html(track.artist); // update album artist
			this.audioElement[0].setSrc(track.mp3); // set new track to play
			this.player.play(); // play track
		}

		/**********
		* Play previous track
		**********/
		this.playPrevTrack = function() {
			// if current track is 0, change to last track
			if ( playlist.currentTrack == 0 )
				playlist.currentTrack = playlist.length - 1;
			// else play track - 1 
			else
				playlist.currentTrack--;
			
			// update player with image, src, play, etc.
			playlist.updatePlayer(myPlaylist[this.currentTrack]);
		}

		/**********
		* Play next track
		**********/
		this.playNextTrack = function() {
			if(this.currentTrack == this.length - 1)
				this.currentTrack = 0;
			else
				this.currentTrack++;

			// update player with image, src, play, etc.
			playlist.updatePlayer(myPlaylist[this.currentTrack]);
		}
	}

	/**********
	* Track Skipping Buttons
	**********/
	// Previous Track
	$('#previous-button').click(function() {
		playlist.playPrevTrack();
	})

	// Next Track
	$('#next-button').click(function() {
		playlist.playNextTrack();
	})


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