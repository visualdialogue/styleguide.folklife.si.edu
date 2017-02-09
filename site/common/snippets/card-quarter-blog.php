
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card col-sm-3 top-border-card blog-card <? if ($card->type() == 'video' || ((isset($type)) && ($type == 'video'))) echo 'video-card'?>">
  <div class="card-inner">
    <div class="details mh-fs-quarter-blog">
      <div class="details-inner">
        <div class="date">
          <?php echo $card->date('M d, Y'); ?></div><a href="<?= $card->url() ?>" class="high title"><span class="light"><span class="er">
              <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
      </div>
    </div>
    <?php if ($card->type() == 'video'): ?>
    <div data-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= excerpt($card->copy(), 25, "words") ?> <a href='#'>more</a>" class="video">
      <div class="center-box">
        <div class="modal-trigger"><img src="<?= $image->url() ?>" alt="<?= $card->title() ?>"/></div>
        <div class="icon-play-button"></div>
      </div>
    </div>
    <?php else: ?>
    <div class="image"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>" alt="<?= $card->title() ?>"/></a></div>
    <?php endif; ?>
  </div>
</li>