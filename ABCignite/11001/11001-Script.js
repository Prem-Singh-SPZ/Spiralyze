let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);

    // CSS
    // var cssElement = document.createElement('link');
    // cssElement.rel = 'stylesheet';
    // cssElement.type = 'text/css';
    // cssElement.href = 'https://res.cloudinary.com/spiralyze/raw/upload/v1692850004/ABCFitnessIgnite/5008/Style.css';
    // document.head.appendChild(cssElement);

    var intr = setInterval(function () {
      if (document.querySelector('.spz-11001 .entry-content > div:first-child') && !document.querySelector('body').classList.contains('spz-11001')) {
        clearInterval(intr);
        document.body.classList.add('spz-11001');
      }
      code_inject();
    }, 100);

    function code_inject() {
      document.body.classList.add('spz-11001');

      if (document.querySelectorAll('.spz-11001 .entry-content > div:first-child').length > 0 && document.querySelectorAll('.features-block').length == 0) {
        const img_path = "//res.cloudinary.com/spiralyze/image/upload/";
        document.querySelector('.spz-11001 .entry-content > div.block-visibility-hide-large-screen').insertAdjacentHTML('afterend', `
          <div class="features-block">
            <div class="spz-wrapper">
              <h2 class="heading">Features</h2>
              <div class="row">
                <div class="features-items">
                  <div class="features-single">
                    <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Sales-Automation-new.png" alt="Sales automation" class="features-single-img">
                    <h4 class="features-title">Sales automation</h4>
                    <p class="features-desc">Send automated texts based on common sales triggers, like incomplete registrations and trials.</p>
                  </div>
                </div>
                <div class="features-items">
                  <div class="features-single">
                    <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Marketing-emails-2x.png" alt="Marketing emails" class="features-single-img">
                    <h4 class="features-title">Marketing emails</h4>
                    <p class="features-desc">Create marketing emails using a simple drag-and-drop email builder to increase sales and retention.</p>
                  </div>
                </div>
                <div class="features-items">
                  <div class="features-single">
                    <div class="features-single-box">
                      <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/payment-information-2x.png" alt="Payment Information Mobile Screen">
                      <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Booking-Class-2x.png" alt="Booking Class Mobile Screen">
                      <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/My-Profile-new.png" alt="My Profile Mobile Screen">
                    </div>
                    <h4 class="features-title">Self-serve</h4>
                    <p class="features-desc">Allow members to update their payment methods, book classes, and change contact info.</p>
                  </div>
                </div>
                <div class="features-items">
                  <div class="features-single">
                    <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Calendar-management-2x.png" alt="Calendar management" class="features-single-img">
                    <h4 class="features-title">Calendar management</h4>
                    <p class="features-desc">View and manage classes & training sessions. Book members into a class in 1-click.</p>
                  </div>
                </div>
                <div class="features-items">
                  <div class="features-single">
                    <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/CHECK-INS-2x.png" alt="Check-ins" class="features-single-img">
                    <h4 class="features-title">Check-ins</h4>
                    <p class="features-desc">Let members scan for entry 24/7. See recent check-ins and club occupancy.</p>
                  </div>
                </div>
                <div class="features-items">
                  <div class="features-single">
                  <div class="features-single-box">
                    <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Book-Training-2x.png" alt="Book Training Mobile Screen">
                    <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Add-Meal-2x.png" alt="Add Meal Mobile Screen">
                    <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Your-Schedule-2x.png" alt="Your Schedule Mobile Screen">
                  </div>
                    <h4 class="features-title">Club Branded app</h4>
                    <p class="features-desc">Get a custom branded app that lets members book virtual training, track nutrition, and more.</p>
                  </div>
                </div>
                <div class="features-items">
                  <div class="features-single">
                    <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Billing-2x.png" alt="Billing" class="features-single-img">
                    <h4 class="features-title">Billing</h4>
                    <p class="features-desc">Automate payment collection for recurring membership dues. Average increase in collections of 5% or more.</p>
                  </div>
                </div>
                <div class="features-items">
                  <div class="features-single">
                    <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Reporting-2x.png" alt="Reporting" class="features-single-img">
                    <h4 class="features-title">Reporting</h4>
                    <p class="features-desc">Get in-depth analytics on new joins, class bookings, training appointments, and more.</p>
                  </div>
                </div>
                <div class="features-items">
                  <div class="features-single">
                    <div class="integration-features-logos">
                      <div class="integration-logos-row">
                        <div class="integration-logo">
                          <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/MXM-2x.png" alt="MXM">
                        </div>
                        <div class="integration-logo">
                          <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/sweti-2x.png" alt="Sweti Marketing">
                        </div>
                        <div class="integration-logo">
                          <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/google-2x.png" alt="Google">
                        </div>
                        <div class="integration-logo">
                          <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Avalara-2x.png" alt="Avalara">
                        </div>
                      </div>
                      <div class="integration-logos-row">
                        <div class="integration-logo">
                          <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Swift-Financial-2x.png" alt="Swift Financial Services">
                        </div>
                        <div class="integration-logo">
                          <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/EGYM-2x.png" alt="EYGM Digital">
                        </div>
                        <div class="integration-logo">
                          <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Alaris-2x.png" alt="Alaris">
                        </div>
                        <div class="integration-logo">
                          <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Intelivideo-2x.png" alt="Intelivideo">
                        </div>
                      </div>
                      <div class="integration-logos-row">
                        <div class="integration-logo">
                          <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Aldous-2x.png" alt="Aldous&Associate">
                        </div>
                        <div class="integration-logo">
                          <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/TrekCCM-2x.png" alt="TrekCCM">
                        </div>
                        <div class="integration-logo">
                          <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/ROR-2x.png" alt="ROR Partners">
                        </div>
                        <div class="integration-logo">
                          <img src="`+ img_path + `f_auto/ABCFitnessIgnite/5008/Promotion-vault-2x.png" alt="Promotion Vault">
                        </div>
                      </div>
                    </div>
                    <h4 class="features-title">Integrations</h4>
                    <p class="features-desc">50+ integrations including Google Analytics, QuickBooks, Xero, Stripe, Zoom, and more.</p>
                  </div>
                </div>
              </div>
              <div class="demo_main"><a href="javascript:void(0)" class="demo-btn popup">Request a demo</a></div>
            </div>
          </div>`);
      }

      window.addEventListener("click", function (e) {
        if (e.target.classList.contains("demo-btn")) {
          e.preventDefault();
          document.querySelector('a.n2-ow[onclick="return false;"]').click();
          return false;
        }
      });
    }

  }
});

/* -------------------------- */
var viewportWidth = window.innerWidth;
if (viewportWidth < 768) {
  var crazyeggscript = document.createElement('script');
  crazyeggscript.type = 'text/javascript';
  crazyeggscript.innerHTML = `var CE_SNAPSHOT_NAME = "#11001 | ABC | Ignite (Solution) | Feature Grid | Mobile";`;
  document.querySelector('html').insertAdjacentElement('afterbegin', crazyeggscript);
}
else {
  var crazyeggscript = document.createElement('script');
  crazyeggscript.type = 'text/javascript';
  crazyeggscript.innerHTML = `var CE_SNAPSHOT_NAME = "#11001 | ABC | Ignite (Solution) | Feature Grid | Desktop";`;

  document.querySelector('html').insertAdjacentElement('afterbegin', crazyeggscript);
}
