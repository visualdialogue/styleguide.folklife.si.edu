
<!DOCTYPE html>
<html lang="en")>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta robots="none"/><title>Smithsonian Center for Folklife and Cultural Heritage | <?php echo $page->title()->html() ?></title>
  <?php snippet('header-fonts'); ?>
  <?php snippet('header-shim'); ?>
  <?php snippet('header-favicons'); ?>
  <!-- highlightjs.org for code syntax highlighting--><link href="/assets/css/highlight/styles/atom-one-dark.css" type="text/css" rel="stylesheet"><script src="/assets/js/highlight.pack.js"></script><link href="/assets/css/styleguide.css?v=<?= time() ?>" type="text/css" rel="stylesheet">
</head><body class="folklife-site">
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
<div class="navbar-outside"></div>
<!-- Navbar-->
<nav id="navbar" class="navbar">
  <div class="navbar-header container">
    <ul class="row">
      <!-- Logo-->
      <div class="logo-wrapper col-sm-2">
        <div id="logo-wrapper" class="logo"><a href="/"><img id="block-logo" src="/assets/images/logo/folklife-block-logo_2016.12.17.png" class="block-logo folkways-block-logo"/><img id="one-line-logo" src="/assets/images/logo/folklife-one-line-logo_2016.12.15.png" class="one-line-logo folklife-one-line-logo"/></a></div>
      </div>
      <?php snippet('nav-icons-search'); ?>
    </ul>
  </div>
  <!-- Full Navigation Dropdown-->
  <div id="header-nav" class="header-nav">
    <div class="container">
      <ul class="header-nav-row row">
        <li class="header-nav-main-item col-sm-2"> <a href="/colors" class="header-nav-title">Colors</a>
          <ul class="header-nav-list">
            <li class="header-nav-sub-item"><a href="/colors#folklife">Folklife</a></li>
            <li class="header-nav-sub-item"><a href="/colors#festival">Festival</a></li>
            <li class="header-nav-sub-item"><a href="/colors#folkways">Folkways</a></li>
            <li class="header-nav-sub-item"><a href="/colors#shades-of-black">Shades of Black</a></li>
          </ul>
        </li>
        <li class="header-nav-main-item col-sm-2"> <a href="/typography" class="header-nav-title">Typography</a>
          <ul class="header-nav-list">
            <li class="header-nav-sub-item"><a href="/typography#serif">Serif</a></li>
            <li class="header-nav-sub-item"><a href="/typography#sans">Sans</a></li>
            <li class="header-nav-sub-item"><a href="/typography#slab-serif">Slab Serif</a></li>
          </ul>
        </li>
        <li class="header-nav-main-item col-sm-2"> <a href="/cards" class="header-nav-title">Cards</a>
          <ul class="header-nav-list">
            <li class="header-nav-sub-item">Video Standard</li>
            <li class="header-nav-sub-item">Video Horizontal</li>
            <li class="header-nav-sub-item">Audio</li>
            <li class="header-nav-sub-item">Card Vertical</li>
            <li class="header-nav-sub-item">Card Horizontal				</li>
          </ul>
        </li>
        <li class="header-nav-main-item col-sm-2"> <a href="/specials" class="header-nav-title">Specials</a>
          <ul class="header-nav-list">
            <li class="header-nav-sub-item"><a href="/specials#email-signup">Email Signup</a></li>
            <li class="header-nav-sub-item"><a href="/specials#become-a-member">Become a Member</a></li>
            <li class="header-nav-sub-item"><a href="/specials#support">Support</a></li>
          </ul>
        </li>
        <li class="header-nav-main-item col-sm-2"> <a href="/structure" class="header-nav-title">Structure</a>
          <ul class="header-nav-list">
            <li class="header-nav-sub-item"><a href="/framework#sections">Sections</a></li>
            <li class="header-nav-sub-item"><a href="/framework#half-sections">Half Sections</a></li>
            <li class="header-nav-sub-item"><a href="/framework#margins">Margins</a></li>
            <li class="header-nav-sub-item"><a href="/framework#padding">Padding</a></li>
          </ul>
        </li>
        <li class="header-nav-main-item col-sm-2"> <a href="/libraries" class="header-nav-title">Libraries</a>
          <ul class="header-nav-list">
            <li class="header-nav-sub-item"><a href="/libraries#bootstrap">Bootstrap</a></li>
            <li class="header-nav-sub-item"><a href="/libraries#sass">SASS</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <!-- Collect the nav links, forms, and other content for toggling -->
  <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse"></div>
</nav>