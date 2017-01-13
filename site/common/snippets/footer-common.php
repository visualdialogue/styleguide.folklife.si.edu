
<hr class="footer-hr"/>
<ul class="footer-row footer-row-2 row">
  <li class="footer-main-item col-sm-3">
    <div class="footer-logo active-footer-logo">
      <?php if (c::get('isFolklife') || c::get('isStyleguide')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3001'; else echo 'http://folklife.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_center_for_folklife_and_cultural_heritage.png?v=2016.10.21" alt="Smithsonian Center for Folklife and Cultural Heritage" class="footer-logo-img folklife-footer-logo-img"/></a>
      <?php elseif (c::get('isFestival')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3003'; else echo 'http://on.festival.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_folklife_festival.png?v=2016.10.21" alt="Smithsonian Folklife Festival" class="footer-logo-img"/></a>
      <?php elseif (c::get('isFolkways')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3005'; else echo 'http://folkways.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_folkways_recordings.png?v=2016.10.21" alt="Smithsonian Folkways Recordings" class="footer-logo-img"/></a>
      <?php endif; ?>
    </div>
  </li>
  <li class="footer-main-item col-sm-3"> 
    <div class="footer-logo">
      <?php if (c::get('isFolklife') || c::get('isStyleguide')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3005'; else echo 'http://folkways.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_folkways_recordings.png?v=2016.10.21" alt="Smithsonian Folkways Recordings" class="footer-logo-img"/></a>
      <?php elseif (c::get('isFestival') || c::get('isFolkways')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3001'; else echo 'http://folklife.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_center_for_folklife_and_cultural_heritage.png?v=2016.10.21" alt="Smithsonian Center for Folklife and Cultural Heritage" class="footer-logo-img folklife-footer-logo-img"/></a>
      <?php endif; ?>
    </div>
  </li>
  <li class="footer-main-item col-sm-3"> 
    <div class="footer-logo">
      <?php if (c::get('isFolklife') || c::get('isFolkways') || c::get('isStyleguide')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3003'; else echo 'http://on.festival.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_folklife_festival.png?v=2016.10.21" alt="Smithsonian Folklife Festival" class="footer-logo-img"/></a>
      <?php elseif (c::get('isFestival')): ?><a href="<? if (c::get('isDev')) echo 'http://localhost:3005'; else echo 'http://folkways.lukehatfield.com' ?>"><img src="/assets/images/logo/smithsonian_folkways_recordings.png?v=2016.10.21" alt="Smithsonian Folkways Recordings" class="footer-logo-img"/></a>
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
      <!-- Folklife or Festival-->
      <?php if (c::get('isFolklife')): ?>
      <li class="social-media-icon"><a href="https://www.facebook.com/smithsonianfolklifefestival" target="_blank" class="icon-facebook"></a></li>
      <li class="social-media-icon"><a href="https://twitter.com/smithsonianfolk" target="_blank" class="icon-twitter"></a></li>
      <li class="social-media-icon"><a href="http://smithsonianfolklife.tumblr.com/" target="_blank" class="icon-tumblr"></a></li>
      <li class="social-media-icon"><a href="https://www.flickr.com/groups/2016folklifefestival" target="_blank" class="icon-flickr"></a></li>
      <li class="social-media-icon"><a href="https://www.instagram.com/smithsonianfolklife/" target="_blank" class="icon-instagrem"></a></li>
      <!-- Festival-->
      <?php elseif (c::get('isFestival')): ?>
      <li class="social-media-icon"><a href="https://www.facebook.com/smithsonianfolklifefestival" target="_blank" class="icon-facebook"></a></li>
      <li class="social-media-icon"><a href="https://twitter.com/smithsonianfolk" target="_blank" class="icon-twitter"></a></li>
      <li class="social-media-icon"><a href="https://www.flickr.com/groups/2016folklifefestival" target="_blank" class="icon-flickr"></a></li>
      <li class="social-media-icon"><a href="https://www.youtube.com/user/SmithsonianFolklife" target="_blank" class="icon-youtube"></a></li>
      <li class="social-media-icon"><a href="https://www.instagram.com/smithsonianfolklife/" target="_blank" class="icon-instagrem"></a></li>
      <!-- Folkways-->
      <?php else: ?>
      <li class="social-media-icon"><a href="http://www.facebook.com/smithsonianfolkwaysrecordings" target="_blank" class="icon-facebook"></a></li>
      <li class="social-media-icon"><a href="https://twitter.com/folkways" target="_blank" class="icon-twitter"></a></li>
      <li class="social-media-icon"><a href="https://www.youtube.com/user/SmithsonianFolkways" target="_blank" class="icon-youtube"></a></li>
      <li class="social-media-icon"><a href="https://www.pinterest.com/smithsofolkways/" target="_blank" class="icon-pinterest"></a></li>
      <li class="social-media-icon"><a href="https://www.instagram.com/smithsonianfolkways/" target="_blank" class="icon-instagrem"></a></li>
      <li class="social-media-icon"><a href="https://soundcloud.com/smithsonian-folkways" target="_blank" class="icon-soundcloud"></a></li>
      <?php endif; ?>
    </ul>
  </li>
</ul>
<ul class="footer-row footer-row-3 row">
  <li class="footer-main-item col-sm-3">
    <div class="smithsonian-institution-logo"><img src="/assets/images/logo/smithsonian_institution.png" alt="Smithsonian Institution"/></div>
  </li>
  <li class="footer-main-item col-sm-4">
    <div class="copyright">&copy; 2016 Smithsonian Institution</div>
  </li>
</ul>