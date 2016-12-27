
<?php $album = $pages->find('explore')->children()->find('sounds')->children()->find('west-indian-folksongs-for-children'); ?>
<div class="sidebar-audio">
  <div class="tag">Audio</div>
  <?php if (isset($title)): ?>
  <div class="sidebar-title">
    <?php echo $title; ?></div>
  <?php else: ?>
  <div class="sidebar-title">Children’s Music from Around the World</div>
  <?php endif; ?>
  <ul class="row">
    <?php snippet('card-horizontal', array('card' => $album, 'card_classes' => 'col-xs-12 sidebar-card', 'image_col' => 'col-sm-6', 'details_col' => 'col-sm-6', 'artist' => true )); ?>
  </ul>
  <!-- track listing-->
  <div class="table-responsive">
    <table class="table table-hover track-listing"> 
      <?php $n = 0; ?>
      <?php foreach($album->children()->visible() as $track): $n++; ?>
      <tr class="track">
        <td class="track-number">
          <?php echo $n; ?></td>
        <td class="track-title">
          <?php echo $track->title(); ?></td>
        <td class="track-action">More Info</td>
      </tr>
      <?php endforeach; ?>
    </table>
  </div>
</div>