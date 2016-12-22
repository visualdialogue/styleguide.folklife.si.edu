
<?php if ('' != $card->thumbnail_img()): ?>
<?php $image = $card->image($card->thumbnail_img()); ?>
<?php elseif($src = $card->image()): ?>
<?php $image = $src; ?>
<?php endif; ?>
<li class="card col-sm-6 publication-card top-border-card">
  <div class="row">
    <div class="image col-xs-4"><a href="<?= $card->url() ?>"><img src="<?= $image->url() ?>"/></a></div>
    <div class="details col-xs-8">
      <div class="details-inner"><a href="<?= $card->url() ?>" class="high title"><span class="light"><span class="er">
              <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
        <div class="author">
          <?php echo $card->author(); ?></div>
        <?php if('' != $card->order1()):	 ?><a href="#" class="high buy-now-button"><span class="light"><span class="er">
              <?php echo $card->order1(), '&nbsp;&#x2192'; ?></span></span></a>
        <?php endif; ?>
        <?php if('' != $card->order2()):	 ?><a href="#" class="high buy-now-button"><span class="light"><span class="er">
              <?php echo $card->order2(), '&nbsp;&#x2192'; ?></span></span></a>
        <?php endif; ?>
      </div>
    </div>
  </div>
</li>