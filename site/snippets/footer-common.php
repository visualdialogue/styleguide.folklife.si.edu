
<hr class="footer-hr"/>
<ul class="footer-row footer-row-2 row">
  <li class="footer-main-item col-sm-3">
    <div class="footer-logo active-footer-logo">
      <?php if (c::get('isFolklife')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3001'; else echo 'http://folklife.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_center_for_folklife_and_cultural_heritage.png?v=2016.10.21" class="footer-logo-img folklife-footer-logo-img"/></a>
      <?php elseif (c::get('isFestival')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3003'; else echo 'http://on.festival.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_folklife_festival.png?v=2016.10.21" class="footer-logo-img"/></a>
      <?php elseif (c::get('isFolkways')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3005'; else echo 'http://folkways.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_folkways_recordings.png?v=2016.10.21" class="footer-logo-img"/></a>
      <?php endif; ?>
    </div>
  </li>
  <li class="footer-main-item col-sm-3"> 
    <div class="footer-logo">
      <?php if (c::get('isFolklife')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3005'; else echo 'http://folkways.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_folkways_recordings.png?v=2016.10.21" class="footer-logo-img"/></a>
      <?php elseif (c::get('isFestival') || c::get('isFolkways')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3001'; else echo 'http://folklife.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_center_for_folklife_and_cultural_heritage.png?v=2016.10.21" class="footer-logo-img folklife-footer-logo-img"/></a>
      <?php endif; ?>
    </div>
  </li>
  <li class="footer-main-item col-sm-3"> 
    <div class="footer-logo">
      <?php if (c::get('isFolklife') || c::get('isFolkways')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3003'; else echo 'http://on.festival.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_folklife_festival.png?v=2016.10.21" class="footer-logo-img"/></a>
      <?php elseif (c::get('isFestival')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3005'; else echo 'http://folkways.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_folkways_recordings.png?v=2016.10.21" class="footer-logo-img"/></a>
      <?php endif; ?>
    </div>
  </li>
  <li class="footer-main-item col-sm-1"> 
    <ul class="footer-list copyright-list">
      <li class="footer-sub-item copyright-list-item"><a href="#">Copyright</a></li>
      <li class="footer-sub-item copyright-list-item"><a href="#">Contact</a></li>
      <li class="footer-sub-item copyright-list-item"><a href="#">Privacy</a></li>
      <li class="footer-sub-item copyright-list-item"><a href="#">Credits</a></li>
    </ul>
  </li>
  <li class="footer-main-item col-sm-2 social-media">
    <div class="footer-sub-item social-media-title">Connect with us</div>
    <ul class="footer-list">
      <li class="social-media-icon"><a href="https://www.facebook.com/smithsonianfolklifefestival" target="_blank" class="icon-facebook"></a></li>
      <li class="social-media-icon"><a href="https://twitter.com/smithsonianfolk" target="_blank" class="icon-twitter"></a></li>
      <li class="social-media-icon"><a href="http://smithsonianfolklife.tumblr.com/" target="_blank" class="icon-tumblr"></a></li>
      <li class="social-media-icon"><a href="https://www.flickr.com/groups/2016folklifefestival" target="_blank" class="icon-flickr"></a></li>
      <li class="social-media-icon"><a href="https://www.instagram.com/smithsonianfolklife/" target="_blank" class="icon-instagrem"></a></li>
    </ul>
  </li>
</ul>
<ul class="footer-row footer-row-3 row">
  <li class="footer-main-item col-sm-3">
    <div class="smithsonian-institution-logo"><img src="/assets/images/logo/smithsonian_institution.png"/></div>
  </li>
  <li class="footer-main-item col-sm-4">
    <div class="copyright">&copy; 2016 Smithsonian Institution</div>
  </li>
</ul>