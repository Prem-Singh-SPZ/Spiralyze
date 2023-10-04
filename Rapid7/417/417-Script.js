(function () {
    waitForElm('.off-canvas-wrapper .off-canvas-content .longHero .productOverview .productOverview__heading h1.large-text-left').then(function (elm) {
        loadTest();
    });

    function loadTest() {
        document.body.classList.add('spz-3202');

        document.querySelector('.longHero .productOverview .productOverview__heading h1.large-text-left').textContent = 'Stay Ahead of Vulnerabilities with InsightVM';

        document.querySelector('.longHero .productOverview .productOverview__content ul.orange-check').innerHTML = `<li><strong>Discover and prioritize active vulnerabilities first</strong> <br>Gain visibility into your IT assets. Continually assess and
        prioritize critical vulnerabilities for remediation.
        <br><br></li><li><strong>Speed up remediation with tracking and collaboration</strong><br>Help business and IT collaborators better understand risks
        and gain support for critical remediation.
        <br><br></li><li><strong>Stay compliant with policy and regulatory requirements</strong><br>Don&#8217;t get caught out of step with policy or regulatory
        compliance. Assess your assets against widely-used industry
        benchmarks.</li><li><strong>Leverage expert research and community insights</strong><br>Identify internet-facing assets at a greater exploitation risk as
        well as respond to celebrity vulnerabilities by leveraging
        Rapid7 research.</li>
        `;
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
