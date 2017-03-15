<!-- Cards--><section class="container cards-section"><div class="row"><main class="content col-sm-7"><h2 class="section-title">Cards</h2><a id="cards" class="anchor-link"></a><div class="intro-copy content link-underline"><p>Cards are the smallest component pieces on the site besides UI elements. They usually consist of an image, a tag or date, a title, and the first few words of the copy. Some cards contain audio players or video buttons. Some cards lie horizontally. Here you'll find code to study and copy.</p></div></main></div><!-- Full Feature Card--><div class="codeblock"><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Full Feature Card</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><div class="card col-xs-12 full-feature-card"><div class="row"><div class="image col-md-6 col-lg-7"><a href="#"><?php echo $section->image('ralphRinzler.jpg'); ?></a></div><div class="details col-md-6 col-lg-5"><div class="details-inner"><a href="#" class="high title"><span class="light"><span class="er">Ralph Rinzler Folklife Archives and Collections</span></span></a><div class="description link-underline"><p>The Center for Folklife and Cultural Heritage is home to the Ralph Rinzler Folklife Archives and Collections, a public resource named for the founding director of the Smithsonian Folklife Festival.</p></div><a class="high more-link"><div class="light"><div class="er"><div class="more-link-text">more</div><div class="more-link-arrow icon-arrow2"></div></div></div></a></div></div></div><div class="row"><div class="col-sm-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div></div></div></div><div class="row"><div class="col-sm-12"><pre class="sass"><code>.full-feature-card {
	@include margin-bottom(0);
	.tag {
		display: none;
	}
	.image {
		@include respond-to(break2max) {
			padding-bottom: 2.5vw;
		}
	}
	.title {
		@include lg-serif;
		@include margin-bottom(2);
	}
	.details-inner {
		@include padding-top(0);
		@include padding-right(2);
		@include respond-to(break2max) {
			padding-left:0; // for full width detail copy
		}
	}
	.description {
		@include lg-sans;
	}
}</code></pre></div><div class="col-sm-12"><pre class="html"><code>&lt;div class="row"&gt;
	&lt;div class="card col-xs-12 full-feature-card"&gt;
		&lt;div class="row"&gt;
			&lt;div class="image col-md-6 col-lg-7"&gt;
				&lt;a href="#"&gt;&lt;img src="ralphRinzler.jpg" alt="Ralph Rinzler Folklife Archives and Collections"&gt;&lt;/a&gt;
			&lt;/div&gt;
			&lt;div class="details col-md-6 col-lg-5"&gt;
				&lt;div class="details-inner"&gt;
					&lt;a href="#" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;Ralph Rinzler Folklife Archives and Collections&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;
					&lt;div class="description link-underline"&gt;
						&lt;p&gt;The Center for Folklife and Cultural Heritage is home to the Ralph Rinzler Folklife Archives and Collections, a public resource named for the founding director of the Smithsonian Folklife Festival.&lt;/p&gt;
					&lt;/div&gt;
					&lt;a href="#" class="high more-link "&gt;
						&lt;div class="light"&gt;
							&lt;div class="er"&gt;
								&lt;div class="more-link-text"&gt;more&lt;/div&gt;&lt;div class="more-link-arrow icon-arrow2"&gt;&lt;/div&gt;
							&lt;/div&gt;
						&lt;/div&gt;
					&lt;/a&gt;                      
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;  
&lt;/div&gt;


</code></pre></div></div></div><!-- Figure with Caption--><div class="codeblock"><a id="figure-with-caption" class="anchor-link"></a><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Figure with Caption</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><?php $src = $section->image('figure-with-caption.jpg'); ?><div class="col-sm-5"><figure><img src="<?= $src->url() ?>" alt="<?= $page->title() ?>" class="ms-header-image"/><?php if($caption = $src->caption()->kt()): ?><figcaption><?php echo $caption; ?><?php if($credit = $src->credit()->kt()): ?><div class="credit"><?php echo $credit; ?></div><?php endif; ?></figcaption><?php endif; ?></figure><div class="row"><div class="col-sm-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div></div></div><div class="col-sm-7"><pre class="sass"><code>// too many rules to list. See general.scss</code></pre></div><div class="col-sm-7"><pre class="html"><code>&lt;div class="col-sm-5"&gt;
	&lt;figure&gt;
		&lt;img src="//127.0.0.1.xip.io:3007/content/5-cards/figure-with-caption.jpg" alt="Home" class="ms-header-image"&gt;
		&lt;figcaption&gt;
			&lt;p&gt;A blacksmith heats his iron in a traditional forge before demonstrating the technique for shaping the metal.&LT;/p&gt;
			&lt;div class="credit"&gt;
				&lt;p&gt;Photo by Anne Pedersen, Ralph Rinzler Folklife Archives&LT;/p&gt;
			&lt;/div&gt;
		&lt;/figcaption&gt;
	&lt;/figure&gt;
