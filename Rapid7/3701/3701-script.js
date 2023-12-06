document.body.classList.add('spz-3701');
waitForElm('#internal .off-canvas-wrapper .pageBlock.bgGrayLight .wrapper').then(function (elm) {
    loadTest();
});

function loadTest() {
    console.log('3701 ready');
    // Hero text update
    document.querySelector('.longHero .overlayText .longHero__content > h1').textContent = `InsightIDR 30-Day Free Trial`;
    document.querySelector('.longHero .overlayText .longHero__content > h1').insertAdjacentHTML('afterend', '<p>Thank you for signing up for your free 30-day InsightIDR trial</p>');

    // Page content update
    document.querySelector('.off-canvas-content .pageContent').insertAdjacentHTML('afterbegin', `<section class="spz-step-section"><div class="grid-container"><div class="spz-container"><div class="step-overview"><h6>You're almost there! </h6><p>You will receive an email with your account information and instructions on how to sign into InsightIDR shortly. In the meantime, here are some important things to know:</p></div><div class="step-cards-list">
    <div class="step-card"><div class="card-image"><img src="//res.cloudinary.com/spiralyze/image/upload/v1701771972/rapid7/3701/step_1.webp" alt=""></div><div class="card-content"><h6>Step 1</h6><h5>Prepare your environment for deployment</h5><p>Take inventory of your network. InsightIDR is most effective when collecting and analyzing as much data as possible.</p></div></div>
    <div class="step-card"><div class="card-image"><img src="//res.cloudinary.com/spiralyze/image/upload/v1701771972/rapid7/3701/step_2.webp" alt=""></div><div class="card-content"><h6>Step 2</h6><h5><a href="https://docs.rapid7.com/insightidr/collector-installation-and-deployment" target="_blank" class="r7-icon-external-link" data-element-location="body" data-element-label="deploy the collector">Deploy the Collector</a></h5><p>The Collector ingests data from event sources on-premises and or on your virtual machines—without this, your data will not be available in InsightIDR for analysis. You will need privileges to install the collector, a host for the Collector to ingest logs, and domain admin privileges to forward AD, LDAP, and DHCP logs to InsightIDR.</p></div></div>
    </div><div class="spz-warning-msg"><div class="warning-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1701772054/rapid7/3701/envelope-email-checked-okay.webp"></div><div class="warning-text"><p>Keep an eye out for emails from us throughout the next 30 days for tips and tricks on how to get the most out of your InsightIDR trial.</p></div></div></div></div></section>`);

    document.querySelector('.off-canvas-content .pageContent .pageBlock.bgGrayLight').insertAdjacentHTML('afterend',`<section class="help-and-demo"> <div class="grid-container"><div class="row"> <div class="col-12 col-md-6"> <div class="demo-video"> <h3>Want a Demo?</h3><p>See how InsightDR works with this on-demand video</p> <div class="video-container"> <a class="spz-video-btn" href="https://www.youtube.com/watch?v=nOMCp7bUS-A&amp;t=4s" target="_blank" data-element-location="body">
    <img src="">
    </a> </div> </div> </div> <div class="col-12 col-md-6"> </div> </div></div> </section>`)
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