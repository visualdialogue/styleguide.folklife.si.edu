
<!DOCTYPE html>
<html lang="en")>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta robots="none"/><!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>Smithsonian Center for Folklife and Cultural Heritage | <?php echo $page->title()->html() ?></title><script>(function(d) {var config = {kitId: 'roi1emx',scriptTimeout: 3000,async: true},h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)})(document);</script>
  <style>
    .wf-loading .tagline,
    .wf-loading .site-toggle__link,
    .wf-loading .title,
    .wf-loading .section-title {
    	/* Hide the blog title and post titles while web fonts are loading */
    	visibility: hidden;
    }
    
  </style>
  <!-- “Entypo pictograms by Daniel Bruce — www.entypo.com” -->
  <!-- Font Awesome icons by Dave Gandy --><style>
  /*- include './assets/css/critical.css'*/
  </style>
  <!-- highlightjs.org for code syntax highlighting--><link href="/assets/css/highlight/styles/monokai-sublime.css" type="text/css" rel="stylesheet"><script src="/assets/js/highlight.pack.js"></script><link href="/assets/css/styleguide.css?v=<?= time() ?>" type="text/css" rel="stylesheet">
  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head><body class="site--folklife <?= str::lower($page->title()) ?>-page">
<div class="navbar__site-toggle">
  <div class="container">
    <div class="tagline">Championing Culture for, by, and of the People</div>
    <?php if (c::get('isDev')): ?><a href="http://localhost:3003" class="site-toggle__link site-toggle__link--folklife active">Folklife</a>
    <?php else: ?><a href="http://folklife.lukehatfield.com" class="site-toggle__link site-toggle__link--folkways">Folkways</a>
    <?php endif; ?>
    <?php if (c::get('isDev')): ?><a href="http://localhost:3009" class="site-toggle__link site-toggle__link--festival">Folkways</a>
    <?php else: ?><a href="http://folkways.lukehatfield.com" class="site-toggle__link site-toggle__link--folkways">Folkways</a>
    <?php endif; ?>
    <?php if (c::get('isDev')): ?><a href="http://localhost:3005" class="site-toggle__link site-toggle__link--folklife">Festival</a>
    <?php else: ?><a href="http://on.festival.lukehatfield.com" class="site-toggle__link site-toggle__link--festival">Festival</a>
    <?php endif; ?>
  </div>
</div>
<div class="navbar-outside"></div>
<nav class="navbar">
  <div class="navbar-header">
    <div class="navbar-header__inner">
      <div href="#" class="navbar-brand"><img src="assets/images/logo/sunsplash.png" class="sunsplash"/><a href="/" class="logo-mask">
          <div class="logo__copy"><img src="assets/images/logo/folklife.png" class="logo--folklife"/><img src="assets/images/logo/center.png" class="logo--center"/></div></a></div>
      <div class="nav-icons">											
        <div id="menu-icon" aria-hidden="true" class="icon-menu nav-icon nav-icon--main"></div>
      </div>
    </div>
  </div>
  <div id="header-nav" class="header-nav">
    <div class="container">
      <ul class="header-nav__row row">
        <li class="header-nav__main-item col-sm-2"> <a href="/colors" class="header-nav__title">Colors</a>
          <ul class="header-nav__list">
            <li class="header-nav__sub-item"><a href="/colors#folklife">Folklife</a></li>
            <li class="header-nav__sub-item"><a href="/colors#festival">Festival</a></li>
            <li class="header-nav__sub-item"><a href="/colors#folkways">Folkways</a></li>
            <li class="header-nav__sub-item"><a href="/colors#shades-of-black">Shades of Black</a></li>
          </ul>
        </li>
        <li class="header-nav__main-item col-sm-2"> <a href="/typography" class="header-nav__title">Typography</a>
          <ul class="header-nav__list">
            <li class="header-nav__sub-item"><a href="/typography#serif">Serif</a></li>
            <li class="header-nav__sub-item"><a href="/typography#sans">Sans</a></li>
            <li class="header-nav__sub-item"><a href="/typography#slab-serif">Slab Serif</a></li>
          </ul>
        </li>
        <li class="header-nav__main-item col-sm-2"> <a href="/cards" class="header-nav__title">Cards</a>
          <ul class="header-nav__list">
            <li class="header-nav__sub-item">Video Standard</li>
            <li class="header-nav__sub-item">Video Horizontal</li>
            <li class="header-nav__sub-item">Audio</li>
            <li class="header-nav__sub-item">Card Vertical</li>
            <li class="header-nav__sub-item">Card Horizontal				</li>
          </ul>
        </li>
        <li class="header-nav__main-item col-sm-2"> <a href="/specials" class="header-nav__title">Specials</a>
          <ul class="header-nav__list">
            <li class="header-nav__sub-item"><a href="/specials#email-signup">Email Signup</a></li>
            <li class="header-nav__sub-item"><a href="/specials#become-a-member">Become a Member</a></li>
            <li class="header-nav__sub-item"><a href="/specials#support">Support</a></li>
          </ul>
        </li>
        <li class="header-nav__main-item col-sm-2"> <a href="/structure" class="header-nav__title">Structure</a>
          <ul class="header-nav__list">
            <li class="header-nav__sub-item"><a href="/framework#sections">Sections</a></li>
            <li class="header-nav__sub-item"><a href="/framework#half-sections">Half Sections</a></li>
            <li class="header-nav__sub-item"><a href="/framework#margins">Margins</a></li>
            <li class="header-nav__sub-item"><a href="/framework#padding">Padding</a></li>
          </ul>
        </li>
        <li class="header-nav__main-item col-sm-2"> <a href="/libraries" class="header-nav__title">Libraries</a>
          <ul class="header-nav__list">
            <li class="header-nav__sub-item"><a href="/libraries#bootstrap">Bootstrap</a></li>
            <li class="header-nav__sub-item"><a href="/libraries#sass">SASS</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div><!-- Collect the nav links, forms, and other content for toggling -->
  <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse"></div>
</nav>