
<?php $excerptData = null; ?>
<?php if(isset($excerpt)): ?>
<?php $excerptData = $excerpt; ?>
<?php endif; ?>
<?php $blurbData = null; ?>
<?php if(isset($blurb)): ?>
<?php $blurbData = $blurb; ?>
<?php endif; ?>
<?php $cardTypeData = null; ?>
<?php if(isset($type)): ?>
<?php $cardTypeData = $type; ?>
<?php endif; ?>
<?php if(isset($showCategory) && $showCategory === true): ?>
<?php $showCategory = true; ?>
<?php else: ?>
<?php $showCategory = false; ?>
<?php endif ; ?>
<?php if (!isset($more_link)): ?>
<?php $more_link = false; ?>
<?php endif; ?>
<?php if(isset($orientation)): ?>
<?php if($orientation == 'horizontal'): ?>
<?php $cardOrientation = 'horizontal'; ?>
<?php elseif($orientation == 'vertical'): ?>
<?php $cardOrientation = 'vertical'; ?>
<?php endif ; ?>
<?php else: ?>
<?php $cardOrientation = 'standard'; ?>
<?php endif ; ?>
<?php if ($card->type() == 'audio' || ((isset($type)) && ($type == 'audio'))): ?>
<?php $audioCard = true; ?>
<?php $cardTypeData = 'audio'; ?>
<?php else: ?>
<?php $audioCard = false; ?>
<?php endif; ?>
<?php if ((isset($type)) && ($type == 'blog-feature')): ?>
<div class="card blog-article blog-article--feature blog-article--vertical clearfix">
  <?php if((isset($video_id)) && ($video_id != '')): ?>
  <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= $card->copy() ?>" class="video__thumbnail">
    <div class="center-box">
      <?php if($src = $card->image()): ?><a class="modal-trigger"><img src="<?= $src->url() ?>" class="card__image"/></a>
      <?php endif; ?>
      <div class="icon-play-button icon-play-button--video icon-stack">
        <div class="icon-circle"></div>
        <div class="icon-play"></div>
      </div>
    </div>
  </div>
  <?php else: ?>
  <div class="card__image-wrapper">
    <?php if($src = $card->image()): ?><a href="<?= $card->url() ?>"><img src="<?= $src->url() ?>" class="card__image"/></a>
    <?php endif; ?>
  </div>
  <?php endif; ?>
  <div class="card__details details">
    <div class="category">
      <?php echo $card->festival(), ', ', $card->program(); ?>
    </div>
    <div class="title card__title"><a href="<?= $card->url() ?>">
        <?php echo $card->title(); ?></a></div>
    <div class="date date-sm">
      <?php echo $card->date('F jS, Y'), e('' != $card->author(), ' | ' . $card->author()), ' | 0 comments'; ?></div>
    <?php if (isset($excerptData)): ?>
    <div class="description card__description link-underline">
      <p>
        <?php echo excerpt($card->copy()->kt(), $excerptData, 'words'); ?></p>
    </div>
    <?php else: ?>
    <div class="description blog-article__description link-underline">
      <?php echo $card->copy()->kt(); ?></div>
    <?php endif; ?>
    <?php snippet('more-link'); ?>
  </div>
</div>
<?php elseif ((isset($type)) && ($type == 'blog-article') && ($orientation == 'horizontal')): ?>
<li class="card col-sm-12 blog-article clearfix">
  <div class="row">
    <div class="border border--inset"></div>
    <div class="card__image-wrapper col-sm-6 clearfix">
      <?php if($src = $card->image()): ?><img src="<?= $src->url() ?>" class="card__image"/>
      <?php endif; ?>
    </div>
    <div class="card__details details col-sm-6 details--inset details--tight">
      <div class="time">
        <?php echo $card->time(); ?></div>
      <div class="category">
        <?php echo $card->festival(), ', ', $card->program(); ?>
      </div>
      <div class="title card__title"><a href="<?= $card->url() ?>">
          <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></a></div>
      <div class="date date-sm">
        <?php echo $card->date('F jS, Y'), e('' != $card->author(), ' | ' . $card->author()), ' | 0 comments'; ?></div>
      <div class="description card__description link-underline">
        <?php echo $card->blurb()->kt(); ?></div>
      <?php if (isset($excerptData)): ?>
      <div class="description card__description link-underline">
        <p>
          <?php echo excerpt($card->copy()->kt(), $excerptData, 'words'); ?></p>
      </div>
      <?php else: ?>
      <div class="description blog-article__description link-underline">
        <?php echo $card->copy()->kt(); ?></div>
      <?php endif; ?>
      <?php snippet('more-link'); ?>
    </div>
  </div>