&lt;/div&gt;
</code></pre></div></div></div><!-- Horizontal Card--><div class="codeblock"><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Horizontal Card</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><div class="card horizontal-card folkways-magazine-card col-xs-12 col-sm-6 top-border-card"><div class="row"><div class="image col-xs-6"><a href="#"><?php echo $section->image('horizontal.png'); ?></a></div><div class="details col-xs-6"><div class="details-inner"><div class="tag">Recording Spotlight</div><a href="#" class="high title"><span class="light"><span class="er">Rasta Sounds</span></span></a><div class="description link-underline"><p>The global African Diaspora has often searched through music for a “post-racist utopia.”</p></div></div></div></div><div class="row"><div class="col-sm-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div></div></div><div class="col-sm-6"><pre class="sass"><code>.folkways-magazine-card {
	.tag {
		// mobile only
		@include respond-to(break2max) {
			padding-top: 1.5rem;
		}
	}
	.title {
		@include lg-magazine-title;
		// mobile-only
		@include respond-to(break2max) {
			// smaller for longer titles
			@include sm-magazine-title;
		}
	}
}</code></pre></div><div class="col-sm-6"><pre class="html"><code>&lt;li class="card horizontal-card folkways-magazine-card col-xs-6 top-border"&gt;
	&lt;div class="row"&gt;
		&lt;div class="image col-sm-6"&gt;
			&lt;a href="#"&gt;
				&lt;img src="horizontal.png"&gt;
			&lt;/a&gt;
		&lt;/div&gt;
		&lt;div class="details col-sm-6"&gt;
			&lt;div class="details-inner"&gt;
				&lt;div class="tag"&gt; Recording Spotlight&lt;/div&gt;
				&lt;a class="high title" href="#"&gt; 
					&lt;span class="light"&gt;
						&lt;span class="er"&gt;
							Rasta Sounds
						&lt;/span&gt;
					&lt;/span&gt;
				&lt;/a&gt;
				&lt;div class="description link-underline"&gt;
					&lt;p&gt;The global African Diaspora has often searched through music for a “post-racist utopia.”&lt;p&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/li&gt;</code></pre></div></div></div><!-- Publication Card--><div class="codeblock"><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Publication Card</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><div class="card col-sm-6 publication-card top-border-card"><div class="row"><div class="image col-xs-4"><a href="#"><?php echo $section->image('curatorial-conversations.jpg'); ?></a></div><div class="details col-xs-8"><div class="details-inner"><a href="#" class="high title"><span class="light"><span class="er">Curatorial Conversations: Cultural Representation and the Smithsonian Folklife Festival</span></span></a><div class="author">Edited by Olivia Cadaval, Sojin Kim, and Diana Baird N’Diaye</div><a href="#" class="high buy-now-button"><span class="light"><span class="er">Order from University Press of Mississippi&nbsp;&#x2192</span></span></a></div></div></div><div class="row"><div class="col-sm-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div></div></div></div><div class="row"><div class="col-sm-12"><pre class="sass"><code>.publication-card {
	@include margin-bottom(4); // add back to horizontal cards section
	.card:nth-of-type(2n + 1) {
		clear:left; // keep cards 1, 3, 5, 7, etc cleared left so don't hang on previous card
	}
	.title {
		@include margin-top(-0.8);
		@include lg-sans;
	}
	.author {
		@include sm-sans;
		@include margin-top(1);
		@include margin-bottom(3);
	}
	.details-inner {
		@include padding-top(2);
	}
	.more-link {
		display: none;
	}
	.buy-now-button {
		@include buy-button;
		text-transform: initial;
		color: $black65;
		font-weight: 400;
		display: block; // force new line for multiple buttons
	}
}</code></pre></div><div class="col-sm-12"><pre class="html"><code>&lt;div class="row"&gt;
	&lt;div class="card col-xs-12 full-feature-card"&gt;
		&lt;div class="row"&gt;
			&lt;div class="image col-md-6 col-lg-7"&gt;
				&lt;a href="#"&gt;&lt;img src="ralphRinzler.jpg" alt="Ralph Rinzler Folklife Archives and Collections"&gt;&lt;/a&gt;
			&lt;/div&gt;
			&lt;div class="details col-md-6 col-lg-5"&gt;
				&lt;div class="details-inner"&gt;
					&lt;a href="#" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;Ralph Rinzler Folklife Archives and Collections&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;
					&lt;div class="description link-underline"&gt;
						&lt;p&gt;The Center for Folklife and Cultural Heritage is home to the Ralph Rinzler Folklife Archives and Collections, a public resource named for the founding director of the Smithsonian Folklife Festival.&lt;/p&gt;
					&lt;/div&gt;
					&lt;a href="#" class="high more-link "&gt;
						&lt;div class="light"&gt;
							&lt;div class="er"&gt;
								&lt;div class="more-link-text"&gt;more&lt;/div&gt;&lt;div class="more-link-arrow icon-arrow2"&gt;&lt;/div&gt;
							&lt;/div&gt;
						&lt;/div&gt;
					&lt;/a&gt;                      
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;  
&lt;/div&gt;
</code></pre></div></div></div><!-- Video Card - YouTube--><div class="codeblock"><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Video Card &mdash; YouTube</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><li class="card video-card col-sm-4"><div class="row"><div data-id="9U1WBi2kTNY" data-type="youtube" data-title="Bristoff Family Circus" data-description="Lorem ipsum... <a>more</a>" class="video col-sm-12"><div class="center-box"><div class="modal-trigger"><?php echo $section->image('video.png'); ?></div><div class="icon-play-button"></div></div></div><div class="details col-sm-12"><div class="details-inner"><div class="tag">Festival 2017</div><a href="#" class="high title"><span class="light"><span class="er">Circus Arts 2017</span></span></a><div class="description link-underline"><p>See the culture and history of circus arts across the U.S.</p></div></div></div></div><div class="row"><div class="col-sm-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div></div></li><div class="col-md-8"><pre class="sass"><code>// As video cards can have different looks, we set the title font based on the section via the CSS
.folkways-learn-section {
	.title {
		@include serif-sm;
		font-weight: 600;
	}
}</code></pre></div><div class="col-md-8"><pre class="html"><code>&lt;li class="card video-card col-sm-4"&gt;
	&lt;div class="row"&gt;
		&lt;div class="video col-xs-12" data-id="204687018" data-title="Festival 101" data-description="Lorem ipsum... &lt;a&gt;more&lt;/a&gt;"&gt;
			&lt;div class="center-box"&gt;
				&lt;div class="modal-trigger"&gt;
					&lt;img src="video.png"&gt;
				&lt;/div&gt;
				&lt;div class="icon-play-button"&gt;&lt;/div&gt;
		&lt;div class="details col-xs-12"&gt;
			&lt;div class="details-inner"&gt;
				&lt;div class="tag"&gt;Festival 2017&lt;/div&gt;
				&lt;a class="high title" href="#"&gt;
					&lt;span class="light"&gt;
						&lt;span class="er"&gt;
							Circus Arts 2017
						&lt;/span&gt;
					&lt;/span&gt;
				&lt;/a&gt;
				&lt;div class="description link-underline"&gt;
					&lt;p&gt;See the culture and history of circus arts across the U.S.&lt;/p&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/li&gt;

// The pop-up uses the remodal.js plugin (http://vodkabears.github.io/remodal)
// The following code should be in the footer and is used by all video pop-ups on the page
&lt;button class="remodal-close visually-hidden" data-remodal-action="close"&gt;
&lt;div data-remodal-id="modal"&gt;
	&lt;div class="remodal-iframe" id="remodal-iframe"&gt;
	&lt;div class="remodal-copy"&gt;
		&lt;h3 class="remodal-title"&gt;
		&lt;div class="remodal-description"&gt;
			&lt;p&gt;&lt;/p&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre></div></div></div><!-- Video Card - Vimeo--><div class="codeblock"><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Video Card &mdash; Vimeo</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><li class="card video-card col-sm-4"><div class="row"><div data-id="204687018" data-type="vimeo" data-title="Festival 101" data-description="Lorem ipsum... <a>more</a>" class="video col-sm-12"><div class="center-box"><div class="modal-trigger"><?php echo $section->image('video.png'); ?></div><div class="icon-play-button"></div></div></div><div class="details col-sm-12"><div class="details-inner"><div class="tag">Festival 2017</div><a href="#" class="high title"><span class="light"><span class="er">Circus Arts 2017</span></span></a><div class="description link-underline"><p>See the culture and history of circus arts across the U.S.</p></div></div></div></div><div class="row"><div class="col-sm-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div></div></li><div class="col-md-8"><pre class="sass"><code>// As video cards can have different looks, we set the title font based on the section via the CSS
.folkways-learn-section {
	.title {
		@include serif-sm;
		font-weight: 600;
	}
}</code></pre></div><div class="col-md-8"><pre class="html"><code>&lt;li class="card video-card col-sm-4"&gt;
	&lt;div class="row"&gt;
		&lt;div class="video col-xs-12" data-id="204687018" data-title="Festival 101" data-description="Lorem ipsum... &lt;a&gt;more&lt;/a&gt;"&gt;
			&lt;div class="center-box"&gt;
				&lt;div class="modal-trigger"&gt;
					&lt;img src="video.png"&gt;
				&lt;/div&gt;
				&lt;div class="icon-play-button"&gt;&lt;/div&gt;
		&lt;div class="details col-xs-12"&gt;
			&lt;div class="details-inner"&gt;
				&lt;div class="tag"&gt;Festival 2017&lt;/div&gt;
				&lt;a class="high title" href="#"&gt;
					&lt;span class="light"&gt;
						&lt;span class="er"&gt;
							Circus Arts 2017
						&lt;/span&gt;
					&lt;/span&gt;
				&lt;/a&gt;
				&lt;div class="description link-underline"&gt;
					&lt;p&gt;See the culture and history of circus arts across the U.S.&lt;/p&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/li&gt;

