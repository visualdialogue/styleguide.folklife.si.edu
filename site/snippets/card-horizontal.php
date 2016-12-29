
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card <?= $card_classes ?><? if ($card->type() == 'video') echo ' video-card' ?>">
  <div class="row">
    <?php if ($card->type() == 'video'): ?>
    <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= excerpt($card->copy(), 25, "words") ?> <a href='#'>more</a>" class="video <?= $image_col ?>">
      <div class="center-box">
        <div class="modal-trigger"><img src="<?= $image->url() ?>"/></div>
        <div class="icon-play-button video-icon-play-button icon-stack">
          <div class="icon-circle"></div>
          <div class="icon-play"></div>
        </div>
      </div>
    </div>
    <?php else: ?>
    <div class="image <?= $image_col ?>">
      <?php if (null != $card->url()): ?><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>"/></a>
      <?php else: ?><a href="#"><img src="<?= $image->url() ?>"/></a>
      <?php endif; ?>
    </div>
    <?php endif; ?>
    <div class="details <?= $details_col ?>">
      <div class="details-inner">
        <?php if('' != $card->category()):	 ?>
        <div class="tag">
          <?php echo $card->category(); ?></div>
        <?php endif; ?>
        <?php if (isset($date) && isset($time)): ?>
        <div class="tag">
          <?php echo $card->date('M d, Y'), '<br />', $card->time(), ' PM'; ?></div>
        <?php elseif (isset($date)): ?>
        <div class="tag">
          <?php echo $card->date('F j, Y'); ?></div>
        <?php endif; ?>
        <?php if('' != $card->subtitle() && $page->intendedTemplate() != 'magazine'):	 ?><a href="<?= $card->url() ?>" class="high">
          <div class="title"><span class="light"><span class="er">
                <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></div>
          <div class="subtitle"><span class="light"><span class="er">
                <?php echo htmlspecialchars($card->subtitle(), ENT_QUOTES, 'UTF-8'); ?></span></span></div></a>
        <?php else: ?><a href="<?= $card->url() ?>" class="high title"><span class="light"><span class="er">
              <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
        <?php endif; ?>
        <?php if (isset($artist)): ?>
        <div class="artist">
          <?php echo $card->artist()->kt(); ?></div>
        <?php endif; ?>
        <?php if (isset($blurb)): ?>
        <div class="description link-underline blurb">
          <?php echo $card->blurb()->kt(); ?></div>
        <?php endif; ?>
        <?php if (isset($excerpt)): ?>
        <div class="description link-underline">
          <p>
            <?php echo excerpt($card->copy()->kt(), $excerpt, 'words'); ?></p>
          <p>
            <?php echo excerpt($card->contents()->kt(), $excerpt, 'words') ; ?></p>
        </div>
        <?php endif; ?>
        <?php if (isset($more_link)): ?>
        <?php snippet('more-link', array('link' => $card->url())); ?>
        <?php endif; ?>
        <?php if (isset($simple_more_link)): ?><a href="#" class="simple-more-link">more</a>
        <?php endif; ?>
      </div>
    </div>
  </div>
</li>