</li>
<?php elseif ((isset($type)) && ($type == 'blog-article') && ($orientation == 'vertical')): ?>
<li class="card col-sm-3 blog-article blog-article--vertical clearfix">
  <div class="border"></div>
  <div class="card__details details">
    <div class="date">
      <?php echo $card->date('F jS'); ?></div>
    <div class="time">
      <?php echo $card->time(); ?></div>
    <div class="title card__title"><a href="<?= $card->url() ?>">
        <?php echo $card->title(); ?></a></div>
  </div>
  <?php if($video_id != ''): ?>
  <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= $card->copy() ?>" class="video__thumbnail">
    <div class="center-box">
      <?php if($src = $card->image()): ?><a class="modal-trigger"><img src="<?= $src->url() ?>" class="card__image"/></a>
      <?php endif; ?>
      <div class="icon-play-button icon-play-button--video icon-stack">
        <div class="icon-circle"></div>
        <div class="icon-play"></div>
      </div>
    </div>
  </div>
  <?php else: ?>
  <div class="card__image-wrapper">
    <?php if($src = $card->image()): ?><a href="<?= $card->url() ?>"><img src="<?= $src->url() ?>" class="card__image"/></a>
    <?php endif; ?>
  </div>
  <?php endif; ?>
</li>
<?php elseif ((isset($type)) && ($type == 'special-event')): ?>
<?php $xs = null; ?>
<?php $sm = null; ?>
<?php $custom_class = null; ?>
<?php $detailsData = null; ?>
<?php if(isset($col_xs)): ?>
<?php $xs = 'col-xs-'.$col_xs; ?>
<?php endif; ?>
<?php if(isset($col_sm)): ?>
<?php $sm = 'col-sm-'.$col_sm; ?>
<?php endif; ?>
<?php if(isset($classname)): ?>
<?php $custom_class = $classname; ?>
<?php endif; ?>
<?php if(isset($details)): ?>
<?php $detailsData = $details; ?>
<?php endif; ?>
<li class="special-event clearfix card <?= $xs ?> <?= $sm ?> <?= $custom_class ?>">
  <div class="border"></div>
  <div class="special-event__image">
    <?php if($src = $card->image()): ?><img src="<?= $src->url() ?>"/>
    <?php endif; ?>
  </div>
  <div class="textbox special-event__textbox">
    <div class="details details--tight">
      <div class="date">
        <?php echo $card->date('F jS'); ?></div>
      <div class="time">
        <?php echo $card->time(); ?></div>
      <div class="title"><a>
          <?php echo $card->title(); ?></a></div>
      <div class="description">
        <?php echo excerpt($card->copy(), 20, 'words'); ?>
      </div>
    </div>
  </div>
</li>
<?php elseif ((isset($type)) && ($type == 'new-release')): ?>
<?php if($src = $card->image()): ?>
<li class="col-xs-6 col-sm-2 new-release"><img src="<?= $src->url() ?>"/>
  <div class="details details--participate">
    <div class="title"><a>
        <?php echo $card->title(); ?></a></div>
    <div class="artist"><a>
        <?php echo $card->artist(); ?></a></div>
  </div>
</li>
<?php endif; ?>
<?php elseif ((isset($type)) && ($type == 'news')): ?>
<?php if($src = $card->image()): ?>
<li class="col-xs-6 col-sm-3"><img src="<?= $src->url() ?>"/>
  <div class="details details--participate">
    <div class="date">
      <?php echo $card->date('n.j.y'); ?></div>
    <div class="title"><a>
        <?php echo $card->title(); ?></a></div>
  </div>
