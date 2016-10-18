<?php snippet('header'); ?><div id="navspacer" class="navspacer"></div><section class="section--banner"><div id="banner-carousel" class="banner-carousel"><div class="banner-slide"><img src="assets/images/banner/banner-01.jpg"/><div class="textbox"><div class="details details--inset"><div class="category">Folklife</div><div class="title">Turquoise Mountain Showcases Cultural Sustainability</div><div class="dots"></div></div></div></div><div class="banner-slide"><img src="assets/images/banner/banner-02.jpg"/><div class="textbox"><div class="details details--inset"><div class="category">Festival</div><div class="title">Circus Arts <br/>at the 2017 Folklife Festival</div><div class="dots"></div></div></div></div><div class="banner-slide"><img src="assets/images/banner/banner-03.jpg"/><div class="textbox"><div class="details details--inset"><div class="category">Folkways</div><div class="title">Freedom Sounds from Smithsonian Folkways</div><div class="dots"></div></div></div></div><div class="banner-slide"><img src="assets/images/banner/banner-04.jpg"/><div class="textbox"><div class="details details--inset"><div class="category">Folklife</div><div class="title">Grand Opening of the National Museum <br />of African American History and Culture</div><div class="dots"></div></div></div></div></div><div class="banner__nav--mobile"><div class="textbox--mobile"><div class="category">Folklife</div><div class="title">Turquoise Mountain Showcases Cultural Sustainability</div><div class="dots"></div></div><div class="textbox--mobile"><div class="category">Festival</div><div class="title">Circus Arts at the <br/>2017 Folklife Festival</div><div class="dots"></div></div><div class="textbox--mobile"><div class="category">Folkways</div><div class="title">Freedom Sounds <br />from Smithsonian Folkways</div><div class="dots"></div></div><div class="textbox--mobile"><div class="category">Folklife</div><div class="title">Grand Opening of the National Museum of African American History and Culture</div><div class="dots"></div></div></div><div class="dots--mobile"></div></section><section class="section--video container"><h2 class="section__title">Watch</h2><ul class="row"><?php foreach ($page->video_data()->toStructure() as $video): ?><li class="col-sm-4"><?php if($video->iframe()->isNotEmpty()): ?><div class="iframe-wrapper"><?php echo $video->iframe(); ?></div><?php elseif($src = $page->image($video->src())): ?><img src="<?= $src->url() ?>" class="image"/><?php endif; ?><div class="details"><div class="category"><?php echo $video->category(); ?></div><div class="title"><?php echo $video->title(); ?></div></div></li><?php endforeach; ?></ul></section><div class="container"><hr class="hr--folklife"/></div><section class="section--audio container"><h2 class="section__title">Listen</h2><ul class="row row--listen"><?php foreach ($page->audio_data()->toStructure() as $audio): ?><?php if($src = $page->image($audio->src())): ?><li class="col-xs-6 col-sm-3"><img src="<?= $src->url() ?>"/><div class="details details--inset"><div class="category"><?php echo $audio->category(); ?></div><div class="title-wrapper"><div class="title"><?php echo $audio->title(); ?></div><div class="subtitle"><?php echo $audio->album(); ?></div></div><div class="audio-player"><div class="icon-play-button icon-stack"><div class="icon-circle"></div><div class="icon-play"></div></div><div class="audio-player__details"><div class="audio-progress-bar"></div><div class="audio-time">0:00 &vert;<?php echo $audio->length(); ?></div><div class="volume"></div></div></div></div></li><?php endif; ?><?php endforeach; ?></ul></section><div class="container"><hr class="hr--folklife"/></div><section class="section--participate container"><h2 class="section__title">Participate</h2><?php snippet('more-link'); ?><ul class="row"><?php foreach ($page->events()->toStructure() as $event): ?><?php if($src = $page->image($event->src())): ?><li class="col-xs-6 col-sm-3"><img src="<?= $src->url() ?>"/><div class="details details--participate"><div class="date"><?php echo $event->event_date(); ?></div><div class="title"><?php echo $event->title(); ?></div></div></li><?php endif; ?><?php endforeach; ?></ul></section><section class="container section--talk-story"><h2 class="section__title">Talk Story</h2><div class="row"><div class="col-sm-8 talk-story__feature clearfix"><div class="feature__inner"><?php if($src = $page->image($page->talk_story_feature_image())): ?><img src="<?= $src->url() ?>"/><?php endif; ?><div class="textbox talk-story__textbox"><div class="details details--inset details--tight"><div class="details__inner"><div class="category"><?php echo $page->talk_story_feature_category(); ?></div><div class="title"><?php echo $page->talk_story_feature_title(); ?></div><div class="subtitle"><?php echo $page->talk_story_feature_subtitle(); ?></div></div></div></div></div></div><ul class="col-sm-4 talk-story__featurette-list featurette-list"><?php foreach ($page->talk_story_featurettes()->toStructure() as $featurette): ?><?php if($src = $page->image($featurette->src())): ?><li class="talk-story__featurette featurette"><img src="<?= $src->url() ?>" class="featurette__image"/><div class="featurette__details details details--inset details--tight"><div class="details__inner"><div class="category"><?php echo htmlspecialchars($featurette->category(), ENT_QUOTES, 'UTF-8'); ?></div><div class="title"><?php echo htmlspecialchars($featurette->title(), ENT_QUOTES, 'UTF-8'); ?></div><div class="subtitle"><?php echo htmlspecialchars($featurette->subtitle(), ENT_QUOTES, 'UTF-8'); ?></div></div></div></li><?php endif; ?><?php endforeach; ?></ul></div></section><section class="container section--dive-deep"><h2 class="section__title">Dive Deep</h2><?php snippet('more-link'); ?><div class="row"><div class="col-sm-6 dive-deep__feature clearfix"><div class="feature__inner"><?php if($src = $page->image($page->dive_deep_feature_image())): ?><img src="<?= $src->url() ?>"/><?php endif; ?><div class="textbox dive-deep__textbox"><div class="details details--inset"><div class="category"><?php echo $page->dive_deep_feature_category(); ?></div><div class="title"><?php echo $page->dive_deep_feature_title(); ?></div></div></div></div></div><ul class="col-sm-6 dive-deep__featurette-list featurette-list"><?php foreach ($page->dive_deep_featurettes()->toStructure() as $featurette): ?><?php if($src = $page->image($featurette->src())): ?><li class="dive-deep__featurette featurette"><img src="<?= $src->url() ?>" class="featurette__image"/><div class="featurette__details details details--inset"><div class="category"><?php echo htmlspecialchars($featurette->category(), ENT_QUOTES, 'UTF-8'); ?></div><div class="title"><?php echo htmlspecialchars($featurette->title(), ENT_QUOTES, 'UTF-8'); ?></div></div></li><?php endif; ?><?php endforeach; ?></ul></div></section><div class="container"><hr class="hr--folklife"/></div><div class="container"><div class="row"><section class="col-sm-6 section--vr section--explore-collections explore-collections"><h2 class="section__title">Explore Collections		</h2><?php snippet('more-link'); ?><ul class="row explore-collections__featurette-list"><?php foreach ($page->explore_collections_featurettes()->toStructure() as $featurette): ?><?php if($src = $page->image($featurette->src())): ?><li class="col-xs-6 col-sm-6 explore-collections__featurette"><img src="<?= $src->url() ?>"/><div class="details details--tight"><div class="title"><?php echo htmlspecialchars($featurette->title(), ENT_QUOTES, 'UTF-8'); ?></div></div></li><?php endif; ?><?php endforeach; ?></ul><div class="vertical-rule"></div></section><section class="col-sm-6 section--vr section--teach"><h2 class="section__title">Teach</h2><?php snippet('more-link'); ?><ul class="row teach__featurette-list"><?php foreach ($page->teach_featurettes()->toStructure() as $featurette): ?><?php if($src = $page->image($featurette->src())): ?><li class="col-xs-6 col-sm-4 teach__featurette"><img src="<?= $src->url() ?>"/><div class="details details--tight"><div class="title"><?php echo htmlspecialchars($featurette->title(), ENT_QUOTES, 'UTF-8'); ?></div></div></li><?php endif; ?><?php endforeach; ?></ul></section></div></div><?php snippet('footer'); ?>