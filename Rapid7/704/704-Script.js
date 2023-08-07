(function () {
    waitForElm('.off-canvas-wrapper .hero-section .marketoForm #Country option:first-child').then(function (elm) {
        loadTest();
    });

    function loadTest() {
        document.body.classList.add('spz-704');
        heroUpdate();

        document.querySelector('.off-canvas-wrapper .off-canvas-content .bgBlueGreenGradientDesign div[data-block="logos"]').insertAdjacentHTML('afterend', `<div class="spz-key-features">
            <div class="key-features-wrapper grid-container">
                <div class="key-features-title" >
                    <h6>Key Features</h6>
                </div>
                <div class="key-features-content grid-x">
                    <div class="key-card">
                        <img alt="Lightweight Endpoint Agent" src="https://res.cloudinary.com/spiralyze/image/upload/v1690279480/rapid7/704/user-customer-chain-solid.svg">
                        <p>Lightweight Endpoint Agent </p>
                    </div>
                    <div class="key-card">
                        <img alt="Remediation Projects" src="https://res.cloudinary.com/spiralyze/image/upload/v1691406975/RAPID7/704/applications_1.svg">
                        <p>Remediation Projects</p>
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
                        <img alt="Vulnerability Risk Prioritization" src="https://res.cloudinary.com/spiralyze/image/upload/v1691406975/RAPID7/704/vulnerability-hunting_1.svg">
                        <p>Vulnerability Risk Prioritization</p>
                    </div>
                    <div class="key-card">
                        <img alt="Secure Configuration Assessment" src="https://res.cloudinary.com/spiralyze/image/upload/v1691406976/RAPID7/704/password-protect-key-lock_1.svg">
                        <p>Secure Configuration<br> Assessment</p>
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
        </section>`);

        formCustomization();
        headerChanges();

    }

    function headerChanges() {
        document.querySelector('head').insertAdjacentHTML("afterbegin", `
        <link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1690558496/RAPID7/704/custom/unchecked.svg" as="image">
        <link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1690558496/RAPID7/704/custom/checked.svg" as="image">`
        );

        // Add class 'safari' (used for cart scrollbar)
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.body.classList.add('safari');
        }
    }

    function heroUpdate() {
        document.querySelector('.off-canvas-wrapper .off-canvas-content .new-logo .logo-link img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1690279480/rapid7/704/rapid7_logo_1.svg');

        document.querySelector('.off-canvas-wrapper .off-canvas-content .hero-section .hero-text .spz-hero-description').insertAdjacentHTML('beforebegin', `<div class="review-and-rating"><div class="review-hero">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1690279480/rapid7/704/group.svg" alt="Peer insights">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1690279480/rapid7/704/peerinsights-stars.svg" alt="Ratings">
        </div>
        <div class="rating-hero"><span>4.3</span> (572 reviews)</div>
        </div>`);

        document.querySelector('.hero-sec').insertAdjacentHTML('afterbegin',`<div class="hero-bg-spz"></div>`);
    }

    function formCustomization() {
        document.querySelector("#Country option:first-child").textContent = '';
        trimLabel();

        document.querySelector('#mktoForm_2856 #LblEmail').textContent = 'Company Email';

        // document.querySelector('#mktoForm_2856 .mktoButtonRow').insertAdjacentHTML('beforebegin', `<div class="spz-privacy-policy"><h5>Please refer to our <a href="/privacy-policy">Privacy Policy</a> or contact us at <a href="mailto:info@rapid7.com">info@rapid7.com</a> for more details.</h5></div>`)

        waitForElm('.off-canvas-wrapper .hero-section .marketoForm #State option:first-child').then(function (elm) {
            document.querySelector("#State option:first-child").textContent = '';
            trimLabel();
        });

        document.querySelectorAll('#mktoForm_2856 .mktoFormRow').forEach(function (elem, i) {
            if (elem.querySelector('input')) {
                elem.querySelector('input').setAttribute('placeholder', '');
            }

            if (elem.querySelector('select')) {
                elem.querySelector('select').addEventListener('change', function () {
                    if (document.querySelector("#State") && document.querySelector("#State option:first-child").textContent) {
                        document.querySelector("#State option:first-child").textContent = '';
                    }
                    trimLabel();
                    // if (window.innerWidth < 768) {
                    //     setTimeout(() => {
                    //         detectHeightChange();
                    //     }, 100);
                    // }
                });
            }
        });
    }

    function trimLabel() {
        document.querySelectorAll('#mktoForm_2856 .mktoFormRow').forEach(function (elem, i) {
            if (elem.querySelector('.mktoFieldWrap .mktoLabel')) {
                let currentLabel = elem.querySelector('.mktoFieldWrap .mktoLabel').textContent;
                let updatedLabel = currentLabel.replace(":", "").replace("*", "");
                elem.querySelector('.mktoFieldWrap .mktoLabel').textContent = updatedLabel;
            }
        });
    }

    function detectHeightChange() {
        if (document.querySelector('.hero-sec #mktoForm_2856 .mktoFormRow[input-name="parent-State"]')) {
            document.querySelector('.hero-sec').style.marginBottom = "100px";
        }
        else if (document.querySelector('.hero-sec #mktoForm_2856 .mktoFormRow[input-name="parent-Country"] .mktoValid')) {
            document.querySelector('.hero-sec').style.marginBottom = "32px";
        }
        else {
            document.querySelector('.hero-sec').style.marginBottom = "0px";
        }
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
