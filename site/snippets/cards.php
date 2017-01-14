
<!-- Cards-->
<section class="container cards-section">
  <div class="row">
    <main class="content col-sm-7">
      <h2 class="section-title">Cards</h2><a id="cards" class="anchor-link"></a>
      <div class="intro-copy content link-underline">
        <p>Cards are the smallest component pieces on the site besides UI elements. They usually consist of an image, a tag or date, a title, and the first few words of the copy. Some cards contain audio players or video buttons. Some cards lie horizontally. Here you'll find code to study and copy.</p>
      </div>
    </main>
  </div>
  <!-- Full Feature Card-->
  <div class="codeblock">
    <div class="row">
      <div class="col-sm-8">
        <h3 class="section-subtitle">Full Feature Card</h3>
      </div>
      <?php snippet('show-html'); ?>
      <?php snippet('show-sass'); ?>
    </div>
    <div class="row">
      <div class="card col-xs-12 full-feature-card">
        <div class="row">
          <div class="image col-md-6 col-lg-7"><a href="#">
              <?php echo $section->image('ralphRinzler.jpg'); ?></a></div>
          <div class="details col-md-6 col-lg-5">
            <div class="details-inner"><a href="#" class="high title"><span class="light"><span class="er">Ralph Rinzler Folklife Archives and Collections</span></span></a>
              <div class="description link-underline">
                <p>The Center for Folklife and Cultural Heritage is home to the Ralph Rinzler Folklife Archives and Collections, a public resource named for the founding director of the Smithsonian Folklife Festival.</p>
              </div><a class="high more-link">
                <div class="light">
                  <div class="er">
                    <div class="more-link-text">more</div>
                    <div class="more-link-arrow icon-arrow2"></div>
                  </div>
                </div></a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 visible-xs">
            <?php snippet('show-html-mobile'); ?>
            <?php snippet('show-sass-mobile'); ?>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <pre class="sass"><code>.full-feature-card {
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
}</code></pre>
      </div>
      <div class="col-sm-12">
        <pre class="html"><code>&lt;div class="row"&gt;
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
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
  <!-- Horizontal Card-->
  <div class="codeblock">
    <div class="row">
      <div class="col-sm-8">
        <h3 class="section-subtitle">Horizontal Card</h3>
      </div>
      <?php snippet('show-html'); ?>
      <?php snippet('show-sass'); ?>
    </div>
    <div class="row">
      <div class="card horizontal-card col-xs-12 col-sm-6 top-border-card">
        <div class="row">
          <div class="image col-xs-6"><a href="#">
              <?php echo $section->image('horizontal.png'); ?></a></div>
          <div class="details col-xs-6">
            <div class="details-inner">
              <div class="tag">Recording Spotlight</div><a href="#" class="high title"><span class="light"><span class="er">Rasta Sounds</span></span></a>
              <div class="description link-underline">
                <p>The global African Diaspora has often searched through music for a “post-racist utopia.”</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 visible-xs">
            <?php snippet('show-html-mobile'); ?>
            <?php snippet('show-sass-mobile'); ?>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <pre class="sass"><code>.folkways-magazine-card {
	.title {
		@include magazinetitle;
	}
}</code></pre>
      </div>
      <div class="col-sm-6">
        <pre class="html"><code>&lt;li class="card horizontal-card col-xs-6 top-border"&gt;
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
&lt;/li&gt;</code></pre>
      </div>
    </div>
  </div>
  <!-- Publication Card-->
  <div class="codeblock">
    <div class="row">
      <div class="col-sm-8">
        <h3 class="section-subtitle">Publication Card</h3>
      </div>
      <?php snippet('show-html'); ?>
      <?php snippet('show-sass'); ?>
    </div>
    <div class="row">
      <div class="card col-sm-6 publication-card top-border-card">
        <div class="row">
          <div class="image col-xs-4"><a href="#">
              <?php echo $section->image('curatorial-conversations.jpg'); ?></a></div>
          <div class="details col-xs-8">
            <div class="details-inner"><a href="#" class="high title"><span class="light"><span class="er">Curatorial Conversations: Cultural Representation and the Smithsonian Folklife Festival</span></span></a>
              <div class="author">Edited by Olivia Cadaval, Sojin Kim, and Diana Baird N’Diaye</div><a href="#" class="high buy-now-button"><span class="light"><span class="er">Order from University Press of Mississippi&nbsp;&#x2192</span></span></a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 visible-xs">
            <?php snippet('show-html-mobile'); ?>
            <?php snippet('show-sass-mobile'); ?>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <pre class="sass"><code>.publication-card {
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
}</code></pre>
      </div>
      <div class="col-sm-12">
        <pre class="html"><code>&lt;div class="row"&gt;
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
</code></pre>
      </div>
    </div>
  </div>
  <!-- Video Card-->
  <div class="codeblock">
    <div class="row">
      <div class="col-sm-8">
        <h3 class="section-subtitle">Video Card</h3>
      </div>
      <?php snippet('show-html'); ?>
      <?php snippet('show-sass'); ?>
    </div>
    <div class="row">
      <li class="card video-card col-sm-4">
        <div class="row">
          <div data-video-id="190599898" data-title="Festival 101" data-description="Lorem ipsum... <a>more</a>" class="video col-sm-12">
            <div class="center-box">
              <div class="modal-trigger">
                <?php echo $section->image('video.png'); ?>
              </div>
              <div class="icon-play-button"></div>
            </div>
          </div>
          <div class="details col-sm-12">
            <div class="details-inner">
              <div class="tag">Festival 2017</div><a href="#" class="high title"><span class="light"><span class="er">Circus Arts 2017</span></span></a>
              <div class="description link-underline">
                <p>See the culture and history of circus arts across the U.S.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 visible-xs">
            <?php snippet('show-html-mobile'); ?>
            <?php snippet('show-sass-mobile'); ?>
          </div>
        </div>
      </li>
      <div class="col-md-8">
        <pre class="sass"><code>// As video cards can have different looks, we set the title font based on the section via the CSS
