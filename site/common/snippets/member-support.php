
<!-- Member | Support-->
<div class="highlight-bar">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 become-a-member">
        <div class="become-a-member-inner clearfix">
          <div class="image"><img id="member-image" src="/assets/images/become-a-member.jpg"/>
            <div class="vertically-align become-a-member-image-text">Become a member</div>
          </div>
          <div class="copy">
            <div class="copy-inner vertically-align">
              Free downloads <br />
              Cover art prints  <br />
              Exclusive events
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 support-folkways">
        <div class="support clearfix">
          <div class="support-copy mh-member-support">
            <?php echo htmlspecialchars($site->support_text(), ENT_QUOTES, 'UTF-8'); ?>
          </div>
          <div class="support-button button mh-member-support">
            <div class="button-inner">
              <?php echo htmlspecialchars($site->support_button_text(), ENT_QUOTES, 'UTF-8'); ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>