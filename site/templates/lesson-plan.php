
<?php snippet('header'); ?>
<div id="navspacer" class="navspacer"></div>
<?php snippet('title-bar', array('title' => 'Learn', 'link' => $pages->find('learn')->url())); ?>
<div class="container">
  <div class="row">
    <section class="first-section article-section col-sm-7">
      <article class="article">
        <!-- use card for correct video/image header-->
        <ul class="row cards blog-feature">
          <?php snippet('card-lesson-plan-page', array('card' => $page, 'card_classes' => 'lesson-plan-top' )); ?>
        </ul>
        <div class="content">
          <?php echo $page->contents()->kt(); ?>
          <?php snippet('disqus')         ; ?>
        </div>
      </article>
    </section>
    <div class="col-sm-1 spacer"></div>
    <aside class="sidebar col-sm-4 blog-sidebar">
      <div class="row">
        <div class="buy-button col-sm-7">
          <div class="button-inner"><span class="title">Download PDF</span></div>
        </div>
      </div>
      <div class="row">
        <div class="lesson-info sidebar-section col-sm-12">
          <h3 class="sidebar-section-title">Lesson Info</h3>
          <?php if('' != $page->year_released()): ?>
          <h4 class="year-released">Year Released</h4>
          <div class="copy">
            <?php echo $page->year_released(); ?></div>
          <?php endif; ?>
          <?php if('' != $page->suggested_grade_levels()): ?>
          <h4>Suggested Grade Levels</h4>
          <div class="copy">
            <?php echo $page->suggested_grade_levels(); ?></div>
          <?php endif; ?>
          <?php if('' != $page->country()): ?>
          <h4>Country</h4>
          <div class="copy">
            <?php echo $page->country(); ?></div>
          <?php endif; ?>
          <?php if('' != $page->region()): ?>
          <h4>Region</h4>
          <div class="copy">
            <?php echo $page->region(); ?></div>
          <?php endif; ?>
          <?php if('' != $page->culture_group()): ?>
          <h4>Culture Group</h4>
          <div class="copy">
            <?php echo $page->culture_group(); ?></div>
          <?php endif; ?>
          <?php if('' != $page->genre()): ?>
          <h4>Genre</h4>
          <div class="copy">
            <?php echo $page->genre(); ?></div>
          <?php endif; ?>
          <?php if('' != $page->instruments()): ?>
          <h4>Instruments</h4>
          <div class="copy">
            <?php echo $page->instruments(); ?></div>
          <?php endif; ?>
          <?php if('' != $page->language()): ?>
          <h4>Language</h4>
          <div class="copy">
            <?php echo $page->language(); ?></div>
          <?php endif; ?>
          <?php if('' != $page->co_curricular_areas()): ?>
          <h4>Co-curricular Areas</h4>
          <div class="copy">
            <?php echo $page->co_curricular_areas(); ?></div>
          <?php endif; ?>
          <?php if('' != $page->national_standards()): ?>
          <h4>National Standards</h4>
          <div class="copy">
            <?php echo $page->national_standards(); ?></div>
          <?php endif; ?>
          <?php if('' != $page->prerequisites()): ?>
          <h4>Prerequisites</h4>
          <div class="copy">
            <?php echo $page->prerequisites(); ?></div>
          <?php endif; ?>
        </div>
      </div>
      <?php snippet('sidebar-audio', array('title' => 'Traditional Music of Botswana')); ?>
      <?php snippet('folkways-suggests', array()); ?>
    </aside>
  </div>
</div>
<?php snippet('footer'); ?>