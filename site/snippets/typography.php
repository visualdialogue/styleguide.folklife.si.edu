
<!-- Typography-->
<section class="container typography-section">
  <div class="row">
    <main class="content col-sm-7">
      <h2 class="section-title">Typography</h2><a id="typography" class="anchor-link"></a>
      <div class="intro-copy link-underline">
        <p>Fonts are stored as SASS <em>mixins</em> so they can be used anywhere in the .scss files without fear of cascading styles overriding them (unlike @extend). You can easily implement the mixin by targeting a specific .title or other class as seen in the following lines:</p>
        <pre class="sass"><code>.archives-page {
	.title {
		@include sans-lg;
	}
}</code></pre>
        <p>You won't find any &lt;h1&gt; or &lt;h2&gt; tags here because those are strictly semantic, without styles. The typefaces stand by themselves and can be applied to different heading levels.</p>
        <p>Font sizes were determined by the design. When needed, the major second modular scale was applied mainly for responsive sizes (1.125). See <a href="http://www.modularscale.com" target="_blank">www.modularscale.com</a>.</p>
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
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 lg-serif type-title">Large Serif Title</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Freight Text<br/>Weight: Bold<br/>Maximum Font Size: 6.158rem<br/>Usage: Folkways Shop Page</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin lg-serif {
	font-family: $serif;
	font-weight: 700;
	line-height: 1;
	font-size: 4.325rem;
	@include respond-to(break2) {
		font-size: 3.5vw;
	}
	@include respond-to(fullwidth) {
		font-size: 6.158rem;
	}
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
          <div class="type-details">Typeface: Freight Text<br/>Weight: Bold<br/>Maximum Font Size: 4.2rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin md-serif {
	font-family: $serif;
	font-weight: 700;
	line-height: 1;
	font-size: 2.7rem;
	@include respond-to(break2) {
		font-size: 2.5vw;
	}
	@include respond-to(fullwidth) {
		font-size: 4.2rem;
	}
}
</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
        <hr/>
        <div class="col-sm-10 md-serif type-title">Album Serif</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Freight Text<br/>Weight: Semibold<br/>Maximum Font Size: 3rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin album-serif {
	font-family: $serif;
	font-weight: 600;
	line-height: 1.33;
  	font-size: 1.896rem;
	@include respond-to(break2) {
  		font-size: 2.2vw;
	}
	@include respond-to(fullwidth) {
  		font-size: 3rem;
	}
	@include margin-bottom(1);
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
          <div class="type-details">Typeface: Freight Text<br/>Weight: Bold<br/>Maximum Font Size: 2.8rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sm-serif {
	font-family: $serif;
	font-weight: 700;
	line-height: 1;
  	font-size: 2.489rem;
	@include respond-to(break2) {
		line-height: 1.143;
  		font-size: 1.8vw;
	}
	@include respond-to(fullwidth) {
  		font-size: 2.8rem;
	}
	@include margin-bottom(1);
}
</code></pre>
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
          <div class="type-details">Typeface: Freight Text<br/>Weight: Bold Italic<br/>Maximum Font Size: 2.7rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sm-serif {
	font-family: $serif;
	font-weight: 700;
	line-height: 1;
  	font-size: 2.489rem;
  	text-style: italic;
	@include respond-to(break2) {
		line-height: 1.143;
  		font-size: 1.8vw;
	}
	@include respond-to(fullwidth) {
  		font-size: 2.8rem;
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
        <div class="col-sm-10 xl-sans-semi type-title">Extra Large Sans Title</div>
        <?php snippet('show-sass'); ?>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Semibold<br/>Maximum Font Size: 3.375rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin xl-sans {
	font-family: $sans;
	font-weight: 600;
	font-size: 2.37rem;
	@include respond-to(break2) {
		font-size: 1.9vw;
		line-height: 1.2;
	}
	@include respond-to(fullwidth) {
		font-size: 3.375rem;
	}
}
</code></pre>
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
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size: 3.375rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin xl-sans {
	font-family: $sans;
	font-weight: 300;
	font-size: 2.37rem;
	@include respond-to(break2) {
		font-size: 1.9vw;
		line-height: 1.2;
	}
	@include respond-to(fullwidth) {
		font-size: 3.375rem;
	}
}
</code></pre>
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
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Semibold<br/>Maximum Font Size: 3rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin lg-sans {
	font-family: $sans;
	font-weight: 600;
	line-height: 1.166667;
	font-size: 2.107rem;
	@include respond-to(break2) {
  		font-size: 1.9vw;
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
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size: 3rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin lg-sans {
	font-family: $sans;
	font-weight: 300;
	line-height: 1.166667;
	font-size: 2.107rem;
	@include respond-to(break2) {
  		font-size: 1.9vw;
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
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Semibold<br/>Maximum Font Size: 2.5rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin md-sans {
	font-family: $sans;
	font-weight: 600;
	line-height: 1.2;
  	font-size: 1.873rem;
	@include respond-to(break2) {
  		font-size: 1.6vw;
	}
	@include respond-to(fullwidth) {
  		line-height: 1.28;
  		font-size: 2.5rem;
	}
}
</code></pre>
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
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size: 2.5rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin md-sans {
	font-family: $sans;
	font-weight: 300;
	line-height: 1.2;
  	font-size: 1.873rem;
	@include respond-to(break2) {
  		font-size: 1.6vw;
	}
	@include respond-to(fullwidth) {
  		line-height: 1.28;
  		font-size: 2.5rem;
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
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Semibold<br/>Maximum Font Size: 1.8rem<br/>Usage: Past Festivals listings (Medium weight)</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sm-sans {
	font-family: $sans;
	font-weight: 600;
	line-height: 1.2;
  	font-size: 1.48rem;
	@include respond-to(break2) {
		font-size: 1.2vw;
	}
	@include respond-to(fullwidth) {
		line-height: 1.12;
  		font-size: 1.8rem;
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
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size: 1.8rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin sm-sans {
	font-family: $sans;
	font-weight: 300;
	line-height: 1.2;
  	font-size: 1.48rem;
	@include respond-to(break2) {
		font-size: 1.2vw;
	}
	@include respond-to(fullwidth) {
		line-height: 1.12;
  		font-size: 1.8rem;
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
          <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size: 1.6rem</div>
        </div>
        <div class="col-md-7">
          <pre class="sass"><code>@mixin caption-sans {
	font-family: $sans;
	font-weight: 300;
	line-height: 1.4;
  	text-transform: uppercase;
  	font-size: 1.316rem;
	@include respond-to(break2) {
  		font-size: 1vw;
		line-height: 1.3;
	}
	@include respond-to(fullwidth) {
  		font-size: 1.6rem;
	}
}
</code></pre>
        </div>
      </div>
    </div>
    <div class="typeface codeblock">
      <div class="row type-title-wrapper">
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
		font-size: 2.95vw;
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
		font-size: 2.4vw;
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
            <div class="type-details">Typeface: Acumin Pro Wide<br/>Weight: Bold<br/>Maximum Font Size: 2.95rem<br/>Usage: Folkways Magazine homepage feature titles</div>
          </div>
          <div class="col-md-7">
            <pre class="sass"><code>@mixin sm-magazine-title {
	font-family: $sansWide;
	font-weight: 700;
	line-height: 1.2;
	font-size: 1.841rem;
	@include margin-bottom(1);
	@include respond-to(break2) {
		font-size: 1.9vw;
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
            <pre class="sass"><code>@mixin buy-button {
	text-transform: uppercase;
	font-family: $sansWide;
	font-weight: 800;
	margin-bottom: 0;
	font-size: 1.376rem;
	@include respond-to(break2) {
		margin-bottom: 0.4vw;
		font-size: 1.376rem;
	}
	@include respond-to(fullwidth) {
		line-height: 1.4;
		margin-bottom: 0.5rem;
		font-size: 1.72rem;
	}
}


@mixin sans-tag {
	text-transform: uppercase;
	font-family: $sansWide;
	color: $black65;
	font-weight: 300;
	margin-bottom: 0.5rem;
	font-size: 1.2rem;
	position: relative; // keep from being hidden under highlighted title
	line-height: 1.1;
	letter-spacing: 0.5px;
	@include respond-to(break2) {
		line-height: 1.4;
		font-size: 1.05vw;
		margin-bottom: 0.4vw;
		letter-spacing: 0.5px;
	}
	@include respond-to(fullwidth) {
		letter-spacing: 1px;
		font-size: 1.665rem;
		margin-bottom: 0;
	}
}</code></pre>
          </div>
        </div>
      </div>
      <div class="typeface codeblock">
        <div class="row type-title-wrapper">
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
	position: relative; // keep from being hidden under highlighted title
	font-size: 1.2rem;
	line-height: 1.1;
	letter-spacing: 0.5px;
	margin-bottom: 0.5rem;
	@include respond-to(break2) {
		font-size: 1.05vw;
		line-height: 1.4;
		letter-spacing: 0.5px;
		margin-bottom: 0.4vw;
	}
	@include respond-to(fullwidth) {
		font-size: 1.665rem;
		letter-spacing: 1px;
		margin-bottom: 0;
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
            <pre class="sass"><code>@mixin nav-header {
	text-transform: uppercase;
	font-family: $sansWide;
	font-weight: 800;
	line-height: 1.2;
	font-size: 5vw;
	font-size: 1.7rem;
	@include respond-to(break2) {
		font-size: 1.09vw;
		line-height: 1.2;
	}
	@include respond-to(fullwidth) {
		font-size: 1.7rem;
		line-height: 1.4353;
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
	position: relative;
	font-size: 1.2rem;
	line-height: 1.1;
	letter-spacing: 0.5px;
	margin-bottom: 0.5rem;
	@include respond-to(break2) {
		font-size: 1.05vw;
		line-height: 1.4;
		letter-spacing: 0.5px;
		margin-bottom: 0.4vw;
	}
	@include respond-to(fullwidth) {
		font-size: 1.665rem;
		letter-spacing: 1px;
		margin-bottom: 0;
	}
}</code></pre>
          </div>
        </div>
      </div>
    </div>
    <!-- Body type-->
    <div class="sub-section">
      <div class="typeface codeblock">
        <div class="row type-title-wrapper">
          <hr/>
          <div class="col-sm-10 intro-serif type-title">
             
            Serif Intro Text<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <?php snippet('show-sass'); ?>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="type-details">Typeface: Freight Text<br/>Weight: Semibold<br/>Maximum Font Size: 3rem<br/>Maximum Line Height: 4rem</div>
          </div>
          <div class="col-md-7">
            <pre class="sass"><code>@include album-serif;</code></pre>
          </div>
        </div>
      </div>
      <div class="typeface codeblock">
        <div class="row type-title-wrapper">
          <hr/>
          <div class="col-sm-10 body-serif type-title">Serif Body<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
          <?php snippet('show-sass'); ?>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="type-details">Typeface: Freight Text<br/>Weight: Book<br/>Maximum Font Size: 2.4rem<br/>Maximum Line Height: 3.2rem</div>
          </div>
          <div class="col-md-7">
            <pre class="sass"><code>@mixin body-serif {
	font-family: $serif;
	font-weight: 400;
	line-height: 1.333333;
  	font-size: 1.896rem;
	@include respond-to(break2) {
  		font-size: 1.5vw;
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
          <div class="col-sm-10 intro-sans type-title">
             
            Sans Intro Text<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <?php snippet('show-sass'); ?>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size: 3rem<br/>Maximum Line Height: 3.5rem</div>
          </div>
          <div class="col-md-7">
            <pre class="sass"><code>@include lg-sans;
</code></pre>
          </div>
        </div>
      </div>
      <div class="typeface codeblock">
        <div class="row type-title-wrapper">
          <hr/>
          <div class="col-sm-10 body-sans type-title">Sans Body<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
          <?php snippet('show-sass'); ?>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="type-details">Typeface: Acumin Pro<br/>Weight: Light<br/>Maximum Font Size: 2.107rem<br/>Maximum Line Height: 28.444rem</div>
          </div>
          <div class="col-md-7">
            <pre class="sass"><code>@mixin body-sans {
	font-family: $sans;
	font-weight: 300;
	line-height: 1.35;
  	font-size: 1.873rem;
	@include respond-to(break2) {
		font-size: 1.25vw;
	}
	@include respond-to(fullwidth) {
  		font-size: 2.107rem;
	}
}
</code></pre>
          </div>
        </div>
      </div>
    </div>
    <!-- HWT Unit Gothic-->
    <div class="sub-section">
      <div class="typeface codeblock"><a id="slab" class="anchor-link"></a>
        <div class="row type-title-wrapper">
          <hr/>
          <div class="col-sm-10 lg-slab type-title">Large Slab</div>
          <?php snippet('show-sass'); ?>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="type-details">Typeface: HWT Unit Gothic<br/>Weight: L717<br/>Maximum Font Size: 4rem<br/>Usage: Subpage titles, Festival-ON homepage tabs</div>
          </div>
          <div class="col-md-7">
            <pre class="sass"><code>@mixin lg-slab {
	font-family: $slabWide;
	text-transform: uppercase;
	font-size: 8vw;
	@include respond-to(break2) {
		font-size: 2.9vw;
		line-height: 1;
	}
	@include respond-to(fullwidth) {
		font-size: 4rem;
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
            <div class="type-details">Typeface: HWT Unit Gothic<br/>Weight: 717<br/>Maximum Font Size: 3.8rem<br/>Usage: Festival OFF homepage tab</div>
          </div>
          <div class="col-md-7">
            <pre class="sass"><code>@mixin md-slab {
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
          <div class="col-sm-10 sm-slab type-title">Small Slab</div>
          <?php snippet('show-sass'); ?>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="type-details">Typeface: HWT Unit Gothic<br/>Weight: 717<br/>Maximum Font Size: 3rem<br/>Usage: Section Title, etc.</div>
          </div>
          <div class="col-md-7">
            <pre class="sass"><code>@mixin sm-slab {
	font-family: $slabWide;
	text-transform: uppercase;
	font-size: 6vw;
	line-height: 1.2;
	letter-spacing: 0.5px;
	margin-top: 0;
	margin-bottom: 1.5rem;
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
    </div>
  </div>
</section>