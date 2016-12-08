
<div class="card__details details <?= $details ?>">
  <?php if($showCategory): ?>
  <?php if(isset($video) && $video === true): ?>
  <div class="category">
    <?php echo 'Festival, ', $card->year(), ', ', $card->program(); ?></div>
  <?php else: ?>
  <div class="category">
    <?php echo $card->category(); ?></div>
  <?php endif; ?>
  <?php endif; ?>
  <?php if('' != $card->date()): ?>
  <div class="date">
    <?php echo $card->date('M d, Y'); ?></div>
  <?php endif; ?>
  <div class="title card__title">
    <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></div>
  <?php if('' != $card->subtitle()):	 ?>
  <div class="subtitle">
    <?php echo $card->subtitle(); ?></div>
  <?php endif; ?>
  <?php if('' != $card->artist()):	 ?>
  <div class="artist">
    <?php echo $card->artist(); ?></div>
  <?php endif; ?>
  <?php if('' != $card->author()):	 ?>
  <div class="author">
    <?php echo $card->author(); ?></div>
  <?php endif; ?>
  <?php if('' != $card->price()):	 ?>
  <div class="price">
    <?php echo '$', $card->price(); ?></div>
  <?php endif; ?>
  <?php if (isset($blurb)): ?>
  <div class="description card__description link-underline blurb">
    <?php echo $card->blurb()->kt(); ?></div>
  <?php endif; ?>
  <?php if (isset($excerpt)): ?>
  <div class="description card__description link-underline">
    <p>
      <?php echo excerpt($card->copy()->kt(), $excerpt, 'words'); ?></p>
  </div>
  <?php endif; ?>
  <?php if('' != $card->order1()):	 ?>
  <div class="buy-now-button">
    <?php echo $card->order1(), '&nbsp;&#x2192'; ?></div>
  <?php endif; ?>
  <?php if('' != $card->order2()):	 ?>
  <div class="buy-now-button">
    <?php echo $card->order2(), '&nbsp;&#x2192'; ?></div>
  <?php endif; ?>
</div>