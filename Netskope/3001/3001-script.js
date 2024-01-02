

(function () {
    //Main function call
    if (location.pathname.includes('/get-started')) {
        waitForElm('.mktoFormRow [name="utm_location__c"]').then(function (elm) {
            document.body.classList.add('spz-3001');
            submitEmail();
        });
    }
    else {
        waitForElm('.header__get-started-button.btn').then(function (elm) {
            document.body.classList.add('spz-3001');
            createTest3001();
        });
    }

    //Passing test details to hidden fields
    function submitEmail() {
        MktoForms2.whenReady(function (form) {
            if (getCookie('userEmailSPZ')) {
                document.querySelector('.mktoFormRow #Email').value = getCookie('userEmailSPZ');
                setCookieForEmail('userEmailSPZ', '');
            }
        });
    }

    function createTest3001() {
        //Adding email field in nav
        document.querySelector('.header__get-started').insertAdjacentHTML('afterbegin', '<div class="spz-3001-email"><input class="spz-email" type="email" placeholder="Email"></div>');

        document.querySelector('.header__top-menu').insertAdjacentHTML('afterend', '<div class="header__get-started mobile"><div class="spz-3001-email"><input class="spz-email" type="email" placeholder="Email"></div> <a class="header__get-started-button btn" href="https://www.netskope.com/get-started">Get Started</a></div>');

        document.querySelector('#components__content').insertAdjacentHTML('afterbegin', `<div class="spz-hero-section">
        <div class="hero-section-wrapper">
            <div class="hero-section-title">
                <h2>Secure your entire<br>multi-cloud environment</h2>
                <p>How can we help?</p>
            </div>
            <div class="hero-section-CTA">
                <div class="v3"> <a href="https://www.netskope.com/get-started" class="get-started-cta btn">Get Started</a></div>
                <div class="v3"> <a href="https://www.netskope.com/products" class="learn-more-cta btn">Learn more</a></div>
            </div>
        </div>
        </div>`);

        document.querySelector('.v3-promo .v3-promo__container').before(document.querySelector('.orange_line_off'));

        document.querySelector('.v3-promo.homepage').insertAdjacentHTML('afterend', `<div id="products" class="v3 v3-reports v3-reports-6593cee681481 light "><div class="container"><div class="row"><div class="col-12   col-lg-12   "><div class=" v3-reports__top   v3-reports__top--no-border "><div class="plus-orange"><div class="plus-orange__icon"><img src="https://www.netskope.com/wp-content/themes/netskope/images/v3/plus_light_blue.svg" alt="light blue plus"></div></div><div class="v3-reports__title"><h2>Products</h2></div></div></div></div><div id="v3-reports__reports_6593cee681481" class="v3-reports__reports"><div itemscope="" itemtype="http://schema.org/Report" class="v3-reports__reports-report " ><div class="v3-reports__reports-report-icon "> <img class="no-lazyload" src="https://www.netskope.com/wp-content/uploads/2022/04/security-service-edge-sse-icon-55x55-1.svg" alt="Security Service Edge (SSE) icon"></div><div class="v3-reports__reports-report-title " itemprop="headline" style="height: 108px;"> Security Service Edge</div><div class="v3-reports__reports-report-text " style="height: 140px;"> Netskope Intelligent SSE converges security capabilities into a single cloud platform.</div><div class="v3-reports__reports-report-cta "> <span><a class="ga__cta" aria-label="Learn more" data-video-id="" href="/products/security-service-edge"> <img alt="chevron" class="no-lazyload" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron.png"> </a> </span> <span> <a data-video-id="" class="ga__cta v3-reports__reports-report-cta-link " href="/products/security-service-edge">Learn more</a> </span></div></div><div itemscope="" itemtype="http://schema.org/Report" class="v3-reports__reports-report " ><div class="v3-reports__reports-report-icon "> <img class="no-lazyload" src="https://www.netskope.com/wp-content/uploads/2022/04/swg-icon-55x55-1.svg" alt="Next Gen Secure Web Gateway icon"></div><div class="v3-reports__reports-report-title " itemprop="headline" style="height: 108px;"> Next Gen Secure Web Gateway (SWG)</div><div class="v3-reports__reports-report-text " style="height: 140px;"> The foundation for SSE web and cloud inline security providing threat and data protection.</div><div class="v3-reports__reports-report-cta "> <span><a class="ga__cta" aria-label="Learn more" data-video-id="" href="/products/next-gen-swg"> <img alt="chevron" class="no-lazyload" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron.png"> </a> </span> <span> <a data-video-id="" class="ga__cta v3-reports__reports-report-cta-link " href="/products/next-gen-swg">Learn more</a> </span></div></div><div itemscope="" itemtype="http://schema.org/Report" class="v3-reports__reports-report " ><div class="v3-reports__reports-report-icon "> <img class="no-lazyload" src="https://www.netskope.com/wp-content/uploads/2022/04/casb-icon-55.svg" alt="CASB icon"></div><div class="v3-reports__reports-report-title " itemprop="headline" style="height: 108px;"> Cloud Access Security Broker (CASB)</div><div class="v3-reports__reports-report-text " style="height: 140px;"> Confidently adopt cloud applications and services without sacrificing security.</div><div class="v3-reports__reports-report-cta "> <span><a class="ga__cta" aria-label="Learn more" data-video-id="" href="/products/casb"> <img alt="chevron" class="no-lazyload" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron.png"> </a> </span> <span> <a data-video-id="" class="ga__cta v3-reports__reports-report-cta-link " href="/products/casb">Learn more</a> </span></div></div><div itemscope="" itemtype="http://schema.org/Report" class="v3-reports__reports-report " ><div class="v3-reports__reports-report-icon "> <img class="no-lazyload" src="https://www.netskope.com/wp-content/uploads/2023/08/skopeai-icon-55x55-1.svg" alt="SkopeAI"></div><div class="v3-reports__reports-report-title " itemprop="headline" style="height: 108px;"> SkopeAI</div><div class="v3-reports__reports-report-text " style="height: 140px;"> Automatically adapts to the ever-growing data landscape, including generative AI and new AI-driven attacks.</div><div class="v3-reports__reports-report-cta "> <span><a class="ga__cta" aria-label="Learn more" data-video-id="" href="/products/skopeai"> <img alt="chevron" class="no-lazyload" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron.png"> </a> </span> <span> <a data-video-id="" class="ga__cta v3-reports__reports-report-cta-link " href="/products/skopeai">Learn more</a> </span></div></div><div itemscope="" itemtype="http://schema.org/Report" class="v3-reports__reports-report " ><div class="v3-reports__reports-report-icon "> <img class="no-lazyload" src="https://www.netskope.com/wp-content/uploads/2022/04/private-access-for-ztna-icon-55x55-1.svg" alt="NPA (ZTNA) icon"></div><div class="v3-reports__reports-report-title " itemprop="headline" style="height: 108px;"> Private Access for ZTNA</div><div class="v3-reports__reports-report-text " style="height: 140px;"> Connect users anywhere to private resources ensuring fast and direct application connectivity and superior user experience.</div><div class="v3-reports__reports-report-cta "> <span><a class="ga__cta" aria-label="Learn more" data-video-id="" href="/products/private-access"> <img alt="chevron" class="no-lazyload" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron.png"> </a> </span> <span> <a data-video-id="" class="ga__cta v3-reports__reports-report-cta-link " href="/products/private-access">Learn more</a> </span></div></div><div itemscope="" itemtype="http://schema.org/Report" class="v3-reports__reports-report " ><div class="v3-reports__reports-report-icon "> <img class="no-lazyload" src="https://www.netskope.com/wp-content/uploads/2022/04/public-cloud-security-icon-55x55-1.svg" alt="Public Cloud Security icon"></div><div class="v3-reports__reports-report-title " itemprop="headline" style="height: 108px;"> Public Cloud Security</div><div class="v3-reports__reports-report-text " style="height: 140px;"> Gain visibility, control, and compliance across your multi-cloud environment.</div><div class="v3-reports__reports-report-cta "> <span><a class="ga__cta" aria-label="Learn more" data-video-id="" href="/products/public-cloud-security"> <img alt="chevron" class="no-lazyload" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron.png"> </a> </span> <span> <a data-video-id="" class="ga__cta v3-reports__reports-report-cta-link " href="/products/public-cloud-security">Learn more</a> </span></div></div></div></div></div>`)
    }

    //on focus of .spz-email addClass to .header__get-started
    waitForElm('.spz-email').then(function (elm) {
        document.querySelector('.spz-email').addEventListener('focus', function (event) {
            document.querySelector('.header__get-started').classList.add('i-focused');
        });

        document.querySelector('.spz-email').addEventListener('blur', function (event) {
            document.querySelector('.header__get-started').classList.remove('i-focused');
        });

        hover(document.querySelector('.spz-email'), "i-hover");
    });

    function hover(element, className) {
        element.addEventListener('mouseenter', e => element.closest('.header__get-started').classList.add(className))
        element.addEventListener('mouseleave', e => element.closest('.header__get-started').classList.remove(className))
    }

    //All click events
    window.addEventListener("click", function (e) {
        if (e.target.classList.contains('header__get-started-button')) {
            let emailValue = this.document.querySelector('.spz-email').value;
            setCookieForEmail('userEmailSPZ', emailValue);
        }
    });

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

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari')
    }

    // Set a Cookie
    function setCookieForEmail(cName, cValue) {
        document.cookie = cName + "=" + cValue + "; path=/";
    }

    //Get a cookie
    function getCookie(cName) {
        const name = cName + "=";
        const cDecoded = decodeURIComponent(document.cookie); //to be careful
        const cArr = cDecoded.split('; ');
        let res;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        return res;
    }
})();