// The pop-up uses the remodal.js plugin (http://vodkabears.github.io/remodal)
// The following code should be in the footer and is used by all video pop-ups on the page
&lt;button class="remodal-close visually-hidden" data-remodal-action="close"&gt;
&lt;div data-remodal-id="modal"&gt;
	&lt;div class="remodal-iframe" id="remodal-iframe"&gt;
	&lt;div class="remodal-copy"&gt;
		&lt;h3 class="remodal-title"&gt;
		&lt;div class="remodal-description"&gt;
			&lt;p&gt;&lt;/p&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre></div></div></div><!-- Tall Audio Card--><div class="codeblock"><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Tall Audio Card</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><div class="card audio-card col-xs-6 col-sm-3 card-xs-break-2 full-border-card"><div class="image"><a href="#"><?php echo $section->image('audio.png'); ?></a></div><div class="details"><div class="details-inner"><div class="tag">New Release</div><div class="title-wrapper"><a href="#" class="high title"><span class="light"><span class="er">Quelbe!</span></span></a><div class="artist">Stanley and the Ten Sleepless Nights</div></div><div class="audio-player"><audio class="mejs-player" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'></div></div></div></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div><div class="col-md-9"><pre class="html"><code>&lt;div class="card audio-card col-xs-6 col-sm-3 card-xs-break-2 full-border-card"&gt;
	&lt;div class="image"&gt;	
		&lt;a href="#"&gt;
			&lt;img src="/320x320.jpg"&gt;
		&lt;/a&gt;
	&lt;/div&gt;
	&lt;div class="details"&gt;
		&lt;div class="details-inner"&gt;
			&lt;div class="tag"&gt;New Release&lt;/div&gt;
			&lt;div class="title-wrapper" &gt;
				&lt;a class="high title" href="#"&gt;
					&lt;span class="light"&gt;
						&lt;span class="er"&gt;
							Quelbe!
						&lt;/span&gt;
					&lt;/span&gt;
				&lt;/a&gt;
				&lt;div class="artist"&gt;
					Stanley and the Ten Sleepless Nights
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="audio-player"&gt;
				&lt;audio class="mejs-player" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'&gt;
				&lt;!-- mejs media player will build itself on page load and we wrap a few key elements in common-scripts.js --&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre></div><div class="col-md-9"><pre class="sass"><code>// audio styles are too long to list here and have their own SASS file called audio.scss</code></pre></div></div></div><!-- Tall Audio Multi-Track Card--><div class="codeblock"><a id="tall-audio-multi-track-card" class="anchor-link"></a><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Tall Audio Multi-Track Card</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><div class="card audio-card tall-audio-multi-track-card col-xs-6 col-sm-3 card-xs-break-2 full-border-card"><div class="image"><a href="#"><?php echo $section->image('audio.png'); ?></a></div><div class="details"><div class="details-inner"><div class="tag">New Release</div><div class="title-wrapper"><a href="#" class="high title"><span class="light"><span class="er">Quelbe!</span></span></a><div class="artist">Stanley and the Ten Sleepless Nights</div></div><div class="audio-player"><div class="track-title">Cigar Win the Race</div><audio class="mejs-player" src="/assets/audio/SFW40568/SFW40568_01.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'></div><div class="audio-player"><div class="track-title">Lagoon Mouth</div><audio class="mejs-player" src="/assets/audio/SFW40568/SFW40568_02.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'></div></div></div></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div><div class="col-md-9"><pre class="html"><code>&lt;div class="card audio-card col-xs-6 col-sm-3 card-xs-break-2 full-border-card"&gt;
	&lt;div class="image"&gt;	
		&lt;a href="#"&gt;
			&lt;img src="/320x320.jpg"&gt;
		&lt;/a&gt;
	&lt;/div&gt;
	&lt;div class="details"&gt;
		&lt;div class="details-inner"&gt;
			&lt;div class="tag"&gt;New Release&lt;/div&gt;
			&lt;div class="title-wrapper" &gt;
				&lt;a class="high title" href="#"&gt;
					&lt;span class="light"&gt;
						&lt;span class="er"&gt;
							Quelbe!
						&lt;/span&gt;
					&lt;/span&gt;
				&lt;/a&gt;
				&lt;div class="artist"&gt;
					Stanley and the Ten Sleepless Nights
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="audio-player"&gt;
				&lt;audio class="mejs-player" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'&gt;
				&lt;!-- mejs media player will build itself on page load and we wrap a few key elements in common-scripts.js --&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre></div><div class="col-md-9"><pre class="sass"><code>// audio styles are too long to list here and have their own SASS file called audio.scss</code></pre></div></div></div><!-- Playlist Audio Card--><div class="codeblock"><a id="playlist-audio-card" class="anchor-link"></a><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Playlist Audio Card</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><script src="/assets/audio/myplaylist-calypso.js" type="text/javascript"></script><div class="card audio-card playlist-audio-card col-xs-6 col-sm-3 card-xs-break-2 full-border-card"><div class="image"><a href="#"><img src="<?= $section->image('audio.png')->url() ?>" class="playlist-cover"/></a></div><div class="details"><div class="details-inner"><div class="title-wrapper"><a href="#" class="high title"><span class="light"><span class="er playlist-title">Quelbe!</span></span></a><div id="playlist-artist" class="artist">Stanley and the Ten Sleepless Nights</div></div><div class="audio-player"><audio id="playlist-audio" class="playlist-audio" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'></audio><div class="playlist-controls"><div class="previous-button icon-folklife-leftarrow"></div><div class="next-button icon-folklife-rightarrow"></div></div></div></div></div></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div><div class="col-md-9"><pre class="html"><code>&lt;script src="/assets/audio/myplaylist-calypso.js" type="text/javascript"&gt;&lt;/&gt;
&lt;div class="card audio-card playlist-audio-card col-xs-6 col-sm-3 card-xs-break-2 full-border-card"&gt;
	&lt;div class="image"&gt;	
		&lt;a href="#"&gt;
			&lt;img class="playlist-cover" src="/320x320.jpg"&gt;
		&lt;/a&gt;
	&lt;/div&gt;
	&lt;div class="details"&gt;
		&lt;div class="details-inner"&gt;
			&lt;div class="title-wrapper" &gt;
				&lt;a class="high title" href="#"&gt;
					&lt;span class="light"&gt;
						&lt;span class="playlist-title" class="er"&gt;
							Quelbe!
						&lt;/span&gt;
					&lt;/span&gt;
				&lt;/a&gt;
				&lt;div id="playlist-artist" class="artist"&gt;
					Stanley and the Ten Sleepless Nights
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="audio-player"&gt;
				&lt;audio id="playlist-audio" class="playlist-audio" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'&gt;
				&lt;!-- mejs media player will build itself on page load and we wrap a few key elements in common-scripts.js --&gt;
				&lt;div class="playlist-controls"&gt;
					&lt;div class="previous-button icon-folklife-leftarrow"&gt;&lt;/div&gt;
					&lt;div class="next-button icon-folklife-rightarrow"&gt;&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre></div><div class="col-md-9"><pre class="sass"><code>// audio styles are too long to list here and have their own SASS file called audio.scss</code></pre></div></div></div><!-- Horizontal Playlist--><div class="codeblock"><a id="horizontal-playlist" class="anchor-link"></a><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Horizontal Playlist</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><script src="/assets/audio/myplaylist-calypso.js" type="text/javascript"></script><div class="card audio-card playlist-audio-card horizontal-audio-card-third full-border-horizontal-card col-xs-6 col-sm-4 card-xs-break-2"><div class="row"><div class="image col-xs-4"><a href="#"><img src="<?= $section->image('audio.png')->url() ?>" class="playlist-cover"/></a></div><div class="details col-xs-8"><div class="details-inner"><div class="title-wrapper"><a href="#" class="high title"><span class="light"><span class="er playlist-title">Quelbe!</span></span></a><div id="playlist-artist" class="artist">Stanley and the Ten Sleepless Nights</div></div><div class="audio-player"><audio id="playlist-audio" class="playlist-audio" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'></audio><div class="playlist-controls"><div class="previous-button icon-folklife-leftarrow"></div><div class="next-button icon-folklife-rightarrow"></div></div></div></div></div></div></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div><div class="col-md-8"><pre class="html"><code>&lt;script src="/assets/audio/myplaylist-calypso.js" type="text/javascript"&gt;&lt;/&gt;
