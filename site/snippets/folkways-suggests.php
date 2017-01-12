
<div class="row">
  <div class="album-info col-sm-12">
    <h3 class="sidebar-section-title">Folkways Suggests</h3>
    <div class="button">
      <div class="button-inner album-sidebar-tab">ALBUMS 
        <div aria-hidden="true" class="icon-down-open-mini"></div>
      </div>
    </div>
    <ul class="row suggested-albums">
      <?php foreach($pages->find('explore')->children()->find('sounds')->children()->filterBy('tags', '!=', 'radio')->shuffle()->limit(6) as $album): ?>
      <?php snippet('card-horizontal', array('card' => $album, 'card_classes' => 'col-xs-6 col-sm-12 suggested-album sidebar-card top-border-card', 'image_col' => 'col-sm-6', 'details_col' => 'col-sm-6', 'artist' => true )); ?>
      <?php endforeach; ?>
    </ul>
    <div class="button">
      <div class="button-inner album-sidebar-tab">VIDEOS 
        <div aria-hidden="true" class="icon-right-open-mini"></div>
      </div>
    </div>
    <div class="button">
      <div class="button-inner album-sidebar-tab">PLAYLISTS
        <div aria-hidden="true" class="icon-right-open-mini"></div>
      </div>
    </div>
    <div class="button">
      <div class="button-inner album-sidebar-tab">TOOLS FOR TEACHING
        <div aria-hidden="true" class="icon-right-open-mini"></div>
      </div>
    </div>
    <div class="button">
      <div class="button-inner album-sidebar-tab">ARTICLES
        <div aria-hidden="true" class="icon-right-open-mini"></div>
      </div>
    </div>
  </div>
</div>