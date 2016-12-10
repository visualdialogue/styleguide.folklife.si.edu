
<section class="container section--blog blog">
  <h2 class="section-title">Festival Blog</h2>
  <?php snippet('more-link'); ?>
  <div class="row">
    <?php foreach ($pages->find('blog')->children()->visible()->limit(4) as $entry): ?><?php $video_id = $entry->video_id()?>
    <?php snippet('card', array('card' => $entry, 'type' => 'blog-article', 'orientation' => 'vertical', 'video_id' => $video_id )); ?>
    <?php endforeach; ?>
  </div>
</section>