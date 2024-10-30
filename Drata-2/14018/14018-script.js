(function () {
    const astUrl = '//res.cloudinary.com/spiralyze/image/upload/';
    const ctaArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
                        <path d="M1 1L5 5L1 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>`;
    const anchorArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M7.96591 14.0795L6.64773 12.7727L10.108 9.3125H2V7.39205H10.108L6.64773 3.9375L7.96591 2.625L13.6932 8.35227L7.96591 14.0795Z" fill="#0068C9"/>
                    </svg>`;

    // Convert customer reviews section to dynamic JSON data
    const custReviews = [
        {
            name: "David Caughill,",
            companyLogo: astUrl + "f_auto/drata/14018/frame_1000003436.webp",
            logoAlt: "Red Rover",
            title: "DevOps Engineer",
            review: "“The quality and philosophy of support at Drata are unparalleled. Drata is superb in usability, design and integrations.”",
            link: "https://drata.com/customers"
        },
        {
            name: "Joshua Peskay,",
            companyLogo: astUrl + "f_auto/drata/14018/frame_1000003437.webp",
            logoAlt: "Round Table Technology",
            title: "vCIO",
            review: "“Drata also worked to understand our audit needs and matched us with an auditor who has been terrific. Drata is a luxury limousine for your compliance journey.”",
            link: "https://drata.com/customers"
        },
        {
            name: "Lola Kureno,",
            companyLogo: astUrl + "fl_sanitize/drata/14018/frame_1000003433.svg",
            logoAlt: "Xine",
            title: "Cyber Security Engineer",
            review: "“Having centralized and detailed visibility of all our personnel, assets, and being able to see what compliance requirements need our attention has streamlined the entire process.”",
            link: "https://drata.com/customers"
        },
        {
            name: "Jonathan Jaffe,",
            companyLogo: astUrl + "fl_sanitize/drata/14018/frame_1000003434.svg",
            logoAlt: "Lemonade",
            title: "CISO",
            review: "“The promise of automation has long been discussed in the compliance world, but never truly realized. Drata has turned that into reality.”",
            link: "https://drata.com/customers/lemonade"
        },
        {
            name: "Chris Bake,",
            companyLogo: astUrl + "fl_sanitize/drata/14018/frame_1000003435.svg",
            logoAlt: "Next Ed",
            title: "CTO",
            review: "“The time savings and impact on sales are immediate, especially as we inform our customers that we&#8217;re pursuing SOC 2 compliance!”",
            link: "https://drata.com/customers/apl-nexted"
        },
    ];

    const featureCap = [
        one = [
            {
                title: "Risk Assessments",
                review: "Identify, assess, and monitor risks specific to your organization, systems, and frameworks.",
            },
            {
                title: "Quick Start Onboarding ",
                review: "Access 24/5 technical support and an ecosystem of partners that can expedite your onboarding.",
            },
            {
                title: "User Access Review",
                review: "Conduct user access reviews directly in Drata to increase security and save time.",
            },
            {
                title: "Pre-Mapped Controls",
                review: "Our pre-built SOC 2 framework comes with all the controls required for compliance. ",
            },
            {
                title: "Security Training",
                review: "Drata&#8217;s built-in security training allows you to automate tasks like sending reminders and documenting completion.",
            },
            {
                title: "Audit Support",
                review: "Get real-time assistance from a team of experts or dive into extensive help articles.",
            },
            {
                title: "Policy Center",
                review: "Streamline policy management for SOC 2 with 20+ customizable, auditor-approved policies.",
            },
            {
                title: "Continuous Monitoring",
                review: "Get non-stop peace of mind with daily tests that show your audit readiness. ",
            }
        ],
        two = [
            {
                title: "Policy Center",
                review: "Streamline the creation, signing, and management of the policies needed for SOC 2 with customizable and auditor-approved templates.",
            },
            {
                title: "Audit Hub",
                review: "Streamline audits with one place for auditor comms, docs, and evidence requests.",
            },
            {
                title: "Risk Management",
                review: "With features like flagging and risk scoring, you can efficiently accept, mitigate, or avoid risks.",
            },
            {
                title: "Continuous Monitoring",
                review: "Drata's 24/7 continuous control monitoring ensures you stay SOC 2 compliant and gives you full visibility into your status.",
            },
            {
                title: "Compliance Support",
                review: "Get real-time assistance from a team of experts or dive into extensive help articles.",
            },
            {
                title: "Role Based Access",
                review: "Get complete control over access, visibility, and permissions in Drata.",
            },
            {
                title: "Compliance as Code",
                review: "Automatically identify and fix compliance and policy gaps as your developers build, for continuous compliance.",
            },
            {
                title: "End-Point Monitoring",
                review: "Automate evidence collection for endpoint detection and response compliance.",
            }
        ],
    ];

    //json for resource section where one tab has 4 cards under it and each card has different attqributes
    const resourceData = [
        {
            title: "SOC 2 Education",
            cards: [
                {
                    title: "SOC 2 Beginners Guide",
                    desc: "Download a complete guide to achieving SOC 2 compliance, ensuring comprehensive security standards for your organization.",
                    img: astUrl + "f_auto/drata/14018/8.webp",
                    link: "https://drata.com/grc-central/soc-2"
                },
                {
                    title: "8 Easy Steps to Get Started with ISO 27001",
                    desc: "Explore a comprehensive checklist to achieve ISO 27001 compliance and ensure robust security standards for your business.",
                    img: astUrl + "f_auto/drata/14018/5.webp",
                    link: "https://drata.com/grc-central/soc-2/readiness-assessment"
                },
                {
                    title: "Learn About the Cost of Non-Compliance",
                    desc: "Explore the hidden costs of non-compliance with data regulations and its impact on business efficiency.",
                    img: astUrl + "f_auto/drata/14018/6.webp",
                    link: "https://drata.com/grc-central/soc-2"
                },
                {
                    title: "SOC 2 Audits: What You Can Expect from Start to Finish",
                    desc: "Learn the essentials of SOC 2 audits and their significance in ensuring trust and security for your business.",
                    img: astUrl + "f_auto/drata/14018/7.webp",
                    link: "https://drata.com/grc-central/soc-2/how-to-avoid-audit-exceptions"
                }
            ]
        },
        {
            title: "Startup Topics",
            cards: [
                {
                    title: "SANS Audit Hub First Look with Howard Carter",
                    desc: "See How Drata&#8217;s Audit Hub Consolidates Communication for Faster, Cleaner Audits",
                    img: astUrl + "f_auto/drata/14018/9.webp",
                    link: "https://drata.com/platform/startup"
                },
                {
                    title: "3 Reasons Why Startups Need SOC 2",
                    desc: "SOC 2 compliance acts as a critical building block to a strong security posture and can positively shape a startup&#8217;s long-term trajectory.",
                    img: astUrl + "f_auto/drata/14018/10.webp",
                    link: "https://drata.com/grc-central/soc-2/reasons-startups-need-soc-2"
                },
                {
                    title: "14 Free Cybersecurity Tools for Startups",
                    desc: "Our team put together a roundup of free cybersecurity tools that are great for startups as they jumpstart their security programs.",
                    img: astUrl + "f_auto/drata/14018/11.webp",
                    link: "https://drata.com/blog/free-cybersecurity-tools"
                },
                {
                    title: "Debunking 5 Common SOC 2 Misconceptions",
                    desc: "Discover how Taylor Herson, CEO of Eden Data, tackles SOC 2 misconceptions to help high-growth organizations better navigate their compliance journeys.",
                    img: astUrl + "f_auto/drata/14018/12.webp",
                    link: "https://drata.com/blog/debunking-5-common-soc-2-misconceptions"
                }
            ]
        },
        {
            title: "Automation ROI",
            cards: [
                {
                    title: "Gather Voices",
                    desc: "Gather Voices helps our customers to collect video content from their community and automatically share that out to social media.",
                    img: astUrl + "f_auto/drata/14018/13.webp",
                    link: "https://drata.com/customers/gather-voices"
                },
                {
                    title: "SOC 2 Compliance Automation Software: Everything You Need to Know",
                    desc: "breakdown of SOC 2 compliance software, its benefits, top features to look for, and what your journey to compliance can look like with automation.",
                    img: astUrl + "f_auto/drata/14018/14.webp",
                    link: "https://drata.com/resources/webinars/accelerate-revenue-with-soc-2"
                },
                {
                    title: "Vareto",
                    desc: "Maximizing ROI With Compliance: How Vareto Slashes Time and Streamlines Operations With Trust Center",
                    img: astUrl + "f_auto/drata/14018/15.webp",
                    link: "https://drata.com/customers/vareto"
                },
                {
                    title: "Calculating and Communicating Cybersecurity ROI",
                    desc: "Security improvements get approved faster when CISOs speak the board&#8217;s language. Here&#8217;s everything you need to know about cybersecurity ROI.",
                    img: astUrl + "f_auto/drata/14018/16.webp",
                    link: "https://drata.com/blog/cybersecurity-roi"
                }
            ]
        },
        {
            title: "Customer Testimonials",
            cards: [
                {
                    title: "Unlocking ROI: Kosli's 90-Day Journey to SOC 2 Type 2",
                    desc: "How leveraging Drata and Kosli streamlines compliance audit readiness.",
                    img: astUrl + "f_auto/drata/14018/17.webp",
                    link: "https://drata.com/customers/kosli"
                },
                {
                    title: "Starting With SOC 2: How Drata Proves Invaluable for Young Startups",
                    desc: "A case on how Drata empowers Scanner to navigate challenges with confidence and efficiency—on their own.",
                    img: astUrl + "f_auto/drata/14018/18.webp",
                    link: "https://drata.com/customers/scanner"
                },
                {
                    title: "3rdRisk Achieves SOC 2 Type 1 in 2 Weeks With The Help of Drata and AssuranceLab",
                    desc: "3rdRisk is a European tech company providing a third-party risk management (TPRM) and internal control solution.",
                    img: astUrl + "f_auto/drata/14018/19.webp",
                    link: "https://drata.com/customers/third-risk"
                },
                {
                    title: "How Calendly Reduced Hours Spent on Audit Prep by 90% with Drata&#8217;s Compliance Automation",
                    desc: "Calendly&#8217;s scheduling automation platform helps individuals, teams, and organizations globally automate the meeting lifecycle.",
                    img: astUrl + "f_auto/drata/14018/1_1.webp",
                    link: "https://drata.com/customers/calendly"
                }
            ]
        },
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

    // appendScript("https://res.cloudinary.com/spiralyze/raw/upload/v1722331975/drata/28001/src/assets/swiper-bundle.min.js", function () {

    // });


    function createTest() {
        waitForElm('header + div[data-csk-entry-type="hero"] > .MuiContainer-root > div[class*="HeroSubpage-content"]').then(function () {
            document.querySelector("body").classList.add("spz-14018");

            // let updatePage = setInterval(() => {
            waitForElm('[variant="collectionContentGridSectionWrapper"]').then(function () {
                //check which variant is stored in session storage 
                if (sessionStorage.getItem('variant') === 'variant_1') {
                    variant_1();
                    waitForElm('.choose-variant-modal').then(function () {
                        document.querySelector('.choose-variant-modal').classList.add('spz-hidden');
                    });
                    document.body.classList.add('variant_1');
                } else if (sessionStorage.getItem('variant') === 'variant_2') {
                    variant_2();
                    waitForElm('.choose-variant-modal').then(function () {
                        document.querySelector('.choose-variant-modal').classList.add('spz-hidden');
                    });
                    document.body.classList.add('variant_2');
                }
                else {
                    variant_1();
                    landingModal();
                    document.body.classList.add('variant_1');
                }

            });
            // }, 10);

            // setTimeout(() => {
            //     clearInterval(updatePage);
            // }, 1000);
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
                        <button class="variant-btn secondary-blue-btn variant_1">Get SOC2 Compliant ${ctaArrow}</button>
                        <button class="variant-btn secondary-blue-btn variant_2">Maintain SOC2 Compliance ${ctaArrow}</button>
                    </div>
                </div>
            </div>
        </div>`);
    }

    function variant_1() {
        heroSection_V1('body header');
        navBar_V1('.hero-section-14018');
        caseStudies_V1('.navbar-section');
        madeEasy_V1('.case-studies-section');
        simpleSteps_V1('.made-easy-sec');
        complianceBenefits_V1('.simple-steps-sec-14018');
        complianceChanges_V1('.benefits-sec');
        customerReviews_V1('.compliance-sec');
        meetDrata_V1('.cr-section-14018');
        feature_cap_slider_V1('.meet-drata');
        ourIntigrations_V1('.feature-cap-section-14018');
        globalCTA_V1('.our-integrations-sec');
        resourceSection_V1('.demo-cta-section');
        complianceFAQ_V1('.resources-section-14018');
    }

    function variant_2() {
        heroSection_V2('body header');
        navBar_V1('.hero-section-14018');
        caseStudies_V1('.navbar-section');
        madeEasy_V2('.case-studies-section');
        complianceChanges_V2('.made-easy-sec');
        singleTestimonial_V2('.compliance-sec');
        meetDrata_V1('.single-testimonial-sec');
        feature_cap_slider_V1('.meet-drata');
        ourIntigrations_V1('.feature-cap-section-14018');
        customerReviews_V1('.our-integrations-sec');
        globalCTA_V1('.cr-section-14018');
        resourceSection_V1('.demo-cta-section');
        complianceFAQ_V1('.resources-section-14018');
    }

    function heroSection_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelectorAll('body .hero-section-14018').length == 0) {
                document.querySelector(selector).insertAdjacentHTML("afterend", `<section class="hero-section-14018 spz-sec">
                    <div class="hero-content dis-flex flex-wrap justify-content-between">
                    <div class="hero-left-section">
                    <h1 class="hc-title">New to <span class="hc-blue">SOC 2?</span> <br class="desk-only">We Got You.</h1>
                    <div class="star-rating dis-flex align-items-center"><img src="${astUrl}fl_sanitize/drata/14001/hero_logo-g2.svg" class="g2-img" alt="G2 Logo" title="G2 Logo" draggable="false">
                    <img src="${astUrl}fl_sanitize/drata/14007/rating-4_9.svg" class="sr-img" alt="Ratings" title="Ratings" draggable="false"><span class="sr-number"><strong>4.9</strong> (800+ reviews)</span></div>
                    <div class="list-grp-wrapper">
                    <ul class="list-group">
                    <li class="list-item"><strong>Automate (Most of) the Work.</strong> Reduce audit prep by 80% with software that creates SOC 2 documentation in minutes.</li>
                    <li class="list-item"><strong>Ace the Audit.</strong> Track and meet all SOC 2 requirements with full visibility, ensuring a confident, surprise-free audit.</li>
                    <li class="list-item"><strong>Learn the Process.</strong> Receive expert guidance and support throughout your compliance journey, both now and as you scale.</li>
                    </ul>
                    </div>
                    </div>
                    <div class="hero-right-section">
                        <img src="${astUrl}f_auto/drata/14018/image_7.webp" class="hero-img" alt="New to SOC 2? We Got You.">
                    </div>
                    </div>
                    </section>`);
            }
        });
    }

    function heroSection_V2(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelectorAll('body .hero-section-14018').length == 0) {
                document.querySelector(selector).insertAdjacentHTML("afterend", `<section class="hero-section-14018 spz-sec">
                    <div class="hero-content dis-flex flex-wrap justify-content-between">
                    <div class="hero-left-section">
                    <h1 class="hc-title">Manage SOC 2 with <span class="hc-blue">80%</span> Less Time, Cost, and Hassle</h1>
                    <div class="star-rating dis-flex align-items-center"><img src="${astUrl}fl_sanitize/drata/14001/hero_logo-g2.svg" class="g2-img" alt="G2 Logo" title="G2 Logo" draggable="false">
                    <img src="${astUrl}fl_sanitize/drata/14007/rating-4_9.svg" class="sr-img" alt="Ratings" title="Ratings" draggable="false"><span class="sr-number"><strong>4.9</strong> (800+ reviews)</span></div>
                    <div class="list-grp-wrapper">
                    <ul class="list-group">
                    <li class="list-item"><strong>Automated Compliance</strong> - Hundreds of integrations collect, test, and store evidence for access reviews, personnel, devices, and more. </li>
                    <li class="list-item"><strong>Fast, Frictionless Audit</strong> - Get compliant in weeks with clear visibility into your audit-readiness, ensuring no surprises.</li>
                    <li class="list-item"><strong>All-In-One</strong> - Get started fast with our SOC 2 toolkit, complete with a pre-built framework, pre-mapped controls, and policy templates.</li>
                    <li class="list-item"><strong>Enhanced Security</strong> - Automation ensures accurate compliance status updates and provides real-time alerts for failing controls or emerging risks.</li>
                    </ul>
                    </div>
                    </div>
                    <div class="hero-right-section">
                        <img src="${astUrl}f_auto/drata/14018/image_7.webp" class="hero-img" alt="Manage SOC">
                    </div>
                    </div>
                    </section>`);
            }
        });
    }

    function navBar_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelector('.navbar-section')) return;
            document.querySelector(selector).insertAdjacentHTML('afterend', ` <nav class="navbar-section spz-sec">
            <div class="nav-container dis-flex justify-content-between align-items-center">
                <div class="nav-logo no-mob">
                    <img src="${astUrl}fl_sanitize/drata/28001/logo.svg" alt="Drata Logo" title="Drata Logo">
                </div>
                <div class="nav-links">
                    <a class="nav-anchor" href="javascript:;" data-scroll-section="overview-process">Overview & Process</a>
                    <a class="nav-anchor" href="javascript:;" data-scroll-section="business-impact">Business Impact</a>
                    <a class="nav-anchor" href="javascript:;" data-scroll-section="why-drata">Why Drata</a>
                    <a class="nav-anchor" href="javascript:;" data-scroll-section="nav-resource">Resources</a>
                </div>
            </div>
        </nav>`);
        });

        window.addEventListener('click', function (e) {
            if (e.target.classList.contains('nav-anchor')) {
                document.querySelectorAll('.nav-anchor').forEach(function (anchor) {
                    anchor.classList.remove('active');
                });
                e.target.classList.add('active');

                const target = document.querySelector(`.spz-sec[data-scroll-anchor="` + e.target.getAttribute('data-scroll-section') + `"]`);

                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 50,
                        // behavior: 'smooth'
                    });

                    let checkActiveNav = setInterval(() => {
                        if (document.querySelector('header ~ .hero-section-14018')) {
                            const hero = document.querySelector('header ~ .hero-section-14018');
                            const rect = hero.getBoundingClientRect();
                            if (hero && rect.top <= -100) {
                                document.querySelector('header').classList.add('hide-header');
                            } else {
                                document.querySelector('header').classList.remove('hide-header');
                            }
                        }
                    }, 10);

                    setTimeout(() => {
                        clearInterval(checkActiveNav);
                    }, 1000);
                }
            }
        });

        // document.querySelectorAll('.nav-anchor').forEach(function (anchor) {
        //     anchor.addEventListener('click', function (e) {
        //         // e.preventDefault();
        //         console.log(this.getAttribute('href'));
        //         const target = document.querySelector(this.getAttribute('data-scroll-section'));

        //         document.querySelectorAll('.nav-anchor').forEach(function (anchor) {
        //             anchor.classList.remove('active');
        //         });

        //         console.log(target);
        //         // this.classList.add('active');
        //         if (target) {
        //             console.log(target.offsetTop);
        //             window.scrollTo({
        //                 top: target.offsetTop - 100,
        //                 behavior: 'smooth'
        //             });

        //             let checkActiveNav = setInterval(() => {
        //                 if (document.querySelector('header ~ .hero-section-14018')) {
        //                     const hero = document.querySelector('header ~ .hero-section-14018');
        //                     const rect = hero.getBoundingClientRect();
        //                     console.log(rect.top);
        //                     console.log(hero && rect.top <= -200);
        //                     if (hero && rect.top <= -100) {
        //                         document.querySelector('header').classList.add('hide-header');
        //                     } else {
        //                         document.querySelector('header').classList.remove('hide-header');
        //                     }
        //                 }
        //             }, 10);

        //             setTimeout(() => {
        //                 clearInterval(checkActiveNav);
        //             }, 1000);
        //         }
        //     });
        // });
    }

    function checkActiveNav_V1() {
        // document.querySelectorAll('.nav-anchor').forEach(function (anchor) {
        let targetDiv = document.querySelectorAll('.spz-sec[data-scroll-anchor]');
        const hero = document.querySelector('header ~ .hero-section-14018');
        const footer = document.querySelector('div[data-csk-entry-type="globalFooter"]');

        //check which target is in view and add active class to the respective nav link
        targetDiv.forEach(function (target) {
            let elemToCheck = document.querySelectorAll(`.spz-sec[data-scroll-anchor="` + target.getAttribute('data-scroll-anchor') + `"]`);
            let anchorToAdd = document.querySelector(`.nav-anchor[data-scroll-section="` + target.getAttribute('data-scroll-anchor') + `"]`);


            //convert elemToCheck to array and check for all elements in the array
            elemToCheck.forEach(function (elem) {
                if (isInViewport(elem)) {
                    document.querySelectorAll('.nav-anchor').forEach(function (anchor) {
                        anchor.classList.remove('active');
                    });
                    // setTimeout(() => {
                    anchorToAdd.classList.add('active');
                    // }, 10);
                    // console.log(anchor);
                }
                else {
                    // anchor.classList.remove('active');
                    if (isInViewport(hero) || isInViewport(footer)) {
                        document.querySelectorAll('.nav-anchor').forEach(function (anchor) {
                            anchor.classList.remove('active');
                        });
                    }
                }

            });


        });

        //left scroll the nav links to bring the active link in focus
        if (window.innerWidth < 760 && anchor.classList.contains('active')) {
            document.querySelector('.nav-links').style.scrollBehavior = 'smooth';
            document.querySelector('.nav-links').scrollLeft = anchor.offsetLeft - 100;
        }
        // });

        if (document.querySelector('header ~ .hero-section-14018')) {
            const hero = document.querySelector('header ~ .hero-section-14018');
            const rect = hero.getBoundingClientRect();
            if (hero && rect.top <= -100) {
                document.querySelector('header').classList.add('hide-header');
            } else {
                document.querySelector('header').classList.remove('hide-header');
            }
        }

    }

    function caseStudies_V1(selector) {
        const aUrl = astUrl + 'fl_sanitize/drata/14018/';
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
                title: 'Policy Dock',
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
            <section class="case-studies-section spz-sec" id="overview-process" data-scroll-anchor="overview-process">
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
                            if (document.querySelector('.cs-overflow') && !document.querySelector('.cs-overflow').classList.contains('stop-scroll')) {
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
                document.querySelector(selector).insertAdjacentHTML('afterend', ` <section class="made-easy-sec spz-sec" data-scroll-anchor="overview-process">
            <div class="made-easy-container">
                  <div class="me-top-bar dis-flex">
                        <div class="me-left">
                            <h2 class="me-title">SOC 2 Made Easy</h2>
                            <div class="me-subtitle">So, you need to get SOC 2 compliant—but how? Compliance Automation.</div>
                        </div>
                        <div class="me-right">
                            <a href="https://drata.com/grc-central/soc-2/type-2" class="me-cta primary-blue-btn spz-14018-tracking">Download the Guide ${ctaArrow}</a>
                        </div>
                    </div>
                    <div class="me-contents">
                        <div class="me-card">
                            <div class="me-title">What is Compliance Automation?</div>
                            <div class="me-desc">Compliance automation simplifies the process of preparing for audits. It uses software to handle repetitive tasks, gather necessary documents, track your progress, and organize and share information with auditors.</div>
                        </div>
                        <div class="me-card active">
                            <div class="me-title">Why Compliance Automation?</div>
                            <div class="me-desc">Traditional compliance methods are slow and error-prone, often requiring hundreds of hours to map controls and compile evidence using screenshots and spreadsheets. Drata eliminates these manual tasks, saving time and reducing errors.</div>
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

    function madeEasy_V2(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelectorAll('.made-easy-sec').length === 0) {
                document.querySelector(selector).insertAdjacentHTML('afterend', ` <section class="made-easy-sec spz-sec" data-scroll-anchor="overview-process">
            <div class="made-easy-container">
                  <div class="me-top-bar dis-flex">
                        <div class="me-left">
                            <h2 class="me-title">Why Switch to Drata?</h2>
                            <div class="me-subtitle">Hard work is overrated. See the difference between manual and automated compliance.</div>
                        </div>
                    </div>
                    <div class="me-contents">
                        <div class="me-card">
                            <div class="me-title">Out With the Old</div>
                            <div class="me-desc">Requires multiple tools to manage tasks</div>
                            <div class="me-desc">Progress tracked manually in spreadsheets</div>
                            <div class="me-desc">Lacks automated risk alerts</div>
                            <div class="me-desc">Can&#8217;t keep up with growth or changing regulations</div>
                            <div class="me-desc">Inefficiency adds labor and costs</div>
                        </div>
                        <div class="me-card active">
                            <div class="me-title">In With the New</div>
                            <div class="me-desc">Manage controls, evidence, policies, personnel, and more in one place</div>
                            <div class="me-desc">Automated evidence collection via integrations</div>
                            <div class="me-desc">Full visibility into compliance status with 24/7 monitoring</div>
                            <div class="me-desc">Instant alerts for risks and gaps</div>
                            <div class="me-desc">Adapts to business growth and industry changes</div>
                            <div class="me-desc">Reduces costs by minimizing labor, rework, and penalties</div>
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
            <section class="simple-steps-sec-14018 spz-sec" data-scroll-anchor="overview-process">
                <div class="simple-steps-container">
                    <div class="ss-top-bar dis-flex">
                        <div class="ss-left">
                            <div class="ss-subtitle">Here&#8217;s How Drata Works</div>
                            <h2 class="ss-title">Get Compliant in 4 Simple Steps</h2>
                        </div>
                        <div class="ss-right">
                            <div class="ss-text">Drata is the leading Compliance Automation Platform that&#8217;s helped 5,000+ businesses do the following:</div>
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
                                           <img src="${astUrl}f_auto/drata/14018/1.webp" alt="Setup SOC 2" class="ss-img">
                                        </div>
                                        <div class="ss-title">Setup SOC 2</div>
                                        <div class="ss-desc">Use our auditor-approved framework template, complete with all the controls and requirements needed for compliance.</div>
                                    </div>
                                </div>
                                <div class="ss-item step-2">
                                    <div class="ss-step step-2">2</div>
                                    <div class="ss-content">
                                        <div class="ss-img-wr">
                                            <img src="${astUrl}f_auto/drata/14018/2.webp" alt="Meet Requirements" class="ss-img">
                                        </div>
                                        <div class="ss-title">Meet Requirements</div>
                                        <div class="ss-desc">Send and sign policies, complete security training, and connect your tools via integrations to collect audit evidence—all automated in Drata.</div>
                                    </div>
                                </div>
                                <div class="ss-item step-3">
                                    <div class="ss-step step-3">3</div>
                                    <div class="ss-content">
                                        <div class="ss-img-wr">
                                           <img src="${astUrl}f_auto/drata/14018/3.webp" alt="Track Progress" class="ss-img">
                                        </div>
                                        <div class="ss-title">Track Progress</div>
                                        <div class="ss-desc">See your compliance status, missing requirements, and upcoming tasks in the Drata dashboard for full visibility and reporting.</div>
                                    </div>
                                </div>
                                <div class="ss-item step-4">
                                    <div class="ss-step step-4">4</div>
                                    <div class="ss-content">
                                        <div class="ss-img-wr">
                                            <img src="${astUrl}f_auto/drata/14018/4.webp" alt="Ace the Audit" class="ss-img">
                                        </div>
                                        <div class="ss-title">Ace the Audit</div>
                                        <div class="ss-desc">Find vetted firms through Drata&#8217;s Auditor network and streamline the process with a central repository for all compliance documents.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ss-bottom-bar">
                                <div class="ssb-title">Compliance Upkeep</div>
                                <div class="ssb-subtitle">Compliance shouldn&#8217;t stop after the audit. Continuous monitoring reassures customers about current data security, reduces risks, and gives you a head start for future audits.</div>
                            </div>
                        </div>
                    </div>
                    <div class="ss-bottom-cta-wrapper">
                        <a href="https://drata.com/grc-central/soc-2/compliance-checklist" class="ss-bottom-cta primary-blue-btn spz-14018-tracking">Get the SOC 2 Checklist ${ctaArrow}</a>
                    </div>
                </div>
            </section>`);
            }
        });

        // On hover of any .ss-item, add specific step class name to .simple-steps-container
        // if (window.innerWidth > 1024) {
        //     document.querySelectorAll('.simple-steps .ss-item').forEach(function (item) {
        //         item.addEventListener('mouseover', function () {
        //             document.querySelector('.simple-steps-container').classList.remove('step-1', 'step-2', 'step-3');
        //             document.querySelector('.simple-steps-container').classList.add('step-' + this.querySelector('.ss-step').textContent);
        //             item.querySelector('video').play();
        //         });

        //         // On mouseout, remove all step classes
        //         item.addEventListener('mouseout', function () {
        //             document.querySelector('.simple-steps-container').classList.remove('step-1', 'step-2', 'step-3');
        //             item.querySelector('video').pause();
        //             item.querySelector('video').load();
        //         });
        //     });
        // }
        // else {
        //     document.querySelectorAll('.simple-steps .ss-item').forEach(function (item) {
        //         item.querySelector('video').setAttribute('autoplay', '1');
        //         item.querySelector('video').play();
        //     });
        // }
    }

    function complianceBenefits_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelectorAll('.benefits-sec').length === 0) {
                document.querySelector(selector).insertAdjacentHTML('afterend', `
            <section class="benefits-sec spz-sec" data-scroll-anchor="overview-process">
                <div class="benefits-container">
                    <div class="bs-title-container">
                            <div class="bs-eyebrow">Compliance Benefits</div>
                            <h2 class="bs-title">Why Comply? Security Secures Your Future.</h2>
                            <div class="bs-desc">Discover how compliance accelerates revenue, enhances security, and turns trust into a competitive advantage.</div>
                    </div>
                    <div class="bs-cards-container justify-content-between dis-flex">
                        <div class="bs-card">
                            <div class="bs-card-img"><img src="${astUrl}fl_sanitize/drata/28001/icon_1.svg" alt="Unblock Sales"></div>
                            <div class="bs-card-title">Unblock Sales</div>
                            <div class="bs-card-desc">No one wants to work with a security risk. Get compliant to earn trust and expedite the sales process.</div>
                        </div>
                        <div class="bs-card">
                            <div class="bs-card-img"><img src="${astUrl}fl_sanitize/drata/14018/icon_2.svg" alt="Secure Funding"></div>
                            <div class="bs-card-title">Secure Funding</div>
                            <div class="bs-card-desc">Investors don&#8217;t like risk. Prove you take security seriously to improve your chances of raising funds.</div>
                        </div>
                         <div class="bs-card">
                            <div class="bs-card-img"><img src="${astUrl}fl_sanitize/drata/28001/icon_3.svg" alt="Unlock Expansion"></div>
                            <div class="bs-card-title">Unlock Expansion</div>
                            <div class="bs-card-desc">Meet enterprise and regulatory requirements to expand into larger deals and new markets.</div>
                        </div>
                         <div class="bs-card">
                            <div class="bs-card-img"><img src="${astUrl}fl_sanitize/drata/28001/icon_4.svg" alt="Reduce Risk"></div>
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
                document.querySelector(selector).insertAdjacentHTML('afterend', `<section class="compliance-sec spz-sec" id="business-impact" data-scroll-anchor="business-impact">
            <div class="compliance-container">
                <div class="c-title-container">
                    <div class="c-eyebrow">Business Impact</div>
                    <h2 class="c-title">Automating SOC 2 Helps You [Save Time]</h2>
                    <div class="c-desc">This might be your first audit, but it won&#8217;t be your last. See why Drata is the ideal tool to begin and maintain your compliance journey.</div>
                </div>
                <div class="c-content dis-flex">
                    <div class="c-left">
                        <div class="accordion-wrapper">
                            <div class="accordion accordion_1">
                                <div class="accordion-item open">
                                    <div class="accordion-title">Cut Compliance Work by 80%</div>
                                    <div class="accordion-content">Integrations and automation reduce duplicate tasks and streamline compliance work, saving time and resources. Without manual workflows like collecting evidence with screenshots, you&#8217;ll be free to focus on more critical aspects of your business.
                                    <div class="learn-more-cta"><a href="https://drata.com/platform/integrations" class="learn-more">Explore Integrations ${anchorArrow}</a></div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-title">Protect Your Business</div>
                                    <div class="accordion-content">Achieving SOC 2 compliance reduces the risk of breaches and security incidents by implementing controls and guidelines for protecting critical business information, incident response, risk management, and more.</div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-title">Scale Your GRC Program</div>
                                    <div class="accordion-content">Compliance gets harder as you grow. Achieving SOC 2 now builds a strong foundation, helping you avoid future costs and headaches. And with Drata's controls that satisfy multiple frameworks, you can seamlessly add ISO 27001, HIPAA, and other frameworks without duplicating work.
                                    <div class="learn-more-cta"><a href="https://drata.com/product" class="learn-more">See All Frameworks ${anchorArrow}</a></div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-title">Expedite Sales Cycles and Funding</div>
                                    <div class="accordion-content">No one wants to work with a security risk. SOC 2 compliance builds trust, differentiates you in the market, and proves you take security seriously—expediting the sales process, opening enterprise channels, giving investors peace of mind, and becoming the clear choice for partners.
                                    <div class="learn-more-cta"><a href="https://drata.com/customers/merge" class="learn-more">Learn More ${anchorArrow}</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="c-right">
                        <div class="c-img">
                            <img src="${astUrl}f_auto/drata/14018/image_9.webp" alt="Drata Compliance Automation">
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
                    else {
                        item.classList.add('open');
                    }

                    // updateImgHeight_V1();
                });
            });
        });
    }

    function complianceChanges_V2(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelectorAll('.compliance-sec').length === 0) {
                document.querySelector(selector).insertAdjacentHTML('afterend', `<section class="compliance-sec spz-sec" id="business-impact" data-scroll-anchor="business-impact">
            <div class="compliance-container">
                <div class="c-title-wrapper">
                    <div class="c-title-container">
                        <div class="c-eyebrow">How Drata Works</div>
                        <h2 class="c-title">Create SOC 2 Programs, Not Projects</h2>
                        <div class="c-desc">See how Drata simplifies the compliance process before, during, and after the audit.</div>
                    </div>
                    <div class="c-cta-wrapper">
                            <a href="javascript:;" class="c-cta-btn demo-btn primary-blue-btn">Get Demo ${ctaArrow}</a>
                    </div>
                </div>
                <div class="c-content dis-flex">
                    <div class="c-left">
                        <div class="accordion-wrapper">
                            <div class="accordion accordion_1">
                                <div class="accordion-item open">
                                    <div class="accordion-title">Accelerate Audit-Readiness</div>
                                    <div class="accordion-content">Get everything you need to quickly prepare for an audit.
                                    <ul class="accordion-list">
                                        <li><span>Fast Implementation:</span> Use our auditor-approved SOC 2 template, complete with all necessary controls and requirements.</li>
                                        <li><span>Policy Management:</span> Use our policy library to distribute and track the completion of SOC 2-required policies.</li>
                                        <li><span>Automated Evidence Collection:</span> Connect your systems for automatic collection, testing, and storage of audit evidence, including personnel, devices, access reviews, and more.</li>
                                    </ul>
                                    <div class="learn-more-cta"><a href="https://drata.com/platform/integrations" class="learn-more">Explore Integrations ${anchorArrow}</a></div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-title">Ace the Audit</div>
                                    <div class="accordion-content">Ensure audit readiness and streamline the audit process with Drata.
                                     <ul class="accordion-list">
                                        <li><span>Progress Tracker:</span> Monitor your compliance status, missing requirements, and ensure audit-readiness in the Drata dashboard before your audit.</li>
                                        <li><span>Auditor Network:</span> Find a pre-vetted firm in Drata&#8217;s Auditor Alliance.</li>
                                        <li><span>Streamlined Audit:</span> Use Drata&#8217;s Audit Hub to simplify auditor communication and deliver compliance documents in auditor-preferred JSON format, saving time and ensuring no critical information is missed.</li>
                                    </ul>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-title">Build Beyond the Audit</div>
                                    <div class="accordion-content">Maintain trust and security year-round and reap the benefits of continuous compliance with Drata.
                                     <ul class="accordion-list">
                                        <li><span>Continuous Compliance:</span> Drata&#8217;s 24/7 control monitoring keeps your compliance up-to-date and alerts you to any failing controls or emerging risks.</li>
                                        <li><span>Compliance Reporting & Sharing:</span> Publish your compliance status and documents on Trust Center to reduce security reviews and speed up sales.</li>
                                        <li><span>Scalable Platform:</span> With continuous compliance and controls that satisfy multiple frameworks, Drata keeps you ready for next year's audit and makes it easy to add new frameworks like ISO 27001, GDPR, and more.</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="c-right">
                        <div class="c-img">
                            <img src="${astUrl}f_auto/drata/14018/image_9.webp" alt="Drata Compliance Automation">
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
                    else {
                        item.classList.add('open');
                    }

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

    function singleTestimonial_V2(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelectorAll('.single-testimonial-sec').length === 0) {
                document.querySelector(selector).insertAdjacentHTML('afterend', `
                    <section class="single-testimonial-sec spz-sec" data-scroll-anchor="business-impact">
                        <div class="st-container">
                            <div class="st-content dis-flex">
                                <div class="st-left-copy">
                                    <div class="st-eyebrow">Drata Wins</div>
                                    <div class="st-title">How Drata Saved 6 Months of Work with Automation</div>
                                    <div class="st-cta-wrapper">
                                        <a href="https://drata.com/customers/policydock" class="st-cta cus-story-btn spz-14018-tracking">Read Customer Story</a>
                                    </div>
                                </div>
                                <div class="st-right-testimonial-card">
                                    <div class="st-testimonial-card">
                                        <div class="st-t-copy">"Using Drata has effectively saved us six months in the SOC 2 audit process, which is huge for a team that&#8217;s trying to ship new features all the time."</div>
                                        <div class="st-t-footer">
                                            <div class="st-t-img">
                                                <img src="${astUrl}f_auto/drata/14018/image_156.webp" alt="Patrick De La Garza">
                                            </div>
                                            <div class="st-t-details">
                                                <p class="st-t-name">Patrick De La Garza</p>
                                                <p class="st-t-role">VP Engineering, PolicyDock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>`);
            }
        });
    }

    function meetDrata_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelector('.meet-drata')) return;
            let variant = sessionStorage.getItem('variant');
            let subTitle = 'Because it takes more than software to get SOC 2 compliant.';
            if (!variant) {
            }
            else {
                if (variant == "variant_1") {
                }
                else {
                    subTitle = 'Because it takes more than software to maintain SOC 2 compliance.';
                }
            }

            document.querySelector(selector).insertAdjacentHTML('afterend', `
            <section class="meet-drata spz-sec" id="why-drata" data-scroll-anchor="why-drata">
                <div class="md-container">
                    <div class="md-title-container">
                        <div class="title-wrapper">
                        <div class="md-eyebrow">Service & Support</div>
                        <div class="md-title">Why Drata?</div>
                        <div class="md-desc">${subTitle}</div>
                    </div>
                    <div class="md-cta-wrapper">
                        <div class="md-cta">
                            <a href="javascript:;" class="md-cta-btn demo-btn primary-blue-btn">Get a Demo ${ctaArrow}</a>
                        </div>
                    </div>
                </div>
                <div class="md-content">
                        <div class="md-top-section dis-flex">
                            <div class="md-left">
                                <div class="md-img-wr">
                                   <img src="${astUrl}f_auto/drata/14018/image_3.webp" alt="My Vendors">
                                </div>
                            </div>
                            <div class="md-right">
                                <div class="md-card">
                                    <div class="md-card-title">Ease of Use</div>
                                    <div class="md-card-desc">Not a compliance expert? Not a problem. Make the entire SOC 2 compliance process a breeze with step-by-step guides and Drata&#8217;s intuitive platform that ranks highest for ease of use on G2.</div>
                                    <a href="https://drata.com/platform" class="learn-more">Explore the Platform ${anchorArrow}</a>
                                </div>
                                 <div class="md-card">
                                    <div class="md-card-title">Built to Scale Securely</div>
                                    <div class="md-card-desc">Threats don&#8217;t stop, so neither do we. By constantly adding new frameworks and features, we stay ahead of regulatory changes and emerging threats, ensuring your compliance strategy remains proactive.</div>
                                    <a href="https://drata.com/product" class="learn-more">See All Frameworks ${anchorArrow}</a>
                                </div>
                            </div>
                        </div>
                        <div class="md-bottom-section">
                          <div class="md-card">
                                <div class="md-card-title-wrapper">
                                    <div class="md-card-title">Expert Support at Every Step</div>
                                    <div class="md-card-desc">Whether you&#8217;re deciding between SOC 2 Type 1 or Type 2, or need hands-on audit prep, our team of compliance experts ensure you never have to face the complexities of compliance alone. </div>
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

            let variant = sessionStorage.getItem('variant');
            let dataAttr = 'business-impact';
            if (!variant) {
            }
            else {
                if (variant == "variant_1") {
                }
                else {
                    dataAttr = 'why-drata';
                }
            }

            document.querySelector(selector).insertAdjacentHTML('afterend', `
            <section class="cr-section-14018 spz-sec" data-scroll-anchor="${dataAttr}">
                <div class="cr-title-container">
                    <div class="title-wrapper dis-flex">
                        <div class="cr-title">
                            <p class="small-eyebrow">SOC 2 Success Stories</p>
                            <h3 class="large-title">Hear From Our Customers</h3>
                        </div>
                        <div class="cr-global-cta">
                            <a href="https://drata.com/customers" class="cr-cta primary-blue-btn spz-14018-tracking">See all stories ${ctaArrow}</a>
                        </div>
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
                        </div>
                    </div>
                </div>
            </section>`);
        }
        );
    }

    function feature_cap_slider_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelector('.feature-cap-section-14018')) return;
            //check the "variant" value in session storage and store it in a variable
            let variant = sessionStorage.getItem('variant');
            let getVariant;
            if (!variant) {
                getVariant = 0;
            }
            else {
                if (variant == "variant_1") {
                    getVariant = 0;
                }
                else {
                    getVariant = 1;
                }
            }


            document.querySelector(selector).insertAdjacentHTML('afterend', `
            <section class="feature-cap-section-14018 spz-sec" data-scroll-anchor="why-drata">
                <div class="fc-title-container">
                    <div class="title-wrapper dis-flex">
                        <h3 class="large-title">Features & Capabilities For Fast and Reliable Audits</h3>
                        <span class="swiper-btn-prev"></span>
                        <span class="swiper-btn-next"></span>
                    </div>
                </div>
                <div class="fc-section-container">
                    <div class="slider-section">
                        <div class="container slider-column">
                            <div class="swiper feature-slider_14018">
                                <div class="swiper-wrapper">
                                    ${createFeatureCards(getVariant)}
                                </div>
                            </div>
                            <span class="swiper-btn-prev"></span>
                            <span class="swiper-btn-next"></span>
                        </div>
                    </div>
                </div>
            </section>`);

            //interval to check if Swiper is loaded
            appendScript("https://res.cloudinary.com/spiralyze/raw/upload/v1722331975/drata/28001/src/assets/swiper-bundle.min.js", function () {
                let interval = setInterval(() => {
                    if (Swiper !== undefined && document.querySelector('.feature-slider_14018') && !document.querySelector('.feature-slider_14018').classList.contains('swiper-initialized')) {
                        initSlider_14018_V1();
                        clearInterval(interval);
                    }
                }, 100);
            });
        }
        );
    }

    function ourIntigrations_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelector('.our-integrations-sec')) return;

            let variant = sessionStorage.getItem('variant');
            let title = 'Our Integrations Power Automation';
            let subTitle = 'SOC 2 requires evidence from your systems to prove their data security. We integrate with those systems to automatically collect and store that evidence to ensure compliance and audit readiness.';
            if (!variant) {
            }
            else {
                if (variant == "variant_1") {
                }
                else {
                    title = 'More Integrations. More Evidence. <br class="desk-only">A Lot Less Work. ';
                    subTitle = 'Ditch the spreadsheets and screenshots. With hundreds of native integrations, Drata collects compliance evidence for you.';
                }
            }

            document.querySelector(selector).insertAdjacentHTML('afterend', `<section class="our-integrations-sec spz-sec" data-scroll-anchor="why-drata">
        <div class="oi-title-container dis-flex">
            <div class="title-wrapper">
                <div class="oi-title">${title}</div>
                <p class="oi-desc">${subTitle}</p>
            </div>
            <div class="oi-cta">
                <a href="https://drata.com/platform/integrations" class="oi-cta-btn primary-blue-btn spz-14018-tracking">Explore Integrations ${ctaArrow}</a>
            </div>
        </div>
        <div class="oi-content-wrapper">
            <div class="oi-cards">
                <div class="oi-img">
                    <img src="${astUrl}fl_sanitize/drata/14018/logo01.svg" alt="AWS">
                </div>
                 <div class="oi-img">
                    <img src="${astUrl}fl_sanitize/drata/14018/logo02.svg" alt="Azure">
                </div>
                <div class="oi-img">
                    <img src="${astUrl}fl_sanitize/drata/14018/logo03.svg" alt="GitHub">
                </div>
                <div class="oi-img">
                    <img src="${astUrl}fl_sanitize/drata/14018/logo04.svg" alt="Google Cloud">
                </div>
                <div class="oi-img">
                    <img src="${astUrl}fl_sanitize/drata/14018/logo05.svg" alt="Jira">
                </div>
                <div class="oi-img">
                    <img src="${astUrl}fl_sanitize/drata/14018/logo06.svg" alt="Slack">
                </div>
                <div class="oi-img">
                    <img src="${astUrl}fl_sanitize/drata/14018/logo07.svg" alt="Checkr">
                </div>
                <div class="oi-img">
                    <img src="${astUrl}fl_sanitize/drata/14018/logo08.svg" alt="Bitbucket">
                </div>
                <div class="oi-img">
                    <img src="${astUrl}fl_sanitize/drata/14018/logo09.svg" alt="Gusto">
                </div>
                <div class="oi-img">
                    <img src="${astUrl}f_auto/drata/14018/logo10.webp" alt="Datadog">
                </div>
                <div class="oi-img">
                    <img src="${astUrl}fl_sanitize/drata/14018/logo11.svg" alt="ADP">
                </div>
                <div class="oi-img">
                    <img src="${astUrl}fl_sanitize/drata/14018/logo12.svg" alt="Docusign">
                </div>
            </div>
        </div>
    </section>`);
        });
    }

    function globalCTA_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelector('.demo-cta-section')) return;

            let variant = sessionStorage.getItem('variant');
            let title = 'Start Your SOC 2 Journey Today';
            if (!variant) {
            }
            else {
                if (variant == "variant_1") {
                }
                else {
                    title = 'Upgrade Your SOC 2 Process Today';
                }
            }

            document.querySelector(selector).insertAdjacentHTML('afterend', `<section class="demo-cta-section spz-sec" data-scroll-anchor="nav-resource" id="nav-resource">
            <div class="demo-cta-container">
                <div class="sticker-wrapper">
                    <div class="logos">
                        <img src="${astUrl}fl_sanitize/drata/14018/frame_40347.svg" alt="G2 Logo">
                        <img src="${astUrl}fl_sanitize/drata/14018/frame_5597.svg" alt="Star Rating">
                    </div>
                    <div class="sticker-desc"><span>Excellent</span> based on <span>800+</span> reviews</div>
                </div>
                <div class="cta-desc">${title}</div>
                <div class="cta-wrapper">
                    <a href="javascript:void()" class="demo-btn cta-btn primary-blue-btn">Get Demo</a>
                    <a href="https://drata.com/plans" class="price-btn spz-14018-tracking">How We Price</a>
                </div>
            </div>
        </section>`);
        });
    }

    function resourceSection_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelector('.resources-section-14018')) return;
            document.querySelector(selector).insertAdjacentHTML('afterend', `
        <section class="resources-section-14018 spz-sec" data-scroll-anchor="nav-resource">
            <div class="resources-wrapper">
                <div class="resource-title">
                    <h6 class="title">Looking for more?</h6>
                    <p class="sub-title">Learn the lingo, understand the benefits, see the ROI of SOC 2 automation, and more.</p>
                </div>

                <div class="resource-card-tabs">
                    <div class="tab-wrapper">
                        ${resourceData.map((tab, index) => {
                return `<div class="tab ${index == 0 ? "active" : ""}" data-tab="${index}">${tab.title}</div>`;
            }).join('')}
                    </div>
                    <div class="all-resc-anchor">
                        <a href="https://drata.com/resources/resource-directory" class="all-resc-cta learn-more">Explore All Resources ${anchorArrow}</a>
                    </div>
                </div>

                <div class="resource-cards">
                    ${resourceData.map((tab, index) => {
                return `<div class="resource-card-container ${index == 0 ? "active" : ""}" data-tab="${index}">
                            ${tab.cards.map((resource, index) => {
                    return `<div class="resource-card">
                                    <a class="rc-link" href="${resource.link}">
                                        <div class="card-img">
                                            <img src="${resource.img}" alt="${resource.title}">
                                        </div>
                                        <div class="card-content">
                                            <div class="card-title">${resource.title}</div>
                                            <div class="card-desc">${resource.desc}</div>
                                            <div class="learn-more">
                                                Learn More ${anchorArrow}
                                            </div>
                                        </div>
                                    </a>
                                </div>`;
                }).join('')}
                        </div>`;
            }).join('')}
                </div>
            </div>
        </section>`);

            // Add click event to tabs
            document.querySelectorAll('.resource-card-tabs .tab').forEach(tab => {
                tab.addEventListener('click', function () {
                    const tabId = this.getAttribute('data-tab');
                    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
                    document.querySelectorAll('.resource-card-container').forEach(card => card.classList.remove('active'));
                    this.classList.add('active');
                    document.querySelector(`.resource-card-container[data-tab="${tabId}"]`).classList.add('active');
                });
            });
        });
    }

    function complianceFAQ_V1(selector) {
        waitForElm(selector).then(function () {
            if (document.querySelector('.compliance-faq-section')) return;
            document.querySelector(selector).insertAdjacentHTML('afterend', `
            <section class="compliance-faq-section spz-sec" data-scroll-anchor="nav-resource">
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
        waitForElm('.swiper-slider_14018').then(function () {
            const swiper = new Swiper(".swiper-slider_14018", {
                // Optional parameters
                centeredSlides: true,
                spaceBetween: 32,
                slidesPerView: 1.35,
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
                        slidesPerView: 1.088,
                        spaceBetween: 32
                    },
                    768: {
                        slidesPerView: 1.218,
                        spaceBetween: 32
                    },
                    1025: {
                        spaceBetween: 32,
                        slidesPerView: 1.355
                    },
                    1500: {
                        spaceBetween: 32,
                        slidesPerView: "auto"
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
                },
            });
        });

        waitForElm('.feature-slider_14018').then(function () {
            const swiper2 = new Swiper(".feature-slider_14018", {
                // Optional parameters
                // centeredSlides: true,
                spaceBetween: 32,
                slidesPerView: 2.5,
                freeMode: false,
                loop: true,
                autoHeight: true,
                mousewheel: false,
                draggable: false,
                allowTouchMove: false,
                keyboard: {
                    enabled: true
                },

                // Responsive breakpoints
                breakpoints: {
                    320: {
                        slidesPerView: 1.05,
                        spaceBetween: 16
                    },
                    768: {
                        slidesPerView: 1.4728,
                        spaceBetween: 30
                    },
                    1200: {
                        spaceBetween: 32,
                        slidesPerView: 2.58
                    },
                    1900: {
                        spaceBetween: 32,
                        slidesPerView: 3.03
                    }
                },

                // If we need navigation
                navigation: {
                    nextEl: ".swiper-btn-next",
                    prevEl: ".swiper-btn-prev"
                },
            });

            //assign this as margin left to .slider-section
            let callForLeftAlign = setInterval(() => {
                leftAlignedSlider();
            }, 100);
            setTimeout(() => {
                clearInterval(callForLeftAlign);
            }, 2000);
        });
    }

    function leftAlignedSlider() {
        waitForElm('.feature-cap-section-14018').then(function () {
            const title = document.querySelector('.feature-cap-section-14018 .large-title');
            const titleRect = title.getBoundingClientRect();
            const space = titleRect.left - 1;
            document.querySelector('.feature-cap-section-14018 .slider-section').style.marginLeft = space + 'px';
        });
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
                                    <p class="card-desc">${review.review}</p>
                                    <p class="card-name">${review.name} <span class="card-title">${review.title}</span></p>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="learn-more-cta">
                                    ` + ((!review.link) ? '' : `
                                    <a href="${review.link}" class="sc-cta secondary-blue-btn spz-14018-tracking">Read Customer Story</a>
                                    `) + `
                                </div>
                            </div>
                        </div>
                         <div class="slider-img">
                            <img src="${review.companyLogo}" alt="${review.logoAlt}">
                        </div>
                    </div>
                </div>`;
        });
        return reviewsHTML;
    }

    // Create feature section from JSON data
    function createFeatureCards(param) {
        let featuresHTML = '';
        featureCap[param].forEach(feature => {
            featuresHTML += `
                <div class="swiper-slide">
                    <div class="slider-card">
                        <div class="slider-content">
                            <div class="text-copy">
                                <div class="title-copy">
                                    <h3 class="card-title">${feature.title}</h3>
                                    <p class="card-desc">${feature.review}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
        return featuresHTML;
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

    //when scroll, check which section is in view and add active class to respective nav-anchor
    window.addEventListener('scroll', function () {
        checkActiveNav_V1();
    });

    window.addEventListener('resize', function () {
        leftAlignedSlider();
    });

    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('demo-btn')) {
            this.document.querySelector('a[href="/demo"]').click();
        }

        if (e.target.classList.contains('variant_1')) {
            this.document.querySelector('.choose-variant-modal').classList.add('spz-hidden');
            //store this selection for the whole session
            sessionStorage.setItem('variant', 'variant_1');
        }

        if (e.target.classList.contains('variant_2')) {
            this.document.querySelector('.choose-variant-modal').classList.add('spz-hidden');
            //store this selection for the whole session
            sessionStorage.setItem('variant', 'variant_2');
            //reload the page
            location.reload();
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
    document.head.insertAdjacentHTML('beforeend', `<link rel="preload" as="image" href="${astUrl}v1729060487/drata/14018/close-hover.svg"><link rel="preload" as="image" href="${astUrl}fl_sanitize/drata/14018/arrow_hovered.svg"><link rel="preload" as="image" href="${astUrl}fl_sanitize/drata/28001/icon_navigation_10.svg"><link rel="preload" as="image" href="${astUrl}f_auto/drata/28001/icon_navigation_04_webp.webp"><link rel="preload" as="image" href="${astUrl}f_auto/drata/28001/icon_navigation_03_webp.webp">`);
})();