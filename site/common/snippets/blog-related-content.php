
<div class="related-content">
  <h2 class="sidebar__section-title">Related Content</h2>
  <?php if($page->template() == 'article'): ?>
  <!-- blog article sidebar-->
  <ul class="row cards cards--sidebar">
    <?php foreach($page->siblings(false)->visible()->filterBy('tags','basque',',')->limit($limit) as $card): ?>
    <?php snippet('card', array('card' => $card, 'card_classes' => 'col-xs-12' )); ?>
    <?php endforeach; ?>
  </ul>
  <?php else: ?>
  <!-- program sidebar-->
  <ul class="row cards cards--horizontal cards--border-top cards--sidebar cards--image-xs-6">
    <?php foreach($pages->find('blog')->children()->visible()->filterBy('tags','basque',',')->limit($limit) as $card): ?>
    <?php snippet('card-horizontal', array('card' => $card, 'card_classes' => 'col-xs-12 border-top', 'image_col' => 'col-xs-6', 'details_col' => 'col-xs-6', 'excerpt' => 12 )); ?>
    <?php endforeach; ?>
  </ul>
  <?php endif; ?>
</div>