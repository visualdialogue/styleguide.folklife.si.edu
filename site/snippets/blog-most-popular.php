
<div class="blog-most-popular">
  <h2 class="sidebar-section-title">Most Popular</h2>
  <?php $n=0; ?>
  <?php foreach($pages->find('blog')->children()->visible()->filterBy('tags', 'popular', ',')->limit(5) as $entry): $n++; ?>
  <div class="blog-sidebar-feature sidebar-highlight">
    <div class="blog-sidebar-number">
      <?php echo $n; ?></div><a href="<?= $entry->url() ?>" class="title">
      <?php echo $entry->title()->excerpt('8', 'words'); ?></a>
  </div>
  <?php endforeach; ?>
</div>