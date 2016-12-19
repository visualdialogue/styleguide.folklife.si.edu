
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card card-audio">
  <div class="image"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>"/></a></div>
  <div class="details">
    <div class="details__inner">
      <div class="category card__category">
        <?php echo $card->category() ; ?></div>
      <div class="title-wrapper card__title-wrapper"><a href="<?= $card->url() ?>" class="high title"><span class="light"><span class="er">
              <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
        <?php if('' != $card->audio_album()): ?>
        <div class="subtitle">
          <?php echo $card->audio_album(); ?></div>
        <?php endif; ?>
        <div class="artist">
          <?php echo $card->artist()->kt(); ?></div>
      </div>
      <div class="audio-player">
        <div class="icon-play-button icon-stack">
          <div class="icon-circle"></div>
          <div class="icon-play"></div>
        </div>
        <div class="audio-player__details">
          <div class="audio-progress-bar"><img src="/assets/images/icons/audio-progress-bar.png"/></div>
          <div class="audio-time">0:00 &vert;&nbsp;
            <?php echo $card->audio_length(); ?>
          </div>
          <div class="volume icon-volume-up"></div>
        </div>
      </div>
    </div>
  </div>
</li>