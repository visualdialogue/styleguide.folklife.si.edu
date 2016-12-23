
<?php snippet('header'); ?>
<div id="navspacer" class="navspacer"></div>
<?php snippet('title-bar', array('title' => 'Not Found', 'link' => $page->parent()->url())); ?>
<div class="container">
  <div class="row">
    <section class="first-section article-section col-sm-12">
      <h1>Sorry, this page isn’t built. Please go back <a href="/">home</a>.</h1>
    </section>
  </div>
</div>
<?php snippet('footer'); ?>