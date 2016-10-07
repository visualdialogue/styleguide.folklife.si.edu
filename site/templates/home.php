
<?php snippet('header'); ?>
<section class="container">
  <h2 class="section__title">Watch</h2>
  <ul class="row">
    <?php foreach ($page->video_data()->toStructure() as $video): ?>
    <?php if($src = $page->image($video->src())): ?>
    <li class="col-sm-4"><img src="<?= $src->url() ?>" class="item__image"/>
      <div class="item__details">
        <div class="item__category">
          <?php echo $video->category(); ?></div>
        <div class="item__title--serif">
          <?php echo $video->title(); ?></div>
      </div>
    </li>
    <?php endif; ?>
    <?php endforeach; ?>
  </ul>
</section>
<div class="container">
  <hr class="hr--folklife"/>
</div>
<section class="container">
  <h2 class="section__title">Listen</h2>
  <ul class="row">
    <?php foreach ($page->audio_data()->toStructure() as $audio): ?>
    <?php if($src = $page->image($audio->src())): ?>
    <li class="col-xs-6 col-sm-3">
      <div class="audio__block"><img src="<?= $src->url() ?>" class="item__image"/>
        <div class="item__details item__details--audio">
          <div class="item__category">
            <?php echo $audio->category(); ?></div>
          <div class="item__title--sans">
            <?php echo $audio->title(); ?></div>
          <div class="item__subtitle--sans album-title">
            <?php echo $audio->album(); ?></div>
          <div class="audio-player">
            <div class="play-button"></div>
            <div class="audio-player__details">
              <div class="audio-progress-bar"></div>
              <div class="audio-time">0:00 &vert;
                <?php echo $audio->length(); ?>
              </div>
              <div class="volume"></div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <?php endif; ?>
    <?php endforeach; ?>
  </ul>
</section>
<div class="container">
  <hr class="hr--folklife"/>
</div>
<section class="container">
  <h2 class="section__title">Participate</h2>
  <ul class="row">
    <?php foreach ($page->events()->toStructure() as $event): ?>
    <?php if($src = $page->image($event->src())): ?>
    <li class="col-xs-6 col-sm-3"><img src="<?= $src->url() ?>" class="item__image"/>
      <div class="item__details">
        <div class="item__date">
          <?php echo $event->event_date(); ?></div>
        <div class="item__title--sans--alt">
          <?php echo $event->title(); ?></div>
      </div>
    </li>
    <?php endif; ?>
    <?php endforeach; ?>
  </ul>
</section>
<section class="container section--talk-story">
  <h2 class="section__title">Talk Story</h2>
  <div class="row">
    <div class="col-sm-8 talk-story__feature clearfix">
      <div class="talk-story__feature__inner">
        <?php if($src = $page->image($page->talk_story_feature_image())): ?><img src="<?= $src->url() ?>"/>
        <?php endif; ?>
        <div class="banner__textbox talk-story__textbox">
          <div class="item__category">
            <?php echo $page->talk_story_feature_category(); ?></div>
          <div class="talk-story__textbox__title">
            <?php echo $page->talk_story_feature_title(); ?></div>
          <div class="talk-story__textbox__subtitle">
            <?php echo $page->talk_story_feature_subtitle(); ?></div>
        </div>
      </div>
    </div>
    <ul class="col-sm-4">
      <li class="talkstory__feature row"><img src="/assets/images/placeholder/220x165.png" class="col-sm-6"/>
        <div class="col-sm-6 talkstory__feature__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </li>
      <li class="talkstory__feature row"><img src="/assets/images/placeholder/220x165.png" class="col-sm-6"/>
        <div class="col-sm-6 talkstory__feature__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </li>
      <li class="talkstory__feature row"><img src="/assets/images/placeholder/220x165.png" class="col-sm-6"/>
        <div class="col-sm-6 talkstory__feature__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </li>
    </ul>
  </div>
</section>
<?php snippet('footer'); ?>