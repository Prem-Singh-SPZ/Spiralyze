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
            review: "I’ve spent well over 200 hours before using Drata just in preparing for and dealing with our SOC 2 audit. Drata has been great for automating evidence collection. I find it really flexible, and I’m able to make my own control framework.",
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
        que: "We’re not planning on getting SOC 2 yet. Why should I use Drata?",
        ans: `<p class='MuiTypography-root MuiTypography-body1 mui-198vr4a-MuiTypography-root'>Your security posture matters. SOC 2 is just one way to prove the effectiveness of your security program, but having a real-time view of your security controls is invaluable for any business.</p> <p class='MuiTypography-root MuiTypography-body1 mui-198vr4a-MuiTypography-root'>Drata is the most advanced continuous monitoring platform on the market to assess your security posture in real-time, every day. You can score your SOC 2 readiness here. Check out <a class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways mui-k61s3s-MuiTypography-root-MuiLink-root-Link-root" href="https://www.forbes.com/sites/troymarkowitz/2021/01/15/why-saas-start-ups-should-prioritize-soc-2-compliance/" target="_blank" rel="noopener noreferrer" data-testid="Text-hyperlink">this Forbes piece</a> written by our Co-Founder Troy Markowitz that discusses this further.</p>`
    },
    {
        que: "If I use Drata, will my auditor have access to all my data and results of control testing?",
        ans: "<p class='MuiTypography-root MuiTypography-body1 mui-198vr4a-MuiTypography-root'>Drata only gives auditors access to what they need in order to streamline the audit engagement. In the Auditor View, you control the level of access your auditor receives. You also dictate the time period that access covers, and the framework so auditors are only seeing evidence and test results of your controls during that specific time window.<p class='MuiTypography-root MuiTypography-body1 mui-198vr4a-MuiTypography-root'>"
    }, {
        que: "Why is the Auditor View important?",
        ans: "<p class='MuiTypography-root MuiTypography-body1 mui-198vr4a-MuiTypography-root'>Drata was built alongside auditors to ensure you and the auditor have the best user experience. Today, most platforms enable an export of reports or access to the entire set of controls and data you have visibility into. While not every control is applicable to your environment, auditors can’t unsee the evidence you’ve collected, which is why it’s important to only display pertinent information in the Auditor-Only View.</p>"
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

        waitForElm('header + div[data-csk-entry-type="hero"] > .MuiContainer-root > div[class*="HeroSubpage-content"]').then(function () {
            document.querySelector("body").classList.add("spz-28001");

            waitForElm('[variant="collectionContentGridSectionWrapper"]').then(function () {
                heroChanges();
                spzNavBar();
            });

            submitTestDetails('Variant_28001');
        });

        createCookie('spz-28001-loaded', 'true', 1);
    }

    function removeTest() {
        document.body.classList.remove("loaded-test");
        document.body.classList.remove("spz-28001");
        if (document.querySelector('.simple-steps-sec')) {
            document.querySelector('.simple-steps-sec').remove();
        }
        if (document.querySelector('.cr-section')) {
            document.querySelector('.cr-section').remove();
        }
        if (document.querySelector('.resources-section')) {
            document.querySelector('.resources-section').remove();
        }

        // Remove scroll event listener
        window.removeEventListener('scroll', function () { });
    }

    //Passing test details to hidden fields
    function submitTestDetails(cro_test) {
        if (document.querySelector('form.hs-form-private .hs_cro_test_3 .input .hs-input')) {
            document.querySelector('form.hs-form-private .hs_cro_test_3 .input .hs-input').setAttribute('value', cro_test);
        }
    }

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

    function heroChanges() {
        document.querySelector('div[data-csk-entry-type="hero"] > .MuiContainer-root > div[class*="HeroSubpage-content"] h1[class*="MuiTypography-root-HeroSubpage-title"]').textContent = "Simple Startup Compliance";
        document.querySelector('div[data-csk-entry-type="hero"] > .MuiContainer-root > div[class*="HeroSubpage-content"] div[class*="Text-root-HeroSubpage-body"] > [data-testid="Text-root"] > [data-testid="Text-body1"]').innerHTML = "Investors and customers demanding compliance? We got you. <br>Quickly get compliant with SOC 2, ISO 27001, and other frameworks with automated audit prep, ready-to-use templates, and expert support.";
        document.querySelector('div[data-csk-entry-type="hero"] > .MuiContainer-root > div[class*="HeroSubpage-content"] div[class*="Text-root-HeroSubpage-body"]').insertAdjacentHTML('afterend', `<div class="hero-cta-container"><a href="https://drata.com/resources/soc-2-guide" class="hero-blue-cta"><span>Download SOC 2 Guide</span></a></div>`)
        document.querySelector('div[data-csk-entry-type="hero"] > .MuiContainer-root > div[class*="HeroSubpage-content"] .hero-cta-container').insertAdjacentElement('afterbegin', document.querySelector(`div[data-csk-entry-type="hero"] > .MuiContainer-root > div[class*="HeroSubpage-content"] a[class*="MuiLink-root-Link-root-HeroSubpage-link"]`));
    }

    function spzNavBar() {
        if (document.querySelector('.spz-navbar')) return;

        document.querySelector('main[data-csk-entry-field="contents"]').insertAdjacentHTML('afterbegin', ` <nav class="spz-navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <img src="${astUrl}/fl_sanitize/drata/14007/logo.svg" alt="Drata Logo" title="Drata Logo">
                </div>
                <div class="nav-links">
                    <a class="nav-anchor active" href="#">Learn About Compliance</a>
                    <a class="nav-anchor" href="#about">Why Drata?</a>
                    <a class="nav-anchor" href="#project">Learn About Frameworks</a>
                    <a class="nav-anchor" href="#contact">Guides & Resources</a>
                </div>
            </div>
        </nav>`);

        benefits();
    }

    //add Compliance Benefits section after navbar
    function benefits() {
        if (document.querySelector('.benefits-sec')) return;

        document.querySelector('.spz-navbar').insertAdjacentHTML('afterend', `
            <section class="benefits-sec">
                <div class="benefits-container">
                    <div class="bs-title">
                            <div class="bs-eyebrow">Compliance Benefits</div>
                            <h2 class="bs-title">Why Comply? Security Secures Your Future.</h2>
                            <div class="bs-desc">Discover how compliance accelerates revenue, enhances security, and turns trust into a competitive advantage.</div>
                    </div>
                    <div class="bs-cards-container">
                        <div class="bs-card">
                            <div class="bs-card-img"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/drata/28001/icon_1.svg" alt="Unblock Sales"></div>
                            <div class="bs-card-title">Unblock Sales</div>
                            <div class="bs-card-desc">No one wants to work with a security risk. Get compliant to earn trust and expedite the sales process.</div>
                        </div>
                         <div class="bs-card">
                            <div class="bs-card-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1721176526/drata/28001/icon_2.svg" alt="Secure Funding"></div>
                            <div class="bs-card-title">Secure Funding</div>
                            <div class="bs-card-desc">Investors don’t like risk. Prove you take security seriously to improve your chances of raising funds.</div>
                        </div>
                         <div class="bs-card">
                            <div class="bs-card-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1721176526/drata/28001/icon_3.svg" alt="Unlock Expansion"></div>
                            <div class="bs-card-title">Unlock Expansion</div>
                            <div class="bs-card-desc">Meet enterprise and regulatory requirements to expand into larger deals and new markets.</div>
                        </div>
                         <div class="bs-card">
                            <div class="bs-card-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1721176526/drata/28001/icon_4.svg" alt="Reduce Risk"></div>
                            <div class="bs-card-title">Reduce Risk</div>
                            <div class="bs-card-desc">Startups can't afford risks. Achieve compliance to avoid costly penalties and fines.</div>
                        </div>
                    </div>
                </div>
            </section>`);

        simpleSteps();
    }

    function simpleSteps() {
        if (document.querySelector('.simple-steps-sec')) return;

        document.querySelector('.benefits-sec').insertAdjacentHTML('afterend', `
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
                                <div class="ssb-subtitle">Continuous tests ensure you’re in compliance before and after the audit
                                    for year-round peace of mind.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`);

        customerReviews();
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

    function customerReviews() {
        document.querySelector('.simple-steps-sec').insertAdjacentHTML('afterend', `
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

        resourceSection();
    }

    function resourceSection() {
        document.querySelector('.cr-section').insertAdjacentHTML('afterend', `
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
