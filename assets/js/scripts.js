$(document).ready(function () {

/***************************
* Common scripts defined in styleguide.folklife.si.edu/code/assets/common/js/common-scripts.js
***************************/

/***************************
* Show Code
***************************/
	// var $showCode = $('.show-code');
	var $showHTML = $('.show-html');
	var $showSASS = $('.show-sass');

	// show on click
	// if($showCode).

		// $showCode.on('click', function () {
		// 	$(this).closest('.codeblock').find('pre').toggle();
		// });
		$showHTML.on('click', function () {
			$(this).toggleClass('active');
			$(this).closest('.codeblock').find('pre.sass').hide();
			$(this).closest('.codeblock').find('pre.html').toggle();
		});
		$showSASS.on('click', function () {
			$(this).toggleClass('active');
			$(this).closest('.codeblock').find('pre.html').hide();
			$(this).closest('.codeblock').find('pre.sass').toggle();
		});

/* Syntax Highlighting
 * from highlightjs.org */
 	// start highlighter on page load
	// hljs.configure({tabReplace: ' '});
	hljs.initHighlightingOnLoad();
	console.log(hljs.listLanguages());
});