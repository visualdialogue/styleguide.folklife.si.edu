
<?php snippet('header'); ?>
<section class="container">
  <h2 class="section__title">Watch</h2>
  <ul class="row">
    <?php foreach ($page->video_data()->toStructure() as $video): ?>
    <?php if($src = $page->image($video->src())): ?>
    <li class="col-sm-4"><img src="<?= $src->url() ?>" class="item__image"/>
      <div class="item__category">
        <?php echo $video->category(); ?></div>
      <div class="item__title--serif">
        <?php echo $video->title(); ?></div>
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
    <li class="col-sm-3"><img src="<?= $src->url() ?>" class="item__image"/>
      <div class="item__category">
        <?php echo $audio->category(); ?></div>
      <div class="item__title--sans">
        <?php echo $audio->title(); ?></div>
      <div class="item__subtitle--sans">
        <?php echo $audio->album(); ?></div>
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
    <li><img src="/assets/images/placeholder/320x320.png" class="col-sm-3"/></li>
    <li><img src="/assets/images/placeholder/320x320.png" class="col-sm-3"/></li>
    <li><img src="/assets/images/placeholder/320x320.png" class="col-sm-3"/></li>
    <li><img src="/assets/images/placeholder/320x320.png" class="col-sm-3"/></li>
  </ul>
</section>
<section class="container">
  <h2 class="section__title">Talkstory</h2>
  <div class="row"><img src="/assets/images/placeholder/919x582.png" class="col-sm-8"/>
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