
<div class="blog-most-popular">
  <h3 class="sidebar-section-title">Most Popular</h3>
  <ul>
    <?php $n=0; ?>
    <?php foreach($pages->find('blog')->children()->visible()->filterBy('tags', 'popular', ',')->limit(5) as $entry): $n++; ?>
    <li class="sidebar-item numbered-sidebar-item sidebar-highlight">
      <div class="blog-sidebar-number">
        <?php echo $n; ?></div><a href="<?= $entry->url() ?>" class="title">
        <?php echo $entry->title()->excerpt('8', 'words'); ?></a>
    </li>
    <?php endforeach; ?>
  </ul>
</div>