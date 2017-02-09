
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card blog-article-card col-xs-12 <? if ($card->type() == 'video') echo 'video-card' ?> <? if (isset($card_classes)) echo $card_classes ?>">
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
        <?php echo $card->category(); ?></div>
      <?php if('' != $card->subtitle()): ?>
      <div class="title">
        <?php echo $card->title(), ': ', $card->subtitle(); ?></div>
      <?php else: ?>
      <div class="title">
        <?php echo $card->title(); ?></div>
      <?php endif; ?>
      <div class="author">
        <?php echo 'by ', $card->author(); ?></div>
    </div>
  </div>
</li>