&lt;div class="card audio-card playlist-audio-card horizontal-audio-card-third full-border-horizontal-card col-xs-6 col-sm-4 card-xs-break-2"&gt;
    &lt;div class="row"&gt;
        &lt;div class="image col-xs-4"&gt;
            &lt;a href="#"&gt;&lt;img src="http://media.smithsonianfolkways.org/images/album_covers/SF700/COOK00914.jpg" class="playlist-cover"&gt;&lt;/a&gt;
        &lt;/div&gt;
        &lt;div class="details col-xs-8"&gt;
            &lt;div class="details-inner" style=""&gt;
                &lt;div class="title-wrapper"&gt;&lt;a href="#" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er playlist-title"&gt;Antiguan Girls&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;
                    &lt;div id="playlist-artist" class="artist"&gt;Lord Melody&lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="audio-player"&gt;&lt;span class="mejs-offscreen"&gt;Audio Player&lt;/span&gt;
                    &lt;audio id="playlist-audio" class="playlist-audio" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'&gt;&lt;/audio&gt;
					&lt;!-- mejs media player will build itself on page load and we wrap a few key elements in common-scripts.js --&gt;
                    &lt;div class="playlist-controls"&gt;
                        &lt;div class="previous-button icon-folklife-leftarrow"&gt;&lt;/div&gt;
                        &lt;div class="next-button icon-folklife-rightarrow"&gt;&lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre></div><div class="col-md-8"><pre class="sass"><code>// audio styles are too long to list here and have their own SASS file called audio.scss</code></pre></div></div></div><!-- Horizontal Text Audio Card--><div class="codeblock"><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Horizontal Text Audio Card</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><div class="card audio-card col-xs-12 col-sm-3 card-xs-break-2 full-border-card"><div class="details"><div class="details-inner"><div class="tag">New Release</div><div class="title-wrapper"><a href="#" class="high title"><span class="light"><span class="er">Quelbe!</span></span></a><div class="artist">Stanley and the Ten Sleepless Nights</div></div><div class="audio-player"><audio class="mejs-player" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'></div></div></div></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div><div class="col-md-9"><pre class="html"><code>&lt;div class="card audio-card col-xs-12 col-sm-3 full-border-card"&gt;
	&lt;div class="details"&gt;
		&lt;div class="details-inner"&gt;
			&lt;div class="tag"&gt;New Release&lt;/div&gt;
			&lt;div class="title-wrapper" &gt;
				&lt;a class="high title" href="#"&gt;
					&lt;span class="light"&gt;
						&lt;span class="er"&gt;
							Quelbe!
						&lt;/span&gt;
					&lt;/span&gt;
				&lt;/a&gt;
				&lt;div class="artist"&gt;
					Stanley and the Ten Sleepless Nights
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="audio-player"&gt;
				&lt;audio class="mejs-player" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'&gt;
				&lt;!-- mejs media player will build itself on page load and we wrap a few key elements in common-scripts.js --&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre></div><div class="col-md-9"><pre class="sass"><code>// audio styles are too long to list here and have their own SASS file called audio.scss</code></pre></div></div></div><!-- Horizontal Audio Card — Single--><div class="codeblock"><a id="horizontal-audio-card-single" class="anchor-link"></a><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Horizontal Audio Card — Single</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><div class="card audio-card horizontal-audio-card horizontal-audio-card-single full-border-horizontal-card col-sm-4 visible-md visible-lg"><div class="row"><div class="image col-xs-6"><?php echo $section->image('audio.png'); ?></div><div class="details col-xs-6"><div class="details-inner"><div class="title-wrapper"><a href="#" class="high title"><span class="light"><span class="er">Quelbe!</span></span></a><div class="artist">Stanley and the Ten Sleepless Nights</div></div><div class="audio-player"><audio class="mejs-player" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'></div></div></div></div></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div><div class="col-md-8"><pre class="html"><code>&lt;div class="card audio-card horizontal-audio-card horizontal-card-single full-border-horizontal-card col-sm-4"&gt;
	&lt;div class="row"&gt;
		&lt;div class="image col-xs-6"&gt;
			&lt;a href="#"&gt;&lt;img src="/210x210.jpg" alt=""&gt;&lt;/a&gt;
		&lt;/div&gt;
		&lt;div class="details col-xs-6"&gt;
			&lt;div class="details-inner" style=""&gt;
				&lt;div class="title-wrapper"&gt;
					&lt;a href="#" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;Quelbe!&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;
					&lt;div class="artist"&gt;Stanley and the Ten Sleepless Nights&lt;/div&gt;
				&lt;/div&gt;
				&lt;div class="audio-player"&gt;
					&lt;audio class="mejs-player" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'&gt;
					&lt;!-- mejs media player will build itself on page load and we wrap a few key elements in common-scripts.js --&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre></div><div class="col-md-8"><pre class="sass"><code>// audio styles are too long to list here and have their own SASS file called audio.scss</code></pre></div></div></div><!-- Horizontal Audio Card — Playlist – Thin--><div class="codeblock"><a id="horizontal-audio-card-playlist-thin" class="anchor-link"></a><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Horizontal Audio Card — Playlist – Thin</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row visible-xs visible-sm"><div class="card col-sm-4"><p>Swap horizontal card with tall card for this size</p></div></div><div class="row"><div class="card audio-card horizontal-audio-card horizontal-audio-card-playlist-thin full-border-horizontal-card col-sm-4 visible-md visible-lg"><div class="row"><div class="image col-xs-3"><?php echo $section->image('audio.png'); ?></div><div class="details col-xs-9"><div class="details-inner"><div class="title-wrapper"><a href="#" class="high title"><span class="light"><span class="er">Quelbe!</span></span></a><div class="artist">Stanley and the Ten Sleepless Nights</div></div><div class="audio-player"><audio class="mejs-player" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'></div></div></div></div></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div><div class="col-md-8"><pre class="html"><code>&lt;div class="card audio-card horizontal-audio-card horizontal-audio-card-playlist full-border-horizontal-card col-sm-4 visible-md visible-lg"&gt;
	&lt;div class="row"&gt;
		&lt;div class="image col-xs-3"&gt;
			&lt;a href="#"&gt;&lt;img src="/210x210.jpg" alt=""&gt;&lt;/a&gt;
		&lt;/div&gt;
		&lt;div class="details col-xs-9"&gt;
			&lt;div class="details-inner" style=""&gt;
				&lt;div class="title-wrapper"&gt;
					&lt;a href="#" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;Quelbe!&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;
					&lt;div class="artist"&gt;Stanley and the Ten Sleepless Nights&lt;/div&gt;
				&lt;/div&gt;
				&lt;div class="audio-player"&gt;
					&lt;audio class="mejs-player" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'&gt;
					&lt;!-- mejs media player will build itself on page load and we wrap a few key elements in common-scripts.js --&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre></div><div class="col-md-8"><pre class="sass"><code>// audio styles are too long to list here and have their own SASS file called audio.scss
