
<div class="related-content sidebar-section">
  <h2 class="sidebar-section-title related-content-title">Related Content</h2>
  <?php if($page->template() == 'blog-article'): ?>
  <!-- blog article sidebar-->
  <ul class="row">
    <?php foreach($page->siblings(false)->visible()->filterBy('tags','basque',',')->limit(3) as $card): ?>
    <?php snippet('card', array('card' => $card, 'card_classes' => 'col-xs-12 sidebar-card' )); ?>
    <?php endforeach; ?>
  </ul>
  <?php elseif($page->template() == 'magazine-article'): ?>
  <!-- magazine article sidebar-->
  <ul class="row">
    <?php foreach($pages->find('blog')->children()->visible()->limit(3) as $card): ?>
    <?php snippet('card-horizontal', array('card' => $card, 'card_classes' => 'col-xs-12 top-border-card sidebar-card horizontal-card', 'image_col' => 'col-xs-6', 'details_col' => 'col-xs-6', 'excerpt' => 12 )); ?>
    <?php endforeach; ?>
  </ul>
  <?php else: ?>
  <!-- program sidebar-->
  <ul class="row">
    <?php foreach($pages->find('blog')->children()->visible()->filterBy('tags','basque',',')->limit($limit) as $card): ?>
    <?php snippet('card-horizontal', array('card' => $card, 'card_classes' => 'col-xs-12 top-border-card sidebar-card horizontal-card', 'image_col' => 'col-xs-6', 'details_col' => 'col-xs-6', 'excerpt' => 12 )); ?>
    <?php endforeach; ?>
  </ul>
  <?php endif; ?>
</div>