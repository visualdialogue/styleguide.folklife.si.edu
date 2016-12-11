<a href="<? if(isset($link)) echo $link ?>" class="high more-link <? if(isset($class)) echo $class ?>">
  <div class="light">
    <div class="er">
      <?php if(isset($text)): ?>
      <div class="more-link__text">
        <?php echo $text; ?></div>
      <?php else: ?>
      <div class="more-link__text">more</div>
      <?php endif; ?>
      <div class="more-link__arrow">&#x2192;</div>
    </div>
  </div></a>