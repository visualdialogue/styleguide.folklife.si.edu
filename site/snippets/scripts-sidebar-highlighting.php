<script>
/***************************
* festival program side menu highlighting
* for now, this should only show on the program child page
* it will get confused and issues if included on the program landing page because of the url structure
***************************/
	var url = document.URL; // get current url, can't set it with this
	var urlParts = url.split('/'); // get current festival page from url
	// assuming url structure is similar to:
	// get next to last segment of current path for tobydodds.com and folklife.si.edu, prevent from using localhost:3003
	if (urlParts[3] == 'tobydodds' || urlParts[3] == 'si' || (urlParts[2].includes('localhost') && !urlParts[2].includes('3003'))) {
		console.log('toby + sandy environment');
		var programCategoryID = urlParts[urlParts.length - 2];
	}
	else {
		console.log('lukes environment with different url structure');
		var programCategoryID = urlParts[urlParts.length - 1];
	}

	// homepage
	if(programCategoryID.includes('#introduction'))
		programCategoryID = 'introduction';

	// check all internal anchor tags and if contain same category ID, add .active class to parent li for nav highlighting
	$('.ms-sidebar-nav a[href*=' + programCategoryID + ']').parent('li').addClass('active');
</script>