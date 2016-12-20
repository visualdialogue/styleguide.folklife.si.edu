
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card card-video <?= $card_classes ?>">
  <div class="row">
    <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= $card->copy() ?>" class="video <?= $video_col ?>">
      <div class="center-box">
        <div class="modal-trigger"><img src="<?= $image->url() ?>"/></div>
        <div class="icon-play-button video-icon-play-button icon-stack">
          <div class="icon-circle"></div>
          <div class="icon-play"></div>
        </div>
      </div>
    </div>
    <div class="details <?= $details_col ?>">
      <div class="details-inner">
        <div class="tag">
          <?php echo $card->category(); ?></div><a href="<?= $card->url() ?>" class="high title"><span class="light"><span class="er">
              <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
        <div class="description link-underline">
          <p>
            <?php echo excerpt($card->copy()->kt(), '20', 'words'); ?></p>
        </div>
      </div>
    </div>
  </div>
</li>