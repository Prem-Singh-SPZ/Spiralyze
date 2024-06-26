(function () {
    const astUrl = '//res.cloudinary.com/spiralyze/image/upload';

    // Convert customer reviews section to dynamic JSON data
    const custReviews = [
        {
            name: "Tor Fusdahl",
            designation: "Engineering Manager",
            company: "Superside",
            companyLogo: "https://res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/14007/logo.svg",
            avatar: "//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/avatar.webp",
            review: "“With Drata, we can quickly achieve SOC 2 compliance without disrupting our flow of business. Makes compliance easy. Puts us on the fast track.”",
            link: "https://drata.com/customers"
        },
        {
            name: "Joshua Peskay",
            designation: "vCIO",
            company: "RedRover",
            companyLogo: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/logo_02.webp",
            avatar: "//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/avatar_1.webp",
            review: "The promise of automation has long been discussed in the compliance world, but never truly realized. Drata has turned that into reality.",
            link: "https://drata.com/customers"
        },
        {
            name: "Jonathan Jaffe",
            designation: "CISO",
            company: "Xine",
            companyLogo: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/logo_05.webp",
            avatar: "//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/avatar_3.webp",
            review: "The promise of automation has long been discussed in the compliance world, but never truly realized. Drata has turned that into reality.",
            link: "https://drata.com/customers"
        },
        {
            name: "Lola Kureno",
            designation: "Cyber Security Engineer",
            company: "RoundTable",
            companyLogo: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/logo_5.webp",
            avatar: "//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/avatar_4.webp",
            review: "Having centralized and detailed visibility of all our personnel, assets, and being able to see what compliance requirements need our attention has streamlined the entire process.",
            link: "https://drata.com/customers"
        },
        {
            name: "Chris Bake",
            designation: "CTO",
            company: "Lemonade",
            companyLogo: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/logo_03.webp",
            avatar: "//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/avatar_2.webp",
            review: "The time savings and impact on sales are immediate, especially as we inform our customers that we're pursuing SOC 2 compliance!",
            link: "https://drata.com/customers/lemonade"
        }
    ];


    //append swiper js script in head and onload of that call function initSlider
    function appendScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;

        var css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "//res.cloudinary.com/spiralyze/raw/upload/v1713790594/drata/14007/Swiper/swiper-min.css";

        document.getElementsByTagName("head")[0].appendChild(script);
        document.getElementsByTagName("head")[0].appendChild(css);

        script.onload = function () {
            callback();
        };
    }

    appendScript("//res.cloudinary.com/spiralyze/raw/upload/v1713790594/drata/14007/Swiper/swiper-min.js", function () {
        initSlider();
    });

    //append to preload images
    document.querySelector('head').insertAdjacentHTML('beforeend', `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/14007/slider-left-hover.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/14007/slider-right-hover.svg" as="image">`);

    function createTest() {
        // document.querySelector("body").classList.remove("remove-spz-14001-test");

        waitForElm('header + div[data-csk-entry-type="hero"] > .MuiContainer-root').then(function () {
            document.querySelector("body").classList.add("loading-spz_test");
            document.querySelector("body").classList.add("spz-14007");

            if (document.querySelector('body .MuiContainer-root .hero-section-14007')) {
                document.querySelector('body .MuiContainer-root .hero-section-14007').remove();
            }

            heroContent();

            waitForElm('[variant="collectionContentGridSectionWrapper"]').then(function () {
                whatsIncludedSec();
                simpleSteps();
            });

            waitForElm('[variant="collectionAccordionSectionWrapper"] [class$="CollectionAccordion-root"] [variant="default"]').then(function () {
                faqSection();
            });
            // submitTestDetails('#14004a_variant');
        });
    }

    function removeTest() {
        document.body.classList.remove("loading-spz_test");
        document.body.classList.remove("spz-14007");
        if (document.querySelector('.hero-section-14007')) {
            document.querySelector('.hero-section-14007').remove();
        }
        if (document.querySelector('.case-studies-section')) {
            document.querySelector('.case-studies-section').remove();
        }
        if (document.querySelector('.spz-benefits')) {
            document.querySelector('.spz-benefits').remove();
        }
        if (document.querySelector('.video-integration-sec')) {
            document.querySelector('.video-integration-sec').remove();
        }
        if (document.querySelector('.simple-steps-sec')) {
            document.querySelector('.simple-steps-sec').remove();
        }
        if (document.querySelector('.cr-section')) {
            document.querySelector('.cr-section').remove();
        }
        if (document.querySelector('.auto-footer')) {
            document.querySelector('.auto-footer').remove();
        }
        if (document.querySelector('.resources-section')) {
            document.querySelector('.resources-section').remove();
        }

        // Remove scroll event listener
        window.removeEventListener('scroll', function () { });
    }

    //Passing test details to hidden fields
    function submitTestDetails(cro_test_2) {
        if (document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input')) {
            // document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', cro_test_1);
            document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input').setAttribute('value', cro_test_2);
        }
    }

    function demoChecked() {
        const sInt = setInterval(() => {
            if (document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input').val != '') {
                clearInterval(sInt);
                submitTestDetails('#14007_variant');
            }
        }, 1000);
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
        if (window.location.pathname.indexOf("/product/soc-2") > -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            createTest();
        } else {
            removeTest();
        }
        // if (window.location.pathname.indexOf("/demo") > -1) {
        //     // ADDED ONLY FOR DEMO PAGE TO ADD #14004a_variant IN HIDDEN FIELD
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

    function heroContent() {
        let appendHero = setInterval(() => {
            if (document.querySelector('body header + div[data-csk-entry-type="hero"] > .MuiContainer-root')) {
                if (document.querySelectorAll('body header + div[data-csk-entry-type="hero"] > .MuiContainer-root .hero-section-14007').length == 0) {
                    document.querySelector('body header + div[data-csk-entry-type="hero"] > .MuiContainer-root').insertAdjacentHTML("afterbegin", '<section class="hero-section-14007">\
                    <div class="hero-content dis-flex flex-wrap justify-content-between">\
                    <div class="hero-left-section">\
                    <h1 class="hc-title">Accelerate <span class="hc-blue"><i class="dynamic-product-name">SOC 2</i> Compliance</span>. Reduce Time and Cost by 50%.</h1>\
                    <div class="star-rating dis-flex align-items-center"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/14001/hero_logo-g2.svg" class="g2-img" alt="G2 Logo" title="G2 Logo" draggable="false">\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/14007/rating-4_9.svg" class="sr-img" alt="Ratings" title="Ratings" draggable="false"><span class="sr-number"><strong>4.9</strong> (600+ reviews)</span></div>\
                    <div class="list-grp-wrapper">\
                    <ul class="list-group">\
                    <li class="list-item"><strong>Evidence Collection.</strong> Create <i class="dynamic-product-name">SOC 2</i> documentation in minutes via integrations with your tech stack.</li>\
                    <li class="list-item"><strong>Policy Implementation.</strong> Pre-mapped controls, risk assessments, and security training for SOC 2 Compliance.</li>\
                    <li class="list-item"><strong>Compliance Experts.</strong> Never get stuck. Our compliance experts can walk you through the entire process.</li>\
                    </ul>\
                    </div>\
                    <a href="javascript:void(0)" id="hero-copy-url" class="hero-btn redirect-to-demo"><span>Get Started</span> <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/6009/arrow_icon.svg" class="button_arrow" alt="CTA Arrow" title="CTA Arrow"></a>\
                    </div>\
                    <div class="hero-right-section">\
                    <picture>\
                        <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/frame_48096469.webp">\
                        <source media="(min-width:300px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/frame_48096469.webp">\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/frame_48096469.webp" class="hero-img" alt="Accelerate SOC 2 Compliance. Reduce Time and Cost by 50%." title="Accelerate SOC 2 Compliance. Reduce Time and Cost by 50%.">\
                                        </picture>\
                    </div>\
                    </div>\
                    </section>');

                    if (window.location.href.indexOf("soc-2") > -1) {
                        document.querySelectorAll('.dynamic-product-name').forEach(function (v, i) {
                            v.textContent = "SOC 2";
                        });
                    }
                }

                appendCaseStudies();

                // On click of any '.redirect-to-demo' link, trigger click on header button
                window.addEventListener('click', function (e) {
                    if (e.target.matches('.redirect-to-demo')) {
                        document.querySelector('header a[href="/demo"]').click();
                    }
                });
            }
        }, 50);

        setTimeout(() => {
            clearInterval(appendHero);
        }, 500);
    }

    function appendCaseStudies() {
        const aUrl = astUrl + '/fl_sanitize/drata/2013/';
        const caseStudies = [
            {
                title: 'Lemonade',
                logo: aUrl + 'lemonade_logo.svg',
                number: '200',
                text: 'hours saved',
                arrow: 'down'
            },
            {
                title: 'Thnks',
                logo: aUrl + 'thnks_logo.svg',
                number: '100',
                text: 'hours saved',
                arrow: 'down'
            },
            {
                title: 'PolicyDock',
                logo: aUrl + 'policy_dock.svg',
                number: '24',
                text: 'weeks saved',
                arrow: 'down'
            },
            {
                title: 'Plane',
                logo: aUrl + 'plane.svg',
                number: '4x',
                text: 'faster compliance',
                arrow: 'up'
            },
            {
                title: 'Fivetran',
                logo: aUrl + 'fivetran.svg',
                number: '50%',
                text: 'time saved',
                arrow: 'down'
            },
            {
                title: 'Measurabl',
                logo: aUrl + 'measurable.svg',
                number: '80%',
                text: 'workload automated',
                arrow: 'down'
            },
            {
                title: 'Deeper Signals',
                logo: aUrl + 'deeper_signals.svg',
                number: '75%',
                text: 'time saved',
                arrow: 'down'
            },
            {
                title: 'Lucid Works',
                logo: aUrl + 'lucid.svg',
                number: '40%',
                text: 'workload automated',
                arrow: 'up'
            }
        ];

        if (document.querySelectorAll('.case-studies-section').length === 0) {
            document.querySelector('.hero-section-14007').insertAdjacentHTML('afterend', `
            <section class="case-studies-section">
              <h3 class="cs-title">See Why Companies are Automating Compliance with Drata</h3>
              <div class="cs-overflow">
                <div class="case-study-wrapper" id="mini-cs-wrapper">
                </div>
              </div>
            </section>`);

            caseStudies.forEach((cs, index) => {
                document.querySelector('#mini-cs-wrapper').insertAdjacentHTML('beforeend', `
              <div class="case-study ${cs.arrow}">
                <img class="cs-logo" src="${cs.logo}" alt="${cs.title}">
                <span class="cs-divider"></span>
                <div class="cs-details">
                  <div class="cs-right">
                    <div class="cs-numb">${cs.number} 
                      <img class="cs-arrow" src="${aUrl}arrow.svg" alt="Arrow ${cs.arrow}">
                    </div>
                    <div class="cs-text">${cs.text}</div>
                  </div>
                </div>
              </div>`);
            });
        }


        benefitsSection();
    }

    function benefitsSection() {
        // if .ac-header not contains 'Audit Ready' then remove .spz-benefits and re-initiate it

        const bsInt = setInterval(() => {
            if (document.querySelectorAll('.ac-header').length > 0) {
                if (!document.querySelector('.ac-header').textContent.includes('Audit Ready')) {
                    document.querySelector('body .MuiContainer-root .spz-benefits').remove();
                    benefitsSection();
                    clearInterval(bsInt);
                }
            }
        }, 500);

        if (document.querySelectorAll('body .MuiContainer-root .spz-benefits').length == 0) {
            clearInterval(bsInt);

            let benInfo = '', benImg = '', i = 1;
            document.querySelectorAll('section.MuiBox-root').forEach(function (element) {
                if (element.getAttribute('variant') === 'blockImageOnLeftSectionWrapper' || element.getAttribute('variant') === 'blockImageOnRightSectionWrapper') {
                    var accordion_title = element.querySelector('.MuiBox-root .MuiContainer-root .MuiBox-root h2').textContent;
                    var accordion_description = element.querySelector('.MuiBox-root .MuiContainer-root .MuiBox-root [class$=Text-root]').innerHTML;
                    element.querySelector('.MuiBox-root .MuiContainer-root [class$=Block-mediaWrapper] img').setAttribute('alt', accordion_title);
                    var accordion_image = element.querySelector('.MuiBox-root .MuiContainer-root [class$=Block-mediaWrapper]').innerHTML;
                    if (i == 1) {
                        var isOpen = "open";
                    } else {
                        var isOpen = "";
                    }
                    benInfo += `<div class="ac-item ` + isOpen + `" image_div="` + i + `">
                        <div class="ac-header">`+ accordion_title + `</div>
                        <div class="ac-cont">
                            `+ accordion_description + `
                        </div>
                        <div class="ac-img-tab">
                            `+ accordion_image + `
                        </div>
                    </div>`;
                    benImg += `<div class="ac-img ac-img_` + i + ` ` + isOpen + `">` + accordion_image + `</div>`;
                    i += 1;
                }
            });

            jQuery(document).on('click', '.ac-item', function () {
                jQuery('.ac-item').removeClass('open');
                jQuery(this).addClass('open');
                jQuery('.ac-img').removeClass('open');
                var img_div = jQuery(this).attr('image_div');
                var div_index = 'ac-img_' + img_div;
                jQuery('.ac-img.' + div_index).addClass('open');
            });

            document.querySelector('.case-studies-section').insertAdjacentHTML('afterend',
                `<section class="spz-benefits">
                    <div class="spz-container">
                        <h2 class="ac-heading">SOC 2 Automation Has Its Benefits</h2>
                        <div class="benefits-accord">
                            <div class="ac-info">
                                ${benInfo}
                            </div>
                            <div class="ac-img-wrap">
                                ${benImg}
                            </div>
                        </div>
                        <div class="btn-block">
                            <a href="javascript:void(0)" class="ac-btn redirect-to-demo">Get Started<img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/14004/Arrow-Icon.svg" alt="Right Arrow" title="Right Arrow"></a>
                        </div>
                    </div>
                </section>`);
        }

        setTimeout(() => {
            clearInterval(bsInt);
        }, 5000);
    }

    function whatsIncludedSec() {
        document.querySelector('[variant="collectionContentGridSectionWrapper"]').classList.add('whats-included-sec');
        document.querySelector('[variant="collectionContentGridSectionWrapper"] [class$=MuiTypography-root-Text-title]').textContent = 'Everything You Need to Get SOC 2 Compliant with Drata';
        if (document.querySelector('.whats-included-sec .blue-cta-btn') == null) {
            document.querySelector('[variant="collectionContentGridSectionWrapper"] [class$=Text-root-Collection-introText]').insertAdjacentHTML('beforeend', `<a href="https://drata.com/platform" class="blue-cta-btn"><span>Explore the Platform</span> <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/6009/arrow_icon.svg" class="button_arrow" alt="CTA Arrow" title="CTA Arrow"></a>`);
        }
    }

    function simpleSteps() {
        if (document.querySelector('.simple-steps-sec')) return;
        document.querySelector('.whats-included-sec').insertAdjacentHTML('afterend', `
            <section class="simple-steps-sec">
                <div class="simple-steps-container">
                    <div class="ss-top-bar dis-flex">
                        <div class="ss-left">
                            <div class="ss-subtitle">How Drata Works</div>
                            <h2 class="ss-title">SOC 2 in 3 Simple Steps</h2>
                        </div>
                        <div class="ss-right">
                            <div class="ss-text">Get full visibility into your compliance status so you can stay on top of risks,
                                action items, and audit readiness.</div>
                            <div class="ss-divider"></div>
                            <div class="ss-text">When compliance gets confusing, get step-by-step guidance and access to live
                                support 24/5.</div>
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
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/collect_1.webp"
                                                class="ss-img" alt="Configure Your Compliance Needs"
                                                title="Configure Your Compliance Needs">
                                        </div>
                                        <div class="ss-title">Configure Your Compliance Needs</div>
                                        <div class="ss-desc">Get started with 23+ framework templates, all pre-mapped with
                                            auditor-validated controls.</div>
                                    </div>
                                </div>
                                <div class="ss-item step-2">
                                    <div class="ss-step step-2">2</div>
                                    <div class="ss-content">
                                        <div class="ss-img-wr">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/collect_2.webp"
                                                class="ss-img" alt="Collect Evidence Automatically"
                                                title="Collect Evidence Automatically">
                                        </div>
                                        <div class="ss-title">Collect Evidence Automatically</div>
                                        <div class="ss-desc">Drata collects and stores compliance evidence and documentation for you
                                            using native integrations with your tech stack.</div>
                                    </div>
                                </div>
                                <div class="ss-item step-3">
                                    <div class="ss-step step-3">3</div>
                                    <div class="ss-content">
                                        <div class="ss-img-wr">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/collect.webp"
                                                class="ss-img" alt="Crush the Audit" title="Crush the Audit">
                                        </div>
                                        <div class="ss-title">Crush the Audit</div>
                                        <div class="ss-desc">Reduce back-and-forth with auditors, automate evidence requests, and
                                            share documentation instantly to streamline the process.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ss-bottom-bar">
                                <div class="ssb-title">Continuous Control Monitoring</div>
                                <div class="ssb-subtitle">Continuous tests ensure you’re in compliance before and after the audit
                                    for year-round peace of mind.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`);

        videoIntegration();

        // On hover of any .ss-item, add specific step class name to .simple-steps-container
        document.querySelectorAll('.simple-steps .ss-item').forEach(function (item) {
            item.addEventListener('mouseover', function () {
                document.querySelector('.simple-steps-container').classList.remove('step-1', 'step-2', 'step-3');
                document.querySelector('.simple-steps-container').classList.add('step-' + this.querySelector('.ss-step').textContent);
            });

            // On mouseout, remove all step classes
            item.addEventListener('mouseout', function () {
                document.querySelector('.simple-steps-container').classList.remove('step-1', 'step-2', 'step-3');
            });
        });

        // On scroll, add class to .simple-steps-container according to the step in view
        window.addEventListener('scroll', function () {

            // Above 1024px, don't add class on scroll
            if (window.innerWidth >= 1024) return;

            document.querySelectorAll('.simple-steps .ss-item').forEach(function (item) {
                if (isInViewport(item)) {
                    document.querySelector('.simple-steps-container').classList.remove('step-1', 'step-2', 'step-3');
                    document.querySelector('.simple-steps-container').classList.add('step-' + item.querySelector('.ss-step').textContent);
                }
            });
        });
    }

    function videoIntegration() {
        document.querySelector('.simple-steps-sec').insertAdjacentHTML('afterend', `
        <section class="video-integration-sec">
            <div class="vi-wrapper">
                <div class="vi-head">
                    <div class="vi-title">Powerful Integrations Make Continuous Compliance Easy</div>
                    <div class="vi-desc">Integrating the right systems will take the stress out of evidence collection and documentation. With Drata, you can stay compliant and focus on business growth.</div>
                    <a href="https://drata.com/platform/integrations" class="blue-cta-btn">
                        <span>Explore Integrations</span>
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/6009/arrow_icon.svg" class="button_arrow" alt="CTA Arrow" title="CTA Arrow">
                    </a>
                </div>
                <div class="vi-video-wrap"></div>
            </div>
        </section>`);

        // Append customer reviews after video integration section
        customerReviews();

        // On scroll, play video when in view
        window.addEventListener('scroll', function () {
            const vEl = document.querySelector('.video-integration-sec .vi-video-wrap video');

            if (!document.querySelector('.spz-14007')) {
                window.removeEventListener('scroll', function () { });
                return;
            }

            // Append video if not present
            if (vEl == null && document.querySelector('.video-integration-sec .vi-video-wrap')) {
                document.querySelector('.video-integration-sec .vi-video-wrap').insertAdjacentHTML('afterbegin', `<video src="//res.cloudinary.com/spiralyze/video/upload/v1713778093/drata/14007/14007_Product_Internal__Big_Swing_-_Wireframe_Copy_1.mp4" class="vi-video" autoplay loop muted playsinline></video>`);
            }

            // Play video when in view
            if (isInViewport(document.querySelector('.video-integration-sec'))) {
                document.querySelector('.vi-video').play();
            } else {
                // Pause video when out of view
                document.querySelector('.vi-video').pause();
            }
        });
    }

    function customerReviews() {
        document.querySelector('.video-integration-sec').insertAdjacentHTML('afterend', `
            <section class="cr-section">
                <div class="title-wrapper">
                    <h3 class="large-title">Don't Take Our Word for It</h3>
                    <p class="small-description">See how others your Drata to achieve and maintain SOC 2 compliance.</p>
                </div>
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
                <div class="cta-wrapper"><a href="https://drata.com/customers" class="blue-cta-btn"><span>See All Stories</span>
                    <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/6009/arrow_icon.svg" class="button_arrow" alt="CTA Arrow" title="CTA Arrow"></a></div>
            </section>`);


        // If swiper is initialized, run initSlider function
        if (typeof Swiper !== 'undefined') {
            initSlider();
        }

        autoFooter();
    }

    function autoFooter() {
        document.querySelector('.cr-section').insertAdjacentHTML('afterend', `
            <section class="auto-footer">
                <div class="automate-footer container dis-flex flex-wrap">
                    <h6 class="small-title">Get a Demo</h6>
                    <h3 class="auto-title">Accelerate Your SOC 2 Journey</h3>
                    <p class="auto-sub-title">Get a demo and find out how you can close deals faster, drive revenue, and build trust
                        through continuous monitoring and assurance. </p>
                    <button class="get-started-btn redirect-to-demo">Get Started</button>
                </div>
            </section>`);

        resourceSection();
    }

    function resourceSection() {
        document.querySelector('.auto-footer').insertAdjacentHTML('afterend', `
        <section class="resources-section">
            <div class="resources-wrapper">
                <div class="resource-title">
                    <h6 class="title">Stay Up to Date with the Latest SOC 2 Resources</h6>
                    <div class="explore-more">
                        <a href="https://drata.com/resources" class="ex-more">Explore More 
                            <svg xmlns="http://www.w3.org/2000/svg" class="button_arrow" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                <path d="M5.96591 12.1364L4.64773 10.8295L8.10795 7.36932H0V5.44886H8.10795L4.64773 1.99432L5.96591 0.681818L11.6932 6.40909L5.96591 12.1364Z" fill="#0580E8"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="resource-cards">
                    <div class="resource-card">
                        <a href="https://drata.com/resources/soc-2-guide" class="rc-link">
                            <div class="card-img">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/01.webp"
                                    alt="SOC 2 Compliance Checklist">
                            </div>
                            <div class="card-content">
                                <div class="card-title">ARTICLE</div>
                                <div class="card-desc">Start-to-Finish Guide on SOC 2 Compliance</div>
                            </div>
                        </a>
                    </div>
                    <div class="resource-card">
                        <a href="https://drata.com/grc-central/soc-2/compliance-checklist#heading-soc-2-compliance-checklist" class="rc-link">
                            <div class="card-img">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/02.webp"
                                    alt="SOC 2 Compliance Checklist">
                            </div>
                            <div class="card-content">
                                <div class="card-title">ARTICLE</div>
                                <div class="card-desc">SOC 2 Compliance Checklist: 9 Key Steps To Take</div>
                            </div>
                        </a>
                    </div>
                    <div class="resource-card">
                        <a href="https://drata.com/grc-central/soc-2/questions-to-ask-an-auditor" class="rc-link">
                            <div class="card-img">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/03.webp"
                                    alt="SOC 2 Compliance Checklist">
                            </div>
                            <div class="card-content">
                                <div class="card-title">ARTICLE</div>
                                <div class="card-desc">Audit Your Auditor: 5 Questions to Ask a Potential Auditor</div>
                            </div>
                        </a>
                    </div>
                    <div class="resource-card">
                        <a href="https://drata.com/resources/webinars/5-internal-threats-to-your-compliance-program" class="rc-link">
                            <div class="card-img">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14007/04.webp"
                                    alt="SOC 2 Compliance Checklist">
                            </div>
                            <div class="card-content">
                                <div class="card-title">ARTICLE</div>
                                <div class="card-desc">5 Internal Threats to Your Compliance Program and How to Solve for Them</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="explore-more mob-only">
                    <a href="https://drata.com/resources" class="ex-more">Explore More 
                        <svg xmlns="http://www.w3.org/2000/svg" class="button_arrow" width="12" height="13" viewBox="0 0 12 13" fill="none">
                            <path d="M5.96591 12.1364L4.64773 10.8295L8.10795 7.36932H0V5.44886H8.10795L4.64773 1.99432L5.96591 0.681818L11.6932 6.40909L5.96591 12.1364Z" fill="#0580E8"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>`);
    }

    function faqSection() {
        document.querySelector('[variant="collectionAccordionSectionWrapper"]').classList.add('spz-faq-sec');
        document.querySelector('[variant="collectionAccordionSectionWrapper"] [class$="CollectionAccordion-root"] [variant="default"]').innerHTML = `<h6 class="small-title">FAQ</h6><h5 class="large-title">Your SOC 2 Questions Answered</h5><p class="small-description">At Drata, we&#8217;re here to help companies earn and keep the trust of their users, customers, partners, and prospects. We believe the best way to earn trust is by first proving that you deserve it. Here&#8217;s how we walk the walk when it comes to our own security program:</p>`;

        document.querySelector('[class$=CollectionAccordion-root] [class$=CollectionAccordion-itemsContainer] [class$=MuiAccordion-root-CollectionAccordion-accordion] [class$=MuiAccordionSummary-root-CollectionAccordion-accordionSummary]').click();
    }

    // Initialize slider
    function initSlider() {
        const swiper = new Swiper(".swiper-slider", {
            // Optional parameters
            centeredSlides: true,
            slidesPerView: 1,
            freeMode: false,
            loop: true,
            mousewheel: false,
            keyboard: {
                enabled: true
            },

            // Enabled autoplay mode
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false
            // },

            // If we need pagination
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: false,
                clickable: true
            },

            // If we need navigation
            navigation: {
                nextEl: ".swiper-btn-next",
                prevEl: ".swiper-btn-prev"
            },
        });
    }

    // When middle part of the section is middle of the viewport return true
    function isInViewport(el) {
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
                        <div class="slider-img">
                            <img src="${review.avatar}" alt="${review.name}">
                        </div>
                        <div class="slider-content">
                            <div class="text-copy">
                                <h3 class="card-title">Saves Our Team Hundreds of Hours</h3>
                                <p class="card-desc">${review.review}</p>
                            </div>
                            <div class="card-footer">
                                <div class="footer-logos">
                                    <div class="c-logo">
                                        <span style="font-weight: 700;color: #0C131A;">${review.name}</span>
                                    </div>
                                    <div class="c-line"></div>
                                    <div class="c-logo">
                                        <span style="font-weight: 500;color: #96A1B2;">${review.designation}</span>
                                    </div>
                                    <div class="c-line desk-only"></div>
                                    <div class="c-logo ht-25 desk-only">
                                        <img src="${review.companyLogo}" alt="${review.company}">
                                    </div>
                                </div>
                                <div class="learn-more-cta">
                                    <div class="c-logo ht-25 no-desk">
                                        <img src="${review.companyLogo}" alt="${review.company}">
                                    </div>
                                    <a href="${review.link}" class="learn-more" data-review="${review.review}">Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" class="button_arrow" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                            <path d="M5.96591 12.1364L4.64773 10.8295L8.10795 7.36932H0V5.44886H8.10795L4.64773 1.99432L5.96591 0.681818L11.6932 6.40909L5.96591 12.1364Z" fill="#0580E8" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
        return reviewsHTML;
    }

})();