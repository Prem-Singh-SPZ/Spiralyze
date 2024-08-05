(function () {
    const astUrl = '//res.cloudinary.com/spiralyze/image/upload/';

    // Convert customer reviews section to dynamic JSON data
    const custReviews = [
        {
            name: "SOC 2",
            companyLogo: astUrl + "/fl_sanitize/drata/28001/icon_soc_2.svg",
            title: "Achieve SOC 2 5x Faster",
            review: "Drata simplifies the management of the necessary controls across all five SOC 2 trust principles with automated evidence collection, policy templates, and more — ensuring your customers&#8217; private data stays private.",
            link: "https://drata.com/product/soc-2"
        },
        {
            name: "ISO 27001",
            companyLogo: astUrl + "/fl_sanitize/drata/28001/icon_iso_27002.svg",
            title: "ISO 27001, So Easy",
            review: "Go global with this internationally respected framework. Accelerate your journey with a platform that satisfies ISO 27001 requirements for systematic information security management.",
            link: "https://drata.com/product/iso-27001"
        },
        {
            name: "PCI DSS",
            companyLogo: astUrl + "/fl_sanitize/drata/28001/icon_pci_1.svg",
            title: "Make PCI a Piece of Cake",
            review: "Get paid, not played. Drata automates the processes required to prove secure credit card payment systems, significantly reducing the chance of human error.",
            link: "https://drata.com/product/pci-dss"
        },
        {
            name: "HIPAA",
            companyLogo: astUrl + "/fl_sanitize/drata/28001/icon_hipaa.svg",
            title: "Avoid HIPAA Hiccups",
            review: "By automating compliance tasks, Drata helps ensure continuous protection of patient data as required by HIPAA, while expert support helps navigate complex regulations.",
            link: "https://drata.com/product/hipaa"
        }
    ];

    //append swiper js script in head and onload of that call function initSlider
    function appendScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;

        var css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "https://res.cloudinary.com/spiralyze/raw/upload/v1722331974/drata/28001/src/assets/swiper-bundle.min.css";

        document.getElementsByTagName("head")[0].appendChild(script);
        document.getElementsByTagName("head")[0].appendChild(css);

        script.onload = function () {
            callback();
        };
    }

    appendScript("https://res.cloudinary.com/spiralyze/raw/upload/v1722331975/drata/28001/src/assets/swiper-bundle.min.js", function () {
        initSlider();
    });

    //append to preload images
    document.querySelector('head').insertAdjacentHTML('beforeend', `<link rel="preload" href="${astUrl}/fl_sanitize/drata/28001/icon_navigation_09.svg" as="image"><link rel="preload" href="${astUrl}/fl_sanitize/drata/28001/icon_navigation_03.svg" as="image"><link rel="preload" href="${astUrl}/fl_sanitize/drata/28001/icon_navigation_04.svg" as="image"><link rel="preload" href="${astUrl}/fl_sanitize/drata/28001/icon_navigation_05.svg" as="image"><link rel="preload" href="${astUrl}/fl_sanitize/drata/28001/icon_navigation_06.svg" as="image"><link rel="preload" href="${astUrl}/f_auto/drata/28001/src/assets/Bg-hovered-min.png" as="image"><link rel="preload" href="${astUrl}/fl_sanitize/drata/28001/icon_navigation_10.svg" as="image">
        <link rel="preload" href="${astUrl}/f_auto/drata/28001/icon_navigation_04_webp.webp" as="image"><link rel="preload" href="${astUrl}/f_auto/drata/28001/icon_navigation_06_webp.webp" as="image"><link rel="preload" href="${astUrl}/f_auto/drata/28001/icon_navigation_03_webp.webp" as="image"><link rel="preload" href="${astUrl}/f_auto/drata/28001/icon_navigation_05_webp.webp" as="image">`);

    function createTest() {
        waitForElm('header + div[data-csk-entry-type="hero"] > .MuiContainer-root > div[class*="HeroSubpage-content"]').then(function () {
            document.querySelector("body").classList.add("spz-28001");

            let updatePage = setInterval(() => {
                waitForElm('[variant="collectionContentGridSectionWrapper"]').then(function () {

                    document.querySelectorAll('main[data-csk-entry-field="contents"] > section:not(.spz-sec):not(.con-sec)').forEach(function (section, index) {
                        section.classList.add('con-sec', 'control-section-' + index);
                    });

                    heroChanges();
                    spzNavBar();
                    checkActiveNav();
                    // updateImgHeight();

                });
            }, 200);

            setTimeout(() => {
                clearInterval(updatePage);
            }, 5000);
            // submitTestDetails('Variant_28001');
        });

        // createCookie('spz-28001-loaded', 'true', 1);
    }

    function removeTest() {
        document.body.classList.remove("loaded-test");
        document.body.classList.remove("spz-28001");
        if (document.querySelector('.spz-sec')) {
            document.querySelectorAll('.spz-sec').forEach(function (sec) {
                sec.remove();
            });
        }
    }

    //Passing test details to hidden fields
    // function submitTestDetails(cro_test) {
    //     if (document.querySelector('form.hs-form-private .hs_cro_test_3 .input .hs-input')) {
    //         document.querySelector('form.hs-form-private .hs_cro_test_3 .input .hs-input').setAttribute('value', cro_test);
    //     }
    // }

    // function demoChecked() {
    //     const sInt = setInterval(() => {
    //         var cro_field = document.querySelector('form.hs-form-private .hs_cro_test_3 .input .hs-input');

    //         // Check if spz-28001-loaded cookie is present and cro_field is present
    //         if ((cro_field && cro_field.val != '') && isCookieExist('spz-28001-loaded')) {
    //             clearInterval(sInt);
    //             submitTestDetails('Variant_28001');

    //             // deleteCookie('spz-28001-loaded');
    //         }
    //     }, 1000);

    //     setTimeout(() => {
    //         clearInterval(sInt);
    //     }, 10000);
    // }

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
        if (window.location.pathname.indexOf("platform/startup") > -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            createTest();
        } else {
            removeTest();
        }
        // if (window.location.pathname.indexOf("/demo") > -1) {
        //     demoChecked();
        // }
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
    // function createCookie(name, value, days) {
    //     var expires = "";
    //     if (days) {
    //         var date = new Date();
    //         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    //         expires = "; expires=" + date.toUTCString();
    //     }
    //     document.cookie = name + "=" + value + expires + "; path=/";
    // }

    // Check if cookie exists
    // function isCookieExist(name) {
    //     var nameEQ = name + "=";
    //     var ca = document.cookie.split(';');
    //     for (var i = 0; i < ca.length; i++) {
    //         var c = ca[i];
    //         while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    //         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    //     }
    //     return null;
    // }

    // Delete cookie
    // function deleteCookie(name) {
    //     document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // }

    function heroChanges() {
        const pSelector = 'div[data-csk-entry-type="hero"] > .MuiContainer-root > div[class*="HeroSubpage-content"] ';
        waitForElm('' + pSelector + ' a[class*="MuiLink-root-Link-root-HeroSubpage-link"]').then(function () {
            document.querySelector('' + pSelector + ' a[class*="MuiLink-root-Link-root-HeroSubpage-link"]').textContent = "Get Demo";
            document.querySelector('' + pSelector + ' h1[class*="MuiTypography-root-HeroSubpage-title"]').textContent = "Simple Startup Compliance";
            document.querySelector('' + pSelector + ' div[class*="Text-root-HeroSubpage-body"] > [data-testid="Text-root"] > [data-testid="Text-body1"]').innerHTML = "Investors and customers demanding compliance? We got you. <br>Quickly get compliant with SOC 2, ISO 27001, and other frameworks with automated audit prep, ready-to-use templates, and expert support.";
            if (!document.querySelector('' + pSelector + ' .hero-cta-wrapper')) {
                document.querySelector('' + pSelector + ' div[class*="Text-root-HeroSubpage-body"]').insertAdjacentHTML('afterend', `<div class="hero-cta-wrapper"><a href="https://drata.com/resources/soc-2-guide" class="hero-blue-cta">Download SOC 2 Guide</a></div>`)
                document.querySelector('' + pSelector + ' .hero-cta-wrapper').insertAdjacentElement('afterbegin', document.querySelector(`div[data-csk-entry-type="hero"] > .MuiContainer-root > div[class*="HeroSubpage-content"] a[class*="MuiLink-root-Link-root-HeroSubpage-link"]`));
            }
        });
    }

    function spzNavBar() {
        if (document.querySelector('.spz-navbar')) return;

        document.querySelector('main[data-csk-entry-field="contents"]').insertAdjacentHTML('afterbegin', ` <nav class="spz-navbar spz-sec">
            <div class="nav-container dis-flex justify-content-between align-items-center">
                <div class="nav-logo no-mob">
                    <img src="${astUrl}/fl_sanitize/drata/28001/logo.svg" alt="Drata Logo" title="Drata Logo">
                </div>
                <div class="nav-links">
                    <a class="nav-anchor" href="#nav-compliance">Learn About Compliance</a>
                    <a class="nav-anchor" href="#why-drata">Why Drata?</a>
                    <a class="nav-anchor" href="#frameworks">Learn About Frameworks</a>
                    <a class="nav-anchor" href="#nav-resource">Guides & Resources</a>
                </div>
            </div>
        </nav>`);


        document.querySelectorAll('.nav-anchor').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                const target = document.querySelector(this.getAttribute('href'));

                document.querySelectorAll('.nav-anchor').forEach(function (anchor) {
                    anchor.classList.remove('active');
                });

                e.preventDefault();
                // this.classList.add('active');
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });


        benefits();
    }

    function checkActiveNav() {
        document.querySelectorAll('.nav-anchor').forEach(function (anchor) {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (isInViewport(target)) {
                document.querySelectorAll('.nav-anchor').forEach(function (anchor) {
                    anchor.classList.remove('active');
                });
                // setTimeout(() => {
                anchor.classList.add('active');
                // }, 10);
                // console.log(anchor);
            }
            else {
                anchor.classList.remove('active');
            }

            //left scroll the nav links to bring the active link in focus
            if (window.innerWidth < 760 && anchor.classList.contains('active')) {
                document.querySelector('.nav-links').style.scrollBehavior = 'smooth';
                document.querySelector('.nav-links').scrollLeft = anchor.offsetLeft - 100;
            }
        });

        if (document.querySelector('header + div[data-csk-entry-type="hero"]')) {
            const hero = document.querySelector('header + div[data-csk-entry-type="hero"]');
            const rect = hero.getBoundingClientRect();
            if (hero && rect.top <= -200) {
                document.querySelector('header').classList.add('hide-header');
            } else {
                document.querySelector('header').classList.remove('hide-header');
            }
        }

    }

    function benefits() {
        document.querySelector('.spz-navbar').insertAdjacentHTML('afterend', `
            <section class="benefits-sec spz-sec" id="nav-compliance">
                <div class="benefits-container">
                    <div class="bs-title-container">
                            <div class="bs-eyebrow">Compliance Benefits</div>
                            <h2 class="bs-title">Why Comply? Security Secures Your Future.</h2>
                            <div class="bs-desc">Discover how compliance accelerates revenue, enhances security, and turns trust into a competitive advantage.</div>
                    </div>
                    <div class="bs-cards-container justify-content-between dis-flex">
                        <div class="bs-card">
                            <div class="bs-card-img"><img src="${astUrl}/fl_sanitize/drata/28001/icon_1.svg" alt="Unblock Sales"></div>
                            <div class="bs-card-title">Unblock Sales</div>
                            <div class="bs-card-desc">No one wants to work with a security risk. Get compliant to earn trust and expedite the sales process.</div>
                        </div>
                         <div class="bs-card">
                            <div class="bs-card-img"><img src="${astUrl}/fl_sanitize/drata/28001/icon_3.svg" alt="Unlock Expansion"></div>
                            <div class="bs-card-title">Unlock Expansion</div>
                            <div class="bs-card-desc">Meet enterprise and regulatory requirements to expand into larger deals and new markets.</div>
                        </div>
                         <div class="bs-card">
                            <div class="bs-card-img"><img src="${astUrl}/fl_sanitize/drata/28001/icon_4.svg" alt="Reduce Risk"></div>
                            <div class="bs-card-title">Reduce Risk</div>
                            <div class="bs-card-desc">Startups can't afford risks. Achieve compliance to avoid costly penalties and fines.</div>
                        </div>
                    </div>
                </div>
            </section>`);

        simpleSteps();
    }

    function simpleSteps() {
        document.querySelector('.benefits-sec').insertAdjacentHTML('afterend', `
            <section class="simple-steps-sec spz-sec">
                <div class="simple-steps-container">
                    <div class="ss-top-bar dis-flex">
                        <div class="ss-left">
                            <div class="ss-subtitle">How to Become Compliant</div>
                            <h2 class="ss-title">Get Compliant in 3 Simple Steps</h2>
                        </div>
                        <div class="ss-right">
                            <div class="ss-text"><span class="red-txt">Manual:</span> Traditional compliance is like doing taxes by hand, tedious and error-prone, involving screenshots and spreadsheets to collect compliance evidence.</div>
                            <div class="ss-divider"></div>
                            <div class="ss-text"><span class="grn-txt">Automated:</span> Imagine a program doing all that work for you. Compliance automation reduces manual tasks, tracks progress, and organizes your documents for auditors to reduce time and human error.</div>
                        </div>
                    </div>
                    <div class="ssc-contents">
                        <div class="ss-steps-count">
                            <div class="ss-step step-1">1</div>
                            <div class="ss-step step-2">2</div>
                            <div class="ss-step step-3">3</div>
                        </div>
                        <div class="simple-steps-wrapper">
                            <div class="simple-steps">
                                <div class="ss-item step-1">
                                    <div class="ss-step step-1">1</div>
                                    <div class="ss-content">
                                        <div class="ss-img-wr">
                                            <img src="${astUrl}/f_auto/drata/28001/configure.webp"
                                                class="ss-img" alt="Identify Needs"
                                                title="Identify Needs">
                                        </div>
                                        <div class="ss-title">Identify Needs</div>
                                        <div class="ss-desc">Assess regulatory needs, the markets you serve, and your business goals. Then, select an appropriate framework.</div>
                                    </div>
                                </div>
                                <div class="ss-item step-2">
                                    <div class="ss-step step-2">2</div>
                                    <div class="ss-content">
                                        <div class="ss-img-wr">
                                            <img src="${astUrl}/f_auto/drata/28001/collect.webp"
                                                class="ss-img" alt="Implement Controls"
                                                title="Implement Controls">
                                        </div>
                                        <div class="ss-title">Implement Controls</div>
                                        <div class="ss-desc">Map the controls (policies, procedures, training) for your chosen framework, then collect evidence of their effectiveness.</div>
                                    </div>
                                </div>
                                <div class="ss-item step-3">
                                    <div class="ss-step step-3">3</div>
                                    <div class="ss-content">
                                        <div class="ss-img-wr">
                                            <img src="${astUrl}/f_auto/drata/28001/audit.webp"
                                                class="ss-img" alt="Ace the Audit" title="Ace the Audit">
                                        </div>
                                        <div class="ss-title">Ace the Audit</div>
                                        <div class="ss-desc">Engage with a third-party auditor to formally review if your controls are effective and meet requirements, receiving a report if successful.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ss-bottom-bar">
                                <div class="ssb-title">Compliance Upkeep</div>
                                <div class="ssb-subtitle">Compliance shouldn&#8217;t stop after the audit. Continuous monitoring reassures customers about current data security, reduces risks, and gives you a head start for future audits.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`);

        complianceChanges();
        // On hover of any .ss-item, add specific step class name to .simple-steps-container
        // document.querySelectorAll('.simple-steps .ss-item').forEach(function (item) {
        //     item.addEventListener('mouseover', function () {
        //         document.querySelector('.simple-steps-container').classList.remove('step-1', 'step-2', 'step-3');
        //         document.querySelector('.simple-steps-container').classList.add('step-' + this.querySelector('.ss-step').textContent);
        //     });

        //     // On mouseout, remove all step classes
        //     item.addEventListener('mouseout', function () {
        //         document.querySelector('.simple-steps-container').classList.remove('step-1', 'step-2', 'step-3');
        //     });
        // });

        // On scroll, add class to .simple-steps-container according to the step in view
        // window.addEventListener('scroll', function () {

        //     // Above 1024px, don't add class on scroll
        //     if (window.innerWidth >= 1024) return;

        //     document.querySelectorAll('.simple-steps .ss-item').forEach(function (item) {
        //         if (isInViewport(item)) {
        //             document.querySelector('.simple-steps-container').classList.remove('step-1', 'step-2', 'step-3');
        //             document.querySelector('.simple-steps-container').classList.add('step-' + item.querySelector('.ss-step').textContent);
        //         }
        //     });
        // });
    }

    function complianceChanges() {
        document.querySelector('.simple-steps-sec').insertAdjacentHTML('afterend', `<section class="compliance-sec spz-sec">
            <div class="compliance-container">
                <div class="c-title-container">
                    <div class="c-eyebrow">Beyond the Audit: Compliance Automation</div>
                    <h2 class="c-title">Invest in a Compliance Solution That Grows With You</h2>
                    <div class="c-desc">This might be your first audit, but it won&#8217;t be your last. See why Drata is the ideal platform to begin and maintain your compliance journey.</div>
                </div>
                <div class="c-content dis-flex">
                    <div class="c-left">
                        <div class="accordion-wrapper">
                            <div class="accordion accordion_1">
                                <div class="accordion-item open">
                                    <div class="accordion-title">Kickstart Compliance</div>
                                    <div class="accordion-content">Cut the compliance guesswork. Drata provides you with auditor-approved framework templates, complete with all the necessary policies, procedures, and controls to start and simplify your compliance journey. And with Drata&#8217;s <a href="https://drata.com/product/trust-center">Trust Center</a>, you can immediately demonstrate your compliance progress to customers, accelerating trust and boosting sales— even before an audit.</div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-title">Reduce Compliance Time by 80%</div>
                                    <div class="accordion-content">With hundreds of integrations, Drata automatically collects compliance evidence for you. That means less digging through tools, taking screenshots, and updating spreadsheets.</div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-title">Track Your Progress</div>
                                    <div class="accordion-content">Get complete visibility into your compliance program. Track everything in one place, get alerts for risks, see upcoming tasks, and always be ready to report your status to investors or customers.</div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-title">Rinse & Repeat</div>
                                    <div class="accordion-content">Make your next audit even easier by maintaining compliance year-round. With daily tests that validate controls and keep you compliant, you&#8217;ll have non-stop peace of mind while eliminating “audit season” scrambles.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="c-right">
                        <div class="c-img">
                            <img src="${astUrl}/f_auto/drata/28001/frame_1000003381.webp" alt="Drata Compliance Automation" title="Drata Compliance Automation">
                        </div>
                    </div>
                </div>
            </div>
        </section>`);

        //write code for accordion functionality
        const accordion = document.querySelector('.accordion_1');
        const items = accordion.querySelectorAll('.accordion-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                items.forEach(item => item.classList.remove('open'));
                if (!isOpen) {
                    item.classList.add('open');
                }
                // else {
                //     item.classList.add('open');
                // }

                // updateImgHeight();
            });
        });

        meetDrata();
    }

    function updateImgHeight() {
        //calculate height of .accordion-wrapper and set it to .accordion
        const accordionWrapper = document.querySelector('.accordion-wrapper');
        const accordionImg = document.querySelector('.c-right .c-img img');
        const accordionHeight = accordionWrapper.offsetHeight + 2;
        accordionImg.style.height = accordionHeight + 'px';
    }

    function meetDrata() {
        if (document.querySelector('.meet-drata')) return;

        document.querySelector('.compliance-sec').insertAdjacentHTML('afterend', `
            <section class="meet-drata spz-sec" id="why-drata">
                <div class="md-container">
                <div class="md-title-container">
                    <div class="md-title">Meet Drata, Your One-Stop-Shop For Compliance</div>
                    <div class="md-desc">Because it takes more than software to get compliant.</div>
                </div>
                <div class="md-content">
                        <div class="md-top-section dis-flex">
                            <div class="md-left">
                                <div class="md-video-wr">
                                    <video autoplay loop muted playsinline poster="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/28001/src/assets/Video-poster.png">
                                    <source src="https://try.drata.com/hubfs/Spiralyze/28001/4.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            <div class="md-right">
                                <div class="md-card">
                                    <div class="md-card-title">Ease of Use</div>
                                    <div class="md-card-desc">Not a compliance expert? Not a problem. Drata&#8217;s intuitive platform and step-by-step walkthroughs make the entire process a breeze.</div>
                                    <a href="https://drata.com/platform" class="md-anchor">Explore the Platform <span class="a-arrow"><svg xmlns="http://www.w3.org/2000/svg" class="button_arrow" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                            <path d="M5.96591 12.1364L4.64773 10.8295L8.10795 7.36932H0V5.44886H8.10795L4.64773 1.99432L5.96591 0.681818L11.6932 6.40909L5.96591 12.1364Z" fill="#0580E8" />
                                        </svg></span></a>
                                </div>
                                 <div class="md-card">
                                    <div class="md-card-title">Built to Scale Securely</div>
                                    <div class="md-card-desc">Threats don&#8217;t stop, so neither do we. By constantly adding new frameworks and features, we stay ahead of regulatory changes and emerging threats, ensuring your compliance strategy remains proactive.</div>
                                    <a href="https://drata.com/product" class="md-anchor">Explore Frameworks <span class="a-arrow"><svg xmlns="http://www.w3.org/2000/svg" class="button_arrow" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                            <path d="M5.96591 12.1364L4.64773 10.8295L8.10795 7.36932H0V5.44886H8.10795L4.64773 1.99432L5.96591 0.681818L11.6932 6.40909L5.96591 12.1364Z" fill="#0580E8" />
                                        </svg></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="md-bottom-section">
                          <div class="md-card">
                                <div class="md-card-title-wrapper">
                                    <div class="md-card-title">Expert Support at Every Step</div>
                                    <div class="md-card-desc">Whether you need help choosing a framework or hands-on audit prep, our team of compliance experts ensure you never have to face the complexities of compliance alone. </div>
                                </div>
                                <div class="md-cta-wrapper">
                                    <a href="https://drata.com/success" class="md-cta black-cta">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`);

        customerReviews();
    }

    function customerReviews() {
        document.querySelector('.meet-drata').insertAdjacentHTML('afterend', `
            <section class="cr-section spz-sec" id="frameworks">
                <div class="cr-title-container">
                    <div class="title-wrapper">
                        <p class="small-eyebrow">Pre-Built Templates</p>
                        <h3 class="large-title">20+ Frameworks. <br class="tab-mob">None of the Grunt Work.</h3>
                    </div>
                </div>
                <div class="cr-section-container">
                    <div class="slider-section">
                        <div class="container slider-column">
                            <div class="swiper swiper-slider">
                                <div class="swiper-wrapper">
                                    ${createCustomerReviews()}
                                </div>
                            </div>
                            <span class="swiper-pagination"></span>
                            <span class="swiper-btn-prev"></span>
                            <span class="swiper-btn-next"></span>
                        </div>
                    </div>
                </div>
            </section>`);


        // If swiper is initialized, run initSlider function
        if (typeof Swiper !== 'undefined') {
            initSlider();
        }

        customerStories();
    }

    function customerStories() {
        document.querySelector('.cr-section').insertAdjacentHTML('afterend', `<section class="cs-section spz-sec">
            <div class="cs-container dis-flex">
                <div class="cs-left-copy">
                    <p class="cs-eyebrow">Customer Stories</p>
                    <h2 class="cs-title">PolicyDock Saves 6 Months in the SOC 2 Audit</h2>
                    <p class="cs-desc">See how automated evidence collection and continuous monitoring reduce manual work for startups that need to move fast.</p>
                    <a href="javascript:void()" class="demo-btn cs-cta blue-btn">Get Demo</a>
                </div>
                <div class="cs-right-video">
                    <div class="cs-video-mask"></div>
                    <video controls controlsList="nodownload" id="cs-video" poster="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/28001/video_image.webp">
                        <source src="https://try.drata.com/hubfs/Spiralyze/28001/Drata_PolicyDock%20%5Bv8%5D%20(1).mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>`);

        // waitForElm('.control-section-2 [class*="BlockVideo-vimeoContainer"] iframe').then(function () {
        //     document.querySelector('.cs-section .cs-right-video').insertAdjacentElement('afterbegin', document.querySelector('.control-section-2 [class*="BlockVideo-vimeoContainer"] iframe'));
        // });

        whyDrata();
    }

    function whyDrata() {
        if (document.querySelector('.spz-title-container')) return;

        waitForElm('.control-section-8 [class*="Collection-root"] [class*="MuiContainer-root-Collection-contentContainer"]').then(function () {
            document.querySelector('.control-section-8 [class*="Collection-root"] [class*="MuiContainer-root-Collection-contentContainer"]').innerHTML = `<div class="spz-title-container">
        <h6 class="ing-sub-title">Why Drata?</h6>
        <h2 class="ing-sec-title">We Deliver Results for Customers</h2>
        <div class="ing-stats-section dis-flex">
        <div class="ing-stats">
        <h3>4x</h3>
        <span class="ing-spn">Customer Satisfaction Rate</span></div>
        <div class="line">&nbsp;</div>
        <div class="ing-stats">
        <h3>5x</h3>
        <span class="ing-spn">Faster Compliance Management</span></div>
        <div class="line">&nbsp;</div>
        <div class="ing-stats">
        <h3>9.4</h3>
        <span class="ing-spn">G2 Ease-of-Use Rating</span></div>
        </div>
        </div>`;
        });

        globalCTA();
    }

    function globalCTA() {
        if (document.querySelector('.demo-cta-section')) return;

        document.querySelector('.control-section-8').insertAdjacentHTML('afterend', `<section class="demo-cta-section spz-sec">
            <div class="demo-cta-container">
                <div class="cta-desc">Start Your Compliance Journey Today</div>
                <div class="cta-wrapper">
                    <a href="javascript:void()" class="demo-btn cta-btn blue-btn">Get Demo</a>
                </div>
            </div>
        </section>`);

        resourceSection();
    }

    function resourceSection() {
        document.querySelector('.demo-cta-section').insertAdjacentHTML('afterend', `
        <section class="resources-section spz-sec" id="nav-resource">
            <div class="resources-wrapper">
                <div class="resource-title">
                    <h6 class="title">Compliance 101 Resources for Startups</h6>
                    <p class="sub-title">Learn the lingo, understand key benefits, and dive into the basics of compliance with these guides and articles.</p>
                </div>

                <div class="resource-cards">
                    <div class="resource-card">
                        <a class="rc-link" href="https://drata.com/grc-central/soc-2/type-2">
                            <div class="card-img">
                                <picture>
                                    <source media="(min-width:768px) and (max-width:1025px)" srcset="${astUrl}/f_auto/drata/28001/src/assets/tab-card-1.png" type="image/png">
                                    <img src="${astUrl}/f_auto/drata/28001/image_02.webp"
                                    alt="SOC 2 Beginners Guide">
                                </picture>
                            </div>
                            <div class="card-content">
                                <div class="card-title">SOC 2 Beginners Guide</div>
                                <div class="card-desc">Download a complete guide to achieving SOC 2 compliance, ensuring comprehensive security standards for your organization.</div>
                                <div class="learn-more">
                                    Learn More <span class="a-arrow"><svg xmlns="http://www.w3.org/2000/svg" class="button_arrow" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                <path d="M5.96591 12.1364L4.64773 10.8295L8.10795 7.36932H0V5.44886H8.10795L4.64773 1.99432L5.96591 0.681818L11.6932 6.40909L5.96591 12.1364Z" fill="#0580E8" />
                                            </svg></span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="resource-card">
                        <a class="rc-link" href="https://drata.com/grc-central/iso-27001/checklist">
                            <div class="card-img">
                                <picture>
                                    <source media="(min-width:768px) and (max-width:1025px)" srcset="${astUrl}/f_auto/drata/28001/src/assets/tab-card-2.png" type="image/png">
                                    <img src="${astUrl}/f_auto/drata/28001/image_04.webp"
                                    alt="8 Easy Steps to Get Started with ISO 27001">
                                </picture>
                            </div>
                            <div class="card-content">
                                <div class="card-title">8 Easy Steps to Get Started with ISO 27001</div>
                                <div class="card-desc">Explore a comprehensive checklist to achieve ISO 27001 compliance and ensure robust security standards for your business.</div>
                                <div class="learn-more">
                                    Learn More <span class="a-arrow"><svg xmlns="http://www.w3.org/2000/svg" class="button_arrow" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                <path d="M5.96591 12.1364L4.64773 10.8295L8.10795 7.36932H0V5.44886H8.10795L4.64773 1.99432L5.96591 0.681818L11.6932 6.40909L5.96591 12.1364Z" fill="#0580E8" />
                                            </svg></span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="resource-card">
                        <a class="rc-link" href="https://drata.com/blog/cost-of-non-compliance">
                            <div class="card-img">
                                <picture>
                                    <source media="(min-width:768px) and (max-width:1025px)" srcset="${astUrl}/f_auto/drata/28001/src/assets/tab-card-3.png" type="image/png">
                                    <img src="${astUrl}/f_auto/drata/28001/image_03.webp"
                                    alt="Learn About the Cost of Non-Compliance">
                                </picture>
                            </div>
                            <div class="card-content">
                                <div class="card-title">Learn About the Cost of Non-Compliance</div>
                                <div class="card-desc">Explore the hidden costs of non-compliance with data regulations and its impact on business efficiency.</div>
                                <div class="learn-more">
                                   Learn More <span class="a-arrow"><svg xmlns="http://www.w3.org/2000/svg" class="button_arrow" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                            <path d="M5.96591 12.1364L4.64773 10.8295L8.10795 7.36932H0V5.44886H8.10795L4.64773 1.99432L5.96591 0.681818L11.6932 6.40909L5.96591 12.1364Z" fill="#0580E8" />
                                        </svg></span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="resource-card">
                        <a class="rc-link" href="https://drata.com/blog/soc-2-audits">
                            <div class="card-img">
                                 <picture>
                                    <source media="(min-width:768px) and (max-width:1025px)" srcset="${astUrl}/f_auto/drata/28001/src/assets/tab-card-4.png" type="image/png">
                                    <img src="${astUrl}/f_auto/drata/28001/image_01.webp"
                                    alt="SOC 2 Audits: What You Can Expect from Start to Finish">
                                </picture>
                            </div>
                            <div class="card-content">
                                <div class="card-title">SOC 2 Audits: What You Can Expect from Start to Finish</div>
                                <div class="card-desc">Learn the essentials of SOC 2 audits and their significance in ensuring trust and security for your business.</div>
                                <div class="learn-more">
                                   Learn More <span class="a-arrow"><svg xmlns="http://www.w3.org/2000/svg" class="button_arrow" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                            <path d="M5.96591 12.1364L4.64773 10.8295L8.10795 7.36932H0V5.44886H8.10795L4.64773 1.99432L5.96591 0.681818L11.6932 6.40909L5.96591 12.1364Z" fill="#0580E8" />
                                        </svg></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>`);

        complianceFAQ();
    }

    function complianceFAQ() {
        document.querySelector('.resources-section').insertAdjacentHTML('afterend', `
            <section class="compliance-faq-section spz-sec">
                <div class="compliance-faq-title">
                    <p class="small-eyebrow">Compliance FAQ</p>
                    <h6 class="title">Your Questions, Answered</h6>
                    <p class="sub-desc">With over 4,000 customers, we&#8217;ve heard a lot of compliance questions. Here are some common ones you might have when starting out.</p>
                </div>
                <div class="compliance-faq-container">
                    <div class="left-container">
                        <div class="accordion-wrapper">
                            <div class="accordion accordion_2">
                                <div class="accordion-item open">
                                    <div class="accordion-title">Why start compliance now?</div>
                                    <div class="accordion-content">Starting compliance early is crucial because it becomes more challenging as your company scales. Eventually, customers, investors, and partners will ask for it, so being prepared in advance is beneficial. By building a strong compliance foundation now, you can scale more efficiently and with fewer resources in the future. Additionally, the compliance process takes time, and being proactive while there&#8217;s less at stake (funding and sales) can reduce stress later on.</div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-title">What is the audit process? Is having Drata enough?</div>
                                    <div class="accordion-content">It&#8217;s important to note that Drata does not conduct the audit itself. Instead, we simplify and automate the audit preparation process for you by mapping out requirements, collecting documentation, and organizing everything for the auditors. While we can&#8217;t act as auditors, we can help you find one through our vetted Audit Alliance network. This separation ensures your audit integrity and avoids any conflicts of interest.</div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-title">Do I still need to use Drata after I receive my audit?</div>
                                    <div class="accordion-content">While you can stop using Drata after your audit, we don&#8217;t recommend it. Continuous compliance is crucial for several reasons. Firstly, compliance yesterday doesn&#8217;t guarantee compliance today, and your customers know this. They want to ensure their data is safe today, so a report from last quarter won&#8217;t cut it. Secondly, maintaining daily compliance through continuous monitoring helps improve overall security by identifying risks and failing controls promptly. Lastly, staying compliant year-round reduces the time and effort required for your next audit. By maintaining compliance (with minimal effort thanks to automation) throughout the year, you can avoid last-minute stress and make your next audit much smoother and more efficient.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-container">
                        <div class="accordion-wrapper">
                            <div class="accordion accordion_3">
                                <div class="accordion-item open">
                                    <div class="accordion-title">How long does the SOC 2 process take?</div>
                                    <div class="accordion-content">The SOC 2 process timeline varies depending on the company&#8217;s size, complexity, and specific security needs. For a SOC 2 Type 1 report, the process can take anywhere from one month to six months. For a SOC 2 Type 2 report, it typically takes about six months to a year. Each company's journey is unique, so these timeframes can vary.</div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-title">I&#8217;m not an expert. Can I manage compliance alone?</div>
                                    <div class="accordion-content">Absolutely. That was our mission from day one. We provide pre-built frameworks, templates, and guides to make the process straightforward. With Drata, you can easily track your progress, see incomplete requirements, and ensure you&#8217;re on the right path. Plus, if you ever have questions, our compliance experts and 24/5 technical support are available to assist you.</div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-title">What are the benefits of compliance even if we&#8217;re not planning to be audited?</div>
                                    <div class="accordion-content">Even if you&#8217;re not planning an immediate audit, establishing a compliance program can enhance your security and streamline sales cycles. Many customers have found that even a basic compliance program demonstrates a commitment to security to investors and potential customers. Additionally, having this foundation gives you a significant advantage when you do decide to undergo an audit, typically when a big customer or investor requires it.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`);

        //write code for accordion functionality
        const accordion_2 = document.querySelector('.accordion_2');
        const items_2 = accordion_2.querySelectorAll('.accordion-item');
        items_2.forEach(item => {
            item.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                items_2.forEach(item => item.classList.remove('open'));
                if (!isOpen) {
                    item.classList.add('open');
                }
                // else {
                //     item.classList.add('open');
                // }
            });
        });

        const accordion_3 = document.querySelector('.accordion_3');
        const items_3 = accordion_3.querySelectorAll('.accordion-item');
        items_3.forEach(item => {
            item.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                items_3.forEach(item => item.classList.remove('open'));
                if (!isOpen) {
                    item.classList.add('open');
                }
                // else {
                //     item.classList.add('open');
                // }
            });
        });
    };

    // Initialize slider
    function initSlider() {
        let cardName = document.querySelectorAll('.swiper-slider .swiper-slide .card-name');
        const swiper = new Swiper(".swiper-slider", {
            // Optional parameters
            centeredSlides: true,
            spaceBetween: 32,
            slidesPerView: 1.338,
            freeMode: false,
            loop: true,
            autoHeight: true,
            mousewheel: false,
            keyboard: {
                enabled: true
            },

            // Responsive breakpoints
            breakpoints: {
                320: {
                    slidesPerView: 1.095,
                    spaceBetween: 8
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                1025: {
                    spaceBetween: 32,
                    slidesPerView: 1.338
                }
            },

            // Enabled autoplay mode
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false
            // },

            // If we need pagination
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + ' ' + cardName[index].textContent.replace(/\s/g, "") + '">' + (cardName[index].textContent) + "</span>";
                },

            },

            // If we need navigation
            navigation: {
                nextEl: ".swiper-btn-next",
                prevEl: ".swiper-btn-prev"
            },
        });

        waitForElm('body.spz-28001 .cr-section .cr-section-container .slider-section .container .swiper-pagination').then(function () {
            if (document.querySelector('body.spz-28001 .cr-section .cr-section-container .slider-section .container .swiper-pagination .spz-anchor')) return;
            document.querySelector('body.spz-28001 .cr-section .cr-section-container .slider-section .container .swiper-pagination').insertAdjacentHTML('beforeend', `<a class="spz-anchor" href="https://drata.com/product">All</a>`);
        });
    }

    // When middle part of the section is middle of the viewport return true
    function isInViewport(el) {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight / 2) &&
            rect.bottom >= (window.innerHeight / 2)
        );
    }

    // Create customer reviews section from JSON data
    function createCustomerReviews() {
        let reviewsHTML = '';
        custReviews.forEach(review => {
            reviewsHTML += `
                <div class="swiper-slide">
                    <div class="slider-card">
                        <div class="slider-content">
                            <div class="text-copy">
                                <div class="title-copy">
                                    <p class="card-name">${review.name}</p>
                                    <h3 class="card-title">${review.title}</h3>
                                    <p class="card-desc">${review.review}</p>
                                </div>
                                <div class="c-logo ht-25 no-desk">
                                        <img src="${review.companyLogo}" alt="${review.name}">
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="learn-more-cta">
                                    ` + ((!review.link) ? '' : `
                                    <a href="${review.link}" class="learn-more blue-btn" data-review="${review.review}">Learn More</a>
                                    `) + `
                                </div>
                            </div>
                        </div>
                         <div class="slider-img no-mob">
                            <img src="${review.companyLogo}" alt="${review.name}">
                        </div>
                    </div>
                </div>`;
        });
        return reviewsHTML;
    }

    //check if window is resized
    // window.addEventListener('resize', function () {
    //     updateImgHeight();
    // });

    //when scroll, check which section is in view and add active class to respective nav-anchor
    window.addEventListener('scroll', function () {
        checkActiveNav();
    });

    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('demo-btn')) {
            this.document.querySelector('a[href="/demo"]').click();
        }

        if (e.target.classList.contains('cs-video-mask')) {
            //hide the mask and play the video
            e.target.remove();
            this.document.querySelector('#cs-video').play();
        }
    });

})();