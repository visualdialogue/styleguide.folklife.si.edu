
<?php snippet('header'); ?>
<div id="navspacer" class="navspacer"></div>
<!-- Typography-->
<section class="container typography-section first-section">
  <h2 class="section-title">Typography</h2><a id="typography" class="anchor-link"></a>
  <div class="section__description">
    <pre><code>// Fonts are stored as SASS mixins so they can be used anywhere in
// the .scss file without concern of being overwritten by the cascade. 
// Read more here: https://sass-guidelin.es/#mixins

   
/* Implement the mixin by targeting a specific .title class like so: */
.archives-page {
	.title {
		@include sans-xl;
	}
}
   
/* or, if you must, use a class with the same name of the font style and size
* although it doesn't seem as clean as the previous method */
.sans-xl {@include sans-xl;}	
</code></pre>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="section-title">Section Title</div>
    </div>
    <div class="col-md-7">
      <pre><code>// Section Title
@mixin section-title {
	font-family: $slabWide;
	text-transform: uppercase;
	font-size: 5vw;
	letter-spacing: 0.5px;
	margin-top: 0; // bootstrap reset
	margin-bottom: 1.5rem;
	color: $black65;
	line-height: 1.2;
	@include respond-to(break2) {
		line-height: 0.7; // so margins accurate
		font-size: 1.9vw;
		margin-bottom: 2.7vw;
	}
	@include respond-to(fullwidth) {
		font-size: 3rem;
		margin-bottom: 4.2rem;
	}
}</code></pre>
    </div>
    <div class="col-md-6"></div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="tag">Category or Tag</div>
    </div>
    <div class="col-md-7">
      <pre><code>// Category or Tag
@mixin category {
	text-transform: uppercase;
	font-family: $sansWide;
	color: $black65;
	font-weight: 300;
	letter-spacing: 1px;
	margin-bottom: 0.5rem;
	margin-bottom: 0;
	font-size: 2.5vw;
	@include respond-to(break2) {
		font-size: 0.95vw;
		font-size: 1vw;
		margin-bottom: 0.4vw;
	}
	@include respond-to(fullwidth) {
		font-size: 1.6rem; // acumin pro
		margin-bottom: 0.5rem;
		line-height: 1;
	}
}</code></pre>
    </div>
    <div class="col-md-6"></div>
  </div>
</section>
<!-- Sans-->
<section class="container">
  <h2 class="section-title">Sans</h2><a id="sans" class="anchor-link"></a>
  <div class="row">
    <div class="col-md-4">
      <div class="sans-xl">Extra Large Sans</div>
    </div>
    <div class="col-md-7">
      <pre><code>// Extra Large Sans
@mixin sans-xl {
	font-family: $sans;
	font-size: 5vw;
	@include respond-to(break2) {
		font-size: 2.5vw;
		line-height: 1.2;
	}
	@include respond-to(fullwidth) {
		font-size: 4rem;
	}
}</code></pre>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="sans-xl">Large Sans</div>
    </div>
    <div class="col-md-7">
      <pre><code>// Large Sans
@mixin sans-xl {
	font-family: $sans;
	font-weight: 300;
	font-size: 5vw;
	@include respond-to(break2) {
		font-size: 1.9vw;
		line-height: 1.2;
	}
	@include respond-to(fullwidth) {
		font-size: 3.5rem;
	}
}
</code></pre>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="sans-lg">Medium Sans</div>
    </div>
    <div class="col-md-7">
      <pre><code>// Medium Sans
@mixin sans-lg {
	font-family: $sans;
	font-weight: 300; // light for acumin
	line-height: 1.2;
	font-size: 5vw;
	@include respond-to(break2) {
		font-size: 1.92vw;
		line-height: 1.28;
	}
	@include respond-to(fullwidth) {
		font-size: 3rem;
	}
}</code></pre>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="sans-md">Small Sans</div>
    </div>
    <div class="col-md-7">
      <pre><code>// Small Sans
