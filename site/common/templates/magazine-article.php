
<?php snippet('header'); ?>
<div id="navspacer" class="navspacer"></div>
<?php snippet('magazine-title-bar', array('link' => $page->parent()->url())); ?>
<div class="container">
  <div class="row">
    <section class="first-section article-section col-sm-8">
      <article class="article">
        <!-- use card for correct video/image header-->
        <ul class="row cards blog-feature">
          <?php snippet('card-blog-article', array('card' => $page, 'type' => 'blog', 'caption' => true, 'link' => false)); ?>
        </ul>
        <div class="content">
          <?php echo $page->copy()->kt(); ?>
        </div>
      </article>
    </section>
    <div class="col-sm-1 spacer"></div>
    <aside class="sidebar col-sm-3 blog-sidebar">
      <?php snippet('blog-related-content', array('orientation' => 'vertical', 'limit' => 3)); ?>
    </aside>
  </div>
</div>
<?php snippet('footer'); ?>