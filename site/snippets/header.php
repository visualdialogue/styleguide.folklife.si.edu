
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
        <div id="logo-wrapper" class="logo"><a href="/"><img id="block-logo" src="/assets/images/logo/folklife-block-logo_2016.12.17.png" class="block-logo folkways-block-logo"/><img id="one-line-logo" src="/assets/images/logo/folklife-one-line-logo_2016.12.22.png" class="one-line-logo folklife-one-line-logo"/></a></div>
      </div>
      <?php snippet('nav-icons-search'); ?>
    </ul>
  </div>
  <!-- Full Navigation Dropdown-->
  <div id="header-nav" class="header-nav">
    <div class="container">
      <ul class="header-nav-row row">
        <li class="header-nav-main-item col-sm-2"> <a href="#grid" class="header-nav-title">Grid</a></li>
        <li class="header-nav-main-item col-sm-2"> <a href="#colors" class="header-nav-title">Colors</a>
          <ul class="header-nav-list">
            <li class="header-nav-sub-item"><a href="#gray-palette">Grays</a></li>
            <li class="header-nav-sub-item"><a href="#folklife-palette">Folklife Palette</a></li>
            <li class="header-nav-sub-item"><a href="#folkways-palette">Folkways Palette</a></li>
            <li class="header-nav-sub-item"><a href="#festival-palette">Festival Palette</a></li>
          </ul>
        </li>
        <li class="header-nav-main-item col-sm-2"> <a href="#typography" class="header-nav-title">Typography</a>
          <ul class="header-nav-list">
            <li class="header-nav-sub-item"><a href="#serif">Serif</a></li>
            <li class="header-nav-sub-item"><a href="#sans">Sans</a></li>
            <li class="header-nav-sub-item"><a href="#slab">Slab</a></li>
          </ul>
        </li>
        <li class="header-nav-main-item col-sm-2"> <a href="#cards" class="header-nav-title">Cards</a></li>
      </ul>
    </div>
  </div>
  <!-- Collect the nav links, forms, and other content for toggling -->
  <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse"></div>
</nav>