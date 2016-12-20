
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card horizontal-card <?= $card_classes ?>">
  <div class="row">
    <div class="image <?= $image_col ?>"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>"/></a></div>
    <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= $card->copy() ?>" class="video">
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
          <?php echo $card->category(); ?></div>
        <?php if (isset($date) && isset($time)): ?>
        <div class="tag">
          <?php echo $card->date('M d, Y'), '<br />', $card->time(); ?></div>
        <?php elseif (isset($date)): ?>
        <div class="tag">
          <?php echo $card->date(); ?></div>
        <?php endif; ?>
        <?php if('' != $card->subtitle()):	 ?><a href="<?= $card->url() ?>" class="high">
          <div class="title"><span class="light"><span class="er">
                <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></div>
          <div class="subtitle"><span class="light"><span class="er">
                <?php echo htmlspecialchars($card->subtitle(), ENT_QUOTES, 'UTF-8'); ?></span></span></div></a>
        <?php else: ?><a href="<?= $card->url() ?>" class="high title"><span class="light"><span class="er">
              <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
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
      </div>
    </div>
  </div>
</li>