@mixin sans-md {
	font-family: $sans;
	font-weight: 300; // light for acumin
	line-height: 1.2;
	font-size: 4vw;
	@include respond-to(break2) {
		font-size: 1.6vw;
		line-height: 1.3;
	}
	@include respond-to(fullwidth) {
		font-size: 2.5rem;
		line-height: 1.3;
	}
}</code></pre>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="sans-sm">Extra Small Sans</div>
    </div>
    <div class="col-md-7">
      <pre><code>// Extra Small Sans
@mixin sans-sm {
	font-family: $sans;
	font-weight: 300; // light for acumin
	line-height: 1.2;
	font-size: 3.5vw;
	@include respond-to(break2) {
		font-size: 1.3vw;
		line-height: 1.3;
	}
	@include respond-to(fullwidth) {
		font-size: 2rem;
		line-height: 1.3;
	}
}
</code></pre>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="sans-caption">Extra Extra Small Sans</div>
    </div>
    <div class="col-md-7">
      <pre><code>// Extra Extra Small Sans
@mixin sans-caption {
	font-family: $sans;
	font-weight: 300; // light for acumin
	line-height: 1.2;
	line-height: 1.4;
	font-size: 4vw;
	@include respond-to(break2) {
		font-size: 1.15vw;
		line-height: 1.3;
	}
	@include respond-to(fullwidth) {
		line-height: 1.3;
		font-size: 1.8rem; // oct 19 for fritz
	}
}
</code></pre>
    </div>
  </div>
