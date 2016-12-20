
<?php snippet('header'); ?>
<div id="navspacer" class="navspacer"></div>
<?php snippet('title-bar'); ?>
<!-- Styleguide-->
<section class="container first-section styleguide-section">
  <h2 class="section-title">Styleguide</h2>
  <ul class="row cards">
    <?php foreach($pages->visible() as $card): ?>
    <?php snippet('card', array('card' => $card, 'col_sm' => 4 )); ?>
    <?php endforeach; ?>
  </ul>
</section>
<?php snippet('footer'); ?>