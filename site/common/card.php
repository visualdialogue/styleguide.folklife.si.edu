<?php if ($card->type() == 'video'): ?><li class="card col-xs-6 col-sm-3"><div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= $card->description() ?>" class="video__thumbnail"><div class="center-box"><?php if($src = $card->image($card->img())): ?><a class="modal-trigger"><img src="<?= $src->url() ?>" class="image"/></a><?php endif; ?><div class="icon-play-button icon-play-button--video icon-stack"><div class="icon-circle"></div><div class="icon-play"></div></div></div></div><div class="details card__details details--inset"><div class="category"><?php echo $card->category(); ?></div><div class="title card__title"><a><?php echo $card->title(); ?></a></div><div class="description card__description"><a><?php echo $card->description(); ?></a></div></div></li><?php elseif ($card->type() == 'audio'): ?><li class="card audio col-xs-6 col-sm-3"><?php if($src = $card->image($card->img())): ?><img src="<?= $src->url() ?>"/><?php endif; ?><div class="details card__details details--inset"><div class="category card__category"><?php echo $card->category() ; ?></div><div class="title-wrapper card__title-wrapper"><div class="title"><a><?php echo $card->title(); ?></a></div><div class="subtitle"><?php echo $card->audio_album(); ?></div></div><div class="audio-player"><div class="icon-play-button icon-stack"><div class="icon-circle"></div><div class="icon-play"></div></div><div class="audio-player__details"><div class="audio-progress-bar"><img src="/assets/images/icons/audio-progress-bar.png"/></div><div class="audio-time">0:00 &vert;&nbsp;<?php echo $card->audio_length(); ?></div><div class="volume"></div></div></div></div></li><?php elseif ((isset($type)) && ($type == 'blog-feature')): ?><div class="card blog-article blog-article--feature blog-article--vertical clearfix"><?php if((isset($video_id)) && ($video_id != '')): ?><div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= $card->description() ?>" class="video__thumbnail"><div class="center-box"><?php if($src = $card->image($card->img())): ?><a class="modal-trigger"><img src="<?= $src->url() ?>" class="card__image"/></a><?php endif; ?><div class="icon-play-button icon-play-button--video icon-stack"><div class="icon-circle"></div><div class="icon-play"></div></div></div></div><?php else: ?><div class="card__image-wrapper"><?php if($src = $card->image($card->img())): ?><a href="<?= $card->url() ?>"><img src="<?= $src->url() ?>" class="card__image"/></a><?php endif; ?></div><?php endif; ?><div class="card__details details"><div class="category"><?php echo $card->festival(), ', ', $card->program(); ?></div><div class="title card__title"><a href="<?= $card->url() ?>"><?php echo $card->title(); ?></a></div><div class="date date-sm"><?php echo $card->date('F jS, Y'), e('' != $card->author(), ' | ' . $card->author()), ' | 0 comments'; ?></div><?php if (isset($excerpt)): ?><div class="description card__description link-underline"><p><?php echo excerpt($card->description()->kt(), $excerpt, 'words'); ?></p></div><?php else: ?><div class="description blog-article__description link-underline"><?php echo $card->description()->kt(); ?></div><?php endif; ?><?php snippet('more-link'); ?></div></div><?php elseif ((isset($type)) && ($type == 'blog-article') && ($orientation == 'horizontal')): ?><li class="card col-sm-12 blog-article clearfix"><div class="row"><div class="border border--inset"></div><div class="card__image-wrapper col-sm-6 clearfix"><?php if($src = $card->image($card->img())): ?><img src="<?= $src->url() ?>" class="card__image"/><?php endif; ?></div><div class="card__details details col-sm-6 details--inset details--tight"><div class="time"><?php echo $card->time(); ?></div><div class="category"><?php echo $card->festival(), ', ', $card->program(); ?></div><div class="title card__title"><a href="<?= $card->url() ?>"><?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></a></div><div class="date date-sm"><?php echo $card->date('F jS, Y'), e('' != $card->author(), ' | ' . $card->author()), ' | 0 comments'; ?></div><div class="description card__description link-underline"><?php echo $card->blurb()->kt(); ?></div><?php if (isset($excerpt)): ?><div class="description card__description link-underline"><p><?php echo excerpt($card->copy()->kt(), $excerpt, 'words'); ?></p></div><?php else: ?><div class="description blog-article__description link-underline"><?php echo $card->copy()->kt(); ?></div><?php endif; ?><?php snippet('more-link'); ?></div></div></li><?php elseif ((isset($type)) && ($type == 'blog-article') && ($orientation == 'vertical')): ?><li class="card col-sm-3 blog-article blog-article--vertical clearfix"><div class="border"></div><div class="card__details details"><div class="date"><?php echo $card->date('F jS'); ?></div><div class="time"><?php echo $card->time(); ?></div><div class="title card__title"><a href="<?= $card->url() ?>"><?php echo $card->title(); ?></a></div></div><?php if($video_id != ''): ?><div data-video-id="<?= $card->video_id() ?>" data-title="<?= $card->title() ?>" data-description="<?= $card->description() ?>" class="video__thumbnail"><div class="center-box"><?php if($src = $card->image($card->img())): ?><a class="modal-trigger"><img src="<?= $src->url() ?>" class="card__image"/></a><?php endif; ?><div class="icon-play-button icon-play-button--video icon-stack"><div class="icon-circle"></div><div class="icon-play"></div></div></div></div><?php else: ?><div class="card__image-wrapper"><?php if($src = $card->image($card->img())): ?><a href="<?= $card->url() ?>"><img src="<?= $src->url() ?>" class="card__image"/></a><?php endif; ?></div><?php endif; ?></li><?php elseif ((isset($type)) && ($type == 'special-event')): ?><li class="col-sm-6 special-event clearfix"><div class="border"></div><div class="special-event__image"><?php if($src = $page->image($card->src())): ?><img src="<?= $src->url() ?>"/><?php endif; ?></div><div class="textbox special-event__textbox"><div class="details details--tight"><div class="date"><?php echo $card->date('F jS'); ?></div><div class="time"><?php echo $card->time(); ?></div><div class="title"><a><?php echo $card->title(); ?></a></div><div class="description"><?php echo excerpt($card->description(), 20, 'words'); ?></div></div></div></li><?php elseif ((isset($type)) && ($type == 'new-release')): ?><?php if($src = $card->image($card->img())): ?><li class="col-xs-6 col-sm-2 new-release"><img src="<?= $src->url() ?>"/><div class="details details--participate"><div class="title"><a><?php echo $card->title(); ?></a></div><div class="artist"><a><?php echo $card->artist(); ?></a></div></div></li><?php endif; ?><?php elseif ((isset($type)) && ($type == 'news')): ?><?php if($src = $card->image($card->img())): ?><li class="col-xs-6 col-sm-3"><img src="<?= $src->url() ?>"/><div class="details details--participate"><div class="date"><?php echo $card->date('n.j.y'); ?></div><div class="title"><a><?php echo $card->title(); ?></a></div></div></li><?php endif; ?><?php else: ?><?php if(isset($col_xs)): ?><?php if(isset($col_sm)): ?><li class="card col-xs-<?= $col_xs ?> col-sm-<?= $col_sm ?>"></li><?php else: ?><li class="card col-xs-<?= $col_xs ?>"></li><?php endif; ?><?php elseif(isset($col_sm)): ?><li class="card col-xs-<?= $col_sm ?>"></li><?php endif; ?><div class="card__image-wrapper clearfix"><?php if($src = $card->image($card->img())): ?><img src="<?= $src->url() ?>" class="card__image"/><?php endif; ?></div><div class="card__details details"><?php if('' != $card->category()):	 ?><div class="category"><?php echo $card->category(); ?></div><?php endif; ?><div class="title card__title"><?php echo htmlspecialchars($card->title(), ENT_QUOTES, 'UTF-8'); ?></div><?php if('' != $card->blurb()):	 ?><div class="description card__description link-underline"><?php echo $card->blurb()->kt(); ?></div><?php endif; ?><?php if (isset($excerpt)): ?><div class="description card__description link-underline"><p><?php echo excerpt($card->description()->kt(), $excerpt, 'words'); ?></p></div><?php elseif('' != $card->description()): ?><div class="description card__description link-underline"><?php echo $card->description()->kt(); ?></div><?php endif; ?></div><?php endif; ?>