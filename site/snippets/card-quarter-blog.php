
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card col-sm-3 border-top <? if ($card->type() == 'video' || ((isset($type)) && ($type == 'video'))) echo 'card-video'?>">
  <div class="card__inner">
    <div class="details">
      <div class="details__inner">
        <div class="date">
          <?php echo $card->date('M d, Y'); ?></div><a href="<?= $card->url() ?>" class="high title card__title"><span class="light"><span class="er">
              <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
      </div>
    </div>
    <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= $card->copy() ?>" class="video">
      <div class="center-box">
        <div class="modal-trigger"><img src="<?= $image->url() ?>" class="card__image"/></div>
        <div class="icon-play-button icon-play-button--video icon-stack">
          <div class="icon-circle"></div>
          <div class="icon-play"></div>
        </div>
      </div>
    </div>
    <div class="image"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>" class="card__image"/></a></div>
  </div>
</li>