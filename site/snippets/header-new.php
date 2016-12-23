
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta robots="none"/><title>Smithsonian Center for Folklife and Cultural Heritage | <?php echo $page->title()->html() ?></title>
  <?php snippet('header-fonts'); ?>
  <?php snippet('header-shim'); ?>
  <?php snippet('header-favicons'); ?>
  <!-- Styles--><link href="/assets/css/festival.css?v=<?= time() ?>" type="text/css" rel="stylesheet">
</head><body class="festival-site <?= str::slug(str::lower($page->title())) ?>-page <?= str::slug(str::lower($page->parent()->title())) ?>-child-page <?php if (c::get('on')) echo 'on'; else echo 'off'; ?>-state <?= str::slug(str::lower($page->template())) ?>-page">
<!-- Site Toggle-->
<div id="site-toggle" class="site-toggle">
  <div class="container">
    <div class="tagline">Bringing Tradition Bearers From Around The World To The National Mall</div><a href="/" class="site-toggle-link festival-site-toggle-link active">Festival</a>
    <?php if (c::get('isDev')): ?><a href="http://localhost:3001" class="site-toggle-link folklife-site-toggle-link">Folklife</a>
    <?php else: ?><a href="http://folklife.lukehatfield.com" class="site-toggle-link folklife-site-toggle-link">Folklife</a>
    <?php endif; ?>
    <?php if (c::get('isDev')): ?><a href="http://localhost:3005" class="site-toggle-link festival-site-toggle-link">Folkways</a>
    <?php else: ?><a href="http://folkways.lukehatfield.com" class="site-toggle-link folkways-site-toggle-link">Folkways</a>
    <?php endif; ?>
  </div>
</div>
<!-- Navbar outside is a click area to close open nav-->
<div class="navbar-outside"></div>
<!-- Navbar-->
<nav id="navbar" class="navbar">
  <div class="navbar-header container">
    <div class="ul row">
      <!-- Logo-->
      <div class="logo-wrapper col-sm-2">
        <div id="logo-wrapper" class="logo"><a href="/"><img id="logo" src="/assets/images/logo/festival-block-logo_2016.12.19.png" class="block-logo festival-block-logo"/><img id="one-line-logo" src="/assets/images/logo/festival-one-line-logo_2016.12.19.png" class="one-line-logo festival-one-line-logo"/></a></div>
      </div>
      <?php snippet('nav-icons-search'); ?>
    </div>
  </div>
  <!-- Full Navigation Dropdown-->
  <div id="header-nav" class="header-nav">
    <div class="container">
      <ul class="header-nav-row row">
        <li class="header-nav-main-item col-sm-2"> 
          <div class="header-nav-title">2017 Festival</div>
          <ul class="header-nav-list">
            <li class="header-nav-sub-item">Circus Arts</li>
            <li class="header-nav-sub-item">Cuba</li>
            <li class="header-nav-sub-item">NEA @ 50</li>
            <li class="header-nav-sub-item">Evening Concerts</li>
            <li class="header-nav-sub-item">Participants</li>
            <li class="header-nav-sub-item">Related Events</li>
          </ul>
        </li>
        <li class="header-nav-main-item col-sm-2"> 
          <div class="header-nav-title">Visit</div>
          <ul class="header-nav-list">
            <li class="header-nav-sub-item">Directions</li>
            <li class="header-nav-sub-item">Parking</li>
            <li class="header-nav-sub-item">Custom Map</li>
          </ul>
        </li>
        <li class="header-nav-main-item col-sm-2"> <a href="/learn" class="header-nav-title">Learn*</a>
          <ul class="header-nav-list">
            <li class="header-nav-sub-item">Festival Info</li>
          </ul>
        </li>
        <li class="header-nav-main-item col-sm-2"> 
          <div href="#" class="header-nav-title">Schedule</div>
        </li>
        <li class="header-nav-main-item col-sm-2"> <a href="/blog" class="header-nav-title">Blog*</a></li>
        <li class="header-nav-main-item col-sm-2"> <a href="/programs/basque" class="header-nav-title">Past Festivals*</a></li>
      </ul>
    </div>
  </div>
  <!-- Social icons-->
  <div class="social-icons mobile-social-icons container"><a href="http://www.facebook.com/smithsonianfolklifefestival" target="_blank" class="social-icon-link">
      <div aria-hidden="true" class="icon-facebook social-icon mobile-social-icon nav-icon"></div></a><a href="https://twitter.com/smithsonianfolk" target="_blank" class="social-icon-link">
      <div aria-hidden="true" class="icon-twitter social-icon mobile-social-icon nav-icon"></div></a><a href="http://smithsonianfolklife.tumblr.com/" target="_blank" class="social-icon-link">
      <div aria-hidden="true" class="icon-tumblr social-icon mobile-social-icon nav-icon"></div></a><a href="https://www.flickr.com/groups/2016folklifefestival" target="_blank" class="social-icon-link">
      <div aria-hidden="true" class="icon-flickr social-icon mobile-social-icon nav-icon"></div></a><a href="https://www.instagram.com/smithsonianfolklife/" target="_blank" class="social-icon-link">
      <div aria-hidden="true" class="icon-instagrem social-icon mobile-social-icon nav-icon"></div></a></div>
  <!-- Search form-->
  <form action="." class="search-bar mobile-search-bar mobile-only">
    <input placeholder="Search..." type="search"/>
  </form>
</nav>