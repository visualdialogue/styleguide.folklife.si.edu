
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card card-horizontal <? if (isset($card_classes)) echo $card_classes ?> <? if ($card->type() == 'audio') echo 'card-audio' ?>">
  <div class="image"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>" class="card__image"/></a></div>
  <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= $card->copy() ?>" class="video">
    <div class="center-box">
      <div class="modal-trigger"><img src="<?= $image->url() ?>" class="card__image"/></div>
      <div class="icon-play-button icon-play-button--video icon-stack">
        <div class="icon-circle"></div>
        <div class="icon-play"></div>
      </div>
    </div>
  </div>
  <div class="details">
    <div class="details__inner">
      <div class="category">
        <?php echo $card->category(); ?></div>
      <?php if (isset($date) && isset($time)): ?>
      <div class="tag">
        <?php echo $card->date('M d, Y'), '<br />', $card->time(); ?></div>
      <?php elseif (isset($date)): ?>
      <div class="tag">
        <?php echo $card->date(); ?></div>
      <?php endif; ?><a href="<?= $card->url() ?>" class="high title card__title"><span class="light"><span class="er">
            <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
      <?php if (isset($blurb)): ?>
      <div class="description card__description link-underline blurb">
        <?php echo $card->blurb()->kt(); ?></div>
      <?php endif; ?>
      <?php if (isset($excerpt)): ?>
      <div class="description card__description link-underline">
        <p>
          <?php echo excerpt($card->copy()->kt(), $excerpt, 'words'); ?></p>
      </div>
      <?php endif; ?>
      <?php if (isset($more_link)): ?>
      <?php snippet('more-link', array('link' => $card->url())); ?>
      <?php endif; ?>
      <?php if(isset($album)): ?>
      <div class="subtitle">
        <?php echo $card->audio_album(); ?></div>
      <?php endif; ?>
      <?php if (isset($artist)): ?>
      <div class="artist">
        <?php echo $card->artist()->kt(); ?></div>
      <?php endif; ?>
      <?php if ($card->type() == 'audio'): ?>
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
      <?php endif; ?>
    </div>
  </div>
</li>