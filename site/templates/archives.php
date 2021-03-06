
<?php snippet('header'); ?>
<div id="navspacer" class="navspacer"></div>
<section id="about-the-archives" class="section--banner-1-2 section--first container hero">
  <h1 class="section-title hero__title">
    <?php echo htmlspecialchars($page->title(), ENT_QUOTES, 'UTF-8'); ?>
  </h1>
  <hr class="hr--thin"/>
  <div class="hero__inner">
    <div class="row table">
      <div class="table-row">
        <div class="col-sm-7 hero__image clearfix">
          <?php if($src = $page->image($page->hero_image())): ?><img src="<?= $src->url() ?>"/>
          <?php endif; ?>
        </div>
        <div class="col-sm-5 hero__details details details--inset details--notop table-cell">
          <div class="title">
            <?php echo htmlspecialchars($page->hero_title(), ENT_QUOTES, 'UTF-8'); ?></div>
          <div class="description hero__description">
            <?php echo htmlspecialchars($page->hero_copy(), ENT_QUOTES, 'UTF-8'); ?></div>
          <?php snippet('more-link'); ?>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="container">
  <hr class="hr--thick"/>
</div>
<section id="collections" class="section--collections container">
  <ul class="row">
    <?php foreach ($page->children()->find('collections')->children() as $collection): ?>
    <?php if($src = $collection->image()): ?>
    <li class="col-xs-6 col-sm-3 archive-collection"><img src="<?= $src->url() ?>"/>
      <div class="details details--participate">
        <div class="title"><a>
            <?php echo htmlspecialchars($collection->title(), ENT_QUOTES, 'UTF-8'); ?></a></div>
        <div class="description">
          <?php echo htmlspecialchars(excerpt($collection->copy(), 7, 'words'), ENT_QUOTES, 'UTF-8'); ?></div>
      </div>
    </li>
    <?php endif; ?>
    <?php endforeach; ?>
  </ul>
</section>
<div class="container">
  <hr class="hr--thick"/>
</div>
<section id="using-the-archives" class="section--using-the-archives container">
  <div class="row">
    <main class="main--copy col-sm-7">
      <h2 class="section-title">Using the Archives</h2>
      <?php echo $page->copy()->kt(); ?>
    </main>
    <sidebar class="sidebar sidebar--info col-sm-4 col-sm-offset-1">
      <?php foreach ($page->children()->find('sidebar')->children()->visible() as $sidebar): ?>
      <ul>
        <h2 class="sidebar__section-title">
          <?php echo htmlspecialchars($sidebar->title(), ENT_QUOTES, 'UTF-8'); ?></h2>
        <?php foreach ($sidebar->section_entries()->toStructure() as $sidebar_section): ?>
        <li class="sidebar__item">
          <div class="sidebar__subtitle">
            <?php echo htmlspecialchars($sidebar_section->title(), ENT_QUOTES, 'UTF-8'); ?></div>
          <div class="sidebar__copy">
            <?php echo $sidebar_section->copy()->kt(); ?></div>
        </li>
        <?php endforeach; ?>
      </ul>
      <?php endforeach; ?>
    </sidebar>
  </div>
</section>
<?php snippet('footer'); ?>