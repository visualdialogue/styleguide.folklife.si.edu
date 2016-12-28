
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
    <aside class="sidebar col-sm-4 col-sm-offset-1">
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
      <div class="row type-title-wrapper first-type-title-wrapper">
        <hr/>
        <div class="col-sm-10 lg-serif type-title">Large Serif Title</div>
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
	font-size: 4.325rem;
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
        <div class="col-sm-10 md-serif type-title">Medium Serif Title</div>
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
	line-height: 0.95; // smaller for folklife dive deep
	font-size: 2.7rem;
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
        <div class="col-sm-10 sm-serif type-title">Small Serif Title</div>
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
  	font-size: 1.896rem;
	@include respond-to(break2) {
		line-height: 1.143; // for 28/32
  		font-size: 2.4rem;
	}
	@include respond-to(fullwidth) {
  		font-size: 2.7rem;
	}
	@include margin-bottom(1);
}</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 sm-serif-italic type-title">
          <Small>Small Serif Title Italic</Small>
        </div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Freight Text<br/>Weight: Bold Italic<br/>Maximum Font Size: 2.7rem<br/>Maximum Line Height: 3.0861rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin serif-sm {
	font-family: $serif;
	font-weight: 700;
	line-height: 1;
	font-size: 1.896rem;
	text-style: italic;
	@include respond-to(break2) {
		line-height: 1.143; // for 28/32
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
      <div class="row type-title-wrapper first-type-title-wrapper">
        <hr/>
        <div class="col-sm-10 xl-sans-semi type-title">Extra Large Sans Title</div>
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
	font-size: 2.37rem;
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
        <div class="col-sm-10 xl-sans type-title">Extra Large Sans Title Light</div>
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
	font-size: 2.37rem;
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
        <div class="col-sm-10 lg-sans-semi type-title">Large Sans Title</div>
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
	font-size: 3rem;
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
        <div class="col-sm-10 lg-sans type-title">Large Sans Title Light</div>
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
  	font-size: 2.107rem;
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
        <div class="col-sm-10 md-sans-semi type-title">Medium Sans Title</div>
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
}</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 md-sans type-title">Medium Sans Title Light</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size: 2.37rem<br/>Maximum Line Height: 2.844rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sans-md {
	font-family: $sans;
	font-weight: 300;
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
        <div class="col-sm-10 sm-sans-semi type-title">Small Sans Title</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Semibold<br/>Maximum Font Size: 1.873rem<br/>Maximum Line Height: 2.248rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sans-sm {
	font-family: $sans;
	font-weight: 600;
	line-height: 1.2;
  	font-size: 1.665rem;
	@include respond-to(break2) {
		font-size: 1.665rem;
	}
	@include respond-to(fullwidth) {
		font-size: 1.873rem;
	}
}
</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 sm-sans type-title">Small Sans Title Light</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size: 1.873rem<br/>Maximum Line Height: 2.248rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sans-sm {
	font-family: $sans;
	font-weight: 300;
	line-height: 1.2;
  	font-size: 1.665rem;
	@include respond-to(break2) {
		font-size: 1.665rem;
	}
	@include respond-to(fullwidth) {
		font-size: 1.873rem;
	}
}
</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 caption-sans type-title">Sans Caption</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size: 1.873rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sans-sm {
	font-family: $sans;
	font-weight: 300;
  	font-size: 1.48rem;
	@include respond-to(break2) {
  		font-size: 1.665rem;
	}
	@include respond-to(fullwidth) {
  		font-size: 1.873rem;
	}
}
</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 mini-sans type-title">Sans Mini</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size: 1.665rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sans-mini {
	font-family: $sans;
	font-weight: 300;
	line-height: 1.4;
  	text-transform: uppercase;
	@include respond-to(break2) {
		line-height: 1.3;
  		font-size: 1.316rem;
	}
	@include respond-to(fullwidth) {
  		font-size: 1.665rem;
	}
}
</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper first-type-title-wrapper">
        <hr/>
        <div class="col-sm-10 lg-magazine-title type-title">Large Folkways Magazine Title</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Acumin Pro Wide<br/>Weight: Black<br/>Maximum Font Size: 4.2rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin lg-magazine-title {
	font-family: $sansWide;
	font-weight: 800;
	line-height: 1.095237;
	font-size: 2.622rem;
	@include respond-to(break2) {
		font-size: 3.319rem;
	}
	@include respond-to(fullwidth) {
		font-size: 4.2rem;
	}
}</code></pre>
        </div>
      </div>
      <div class="typeface codeblock">
        <div class="row type-title-wrapper">
          <hr/>
          <div class="col-sm-10 md-magazine-title type-title">Medium Folkways Magazine Title</div>
          <?php snippet('show-sass'); ?>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="type-details">Typeface: Acumin Pro Wide<br/>Weight: Black<br/>Maximum Font Size: 3.733rem</div>
          </div>
          <div class="col-md-7">
            <pre class="sass"><code>@mixin md-magazine-title {
	font-family: $sansWide;
	font-weight: 800;
	line-height: 1.095237;
	font-size: 1.842rem;
	@include respond-to(break2) {
		font-size: 2.95rem;
	}
	@include respond-to(fullwidth) {
		font-size: 3.733rem;
	}
}</code></pre>
          </div>
        </div>
      </div>
      <div class="typeface codeblock">
        <div class="row type-title-wrapper">
          <hr/>
          <div class="col-sm-10 sm-magazine-title type-title">Small Folkways Magazine Title</div>
          <?php snippet('show-sass'); ?>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="type-details">Typeface: Acumin Pro Wide<br/>Weight: Black<br/>Maximum Font Size: 1.72rem<br/>Usage: Buy now buttons, subscribe button</div>
          </div>
          <div class="col-md-7">
            <pre class="sass"><code>@mixin sm-magazine-title {
	font-family: $sansWide;
	font-weight: 800;
	line-height: 1.2;
	font-size: 1.841rem;
	@include margin-bottom(1); // for consistency across applications
	@include respond-to(break2) {
		font-size: 2.33rem;
	}
	@include respond-to(fullwidth) {
		font-size: 2.95rem;
	}
}</code></pre>
          </div>
        </div>
      </div>
      <div class="typeface codeblock">
        <div class="row type-title-wrapper">
          <hr/>
          <div class="col-sm-10 sm-magazine-title type-title">Buttons</div>
          <?php snippet('show-sass'); ?>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="type-details">Typeface: Acumin Pro Wide<br/>Weight: Black<br/>Maximum Font Size: 1.72rem<br/>Usage: Buy now buttons, subscribe button</div>
          </div>
          <div class="col-md-7">
            <pre class="sass"><code>@mixin buybutton {
	@include sans-tag;
	text-transform: uppercase;
	font-family: $sansWide;
	font-weight: 800;
	line-height: 1.4;
	margin-bottom: 0.5rem;
	font-size: 1.376rem;
	@include respond-to(break2) {
		font-size: 1.376rem;
		margin-bottom: 0.4vw;
	}
	@include respond-to(fullwidth) {
		font-size: 1.72rem;
		margin-bottom: 0.5rem;
	}
}</code></pre>
          </div>
        </div>
        <div class="typeface codeblock">
          <div class="row type-title-wrapper first-type-title-wrapper">
            <hr/>
            <div class="col-sm-10 body-serif type-title">Serif Body</div>
            <?php snippet('show-sass'); ?>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="type-details">Typeface: Freight Text<br/>Weight: Book<br/>Maximum Font Size: 2.4rem</div>
            </div>
            <div class="col-md-7">
              <pre class="sass"><code>@mixin body-serif {
	font-family: $serif;
	font-weight: 400;
	line-height: 1.333333;
  	font-size: 1.896rem;
	@include respond-to(break2) {
  		font-size: 2.133rem;
	}
	@include respond-to(fullwidth) {
  		font-size: 2.4rem;
	}
}</code></pre>
            </div>
          </div>
        </div>
        <div class="typeface codeblock">
          <div class="row type-title-wrapper">
            <hr/>
            <div class="col-sm-10 body-sans type-title">Sans Body</div>
            <?php snippet('show-sass'); ?>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size:</div>
            </div>
            <div class="col-md-7">
              <pre class="sass"><code>.body-sans {@include sm-sans;}
