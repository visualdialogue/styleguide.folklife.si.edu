
<div class="blog-most-popular">
  <h2 class="blog-sidebar__header">Most Popular</h2>
  <?php $n=0; ?>
  <?php foreach($pages->find('blog')->children()->visible()->filterBy('tags', 'popular', ',')->limit(5) as $entry): $n++; ?>
  <div class="blog-sidebar__feature">
    <div class="blog-sidebar__number">
      <?php echo $n; ?></div><a href="<?= $entry->url() ?>" class="high title"><span class="light"><span class="er">
          <?php echo htmlspecialchars($entry->title()->excerpt('8', 'words'), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
  </div>
  <?php endforeach; ?>
</div>