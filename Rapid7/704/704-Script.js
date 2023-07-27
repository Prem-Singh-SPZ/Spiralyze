(function () {
    waitForElm('.off-canvas-wrapper .hero-section .marketoForm').then(function (elm) {
        loadTest();
    });

    function loadTest() {
        document.body.classList.add('spz-704');

        document.querySelector('.off-canvas-wrapper .off-canvas-content .bgBlueGreenGradientDesign div[data-block="logos"]').insertAdjacentHTML('afterend', `<div class="spz-key-features">
            <div class="key-features-wrapper grid-container">
                <div class="key-features-title grid-x" >
                    <h6>Key Features</h6>
                </div>
                <div class="key-features-content grid-x">
                    <div class="key-card">
                        <img alt="Lightweight Endpoint Agent" src="https://res.cloudinary.com/spiralyze/image/upload/v1690279480/rapid7/704/user-customer-chain-solid.svg">
                        <p>Lightweight Endpoint Agent </p>
                    </div>
                    <div class="key-card">
                        <img alt="Integrated Threat Feeds" src="https://res.cloudinary.com/spiralyze/image/upload/v1690279481/rapid7/704/puzzle-piece-fit.svg">
                        <p>Integrated Threat Feeds</p>
                    </div>
                    <div class="key-card">
                        <img alt="Live Dashboards" src="https://res.cloudinary.com/spiralyze/image/upload/v1690279481/rapid7/704/dashboard.svg">
                        <p>Live Dashboards</p>
                    </div>
                    <div class="key-card">
                        <img alt="Goals and SLAs" src="https://res.cloudinary.com/spiralyze/image/upload/v1690279481/rapid7/704/target-crosshair-circled.svg">
                        <p>Goals and SLAs</p>
                    </div>
                    <div class="key-card">
                        <img alt="Real Risk Priortization" src="https://res.cloudinary.com/spiralyze/image/upload/v1690279481/rapid7/704/copy-clipboard.svg">
                        <p>Real Risk Priortization</p>
                    </div>
                    <div class="key-card">
                        <img alt="Easy-to-Use RESTful API" src="https://res.cloudinary.com/spiralyze/image/upload/v1690279481/rapid7/704/html-template.svg">
                        <p>Easy-to-Use RESTful API</p>
                    </div>
                </div>
            </div>
        </div>
        <section class="quoteBlock orange-quote" data-block-name="Quote Block">
        <div class="grid-container">
            <div class="grid-x wrapper align-center">
                <div class="cell small-12 medium-10 large-8 quoteBlock__item">
                    <div class="quoteBlock__item-icon"></div>
                    <div class="quoteBlock__item-content">
                        <span class="font-size-h3">"We don't even have to wait for a scan to finish before we can start patching— we can do it straight away and then instantly see our risk score go down. This is incredibly motivating to our team."</span>
                    </div>
                    <div class="quoteBlock__item-author font-size-p">
                        Neil Johnson, Security Manager at Evercore
                    </div>
                </div>
            </div>
        </div>
    </section>`)
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

    // Move element
    // sourceElm: Element which we have to move
    // targetLoc: New location of an element 
    function moveElement(sourceElm, targetLoc) {
        const f = document.createDocumentFragment();
        if (document.querySelector(sourceElm) != null) {
            f.appendChild(document.querySelector(sourceElm));
            document.querySelector(targetLoc).appendChild(f);
        }
    }

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari')
    }
})();