.folkways-learn-section {
	.title {
		@include serif-sm;
		font-weight: 600;
	}
}</code></pre>
      </div>
      <div class="col-md-8">
        <pre class="html"><code>&lt;li class="card video-card col-sm-4"&gt;
	&lt;div class="row"&gt;
		&lt;div class="video col-xs-12" data-video-id="190599898" data-title="Festival 101" data-description="Lorem ipsum... &lt;a&gt;more&lt;/a&gt;"&gt;
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
</code></pre>
      </div>
    </div>
  </div>
  <!-- Audio Card-->
  <div class="codeblock">
    <div class="row">
      <div class="col-sm-8">
        <h3 class="section-subtitle">Audio Card</h3>
      </div>
      <?php snippet('show-html'); ?>
      <?php snippet('show-sass'); ?>
    </div>
    <div class="row">
      <li class="card audio-card col-xs-6 col-sm-3 card-xs-break-2 full-border-card">
        <div class="image"><a href="#">
            <?php echo $section->image('audio.png'); ?></a></div>
        <div class="details">
          <div class="details-inner">
            <div class="tag">New Release</div>
            <div class="title-wrapper"><a href="#" class="high title"><span class="light"><span class="er">Quelbe!</span></span></a>
              <div class="artist">Stanley and the Ten Sleepless Nights</div>
            </div>
            <div class="audio-player"><audio class="mejs-player" src="/assets/audio/Music2same.mp3" data-mejsoptions='{"startVolume": 0.5, "setDimensions": false}'></div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 visible-xs">
            <?php snippet('show-html-mobile'); ?>
            <?php snippet('show-sass-mobile'); ?>
          </div>
        </div>
      </li>
      <div class="col-md-9">
        <pre class="html"><code>&lt;li class="card audio-card col-xs-6 col-sm-3 card-xs-break-2 full-border-card"&gt;
	&lt;div class="image"&gt;	
		&lt;a href="#"&gt;
			&lt;img src="/320x320.jpg"&gt;
		&lt;/a&gt;
	&lt;/div&gt;
	&lt;div class="details"&gt;
		&lt;div class="details-inner"&gt;
			&lt;div class="tag"&gt;New Release&lt;/div&gt;
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
			&lt;div class="audio-player"&gt;
				&lt;div class="icon-play-button icon-stack"&gt;
					&lt;div class="icon-circle"&gt;
						&lt;div class="icon-play"&gt;
				&lt;div class="audio-player-details"&gt;
					&lt;div class="audio-progress-bar"&gt;
						&lt;img src="/assets/images/icons/audio-progress-bar.png"&gt;
					&lt;div class="audio-time"&gt;0:00 &vert;&nbsp;23:01&lt;/div&gt;
					&lt;div class="volume.icon-volume-up"&gt;&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/li&gt;
