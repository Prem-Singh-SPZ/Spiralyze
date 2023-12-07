document.body.classList.add('spz-3701');
document.head.insertAdjacentHTML('beforeend', `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1701852746/rapid7/3701/atom_7.svg" as="image">`)

waitForElm('#internal .off-canvas-wrapper .pageBlock.bgGrayLight .wrapper').then(function (elm) {
  loadTest();
});

function loadTest() {
  document.body.classList.add('spz-3701');

  // Hero text update
  document.querySelector('.longHero .overlayText .longHero__content > h1').textContent = `InsightIDR 30-Day Free Trial`;
  document.querySelector('.longHero .overlayText .longHero__content > h1').insertAdjacentHTML('afterend', '<p>Thank you for signing up for your free 30-day InsightIDR trial</p>');

  // Page content update
  document.querySelector('.off-canvas-content .pageContent').insertAdjacentHTML('afterbegin', `<section class="spz-step-section">
    <div class="grid-container">
      <div class="spz-container">
        <div class="step-overview">
          <h6>You're almost there! </h6>
          <p>You will receive an email with your account information and instructions on how to sign into InsightIDR shortly. In the meantime, here are some important things to know:</p>
        </div>
        <div class="step-cards-list">
          <div class="step-card">
            <div class="card-image">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1701852753/rapid7/3701/step_18.svg" alt="Prepare your environment for deployment">
              <h6>Step 1</h6>
            </div>
            <div class="card-content">
              <h6>Step 1</h6>
              <h5>Prepare your environment for deployment</h5>
              <p>Take inventory of your network. InsightIDR is most effective when collecting and analyzing as much data as possible.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="card-image">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1701852751/rapid7/3701/step_17.svg" alt="Deploy the Collector">
              <h6>Step 2</h6>
            </div>
            <div class="card-content">
              <h6>Step 2</h6>
              <h5>
                <a href="https://docs.rapid7.com/insightidr/collector-installation-and-deployment" target="_blank"  data-element-location="body" data-element-label="deploy the collector">Deploy the Collector</a>
              </h5>
              <p>The Collector ingests data from event sources on-premises and or on your virtual machines—without this, your data will not be available in InsightIDR for analysis. You will need privileges to install the collector, a host for the Collector to ingest logs, and domain admin privileges to forward AD, LDAP, and DHCP logs to InsightIDR.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="card-image">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1701852750/rapid7/3701/step_16.svg" alt="Deploy the Insight Agent">
              <h6>Step 3</h6>
            </div>
            <div class="card-content">
              <h6>Step 3</h6>
              <h5>Deploy the Insight Agent</h5>
              <p>The <a href="https://docs.rapid7.com/insight-agent/overview/" target="_blank"  data-element-location="body" data-element-label="insight agent">Insight Agent</a> streams endpoint security data to InsightIDR, unlocking our expertly curated library of attacker behavior and endpoint detections. Combined with network and user data, this helps you monitor assets in real time to identify stealthy attacks across the MITRE ATT&CK framework. </p>
            </div>
          </div>
          <div class="step-card">
            <div class="card-image">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1701852748/rapid7/3701/step_15.svg" alt="Set up foundational event sources">
              <h6>Step 4</h6>
            </div>
            <div class="card-content">
              <h6>Step 4</h6>
              <h5>Set up foundational event sources</h5>
              <p>LDAP, AD, and DHCP are required for our underlying <a href="/solutions/user-behavior-analytics/" data-element-location="body" data-element-label="user behavior analytics">User Behavior Analytics</a> engine that drives reliable, early detections by baselining healthy user activity in your organization. The baselining process takes 14 days, so we recommend connecting these event sources as soon as possible. For information on specific event source configurations, see our <a href="https://docs.rapid7.com/insightidr/insightidr-event-sources/" target="_blank"  data-element-location="body" data-element-label="documentation">documentation</a>.</p>
            </div>
          </div>
          <div class="step-card">
              <div class="card-image">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1701852746/rapid7/3701/step_14.svg" alt="Install the Insight Network Sensor">
                <h6>Step 5</h6>
              </div>
              <div class="card-content">
                <h6>Step 5</h6>
                <h5>Install the Insight Network Sensor</h5>
                <p>The Network Sensor allows you to monitor, capture, and assess the end-to-end network traffic moving throughout your physical and virtual environment. You will need to provision a Linux host to install the Sensor on.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="card-image">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1701852745/rapid7/3701/step_13.svg" alt="Review Your Data">
                <h6>Step 6</h6>
              </div>
              <div class="card-content">
                <h6>Step 6</h6>
                <h5>Review Your Data</h5>
                <p>After you've set up your foundational event sources, you can begin to use your data across various pages, dashboards, and widgets.</p>
              </div>
            </div>
        </div>
        <div class="spz-warning-msg">
          <div class="warning-img">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1701852744/rapid7/3701/envelope-email-checked-okay_2.svg">
          </div>
          <div class="warning-text">
            <p>Keep an eye out for emails from us throughout the next 30 days for tips and tricks on how to get the most out of your InsightIDR trial.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`);

  document.querySelector('.off-canvas-content .pageContent .pageBlock.bgGrayLight').insertAdjacentHTML('afterend', `<section class="help-and-demo">
    <div class="help-container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="demo-video">
            <h3>Want a Demo?</h3>
            <p>See how InsightDR works with this <span>on-demand</span> video</p>
            <div class="video-container">
              <a class="spz-video-btn" href="https://www.youtube.com/watch?v=nOMCp7bUS-A&amp;t=4s" target="_blank" data-element-location="body">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1701852746/rapid7/3701/play_button__primary_7.svg" alt="Play" class="not-hover">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1701852749/rapid7/3701/play_button__primary_9.svg" alt="Play" class="hover">
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="help-center">
            <h3>Need Help?</h3>
            <p>Here are some resources to help you:</p>
            <ul>
              <li>Need help getting started? Visit our <a href="https://docs.rapid7.com/insightidr/quick-start-guide" target="_blank">InsightIDR quick start guide</a>
              </li>
              <li>Have questions? Check out our FAQs above</li>
              <li>Other issues? Contact us using the button below:</li>
            </ul>
            <div class="cta-container">
              <a class="btn-primary button" href="/contact/" data-element-location="header" data-element-label="contact us">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`)

  //Accordion font update
  document.querySelector('.accordion ul.accordion li.accordion-item a.accordion-title').textContent = `Will I have access to support or additional resources during the trial?`;
}

// Generic
function waitForElm(selector) {
  return new Promise(function (resolve) {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver(function (mutations) {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document, { attributes: true, childList: true, subtree: true, characterData: true });
  });
}