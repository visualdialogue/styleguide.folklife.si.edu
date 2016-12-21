
<!-- Cards-->
<section class="container conventions-section">
  <div class="row">
    <main class="content col-sm-7">
      <h2 class="section-title">Cards</h2><a id="cards" class="anchor-link"></a>
      <div class="intro-copy content link-underline">
        <p>Cards are the smallest component pieces on the site besides UI elements. They usually consist of an image, a tag or date, a title, and the first few words of the copy. Some cards contain audio players or video buttons. Some cards lie horizontally. Here you'll find code to study and copy.</p>
      </div>
    </main>
  </div>
  <div class="row sub-section">
    <div class="col-sm-10">
      <h3 class="section-subtitle">Audio Player</h3>
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
          <div class="title-wrapper-wrapper"><a href="#" class="high title"><span class="light"><span class="er">Quelbe!</span></span></a>
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
    <div class="col-md-2"></div>
    <div class="col-md-7">
      <pre class="type"><code>&lt;li class="card audio-card col-xs-6 col-sm-3 card-xs-break-2 full-border"&gt;
	&lt;div class="image" &gt;	
			a(href="#")
				img(src="/320x320.jpg")
		.details
			.details-inner
				.tag New Release
				.title-wrapper-wrapper
					a.high.title(href="#"): span.light: span.er Quelbe!
					.artist Stanley and the Ten Sleepless Nights
				.audio-player
					.icon-play-button.icon-stack
						.icon-circle
						.icon-play
					.audio-player-details
						.audio-progress-bar
							img(src="/assets/images/icons/audio-progress-bar.png")
						.audio-time
							|0:00 &vert;&nbsp;
							!23:01
						.volume.icon-volume-up


</code></pre>
    </div>
  </div>
</section>