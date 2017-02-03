
<?php snippet('header'); ?>
<div id="navspacer" class="navspacer"></div>
<?php snippet('magazine-title-bar', array('link' => $page->parent()->url())); ?>
<div class="container">
  <div class="row">
    <section class="first-section article-section col-sm-8">
      <article class="article">
        <!-- use card for correct video/image header-->
        <ul class="row cards">
          <?php snippet('card-magazine-article', array('card' => $page, 'card_classes' => 'magazine-article-top' )); ?>
        </ul>
        <div class="content">
          <?php echo $page->contents()->kt(); ?>
          <div class="references">
            <h2>References</h2>
            <?php echo $page->references()->kt(); ?>
          </div>
          <?php snippet('disqus')         ; ?>
        </div>
      </article>
    </section>
    <?php snippet('currentsidebar'); ?>
    <aside class="sidebar col-sm-4">
      <?php snippet('sidebar-audio'); ?>
      <?php snippet('card', array('card' => $pages->find('explore')->children()->find('videos')->children()->find('music-of-central-asia-and-the-aga-khan-music-initiative'), 'card_classes' => 'sidebar-video' )); ?>
      <?php snippet('card', array('card' => $pages->find('explore')->children()->find('sounds')->children()->find('album-covers'), 'card_classes' => 'sidebar-album' )); ?>
      <?php snippet('blog-related-content', array('orientation' => 'vertical', 'limit' => 3)); ?>
    </aside>
  </div>
</div>
<?php snippet('footer'); ?>