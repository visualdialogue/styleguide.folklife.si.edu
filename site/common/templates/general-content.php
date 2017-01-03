
<?php snippet('header'); ?>
<div id="navspacer" class="navspacer"></div>
<?php snippet('title-bar', array('title' => 'Archives', 'link' => '/archives')); ?>
<div class="container">
  <div class="row">
    <section class="first-section article-section col-sm-8">
      <article class="article">
        <!-- use card for correct video/image header-->
        <ul class="row cards blog-feature">
          <?php snippet('card-blog-article', array('card' => $page, 'type' => 'general-content' )); ?>
        </ul>
        <div class="content">
          <?php echo $page->copy()->kt(); ?>
        </div>
        <div class="content content-footer">
          <?php echo $page->footer()->kt(); ?>
        </div>
      </article>
    </section>
    <div class="col-sm-1 spacer"></div>
    <aside class="sidebar col-sm-3 blog-sidebar">
    </aside>
  </div>
</div>
<?php snippet('footer'); ?>