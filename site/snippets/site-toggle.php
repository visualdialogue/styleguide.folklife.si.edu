<!-- Site Toggle--><div id="site-toggle" class="site-toggle"><div class="container"><div class="smithsonian-logo"><img src="/assets/images/logo/smithsonian-alt-logo_280x60.png" alt="Folklife Logo" class="visible-sm visible-md"/><img src="/assets/images/logo/smithsonian-alt-logo_320x60.png" alt="Folklife Logo" class="visible-lg"/></div><div class="right-site-toggle"><div class="hidden-xs site-toggle-text"><div class="tagline"><?php echo $tagline; ?></div><?php if (c::get('isDev')): ?><a href="http://localhost:3001" class="site-toggle-link folklife-site-toggle-link active">Folklife</a><?php else: ?><a href="http://folklife.lukehatfield.com" class="site-toggle-link folkways-site-toggle-link">Folklife</a><?php endif; ?><?php if (c::get('isDev')): ?><a href="http://localhost:3005" class="site-toggle-link festival-site-toggle-link">Folkways</a><?php else: ?><a href="http://folkways.lukehatfield.com" class="site-toggle-link folkways-site-toggle-link">Folkways</a><?php endif; ?><?php if (c::get('isDev')): ?><a href="http://localhost:3003" class="site-toggle-link folklife-site-toggle-link">Festival</a><?php else: ?><a href="http://on.festival.lukehatfield.com" class="site-toggle-link festival-site-toggle-link">Festival</a><?php endif; ?></div><?php if(isset($folkways)): ?><div class="folkways-icons"><a href="/account" target="_blank" class="folkways-icon-link"><div aria-hidden="true" class="icon-user folkways-icon nav-icon"></div></a><a href="/cart" target="_blank" class="folkways-icon-link"><div aria-hidden="true" class="icon-basket folkways-icon nav-icon"></div></a></div><?php endif; ?></div></div></div>