
<div class="related-content">
  <h2 class="blog-sidebar__header">Related Content</h2>
  <ul>
    <?php foreach($pages->find('blog')->children()->visible()->filterBy('tags','basque',',')->limit($limit) as $entry): ?>
    <?php snippet('card', array('card' => $entry, 'orientation' => $orientation, 'excerpt' => '10', 'border' => true, 'date' => false )); ?>
    <?php endforeach; ?>
  </ul>
</div>