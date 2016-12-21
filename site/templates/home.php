
<?php snippet('header'); ?>
<div id="navspacer" class="navspacer"></div>
<?php snippet('title-bar', array('title' => 'Styleguide')); ?>
<!-- Sections-->
<?php foreach($pages->visible() as $section): ?>
<?php snippet($section->uid(), array('section' => $section)); ?>
<div class="container">
  <hr class="thick-hr"/>
</div>
<?php endforeach; ?>
<?php snippet('footer'); ?>