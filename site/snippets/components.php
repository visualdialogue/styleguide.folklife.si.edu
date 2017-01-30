
<!-- Components-->
<section class="container cards-section">
  <div class="row">
    <main class="content col-sm-7">
      <h2 class="section-title">Components</h2><a id="components" class="anchor-link"></a>
      <div class="intro-copy content link-underline">
        <p>Components are the smallest building blocks of the website.</p>
      </div>
      <pre class="sass"><code>// Typesetting with parent and child class. 
// Targets the commonly used .title class in almost every card.
.archives-page {
	.title {@include sans-lg}
}</code></pre>
      <pre class="sass"><code>&lt;!-- Use the .content class on a page with body copy. This applies correct heading and paragraphy styles. --&gt;
&lt;div class="main content"&gt;
	... content goes here ...
&lt;/div&gt;
</code></pre>
    </main>
  </div>
  <!-- Buttons-->
  <div class="codeblock">
    <div class="row">
      <div class="col-sm-8">
        <h3 class="section-subtitle">Buttons</h3>
      </div>
      <?php snippet('show-html'); ?>
      <?php snippet('show-sass'); ?>
    </div>
    <div class="row">
      <div class="sidebar col-sm-4">
        <div class="row">
          <div class="button buy-button col-sm-7">
            <div class="button-inner"><span class="title">Buy CD</span><span class="price">$14.98</span></div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 visible-xs">
        <?php snippet('show-html-mobile'); ?>
        <?php snippet('show-sass-mobile'); ?>
      </div>
      <div class="col-sm-8">
        <pre class="sass"><code>.button {
	cursor: pointer;
	clear: left;		
	.title {
		@include button;
		color: #fff;
		font-weight: 700;
		margin:0 !important;
		width: auto;
	}
	.price {
		color: #fff;
		@include sm-sans;
		@include margin-left(0);
	}
}
.button-inner {
	background-color: $black60;
	position: static;
	@include padding-top(0.6);
	@include padding-right(1);
	@include padding-bottom(0.8);
	@include padding-left(1);
	&:hover {
		background-color: black;
	}
}</code></pre>
      </div>
      <div class="col-sm-8">
        <pre class="html"><code>&lt;!-- These are usually in the sidebar. The bootstrap col-* class would need to change if they aren’t. --&gt;
&lt;div class="sidebar col-sm-4"&gt;
	&lt;div class="row"&gt;
		&lt;div class="button buy-button col-sm-7"&gt;
			&lt;div class="button-inner"&gt;
				&lt;span class="title"&gt;Buy CD&lt;/span&gt;&lt;span class="price"&gt;$14.98&lt;/span&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
</section>