
<div class="container">
  <hr class="hr--thick"/>
</div>
<section class="container section--festival-blog blog">
  <div class="more-link-wrapper">
    <h2 class="section-title">Festival Blog</h2>
    <?php snippet('more-link'); ?>
    <ul class="row cards">
      <?php foreach ($pages->find('blog')->children()->visible()->limit(4) as $card): ?>
      <?php snippet('card-quarter-blog', array('card' => $card, 'video_id' => $card->video_id() )); ?>
      <?php endforeach; ?>
    </ul>
  </div>
</section>