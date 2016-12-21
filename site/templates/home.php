
<?php snippet('header'); ?>
<div id="navspacer" class="navspacer"></div>
<?php snippet('title-bar', array('title' => 'Styleguide')); ?>
<!-- Sections-->
<?php $n=0; ?>
<?php foreach($pages->visible() as $section): $n++; ?>
<?php if ($n != 1): ?>
<div class="container">
  <hr class="thick-hr"/>
</div>
<?php endif; ?>
<?php snippet($section->uid(), array('section' => $section)); ?>
<?php endforeach; ?>
<?php snippet('footer'); ?>