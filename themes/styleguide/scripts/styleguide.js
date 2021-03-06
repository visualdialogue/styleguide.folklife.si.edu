/*


  ___|   |           |                     _)      |             ___|              _)         |         
\___ \   __|  |   |  |   _ \   _` |  |   |  |   _` |   _ \     \___ \    __|   __|  |  __ \   __|   __| 
      |  |    |   |  |   __/  (   |  |   |  |  (   |   __/           |  (     |     |  |   |  |   \__ \ 
_____/  \__| \__, | _| \___| \__, | \__,_| _| \__,_| \___|     _____/  \___| _|    _|  .__/  \__| ____/ 
             ____/           |___/                                                    _|                


*/

$(document).ready(function () {

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

    // for each codeblock...
    $('.codeblock').each(function(index, element) {
        // get source html
        var highlightSourceHTML = $(element).find('.highlight-source').html();
        if(typeof highlightSourceHTML !== 'undefined') {
            console.log('highlightSourceHTML', highlightSourceHTML);
            // html encode so highlightjs can read
            highlightSourceHTML = htmlEscape(highlightSourceHTML);
            // set as destination for highlightjs to read
            $('.highlight-destination').html(highlightSourceHTML);    
        }
    });
    // copy html to code block

    // then highlight all
	hljs.initHighlightingOnLoad();

    // encoding, from https://stackoverflow.com/a/7124052
    function htmlEscape(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
});