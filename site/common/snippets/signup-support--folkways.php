
<div class="container">
  <hr class="hr--thick"/>
</div>
<div class="newsletter-signup-wrapper container">
  <div class="newsletter-signup--short">
    <div class="newsletter-signup clearfix">
      <div class="newsletter-signup__copy">
        <div class="icon-mail"></div>
        <?php echo htmlspecialchars($site->newsletter_text(), ENT_QUOTES, 'UTF-8'); ?>
      </div>
    </div>
  </div>
  <div class="newsletter-signup--short">
    <form action="/" class="newsletter-signup-form newsletter">
      <input type="email" placeholder="Enter your email" class="newsletter__input"/>
    </form>
  </div>
</div>