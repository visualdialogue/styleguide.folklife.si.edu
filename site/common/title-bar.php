
<div class="title-bar">
  <div class="container title-height">
    <div class="vertically-align-grandparent">
      <div class="vertically-align-parent">
        <?php if (isset($title)): ?>
        <?php if (isset($link)): ?><a href="<?= $link ?>" class="high">
          <h1 class="page-title"><span class="light"><span class="er">
                <?php echo htmlspecialchars($title, ENT_QUOTES, 'UTF-8'); ?></span></span></h1></a>
        <?php else: ?>
        <h1 class="page-title">
          <?php echo htmlspecialchars($title, ENT_QUOTES, 'UTF-8'); ?></h1>
        <?php endif; ?>
        <?php else: ?>
        <h1 class="page-title">
          <?php echo htmlspecialchars($page->title(), ENT_QUOTES, 'UTF-8'); ?></h1>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <?php if (isset($subtitle)): ?>
  <hr class="hr--thin"/>
  <div class="container subtitle-height">
    <div class="vertically-align-grandparent">
      <div class="vertically-align-parent">
        <div class="page-subtitle">
          <?php echo htmlspecialchars($subtitle, ENT_QUOTES, 'UTF-8'); ?></div>
      </div>
    </div>
  </div>
  <?php endif; ?>
</div>