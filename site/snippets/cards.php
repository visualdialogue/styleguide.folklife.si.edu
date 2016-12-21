
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
  <div class="codeblock">			
    <div class="row">
      <div class="col-sm-10">
        <h3 class="section-subtitle">Audio Card</h3>
      </div>
      <?php snippet('show-code'); ?>
    </div>
    <div class="row">
      <li class="card audio-card col-xs-6 col-sm-3 card-xs-break-2 full-border">
        <div class="image"><a href="#">
            <?php echo $section->image('audio.png'); ?></a></div>
        <div class="details">
          <div class="details-inner">
            <div class="tag">New Release</div>
            <div class="title-wrapper"><a href="#" class="high title"><span class="light"><span class="er">Quelbe!</span></span></a>
              <div class="artist">Stanley and the Ten Sleepless Nights</div>
            </div>
            <div class="audio-player">
              <div class="icon-play-button icon-stack">
                <div class="icon-circle"></div>
                <div class="icon-play"></div>
              </div>
              <div class="audio-player-details">
                <div class="audio-progress-bar"><img src="/assets/images/icons/audio-progress-bar.png"/></div>
                <div class="audio-time">0:00 &vert;&nbsp;23:01</div>
                <div class="volume icon-volume-up"></div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <div class="col-md-9">
        <pre class="type"><code>&lt;li class="card audio-card col-xs-6 col-sm-3 card-xs-break-2 full-border"&gt;
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
			&lt;/div&gt;
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
    </div>
  </div>
  <div class="codeblock">			
    <div class="row">
      <div class="col-sm-10">
        <h3 class="section-subtitle">Video Card</h3>
      </div>
      <?php snippet('show-code'); ?>
    </div>
    <div class="row">
      <li class="card video-card col-sm-4">
        <div class="row">
          <div data-video-id="190599898" data-title="Festival 101" data-description="Lorem ipsum... <a>more</a>" class="video col-sm-12">
            <div class="center-box">
              <div class="modal-trigger">
                <?php echo $section->image('video.png'); ?>
              </div>
              <div class="icon-play-button video-icon-play-button icon-stack">
                <div class="icon-circle"></div>
                <div class="icon-play"></div>
              </div>
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
      </li>
      <div class="col-md-8">
        <pre class="type"><code>&lt;li class="card video-card col-sm-4"&gt;
	&lt;div class="row"&gt;
		&lt;div class="video col-xs-12" data-video-id="190599898" data-title="Festival 101" data-description="Lorem ipsum... &lt;a&gt;more&lt;/a&gt;"&gt;
			&lt;div class="center-box"&gt;
				&lt;div class="modal-trigger"&gt;
					&lt;img src="video.png"&gt;
				&lt;/div&gt;
				&lt;div class="icon-play-button video-icon-play-button icon-stack"&gt;
					&lt;div class="icon-circle"&gt;&lt;/div&gt;
					&lt;div class="icon-play"&gt;&lt;/div&gt;
				&lt;/div&gt;
		&lt;div class="details col-xs-12"&gt;
			&lt;div class="details-inner"&gt;
				&lt;div class="tag"&gt;Festival 2017&lt;/div&gt;
				&lt;a class="high title" href="#"&gt;
					&lt;span class="light"&gt;
						&lt;span class="er"&gt;
							Circus Arts 2017
						&lt;/span&gt;
					&lt;/span&gt;
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
  <div class="codeblock">			
    <div class="row">
      <div class="col-sm-10">
        <h3 class="section-subtitle">Horizontal Card</h3>
      </div>
      <?php snippet('show-code'); ?>
    </div>
    <div class="row">
      <div class="card horizontal-card col-xs-6 border-top">
        <div class="row">
          <div class="image col-sm-6"><a href="#">
              <?php echo $section->image('horizontal.png'); ?></a></div>
          <div class="details col-sm-6">
            <div class="details-inner">
              <div class="tag">Recording Spotlight</div><a href="#" class="high title"><span class="light"><span class="er">Rasta Sounds</span></span></a>
              <div class="description link-underline">
                <p>The global African Diaspora has often searched through music for a “post-racist utopia.”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <pre class="type"><code>&lt;li class="card horizontal-card col-xs-6 border-top"&gt;
	&lt;div class="row"&gt;
		&lt;div class="image col-sm-6"&gt;
			&lt;a href="#"&gt;
				&lt;img src="horizontal.png"&gt;
		&lt;div class="details col-sm-6"&gt;
			&lt;div class="details-inner"&gt;
				&lt;div class="tag"&gt; Recording Spotlight
				&lt;a class="high title" href="#"&gt; 
					&lt;span class="light"&gt;
						&lt;span class="er"&gt;
							Rasta Sounds
						&lt;/span&gt;
					&lt;/span&gt;
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
</section>