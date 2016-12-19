
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card card-horizontal col-xs-12 border-top">
  <div class="row">
    <div class="image col-sm-6"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>" class="card__image"/></a></div>
    <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= $card->copy() ?>" class="video">
      <div class="center-box">
        <div class="modal-trigger"><img src="<?= $image->url() ?>" class="card__image"/></div>
        <div class="icon-play-button icon-play-button--video icon-stack">
          <div class="icon-circle"></div>
          <div class="icon-play"></div>
        </div>
      </div>
    </div>
    <div class="details col-sm-6">
      <div class="details__inner">
        <div class="category">
          <?php echo $card->festival(), ', ', $card->program(); ?></div><a href="<?= $card->url() ?>" class="high title card__title"><span class="light"><span class="er">
              <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
        <div class="date">
          <?php echo $card->date('F jS, Y'), e('' != $card->author(), ' | ' . $card->author()), ' | 0 comments'; ?></div>
        <div class="description card__description link-underline">
          <p>
            <?php echo excerpt($card->copy()->kt(), 25, 'words'); ?></p>
        </div>
        <?php snippet('more-link', array('link' => $card->url())); ?>
      </div>
    </div>
  </div>
</li>