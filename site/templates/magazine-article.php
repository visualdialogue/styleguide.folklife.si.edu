
<?php snippet('header'); ?>
<div id="navspacer" class="navspacer"></div>
<?php snippet('magazine-title-bar', array('link' => $page->parent()->url())); ?>
<div class="container">
  <div class="row">
    <section class="first-section article-section col-sm-8">
      <article class="article">
        <!-- use card for correct video/image header-->
        <ul class="row cards blog-feature">
          <?php snippet('card-magazine-article', array('card' => $page, 'card_classes' => 'magazine-article-top' )); ?>
        </ul>
        <div class="content">
          <?php echo $page->contents()->kt(); ?>
        </div>
      </article>
    </section>
    <aside class="sidebar col-sm-4 blog-sidebar">
      <?php snippet('sidebar-audio'); ?>
      <?php snippet('blog-related-content', array('orientation' => 'vertical', 'limit' => 3)); ?>
    </aside>
  </div>
</div>
<?php snippet('footer'); ?>