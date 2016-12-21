
<!-- Intro-->
<section class="container first-section intro-section"><a id="intro" class="anchor-link"></a>
  <div class="row">
    <main class="content col-sm-7">
      <h2 class="intro-title">Using the Styleguide</h2>
      <div class="intro-copy link-underline">
        <?php echo $section->copy(); ?>
      </div>
    </main>
    <aside class="sidebar sidebar--info col-sm-4 col-sm-offset-1">
      <h3 class="sidebar-section-title">References</h3>
      <ul>
        <?php foreach ($section->references()->toStructure() as $reference): ?>
        <li class="sidebar-item sidebar-highlight"><a href="<?= $reference->url() ?>" target="_blank">
            <h4 class="sidebar-item-title">
              <?php echo htmlspecialchars($reference->title(), ENT_QUOTES, 'UTF-8'); ?></h4>
            <div class="info">
              <?php echo $reference->link(); ?></div></a></li>
        <?php endforeach; ?>
      </ul>
    </aside>
  </div>
</section>