</code></pre>
      </div>
      <div class="col-md-9">
        <pre class="sass"><code>// audio styles are default, and controlled with audio.scss


</code></pre>
      </div>
    </div>
  </div>
  <!-- Vinyl Card-->
  <div class="codeblock">
    <div class="row">
      <div class="col-sm-8">
        <h3 class="section-subtitle">Vinyl Card</h3>
      </div>
      <?php snippet('show-html'); ?>
      <?php snippet('show-sass'); ?>
    </div>
    <div class="row">
      <div class="card vinyl-card col-xs-6 col-sm-3">
        <div class="image"><a href="#">
            <?php echo $section->image('fannie-lou-hamer.png'); ?></a></div>
        <div class="details">
          <div class="details-inner"><a href="#" class="high title"><span class="light"><span class="er">Songs My Mother Taught Me</span></span></a>
            <div class="artist">Fannie Lou Hamer</div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 visible-xs">
            <?php snippet('show-html-mobile'); ?>
            <?php snippet('show-sass-mobile'); ?>
          </div>
        </div>
      </div>
      <div class="col-sm-9">
        <pre class="sass"><code>.album-card, .vinyl-card, .books-card {
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
}</code></pre>
      </div>
      <div class="col-sm-9">
        <pre class="html"><code>&lt;li class="card vinyl-card col-xs-6 col-sm-3"&gt;
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
&lt;/li&gt;</code></pre>
      </div>
    </div>
  </div>
  <!-- Album Card-->
  <div class="codeblock">
    <div class="row">
      <div class="col-sm-8">
        <h3 class="section-subtitle">Album Card</h3>
      </div>
      <?php snippet('show-html'); ?>
      <?php snippet('show-sass'); ?>
    </div>
    <div class="row">
      <div class="card album-card col-xs-6 col-sm-2">
        <div class="image"><a href="#">
            <?php echo $section->image('SFW40568.jpeg'); ?></a></div>
        <div class="details">
          <div class="details-inner"><a href="#" class="high title"><span class="light"><span class="er">Quelbe! Music of the U.S. Virgin Islands</span></span></a>
            <div class="artist">Stanley and the Ten Sleepless Nights</div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 visible-xs">
            <?php snippet('show-html-mobile'); ?>
            <?php snippet('show-sass-mobile'); ?>
          </div>
        </div>
      </div>
      <div class="col-sm-10">
        <pre class="sass"><code>.album-card, .vinyl-card, .books-card {
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
}</code></pre>
      </div>
      <div class="col-sm-10">
        <pre class="html"><code>&lt;div class="card album-card col-xs-2 col-sm-2"&gt;
	&lt;div class="image"&gt;
		&lt;a href="#"&gt;&lt;img src="SFW40568.jpeg" alt=""&gt;&lt;/a&gt;
	&lt;/div&gt;
	&lt;div class="details"&gt;
		&lt;div class="details-inner"&gt;
			&lt;a href="#" class="high title"&gt;&lt;span class="light"&gt;&lt;span class="er"&gt;Quelbe! Music of the U.S. Virgin Islands&lt;/span&gt;&lt;/span&gt;&lt;/a&gt;
			&lt;div class="artist"&gt;Stanley and the Ten Sleepless Nights&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;

</code></pre>
      </div>
    </div>
  </div>
</section>