
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card col-xs-12">
  <div class="image"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>"/></a></div>
  <div class="details">
    <div class="details-inner">
      <div class="title">
        <?php echo $card->title(); ?></div>
      <div class="byline">
        <?php echo $card->byline(); ?></div>
      <div class="description link-underline blurb">
        <?php echo $card->blurb()->kt(); ?></div>
    </div>
  </div>
</li>