
<div class="social-icons container">
  <div id="share-facebook" class="social-icon-link">
    <div aria-hidden="true" class="icon-facebook social-icon nav-icon"></div>
  </div><a href="https://twitter.com/share?url=#PageURL&via=smithsonianfolk&text=<?= $page->title() ?>" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=225,width=500');return false;" class="social-icon-link">
    <div aria-hidden="true" class="icon-twitter social-icon nav-icon"></div></a><a href="https://plus.google.com/share?url=#PageURL" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" class="social-icon-link">
    <div aria-hidden="true" class="icon-gplus social-icon nav-icon"></div></a><a href="https://www.pinterest.com/pin/create/button?url=#PageURL" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=800');return false;" class="social-icon-link">
    <div aria-hidden="true" class="icon-pinterest social-icon nav-icon"></div></a><a href="https://www.tumblr.com/widgets/share/tool?url=#PageURL" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=540');return false;" class="social-icon-link">
    <div aria-hidden="true" class="icon-tumblr social-icon nav-icon"></div></a><a href="mailto:?Subject=<?= str::encode($page->title())?>&body=%0D%0A%0D%0Afrom%20<?= str::encode($page->url()) ?>" class="social-icon-link">
    <div aria-hidden="true" class="icon-mail social-icon nav-icon"></div></a>
</div>