
<div class="sidebar-audio">
  <div class="tag">Audio</div>
  <div class="title">Children’s Music from Around the World
    <ul class="row">
      <?php snippet('card-horizontal', array('card' => $pages->find('explore')->children()->find('sounds')->children()->visible()->first(), 'card_classes' => 'col-xs-12 suggested-album sidebar-card', 'image_col' => 'col-sm-6', 'details_col' => 'col-sm-6', 'artist' => true )); ?>
    </ul>
  </div>
</div>