</code></pre>
            </div>
          </div>
        </div>
        <!-- HWT Unit Gothic-->
        <div class="typeface codeblock"><a id="slab" class="anchor-link"></a>
          <div class="row type-title-wrapper first-type-title-wrapper">
            <hr/>
            <div class="col-sm-10 xl-slab type-title">Extra Large Slab</div>
            <?php snippet('show-sass'); ?>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="type-details">Typeface: HWT Unit Gothic<br/>Weight: L717<br/>Maximum Font Size: 4.5rem<br/>Usage: Subpage titles, Festival-ON homepage tabs</div>
            </div>
            <div class="col-md-7">
              <pre class="sass"><code>@mixin slab-xl {
	font-family: $slabWide;
	text-transform: uppercase;
	font-size: 8vw;
	@include respond-to(break2) {
		font-size: 2.9vw;
		line-height: 1;
	}
	@include respond-to(fullwidth) {
		font-size: 4.5rem;
		line-height: 1;
	}
}</code></pre>
            </div>
          </div>
        </div>
        <div class="typeface codeblock">
          <div class="row type-title-wrapper">
            <hr/>
            <div class="col-sm-10 lg-slab type-title">Large Slab</div>
            <?php snippet('show-sass'); ?>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="type-details">Typeface: HWT Unit Gothic<br/>Weight: 717<br/>Maximum Font Size: 3.8rem<br/>Usage: Festival OFF homepage tab</div>
            </div>
            <div class="col-md-7">
              <pre class="sass"><code>@mixin slab-lg {
	font-family: $slabWide;
	text-transform: uppercase;
	@include respond-to(break2) {
		font-size: 2.4vw;
		line-height: 1;
	}
	@include respond-to(fullwidth) {
		font-size: 3.8rem;
		line-height: 1;
	}
}</code></pre>
            </div>
          </div>
        </div>
        <div class="typeface codeblock">
          <div class="row type-title-wrapper">
            <hr/>
            <div class="col-sm-10 md-slab type-title">Medium Slab</div>
            <?php snippet('show-sass'); ?>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="type-details">Typeface: HWT Unit Gothic<br/>Weight: 717<br/>Maximum Font Size: 3rem<br/>Usage: Section Title, etc.</div>
            </div>
            <div class="col-md-7">
              <pre class="sass"><code>@mixin slab-lg {
	font-family: $slabWide;
	text-transform: uppercase;
	@include respond-to(break2) {
		font-size: 2.4vw;
		line-height: 1;
	}
	@include respond-to(fullwidth) {
		font-size: 3.8rem;
		line-height: 1;
	}
}</code></pre>
            </div>
          </div>
        </div>
        <div class="typeface codeblock">
          <div class="row type-title-wrapper">
            <hr/>
            <div class="col-sm-10 type-title nav-header">Nav Header</div>
            <?php snippet('show-sass'); ?>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="type-details">Typeface: HWT Unit Gothic<br/>Weight: 718<br/>Maximum Font Size: 1.7rem</div>
            </div>
            <div class="col-md-7">
              <pre class="sass"><code>@mixin slab-md {
	font-family: $slabWide;
	text-transform: uppercase;
	font-size: 6vw;
	letter-spacing: 0.5px;
	margin-top: 0;
	margin-bottom: 1.5rem;
	line-height: 1.2;
	@include respond-to(break2) {
		font-size: 1.9vw;
		margin-bottom: 0;
	}
	@include respond-to(fullwidth) {
		font-size: 3rem;
	}
}</code></pre>
            </div>
          </div>
        </div>
        <div class="typeface codeblock">
          <div class="row type-title-wrapper first-type-title-wrapper">
            <hr/>
            <div class="col-sm-10 type-title category-tag-type">Category Tag</div>
            <?php snippet('show-sass'); ?>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="type-details">Typeface: Acumin Pro Wide<br/>Weight: 300<br/>Maximum Font Size: 1.665rem<br/>Usage: Category Tag, Date</div>
            </div>
            <div class="col-md-7">
              <pre class="sass"><code>@mixin sans-tag {
	text-transform: uppercase;
	font-family: $sansWide;
	color: $black65;
	font-weight: 300;
	letter-spacing: 1px;
	margin-bottom: 0;
	font-size: 1.2rem;
	position: relative; // keep from being hidden under highlighted title
	line-height: 1.4;
	@include respond-to(break2) {
		font-size: 1.4rem;
		margin-bottom: 0.4vw;
	}
	@include respond-to(fullwidth) {
		font-size: 1.665rem;
		margin-bottom: 0;
		line-height: 1.4;
	}
}</code></pre>
            </div>
          </div>
        </div>
        <div class="typeface codeblock">
          <div class="row type-title-wrapper">
            <hr/>
            <div class="col-sm-10 type-title category-tag-bold-type">Category Tag Bold</div>
            <?php snippet('show-sass'); ?>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="type-details">Typeface: Acumin Pro Wide<br/>Weight: 700<br/>Maximum Font Size: 1.665rem<br/>Usage:</div>
            </div>
            <div class="col-md-7">
              <pre class="sass"><code>@mixin sans-tag {
	text-transform: uppercase;
	font-family: $sansWide;
	color: $black65;
	font-weight: 300;
	letter-spacing: 1px;
	margin-bottom: 0;
	font-size: 1.2rem;
	position: relative; // keep from being hidden under highlighted title
	line-height: 1.4;
	@include respond-to(break2) {
		font-size: 1.4rem;
		margin-bottom: 0.4vw;
	}
	@include respond-to(fullwidth) {
		font-size: 1.665rem;
		margin-bottom: 0;
		line-height: 1.4;
	}
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>