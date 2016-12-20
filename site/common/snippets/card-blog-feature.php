
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card blog-feature col-xs-12">
  <div class="image"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>"/></a></div>
  <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= $card->copy() ?>" class="video">
    <div class="center-box">
      <div class="modal-trigger"><img src="<?= $image->url() ?>"/></div>
      <div class="icon-play-button video-icon-play-button icon-stack">
        <div class="icon-circle"></div>
        <div class="icon-play"></div>
      </div>
    </div>
  </div>
  <div class="details">
    <div class="details-inner">
      <div class="tag">
        <?php echo $card->festival(), ', ', $card->program(); ?></div><a href="<?= $card->url() ?>" class="high title"><span class="light"><span class="er">
            <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
      <div class="date">
        <?php echo $card->date('F jS, Y'), e('' != $card->author(), ' | ' . $card->author()), ' | 0 comments'; ?></div>
      <div class="description link-underline">
        <p>
          <?php echo excerpt($card->copy()->kt(), 55, 'words'); ?></p>
      </div>
      <?php snippet('more-link', array('link' => $card->url())); ?>
    </div>
  </div>
</li>