// the only difference here is the .horizontal-audio-card-playlist class overrides certain styles of the .horizontal-audio-card class</code></pre></div></div></div><!-- Track listing--><div class="codeblock"><a id="track-listing" class="anchor-link"></a><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Track Listing</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><div class="album-page col-sm-7"><main class="main"><div class="table-responsive"> <table class="table table-hover track-listing"> <?php $track = $section->children()->find('cigar-win-the-race'); ?><tr id="track" class="track"><td class="track-number-play-button"><div class="track-number"><?php echo '100'; ?></div><audio class="mejs-player" src="/assets/audio/SFW40568/<?= $track->track_1() ?>" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'></td><td class="track-title"><?php echo $track->title(); ?></td><td class="track-artist"><?php echo $page->artist(); ?></td><td class="track-length"><?php echo $track->length(); ?></td><td class="track-buy">BUY</td></tr></table></div></main></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div></div><div class="row"><div class="col-md-8"><pre class="html"><code>&lt;div class="album-page"&gt;
    &lt;main class="main col-sm-7"&gt;
        &lt;div class="table-responsive"&gt;
            &lt;table class="table table-hover track-listing"&gt;
                &lt;tbody&gt;
                    &lt;tr class="track"&gt;
                        &lt;td class="track-number-play-button"&gt;
                            &lt;div class="track-number"&gt;100&lt;/div&gt;
                            &lt;audio class="mejs-player" src="/assets/audio/SFW40568/&lt;?= $track-&gt;track_1() ?&gt;" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'&gt;&lt;/audio&gt;
                        &lt;/td&gt;
                        &lt;td class="track-title"&gt;Cigar Win the Race&lt;/td&gt;
                        &lt;td class="track-artist"&gt;&lt;/td&gt;
                        &lt;td class="track-length"&gt;5:42&lt;/td&gt;
                        &lt;td class="track-buy"&gt;BUY&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/tbody&gt;
            &lt;/table&gt;
        &lt;/div&gt;
    &lt;/main&gt;
&lt;/div&gt;
</code></pre></div><div class="col-md-8"><pre class="sass"><code>// audio styles are too long to list here and have their own SASS file called audio.scss
// the border color is changed if this player exists on a page with a body class of .magazine-article-page</code></pre></div></div></div><!-- Vinyl Card--><div class="codeblock"><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Vinyl Card</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><div class="card vinyl-card col-xs-6 col-sm-3"><div class="image"><a href="#"><?php echo $section->image('fannie-lou-hamer.png'); ?></a></div><div class="details"><div class="details-inner"><a href="#" class="high title"><span class="light"><span class="er">Songs My Mother Taught Me</span></span></a><div class="artist">Fannie Lou Hamer</div></div></div></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div><div class="col-sm-9"><pre class="sass"><code>.album-card, .vinyl-card, .books-card {
	.details-inner {
		padding:0;
		@include padding-top(1.7);
	}
	.title {
		@include sm-sans;
		font-weight: 700;
		@include margin-bottom(0.5);
	}
	.artist {
		@include sm-sans;
	}
	@include clear-2; // display cards side-by-side on mobile, clearing every 2nd + 1 cards to the left
	@include respond-to(break2) {@include clear-6;} // display 6 across, clearing every 6th + 1 cards
}</code></pre></div><div class="col-sm-9"><pre class="html"><code>&lt;li class="card vinyl-card col-xs-6 col-sm-3"&gt;
	&lt;div class="image"&gt;
		&lt;a href="#"&gt;&lt;img src="fannie-lou-hamer.png" alt="Songs My Mother Taught Me"&gt;&lt;/a&gt;
	&lt;/div&gt;
	&lt;div class="details"&gt;
		&lt;div class="details-inner"&gt;
			&lt;a href="#" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;Songs My Mother Taught Me&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;
			&lt;div class="artist"&gt;
				&lt;p&gt;Fannie Lou Hamer&lt;/p&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/li&gt;</code></pre></div></div></div><!-- Album Card--><div class="codeblock"><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Album Card</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><div class="card album-card col-xs-6 col-sm-2"><div class="image"><a href="#"><?php echo $section->image('SFW40568.jpeg'); ?></a></div><div class="details"><div class="details-inner"><a href="#" class="high title"><span class="light"><span class="er">Quelbe! Music of the U.S. Virgin Islands</span></span></a><div class="artist">Stanley and the Ten Sleepless Nights</div></div></div></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div><div class="col-sm-10"><pre class="sass"><code>.album-card, .vinyl-card, .books-card {
	.details-inner {
		padding:0;
		@include padding-top(1.7);
	}
	.title {
		@include sm-sans;
		font-weight: 700;
		@include margin-bottom(0.5);
	}
	.artist {
		@include sm-sans;
	}
	@include clear-2; // display cards side-by-side on mobile, clearing every 2nd + 1 cards to the left
	@include respond-to(break2) {@include clear-6;} // display 6 across, clearing every 6th + 1 cards
}</code></pre></div><div class="col-sm-10"><pre class="html"><code>&lt;div class="card album-card col-xs-2 col-sm-2"&gt;
	&lt;div class="image"&gt;
		&lt;a href="#"&gt;&lt;img src="SFW40568.jpeg" alt=""&gt;&lt;/a&gt;
	&lt;/div&gt;
	&lt;div class="details"&gt;
		&lt;div class="details-inner"&gt;
			&lt;a href="#" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;Quelbe! Music of the U.S. Virgin Islands&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;
			&lt;div class="artist"&gt;Stanley and the Ten Sleepless Nights&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;</code></pre></div></div></div><!-- Single Image popup--><div class="codeblock"><a id="single-image-popup" class="anchor-link"></a><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Single Image Popup</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><?php $image_gallery_page = $pages->find('cards')->children()->find('image-gallery'); ?><?php $gallery_img = $image_gallery_page->image('slide1.jpg'); ?><div class="col-sm-5"><div class="tag">Image</div><div class="image-gallery single-image-popup"><!-- first slide visible with gallery icon--><div class="center-box"><div class="modal-trigger"><img src="<?= $section->image('single-image-popup.jpg')->url() ?>" alt="Gallery image" class="gallery-thumbnail"/></div><div class="icon-picture-o"></div></div><ul class="gallery-list"><div class="gallery-image"><div class="gallery-image-inner"><img src="<?= $section->image('single-image-popup.jpg')->url() ?>" alt="Gallery image"/></div></div></ul><ul class="gallery-list-captions"><div class="gallery-caption"><div class="remodal-description">Drawing by children of Bell Gardens Elementary, Bell Gardens, California.</div><div class="remodal-credit">Photo by Lilia Sarmiento. </div></div></ul></div><div class="caption">Drawing by children of Bell Gardens Elementary, Bell Gardens, California. <i>Photo by Lilia Sarmiento.</i></div></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div><div class="col-sm-7"><pre class="sass"><code>
