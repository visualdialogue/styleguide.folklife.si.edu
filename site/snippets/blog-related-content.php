
<div class="related-content">
  <h2 class="sidebar-section-title">Related Content</h2>
  <?php if($page->template() == 'article'): ?>
  <!-- blog article sidebar-->
  <ul class="row">
    <?php foreach($page->siblings(false)->visible()->filterBy('tags','basque',',')->limit($limit) as $card): ?>
    <?php snippet('card', array('card' => $card, 'card_classes' => 'col-xs-12 sidebar-card' )); ?>
    <?php endforeach; ?>
  </ul>
  <?php else: ?>
  <!-- program sidebar-->
  <ul class="row">
    <?php foreach($pages->find('blog')->children()->visible()->filterBy('tags','basque',',')->limit($limit) as $card): ?>
    <?php snippet('horizontal-card', array('card' => $card, 'card_classes' => 'col-xs-12 border-top sidebar-card', 'image_col' => 'col-xs-6', 'details_col' => 'col-xs-6', 'excerpt' => 12 )); ?>
    <?php endforeach; ?>
  </ul>
  <?php endif; ?>
</div>