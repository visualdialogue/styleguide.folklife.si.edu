
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card feature col-xs-12">
  <div class="image"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>" alt="<?= $card->title() ?>"/></a></div>
  <div data-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= excerpt($card->copy(), 25, "words") ?> <a href='#'>more</a>" class="video">
    <div class="center-box">
      <div class="modal-trigger"><img src="<?= $image->url() ?>" alt="<?= $card->title() ?>"/></div>
      <div class="icon-play-button"></div>
    </div>
  </div>
  <div class="details">
    <div class="details-inner">
      <div class="tag">
        <?php echo $card->festival(), ', ', $card->program(); ?></div><a href="<?= $card->url() ?>" class="high title"><span class="light"><span class="er">
            <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
      <div class="byline">
        <?php echo $card->date('F jS, Y'), e('' != $card->author(), ' | ' . $card->author()), ' | 0 comments'; ?></div>
      <div class="description link-underline">
        <p>
          <?php echo excerpt($card->copy()->kt(), 55, 'words'); ?></p>
      </div>
      <?php snippet('more-link', array('link' => $card->url())); ?>
    </div>
  </div>
</li>