/* same as Image Gallery below */</code></pre></div><div class="col-sm-7"><pre class="html"><code>&lt;div class="col-sm-5"&gt;
    &lt;div class="tag"&gt;Image&lt;/div&gt;
    &lt;div class="image-gallery single-image-popup"&gt;
        &lt;!-- first slide visible with gallery icon--&gt;
        &lt;div class="center-box"&gt;
            &lt;div class="modal-trigger"&gt;&lt;img src="//localhost:3007/content/5-cards/single-image-popup.jpg" alt="Gallery image" class="gallery-thumbnail"&gt;&lt;/div&gt;
            &lt;div class="icon-picture-o"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;ul class="gallery-list"&gt;
            &lt;div class="gallery-image"&gt;
                &lt;div class="gallery-image-inner"&gt;&lt;img src="//localhost:3007/content/5-cards/single-image-popup.jpg" alt="Gallery image"&gt;&lt;/div&gt;
            &lt;/div&gt;
        &lt;/ul&gt;
        &lt;ul class="gallery-list-captions"&gt;
            &lt;div class="gallery-caption"&gt;
                &lt;div class="remodal-description"&gt;Drawing by children of Bell Gardens Elementary, Bell Gardens, California.&lt;/div&gt;
                &lt;div class="remodal-credit"&gt;Photo by Lilia Sarmiento. &lt;/div&gt;
            &lt;/div&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="caption"&gt;Drawing by children of Bell Gardens Elementary, Bell Gardens, California. &lt;i&gt;Photo by Lilia Sarmiento.&lt;/i&gt;&lt;/div&gt;
&lt;/div&gt;

</code></pre></div></div></div><!-- Image Gallery Card--><div class="codeblock"><a id="image-gallery" class="anchor-link"></a><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Image Gallery</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><?php $image_gallery_page = $pages->find('cards')->children()->find('image-gallery'); ?><?php $gallery_img = $image_gallery_page->image('slide1.jpg'); ?><div class="image-gallery col-sm-5"><!-- first slide visible with gallery icon--><div class="center-box"><div class="modal-trigger"><img src="<?= $gallery_img->url() ?>" alt="Gallery image" class="gallery-thumbnail"/></div><div class="icon-gallery"></div></div><ul class="gallery-list"><?php foreach($image_gallery_page->images()->filterBy('filename', '*=', 'slide') as $image): ?><div class="gallery-image"><div class="gallery-image-inner"><img src="<?= $image->url() ?>" alt="Gallery image"/></div></div><?php endforeach; ?></ul><ul class="gallery-list-captions"><?php foreach($image_gallery_page->images()->filterBy('filename', '*=', 'slide') as $image): ?><div class="gallery-caption"><div class="remodal-description"><?php echo $image->caption(); ?></div><div class="remodal-credit"><?php echo $image->credit(); ?></div></div><?php endforeach; ?></ul></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div></div><div class="row"><div class="col-sm-12"><pre class="sass"><code>/* icon font characters (fontastic.me) from ../common/css/vd-icons.scss 
-------------------------------------------------- */
.icon-gallery:before {
    content: "\44";
}
.icon-gallery:after {
  content: "\42";
}

/* icon stacking/sizing from ../common/css/icons.scss 
-------------------------------------------------- */
.icon-gallery {
	cursor: pointer;
	position: absolute;
	@include left(1);
	@include bottom(1);
	&:before {
		z-index: 0;
		color: $black25;
	}
	&:hover:before {
		color: $hover;
	}
	&:after {
		position: absolute;
		z-index: 1;
		color: $black80;
		display: block;
		@include respond-to(break2max) {
			font-size: 6vw;
			top: 2vw;
			left: 1.8vw;
		}
		@include respond-to(break2full) {
			font-size: 2.6vw;
			top: 0.7vw;
			left: 0.6vw;
		}
		@include respond-to(fullwidth) {
			font-size: 4rem;
			top: 1rem;
			left: 0.9rem;
		}
	}
}

/* popup gallery styles from ../common/css/general.scss 
-------------------------------------------------- */
.image-gallery {
	.icon-play-button {
		&:before, &:after {
			@include respond-to(break2max) {
				font-size: 15vw;
			}
			@include respond-to(break2full) {
				font-size: 6vw;
			}
			@include respond-to(fullwidth) {
				font-size: 10rem;
			}
		}
	}
}
.gallery-list, .gallery-list-captions {
	display: none; // initial hide
}
.remodal-captions {
	display: none;
}
.remodal-image-gallery {
	max-width: none !important;
	background-color: transparent;
	.remodal-close {
		right: 0 !important;
		@include respond-to(break2max) {
			top: -4.5rem;
		}
	}
	.remodal-captions {
		display: block;
	}
}
.remodal-gallery {
	.slick-track {
		height: initial;
	}
	.slick-slide {
		height: auto;
		max-width: 100vw;
		@include padding-right(4);
		@include padding-left(4);
	}
	.slick-slide img {
		max-height: 70vh;
		width: auto;
	}
	.gallery-image-inner {
		position: relative; // contain gray overlay
		&:after {
			@include respond-to(break2) {
				content: '';
				display: block;
				position: absolute;
				top: 0;right: 0;bottom: 0;left: 0;
				background-color: rgba(0,0,0,0.8);
			}	
		}
	}
	.slick-active .gallery-image-inner:after {
		display: none;
	}		
	.slick-arrow {
		@include respond-to(break2max) {
			display: none !important;
		}
	}
	.slick-prev {
		@include respond-to(break2) {
			left: 1vw;
		}
		@include respond-to(fullwidth) {
			left: 5rem;
		}
	}
	.slick-next {
		@include respond-to(break2full) {
			right: 1vw;
		}
		@include respond-to(fullwidth) {
			right: 5rem;
		}
	}		
}
.remodal-captions {
	@include margin-top(4);
	// turn down non-active captions
	.slick-slide:not(.slick-active) {
		.remodal-description, .remodal-credit {
			color: $black80;
		}
	}
	.remodal-description {
		@include padding(2);			
		padding-bottom: 0 !important;
		color: white;
	}
	.remodal-credit {
		@include padding(2);
		color: $black50;
		@include caption-sans;
	}
}

