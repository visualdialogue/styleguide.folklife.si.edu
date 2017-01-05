
<!-- Search Bar-->
<form action="/search" class="search-bar desktop-search-bar col-sm-offset-1 col-sm-5 col-md-5 col-md-offset-1 col-lg-offset-2 col-lg-6">
  <input id="search-input" placeholder="Search..." type="search" name="q" value="<? if(isset($query)) echo esc($query) ?>"/>
</form>
<!-- Main Navigation Icons-->
<div class="nav-icons col-sm-3 col-lg-2">
  <div id="search-icon" aria-hidden="true" class="icon-search nav-icon main-nav-icon"></div>
  <div id="share-icon" aria-hidden="true" class="icon-share nav-icon main-nav-icon"></div>
  <div id="menu-icon" aria-hidden="true" class="icon-menu nav-icon main-nav-icon"></div>
</div>