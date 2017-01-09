
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card video-card <?= $card_classes ?>">
  <div class="row">
    <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= excerpt($card->copy(), 25, "words") ?> <a href='#'>more</a>" class="video <?= $video_col ?>">
      <div class="center-box">
        <div class="modal-trigger"><img src="<?= $image->url() ?>" alt="<?= $card->title() ?>"/></div>
        <div class="icon-play-button"></div>
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