
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card blog-article col-xs-12 <? if ($card->type() == 'video') echo 'card-video' ?>">
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
      <div class="category">
        <?php echo $card->festival(), ', ', $card->program(); ?></div>
      <div class="title">
        <?php echo $card->title(); ?></div>
      <div class="date">
        <?php echo $card->date('F jS, Y'), e('' != $card->author(), ' | ' . $card->author()), ' | 0 comments'; ?></div>
    </div>
  </div>
</li>