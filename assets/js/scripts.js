$(document).ready(function () {

/***************************
* Common scripts defined in styleguide.folklife.si.edu/code/assets/common/js/common-scripts.js
***************************/

/***************************
* Show Code
***************************/
	var $showCode = $('.show-code');

	// show on click
	// if($showCode).

		$showCode.on('click', function () {
			$(this).closest('.typeface').find('pre').toggle();
		});

/* Syntax Highlighting
 * from highlightjs.org */
 	// start highlighter on page load
	// hljs.configure({tabReplace: ' '});
	hljs.initHighlightingOnLoad();
	console.log(hljs.listLanguages());
});