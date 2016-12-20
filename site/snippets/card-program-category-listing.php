
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card card-horizontal col-xs-12">
  <div class="row">
    <div class="image col-sm-7">
      <figure><img src="<?= $src->url() ?>" class="ms-header-image"/>
        <?php if($caption = $page->img_caption()->kt()): ?>
        <figcaption>
          <?php echo $caption; ?></figcaption>
        <?php endif; ?>
      </figure>
    </div>
    <div class="details col-sm-5">
      <div class="details-inner"><a href="<?= $card->url() ?>" class="high subtitle"><span class="light"><span class="er">
              <?php echo htmlspecialchars($card->subtitle(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
        <div class="byline">
          <?php echo $card->byline(); ?></div>
        <div class="description link-underline blurb">
          <?php echo $card->blurb()->kt(); ?></div>
        <?php snippet('more-link', array('link' => $card->url())); ?>
      </div>
    </div>
  </div>
</li>