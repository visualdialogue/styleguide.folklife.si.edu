<div id="main-content" tabindex="-1" class="title-bar"><div class="container title-height"><!-- Program Year--><?php if (isset($year)): ?><div class="program-year-outer"><div class="program-year-inner"><div class="program-year"><?php echo $year; ?></div></div></div><?php endif; ?><?php if (isset($title)): ?><?php if (isset($link)): ?><a href="<?= $link ?>"><h1 class="page-title"><?php echo htmlspecialchars($title, ENT_QUOTES, 'UTF-8'); ?></h1></a><?php else: ?><h1 class="page-title"><?php echo htmlspecialchars($title, ENT_QUOTES, 'UTF-8'); ?></h1><?php endif; ?><?php else: ?><h1 class="page-title"><?php echo htmlspecialchars($page->title(), ENT_QUOTES, 'UTF-8'); ?></h1><?php endif; ?></div><!-- Program subtitles--><?php if (isset($subtitle)): ?><?php snippet('svg-thin-hr'); ?><div class="container subtitle-height"><div class="page-subtitle"><?php echo htmlspecialchars($subtitle, ENT_QUOTES, 'UTF-8'); ?></div></div><?php endif; ?></div>