</li>
<?php endif; ?>
<?php else: ?>
<?php $xs = null; ?>
<?php $sm = null; ?>
<?php $custom_class = null; ?>
<?php $detailsData = null; ?>
<?php if ((isset($type)) && ($type == 'album')): ?>
<?php $xs = 'col-xs-6'; ?>
<?php $sm = 'col-sm-2'; ?>
<?php $custom_class = 'album'; ?>
<?php endif; ?>
<?php if(isset($col_xs)): ?>
<?php $xs = 'col-xs-'.$col_xs; ?>
<?php endif; ?>
<?php if(isset($col_sm)): ?>
<?php $sm = 'col-sm-'.$col_sm; ?>
<?php endif; ?>
<?php if(isset($classname)): ?>
<?php $custom_class = $classname; ?>
<?php endif; ?>
<?php if(isset($details)): ?>
<?php $detailsData = $details; ?>
<?php endif; ?>
<li class="card <?= $xs ?> <?= $sm ?> <?= $custom_class ?> card--<?= $cardTypeData ?> card--<?= $cardOrientation ?>">
  <?php if ((isset($border)) && $border === true): ?>
  <div class="border"></div>
  <?php endif; ?>
  <?php if ($card->type() == 'video' || ((isset($type)) && ($type == 'video'))): ?>
  <?php if ($cardOrientation == 'vertical'): ?>
  <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= $card->copy() ?>" class="video__thumbnail">
    <div class="center-box">
      <?php if($src = $card->image()): ?>
      <div class="modal-trigger"><img src="<?= $src->url() ?>" class="image"/></div>
      <?php endif; ?>
      <div class="icon-play-button icon-play-button--video icon-stack">
        <div class="icon-circle"></div>
        <div class="icon-play"></div>
      </div>
    </div>
  </div>
  <?php snippet('card-details', array('card' => $card, 'details' => $detailsData, 'excerpt' => $excerptData, 'showCategory' => $showCategory, 'more_link' => $more_link )); ?>
  <?php elseif ($cardOrientation == 'horizontal'): ?>
  <div class="festival-video clearfix">
    <div class="row">
      <div class="col-sm-6">
        <div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= $card->copy() ?>" class="video__thumbnail">
          <div class="center-box">
            <?php if($src = $card->image()): ?><a class="modal-trigger"><img src="<?= $src->url() ?>" class="image"/></a>
            <?php endif; ?>
            <div class="icon-play-button icon-play-button--video icon-stack">
              <div class="icon-circle"></div>
              <div class="icon-play"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="festival-video__textbox col-sm-6">
        <?php snippet('card-details', array('card' => $card, 'details' => $detailsData, 'excerpt' => $excerptData, 'showCategory' => $showCategory, 'video' => true, 'more_link' => $more_link )); ?>
      </div>
    </div>
  </div>
  <?php endif; ?>
  <?php elseif($audioCard): ?>
  <div class="audio">
    <?php if($src = $card->image()): ?>
    <div class="card__image-wrapper clearfix"><a href="<?= $card->url() ?>"><img src="<?= $src->url() ?>" class="card__image"/></a></div>
    <?php endif; ?>
    <div class="details card__details details--inset">
      <div class="category card__category">
        <?php echo $card->category() ; ?></div>
      <div class="title-wrapper card__title-wrapper"><a href="<?= $card->url() ?>" class="high title"><span class="light"><span class="er">
              <?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></span></span></a>
        <?php if('' != $card->audio_album()): ?>
        <div class="subtitle">
          <?php echo $card->audio_album(); ?></div>
        <?php endif; ?>
        <div class="artist">
          <?php echo $card->artist()->kt(); ?></div>
      </div>
      <div class="audio-player">
        <div class="icon-play-button icon-stack">
          <div class="icon-circle"></div>
          <div class="icon-play"></div>
        </div>
        <div class="audio-player__details">
          <div class="audio-progress-bar"><img src="/assets/images/icons/audio-progress-bar.png"/></div>
          <div class="audio-time">0:00 &vert;&nbsp;
            <?php echo $card->audio_length(); ?>
          </div>
          <div class="volume"></div>
        </div>
      </div>
    </div>
  </div>
  <?php elseif($cardOrientation == 'horizontal'): ?>
  <?php if (!isset($img_col)): ?>
  <?php $img_col = '6'; ?>
  <?php endif; ?>
  <?php if (!isset($text_col)): ?>
  <?php $text_col = '6'; ?>
  <?php endif; ?>
  <div class="card__inner">
    <div class="row">
      <div class="high card__image-wrapper clearfix col-sm-<?= $img_col ?>">
        <?php if($src = $card->image()): ?><a href="<?= $card->url() ?>"><img src="<?= $src->url() ?>" class="card__image"/></a>
        <?php endif; ?>
      </div>
      <div class="col-sm-<?= $text_col ?>">
        <?php snippet('card-details', array('card' => $card, 'details' => $detailsData, 'blurb' => $blurbData, 'excerpt' => $excerptData, 'showCategory' => $showCategory, 'more_link' => $more_link )); ?>
      </div>
    </div>
  </div>
  <?php else: ?>
  <div class="card__inner">
    <?php if($src = $card->image()): ?>
    <div class="card__image-wrapper clearfix"><a href="<?= $card->url() ?>"><img src="<?= $src->url() ?>" class="card__image"/></a></div>
    <?php endif; ?>
    <?php snippet('card-details', array('card' => $card, 'details' => $detailsData, 'blurb' => $blurbData, 'excerpt' => $excerptData, 'showCategory' => $showCategory, 'more_link' => $more_link )); ?>
  </div>
  <?php endif; ?>
</li>
<?php endif; ?>