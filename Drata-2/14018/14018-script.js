(function () {
    const astUrl = '//res.cloudinary.com/spiralyze/image/upload/';
    const ctaArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
                        <path d="M1 1L5 5L1 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>`;

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

    //append swiper js script in head and onload of that call function initSlider_14018
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
        initSlider_14018_V1();
    });


    function createTest() {
        waitForElm('header + div[data-csk-entry-type="hero"] > .MuiContainer-root > div[class*="HeroSubpage-content"]').then(function () {
            document.querySelector("body").classList.add("spz-14018");

            let updatePage = setInterval(() => {
                waitForElm('[variant="collectionContentGridSectionWrapper"]').then(function () {
                    //check which variant is stored in session storage 
                    if (sessionStorage.getItem('variant') === 'variant_1') {
                        variant_1();
                        waitForElm('.choose-variant-modal').then(function () {
                            document.querySelector('.choose-variant-modal').classList.add('spz-hidden');
                        });
                    } else if (sessionStorage.getItem('variant') === 'variant_2') {
                        variant_2();
                        waitForElm('.choose-variant-modal').then(function () {
                            document.querySelector('.choose-variant-modal').classList.add('spz-hidden');
                        });
                    }
                    else {
                        variant_1();
                        landingModal();
                    }

                });
            }, 10);

            setTimeout(() => {
                clearInterval(updatePage);
            }, 1000);
            submitTestDetails('Variant_14018');
        });

        createCookie('spz-14018-loaded', 'true', 1);
    }

    function landingModal() {
        if (document.querySelector('.choose-variant-modal')) return;
        document.querySelector('body').insertAdjacentHTML('beforeend', `<div class="choose-variant-modal">
            <div class="modal-container">
                <div class="modal-content">
                    <div class="close-modal variant_1"></div>
                    <div class="modal-header">
                        <p class="modal-subtitle">Help Us Personalize Your Experience</p>
                        <h4 class="modal-title">How do you want <br>to use Drata?</h4>
                    </div>
                    <div class="modal-variants">
                        <button class="variant-btn variant_1">Get SOC2 Compliant ${ctaArrow}</button>
                        <button class="variant-btn variant_2">Maintain SOC2 Compliance ${ctaArrow}</button>
                    </div>
                </div>
            </div>
        </div>`);
    }

    function variant_1() {
        heroSection_V1('body main');
        navBar_V1('.hero-section-14018');
        caseStudies_V1('.navbar-section');
        madeEasy_V1('.case-studies-section');
        simpleSteps_V1('.made-easy-sec');
        complianceBenefits_V1('.simple-steps-sec-14018');
        complianceChanges_V1('.benefits-sec');
        meetDrata_V1('.compliance-sec');
        customerReviews_V1('.meet-drata');
        globalCTA_V1('.cr-section-14018');
        resourceSection_V1('.demo-cta-section');
        complianceFAQ_V1('.resources-section-14018');
    }

    function heroSection_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelectorAll('body .hero-section-14018').length == 0) {
                document.querySelector(selector).insertAdjacentHTML("afterend", `<section class="hero-section-14018">
                    <div class="hero-content dis-flex flex-wrap justify-content-between">
                    <div class="hero-left-section">
                    <h1 class="hc-title">New to <span class="hc-blue">SOC 2?</span> <br>We Got You.</h1>
                    <div class="star-rating dis-flex align-items-center"><img src="${astUrl}/fl_sanitize/drata/14001/hero_logo-g2.svg" class="g2-img" alt="G2 Logo" title="G2 Logo" draggable="false">
                    <img src="${astUrl}/fl_sanitize/drata/14007/rating-4_9.svg" class="sr-img" alt="Ratings" title="Ratings" draggable="false"><span class="sr-number"><strong>4.9</strong> (600+ reviews)</span></div>
                    <div class="list-grp-wrapper">
                    <ul class="list-group">
                    <li class="list-item"><strong>Automate (Most of) the Work.</strong> Reduce audit prep by 80% with software that creates SOC 2 documentation in minutes.</li>
                    <li class="list-item"><strong>Ace the Audit.</strong> Track and meet all SOC 2 requirements with full visibility, ensuring a confident, surprise-free audit.</li>
                    <li class="list-item"><strong>Learn the Process.</strong> Receive expert guidance and support throughout your compliance journey, both now and as you scale.</li>
                    </ul>
                    </div>
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
                    </section>`);
            }
        });

        setTimeout(() => {
            if (document.querySelector('#hero-video')) {
                document.querySelector('#hero-video').play();
            }
        }, 1000);
    }

    function navBar_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelector('.navbar-section')) return;
            document.querySelector(selector).insertAdjacentHTML('afterend', ` <nav class="navbar-section spz-sec">
            <div class="nav-container dis-flex justify-content-between align-items-center">
                <div class="nav-logo no-mob">
                    <img src="${astUrl}/fl_sanitize/drata/28001/logo.svg" alt="Drata Logo" title="Drata Logo">
                </div>
                <div class="nav-links">
                    <a class="nav-anchor" href="#nav-compliance">Overview & Process</a>
                    <a class="nav-anchor" href="#why-drata">Business Impact</a>
                    <a class="nav-anchor" href="#frameworks">Why Drata</a>
                    <a class="nav-anchor" href="#nav-resource">Resources</a>
                </div>
            </div>
        </nav>`);
        });

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
    }

    function checkActiveNav_V1() {
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

        if (document.querySelector('header ~ .hero-section-14018')) {
            const hero = document.querySelector('header ~ .hero-section-14018');
            const rect = hero.getBoundingClientRect();
            if (hero && rect.top <= -200) {
                document.querySelector('header').classList.add('hide-header');
            } else {
                document.querySelector('header').classList.remove('hide-header');
            }
        }

    }

    function caseStudies_V1(selector) {
        const aUrl = astUrl + '/fl_sanitize/drata/14018/';
        const caseStudies = [
            {
                title: 'Lemonade',
                logo: aUrl + 'lemonade.svg',
                number: '200',
                text: 'hours saved',
                arrow: 'down'
            },
            {
                title: 'Measurabl',
                logo: aUrl + 'measurabl.svg',
                number: '80%',
                text: 'workload automated',
                arrow: 'up'
            },
            {
                title: 'Lucid Works',
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
            }
        ];

        waitForElm(selector).then(function () {
            if (document.querySelectorAll('.case-studies-section').length === 0) {
                document.querySelector(selector).insertAdjacentHTML('afterend', `
            <section class="case-studies-section spz-sec">
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
        });
    }

    function madeEasy_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelectorAll('.made-easy-sec').length === 0) {
                document.querySelector(selector).insertAdjacentHTML('afterend', ` <section class="made-easy-sec spz-sec">
            <div class="made-easy-container">
                  <div class="me-top-bar dis-flex">
                        <div class="me-left">
                            <h2 class="me-title">SOC 2 Made Easy</h2>
                            <div class="me-subtitle">So, you need to get SOC 2 compliant—but how? Compliance Automation.</div>
                        </div>
                        <div class="me-right">
                            <a href="#" class="me-cta blue-btn">Download the Guide ${ctaArrow}</a>
                        </div>
                    </div>
                    <div class="me-contents">
                        <div class="me-left-card">
                            <div class="me-card">
                                <div class="me-title">What is Compliance Automation?</div>
                                <div class="me-desc">Compliance automation simplifies the process of preparing for audits. It uses software to handle repetitive tasks, gather necessary documents, track your progress, and organize and share information with auditors.</div>
                            </div>
                        </div>
                        <div class="me-right-card">
                            <div class="me-card">
                                <div class="me-title">Why Compliance Automation?</div>
                                <div class="me-desc">Traditional compliance methods are slow and error-prone, often requiring hundreds of hours to map controls and compile evidence using screenshots and spreadsheets. Drata eliminates these manual tasks, saving time and reducing errors.</div>
                            </div>
                        </div>
                    </div>
                    <div class="me-bottom-svg">
                        <img src="${astUrl}fl_sanitize/drata/14018/arrow_2.svg" alt="Arrow">
                    </div>
                </div>
            </section>`);
            }
        });
    }

    function simpleSteps_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelectorAll('.simple-steps-sec-14018').length === 0) {
                document.querySelector(selector).insertAdjacentHTML('afterend', `
            <section class="simple-steps-sec-14018 spz-sec">
                <div class="simple-steps-container">
                    <div class="ss-top-bar dis-flex">
                        <div class="ss-left">
                            <div class="ss-subtitle">Here&#8217;s How Drata Works</div>
                            <h2 class="ss-title">Get Compliant in 4 Simple Steps</h2>
                        </div>
                        <div class="ss-right">
                            <div class="ss-text">Drata is the leading Compliance Automation Platform that’s helped 5,000+ businesses do the following:</div>
                        </div>
                    </div>
                    <div class="ssc-contents">
                        <div class="ss-steps-count">
                            <div class="ss-step step-1">1</div>
                            <div class="ss-step step-2">2</div>
                            <div class="ss-step step-3">3</div>
                            <div class="ss-step step-4">4</div>
                        </div>
                        <div class="simple-steps-wrapper">
                            <div class="simple-steps">
                                <div class="ss-item step-1">
                                    <div class="ss-step step-1">1</div>
                                    <div class="ss-content">
                                        <div class="ss-img-wr">
                                            <video loop muted playsinline width="100%" poster="${astUrl}/f_auto/drata/28002/thumbnail_2.webp">
                                                <source src="//res.cloudinary.com/spiralyze/video/upload/f_auto/drata/28002/Drata_1.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div class="ss-title">Identify Needs</div>
                                        <div class="ss-desc">Assess regulatory needs, the markets you serve, and your business goals. Then, select an appropriate framework.</div>
                                    </div>
                                </div>
                                <div class="ss-item step-2">
                                    <div class="ss-step step-2">2</div>
                                    <div class="ss-content">
                                        <div class="ss-img-wr">
                                            <video loop muted playsinline width="100%" poster="${astUrl}/f_auto/drata/28002/thumbnail_3.webp">
                                                <source src="//res.cloudinary.com/spiralyze/video/upload/f_auto/drata/28002/Drata_2.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div class="ss-title">Implement Controls</div>
                                        <div class="ss-desc">Map the controls (policies, procedures, training) for your chosen framework, then collect evidence of their effectiveness.</div>
                                    </div>
                                </div>
                                <div class="ss-item step-3">
                                    <div class="ss-step step-3">3</div>
                                    <div class="ss-content">
                                        <div class="ss-img-wr">
                                           <video loop muted playsinline width="100%" poster="${astUrl}/f_auto/drata/28002/thumbnail_5.webp">
                                                <source src="//res.cloudinary.com/spiralyze/video/upload/f_auto/drata/28002/Drata_3.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div class="ss-title">Ace the Audit</div>
                                        <div class="ss-desc">Engage with a third-party auditor to formally review if your controls are effective and meet requirements, receiving a report if successful.</div>
                                    </div>
                                </div>
                                <div class="ss-item step-4">
                                    <div class="ss-step step-4">4</div>
                                    <div class="ss-content">
                                        <div class="ss-img-wr">
                                           <video loop muted playsinline width="100%" poster="${astUrl}/f_auto/drata/28002/thumbnail_5.webp">
                                                <source src="//res.cloudinary.com/spiralyze/video/upload/f_auto/drata/28002/Drata_3.mp4" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video>
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
            }
        });

        // On hover of any .ss-item, add specific step class name to .simple-steps-container
        if (window.innerWidth > 1024) {
            document.querySelectorAll('.simple-steps .ss-item').forEach(function (item) {
                item.addEventListener('mouseover', function () {
                    document.querySelector('.simple-steps-container').classList.remove('step-1', 'step-2', 'step-3');
                    document.querySelector('.simple-steps-container').classList.add('step-' + this.querySelector('.ss-step').textContent);
                    item.querySelector('video').play();
                });

                // On mouseout, remove all step classes
                item.addEventListener('mouseout', function () {
                    document.querySelector('.simple-steps-container').classList.remove('step-1', 'step-2', 'step-3');
                    item.querySelector('video').pause();
                    item.querySelector('video').load();
                });
            });
        }
        else {
            document.querySelectorAll('.simple-steps .ss-item').forEach(function (item) {
                item.querySelector('video').setAttribute('autoplay', '1');
                item.querySelector('video').play();
            });
        }
    }

    function complianceBenefits_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelectorAll('.benefits-sec').length === 0) {
                document.querySelector(selector).insertAdjacentHTML('afterend', `
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
            }
        });
    }

    function complianceChanges_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelectorAll('.compliance-sec').length === 0) {
                document.querySelector(selector).insertAdjacentHTML('afterend', `<section class="compliance-sec spz-sec">
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
                                    <div class="accordion-content">Cut the compliance guesswork. Drata provides you with auditor-approved framework templates, complete with all the necessary policies, procedures, and controls to start and simplify your compliance journey. And with Drata&#8217;s <a href="https://drata.com/product/trust-center">Trust Center</a>, you can immediately demonstrate your compliance progress to customers, accelerating trust and boosting sales—even before an audit.</div>
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
                            <picture>
                                <source media="(min-width: 1024px)" srcset="${astUrl}/f_auto/drata/28001/section_image_-_desktop_2.webp" type="image/webp">
                                <source media="(min-width: 768px)" srcset="${astUrl}/f_auto/drata/28001/section_image_-_tablet_1.webp" type="image/webp">
                                <img src="${astUrl}/f_auto/drata/28001/section_image_-_mobile_1.webp" alt="Drata Compliance Automation" title="Drata Compliance Automation">
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>`);
            }
        });

        //write code for accordion functionality
        waitForElm('.accordion_1').then(function () {
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

                    // updateImgHeight_V1();
                });
            });
        });
    }

    function updateImgHeight_V1() {
        //calculate height of .accordion-wrapper and set it to .accordion
        const accordionWrapper = document.querySelector('.accordion-wrapper');
        const accordionImg = document.querySelector('.c-right .c-img img');
        const accordionHeight = accordionWrapper.offsetHeight + 2;
        accordionImg.style.height = accordionHeight + 'px';
    }

    function meetDrata_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelector('.meet-drata')) return;
            document.querySelector(selector).insertAdjacentHTML('afterend', `
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
                                    <video id="gify-video" autoplay loop muted playsinline poster="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/28001/src/assets/Video-poster.png">
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
        });
    }

    function customerReviews_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelector('.cr-section-14018')) return;
            document.querySelector(selector).insertAdjacentHTML('afterend', `
            <section class="cr-section-14018 spz-sec" id="frameworks">
                <div class="cr-title-container">
                    <div class="title-wrapper">
                        <p class="small-eyebrow">Pre-Built Templates</p>
                        <h3 class="large-title">20+ Frameworks. <br class="tab-mob">None of the Grunt Work.</h3>
                    </div>
                </div>
                <div class="cr-section-container">
                    <div class="slider-section">
                        <div class="container slider-column">
                            <div class="swiper swiper-slider_14018">
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
        }
        );

        // If swiper is initialized, run initSlider_14018 function
        if (typeof Swiper !== 'undefined') {
            initSlider_14018_V1();
        }
    }

    function globalCTA_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelector('.demo-cta-section')) return;
            document.querySelector(selector).insertAdjacentHTML('afterend', `<section class="demo-cta-section spz-sec">
            <div class="demo-cta-container">
                <div class="cta-desc">Start Your Compliance Journey Today</div>
                <div class="cta-wrapper">
                    <a href="javascript:void()" class="demo-btn cta-btn blue-btn">Get Demo</a>
                </div>
            </div>
        </section>`);
        });
    }

    function resourceSection_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelector('.resources-section-14018')) return;
            document.querySelector(selector).insertAdjacentHTML('afterend', `
        <section class="resources-section-14018  spz-sec" id="nav-resource">
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
                        <a class="rc-link" href="https://drata.com/grc-central/soc-2/audit">
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
        });
    }

    function complianceFAQ_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelector('.compliance-faq-section')) return;
            document.querySelector(selector).insertAdjacentHTML('afterend', `
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
        });

        //write code for accordion functionality
        waitForElm('.accordion_2').then(function () {
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
        });

        waitForElm('.accordion_3').then(function () {
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
        });
    };

    // Initialize slider
    function initSlider_14018_V1() {
        let cardName = document.querySelectorAll('.swiper-slider_14018 .swiper-slide .card-name');
        const swiper = new Swiper(".swiper-slider_14018", {
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

        waitForElm('body.spz-14018 .cr-section-14018 .cr-section-container .slider-section .container .swiper-pagination').then(function () {
            if (document.querySelector('body.spz-14018 .cr-section-14018 .cr-section-container .slider-section .container .swiper-pagination .spz-anchor')) return;
            document.querySelector('body.spz-14018 .cr-section-14018 .cr-section-container .slider-section .container .swiper-pagination').insertAdjacentHTML('beforeend', `<a class="spz-anchor" href="https://drata.com/product">All</a>`);
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

    //when scroll, check which section is in view and add active class to respective nav-anchor
    window.addEventListener('scroll', function () {
        checkActiveNav_V1();
    });

    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('demo-btn')) {
            this.document.querySelector('a[href="/demo"]').click();
        }

        if (e.target.classList.contains('variant_1')) {
            this.document.querySelector('.choose-variant-modal').classList.add('spz-hidden');

            //store this selection for the whole session
            sessionStorage.setItem('variant', 'variant_1');
            if (document.querySelector('.md-video-wr video#gify-video')) {
                document.querySelector('.md-video-wr video#gify-video').play();
            }
        }

        if (e.target.classList.contains('variant_2')) {
            this.document.querySelector('.choose-variant-modal').classList.add('spz-hidden');

            //store this selection for the whole session
            sessionStorage.setItem('variant', 'variant_2');
            if (document.querySelector('.md-video-wr video#gify-video')) {
                document.querySelector('.md-video-wr video#gify-video').play();
            }
        }
    });

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
        if (window.location.pathname.indexOf("product/soc-2") > -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            createTest();
        } else {
            removeTest();
        }
        if (window.location.pathname.indexOf("/demo") > -1) {
            waitForElm('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video').then(function () {
                if (document.querySelector('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video')) {
                    document.querySelector('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video').setAttribute('playsinline', '');
                }
            });
            demoChecked();
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

    function removeTest() {
        document.body.classList.remove("spz-14018");
        let removePage = setInterval(() => {
            if (document.querySelector('.spz-sec')) {
                document.querySelectorAll('.spz-sec').forEach(function (sec) {
                    sec.remove();
                });
            }
        }, 10);

        setTimeout(() => {
            clearInterval(removePage);
        }, 1100);
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

            // Check if spz-14018-loaded cookie is present and cro_field is present
            if ((cro_field && cro_field.val != '') && isCookieExist('spz-14018-loaded')) {
                clearInterval(sInt);
                submitTestDetails('Variant_14018');

                deleteCookie('spz-14018-loaded');
            }
        }, 1000);

        setTimeout(() => {
            clearInterval(sInt);
        }, 10000);
    }

    //append the images in head tag
    document.head.insertAdjacentHTML('beforeend', `<link rel="preload" as="image" href="${astUrl}v1729060487/drata/14018/close-hover.svg">`);
})();