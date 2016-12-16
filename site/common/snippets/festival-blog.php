
<section class="container section--festival-blog blog">
  <div class="more-link-wrapper">
    <h2 class="section-title">Festival Blog</h2>
    <?php snippet('more-link'); ?>
    <div class="row">
      <?php foreach ($pages->find('blog')->children()->visible()->limit(4) as $entry): ?>
      <?php snippet('card', array('card' => $entry, 'col_sm' => 3, 'orientation' => 'vertical', 'video_id' => $entry->video_id(), 'border' => true, 'titleTop' => true, 'author' => false )); ?>
      <?php endforeach; ?>
    </div>
  </div>
</section>