/* ...all other styles inherited from video popup */</code></pre></div><div class="col-sm-12"><pre class="html"><code>&lt;div class="image-gallery col-sm-5"&gt;
	&lt;!--first slide visible, gallery icon--&gt;
	&lt;div class="center-box"&gt;
		&lt;div class="modal-trigger"&gt;&lt;img src="//localhost:3007/content/5-cards/1-image-gallery/slide1.jpg" alt="Gallery image" class="gallery-thumbnail"&gt;&lt;/div&gt;
		&lt;div class="icon-gallery"&gt;&lt;/div&gt;
	&lt;/div&gt;
	&lt;!--gallery images--&gt;
	&lt;ul class="gallery-list"&gt;
		&lt;div class="gallery-image"&gt;
			&lt;div class="gallery-image-inner"&gt;
				&lt;img src="//localhost:3007/content/5-cards/1-image-gallery/slide1.jpg" alt="Gallery image"&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-image"&gt;
			&lt;div class="gallery-image-inner"&gt;
				&lt;img src="//localhost:3007/content/5-cards/1-image-gallery/slide2.jpg" alt="Gallery image"&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-image"&gt;
			&lt;div class="gallery-image-inner"&gt;
				&lt;img src="//localhost:3007/content/5-cards/1-image-gallery/slide3.jpg" alt="Gallery image"&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-image"&gt;
			&lt;div class="gallery-image-inner"&gt;
				&lt;img src="//localhost:3007/content/5-cards/1-image-gallery/slide4.jpg" alt="Gallery image"&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-image"&gt;
			&lt;div class="gallery-image-inner"&gt;
				&lt;img src="//localhost:3007/content/5-cards/1-image-gallery/slide5.jpg" alt="Gallery image"&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-image"&gt;
			&lt;div class="gallery-image-inner"&gt;
				&lt;img src="//localhost:3007/content/5-cards/1-image-gallery/slide6.jpg" alt="Gallery image"&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-image"&gt;
			&lt;div class="gallery-image-inner"&gt;
				&lt;img src="//localhost:3007/content/5-cards/1-image-gallery/slide7.jpg" alt="Gallery image"&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-image"&gt;
			&lt;div class="gallery-image-inner"&gt;
				&lt;img src="//localhost:3007/content/5-cards/1-image-gallery/slide8.jpg" alt="Gallery image"&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/ul&gt;
	&lt;!--gallery captions--&gt;
	&lt;ul class="gallery-list-captions"&gt;
		&lt;div class="gallery-caption"&gt;
			&lt;div class="remodal-description"&gt;A shoemaker at La Maison Prodiso’s workshop uses an industrial sewing machine to hem the canvas that forms the upper part of the espadrille.&lt;/div&gt;
			&lt;div class="remodal-credit"&gt;Photo by Josué Castilleja, Ralph Rinzler Folklife Archives&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-caption"&gt;
			&lt;div class="remodal-description"&gt;La Maison Prodiso is filled with stacks of handmade espadrille shoes in bright solid colors or festive stripes.&lt;/div&gt;
			&lt;div class="remodal-credit"&gt;Photo by Josué Castilleja, Ralph Rinzler Folklife Archives&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-caption"&gt;
			&lt;div class="remodal-description"&gt;Jesus Maria Lazkano in his studio in Urdaibai.&lt;/div&gt;
			&lt;div class="remodal-credit"&gt;Photo by Cristina Díaz-Carrera, Ralph Rinzler Folklife Archives&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-caption"&gt;
			&lt;div class="remodal-description"&gt;Master potter Blanka Gomez de Segura demonstrates how to throw a traditional Basque pot.&lt;/div&gt;
			&lt;div class="remodal-credit"&gt;Photo by Josué Castilleja, Ralph Rinzler Folklife Archives&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-caption"&gt;
			&lt;div class="remodal-description"&gt;Blanka Gomez de Segura’s workshop is next to a 900-year-old kiln.&lt;/div&gt;
			&lt;div class="remodal-credit"&gt;Photo by Mary S. Linn, Ralph Rinzler Folklife Archives&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-caption"&gt;
			&lt;div class="remodal-description"&gt;Master stone carver Bernat Vidal poses with an example of his work featuring traditional Basque motifs of the sun in sandstone.&lt;/div&gt;
			&lt;div class="remodal-credit"&gt;Photo by Agustin Sagasti&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-caption"&gt;
			&lt;div class="remodal-description"&gt;Although weaving was once a large industry in her native Durango (Bizkaia), Olga Uribe Salaberria is one of the few to carry forward the tradition.&lt;/div&gt;
			&lt;div class="remodal-credit"&gt;Photo by Eneko Uribe&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="gallery-caption"&gt;
			&lt;div class="remodal-description"&gt;Olga Uribe Salaberria weaves linen cloth on one of her looms.&lt;/div&gt;
			&lt;div class="remodal-credit"&gt;Photo by Eneko Uribe&lt;/div&gt;
		&lt;/div&gt;
	&lt;/ul&gt;
&lt;/div&gt;
</code></pre></div></div></div><!-- Program section dropdown--><div class="codeblock"><a id="program-section-dropdown" class="anchor-link"></a><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Program section dropdown</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><?php $program_section = $section->find('program-section'); ?><div class="col-sm-12"><section class="ms-section <?= $program_section->title() ?>"><a id="<?= $program_section->uid() ?>" class="anchor-link"></a><div class="row clearfix"><div class="col-sm-12"><?php snippet('svg-thin-hr'); ?><a href="javascript:0" class="high"><h2 class="section-title"><span class="light"><span class="er"><?php echo $program_section->title(); ?></span></span></h2></a></div></div><div class="row"><?php $src = $program_section->image(); ?><div class="card horizontal-card col-xs-12"><div class="row"><div class="image col-sm-7"><figure><img src="<?= $src->url() ?>"/><?php if($caption = $program_section->img_caption()->kt()): ?><figcaption><?php echo $caption; ?></figcaption><?php endif; ?></figure></div><div class="details col-sm-5"><div class="details-inner"><a href="<?= $program_section->url() ?>" class="high subtitle"><span class="light"><span class="er"><?php echo htmlspecialchars($program_section->subtitle(), ENT_QUOTES, 'UTF-8'); ?></span></span></a><?php if('' != $program_section->byline()): ?><div class="byline"><?php echo $program_section->byline(); ?></div><?php endif; ?><div class="description link-underline blurb"><?php echo $program_section->blurb()->kt(); ?></div><a href="javascript:0" data-toggle="collapse" data-target="#research-and-documentation-content" aria-expanded="false" class="high more-link accordion-toggle collapsed"><div class="light"><div class="er"><div class="more-link-text">more</div><div class="more-link-arrow icon-arrow2"></div></div></div></a></div></div></div><div class="row"><div class="col-sm-7"><div class="content link-underline"><div id="research-and-documentation-content" aria-expanded="false" class="collapse panel-collapse in"><?php echo $program_section->contents()->kt(); ?></div></div></div></div></div></div></section></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div></div><div class="row"><div class="col-sm-12"><pre class="sass"><code>.ms-section {
	margin-bottom:0;
	.card {
		@include margin-bottom(2.5);
	}
	&-copy {
		@include margin-top(-0.5);	
	}
	.section-title {
		@include margin-top(1.5);
		@include margin-bottom(1.5);
	}
	.subtitle {
		@include md-serif;
		color: #000;
		@include margin-bottom(0.5);
	}
	.byline {
		@include md-sans;
		font-weight: 600;
		@include margin-bottom(3.5);
		@include margin-bottom(2.5);
	}
	.blurb {
		@include md-sans;
	}
	.anchor-link {
		@include top(-5);
	}
	.image {
		cursor: initial;
		@include respond-to(break2max) {
			margin-bottom: 1rem;
		}
	}
	.details-inner {
		padding-top:0 !important;
	}
	.description {
		h3 {
			@include margin-top(4);
			&:first-of-type {
				margin-top:0;
			}
		}
		p {
			@include margin-bottom(1);
		}
	}
	.more-link {
		@include margin-top(1);
	}
}</code></pre></div><div class="col-sm-12"><pre class="html"><code>&lt;section class="ms-section Research &amp; Documentation"&gt;
	&lt;a id="program-section" class="anchor-link"&gt;&lt;/a&gt;
	&lt;div class="row clearfix"&gt;
		&lt;div class="col-sm-12"&gt;
			&lt;!-- must add preserveAspectRatio="none" to svg to get full width in safari, see http://stackoverflow.com/a/24303532--&gt;
			&lt;div class="svg-thin-hr"&gt;&lt;!-- include svg here --&gt;&lt;/div&gt;
			&lt;a
				href="javascript:0" class="high"&gt;
				&lt;h2 class="section-title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;Research &amp; Documentation&lt;/span&gt;&lt;/span&gt;&lt;/h2&gt;&lt;/a&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class="row"&gt;
		&lt;div class="card horizontal-card col-xs-12"&gt;
			&lt;div class="row"&gt;
				&lt;div class="image col-sm-7"&gt;
					&lt;figure&gt;&lt;img src="//localhost:3007/content/5-cards/3-program-section/Research_Doc-home.jpg"&gt;
						&lt;figcaption&gt;
							&lt;p&gt;Photo courtesy of Embassy of Colombia in Washington, DC&lt;/p&gt;
						&lt;/figcaption&gt;
					&lt;/figure&gt;
				&lt;/div&gt;
				&lt;div class="details col-sm-5"&gt;
					&lt;div class="details-inner"&gt;&lt;a href="//localhost:3007/cards/program-section" class="high subtitle"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;
						&lt;div class="description link-underline blurb"&gt;
							&lt;p&gt;&lt;i&gt;My Armenia&lt;/i&gt; is driven by research and documentation methods developed by scholars to produce programs for the Smithsonian Folklife Festival. Working collaboratively with in-country researchers, including anthropologists,
								folklorists, ethnomusicologists, community-based scholars, and more, our goal is to expand and enrich existing scholarship. Additionally, we will create an archival record that will become part of the Smithsonian’s
								permanent collection—data that will inform future generations of researchers.&lt;/p&gt;
						&lt;/div&gt;
						&lt;a href="javascript:0" data-toggle="collapse" data-target="#research-and-documentation-content" aria-expanded="false" class="high more-link accordion-toggle collapsed"&gt;
							&lt;div class="light"&gt;
								&lt;div class="er"&gt;
									&lt;div class="more-link-text"&gt;more&lt;/div&gt;
									&lt;div class="more-link-arrow icon-arrow2"&gt;&lt;/div&gt;
								&lt;/div&gt;
							&lt;/div&gt;
						&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="row"&gt;
				&lt;div class="col-sm-7"&gt;
					&lt;div class="description link-underline"&gt;
						&lt;div id="research-and-documentation-content" aria-expanded="false" class="panel-collapse collapse" style="height: 320px;"&gt;
							&lt;p&gt;Our research teams work directly with communities to identify the cultural heritage they cherish most—the places, traditions, music, dance, craft, food, and other expressions that define their community identity. We will
								also document key knowledge and skills needed within a particular traditional practice. For a musician, this might include songs, instrumental skills, and performing styles; for a craftsperson, materials, designs, and
								techniques.&lt;/p&gt;
							&lt;p&gt;We will identify specific community members who are exemplars of their cultural practice, as indicated by their status and recognition within their community. All of this information is carefully documented and archived
								for future use and will form the foundation of community-based tourism development in Armenia.&lt;/p&gt;
						&lt;/div&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/section&gt;

