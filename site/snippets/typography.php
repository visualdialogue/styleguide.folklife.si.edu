
<!-- Typography-->
<section class="container typography-section">
  <div class="row">
    <main class="content col-sm-7">
      <h2 class="section-title">Typography</h2><a id="typography" class="anchor-link"></a>
      <div class="intro-copy link-underline">
        <p>Fonts are stored as SASS <em>mixins</em> so they can be used anywhere in the .scss files without fear of cascading styles overriding them. You can easily implement the mixin by targeting a specific .title, or other, class as seen in the following lines:</p>
        <pre><code>.archives-page {
	.title {
		@include sans-lg;
	}
}
</code></pre>
        <p>Font sizes were determined by the design and with the major second modular scale mainly for responsive sizes (1.125). See <a href="http://www.modularscale.com" target="_blank">www.modularscale.com</a>.</p>
      </div>
    </main>
    <aside class="sidebar sidebar--info col-sm-4 col-sm-offset-1">
      <h3 class="sidebar-section-title">References</h3>
      <ul>
        <li class="sidebar-item sidebar-highlight"><a href="https://sass-guidelin.es/#mixins" target="_blank">
            <h4 class="sidebar-item-title">SASS mixins</h4>
            <div class="info">sass-guidelin.es/#mixins</div></a></li>
        <li class="sidebar-item sidebar-highlight"><a href="http://www.modularscale.com/?2.4&rem&1.125&web&text" target="_blank">
            <h4 class="sidebar-item-title">Serif Scale (base 2.4rem, 1.125, major second)</h4>
            <div class="info">modularscale.com</div></a></li>
        <li class="sidebar-item sidebar-highlight"><a href="http://www.modularscale.com/?3&rem&1.125&web&text" target="_blank">
            <h4 class="sidebar-item-title">Sans Scale (base 3rem, 1.125, major second)</h4>
            <div class="info">modularscale.com</div></a></li>
      </ul>
    </aside>
  </div>
  <!-- Typefaces-->
  <div class="sub-section">
    <div class="typeface codeblock"><a id="serif" class="anchor-link"></a>
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 large-serif-title-type type-title">Large Serif Title</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Freight Text<br/>Weight: Bold<br/>Maximum Font Size: 6.158rem<br/>Maximum Line Height: 6.738rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin serif-lg {
	font-family: $serif;
	font-weight: 700;
	line-height: 1.1;
	font-size: 4.865rem;
	@include respond-to(break2) {
		font-size: 5.474rem;			
	}
	@include respond-to(fullwidth) {
		font-size: 6.158rem;
}
</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 medium-serif-title-type type-title">Medium Serif Title</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Freight Text<br/>Weight: Bold<br/>Maximum Font Size: 4.325rem<br/>Maximum Line Height: 4.325rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin serif-md {
	font-family: $serif;
	font-weight: 700;
	line-height: 1;
	font-size: 3.417rem;
	@include respond-to(break2) {
		font-size: 3.844rem;
	}
	@include respond-to(fullwidth) {
		font-size: 4.325rem;
	}
}
</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 small-serif-title-type type-title">Small Serif Title</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Freight Text<br/>Weight: Bold<br/>Maximum Font Size: 2.7rem<br/>Maximum Line Height: 3.0861rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin serif-sm {
	font-family: $serif;
	font-weight: 700;
	line-height: 1;
  	font-size: 2.133rem;
	@include respond-to(break2) {
		line-height: 1.143;
  		font-size: 2.4rem;
	}
	@include respond-to(fullwidth) {
  		font-size: 2.7rem;
	}
	@include margin-bottom(1);
}
</code></pre>
        </div>
      </div>
    </div>
  </div>
  <div class="sub-section">
    <div class="typeface codeblock"><a id="sans" class="anchor-link"></a>
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 extra-large-sans-title-type type-title">Extra Large Sans Title</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Semibold<br/>Maximum Font Size: 3.375rem<br/>Maximum Line Height: 40.5rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sans-xl {
	font-family: $sans;
	font-weight: 600;
	font-size: 2.667rem;
	@include respond-to(break2) {
		font-size: 3rem;
		line-height: 1.2;
	}
	@include respond-to(fullwidth) {
		font-size: 3.375rem;
	}
}</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 extra-large-sans-title-type-light type-title">Extra Large Sans Title Light</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size: 3.375rem<br/>Maximum Line Height: 40.5rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sans-xl {
	font-family: $sans;
	font-weight: 300;
	font-size: 2.667rem;
	@include respond-to(break2) {
		font-size: 3rem;
		line-height: 1.2;
	}
	@include respond-to(fullwidth) {
		font-size: 3.375rem;
	}
}</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 large-sans-title-type type-title">Large Sans Title</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Semibold<br/>Maximum Font Size: 3rem<br/>Maximum Line Height: 3.5rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sans-lg {
	font-family: $sans;
	font-weight: 600;
	line-height: 1.166667;
  	font-size: 2.37rem;
	@include respond-to(break2) {
  		font-size: 2.667rem;
	}
	@include respond-to(fullwidth) {
  		font-size: 3rem;
	}
}
</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 large-sans-title-type-light type-title">Large Sans Title Light</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size: 3rem<br/>Maximum Line Height: 3.5rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sans-lg {
	font-family: $sans;
	font-weight: 300;
	line-height: 1.166667;
  	font-size: 2.37rem;
	@include respond-to(break2) {
  		font-size: 2.667rem;
	}
	@include respond-to(fullwidth) {
  		font-size: 3rem;
	}
}
</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 medium-sans-title-type type-title">Medium Sans Title</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Semibold<br/>Maximum Font Size: 2.37rem<br/>Maximum Line Height: 2.844rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sans-md {
	font-family: $sans;
	font-weight: 600;
	line-height: 1.2;
  	font-size: 1.873rem;
	@include respond-to(break2) {
  		font-size: 2.107rem;
	}
	@include respond-to(fullwidth) {
  		font-size: 2.37rem;
	}
}
</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 small-sans-title-type type-title">Small Sans Title</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Semibold<br/>Maximum Font Size: 2.107rem<br/>Maximum Line Height: 2.528rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sans-sm {
	font-family: $sans;
	font-weight: 500;
	line-height: 1.2;
  	font-size: 1.665rem;
	@include respond-to(break2) {
		font-size: 1.873rem;
	}
	@include respond-to(fullwidth) {
  		font-size: 2.107rem;
	}
}</code></pre>
        </div>
      </div>
    </div>
  </div>
</section>