
<div class="social-icons container">
  <div id="share-facebook" class="social-icon-link">
    <div aria-hidden="true" class="icon-facebook social-icon nav-icon"></div>
  </div><a href="https://twitter.com/share?url=<?= $page->url() ?>&via=smithsonianfolk&text=<?= $page->title() ?>" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=225,width=500');return false;" class="social-icon-link">
    <div aria-hidden="true" class="icon-twitter social-icon nav-icon"></div></a><a href="https://plus.google.com/share?url=<?= $page->url() ?>" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="social-icon-link">
    <div aria-hidden="true" class="icon-gplus social-icon nav-icon"></div></a><a href="https://www.pinterest.com/pin/create/button?url=<?= $page->url() ?>" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=800');return false;" class="social-icon-link">
    <div aria-hidden="true" class="icon-pinterest social-icon nav-icon"></div></a><a href="https://www.tumblr.com/widgets/share/tool?url=<?= $page->url() ?>" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=540');return false;" class="social-icon-link">
    <div aria-hidden="true" class="icon-tumblr social-icon nav-icon"></div></a><a href="mailto:?Subject=<?= str::encode($page->title())?>&body=%0D%0A%0D%0Afrom%20<?= str::encode($page->url()) ?>" class="social-icon-link">
    <div aria-hidden="true" class="icon-mail social-icon nav-icon"></div></a>
</div>
<!-- Facebook SDK-->
<script>
  // get sdk
  	window.fbAsyncInit = function() {
  		FB.init({
  			appId      : '1451828684827581',
  			xfbml      : true,
  			version    : 'v2.8'
  		});
  		FB.AppEvents.logPageView();
  	};
  
  	(function(d, s, id){
  		var js, fjs = d.getElementsByTagName(s)[0];
  		if (d.getElementById(id)) {return;}
  			js = d.createElement(s); js.id = id;
  		js.src = "//connect.facebook.net/en_US/sdk.js";
  		fjs.parentNode.insertBefore(js, fjs);
  	}(document, 'script', 'facebook-jssdk'));
  
  // set button
  document.getElementById('share-facebook').onclick = function() {
  	FB.ui({
  		method: 'share',
  		display: 'popup',
  		href: '<?= $page->url() ?>',
  	}, function(response){});
  }
</script>