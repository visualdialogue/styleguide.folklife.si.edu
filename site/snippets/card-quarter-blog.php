
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card col-sm-3 border-top blog-card <? if ($card->type() == 'video' || ((isset($type)) && ($type == 'video'))) echo 'video-card'?>">
  <div class="card-inner">
    <div class="details">
      <div class="details-inner">
        <div class="date">
          <?php echo $card->date('M d, Y'); ?></div><a href="<?= $card->url() ?>" class="high title"><span class="light"><span class="er">
              <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
      </div>
    </div>
    <?php if ($card->type() == 'video'): ?>
    <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= excerpt($card->copy(), 25, "words") ?> <a href='#'>more</a>" class="video">
      <div class="center-box">
        <div class="modal-trigger"><img src="<?= $image->url() ?>"/></div>
        <div class="icon-play-button video-icon-play-button icon-stack">
          <div class="icon-circle"></div>
          <div class="icon-play"></div>
        </div>
      </div>
    </div>
    <?php else: ?>
    <div class="image"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>"/></a></div>
    <?php endif; ?>
  </div>
</li>