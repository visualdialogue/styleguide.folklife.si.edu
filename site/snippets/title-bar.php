
<div class="title-bar">
  <div class="container title-height">
    <?php if (isset($title)): ?>
    <?php if (isset($link)): ?><a href="<?= $link ?>">
      <h1 class="page-title">
        <?php echo htmlspecialchars($title, ENT_QUOTES, 'UTF-8'); ?></h1></a>
    <?php else: ?>
    <h1 class="page-title">
      <?php echo htmlspecialchars($title, ENT_QUOTES, 'UTF-8'); ?></h1>
    <?php endif; ?>
    <?php else: ?>
    <h1 class="page-title">
      <?php echo htmlspecialchars($page->title(), ENT_QUOTES, 'UTF-8'); ?></h1>
    <?php endif; ?>
  </div>
  <?php if (isset($subtitle)): ?><img src="/assets/images/icons/cfch_thinline.svg" class="thin-hr-svg svg"/>
  <div class="container subtitle-height">
    <div class="page-subtitle">
      <?php echo htmlspecialchars($subtitle, ENT_QUOTES, 'UTF-8'); ?></div>
  </div>
  <?php endif; ?>
</div>