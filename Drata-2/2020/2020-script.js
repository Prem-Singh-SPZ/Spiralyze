(function () {
    const astUrl = '//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/2020/';
    const ctaArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                    <path d="M1 1.5L5 5.5L1 9.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>`;

    function createTest() {
        document.body.classList.add("spz-2020");

        waitForElm('section[variant="contentAccordionDefaultSectionWrapper"] div[class*="MuiContainer-root-ContentAccordion-contentOuterWrapper"]').then(function () {
            createTabSection();

            submitTestDetails('2020_Variant');
        });

        createCookie('spz-2020-loaded', 'true', 1);
    }

    function removeTest() {
        document.body.classList.remove("spz-2020");

        if (document.querySelector('.grc-tabs-section')) {
            document.querySelector('.grc-tabs-section').remove();
        }
    }

    // Passing test details to hidden fields
    function submitTestDetails(cro_test) {
        if (document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input')) {
            document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input').setAttribute('value', cro_test);
        }
    }

    function demoChecked() {
        const sInt = setInterval(() => {
            var cro_field = document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input');

            // Check if spz-2020-loaded cookie is present and cro_field is present
            if ((cro_field && cro_field.val != '') && isCookieExist('spz-2020-loaded')) {
                clearInterval(sInt);
                submitTestDetails('2020_Variant');

                deleteCookie('spz-2020-loaded');
            }
        }, 1000);

        setTimeout(() => {
            clearInterval(sInt);
        }, 10000);
    }

    history.pushState = (function (f) {
        return function pushState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('replacestate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.replaceState);
    window.addEventListener('popstate', function () {
        window.dispatchEvent(new Event('locationchange'));
    });
    window.addEventListener('locationchange', function () {
        url = location.href;
        urlCheck(url);
    });
    var url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        let testURL = '';
        //check if the test is running on the homepage only
        if (window.location.pathname === "/") {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            createTest();
        } else {
            removeTest();
        }
        if (window.location.pathname.indexOf("/demo") > -1) {
            // ADDED ONLY FOR DEMO PAGE TO ADD 2020_Variant IN HIDDEN FIELD
            demoChecked();
            waitForElm('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video').then(function () {
                if (document.querySelector('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video')) {
                    document.querySelector('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video').setAttribute('playsinline', '');
                }
            });
        }
    }

    function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
        currentUrl = currentUrl.includes("#") ?
            currentUrl.slice(0, currentUrl.indexOf("#")) :
            currentUrl;
        specifiedUrl = specifiedUrl.includes("#") ?
            specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
            specifiedUrl;
        if (!includeQueryParams)
            currentUrl = currentUrl.includes("?") ?
                currentUrl.slice(0, currentUrl.indexOf("?")) :
                currentUrl;
        if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
            return true;
        return false;
    }

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

    // Create cookie
    function createCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    // Check if cookie exists
    function isCookieExist(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Delete cookie
    function deleteCookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    // Create Tab Section
    function createTabSection() {

        if (document.querySelector('.grc-tabs-section')) {
            return;
        };

        document.querySelector('section[variant="contentAccordionDefaultSectionWrapper"] div[class*="MuiContainer-root-ContentAccordion-contentOuterWrapper"]').insertAdjacentHTML('beforeend', `<section class="grc-tabs-section"><div class="gts-wrapper">
            <div class="gts-tabs">
                <div class="gts-tab active" data-target="tab-one">
                    <div class="gts-icon">
                        <img src="${astUrl}vendor_management_icon.svg"
                            alt="Integrate with More Systems">
                    </div>
                    <div class="gts-text">Integrate with More Systems</div>
                </div>
                <div class="gts-tab" data-target="tab-two">
                    <div class="gts-icon">
                        <img src="${astUrl}control_library_1.svg"
                            alt="Configure Compliance Your Way">
                    </div>
                    <div class="gts-text">Configure Compliance Your Way</div>
                </div>
                <div class="gts-tab" data-target="tab-three">
                    <div class="gts-icon">
                        <img src="${astUrl}automated_evidence_collection_1.svg"
                            alt="Automate Evidence Collection">
                    </div>
                    <div class="gts-text">Automate Evidence Collection</div>
                </div>
                <div class="gts-tab" data-target="tab-four">
                    <div class="gts-icon">
                        <img src="${astUrl}endpoint_monitoring_icon.svg"
                            alt="Control the Process">
                    </div>
                    <div class="gts-text">Control the Process</div>
                </div>
            </div>

            <div class="gtc-tabs-content-wrapper" id="gtc-tabs-cotnent">
                <div class="gtc-cards-content active" id="tab-one">
                    <div class="gtc-card-tab">
                        <div class="gtct-wrapper">
                            <div class="gtct-copy">
                                <div class="gtct-title">Integrate with More Systems</div>
                                <div class="gtct-desc">With hundreds of native integrations, you can connect your HRIS, SSO, cloud provider, DevOps toolchain, and countless other systems to Drata—opening endless possibilities for control enforcement, monitoring, evidence collection, and remediation.</div>
                                <div class="gtct-desc">Want to validate a specific control or connect to a different tool? Use our Open API to build deep, custom integrations with any system.</div>
                                <div class="gtct-cta">
                                    <a href="javascript:;" class="gtct-demo spz_2020_tracking">Get Started ${ctaArrow}</a>
                                </div>
                            </div>
                            <div class="gtct-image">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2020/frame_1000003357.webp" alt="Integrate With More Systems">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gtc-cards-content" id="tab-two">
                    <div class="gtc-card-tab">
                       <div class="gtct-wrapper">
                            <div class="gtct-copy">
                                <div class="gtct-title">Configure Compliance Your Way</div>
                                <div class="gtct-desc">Compliance looks different for every company. That&#8217;s why Adaptive Automation offers complete configurability.</div>
                                <div class="gtct-desc">With deeper integrations and more testing sources, Adaptive Automation lets you build no-code tests with custom logic to automate and customize your control monitoring.</div>
                                <div class="gtct-cta">
                                    <a href="javascript:;" class="gtct-demo spz_2020_tracking">Get Started ${ctaArrow}</a>
                                </div>
                            </div>
                            <div class="gtct-image">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2020/frame_1000003357.webp" alt="Configure Compliance Your Way">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gtc-cards-content" id="tab-three">
                    <div class="gtc-card-tab">
                        <div class="gtct-wrapper">
                            <div class="gtct-copy">
                                <div class="gtct-title">Automate Evidence Collection</div>
                                <div class="gtct-desc">Collect all of the evidence you need, without the manual work. Between custom tests, integration coverage and our API, you can automatically gather more evidence without taking screenshots or managing evidence in spreadsheets.</div>
                                <div class="gtct-cta">
                                    <a href="javascript:;" class="gtct-demo spz_2020_tracking">Get Started ${ctaArrow}</a>
                                </div>
                            </div>
                            <div class="gtct-image">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2020/frame_1000003357.webp" alt="Automate Evidence Collection">
                            </div>
                        </div>
                    </div>
                </div>

                 <div class="gtc-cards-content" id="tab-four">
                    <div class="gtc-card-tab">
                        <div class="gtct-wrapper">
                            <div class="gtct-copy">
                                <div class="gtct-title">Control the Process</div>
                                <div class="gtct-desc">With all your evidence, controls, and documents in one place, you can manage every step of the process. Continuous control monitoring provides full visibility into your compliance status so you can stay on top of risks and action items.</div>
                                <div class="gtct-desc">Quickly create tasks and manage tickets to ensure key compliance work doesn&#8217;t fall through the cracks. And with role-based access, you can protect sensitive data and streamline work.</div>
                                <div class="gtct-cta">
                                    <a href="javascript:;" class="gtct-demo spz_2020_tracking">Get Started ${ctaArrow}</a>
                                </div>
                            </div>
                            <div class="gtct-image">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2020/frame_1000003357.webp" alt="Control the Process">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>`);

        grcTabs();
    }

    // Tabs click event, active class toggle
    function grcTabs() {
        const tabs = document.querySelectorAll('.gts-tab');
        const tabContents = document.querySelectorAll('.gtc-cards-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');
                tabContents.forEach(content => {
                    content.classList.remove('active');
                });
                document.querySelector(`#${target}`).classList.add('active');
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                });
                tab.classList.add('active');

                //active tab button should scroll into view keeping 10px space from left
                tab.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'start'
                });
            });
        });

        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('gtct-demo')) {
                document.querySelector('a[href="/demo"]').click();
            }
        });

    }

})();
