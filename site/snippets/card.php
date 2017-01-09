
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php else: ?>
<?php $image = null; ?>
<?php endif; ?>
<li class="card <? if (isset($card_classes)) echo $card_classes . ' ' ?><? if ($card->type() == 'audio') echo ' audio-card' ?><? if ($card->type() == 'video') echo ' video-card' ?>">
  <?php if ($card->type() == 'video'): ?>
  <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= excerpt($card->copy(), 25, "words") ?> <a href='#'>more</a>" class="video">
    <div class="center-box">
      <div class="modal-trigger"><img src="<?= $image->url() ?>" alt="<?= $card->title() ?>"/></div>
      <div class="icon-play-button"></div>
    </div>
  </div>
  <?php elseif($image): ?>
  <div class="image">
    <?php if (null != $card->url()): ?><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>" alt="<?= $card->title() ?>" class="<? if (isset($image_class)) echo $image_class ?>"/></a>
    <?php else: ?><a href="#"><img src="<?= $image->url() ?>" alt="<?= $card->title() ?>"/></a>
    <?php endif; ?>
  </div>
  <?php endif; ?>
  <div class="details">
    <div class="details-inner clearfix">
      <?php if('' != $card->category()):	 ?>
      <div class="tag">
        <?php echo $card->category(); ?></div>
      <?php endif; ?>
      <?php if (isset($date) && isset($time)): ?>
      <div class="tag">
        <?php echo $card->date('M d, Y'), '<br />', $card->time(); ?></div>
      <?php elseif (isset($date)): ?>
      <div class="tag">
        <?php echo $card->date('F j'); ?></div>
      <?php elseif (isset($year)): ?>
      <div class="tag year">
        <?php echo $year; ?></div>
      <?php endif; ?>
      <?php if('' != $card->subtitle()):	 ?><a href="<?= $card->url() ?>" class="high">
        <div class="title"><span class="light"><span class="er">
              <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></div>
        <div class="subtitle"><span class="light"><span class="er">
              <?php echo htmlspecialchars($card->subtitle(), ENT_QUOTES, 'UTF-8'); ?></span></span></div></a>
      <?php else: ?><a href="<?= $card->url() ?>" class="high title"><span class="light"><span class="er">
            <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
      <?php endif; ?>
      <?php if('' != $card->audio_album()): ?>
      <div class="subtitle">
        <?php echo $card->audio_album(); ?></div>
      <?php endif; ?>
      <?php if (isset($blurb)): ?>
      <div class="description link-underline blurb">
        <?php echo $card->blurb()->kt(); ?></div>
      <?php endif; ?>
      <?php if (isset($excerpt)): ?>
      <div class="description link-underline">
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
      <div class="audio-player"><audio class="mejs-player" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'></div>
      <?php endif; ?>
    </div>
  </div>
</li>