
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card <?= $card_classes ?>"><a href="<?= $card->url() ?>" class="high title card__title"><span class="light"><span class="er">
        <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
  <div class="image"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>" class="card__image"/></a></div>
  <div class="details">
    <div class="details__inner">
      <div class="category">
        <?php echo $card->category(); ?></div>
      <div class="description card__description link-underline">
        <p>
          <?php echo excerpt($card->copy()->kt(), $excerpt, 'words'); ?></p>
      </div>
    </div>
  </div>
</li>