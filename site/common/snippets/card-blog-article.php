
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card blog-article-card col-xs-12 <? if ($card->type() == 'video') echo 'video-card' ?> <? if (isset($card_classes)) echo $card_classes ?>">
  <div class="image"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>" alt="<?= $card->title() ?>"/></a></div>
  <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= excerpt($card->copy(), 25, "words") ?> <a href='#'>more</a>" class="video">
    <div class="center-box">
      <div class="modal-trigger"><img src="<?= $image->url() ?>" alt="<?= $card->title() ?>"/></div>
      <div class="icon-play-button video-icon-play-button icon-stack">
        <div class="icon-circle"></div>
        <div class="icon-play"></div>
      </div>
    </div>
  </div>
  <div class="details">
    <div class="details-inner">
      <?php if(isset($type) && $type != 'general-content'): ?>
      <div class="tag">
        <?php echo $card->festival(), ', ', $card->program(); ?></div>
      <?php endif; ?>
      <?php if('' != $card->subtitle()):	 ?>
      <div class="title">
        <?php echo $card->title(), ': ', $card->subtitle(); ?></div>
      <?php else: ?>
      <div class="title">
        <?php echo $card->title(); ?></div>
      <?php endif; ?>
      <?php if(isset($type) && $type != 'general-content'): ?>
      <div class="byline">
        <?php echo $card->date('F jS, Y'), e('' != $card->author(), ' | ' . $card->author()), ' | 0 comments'; ?></div>
      <?php endif; ?>
    </div>
  </div>
</li>