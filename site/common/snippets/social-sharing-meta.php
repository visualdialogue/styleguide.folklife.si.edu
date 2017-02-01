
<!-- Open graph tags-->
<meta property="og:site_name" content="<?= $og_site_name ?>"/>
<meta property="fb:app_id" content="1451828684827581"/>
<meta property="og:url" content="<?= $page->url() ?>"/>
<meta property="og:title" content="<?= $page->title() ?>"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:site" content="@smithsonianfolk"/>
<?php if($page->intendedTemplate() == 'home'): ?>
<meta property="og:type" content="website"/>
<meta property="og:title" content="<?= $og_site_name ?>"/>
<meta property="og:description" content="<?= $og_description ?>"/>
<meta property="og:image" content="<?= $home_image ?>"/>
<?php foreach($page->images() as $image): ?>
<meta property="og:image" content="<?= $image->url() ?>"/>
<?php endforeach; ?>
<?php elseif($page->intendedTemplate() == 'blog'): ?>
<meta property="og:type" content="website"/>
<meta property="og:image" content="<?= $page->children()->sortBy('date')->flip()->first()->image()->url() ?>"/>
<meta property="og:image:width" content="350"/>
<meta property="og:image:height" content="233"/>
<meta property="og:description" content="<?= $page->children()->sortBy('date')->flip()->first()->copy() ?>"/>
<?php elseif($page->intendedTemplate() == 'blog-article'): ?>
<meta property="og:type" content="article"/>
<meta property="og:image" content="<?= $page->image()->url() ?>"/>
<meta property="og:image:width" content="350"/>
<meta property="og:image:height" content="233"/>
<meta property="og:description" content="<?= $page->copy() ?>"/>
<?php elseif($page->intendedTemplate() == 'past-festivals'): ?>
<meta property="og:type" content="website"/>
<meta property="og:image" content="<?= $page->children()->first()->children()->first()->image()->url() ?>"/>
<meta property="og:image:width" content="373"/>
<meta property="og:image:height" content="341"/>
<meta property="og:description" content="<?= $page->title() ?>"/>
<?php elseif($page->intendedTemplate() == 'program'): ?>
<meta property="og:type" content="website"/>
<meta property="og:image" content="<?= $page->image()->url() ?>"/>
<meta property="og:image:width" content="324"/>
<meta property="og:image:height" content="105"/>
<meta property="og:description" content="<?= $page->blurb() ?>"/>
<?php elseif($page->intendedTemplate() == 'program-category'): ?>
<meta property="og:type" content="website"/>
<meta property="og:image" content="<?= $page->image()->url() ?>"/>
<meta property="og:image:width" content="700"/>
<meta property="og:image:height" content="467"/>
<meta property="og:description" content="<?= $page->blurb() ?>"/>
<?php elseif($page->intendedTemplate() == 'explore'): ?>
<meta property="og:type" content="website"/>
<meta property="og:image" content="<?= $pages->find('explore')->children()->find('magazine')->children()->first()->image()->url() ?>"/>
<meta property="og:description" content="Explore the resources of Smithsonian Folkways"/>
<?php elseif($page->intendedTemplate() == 'learn'): ?>
<meta property="og:type" content="website"/>
<?php if(c::get('isFestival')): ?>
<meta property="og:image" content="<?= $pages->find('programs')->children()->first()->image()->url() ?>"/>
<meta property="og:description" content="<?= $pages->find('programs')->children()->first()->blurb() ?>"/>
<?php else: ?>
<meta property="og:image" content="<?= $page->children()->first()->children()->first()->image()->url() ?>"/>
<meta property="og:description" content="Learn what Smithsonian Folkways has to offer educators and students"/>
<?php endif; ?>
<?php elseif($page->intendedTemplate() == 'shop'): ?>
<meta property="og:type" content="website"/>
<meta property="og:image" content="<?= $pages->find('explore')->children()->find('sounds')->first()->image()->url() ?>"/>
<meta property="og:description" content="Shop for classic and new Folkways sounds"/>
<?php elseif($page->intendedTemplate() == 'album'): ?>
<meta property="og:type" content="product"/>
<meta property="og:image" content="<?= $page->image($page->img())->url() ?>"/>
<meta property="og:image:width" content="250"/>
<meta property="og:image:height" content="250"/>
<meta property="og:description" content="<?= $page->copy() ?>"/>
<?php elseif($page->intendedTemplate() == 'magazine-article'): ?>
<meta property="og:type" content="article"/>
<meta property="og:image" content="<?= $page->image()->url() ?>"/>
<meta property="og:description" content="<?= $page->contents() ?>"/>
<?php elseif($page->intendedTemplate() == 'general-content'): ?>
<meta property="og:type" content="website"/>
<meta property="og:image" content="<?= $page->image()->url() ?>"/>
<?php if('' != $page->intro()): ?>
<meta property="pagetype" content="monitor"/>
<meta property="og:description" content="<?= $page->intro() ?>"/>
<?php else: ?>
<meta property="og:description" content="<?= $page->copy() ?>"/>
<?php endif; ?>
<?php elseif(null != $page->children()->find('hero')): ?>
<meta property="og:type" content="website"/>
<meta property="og:image" content="<?= $page->children()->find('hero')->image()->url() ?>"/>
<meta property="og:description" content="<?= $page->children()->find('hero')->copy() ?>"/>
<?php else: ?>
<meta property="og:type" content="website"/>
<?php if(null != $page->image()): ?>
<meta property="og:image" content="<?= $page->image()->url() ?>"/>
<?php else: ?>
<meta property="og:image" content="<?= $home_image ?>"/>
<?php endif; ?>
<meta property="og:description" content="<?= $page->title() ?>"/>
<?php endif; ?>