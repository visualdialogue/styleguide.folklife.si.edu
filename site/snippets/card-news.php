
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php else: ?>
<?php $image = null; ?>
<?php endif; ?>
<li class="card news-card <? if (isset($card_classes)) echo $card_classes . ' ' ?>">
  <div class="image"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>" alt="<?= $card->title() ?>"/></a></div>
  <div class="details">
    <div class="details-inner">
      <div class="date">
        <?php echo $card->date('n.j.Y'); ?></div><a href="<?= $card->url() ?>" class="high title"><span class="light"><span class="er">
            <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
    </div>
  </div>
</li>