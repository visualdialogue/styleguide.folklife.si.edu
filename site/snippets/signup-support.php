
<div class="container">
  <hr class="thick-hr"/>
</div>
<div class="container">
  <div class="row">
    <section class="col-sm-6 section--newsletter-signup">
      <div class="newsletter-signup clearfix">
        <div class="newsletter-signup__copy">
          <div class="icon-mail"></div>
          <?php echo htmlspecialchars($site->newsletter_text(), ENT_QUOTES, 'UTF-8'); ?>
        </div>
        <form action="/" class="newsletter-signup-form newsletter">
          <input type="email" placeholder="Enter your email" class="newsletter__input"/>
        </form>
      </div>
    </section>
    <section class="col-sm-6 section--support">
      <div class="support">
        <div class="support__copy clearfix">
          <?php echo htmlspecialchars($site->support_text(), ENT_QUOTES, 'UTF-8'); ?>
        </div>
        <div class="support__button button">
          <div class="button__inner">
            <?php echo htmlspecialchars($site->support_button_text(), ENT_QUOTES, 'UTF-8'); ?>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>