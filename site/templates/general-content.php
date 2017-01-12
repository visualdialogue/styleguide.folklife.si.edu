
<?php snippet('header'); ?>
<div id="navspacer" class="navspacer"></div>
<?php if($page->uid() == 'mission-and-history'): ?>
<?php snippet('title-bar', array('title' => 'About Us')); ?>
<?php else: ?>
<?php snippet('title-bar', array('title' => 'Archives', 'link' => '/archives')); ?>
<?php endif; ?>
<div class="container general-content">
  <div class="row">
    <section class="first-section article-section <? if($page->uid() == 'mission-and-history') echo 'col-sm-7'; else echo 'col-sm-8' ?>">
      <article class="article">
        <?php if('' != $page->img()): ?>
        <!-- use card for correct video/image header-->
        <ul class="row cards blog-feature">
          <?php snippet('card-blog-article', array('card' => $page, 'type' => 'general-content' )); ?>
        </ul>
        <?php else: ?>
        <div class="blog-article-card">
          <h1 class="title no-image-title">
            <?php echo $page->title(); ?></h1>
        </div>
        <?php endif; ?>
        <div class="content intro-content">
          <?php echo $page->intro()->kt(); ?>
        </div>
        <div class="content">
          <?php echo $page->copy()->kt(); ?>
        </div>
        <div class="content content-footer">
          <?php echo $page->footer()->kt(); ?>
        </div>
      </article>
    </section>
    <div class="col-sm-1 spacer"></div>
    <?php if($page->uid() == 'mission-and-history'): ?>
    <aside class="sidebar col-sm-4 blog-sidebar">
      <div class="sidebar-section sidebar-images">
        <?php foreach($page->images() as $image): ?>
        <div class="sidebar-image">
          <?php echo $image; ?>
        </div>
        <?php endforeach; ?>
      </div>
      <?php foreach($page->children()->visible() as $sidebar_section): ?>
      <div class="sidebar-section">
        <h2 class="sidebar-section-title">
          <?php echo $sidebar_section->title(); ?></h2>
      </div>
      <!-- magazine article sidebar-->
      <ul class="row">
        <?php snippet('card-horizontal', array('card' => $sidebar_section, 'card_classes' => 'col-xs-12 sidebar-card horizontal-card sidebar-card-with-links', 'image_col' => 'col-xs-6', 'details_col' => 'col-xs-6', 'blurb' => true )); ?>
      </ul>
      <?php endforeach; ?>
    </aside>
    <?php else: ?>
    <aside class="sidebar col-sm-3 blog-sidebar">
      <div class="sidebar-pull-quote sidebar-section">
        <div class="image">
          <?php echo $page->image(); ?>
        </div>
        <div class="copy">
          <?php echo $page->pullquote()->kt(); ?>
        </div>
      </div>
      <?php if($page->hasNext()): ?>
      <?php $nextpage = $page->next(); ?>
      <div class="sidebar-section sidebar-pagination sidebar-next-archives">
        <h2 class="sidebar-section-title"><a href="<?= $nextpage->url() ?>" class="high"><span class="light"><span class="er">Next in Archives</span></span></a></h2>
        <div class="image">
          <?php echo $nextpage->image(); ?>
        </div><a href="<?= $nextpage->url() ?>" class="high">
          <div class="title"><span class="light"><span class="er">
                <?php echo htmlspecialchars($nextpage->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></div></a>
      </div>
      <?php endif; ?>
      <?php if($page->hasPrev()): ?>
      <?php $previouspage = $page->prev(); ?>
      <div class="sidebar-section sidebar-pagination sidebar-previous-archives">
        <h2 class="sidebar-section-title"><a href="<?= $previouspage->url() ?>" class="high"><span class="light"><span class="er">Previous in Archives</span></span></a></h2>
        <div class="image">
          <?php echo $previouspage->image(); ?>
        </div><a href="<?= $previouspage->url() ?>" class="high">
          <div class="title"><span class="light"><span class="er">
                <?php echo htmlspecialchars($previouspage->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></div></a>
      </div>
      <?php endif; ?>
    </aside>
    <?php endif; ?>
  </div>
</div>
<?php snippet('footer'); ?>