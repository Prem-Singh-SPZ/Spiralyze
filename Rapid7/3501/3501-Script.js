(function () {
    waitForElm('.off-canvas-wrapper .off-canvas-content .mktoForm  #Country option:first-child').then(function (elm) {
        loadTest();
    });

    function loadTest() {
        document.body.classList.add('spz-3501');

        //New aws logo added
        document.querySelector('.off-canvas-wrapper > .off-canvas-wrapper-inner .medium-offset-1.medium-10').insertAdjacentHTML('beforeend', `<img loading="lazy" src="//res.cloudinary.com/spiralyze/image/upload/v1692871420/rapid7/3501/awsmp_newlogo_rgb3_1.svg" class="aws-logo" alt="AWS marketplace">`);

        //Hero section left copy
        document.querySelector('.off-canvas-wrapper > .off-canvas-wrapper-inner .hero-two-column-block #hero .left-side-content').innerHTML= `<div class="html-block"><h2>Get a full AWS cloud risk assessment</h2><p>Rapid7 has partnered with AWS to deliver a comprehensive security assessment. Get a full scan of your AWS environment + in-depth report on 100+ risks and misconfigurations.</p><ul class="orange-check">
        <li><span>Scan.</span> Our AWS experts will run a full scan of your environments. Identify 100+ potential risks and misconfigurations.</li>
        <li><span>Assessment.</span> Get a full report with risks and exposures. Plus see assets that don&#8217;t meet AWS Foundational Best Practices, and how to fix it.</li>
        <li><span>Remediation.</span> Get expert guidance on remediating risks and misconfigurations. Plus 1:1 advisory session with an AWS security expert.</li>
        </ul></div>`;

        //form changes
        document.querySelector('.off-canvas-wrapper > .off-canvas-wrapper-inner .hero-two-column-block .right-side-form .marketoForm #intro h2').textContent = 'Get Your Assessment';

        document.querySelector('.off-canvas-wrapper > .off-canvas-wrapper-inner .hero-two-column-block .right-side-form .marketoForm .mktoForm  .mktoButtonRow .mktoButton').textContent = 'Get a quick assessment';
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
})();
