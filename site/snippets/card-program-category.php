
<?php if ('' != $card->banner_img()): ?>
<?php $image = $card->image($card->banner_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card col-xs-12">
  <div class="image">
    <figure><img src="<?= $image->url() ?>" class="ms-header-image"/>
      <?php if($caption = $page->img_caption()): ?>
      <figcaption>
        <?php echo $caption; ?></figcaption>
      <?php endif; ?>
    </figure>
  </div>
  <div class="details">
    <div class="details-inner">
      <div class="title">
        <?php echo $card->subtitle(); ?></div>
      <div class="byline">
        <?php echo $card->byline(); ?></div>
      <div class="description link-underline blurb">
        <?php echo $card->blurb()->kt(); ?></div>
    </div>
  </div>
</li>