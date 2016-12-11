
<div class="card__details details <?= $details ?>">
  <?php if($showCategory): ?>
  <?php if(isset($video) && $video === true): ?>
  <div class="category">
    <?php echo 'Festival, ', $card->year(), ', ', $card->program(); ?></div>
  <?php elseif($type == 'blog'): ?>
  <div class="category">
    <?php echo $card->festival(), ', ', $card->program(); ?></div>
  <?php else: ?>
  <div class="category">
    <?php echo $card->category(); ?></div>
  <?php endif; ?>
  <?php endif; ?>
  <?php if(!$titlePositionTop): ?>
  <?php if('' != $card->date() && $type != 'blog' && $date): ?>
  <div class="date">
    <?php echo $card->date('M d, Y'); ?></div>
  <?php endif; ?>
  <?php if('' != $card->subtitle()):	 ?>
  <?php if(!$link): ?>
  <div class="title card__title"><span class="light"><span class="er">
        <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></div>
  <div class="subtitle"><span class="light"><span class="er">
        <?php echo htmlspecialchars($card->subtitle(), ENT_QUOTES, 'UTF-8'); ?></span></span></div>
  <?php else: ?><a href="<?= $card->url() ?>" class="high">
    <div class="title card__title"><span class="light"><span class="er">
          <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></div>
    <div class="subtitle"><span class="light"><span class="er">
          <?php echo htmlspecialchars($card->subtitle(), ENT_QUOTES, 'UTF-8'); ?></span></span></div></a>
  <?php endif; ?>
  <?php else: ?><a href="<?= $card->url() ?>" class="high title card__title"><span class="light"><span class="er">
        <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
  <?php endif; ?>
  <?php endif; ?>
  <?php if($type == 'program' && '' != $card->byline()): ?>
  <div class="byline">
    <?php echo $card->byline(); ?></div>
  <?php endif; ?>
  <?php if('' != $card->artist()):	 ?>
  <div class="artist">
    <?php echo $card->artist(); ?></div>
  <?php endif; ?>
  <?php if($type == 'blog'): ?>
  <div class="date">
    <?php echo $card->date('F jS, Y'), e('' != $card->author(), ' | ' . $card->author()), ' | 0 comments'; ?></div>
  <?php elseif($author):	 ?>
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
  <?php if('' != $card->order1()):	 ?><a href="#" class="high buy-now-button"><span class="light"><span class="er">
        <?php echo $card->order1(), '&nbsp;&#x2192'; ?></span></span></a>
  <?php endif; ?>
  <?php if('' != $card->order2()):	 ?>
  <div href="#" class="buy-now-button"><span class="light"><span class="er">
        <?php echo $card->order2(), '&nbsp;&#x2192'; ?></span></span></div>
  <?php endif; ?>
  <?php if($more_link): ?>
  <?php snippet('more-link', array('link' => $card->url())); ?>
  <?php endif; ?>
</div>