</code></pre></div></div></div><!-- Participants--><div class="codeblock"><a id="participants" class="anchor-link"></a><div class="row"><div class="col-sm-8"><h3 class="section-subtitle">Participants</h3></div><?php snippet('show-html'); ?><?php snippet('show-sass'); ?></div><div class="row"><?php $participants = $section->find('participants'); ?><div class="col-sm-12"><section class="participants-section"><ul class="row"><?php foreach ($participants->children()->visible()->limit(6) as $card): ?><?php snippet('card-participant', array('card' => $card )); ?><?php endforeach; ?></ul></section></div><div class="col-xs-12 visible-xs"><?php snippet('show-html-mobile'); ?><?php snippet('show-sass-mobile'); ?></div></div><div class="row"><div class="col-sm-12"><pre class="sass"><code>.participants-section {
	.title {
		@include sm-sans;
		text-align: center;
	}
	.details-inner {
		@include padding-top(1);
	}
}</code></pre></div><div class="col-sm-12"><pre class="html"><code>&lt;section class="participants-section"&gt;&lt;ul class="row"&gt;
&lt;li class="card col-xs-6 col-sm-2 card-xs-break-2 card-sm-break-6"&gt;
  &lt;div class="image"&gt;&lt;a href="//localhost:3007/cards/participants/jose-francisco-kinku-zinkunegi-errukine-olaziregi"&gt;&lt;img src="//localhost:3007/content/5-cards/4-participants/1-jose-francisco-kinku-zinkunegi-errukine-olaziregi/jose-francisco.png" alt="Jose Francisco “Kinku” Zinkunegi, Errukine Olaziregi"&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;div class="details"&gt;
    &lt;div class="details-inner"&gt;&lt;a href="//localhost:3007/cards/participants/jose-francisco-kinku-zinkunegi-errukine-olaziregi" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;
            Jose Francisco “Kinku” Zinkunegi, Errukine Olaziregi&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/li&gt;
&lt;li class="card col-xs-6 col-sm-2 card-xs-break-2 card-sm-break-6"&gt;
  &lt;div class="image"&gt;&lt;a href="//localhost:3007/cards/participants/stanley-and-the-ten-sleepless-knights"&gt;&lt;img src="//localhost:3007/content/5-cards/4-participants/2-stanley-and-the-ten-sleepless-knights/stanley-ten-sleepless-knights.png" alt="Stanley and The Ten Sleepless Knights"&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;div class="details"&gt;
    &lt;div class="details-inner"&gt;&lt;a href="//localhost:3007/cards/participants/stanley-and-the-ten-sleepless-knights" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;
            Stanley and The Ten Sleepless Knights&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/li&gt;
&lt;li class="card col-xs-6 col-sm-2 card-xs-break-2 card-sm-break-6"&gt;
  &lt;div class="image"&gt;&lt;a href="//localhost:3007/cards/participants/grupo-nuu-yuku-de-san-miguel-cuevas"&gt;&lt;img src="//localhost:3007/content/5-cards/4-participants/3-grupo-nuu-yuku-de-san-miguel-cuevas/grupo-nuu-yuku.png" alt="Grupo Nuu Yuku de San Miguel Cuevas"&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;div class="details"&gt;
    &lt;div class="details-inner"&gt;&lt;a href="//localhost:3007/cards/participants/grupo-nuu-yuku-de-san-miguel-cuevas" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;
            Grupo Nuu Yuku de San Miguel Cuevas&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/li&gt;
&lt;li class="card col-xs-6 col-sm-2 card-xs-break-2 card-sm-break-6"&gt;
  &lt;div class="image"&gt;&lt;a href="//localhost:3007/cards/participants/helena-quintana-arrow-weed"&gt;&lt;img src="//localhost:3007/content/5-cards/4-participants/4-helena-quintana-arrow-weed/helena-quintana.png" alt="Helena Quintana Arrow-weed"&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;div class="details"&gt;
    &lt;div class="details-inner"&gt;&lt;a href="//localhost:3007/cards/participants/helena-quintana-arrow-weed" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;
            Helena Quintana Arrow-weed&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/li&gt;
&lt;li class="card col-xs-6 col-sm-2 card-xs-break-2 card-sm-break-6"&gt;
  &lt;div class="image"&gt;&lt;a href="//localhost:3007/cards/participants/kalakan"&gt;&lt;img src="//localhost:3007/content/5-cards/4-participants/5-kalakan/kalakan.png" alt="Kalakan"&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;div class="details"&gt;
    &lt;div class="details-inner"&gt;&lt;a href="//localhost:3007/cards/participants/kalakan" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;
            Kalakan&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/li&gt;
&lt;li class="card col-xs-6 col-sm-2 card-xs-break-2 card-sm-break-6"&gt;
  &lt;div class="image"&gt;&lt;a href="//localhost:3007/cards/participants/the-joaldunak"&gt;&lt;img src="//localhost:3007/content/5-cards/4-participants/6-the-joaldunak/joaldunak.png" alt="The Joaldunak"&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;div class="details"&gt;
    &lt;div class="details-inner"&gt;&lt;a href="//localhost:3007/cards/participants/the-joaldunak" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;
            The Joaldunak&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/li&gt;&lt;/ul&gt;&lt;/section&gt;</code></pre></div></div></div></section>