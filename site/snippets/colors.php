
<!-- Colors-->
<section class="container">
  <h2 class="section-title">Colors</h2><a id="colors" class="anchor-link"></a>
  <?php foreach($section->children()->visible() as $palette): ?>
  <div class="sub-section">
    <h3 class="section-subtitle">
      <?php echo $palette->title(); ?></h3><a id="<?= str::slug($palette->title())?>" class="anchor-link"></a>
    <ul class="row">
      <?php foreach($palette->colors()->toStructure() as $color): ?>
      <?php $hex = LJH::rgbToHex($color->r()->int(), $color->g()->int(), $color->b()->int()); ?>
      <div class="color col-xs-6 col-sm-3 col-md-2">
        <div style="background-color:<?= $hex ?>" class="color-square"></div>
        <div class="color-name">
          <?php echo $color->name(); ?></div>
        <div class="color-rgb">
          <?php echo 'RGB: ' . $color->r() . ', ' . $color->g() . ', ' . $color->b(); ?></div>
        <pre><code><?= $hex ?><br><?=$color->sass() ?></code></pre>
      </div>
      <?php endforeach; ?>
    </ul>
  </div>
  <?php endforeach; ?>
</section>