
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php else: ?>
<?php $image = null; ?>
<?php endif; ?>
<li class="card album-card">
  <div class="image"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>"/></a></div>
  <div class="details">
    <div class="details-inner"><a href="<?= $card->url() ?>" class="high title"><span class="light"><span class="er">
            <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
      <div class="artist">
        <?php echo $card->artist()->kt(); ?></div>
    </div>
  </div>
</li>