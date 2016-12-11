
<div class="related-content">
  <h2 class="blog-sidebar__header">Related Content</h2>
  <ul>
    <?php if($page->template() == 'article'): ?>
    <?php foreach($page->siblings(false)->visible()->filterBy('tags','basque',',')->limit($limit) as $entry): ?>
    <?php snippet('card', array('card' => $entry, 'orientation' => $orientation, 'img_col' => 75, 'border' => true, 'date' => false, 'author' => false )); ?>
    <?php endforeach; ?>
    <?php else: ?>
    <?php foreach($pages->find('blog')->children()->visible()->filterBy('tags','basque',',')->limit($limit) as $entry): ?>
    <?php snippet('card', array('card' => $entry, 'img_col' => 6, 'orientation' => $orientation, 'text_col' => 6, 'border' => true, 'excerpt' => 12, 'date' => false, 'author' => false )); ?>
    <?php endforeach; ?>
    <?php endif; ?>
  </ul>
</div>