</section>
<!-- Serif-->
<section class="container">
  <h2 class="section-title">Serif</h2><a id="serif" class="anchor-link"></a>
  <div class="row">
    <div class="col-md-4">
      <div class="serif-xxl">Extra Extra Large Serif</div>
    </div>
    <div class="col-md-7">
      <pre><code></code></pre></div></td></tr><tr><td valign="top" id="L_0_413" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;413&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_413"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-family</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">: </span><span class="italic real_text" style="background-color: #272822; color: #FD971F;">$serif</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_414" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;414&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_414"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-weight</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 700</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_415" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;415&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_415"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">line-height</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 1.1</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_416" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;416&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_416"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-size</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 8</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">vw</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_417" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;417&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_417"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class=" real_text" style="background-color: #272822; color: #F92672;">@include</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;"> </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">respond-to</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">(break</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">2</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">) {</span>
      </div></td></tr><tr><td valign="top" id="L_0_418" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;418&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_418"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-size</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 8.2</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">vw</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_419" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;419&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_419"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">line-height</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 0.7</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_420" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;420&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_420"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">margin-top</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">: </span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">-1</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">rem</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_421" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;421&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_421"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</span>
      </div></td></tr><tr><td valign="top" id="L_0_422" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;422&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_422"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class=" real_text" style="background-color: #272822; color: #F92672;">@include</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;"> </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">respond-to</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">(fullwidth) {</span>
      </div></td></tr><tr><td valign="top" id="L_0_423" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;423&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_423"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-size</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 13</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">rem</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_424" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;424&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_424"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">margin-top</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">: </span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">-1</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">rem</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_425" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;425&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_425"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">line-height</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 0.7</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_426" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;426&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_426"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</span>
      </div></td></tr><tr><td valign="top" id="L_0_427" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;427&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_427"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp; }</span>
      </div></td></tr></tbody></table></td></tr></tbody></table></pre>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="serif-xl">Extra Large Serif</div>
    </div>
    <div class="col-md-7">
      <pre><code></code></pre></div></td></tr><tr><td valign="top" id="L_0_397" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;397&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_397"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-family</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">: </span><span class="italic real_text" style="background-color: #272822; color: #FD971F;">$serif</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_398" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;398&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_398"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-weight</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 700</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_399" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;399&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_399"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">line-height</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 1.1</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_400" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;400&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_400"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-size</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 8</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">vw</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_401" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;401&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_401"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class=" real_text" style="background-color: #272822; color: #F92672;">@include</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;"> </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">respond-to</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">(break</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">2</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">) {</span>
      </div></td></tr><tr><td valign="top" id="L_0_402" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;402&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_402"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-size</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 3.8</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">vw</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_403" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;403&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_403"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">margin-top</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">: </span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">-1</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">rem</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_404" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;404&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_404"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</span>
      </div></td></tr><tr><td valign="top" id="L_0_405" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;405&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_405"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class=" real_text" style="background-color: #272822; color: #F92672;">@include</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;"> </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">respond-to</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">(fullwidth) {</span>
      </div></td></tr><tr><td valign="top" id="L_0_406" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;406&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_406"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-size</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 6</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">rem</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_407" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;407&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_407"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">margin-top</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">: </span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">-1</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">rem</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_408" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;408&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_408"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</span>
      </div></td></tr><tr><td valign="top" id="L_0_409" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;409&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_409"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp; }</span>
      </div></td></tr></tbody></table></td></tr></tbody></table></pre>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="serif-lg">Large Serif</div>
    </div>
    <div class="col-md-7">
      <pre><code></code></pre></div></td></tr><tr><td valign="top" id="L_0_380" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;380&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_380"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-family</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">: </span><span class="italic real_text" style="background-color: #272822; color: #FD971F;">$serif</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_381" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;381&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_381"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-weight</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 700</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_382" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;382&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_382"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">line-height</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 1.2</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_383" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;383&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_383"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-size</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 6</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">vw</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_384" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;384&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_384"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class=" real_text" style="background-color: #272822; color: #F92672;">@include</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;"> </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">respond-to</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">(break</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">2</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">) {</span>
      </div></td></tr><tr><td valign="top" id="L_0_385" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;385&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_385"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-size</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 2.7</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">vw</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_386" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;386&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_386"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">line-height</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 1.2</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_387" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;387&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_387"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</span>
      </div></td></tr><tr><td valign="top" id="L_0_388" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;388&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_388"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class=" real_text" style="background-color: #272822; color: #F92672;">@include</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;"> </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">respond-to</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">(fullwidth) {</span>
      </div></td></tr><tr><td valign="top" id="L_0_389" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;389&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_389"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-size</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 4.2</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">rem</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_390" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;390&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_390"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">line-height</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 1.1</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_391" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;391&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_391"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</span>
      </div></td></tr><tr><td valign="top" id="L_0_392" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;392&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_392"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp; }</span>
      </div></td></tr></tbody></table></td></tr></tbody></table></pre>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="serif-md">Medium Serif</div>
    </div>
    <div class="col-md-7">
      <pre><code></code></pre></div></td></tr><tr><td valign="top" id="L_0_365" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;365&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_365"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-family</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">: </span><span class="italic real_text" style="background-color: #272822; color: #FD971F;">$serif</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_366" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;366&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_366"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-weight</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 700</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_367" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;367&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_367"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">line-height</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 1.2</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_368" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;368&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_368"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-size</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 6</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">vw</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_369" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;369&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_369"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class=" real_text" style="background-color: #272822; color: #F92672;">@include</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;"> </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">respond-to</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">(break</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">2</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">) {</span>
      </div></td></tr><tr><td valign="top" id="L_0_370" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;370&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_370"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-size</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 1.8</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">vw</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_371" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;371&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_371"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</span>
      </div></td></tr><tr><td valign="top" id="L_0_372" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;372&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_372"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class=" real_text" style="background-color: #272822; color: #F92672;">@include</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;"> </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">respond-to</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">(fullwidth) {</span>
      </div></td></tr><tr><td valign="top" id="L_0_373" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;373&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_373"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class="italic real_text" style="background-color: #272822; color: #66D9EF;">font-size</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">:</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;"> 2.8</span><span class=" real_text" style="background-color: #272822; color: #AE81FF;">rem</span><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">;</span>
      </div></td></tr><tr><td valign="top" id="L_0_374" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;374&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_374"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</span>
      </div></td></tr><tr><td valign="top" id="L_0_375" class="code_text code_gutter" style="background: #272822"><span style="color: #F8F8F2;">&nbsp;375&nbsp;</span></td><td valign="top" class="code_text code_line" style="background-color: #272822;"><div id="C_0_375"><span class=" real_text" style="background-color: #272822; color: #F8F8F2;">&nbsp;&nbsp;&nbsp; }</span>
      </div></td></tr></tbody></table></td></tr></tbody></table></pre>
    </div>
  </div>
</section>
<?php snippet('footer'); ?>