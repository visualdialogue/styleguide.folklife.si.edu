
<!-- Conventions-->
<section class="container conventions-section">
  <div class="row">
    <main class="content col-sm-7">
      <h2 class="section-title">Conventions</h2><a id="conventions" class="anchor-link"></a>
      <h3 class="section-subtitle">Naming Scheme</h3>The <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/" target="_blank">Block-Element-Modifier (BEM)</a> methodology was substituted with <a href="http://oxygencss.com/" target="_blank">Oxygen</a> because it meshes well with Bootstrap naming conventions (single dash) and is more readable. The drawback with the Oxygen method is you lose clarity of parent-child and modifer relationships without the double dash syntax.
      <h3 class="section-subtitle">Helper Classes</h3>
      <div class="intro-copy link-underline">
        <p>Helper classes can improve consistency and maintainability across the sites. Here are a few common rules / patterns we've used:</p>
        <pre><code>// Typesetting with parent and child class. 
// Targets the commonly used .title class in almost every card.
.archives-page {
	.title {@include sans-lg}
}
</code></pre>
        <pre><code>&lt;!-- Use the .content class on a page with body copy. 
This applies correct heading and paragraphy styles. --&gt;
&lt;div class="main content"&gt;
	... content goes here ...
&lt;/div&gt;
</code></pre>
      </div>
      <div class="link-underline">
        <h4>Sidebar highlighting (Using the Archives sidebar)</h4>
        <pre><code>&lt;ul&gt;
	&lt;li class="sidebar-highlight {{ 'small' is optional }}"&gt;
		&lt;a href="{{ link }}"&gt;
			Title
		&lt;/a&gt;
	&lt;/li&gt;
&lt;/ul&gt;

</code></pre>
      </div>
    </main>
    <aside class="sidebar sidebar--info col-sm-4 col-sm-offset-1">
      <h3 class="sidebar-section-title">References</h3>
      <ul>
        <li class="sidebar-item sidebar-highlight">
          <h4 class="sidebar-item-title">Oxygen CSS Naming Convention</h4>
          <div class="info"><a href="http://oxygencss.com/" target="_blank">oxygencss.com</a></div>
        </li>
        <li class="sidebar-item sidebar-highlight">
          <h4 class="sidebar-item-title">SASS mixins</h4>
          <div class="info"><a href="https://sass-guidelin.es/#mixins" target="_blank">sass-guidelin.es/#mixins</a></div>
        </li>
      </ul>
    </aside>
  </div>
</section>