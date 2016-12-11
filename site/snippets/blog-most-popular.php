
<h2 class="blog-sidebar__header">Most Popular</h2>
<?php $n=0; ?>
<?php foreach($pages->find('blog')->children()->visible()->filterBy('tags', 'popular', ',') as $entry): $n++; ?>
<div class="blog-sidebar__feature"><a data-number="<?= $n ?>" href="<?= $entry->url() ?>" class="high title"><span class="light"><span class="er">
        <?php echo htmlspecialchars($entry->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a></div>
<?php endforeach; ?>