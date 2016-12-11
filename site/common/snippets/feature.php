
<?php $excerptData = null; ?>
<?php if(isset($excerpt)): ?>
<?php $excerptData = $excerpt; ?>
<?php endif; ?>
<?php if(isset($showCategory) && $showCategory === true): ?>
<?php $showCategory = true; ?>
<?php else: ?>
<?php $showCategory = false; ?>
<?php endif ; ?>
<div class="feature--full">
  <div class="row">
    <div class="feature__image-wrapper clearfix col-sm-<? if(isset($img_width)) echo $img_width ?>">
      <?php if($src = $feature->image($feature->img())): ?><img src="<?= $src->url() ?>"/>
      <?php endif; ?>
    </div>
    <div class="feature__details details details--inset details--notop col-sm-<? if(isset($copy_width)) echo $copy_width ?>">
      <?php if($showCategory): ?>
      <div class="category">
        <?php echo $feature->category(); ?></div>
      <?php endif; ?>
      <?php if('' != $feature->full_title()): ?>
      <div class="title">
        <?php echo htmlspecialchars($feature->full_title(), ENT_QUOTES, 'UTF-8'); ?></div>
      <?php else: ?>
      <div class="title">
        <?php echo htmlspecialchars($feature->title(), ENT_QUOTES, 'UTF-8'); ?></div>
      <?php endif; ?>
      <?php if('' != $feature->blurb()): ?>
      <div class="description feature__description link-underline">
        <?php echo $feature->blurb()->kt(); ?></div>
      <?php endif; ?>
      <?php if (isset($excerptData)): ?>
      <div class="description feature__description link-underline">
        <p>
          <?php echo excerpt($feature->copy()->kt(), $excerptData, 'words'); ?></p>
      </div>
      <?php else: ?>
      <?php endif; ?>
      <?php snippet('more-link'); ?>
    </div>
  </div>
</div>