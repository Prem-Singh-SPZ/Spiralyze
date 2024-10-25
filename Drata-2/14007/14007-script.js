(function () {
    const astUrl = '//res.cloudinary.com/spiralyze/image/upload';

    // Convert customer reviews section to dynamic JSON data
    const custReviews = [
        {
            name: "Tor Fusdahl",
            designation: "Engineering Manager",
            company: "Superside",
            companyLogo: astUrl + "/fl_sanitize/drata/14007/logo.svg",
            avatar: astUrl + "/f_auto/drata/14007/image_01.webp",
            title: "Saves Our Team Hundreds of Hours",
            review: "With Drata, we can quickly achieve SOC 2 compliance without disrupting our flow of business. Makes compliance easy. Puts us on the fast track.",
            link: "https://drata.com/customers/superside"
        },
        {
            name: "Joshua Peskay",
            designation: "vCIO",
            company: "RedRover",
            companyLogo: astUrl + "/fl_sanitize/drata/14007/redrover.svg",
            avatar: astUrl + "/f_auto/drata/14007/image_02.webp",
            title: "Limousine for Your Compliance Journey",
            review: "Drata also worked to understand our audit needs and matched us with an auditor who has been terrific. Drata is a luxury limousine for your compliance journey.",
        },
        {
            name: "Jonathan Jaffe",
            designation: "CISO",
            company: "Lemonade",
            companyLogo: astUrl + "/fl_sanitize/drata/14007/lemonade.svg",
            avatar: astUrl + "/f_auto/drata/14007/image_04.webp",
            title: "We Saved 80% of Time With Drata",
            review: "I&#8217;ve spent well over 200 hours before using Drata just in preparing for and dealing with our SOC 2 audit. Drata has been great for automating evidence collection. I find it really flexible, and I&#8217;m able to make my own control framework.",
            link: "https://drata.com/customers/lemonade"
        },
        {
            name: "Chris Bake",
            designation: "CTO",
            company: "Apple NextEd",
            companyLogo: astUrl + "/fl_sanitize/drata/14007/nextEd.svg",
            avatar: astUrl + "/f_auto/drata/14007/image_05.webp",
            title: "Time savings and impact on sales are immediate",
            review: "SOC 2 brings about a lot of questions around time, cost, resources, and requirements. For us, automating the path to compliance was the clear answer, and Drata has been exceptional in easeing this journey for us.",
            link: "https://drata.com/customers/apl-nexted"
        }
    ];


    // FAQ section data
    const faq = [{
        que: "We&#8217;re not planning on getting SOC 2 yet. Why should I use Drata?",
        ans: `<p class='MuiTypography-root MuiTypography-body1 mui-198vr4a-MuiTypography-root'>Your security posture matters. SOC 2 is just one way to prove the effectiveness of your security program, but having a real-time view of your security controls is invaluable for any business.</p> <p class='MuiTypography-root MuiTypography-body1 mui-198vr4a-MuiTypography-root'>Drata is the most advanced continuous monitoring platform on the market to assess your security posture in real-time, every day. You can score your SOC 2 readiness here. Check out <a class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways mui-k61s3s-MuiTypography-root-MuiLink-root-Link-root" href="https://www.forbes.com/sites/troymarkowitz/2021/01/15/why-saas-start-ups-should-prioritize-soc-2-compliance/" target="_blank" rel="noopener noreferrer" data-testid="Text-hyperlink">this Forbes piece</a> written by our Co-Founder Troy Markowitz that discusses this further.</p>`
    },
    {
        que: "If I use Drata, will my auditor have access to all my data and results of control testing?",
        ans: "<p class='MuiTypography-root MuiTypography-body1 mui-198vr4a-MuiTypography-root'>Drata only gives auditors access to what they need in order to streamline the audit engagement. In the Auditor View, you control the level of access your auditor receives. You also dictate the time period that access covers, and the framework so auditors are only seeing evidence and test results of your controls during that specific time window.<p class='MuiTypography-root MuiTypography-body1 mui-198vr4a-MuiTypography-root'>"
    }, {
        que: "Why is the Auditor View important?",
        ans: "<p class='MuiTypography-root MuiTypography-body1 mui-198vr4a-MuiTypography-root'>Drata was built alongside auditors to ensure you and the auditor have the best user experience. Today, most platforms enable an export of reports or access to the entire set of controls and data you have visibility into. While not every control is applicable to your environment, auditors can&#8217;t unsee the evidence you&#8217;ve collected, which is why it&#8217;s important to only display pertinent information in the Auditor-Only View.</p>"
    },
    {
        que: "Do I still need an auditor if I use Drata?",
        ans: "<p class='MuiTypography-root MuiTypography-body1 mui-198vr4a-MuiTypography-root'>Yes, auditors are an essential part of the process and provide independent third-party validation of compliance. We work with and through auditors to ensure a strong security posture. We streamline the process they have to go through to evaluate evidence.</p> <p class='MuiTypography-root MuiTypography-body1 mui-198vr4a-MuiTypography-root'>If you do not already have an audit firm selected, Drata will introduce you to a firm that meets your needs and budget, and work closely with them throughout the entire process.</p>"
    }];

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
    document.querySelector('head').insertAdjacentHTML('beforeend', `<link rel="preload" href="${astUrl}/fl_sanitize/drata/14007/slider-left-hover.svg" as="image"><link rel="preload" href="${astUrl}/fl_sanitize/drata/14007/slider-right-hover.svg" as="image">`);

    function createTest() {
        // document.querySelector("body").classList.remove("remove-spz-14001-test");

        waitForElm('header + div[data-csk-entry-type="hero"] > .MuiContainer-root').then(function () {
            document.querySelector("body").classList.add("spz-14007");

            if (document.querySelector('body .hero-section-14007')) {
                document.querySelector('body .hero-section-14007').remove();
            }


            waitForElm('[variant="collectionContentGridSectionWrapper"]').then(function () {
                heroContent();
                simpleSteps();
            });

            waitForElm('[variant="collectionContentGridSectionWrapper"] [class$=MuiTypography-root-Text-title]').then(whatsIncludedSec);

            waitForElm('.loaded-test [variant="collectionAccordionSectionWrapper"] [class$="CollectionAccordion-root"] [variant="default"]').then(function () {
                setTimeout(() => {
                    faqSection();
                }, 1000);
            });
            // submitTestDetails('Variant_14007');
        });

        // createCookie('spz-14007-loaded', 'true', 1);
    }

    function removeTest() {
        document.body.classList.remove("loaded-test");
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
    // function submitTestDetails(cro_test) {
    //     if (document.querySelector('form.hs-form-private .hs_cro_test_3 .input .hs-input')) {
    //         document.querySelector('form.hs-form-private .hs_cro_test_3 .input .hs-input').setAttribute('value', cro_test);
    //     }
    // }

    // function demoChecked() {
    //     const sInt = setInterval(() => {
    //         var cro_field = document.querySelector('form.hs-form-private .hs_cro_test_3 .input .hs-input');

    //         // Check if spz-14007-loaded cookie is present and cro_field is present
    //         if ((cro_field && cro_field.val != '') && isCookieExist('spz-14007-loaded')) {
    //             clearInterval(sInt);
    //             submitTestDetails('Variant_14007');

    //             // deleteCookie('spz-14007-loaded');
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
        if (window.location.pathname.indexOf("/product/soc-2") > -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            createTest();
        } else {
            removeTest();
        }
        // if (window.location.pathname.indexOf("/demo") > -1) {
        //     // ADDED ONLY FOR DEMO PAGE TO ADD Variant_14007 IN HIDDEN FIELD
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

    function heroContent() {
        // let appendHero = setInterval(() => {
        if (document.querySelector('body main')) {
            if (document.querySelectorAll('body .hero-section-14007').length == 0) {
                // clearInterval(appendHero);

                document.querySelector('body main').insertAdjacentHTML("beforebegin", `<section class="hero-section-14007">
                    <div class="hero-content dis-flex flex-wrap justify-content-between">
                    <div class="hero-left-section">
                    <h1 class="hc-title">Accelerate <span class="hc-blue"><i class="dynamic-product-name">SOC 2</i> Compliance</span>. Reduce Time and Cost by 50%.</h1>
                    <div class="star-rating dis-flex align-items-center"><img src="${astUrl}/fl_sanitize/drata/14001/hero_logo-g2.svg" class="g2-img" alt="G2 Logo" title="G2 Logo" draggable="false">
                    <img src="${astUrl}/fl_sanitize/drata/14007/rating-4_9.svg" class="sr-img" alt="Ratings" title="Ratings" draggable="false"><span class="sr-number"><strong>4.9</strong> (700+ reviews)</span></div>
                    <div class="list-grp-wrapper">
                    <ul class="list-group">
                    <li class="list-item"><strong>Evidence Collection.</strong> Create <i class="dynamic-product-name">SOC 2</i> documentation in minutes via integrations with your tech stack.</li>
                    <li class="list-item"><strong>Policy Implementation.</strong> Pre-mapped controls, risk assessments, and security training for SOC 2 Compliance.</li>
                    <li class="list-item"><strong>Compliance Experts.</strong> Never get stuck. Our compliance experts can walk you through the entire process.</li>
                    </ul>
                    </div>
                    <a href="/demo" id="hero-copy-url" class="hero-btn redirect-to-demo"><span>Get Started</span> <img src="${astUrl}/fl_sanitize/drata/6009/arrow_icon.svg" class="button_arrow" alt="CTA Arrow" title="CTA Arrow"></a>
                    </div>
                    <div class="hero-right-section">
                        <picture style="display: none">
                            <source media="(min-width:768px)" srcset="${astUrl}/f_auto/drata/14007/frame_48096469.webp">
                            <source media="(min-width:300px)" srcset="${astUrl}/f_auto/drata/14007/frame_48096469.webp">
                            <img src="${astUrl}/f_auto/drata/14007/frame_48096469.webp" class="hero-img" alt="Accelerate SOC 2 Compliance. Reduce Time and Cost by 50%." title="Accelerate SOC 2 Compliance. Reduce Time and Cost by 50%.">
                        </picture>
                        <video src="//res.cloudinary.com/spiralyze/video/upload/v1714104552/drata/14007/14007_hero.mp4" 
                            poster="${astUrl}/f_auto/drata/14007/hero-video-thumb.jpg"
                            class="hero-video" id="hero-video" muted playsinline></video>
                    </div>
                    </div>
                    <style>
                        body:not(.loaded-test) {
                            .hero-section-14007,
                            .case-studies-section,
                            .spz-benefits,
                            .video-integration-sec,
                            .simple-steps-sec,
                            .cr-section,
                            .auto-footer,
                            .resources-section,
                            .spz-faq-sec,
                            .whats-included-sec {
                            display: none;
                            }
                        }
                    </style>
                    </section>`);

                if (window.location.href.indexOf("soc-2") > -1) {
                    document.querySelectorAll('.dynamic-product-name').forEach(function (v, i) {
                        v.textContent = "SOC 2";
                    });
                }

                setTimeout(() => {
                    if (document.querySelector('#hero-video')) {
                        document.querySelector('#hero-video').play();
                    }
                }, 1000);
            }

            appendCaseStudies();


            // On click of any '.redirect-to-demo' link, trigger click on header button
            window.addEventListener('click', function (e) {
                if (e.target.matches('.redirect-to-demo')) {
                    // document.querySelector('header a[href="/demo"]').click();
                    window.location.href = "/demo";
                }
            });
        }
        // }, 150);

        // setTimeout(() => {
        // clearInterval(appendHero);
        // }, 1000);
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

        // if .case-studies-section + .hero-section-14007 is present  then remove .case-studies-section
        if (document.querySelector('.case-studies-section + .hero-section-14007')) {
            document.querySelector('.case-studies-section').remove();
        }

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

            // For Mobile Starts
            setTimeout(() => {
                if (window.innerWidth < 767) {
                    // Auto scroll to right slowly
                    const stopInt = setInterval(() => {
                        if (!document.querySelector('.cs-overflow').classList.contains('stop-scroll')) {
                            document.querySelector('.cs-overflow').scrollLeft += 1.2;
                        }
                    }, 50);

                    // Stop auto scroll as soon as user interacts with the .case-study-wrapper
                    document.querySelector('.cs-overflow').addEventListener('touchstart', function () {
                        document.querySelector('.cs-overflow').classList.add('stop-scroll');
                        clearInterval(stopInt);
                    });
                }
            }, 1500);
            // For Mobile Ends
        }

        benefitsSection();
    }

    function benefitsSection() {

        // if .ac-header not contains 'Audit Ready' then remove .spz-benefits and re-initiate it
        const bsInt = setInterval(() => {
            if (document.querySelectorAll('.ac-header').length > 0) {
                if (!document.querySelector('.ac-header').textContent.includes('Audit Ready')) {
                    document.querySelector('main .spz-benefits').remove();
                    benefitsSection();
                    clearInterval(bsInt);
                }
            }
        }, 500);


        setTimeout(() => {
            if (document.querySelectorAll('main .spz-benefits').length == 0 &&
                document.querySelectorAll('.loaded-test .MuiBox-root .MuiContainer-root .MuiBox-root h2').length > 0) {
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

                        // Replace "through 180+ integrations" with: "through hundreds of integrations" 
                        if (accordion_title.includes('Get Audit Ready Faster')) {
                            accordion_description = `<p class="MuiTypography-root MuiTypography-body1 mui-1863nse-MuiTypography-root" data-testid="Text-body1">Your fast, frictionless <a class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways mui-10fhhr2-Link-root-MuiTypography-root-MuiLink-root-Link-root" data-testid="Texts-entry-hyperlink" data-csk-entry-id="1ni9MN3huiPyupnPbLCqkr" data-csk-entry-type="blog" data-csk-entry-display-text="Blog" aria-label="SOC 2" href="/blog/beginners-guide-to-soc-2-compliance">SOC 2</a> journey starts with Drata. Built for powerful automation and designed by auditors and security experts for ease of use, Drata accelerates your SOC 2 compliance journey so you can land your next big deal. </p><br><p class="MuiTypography-root MuiTypography-body1 mui-1863nse-MuiTypography-root" data-testid="Text-body1">Our quick-start capabilities get you up and running in minutes, powered by automated evidence collection through <a class="MuiTypography-root MuiTypography-Default MuiLink-root MuiLink-underlineAlways mui-140qcl3-Link-root-MuiTypography-root-MuiLink-root-Link-root" data-testid="Texts-entry-hyperlink" data-csk-entry-id="4YrzV2MtsgjRDLAoPqMoSC" data-csk-entry-type="page" data-csk-entry-display-text="Page" aria-label="hundreds of integrations" href="/platform/integrations">hundreds of integrations</a> with your existing tech stack and 20+ editable, auditor-approved security policies.</p>`;
                        }

                        // If accordion_title matches with "Use Automation to Reduce Compliance Costs" then change it to "Reduce Compliance Costs"
                        if (accordion_title.includes('Use Automation to Reduce Compliance Costs')) {
                            accordion_title = 'Reduce Compliance Costs';
                        }

                        // If accordion_title matches with "Audit Ready" then change it to "Create a Single Source of Audit Documentation"
                        if (accordion_title.includes('Partner With Compliance Experts')) {
                            accordion_title = 'Create a Single Source of Audit Documentation';
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


                // jQuery(document).on('click', '.ac-item', function () {
                //     jQuery('.ac-item').removeClass('open');
                //     jQuery(this).addClass('open');
                //     jQuery('.ac-img').removeClass('open');
                //     var img_div = jQuery(this).attr('image_div');
                //     var div_index = 'ac-img_' + img_div;
                //     jQuery('.ac-img.' + div_index).addClass('open');
                // });

                //convert above in vanilla js
                waitForElm('.ac-item').then(function () {
                    document.querySelectorAll('.ac-item').forEach(function (item) {
                        item.addEventListener('click', function () {
                            document.querySelectorAll('.ac-item').forEach(function (item) {
                                item.classList.remove('open');
                            });
                            this.classList.add('open');
                            document.querySelectorAll('.ac-img').forEach(function (img) {
                                img.classList.remove('open');
                            });
                            var img_div = this.getAttribute('image_div');
                            var div_index = 'ac-img_' + img_div;
                            document.querySelector('.ac-img.' + div_index).classList.add('open');
                        });
                    });
                });



                document.querySelector('body main').insertAdjacentHTML('afterbegin',
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
                            <a href="/demo" class="ac-btn redirect-to-demo">Get Started<img src="${astUrl}/fl_sanitize/drata/14004/Arrow-Icon.svg" alt="Right Arrow" title="Right Arrow"></a>
                        </div>
                    </div>
                </section>`);
            }
        }, 1000);

        setTimeout(() => {
            clearInterval(bsInt);
        }, 5000);
    }

    function whatsIncludedSec() {
        document.body.classList.add("loaded-test");

        setTimeout(() => {
            document.querySelector('[variant="collectionContentGridSectionWrapper"]').classList.add('whats-included-sec');
            document.querySelector('[variant="collectionContentGridSectionWrapper"] [class$=MuiTypography-root-Text-title]').textContent = 'Everything You Need to Get SOC 2 Compliant with Drata';
            if (document.querySelector('.whats-included-sec .blue-cta-btn') == null) {
                document.querySelector('[variant="collectionContentGridSectionWrapper"] [class$=Text-root-Collection-introText]').insertAdjacentHTML('beforeend', `<a href="https://drata.com/platform" class="blue-cta-btn"><span>Explore the Platform</span> <img src="${astUrl}/fl_sanitize/drata/6009/arrow_icon.svg" class="button_arrow" alt="CTA Arrow" title="CTA Arrow"></a>`);
            }

            simpleSteps();
        }, 1000);
    }

    function simpleSteps() {
        if (document.querySelector('.simple-steps-sec') || !document.querySelector('.whats-included-sec')) return;

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
                                            <img src="${astUrl}/f_auto/drata/14007/collect_1.webp"
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
                                            <img src="${astUrl}/f_auto/drata/14007/collect_2.webp"
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
                                            <img src="${astUrl}/f_auto/drata/14007/collect.webp"
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
                                <div class="ssb-subtitle">Continuous tests ensure you&#8217;re in compliance before and after the audit
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
                        <img src="${astUrl}/fl_sanitize/drata/6009/arrow_icon.svg" class="button_arrow" alt="CTA Arrow" title="CTA Arrow">
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
            } else if (document.querySelector('.vi-video')) {
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
                    <img src="${astUrl}/fl_sanitize/drata/6009/arrow_icon.svg" class="button_arrow" alt="CTA Arrow" title="CTA Arrow"></a></div>
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
                        <a href="https://drata.com/grc-central/soc-2" class="ex-more">Explore More 
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
                                <img src="${astUrl}/f_auto/drata/14007/01.webp"
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
                                <img src="${astUrl}/f_auto/drata/14007/02.webp"
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
                                <img src="${astUrl}/f_auto/drata/14007/03.webp"
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
                                <img src="${astUrl}/f_auto/drata/14007/04.webp"
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
                    <a href="https://drata.com/grc-central/soc-2" class="ex-more">Explore More 
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
        waitForElm('body.spz-14007 .spz-faq-sec [class$=CollectionAccordion-root] [class$=CollectionAccordion-itemsContainer] [class$=MuiAccordion-root-CollectionAccordion-accordion] [class$=MuiAccordionSummary-root-CollectionAccordion-accordionSummary] .MuiAccordionSummary-content [class$=CollectionAccordion-title]').then(function () {
            let updateFaq = setInterval(() => {
                document.querySelector('[variant="collectionAccordionSectionWrapper"] [class$="CollectionAccordion-root"] [variant="default"]').innerHTML = `<h6 class="small-title">FAQ</h6><h5 class="large-title">Your SOC 2 Questions Answered</h5><p class="small-description">At Drata, we&#8217;re here to help companies earn and keep the trust of their users, customers, partners, and prospects. We believe the best way to earn trust is by first proving that you deserve it. Here&#8217;s how we walk the walk when it comes to our own security program:</p>`;

                
                const faqContainer = document.querySelector('[class$="CollectionAccordion-itemsContainer"]');
                const faQue = document.querySelectorAll('[class$="CollectionAccordion-title"]');
                const faAns = document.querySelectorAll('[class$="CollectionAccordion-itemDetails"] [class$="Text-root"');
                
                // Update the faq question and answer in the DOM
                faq.forEach((item, index) => {
                    faQue[index + 1].innerHTML = item.que;
                    faAns[index + 1].innerHTML = item.ans;
                });
                
                // Remove last 1 faq items
                if (faQue.length > 5) {
                    faqContainer.removeChild(faqContainer.lastElementChild);
                }
            }, 100);
            setTimeout(() => {
                clearInterval(updateFaq);
                document.querySelector('[class$=CollectionAccordion-root] [class$=CollectionAccordion-itemsContainer] [class$=MuiAccordion-root-CollectionAccordion-accordion] [class$=MuiAccordionSummary-root-CollectionAccordion-accordionSummary]').click();
            }, 1000);
        });
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
                        <div class="slider-img">
                            <img src="${review.avatar}" alt="${review.name}">
                        </div>
                        <div class="slider-content">
                            <div class="text-copy">
                                <h3 class="card-title">${review.title}</h3>
                                <p class="card-desc">“${review.review}”</p>
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
                                    ` + ((!review.link) ? '' : `
                                    <a href="${review.link}" class="learn-more" data-review="${review.review}">Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" class="button_arrow" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                            <path d="M5.96591 12.1364L4.64773 10.8295L8.10795 7.36932H0V5.44886H8.10795L4.64773 1.99432L5.96591 0.681818L11.6932 6.40909L5.96591 12.1364Z" fill="#0580E8" />
                                        </svg>
                                    </a>
                                    `) + `
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
        return reviewsHTML;
    }

})();
