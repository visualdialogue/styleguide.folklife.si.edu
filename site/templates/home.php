
<?php snippet('header'); ?>
<div id="navspacer" class="navspacer"></div>
<!-- Styleguide-->
<section class="container section--first section--styleguide">
  <h2 class="section-title">Styleguide</h2>
  <ul class="row cards">
    <?php foreach($pages->visible() as $card): ?>
    <?php snippet('card', array('card' => $card, 'col_sm' => 4 )); ?>
    <?php endforeach; ?>
  </ul>
</section>
<?php snippet('footer'); ?>