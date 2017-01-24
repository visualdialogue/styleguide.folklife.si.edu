
<?php $gallery_img = $card->image($card->gallery_img()); ?>
<div class="image-gallery">
  <div class="center-box">
    <div class="modal-trigger"><img src="<?= $gallery_img->url() ?>" alt="Gallery image" class="gallery-thumbnail"/></div>
    <div class="icon-gallery"></div>
  </div>
  <ul class="gallery-list">
    <?php foreach($card->images()->filterBy('filename', '*=', 'slide') as $image): ?>
    <div class="gallery-image">
      <div class="gallery-image-inner"><img src="<?= $image->url() ?>" alt="Gallery image"/></div>
    </div>
    <?php endforeach; ?>
  </ul>
  <ul class="gallery-list-captions">
    <?php foreach($card->images()->filterBy('filename', '*=', 'slide') as $image): ?>
    <div class="gallery-caption">
      <div class="remodal-description">
        <?php echo $image->caption(); ?></div>
      <div class="remodal-credit">
        <?php echo $image->credit(); ?></div>
    </div>
    <?php endforeach; ?>
  </ul>
</div>