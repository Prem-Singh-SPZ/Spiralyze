

(function () {
    document.head.insertAdjacentHTML('beforeend', `<link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1704197701/netskope/3001/checkbox_base_6.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1704197698/netskope/3001/checkbox_base_4.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1701452367/netskope/3001/hero_card_background_dark.webp" as="image">`)

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

        //Hero section added here
        document.querySelector('#components__content').insertAdjacentHTML('afterbegin', `<div class="spz-hero-section">
        <div class="hero-section-wrapper container">
            <div class="hero-section-title">
                <h2>Secure your entire<br><span>multi-cloud environment</span></h2>
                <p>How can we help?</p>
            </div>
            <div class="hero-section-cards">
                <div class="checkboxes">
                    <div class="check-box">
                        <label class="custom-check"> <img src="https://res.cloudinary.com/spiralyze/image/upload/v1704198970/netskope/3001/icon_wrapper_14.svg" alt="Secure and Accelerate Web and Cloud Access">
                            <p>Secure and Accelerate Web and Cloud Access</p>
                            <input class="spz-input" type="checkbox" value="Secure and Accelerate Web and Cloud Access"> <span class="checkmark"></span> </label>
                    </div>
                    <div class="check-box">
                        <label class="custom-check"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1704198967/netskope/3001/icon_wrapper_12.svg" alt="Evolve Beyond Legacy VPN">
                            <p>Evolve Beyond Legacy VPN</p>
                            <input class="spz-input" type="checkbox" value="Evolve Beyond Legacy VPN"><span class="checkmark"></span></label>
                    </div>
                    <div class="check-box">
                        <label class="custom-check"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1704198972/netskope/3001/icon_wrapper_15.svg" alt="Simplify & Redefine Data Protection">
                            <p>Simplify & Redefine Data Protection</p>
                            <input class="spz-input" type="checkbox" value="Other"><span class="checkmark"></span></label>
                    </div>
                    <div class="check-box">
                        <label class="custom-check"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1704198969/netskope/3001/icon_wrapper_13.svg" alt="Modernize Enterprise Networking">
                            <p>Modernize Enterprise Networking</p>
                            <input class="spz-input" type="checkbox" value="Modernize Enterprise Networking"><span class="checkmark"></span></label>
                    </div>
                    <div class="check-box">
                        <label class="custom-check"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1704198973/netskope/3001/icon_wrapper_16.svg" alt="Consolidate Your Security Architecture">
                            <p>Consolidate Your Security Architecture</p>
                            <input class="spz-input" type="checkbox" value="Consolidate Your Security Architecture"><span class="checkmark"></span></label>
                    </div>
                </div>
            </div>
            <div class="hero-section-CTA">
                <div class="v3"> <a href="https://www.netskope.com/get-started" class="get-started-cta btn">Get Started</a></div>
                <div class="v3"> <a href="https://www.netskope.com/products" class="learn-more-cta btn">Learn more</a></div>
            </div>
            <div class="hero-section-review">
                <div class="section-review"> <img src="https://res.cloudinary.com/spiralyze/image/upload/v1704198255/netskope/3001/gartner_svg.svg" alt="Gartner" class="Gartner"> <picture>
                <source media="(max-width:767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1704199148/netskope/3001/frame_5599.svg">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1704198262/netskope/3001/frame_5597.svg" alt="Star Rating">
                </picture>
                <span>4.6</span></div>
                <div class="section-review"> <img src="https://res.cloudinary.com/spiralyze/image/upload/v1704198276/netskope/3001/g2_svg.svg" alt="Gartner" class="Gartner"> <picture>
                <source media="(max-width:767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1704199148/netskope/3001/frame_5599.svg">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1704198262/netskope/3001/frame_5597.svg" alt="Star Rating">
                </picture>
                <span>4.4</span></div>
            </div>
        </div>
        </div>
        <div class="spz-banner-section">
        <div class="banner-section">
        <h6>We partner with leaders across the security industry</h6>
        <div class="banner-images">
        <picture>
                <source media="(min-width:1023.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1704200652/netskope/3001/Logos_Desktop.svg">
                <source media="(min-width:767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1704200652/netskope/3001/Logos_Tablet.svg">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1704200652/netskope/3001/Logos_Mobile.svg" alt="Our Partners">
        </picture>
        </div>
        </div></div>`);

        //rearranging 1st slider position
        document.querySelector('.v3-promo .v3-promo__container').before(document.querySelector('.orange_line_off'));

        //Updating search icon
        document.querySelector('.header__top-menu-link--search img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1704198990/netskope/3001/search.svg');
        document.querySelector('.header__top-menu-link-language img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1704199001/netskope/3001/chevron.svg');

        //case studies slider+tabs
        document.querySelector('#spacer').insertAdjacentHTML('beforebegin', `<div class="spz-case-studies">
        <div class="container">
        <div class="case-studies-wrapper">
            <div class="case-studies-title">
                <h2>Case Studies</h2>
                <p>Netskope helps customers reduce risk, accelerate performance,<br>and get unrivaled visibility into any cloud, web, and private application activity.</p>
            </div>
            <div class="case-studies-slider">
                <div class="slider slider-thumb">
                    <div class="cs-card-title"><p>Protecting mission-critical data across Queensland</p></div>
                    <div class="cs-card-title"><p>Securing a Perimeterless Organization</p></div>
                    <div class="cs-card-title"><p>Ensuring Secure Use of Safe Cloud Apps</p></div>
                    <div class="cs-card-title"><p>Hospital IT Team Gets “More Sleep and More Smiles”</p></div>
                    <div class="cs-card-title"><p>Delivering a Secure Cloud Experience</p></div>
                    <div class="cs-card-title"><p>A Better Prognosis for a National Healthcare Organization</p></div>
                </div>
                <div class="slider slider-content">
                    <div class="cs-card">
                        <div class="cs-content">
                            <p>"We have nurses and clinicians in very remote communities, and they need to be able to work digitally from wherever they are. So, we have unique challenges in providing connectivity and security for their data.."</p>
                            <div class="cs-name tab-mob">
                            <h6>Adam Carey</h6>
                            <p>Digital Infrastructure Program Manager </p>
                            </div>
                        </div>
                        <div class="cs-reviewer">
                            <div class="cs-anchor">
                            <div class="v3-stacked-tabs__tab-cta "> <span><a href="https://www.netskope.com/customers/success-story-royal-flying-doctor-service"> <img alt="chevron" class="no-lazyload" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron_blue.png"> </a> </span> <span> <a class="v3-stacked-tabs__tab-cta-link " href="https://www.netskope.com/customers/success-story-royal-flying-doctor-service">Read their story</a> </span></div>
                            </div>
                            <div class="cs-name">
                            <h6>Adam Carey</h6>
                            <p>Digital Infrastructure Program Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="cs-card">
                    <div class="cs-content">
                        <p>“Netskope enables us to meet our employees&#8217; expectations of an optimal user experience (better than the one they get on their own home IT) in the safest possible manner.”</p>
                        <div class="cs-name tab-mob">
                        <h6>Neil Binnie</h6>
                        <p>Group Head of Information Security and Compliance at Morgan Sindall</p>
                        </div>
                    </div>
                    <div class="cs-reviewer">
                        <div class="cs-anchor">
                        <div class="v3-stacked-tabs__tab-cta "> <span><a href="https://www.netskope.com/customers/morgan-sindall"> <img alt="chevron" class="no-lazyload" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron_blue.png"> </a> </span> <span> <a class="v3-stacked-tabs__tab-cta-link " href="https://www.netskope.com/customers/morgan-sindall">Read their story</a> </span></div>
                        </div>
                        <div class="cs-name">
                        <h6>Neil Binnie</h6>
                        <p>Group Head of Information Security and Compliance at Morgan Sindall</p>
                        </div>
                    </div>
                </div>
                <div class="cs-card">
                <div class="cs-content">
                    <p>"We wanted to be proactive about stopping threats before they occur. With the Netskope client, we can constantly monitor alerts and incidents. And the data protection provides automatic notification of any exposure of personally identifiable information.”</p>
                    <div class="cs-name tab-mob">
                    <h6>Tarun Trivedi</h6>
                    <p>Senior Information Security Manager, Waubonsee Community College</p>
                    </div>
                </div>
                <div class="cs-reviewer">
                    <div class="cs-anchor">
                    <div class="v3-stacked-tabs__tab-cta "> <span><a href="https://www.netskope.com/customers/waubonsee-community-college"> <img alt="chevron" class="no-lazyload" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron_blue.png"> </a> </span> <span> <a class="v3-stacked-tabs__tab-cta-link " href="https://www.netskope.com/customers/waubonsee-community-college">Read their story</a> </span></div>
                    </div>
                    <div class="cs-name">
                    <h6>Tarun Trivedi</h6>
                    <p>Senior Information Security Manager, Waubonsee Community College</p>
                    </div>
                </div>
                </div>
                <div class="cs-card">
                <div class="cs-content">
                    <p>"Before, we could never be 100%. We couldn’t say that to our auditors or say with confidence that all patient data was prevented from flowing into Dropbox. We also couldn’t give users the flexibility of using apps for non-sensitive transfers. Rarely do we have a security solution like this that can make things so easy and secure.”</p>
                    <div class="cs-name tab-mob">
                    <h6>Head of IT Security</h6>
                    <p>Internationally Recognized Hospital</p>
                    </div>
                </div>
                <div class="cs-reviewer">
                    <div class="cs-anchor">
                    <div class="v3-stacked-tabs__tab-cta "> <span><a href="https://www.netskope.com/customers/hospital-it-team"> <img alt="chevron" class="no-lazyload" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron_blue.png"> </a> </span> <span> <a class="v3-stacked-tabs__tab-cta-link " href="https://www.netskope.com/customers/hospital-it-team">Read their story</a> </span></div>
                    </div>
                    <div class="cs-name">
                    <h6>Head of IT Security</h6>
                    <p>Internationally Recognized Hospital</p>
                    </div>
                </div>
                </div>
                <div class="cs-card">
                <div class="cs-content">
                    <p>“We identified more than 600 applications that were being accessed within the CARE Ratings setup. With Netskope’s application and risk awareness, we have been able to tighten access restrictions, based on the risk of the apps themselves and the role-based profiles of the users accessing them.”</p>
                    <div class="cs-name tab-mob">
                    <h6>A. Shiju Rawther</h6>
                    <p>Chief Information & Technology Officer at CARE Ratings</p>
                    </div>
                </div>
                <div class="cs-reviewer">
                    <div class="cs-anchor">
                    <div class="v3-stacked-tabs__tab-cta "> <span><a href="https://www.netskope.com/customers/care-ratings"> <img alt="chevron" class="no-lazyload" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron_blue.png"> </a> </span> <span> <a class="v3-stacked-tabs__tab-cta-link " href="https://www.netskope.com/customers/care-ratings">Read their story</a> </span></div>
                    </div>
                    <div class="cs-name">
                    <h6>A. Shiju Rawther</h6>
                    <p>Chief Information & Technology Officer at CARE Ratings</p>
                    </div>
                </div>
                </div>
                <div class="cs-card">
                <div class="cs-content">
                    <p>“Netskope has the fuller SSE feature-set, meeting our requirements.” “With Netskope we have the ability to effectively perform real-time Tenant Restrictions for both internal owned O365 tenants and external tenants.”</p>
                    <div class="cs-name tab-mob">
                    <h6>Systems Architect</h6>
                    <p>Large Enterprise Healthcare Company</p>
                    </div>
                </div>
                <div class="cs-reviewer">
                    <div class="cs-anchor">
                    <div class="v3-stacked-tabs__tab-cta "> <span><a href="https://www.netskope.com/customers/national-healthcare-organization"> <img alt="chevron" class="no-lazyload" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron_blue.png"> </a> </span> <span> <a class="v3-stacked-tabs__tab-cta-link " href="https://www.netskope.com/customers/national-healthcare-organization">Read their story</a> </span></div>
                    </div>
                    <div class="cs-name">
                    <h6>Systems Architect</h6>
                    <p>Large Enterprise Healthcare Company</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>`);

        document.querySelector('.v3-reports.light .v3-reports__title h2').innerHTML = `Trusted by the industry's<br>leading authorities`;

        document.querySelector('.v3-reports .v3-reports__reports').insertAdjacentElement('afterend', document.querySelector('.v3-reports .v3-reports__cta'));

        //Product cards added
        document.querySelector('.v3-promo.homepage').insertAdjacentHTML('afterend', `<div class="v3 v3-reports v3-reports-6593cee681481 light">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-12">
                    <div class="v3-reports__top v3-reports__top--no-border">
                        <div class="v3-reports__title">
                            <h2>Products</h2></div>
                    </div>
                </div>
            </div>
            <div id="v3-reports__reports_6593cee681481" class="v3-reports__reports">
                <div class="v3-reports__reports-report">
                    <div class="v3-reports__reports-report-icon "> <img src="https://www.netskope.com/wp-content/uploads/2022/04/security-service-edge-sse-icon-55x55-1.svg" alt="Security Service Edge (SSE) icon"></div>
                    <div class="v3-reports__reports-report-title "> Security Service Edge</div>
                    <div class="v3-reports__reports-report-text "> Netskope Intelligent SSE converges security capabilities into a single cloud platform.</div>
                    <div class="v3-reports__reports-report-cta "> <span><a class="ga__cta" aria-label="Learn more" data-video-id="" href="/products/security-service-edge"> <img alt="chevron" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron.png"> </a> </span> <span> <a data-video-id="" class="ga__cta v3-reports__reports-report-cta-link " href="/products/security-service-edge">Learn more</a> </span></div>
                </div>
                <div class="v3-reports__reports-report ">
                    <div class="v3-reports__reports-report-icon "> <img src="https://www.netskope.com/wp-content/uploads/2022/04/swg-icon-55x55-1.svg" alt="Next Gen Secure Web Gateway icon"></div>
                    <div class="v3-reports__reports-report-title "> Next Gen Secure Web Gateway (SWG)</div>
                    <div class="v3-reports__reports-report-text "> The foundation for SSE web and cloud inline security providing threat and data protection.</div>
                    <div class="v3-reports__reports-report-cta "> <span><a class="ga__cta" aria-label="Learn more" data-video-id="" href="/products/next-gen-swg"> <img alt="chevron" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron.png"> </a> </span> <span> <a data-video-id="" class="ga__cta v3-reports__reports-report-cta-link " href="/products/next-gen-swg">Learn more</a> </span></div>
                </div>
                <div class="v3-reports__reports-report ">
                    <div class="v3-reports__reports-report-icon "> <img src="https://www.netskope.com/wp-content/uploads/2022/04/casb-icon-55.svg" alt="CASB icon"></div>
                    <div class="v3-reports__reports-report-title "> Cloud Access Security Broker (CASB)</div>
                    <div class="v3-reports__reports-report-text "> Confidently adopt cloud applications and services without sacrificing security.</div>
                    <div class="v3-reports__reports-report-cta "> <span><a class="ga__cta" aria-label="Learn more" data-video-id="" href="/products/casb"> <img alt="chevron" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron.png"> </a> </span> <span> <a data-video-id="" class="ga__cta v3-reports__reports-report-cta-link " href="/products/casb">Learn more</a> </span></div>
                </div>
                <div class="v3-reports__reports-report ">
                    <div class="v3-reports__reports-report-icon "> <img src="https://www.netskope.com/wp-content/uploads/2023/08/skopeai-icon-55x55-1.svg" alt="SkopeAI"></div>
                    <div class="v3-reports__reports-report-title "> SkopeAI</div>
                    <div class="v3-reports__reports-report-text "> Automatically adapts to the ever-growing data landscape, including generative AI and new AI-driven attacks.</div>
                    <div class="v3-reports__reports-report-cta "> <span><a class="ga__cta" aria-label="Learn more" data-video-id="" href="/products/skopeai"> <img alt="chevron" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron.png"> </a> </span> <span> <a data-video-id="" class="ga__cta v3-reports__reports-report-cta-link " href="/products/skopeai">Learn more</a> </span></div>
                </div>
                <div class="v3-reports__reports-report ">
                    <div class="v3-reports__reports-report-icon "> <img src="https://www.netskope.com/wp-content/uploads/2022/04/private-access-for-ztna-icon-55x55-1.svg" alt="NPA (ZTNA) icon"></div>
                    <div class="v3-reports__reports-report-title "> Private Access for ZTNA</div>
                    <div class="v3-reports__reports-report-text "> Connect users anywhere to private resources ensuring fast and direct application connectivity and superior user experience.</div>
                    <div class="v3-reports__reports-report-cta "> <span><a class="ga__cta" aria-label="Learn more" data-video-id="" href="/products/private-access"> <img alt="chevron" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron.png"> </a> </span> <span> <a data-video-id="" class="ga__cta v3-reports__reports-report-cta-link " href="/products/private-access">Learn more</a> </span></div>
                </div>
                <div class="v3-reports__reports-report ">
                    <div class="v3-reports__reports-report-icon "> <img src="https://www.netskope.com/wp-content/uploads/2022/04/public-cloud-security-icon-55x55-1.svg" alt="Public Cloud Security icon"></div>
                    <div class="v3-reports__reports-report-title "> Public Cloud Security</div>
                    <div class="v3-reports__reports-report-text "> Gain visibility, control, and compliance across your multi-cloud environment.</div>
                    <div class="v3-reports__reports-report-cta "> <span><a class="ga__cta" aria-label="Learn more" data-video-id="" href="/products/public-cloud-security"> <img alt="chevron" src="https://www.netskope.com/wp-content/themes/netskope/images/v3/round_chevron.png"> </a> </span> <span> <a data-video-id="" class="ga__cta v3-reports__reports-report-cta-link " href="/products/public-cloud-security">Learn more</a> </span></div>
                </div>
            </div>
            <div class="v3-reports__cta "> <a class="ga__cta v3-reports__cta btn-blue " href="https://www.netskope.com/products">See all products</a></div>
        </div>
        </div>`);

        waitForElm('.slick-initialized').then(function (elm) {
            jQuery('.slider-content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: false,
                infinite: true,
                // autoplay: true,
                // autoplaySpeed: 1000,
                centerMode: true,
                asNavFor: '.slider-thumb',
                arrows: false,
            });
            jQuery('.slider-thumb').slick({
                slidesToShow: 'auto',
                slidesToScroll: 4,
                asNavFor: '.slider-content',
                dots: false,
                centerMode: false,
                focusOnSelect: true
            });
        });
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

        if (e.target.className == "spz-input") {
            if (e.target.checked) {
                e.target.closest('.custom-check').classList.add('checked');
            }
            else {
                e.target.closest('.custom-check').classList.remove('checked');
            }
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
