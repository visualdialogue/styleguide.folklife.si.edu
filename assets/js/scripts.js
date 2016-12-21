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
			$(this).closest('.codeblock').find('pre').toggle();
		});

/**********
* Match Heights
* from https://github.com/liabru/jquery-match-height
**********/
	// $('.item').matchHeight(options);

/* Syntax Highlighting
 * from highlightjs.org */
 	// start highlighter on page load
	// hljs.configure({tabReplace: ' '});
	hljs.initHighlightingOnLoad();
	console.log(hljs.listLanguages());
});