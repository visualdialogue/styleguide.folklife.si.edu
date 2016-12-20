
<div class="container">
  <hr class="thick-hr"/>
</div>
<div class="container">
  <div class="row">
    <section class="col-sm-6 newsletter-signup-section">
      <div class="newsletter-signup clearfix">
        <div class="newsletter-signup-copy">
          <div class="icon-mail"></div>
          <?php echo htmlspecialchars($site->newsletter_text(), ENT_QUOTES, 'UTF-8'); ?>
        </div>
        <form action="/" class="newsletter-signup-form newsletter">
          <input type="email" placeholder="Enter your email" class="newsletter-input"/>
        </form>
      </div>
    </section>
    <section class="col-sm-6 support-section">
      <div class="support">
        <div class="support-copy clearfix">
          <?php echo htmlspecialchars($site->support_text(), ENT_QUOTES, 'UTF-8'); ?>
        </div>
        <div class="support-button button">
          <div class="button-inner">
            <?php echo htmlspecialchars($site->support_button_text(), ENT_QUOTES, 'UTF-8'); ?>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>