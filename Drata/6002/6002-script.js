// Wait for element to load
document.body.classList.add('spz-6002');

const formIn6001 = setInterval(() => {
    if (document.querySelectorAll('.spz-6001 .hero-section').length > 0) {
        document.querySelector('.spz-6001 .logo-section').remove();
        document.querySelector('.spz-6001 .how-works-section').remove();
        document.querySelector('.spz-6001 .integrations-section').remove();
        document.querySelector('.spz-6001 .review-section').remove();
        document.querySelector('.spz-6001 .footer').remove();

        if (document.body.classList.contains('spz-6001')) {
            document.body.classList.replace('spz-6001', 'spz-6002');
        }

        removeScriptTags();

        // Append new sections to body
        document.querySelector('.hero-section .hero-content.container').removeAttribute('class');
        document.querySelector('.hero-section .header-nav ~ div').setAttribute('class', 'container hero-container');
        document.querySelector('.container.hero-container').insertAdjacentHTML("afterbegin", heroSection());
        document.querySelector('.body-wrapper.hs-page #main-content').insertAdjacentHTML("beforeend", socialProofSection());
        document.querySelector('.body-wrapper.hs-page #main-content').insertAdjacentHTML("beforeend", howItWorksSection());
        document.querySelector('.body-wrapper.hs-page #main-content').insertAdjacentHTML("beforeend", featuresSection());
        document.querySelector('.body-wrapper.hs-page #main-content').insertAdjacentHTML("beforeend", integrationsSection());
        document.querySelector('.body-wrapper.hs-page #main-content').insertAdjacentHTML("beforeend", reviewsSection());
        document.querySelector('.body-wrapper.hs-page #main-content').insertAdjacentHTML("beforeend", footerSection());

        removeStyleTags();

        setTimeout(function () {
            clearInterval(formIn6001);

            if (document.querySelector('#style-6001')) {
                document.querySelector('#style-6001').remove();
            }
        }, 5000);
    }
}, 50);

const formInt6002 = setInterval(() => {
    if (document.querySelectorAll('.hbspt-form form').length > 0) {
        clearInterval(formInt6002);

        // appendInputLabel();
        document.body.classList.add('spz-6002');

        // Set input label
        if (document.querySelectorAll('[name="source__inbound_demo_"] + .hs-label-spz').length > 0) {
            document.querySelector('[name="source__inbound_demo_"] + .hs-label-spz').innerHTML = 'How did you hear about us?*';
            document.querySelector('label#label-demo_product_of_interest-429140d2-bd90-4a8b-a561-5d732c9bd514 + .hs-field-desc').innerHTML = 'What product(s) are you interested in?';
        }

        // Set button label
        // document.querySelector('.hs-button.primary').innerHTML = 'Get Started';
        // document.querySelector('.hs-button.primary').setAttribute('value', 'Get Started');

        // hs-button
        document.querySelector('.hs-button').addEventListener('click', function () {
            const err = setInterval(() => {
                checkError();
                clearInterval(err);
            }, 100);
        });

        // Add field-untouched class on select element
        document.querySelectorAll('select.hs-input').forEach(function (el) {
            if (el.options.length > 0) {
                el.closest('.field').classList.add('field-untouched');
            }
        });

        // Changing field sequence
        let email_el = document.querySelector('.hs_email').closest('fieldset');
        let company_el = document.querySelector('.hs_company').closest('fieldset');
        company_el.before(email_el);

        // Making fields into two columns
        // moveElement('.hs_source__inbound_demo_', '.hbspt-form .form-columns-1');

        document.querySelector('.footer-cookie').addEventListener("click", function (e) {
            document.querySelector('.osano-cm-window__widget').click();
        });

        // Set focus on input
        focusFields();

        removeStyleTags();

        if (document.querySelector('#style-6001')) {
            document.querySelector('#style-6001').remove();
        }
    }
}, 100);

function appendFavicon() {
    document.querySelector('head').insertAdjacentHTML("beforeend", `
        <link rel="shortcut icon" href="https://drata.com/images/favicon.ico">
        <link rel="icon" type="image/png" sizes="256x256" href="https://drata.com/images/favicon-256x256.png">
        <link rel="icon" type="image/png" sizes="48x48" href="https://drata.com/images/favicon-48x48.png">
        <link rel="icon" type="image/png" sizes="32x32" href="https://drata.com/images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="https://drata.com/images/favicon-16x16.png">

        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1683613303/drata/6002/dropdown_arrow-up.svg" as="image">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1682601857/drata/6002/Checkmark-blank.svg" as="image">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1682601858/drata/6002/Checkmark-hover.svg" as="image">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1682601857/drata/6002/Checkmark-bg.svg" as="image">`
    );
}

function appendGTM() {
    document.body.insertAdjacentHTML("afterbegin", `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5K4ZZ96"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`);
}
appendGTM();
appendFavicon();

// Remove all style tags without id in header
function removeStyleTags() {
    document.querySelectorAll('style:not([id])').forEach(function (el) {
        el.remove();
    });

    // Remove link tag which contains main.min.css or Social_follow.min.css in href attribute
    document.querySelectorAll('link').forEach(function (el) {
        if (el.href.indexOf('6001-style.css') > -1 || el.href.indexOf('main.min.css') > -1 || el.href.indexOf('Social_follow.min.css') > -1) {
            el.remove();
        }
    });
}

// Remove all script tags which contains 6002-script.js in src attribute
function removeScriptTags() {
    document.querySelectorAll('script').forEach(function (el) {
        if (el.src.indexOf('6001-script.js') > -1) {
            el.remove();
        }
    });
}

// Create input label with placeholder text
function appendInputLabel() {
    document.querySelectorAll('.hs-input:not([type="checkbox"])').forEach(function (el) {
        const label = document.createElement("label");
        let pLabel = el.placeholder;

        // Add space before last character in string
        // if (el.placeholder && el.placeholder != '') {
        //     pLabel = el.placeholder.slice(0, -1) + ' ' + el.placeholder.slice(-1);
        // }

        // Attach label
        label.innerHTML = pLabel;

        if (!el.hasAttribute('type') && el.options.length > 0) {
            if (el.options[0].text && el.options[0].text != '') {
                // pLabel = el.options[0].text.slice(0, -1) + ' ' + el.options[0].text.slice(-1);
                label.innerHTML = el.options[0].text;
            }
        }
        label.setAttribute('for', el.id);
        label.classList.add('hs-label-spz');
        forClearBitForms()
        el.parentNode.insertBefore(label, el.nextSibling);
    });
}

// On input focus add class on closest parent .field class
function focusFields() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
        // On input focus add .field-focus class on closest parent .field class
        el.addEventListener('focus', function () {
            el.closest('.field').classList.add('field-focus');
            setTimeout(function () {
                el.closest('.field').classList.remove('field-error');
                el.closest('.field').classList.remove('field-untouched');
            }, 100);
        });

        // On input blur remove .field-focus class on closest parent .field class
        el.addEventListener('blur', function () {
            el.closest('.field').classList.remove('field-focus');
            setTimeout(function () {
                checkError();
            }, 100);
        });

        // On select element change remove .field-error class on closest parent .field class
        if (el.tagName == 'SELECT') {
            el.addEventListener('change', function () {
                el.closest('.field').classList.remove('field-error');
            });
        }
    });
}

// Click on 'did you know email address' link in error message
document.addEventListener("click", function (e) {
    const target = e.target.closest(".inputs-list label a");

    if (target) {
        checkError();
    }
});

// Function to add .field-error class on closest parent .field class if .error is exist on .hs-input
function checkError() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
        if (el.closest('.field').querySelector('.error') != null) {
            el.closest('.field').classList.add('field-error');
        } else {
            el.closest('.field').classList.remove('field-error');
        }
    });
    forClearBitForms();
}

// Scroll to element on click
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("get-started-btn")) {
        let scrollOffset = window.innerWidth > 1199 ? 100 : 120;
        if (window.innerWidth > 1199) {
            scrollToElement('.form-wrapper-spz', scrollOffset);
        } else {
            document.querySelector('.form-wrapper-spz').scrollIntoView({ behavior: "smooth" });
        }
    }
});

// Function to Scroll to position using smooth scroll vanilla JS
// target: Element to scroll to
// offset: Offset from the top of the element
function scrollToElement(target, offset) {
    const targetElm = document.querySelector(target);
    const targetElmOffset = targetElm.offsetTop - offset;
    window.scrollTo({
        top: targetElmOffset,
        behavior: 'smooth'
    });
}

// Move element
// sourceElm: Element which we have to move
// targetLoc: New location of an element 
function moveElement(sourceElm, targetLoc) {
    const f = document.createDocumentFragment();
    if (document.querySelector(sourceElm) != null) {
        f.appendChild(document.querySelector(sourceElm));
        document.querySelector(targetLoc).appendChild(f);
    }
}

// Wait for element to load using observer
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


// Hero section
function heroSection() {
    return `<div class="hero-content">
                <h1 class="hc-title"><span>Automate</span> <br class="break-desk" /> and <span>Accelerate</span> Compliance</h1>
                <div class="star-rating dis-flex align-items-center">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1685524763/drata/6002/hero_logo-g2.svg" class="g2-img" alt="G2 Logo" title="G2 Logo" draggable="false">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1685694030/drata/6002/star-orange.svg"
                        class="sr-img" alt="Ratings" title="Ratings" draggable="false">
                    <span class="sr-number"><strong>4.9</strong> (461 reviews)</span>
                </div>

                <div class="list-grp-wrapper">
                    <ul class="list-group">
                        <li class="list-item">
                            <div class="ls-title">Automate Evidence Collection</div>
                            <div class="ls-desc">Collect documentation from your tech stack. 80+ integrations and an
                                open API.</div>
                        </li>
                        <li class="list-item">
                            <div class="ls-title">Frameworks</div>
                            <div class="ls-desc">Automate compliance for 16+ products and frameworks including SOC 2,
                                HIPAA, PCI, GDPR, and more.</div>
                        </li>
                        <li class="list-item">
                            <div class="ls-title">Security Policies</div>
                            <div class="ls-desc">20+ customizable, auditor-approved policies. Streamlined employee
                                signing & documentation.</div>
                        </li>
                    </ul>
                </div>
            </div>`;
}

// Social proof / logo section
function socialProofSection() {
    return `<section class="logo-section">
                <div class="container">
                    <h2 class="sec-title border-title">Join Over <span>3,000</span> Companies Using Drata to Automate Compliance
                    </h2>
                    <div class="ls-logo-group dis-flex flex-wrap justify-content-between">
                        <div class="ls-logo-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/abnormal.svg"
                                class="ls-img" alt="Abnormal" title="Abnormal">
                        </div>
                        <div class="ls-logo-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/aribase.svg"
                                class="ls-img" alt="Airbase" title="Airbase">
                        </div>
                        <div class="ls-logo-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1686811395/drata/6002/logo-superhuman.svg"
                                class="ls-img" alt="SuperHuman" title="SuperHuman">
                        </div>
                        <div class="ls-logo-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/clearbit.svg"
                                class="ls-img" alt="Clearbit" title="Clearbit">
                        </div>
                        <div class="ls-logo-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678534/drata/6001/baboor_hr.svg"
                                class="ls-img" alt="bamboo HR" title="bamboo HR">
                        </div>
                        <div class="ls-logo-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678534/drata/6001/notion.svg"
                                class="ls-img" alt="Notion" title="Notion">
                        </div>
                        <div class="ls-logo-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678535/drata/6001/postman.svg"
                                class="ls-img" alt="Postman" title="Postman">
                        </div>
                        <div class="ls-logo-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/vercel.svg"
                                class="ls-img" alt="Vercel" title="Vercel">
                        </div>
                        <div class="ls-logo-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/lemonade.svg"
                                class="ls-img" alt="Lemonade" title="Lemonade">
                        </div>
                        <div class="ls-logo-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/fivetran.svg"
                                class="ls-img" alt="Fivetran" title="Fivetran">
                        </div>
                        <div class="ls-logo-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/w_vip.svg"
                                class="ls-img" alt="Wordpress VIP" title="Wordpress VIP">
                        </div>
                        <div class="ls-logo-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678537/drata/6001/clearco.svg"
                                class="ls-img" alt="Clearco" title="Clearco">
                        </div>
                    </div>
                </div>
            </section>
            <div class="gradient-separator inverse desk-xl-only"></div>`;
}

// How it works section
function howItWorksSection() {
    return `<section class="how-works-section">
                <div class="container">
                    <h2 class="sec-title border-title">How it Works</h2>
                    <h6 class="sec-sub_title">Drata is designed by compliance experts so you can get compliant fast.</h6>
                    <div class="work-steps dis-flex justify-content-between flex-wrap">
                        <div class="work-step-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6002/connect_to_tech_stack.webp"
                                class="step-img" alt="Connect to Your Tech Stack " title="Connect to Your Tech Stack ">
                            <div class="step-content">
                                <span class="step-number">STEP 1</span>
                                <h6 class="step-title">Connect to Your Tech Stack</h6>
                                <p class="step-info">Drata natively connects to 80+ tools in your tech stack so you can start collecting evidence in minutes.</p>
                            </div>
                        </div>
                        <div class="work-step-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6002/set_policies.webp"
                                class="step-img" alt="Configure Policies" title="Configure Policies">
                            <div class="step-content">
                                <span class="step-number">STEP 2</span>
                                <h6 class="step-title">Configure Policies</h6>
                                <p class="step-info">20+ auditor-approved security policies. Customize, deploy, and document directly on the platform. </p>
                            </div>
                        </div>
                        <div class="work-step-item">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6002/track_progress.webp"
                                class="step-img" alt="Control Process" title="Control Process">
                            <div class="step-content">
                                <span class="step-number">STEP 3</span>
                                <h6 class="step-title">Control Process</h6>
                                <p class="step-info">The audit dashboard shows you exactly what you need to do to get compliant fast.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;
}

// Features section
function featuresSection() {
    return `<section class="feature-section">
                <div class="container">
                    <div class="feature-title-container">
                        <h2 class="feature-title border-title">Features</h2>
                        <p>Everything you need to achieve compliance faster and more cost-effectively.</p>
                    </div>
                    <div class="fs-card-group">
                        <div class="fs-card-item">
                            <div class="img-container">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6002/features-multi_framework_webp.webp"
                                    class="ls-img" alt="Multi-Framework" title="Multi-Framework">
                            </div>
                            <div class="content-container">
                                <h6>Multi-Framework</h6>
                                <p>Automated compliance for 16+ products and frameworks including SOC 2, ISO 27001, HIPAA, GDPR,
                                    & PCI.</p>
                            </div>
                        </div>
                        <div class="fs-card-item">
                            <div class="img-container">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6002/features-automated_evidence_webp.webp"
                                    class="ls-img" alt="Evidence Collection" title="Evidence Collection">
                            </div>
                            <div class="content-container">
                                <h6>Evidence Collection</h6>
                                <p>Collection documentation from your tech stack. Powered by 80+ integrations and an open API.</p>
                            </div>
                        </div>
                        <div class="fs-card-item">
                            <div class="img-container">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6002/features-security_policies_webp.webp"
                                    class="ls-img" alt="Security Policies" title="Security Policies">
                            </div>
                            <div class="content-container">
                                <h6>Security Policies</h6>
                                <p>20+ customizable, auditor-approved <br class="break-desk" /> policies. Streamline employee
                                    signing & documentation.</p>
                            </div>
                        </div>
                        <div class="fs-card-item">
                            <div class="img-container">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6002/features-vendor_management_webp.webp"
                                    class="ls-img" alt="Vendor Management" title="Vendor Management">
                            </div>
                            <div class="content-container">
                                <h6>Vendor Management</h6>
                                <p>Streamline vendor security questionnaires. Store, send, and review answers.</p>
                            </div>
                        </div>
                        <div class="fs-card-item">
                            <div class="img-container">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6002/features-dashboard_webp.webp"
                                    class="ls-img" alt="Dashboard" title="Dashboard">
                            </div>
                            <div class="content-container">
                                <h6>Dashboard</h6>
                                <p>See exactly what is left to do to get compliant. Prioritized task lists.</p>
                            </div>
                        </div>
                        <div class="fs-card-item">
                            <div class="img-container">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6002/features-24_7_monitoring_webp.webp"
                                    class="ls-img" alt="24/7 Monitoring" title="24/7 Monitoring">
                            </div>
                            <div class="content-container">
                                <h6>24/7 Monitoring</h6>
                                <p>Continuous compliance monitoring to identify issues early and stay in compliance.</p>
                            </div>
                        </div>

                        <div class="fs-card-item">
                            <div class="img-container">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6002/features-security_training_webp.webp"
                                    class="ls-img" alt="Security Training" title="Security Training">
                            </div>
                            <div class="content-container">
                                <h6>Security Training</h6>
                                <p>Built-in employee training modules. Automated reminders and documentation of completion.</p>
                            </div>
                        </div>
                        <div class="fs-card-item">
                            <div class="img-container">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6002/features-endpoint_monitoring_webp.webp"
                                    class="ls-img" alt="Endpoint Monitoring" title="Endpoint Monitoring">
                            </div>
                            <div class="content-container">
                                <h6>Endpoint Monitoring</h6>
                                <p>Detect endpoint configuration and automatically create compliance documentation.</p>
                            </div>
                        </div>
                        <div class="fs-card-item">
                            <div class="img-container">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6002/features-experts_assistance_webp.webp"
                                    class="ls-img" alt="Experts Assistance" title="Experts Assistance">
                            </div>
                            <div class="content-container">
                                <h6>Experts Assistance</h6>
                                <p>Step-by-step guidance from our team of compliance experts. 24/5.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="gradient-separator"></div>`;
}

// Reviews section
function reviewsSection() {
    return `<section class="review-section">
                <div class="container">
                    <h2 class="sec-title border-title">See What Our Customers Say About Drata</h2>
                </div>
                <div class="review-slider dis-flex justify-content-between container">
                <div class="review-item-box review-info-box">
                    <div class="review-content">
                    <h4 class="r-title">Excellent</h4>
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/v1681291120/drata/6001/review_star.svg"
                        alt="Rating Stars" title="Rating Stars" class="avg-star-rating">
                    <p class="r-numbers">Based on <span>461</span> reviews</p>
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678527/drata/6001/logo_-_g2.svg" alt="G2"
                        title="G2" class="g2-logo">
                    </div>
                </div>
                <div class="review-item-box">
                    <div class="review-content">
                    <div class="rating dis-flex"><img
                        src="https://res.cloudinary.com/spiralyze/image/upload/v1681291120/drata/6001/review_star.svg"
                        alt="Rating Stars" title="Rating Stars" class="star-rating"></div>
                    <p class="review">Undergoing any audit is a massive lift for those being audited. The entire process is
                        confusing if not done correctly. Drata has made the process simple, easy, and innovative.</p>
                    <h6 class="review-author">Derek E.</h6>
                    </div>
                </div>
                <div class="review-item-box">
                    <div class="review-content">
                    <div class="rating dis-flex"><img
                        src="https://res.cloudinary.com/spiralyze/image/upload/v1681291120/drata/6001/review_star.svg"
                        alt="Rating Stars" title="Rating Stars" class="star-rating"></div>
                    <p class="review">What really sets Drata apart is its ability to simplify and automate the often complex and
                        time-consuming process of compliance.</p>
                    <h6 class="review-author">Greg C.</h6>
                    </div>
                </div>
                <div class="review-item-box">
                    <div class="review-content">
                    <div class="rating dis-flex"><img
                        src="https://res.cloudinary.com/spiralyze/image/upload/v1681291120/drata/6001/review_star.svg"
                        alt="Rating Stars" title="Rating Stars" class="star-rating"></div>
                    <p class="review">From day one, our experience with Drata was enjoyable. They have a very well thought product
                        to help their clients achieve their compliance goals.</p>
                    <h6 class="review-author">Gabriel R.</h6>
                    </div>
                </div>
                </div>
            </section>`;
}

// Footer section
function footerSection() {
    return `<section class="footer">
                <div class="footer-top">
                    <h2 class="sec-title border-title">Ready to Put Compliance on Autopilot?</h2>
                    <button class="get-started-btn">Get Started</button>
                </div>
                <div class="brand-footer container dis-flex flex-wrap justify-content-between">
                    <div class="footer-brand-info">
                        <a href="https://drata.com/"><img
                                src="//res.cloudinary.com/spiralyze/image/upload/v1682676285/drata/4002/custom_assets/Drata-full-wordmark.svg"
                                class="brand-logo" alt="Drata" title="Drata" draggable="false"></a>
                        <p class="brand-desc">Drata is a security and compliance automation platform that continuously monitors and collects evidence of a company&#8217;s security controls, while streamlining workflows to ensure audit-readiness.</p>
                    </div>
                    <div class="brand-social-links dis-flex justify-content-between flex-wrap">
                        <a href="https://www.youtube.com/channel/UCL7xTQRHuxO3M5dHHOjhfMA" target="_blank" class="social-item"
                            rel="noopener">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678527/drata/6001/social_media_-_youtube.svg"
                                alt="YouTube" title="YouTube" class="social-icon">
                        </a>
                        <a href="https://www.linkedin.com/company/drata/" target="_blank" class="social-item" rel="noopener">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678528/drata/6001/social_media_-_linkedin.svg"
                                alt="LinkedIn" title="LinkedIn" class="social-icon">
                        </a>
                        <a href="https://twitter.com/dratahq" target="_blank" class="social-item" rel="noopener">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1680678530/drata/6001/social_media_-_twitter.svg"
                                alt="Twitter" title="Twitter" class="social-icon">
                        </a>
                    </div>
                </div>
                <hr>
                <div class="footer-bottom container dis-flex justify-content-between">
                    <p class="copyright-text">&copy; 2023 Drata Inc. All rights reserved.</p>
                    <div class="footer-legalLinks">
                        <a href="https://drata.com/privacy">Privacy Policy</a>
                        <a href="https://drata.com/gdprdrata">GDPR</a>
                        <a href="https://drata.com/terms">Terms</a>
                        <a href="https://drata.com/cookies">Cookies</a>
                        <a class="footer-cookie">Cookie Preferences</a>
                        <a href="https://drata.com/responsible-disclosure">Disclosure Policy</a>
                        <a href="https://drata.com/sub-processors">Sub-processors</a>
                        <a href="https://drata.com/data-processing-addendum">Data Processing Addendum</a>
                    </div>
                </div>
            </section>`;
}

// Integrations section
function integrationsSection() {
    return `<section class="integrations-section"><div class="container"><h2 class="sec-title border-title">80+ Native Integrations</h2></div><div class="integrations-logo-slider"><div class="logo-slider slider-1"><div class="marquee"><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-05.svg" alt="Microsoft Azure Icon" title="Microsoft Azure Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://zenefits.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5HEz4y1udEGYnO0eibspYk/fbb47801b6a3cd023a57cf2b2cd1e051/Zenefits.svg" alt="Zenefits Icon" title="Zenefits Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://slack.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-03.svg" alt="Slack Icon" title="Slack Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.vmware.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6ghWRvTfUjV2flZvxovptR/312d823d4429ce594c8afc2827a70a8d/VMWare.svg" alt="VMWare Icon" title="VMWare Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://trinet.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2FMVuM0KCs7RsDr2IPjhqF/61121febfba493b32b1f6c5f900f9209/Trinet.svg" alt="TriNet Icon" title="TriNet Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://trello.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5zMuHhR3E2aiZfqTkO1ed3/e85334a72dcecdee984c52a57d7a3378/Trello.svg" alt="Trello Icon" title="Trello Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"><img src="https://images.ctfassets.net/x3hoqyjm3c27/1ny04CQJN3FOZdTp89pxZw/7d01cb80b89b053898d735af71cf1f58/Teams.svg" alt="Teams Icon" title="Teams Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://targetprocess.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/j17tLavKCokadNZep2HWw/f6b876dd195577e7762ace18b71485f2/Target_Process.svg" alt="Target Process Icon" title="Target Process Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://github.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/eoDwv9YT0L0xVLBwOs7jz/bf8417fb445a57d05c9a07b1e2d4795c/GitHub.svg" alt="GitHub Icon" title="GitHub Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://trinet.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2FMVuM0KCs7RsDr2IPjhqF/61121febfba493b32b1f6c5f900f9209/Trinet.svg" alt="TriNet Icon" title="TriNet Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://zenefits.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5HEz4y1udEGYnO0eibspYk/fbb47801b6a3cd023a57cf2b2cd1e051/Zenefits.svg" alt="Zenefits Icon" title="Zenefits Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://kandji.io"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6jfWKLq2FLiLi8yFMFKToJ/6e943847c017289439b18832866c27e5/Kandji.svg" alt="Kandji Icon" title="Kandji Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://trello.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5zMuHhR3E2aiZfqTkO1ed3/e85334a72dcecdee984c52a57d7a3378/Trello.svg" alt="Trello Icon" title="Trello Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://targetprocess.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/j17tLavKCokadNZep2HWw/f6b876dd195577e7762ace18b71485f2/Target_Process.svg" alt="Target Process Icon" title="Target Process Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://asana.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4AywjJ45ChGvt914VTVRg0/d3668c690f0579ace0a8ec43dd408f93/Asana.svg" alt="Asana Icon" title="Asana Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.pivotaltracker.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7b5hRZXKShzNIUifYRWFRj/03f87d99e7fd406ec78d3fbc144be67d/Pivotal_Tracker.svg" alt="Pivotal Tracker Icon" title="Pivotal Tracker Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://slack.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3NsOT2ldsxJ7lJybdv0Lvu/8de68801d5ae5de21c94380e38ff562e/Slack.svg" alt="Slack Icon" title="Slack Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://hibob.com"><img src="https://drata.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fx3hoqyjm3c27%2F5ZEwcHDFb0PI7da7bhW1ZD%2F9c92e77d9797f3b095d1de6a9e9452b7%2Fbob.jpg&amp;w=1920&amp;q=75" alt="bob" title="bob" class="logo-media"></a></div><div class="logo-item"><a href="https://jamf.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/72w2ysC4mUb1Hk0jrBEPA4/d8702afcac5c51a1b89867eb06d274f9/Jamf.svg" alt="Jamf Icon" title="Jamf Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/en-us/services/devops/boards"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2t0Y8KvZrGmppkyjhU745v/1f4bdfa327d4ad8c08b449cf92b77a93/Azure_Boards.svg" alt="Azure Boards Icon" title="Azure Boards Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://hrcloud.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3niLnSkUmuV4GU0B9dBXk3/e8159c4ed82c5a15eb03e333375944ab/HR_Cloud.svg" alt="HR Cloud" title="HR Cloud" class="logo-media"></a></div><div class="logo-item"><a href="https://partner.microsoft.com/solutions/microsoft-intune"><img src="https://images.ctfassets.net/x3hoqyjm3c27/1MuvHxX2pPoaPF6sjRvwyq/eb9f73b61d3fdba38933876f22fd58a1/Microsoft_Intune.svg" alt="Microsoft Intune Icon" title="Microsoft Intune Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://jumpcloud.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7EU4m6XXeeC3VqRlzP2O84/5d5915c803e81fa2ef5b38969045c94e/Jumpcloud.svg" alt="Jumpcloud Icon" title="Jumpcloud Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://fibery.io"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2RxrtWFRDB4cQXF0KR4z6j/5f5b7cd1cee11f4f66e6b915a28fdbc7/Fibery.svg" alt="Fibery Icon" title="Fibery Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.curricula.com/Drata"><img src="https://images.ctfassets.net/x3hoqyjm3c27/ENF4IzawKtDhHjzBXV1LZ/1de34620ae2d562f86353ad39ecdd511/Curricula.svg" alt="Curricula Icon" title="Curricula Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://aws.amazon.com/codecommit"><img src="https://images.ctfassets.net/x3hoqyjm3c27/1mpnz9ejTuF3q3Ok7GSleB/a3af3897b5aeeee16d57b080fd9b79cf/AWS_CodeCommit.svg" alt="AWS CodeCommit Icon" title="AWS CodeCommit Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4c8ykyQP5mIyBUWEQATGsT/50ed2825a414682d223f4fe156a0b9d6/Microsoft_ADFS.svg" alt="Microsoft ADFS Icon" title="Microsoft ADFS Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.vmware.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6ghWRvTfUjV2flZvxovptR/312d823d4429ce594c8afc2827a70a8d/VMWare.svg" alt="VMWare Icon" title="VMWare Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://support.google.com/a/answer/6087519?hl=en"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2muiSD2rMJDxJt19qA53Rb/ac724303a51a1014b7a7ff7c19b8d79a/Google_SAML.svg" alt="Google SAML Icon" title="Google SAML Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.miniorange.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2Nc97XsYLSORu06R2FGYYk/87a72747caf927986ee7bc69d1a35d24/MiniOrange.svg" alt="MiniOrange Icon" title="MiniOrange Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.hexnode.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4bkvc72qa3YJuR40iitlbX/a1a728b12f0ebe42dda84f6bac541202/Hexnode.svg" alt="Hexnode Icon" title="Hexnode Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.adp.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/1TSBbV829d4hJPdotTfqoW/a5b46b7040944f5fca46f416fb5db83d/ADP.svg" alt="ADP" title="ADP" class="logo-media"></a></div><div class="logo-item"><a href="https://duo.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4rxkNkFgCNGZIjutTkMBIy/192c2bdce6a3ab00333b710e43deb06c/Duo.svg" alt="Duo Icon" title="Duo Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.keycloak.org"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5yUJZdVNKbLo3AGJWFN6gR/517e8f24323002ddee25b9fb23314860/Keycloak.svg" alt="Keycloak Icon" title="Keycloak Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.idmobile.co.uk/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-07.svg" alt="ID Mobile Icon" title="ID Mobile Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.oracle.com/cloud"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3HFGxQBF3smp9CZf2vpGvI/7e70fab8fc11370a82a620dbece09116/Oracle.svg" alt="Oracle-Cloud" title="Oracle-Cloud" class="logo-media"></a></div><div class="logo-item"><a href="https://www.microfocus.com/en-us/cyberres/identity-access-management"><img src="https://images.ctfassets.net/x3hoqyjm3c27/78jxiiurk8VxZmOGPJkT5i/21cd094590a99033c7c9d8443512642d/NetIQ.svg" alt="NetIQ Icon" title="NetIQ Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.okta.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-06.svg" alt="Octa Icon" title="Octa Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://slack.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-03.svg" alt="Slack Icon" title="Slack Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.cloudflare.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/mWJNtbGYfotV84jbwWexJ/8bf2f96e13b9c95dae9d32d26abe9b28/Cloudflare.svg" alt="Cloudflare Icon" title="Cloudflare Icon" class="logo-media"></a></div></div><div class="marquee"><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-05.svg" alt="Microsoft Azure Icon" title="Microsoft Azure Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://zenefits.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5HEz4y1udEGYnO0eibspYk/fbb47801b6a3cd023a57cf2b2cd1e051/Zenefits.svg" alt="Zenefits Icon" title="Zenefits Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://slack.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-03.svg" alt="Slack Icon" title="Slack Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.vmware.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6ghWRvTfUjV2flZvxovptR/312d823d4429ce594c8afc2827a70a8d/VMWare.svg" alt="VMWare Icon" title="VMWare Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://trinet.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2FMVuM0KCs7RsDr2IPjhqF/61121febfba493b32b1f6c5f900f9209/Trinet.svg" alt="TriNet Icon" title="TriNet Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://trello.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5zMuHhR3E2aiZfqTkO1ed3/e85334a72dcecdee984c52a57d7a3378/Trello.svg" alt="Trello Icon" title="Trello Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"><img src="https://images.ctfassets.net/x3hoqyjm3c27/1ny04CQJN3FOZdTp89pxZw/7d01cb80b89b053898d735af71cf1f58/Teams.svg" alt="Teams Icon" title="Teams Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://targetprocess.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/j17tLavKCokadNZep2HWw/f6b876dd195577e7762ace18b71485f2/Target_Process.svg" alt="Target Process Icon" title="Target Process Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://github.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/eoDwv9YT0L0xVLBwOs7jz/bf8417fb445a57d05c9a07b1e2d4795c/GitHub.svg" alt="GitHub Icon" title="GitHub Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://trinet.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2FMVuM0KCs7RsDr2IPjhqF/61121febfba493b32b1f6c5f900f9209/Trinet.svg" alt="TriNet Icon" title="TriNet Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://zenefits.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5HEz4y1udEGYnO0eibspYk/fbb47801b6a3cd023a57cf2b2cd1e051/Zenefits.svg" alt="Zenefits Icon" title="Zenefits Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://kandji.io"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6jfWKLq2FLiLi8yFMFKToJ/6e943847c017289439b18832866c27e5/Kandji.svg" alt="Kandji Icon" title="Kandji Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://trello.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5zMuHhR3E2aiZfqTkO1ed3/e85334a72dcecdee984c52a57d7a3378/Trello.svg" alt="Trello Icon" title="Trello Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://targetprocess.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/j17tLavKCokadNZep2HWw/f6b876dd195577e7762ace18b71485f2/Target_Process.svg" alt="Target Process Icon" title="Target Process Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://asana.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4AywjJ45ChGvt914VTVRg0/d3668c690f0579ace0a8ec43dd408f93/Asana.svg" alt="Asana Icon" title="Asana Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.pivotaltracker.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7b5hRZXKShzNIUifYRWFRj/03f87d99e7fd406ec78d3fbc144be67d/Pivotal_Tracker.svg" alt="Pivotal Tracker Icon" title="Pivotal Tracker Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://slack.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3NsOT2ldsxJ7lJybdv0Lvu/8de68801d5ae5de21c94380e38ff562e/Slack.svg" alt="Slack Icon" title="Slack Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://hibob.com"><img src="https://drata.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fx3hoqyjm3c27%2F5ZEwcHDFb0PI7da7bhW1ZD%2F9c92e77d9797f3b095d1de6a9e9452b7%2Fbob.jpg&amp;w=1920&amp;q=75" alt="bob" title="bob" class="logo-media"></a></div><div class="logo-item"><a href="https://jamf.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/72w2ysC4mUb1Hk0jrBEPA4/d8702afcac5c51a1b89867eb06d274f9/Jamf.svg" alt="Jamf Icon" title="Jamf Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/en-us/services/devops/boards"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2t0Y8KvZrGmppkyjhU745v/1f4bdfa327d4ad8c08b449cf92b77a93/Azure_Boards.svg" alt="Azure Boards Icon" title="Azure Boards Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://hrcloud.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3niLnSkUmuV4GU0B9dBXk3/e8159c4ed82c5a15eb03e333375944ab/HR_Cloud.svg" alt="HR Cloud" title="HR Cloud" class="logo-media"></a></div><div class="logo-item"><a href="https://partner.microsoft.com/solutions/microsoft-intune"><img src="https://images.ctfassets.net/x3hoqyjm3c27/1MuvHxX2pPoaPF6sjRvwyq/eb9f73b61d3fdba38933876f22fd58a1/Microsoft_Intune.svg" alt="Microsoft Intune Icon" title="Microsoft Intune Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://jumpcloud.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7EU4m6XXeeC3VqRlzP2O84/5d5915c803e81fa2ef5b38969045c94e/Jumpcloud.svg" alt="Jumpcloud Icon" title="Jumpcloud Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://fibery.io"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2RxrtWFRDB4cQXF0KR4z6j/5f5b7cd1cee11f4f66e6b915a28fdbc7/Fibery.svg" alt="Fibery Icon" title="Fibery Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.curricula.com/Drata"><img src="https://images.ctfassets.net/x3hoqyjm3c27/ENF4IzawKtDhHjzBXV1LZ/1de34620ae2d562f86353ad39ecdd511/Curricula.svg" alt="Curricula Icon" title="Curricula Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://aws.amazon.com/codecommit"><img src="https://images.ctfassets.net/x3hoqyjm3c27/1mpnz9ejTuF3q3Ok7GSleB/a3af3897b5aeeee16d57b080fd9b79cf/AWS_CodeCommit.svg" alt="AWS CodeCommit Icon" title="AWS CodeCommit Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4c8ykyQP5mIyBUWEQATGsT/50ed2825a414682d223f4fe156a0b9d6/Microsoft_ADFS.svg" alt="Microsoft ADFS Icon" title="Microsoft ADFS Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.vmware.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6ghWRvTfUjV2flZvxovptR/312d823d4429ce594c8afc2827a70a8d/VMWare.svg" alt="VMWare Icon" title="VMWare Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://support.google.com/a/answer/6087519?hl=en"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2muiSD2rMJDxJt19qA53Rb/ac724303a51a1014b7a7ff7c19b8d79a/Google_SAML.svg" alt="Google SAML Icon" title="Google SAML Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.miniorange.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2Nc97XsYLSORu06R2FGYYk/87a72747caf927986ee7bc69d1a35d24/MiniOrange.svg" alt="MiniOrange Icon" title="MiniOrange Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.hexnode.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4bkvc72qa3YJuR40iitlbX/a1a728b12f0ebe42dda84f6bac541202/Hexnode.svg" alt="Hexnode Icon" title="Hexnode Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.adp.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/1TSBbV829d4hJPdotTfqoW/a5b46b7040944f5fca46f416fb5db83d/ADP.svg" alt="ADP" title="ADP" class="logo-media"></a></div><div class="logo-item"><a href="https://duo.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4rxkNkFgCNGZIjutTkMBIy/192c2bdce6a3ab00333b710e43deb06c/Duo.svg" alt="Duo Icon" title="Duo Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.keycloak.org"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5yUJZdVNKbLo3AGJWFN6gR/517e8f24323002ddee25b9fb23314860/Keycloak.svg" alt="Keycloak Icon" title="Keycloak Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.idmobile.co.uk/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-07.svg" alt="ID Mobile Icon" title="ID Mobile Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.oracle.com/cloud"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3HFGxQBF3smp9CZf2vpGvI/7e70fab8fc11370a82a620dbece09116/Oracle.svg" alt="Oracle-Cloud" title="Oracle-Cloud" class="logo-media"></a></div><div class="logo-item"><a href="https://www.microfocus.com/en-us/cyberres/identity-access-management"><img src="https://images.ctfassets.net/x3hoqyjm3c27/78jxiiurk8VxZmOGPJkT5i/21cd094590a99033c7c9d8443512642d/NetIQ.svg" alt="NetIQ Icon" title="NetIQ Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.okta.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-06.svg" alt="Octa Icon" title="Octa Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://slack.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-03.svg" alt="Slack Icon" title="Slack Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.cloudflare.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/mWJNtbGYfotV84jbwWexJ/8bf2f96e13b9c95dae9d32d26abe9b28/Cloudflare.svg" alt="Cloudflare Icon" title="Cloudflare Icon" class="logo-media"></a></div></div></div><div class="logo-slider slider-2"><div class="marquee"><div class="logo-item"><a href="https://www.classlink.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2z8B1MBnbJ57JJnzLwzQzO/937956a7bff57b6f36f1566d4b0cc27f/ClassLink.svg" alt="ClassLink Icon" title="ClassLink Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.cyberark.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6BucdBQzl1ifxDbcQ74yxW/0dfda945e8b6ddfb603fb8b9e3d02f03/Cyberark.svg" alt="CyberArk Icon" title="CyberArk Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.salesforce.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7scZzeKmdkiEU8zPdfyIwG/4ed43e22fd4eb785e6878f0b80d278fb/Salesforce.svg" alt="Salesforce Icon" title="Salesforce Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.datadoghq.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/10U7tHmGPv76JdPlnD7Tl9/8dff4d600dad28410e10df4883738784/Datadog.svg" alt="Datadog Icon" title="Datadog Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.docusign.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2lKF75KyDJq20zRFvOJfqt/9cbfd0601957e871237807d10d7656c8/Docusign2.svg" alt="Docusign Icon" title="Docusign Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.knowbe4.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6Yp68cE1DWONMFujzRpDS7/ef9c94f72a78b1981b0d247dede0fe3d/KnowBe4.svg" alt="KnowBe4 Icon" title="KnowBe4 Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.idmobile.co.uk/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-07.svg" alt="ID Mobile Icon" title="ID Mobile Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://asana.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384451/drata/6001/Logo-New-08.svg" alt="Asana Icon" title="Asana Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://aws.amazon.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2PLTU1dIjdttcowa2vximY/fd2d3b006dc7352e72dc4f2eda03a429/AWS.svg" alt="AWS Integration Icon" title="AWS Integration Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.office.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7F75j5NuQNUiyaUf3jp2uA/59a6c87062bec3144d1034119c71465f/Office365.svg" alt="Office365 Icon" title="Office365 Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://cloud.google.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-01.svg" alt="Google Cloud Icon" title="Google Cloud Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.atlassian.com/software/jira"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-02.svg" alt="Jira Cloud Icon" title="Jira Cloud Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.heroku.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5tV8ZcXcsy0znbf9o49tr3/26c77c96cfdead9b454232768b200d9b/Heroku.svg" alt="Heroku Icon" title="Heroku Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.mongodb.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5r9v2xXxffZvpImpVXTFMH/fb3ed22ea983ace1110e558ed3b7f72d/MongoDB.svg" alt="MongoDB Icon" title="MongoDB Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://cloud.google.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg" alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg" alt="Azure Icon" title="Azure Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gusto.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/142KAgkI9ALVWSvbrXR3aI/6ab36ae718c2ba4c58ef0442a6ee16fd/Gusto.svg" alt="Gusto Icon" title="Gusto Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://rippling.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4GyKiQzxdxJHMzrE6b3W8v/90c00285a1091a94b54ca48bc4f56101/Rippling.svg" alt="Rippling Icon" title="Rippling Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://bamboohr.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4GQVsp96tBxfx9CTU7Zdft/219ab2a368e64bff04bf20dcae7aa35b/BambooHR.svg" alt="BambooHR Icon" title="BambooHR Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://justworks.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6pnkAjBGmdFrvrnDmvvrXC/c6b06dfce807a2e5bdef640870d9a8d6/Justworks.svg" alt="Justworks Icon" title="Justworks Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://linear.app/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/29qH7phJuVe2SWXafNTksn/c9bfd7313eb8429c7de7b40238d56ed0/Linear.svg" alt="Linear Icon" title="Linear Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gitlab.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg" alt="GitLab Icon" title="GitLab Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://github.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/eoDwv9YT0L0xVLBwOs7jz/bf8417fb445a57d05c9a07b1e2d4795c/GitHub.svg" alt="GitHub Icon" title="GitHub Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.freshworks.com/hrms"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4JS6qX6NywCVe3T9xOw5wd/a11ee331c1a035f8fd1eb36ace8ad876/Freshteam.svg" alt="Freshteam Icon" title="Freshteam Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://cloud.google.com/identity"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5RPgBnW5vJzrKaFLddgw60/c6b426ad755118b9e0fb1cbeb9b707d2/Google_Cloud_Identity.svg" alt="Google Cloud Identity Icon" title="Google Cloud Identity Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gitlab.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg" alt="GitLab Icon" title="GitLab Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://bitbucket.org/product"><img src="https://images.ctfassets.net/x3hoqyjm3c27/9TEURxCRYNYCcRVVQ0SY4/e950c12488f77d93f23f37089d7b6abf/Bitbucket.svg" alt="Bitbucket Icon" title="Bitbucket Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://auth0.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/24MseNidVOQVfs04FLVxDM/47e42cddadcbda5b0ef72c28d7daa209/Auth0.svg" alt="Auth0 Icon" title="Auth0 Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://okta.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/27gogN0UNqQlGz6Fa6e7QI/43ca209eeda1f202c610f1339c4079e5/Okta_Icon.svg" alt="Okta Icon" title="Okta Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/w79FmT6REFNnkaAXhiNdo/a54280fc4703de7cd8deecb8668ff262/Azure_Active_Directory.svg" alt="Azure Active Directory Icon" title="Azure Active Directory Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/en-us/services/devops"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3ihf8MiGyMaP27hzSnHHis/0ab7c9369f2eb86a3390dafd34971b2b/Azure_DevOps.svg" alt="Azure DevOps Icon" title="Azure DevOps Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.atlassian.com/software/jira"><img src="https://images.ctfassets.net/x3hoqyjm3c27/1tL8t8RgViv0sdi2pj4OYh/15089b58cbde25dd071b8e07b0419e60/Jira.svg" alt="Jira Icon" title="Jira Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://certn.co/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5pc1bJEsE7xMYZoTE7W1E2/df8a5ffb9b5d64006694ffd431d65622/Certn.svg" alt="Certn Icon" title="Certn Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://karmacheck.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3AMXwTyew7bWlGYY3I3oKm/df28f542a9268c8e2524fdde93cd817e/Karmacheck.svg" alt="Karmacheck Icon" title="Karmacheck Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.onelogin.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/46l8F2OYzzieehKBFbh0iF/c4f13fe0f926448644d2164916cdbb4b/Onelogin.svg" alt="Onelogin Icon" title="Onelogin Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-05.svg" alt="Microsoft Azure Icon" title="Microsoft Azure Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://shortcut.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4bgLwZHGFLGcSnfcZ4LNO8/062526c303724042e5b45815c3bbf95f/Shortcut-1.svg" alt="Shortcut Icon" title="Shortcut Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://clickup.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4SgO0NVAIKyeOC0Gj2rx6s/0c9ae8b96975cbd6af0681596e8a2d7e/ClickUp.svg" alt="ClickUp Icon" title="ClickUp Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://checkr.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6EXzsCr6EEAxfj1cqBKJjO/6dcf402735156c2f495b31e18b11ea57/Checkr.svg" alt="Checkr Icon" title="Checkr Icon" class="logo-media"></a></div></div><div class="marquee"><div class="logo-item"><a href="https://www.classlink.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2z8B1MBnbJ57JJnzLwzQzO/937956a7bff57b6f36f1566d4b0cc27f/ClassLink.svg" alt="ClassLink Icon" title="ClassLink Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.cyberark.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6BucdBQzl1ifxDbcQ74yxW/0dfda945e8b6ddfb603fb8b9e3d02f03/Cyberark.svg" alt="CyberArk Icon" title="CyberArk Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.salesforce.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7scZzeKmdkiEU8zPdfyIwG/4ed43e22fd4eb785e6878f0b80d278fb/Salesforce.svg" alt="Salesforce Icon" title="Salesforce Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.datadoghq.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/10U7tHmGPv76JdPlnD7Tl9/8dff4d600dad28410e10df4883738784/Datadog.svg" alt="Datadog Icon" title="Datadog Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.docusign.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2lKF75KyDJq20zRFvOJfqt/9cbfd0601957e871237807d10d7656c8/Docusign2.svg" alt="Docusign Icon" title="Docusign Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.knowbe4.com"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6Yp68cE1DWONMFujzRpDS7/ef9c94f72a78b1981b0d247dede0fe3d/KnowBe4.svg" alt="KnowBe4 Icon" title="KnowBe4 Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.idmobile.co.uk/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-07.svg" alt="ID Mobile Icon" title="ID Mobile Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://asana.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384451/drata/6001/Logo-New-08.svg" alt="Asana Icon" title="Asana Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://aws.amazon.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2PLTU1dIjdttcowa2vximY/fd2d3b006dc7352e72dc4f2eda03a429/AWS.svg" alt="AWS Integration Icon" title="AWS Integration Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.office.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7F75j5NuQNUiyaUf3jp2uA/59a6c87062bec3144d1034119c71465f/Office365.svg" alt="Office365 Icon" title="Office365 Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://cloud.google.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-01.svg" alt="Google Cloud Icon" title="Google Cloud Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.atlassian.com/software/jira"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-02.svg" alt="Jira Cloud Icon" title="Jira Cloud Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.heroku.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5tV8ZcXcsy0znbf9o49tr3/26c77c96cfdead9b454232768b200d9b/Heroku.svg" alt="Heroku Icon" title="Heroku Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.mongodb.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5r9v2xXxffZvpImpVXTFMH/fb3ed22ea983ace1110e558ed3b7f72d/MongoDB.svg" alt="MongoDB Icon" title="MongoDB Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://cloud.google.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg" alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg" alt="Azure Icon" title="Azure Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gusto.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/142KAgkI9ALVWSvbrXR3aI/6ab36ae718c2ba4c58ef0442a6ee16fd/Gusto.svg" alt="Gusto Icon" title="Gusto Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://rippling.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4GyKiQzxdxJHMzrE6b3W8v/90c00285a1091a94b54ca48bc4f56101/Rippling.svg" alt="Rippling Icon" title="Rippling Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://bamboohr.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4GQVsp96tBxfx9CTU7Zdft/219ab2a368e64bff04bf20dcae7aa35b/BambooHR.svg" alt="BambooHR Icon" title="BambooHR Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://justworks.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6pnkAjBGmdFrvrnDmvvrXC/c6b06dfce807a2e5bdef640870d9a8d6/Justworks.svg" alt="Justworks Icon" title="Justworks Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://linear.app/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/29qH7phJuVe2SWXafNTksn/c9bfd7313eb8429c7de7b40238d56ed0/Linear.svg" alt="Linear Icon" title="Linear Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gitlab.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg" alt="GitLab Icon" title="GitLab Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://github.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/eoDwv9YT0L0xVLBwOs7jz/bf8417fb445a57d05c9a07b1e2d4795c/GitHub.svg" alt="GitHub Icon" title="GitHub Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.freshworks.com/hrms"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4JS6qX6NywCVe3T9xOw5wd/a11ee331c1a035f8fd1eb36ace8ad876/Freshteam.svg" alt="Freshteam Icon" title="Freshteam Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://cloud.google.com/identity"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5RPgBnW5vJzrKaFLddgw60/c6b426ad755118b9e0fb1cbeb9b707d2/Google_Cloud_Identity.svg" alt="Google Cloud Identity Icon" title="Google Cloud Identity Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gitlab.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg" alt="GitLab Icon" title="GitLab Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://bitbucket.org/product"><img src="https://images.ctfassets.net/x3hoqyjm3c27/9TEURxCRYNYCcRVVQ0SY4/e950c12488f77d93f23f37089d7b6abf/Bitbucket.svg" alt="Bitbucket Icon" title="Bitbucket Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://auth0.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/24MseNidVOQVfs04FLVxDM/47e42cddadcbda5b0ef72c28d7daa209/Auth0.svg" alt="Auth0 Icon" title="Auth0 Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://okta.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/27gogN0UNqQlGz6Fa6e7QI/43ca209eeda1f202c610f1339c4079e5/Okta_Icon.svg" alt="Okta Icon" title="Okta Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/w79FmT6REFNnkaAXhiNdo/a54280fc4703de7cd8deecb8668ff262/Azure_Active_Directory.svg" alt="Azure Active Directory Icon" title="Azure Active Directory Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/en-us/services/devops"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3ihf8MiGyMaP27hzSnHHis/0ab7c9369f2eb86a3390dafd34971b2b/Azure_DevOps.svg" alt="Azure DevOps Icon" title="Azure DevOps Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.atlassian.com/software/jira"><img src="https://images.ctfassets.net/x3hoqyjm3c27/1tL8t8RgViv0sdi2pj4OYh/15089b58cbde25dd071b8e07b0419e60/Jira.svg" alt="Jira Icon" title="Jira Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://certn.co/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5pc1bJEsE7xMYZoTE7W1E2/df8a5ffb9b5d64006694ffd431d65622/Certn.svg" alt="Certn Icon" title="Certn Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://karmacheck.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3AMXwTyew7bWlGYY3I3oKm/df28f542a9268c8e2524fdde93cd817e/Karmacheck.svg" alt="Karmacheck Icon" title="Karmacheck Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.onelogin.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/46l8F2OYzzieehKBFbh0iF/c4f13fe0f926448644d2164916cdbb4b/Onelogin.svg" alt="Onelogin Icon" title="Onelogin Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-05.svg" alt="Microsoft Azure Icon" title="Microsoft Azure Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://shortcut.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4bgLwZHGFLGcSnfcZ4LNO8/062526c303724042e5b45815c3bbf95f/Shortcut-1.svg" alt="Shortcut Icon" title="Shortcut Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://clickup.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4SgO0NVAIKyeOC0Gj2rx6s/0c9ae8b96975cbd6af0681596e8a2d7e/ClickUp.svg" alt="ClickUp Icon" title="ClickUp Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://checkr.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6EXzsCr6EEAxfj1cqBKJjO/6dcf402735156c2f495b31e18b11ea57/Checkr.svg" alt="Checkr Icon" title="Checkr Icon" class="logo-media"></a></div></div></div><div class="logo-slider slider-3"><div class="marquee"><div class="logo-item"><a href="https://www.classlink.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2z8B1MBnbJ57JJnzLwzQzO/937956a7bff57b6f36f1566d4b0cc27f/ClassLink.svg" alt="ClassLink Icon" title="ClassLink Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.cyberark.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6BucdBQzl1ifxDbcQ74yxW/0dfda945e8b6ddfb603fb8b9e3d02f03/Cyberark.svg" alt="CyberArk Icon" title="CyberArk Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.salesforce.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7scZzeKmdkiEU8zPdfyIwG/4ed43e22fd4eb785e6878f0b80d278fb/Salesforce.svg" alt="Salesforce Icon" title="Salesforce Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.datadoghq.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/10U7tHmGPv76JdPlnD7Tl9/8dff4d600dad28410e10df4883738784/Datadog.svg" alt="Datadog Icon" title="Datadog Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.docusign.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2lKF75KyDJq20zRFvOJfqt/9cbfd0601957e871237807d10d7656c8/Docusign2.svg" alt="Docusign Icon" title="Docusign Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.knowbe4.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6Yp68cE1DWONMFujzRpDS7/ef9c94f72a78b1981b0d247dede0fe3d/KnowBe4.svg" alt="KnowBe4 Icon" title="KnowBe4 Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.idmobile.co.uk/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-07.svg" alt="ID Mobile Icon" title="ID Mobile Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://asana.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384451/drata/6001/Logo-New-08.svg" alt="Asana Icon" title="Asana Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://aws.amazon.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2PLTU1dIjdttcowa2vximY/fd2d3b006dc7352e72dc4f2eda03a429/AWS.svg" alt="AWS Integration Icon" title="AWS Integration Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.office.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7F75j5NuQNUiyaUf3jp2uA/59a6c87062bec3144d1034119c71465f/Office365.svg" alt="Office365 Icon" title="Office365 Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://cloud.google.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg" alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"></a></div><div class="logo-item"><a class="https://www.atlassian.com/software/jira"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-02.svg" alt="Jira Cloud Icon" title="Jira Cloud Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.heroku.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5tV8ZcXcsy0znbf9o49tr3/26c77c96cfdead9b454232768b200d9b/Heroku.svg" alt="Heroku Icon" title="Heroku Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.mongodb.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5r9v2xXxffZvpImpVXTFMH/fb3ed22ea983ace1110e558ed3b7f72d/MongoDB.svg" alt="MongoDB Icon" title="MongoDB Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://cloud.google.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg" alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg" alt="Azure Icon" title="Azure Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gusto.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/142KAgkI9ALVWSvbrXR3aI/6ab36ae718c2ba4c58ef0442a6ee16fd/Gusto.svg" alt="Gusto Icon" title="Gusto Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://rippling.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4GyKiQzxdxJHMzrE6b3W8v/90c00285a1091a94b54ca48bc4f56101/Rippling.svg" alt="Rippling Icon" title="Rippling Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://bamboohr.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4GQVsp96tBxfx9CTU7Zdft/219ab2a368e64bff04bf20dcae7aa35b/BambooHR.svg" alt="BambooHR Icon" title="BambooHR Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://justworks.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6pnkAjBGmdFrvrnDmvvrXC/c6b06dfce807a2e5bdef640870d9a8d6/Justworks.svg" alt="Justworks Icon" title="Justworks Icon" class="logo-media"></a></div></div><div class="marquee"><div class="logo-item"><a href="https://www.classlink.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2z8B1MBnbJ57JJnzLwzQzO/937956a7bff57b6f36f1566d4b0cc27f/ClassLink.svg" alt="ClassLink Icon" title="ClassLink Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.cyberark.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6BucdBQzl1ifxDbcQ74yxW/0dfda945e8b6ddfb603fb8b9e3d02f03/Cyberark.svg" alt="CyberArk Icon" title="CyberArk Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.salesforce.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7scZzeKmdkiEU8zPdfyIwG/4ed43e22fd4eb785e6878f0b80d278fb/Salesforce.svg" alt="Salesforce Icon" title="Salesforce Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.datadoghq.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/10U7tHmGPv76JdPlnD7Tl9/8dff4d600dad28410e10df4883738784/Datadog.svg" alt="Datadog Icon" title="Datadog Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.docusign.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2lKF75KyDJq20zRFvOJfqt/9cbfd0601957e871237807d10d7656c8/Docusign2.svg" alt="Docusign Icon" title="Docusign Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.knowbe4.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6Yp68cE1DWONMFujzRpDS7/ef9c94f72a78b1981b0d247dede0fe3d/KnowBe4.svg" alt="KnowBe4 Icon" title="KnowBe4 Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.idmobile.co.uk/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-07.svg" alt="ID Mobile Icon" title="ID Mobile Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://asana.com/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384451/drata/6001/Logo-New-08.svg" alt="Asana Icon" title="Asana Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://aws.amazon.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2PLTU1dIjdttcowa2vximY/fd2d3b006dc7352e72dc4f2eda03a429/AWS.svg" alt="AWS Integration Icon" title="AWS Integration Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.office.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7F75j5NuQNUiyaUf3jp2uA/59a6c87062bec3144d1034119c71465f/Office365.svg" alt="Office365 Icon" title="Office365 Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://cloud.google.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg" alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"></a></div><div class="logo-item"><a class="https://www.atlassian.com/software/jira"><img src="//res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-02.svg" alt="Jira Cloud Icon" title="Jira Cloud Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.heroku.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5tV8ZcXcsy0znbf9o49tr3/26c77c96cfdead9b454232768b200d9b/Heroku.svg" alt="Heroku Icon" title="Heroku Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.mongodb.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5r9v2xXxffZvpImpVXTFMH/fb3ed22ea983ace1110e558ed3b7f72d/MongoDB.svg" alt="MongoDB Icon" title="MongoDB Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://cloud.google.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg" alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg" alt="Azure Icon" title="Azure Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gusto.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/142KAgkI9ALVWSvbrXR3aI/6ab36ae718c2ba4c58ef0442a6ee16fd/Gusto.svg" alt="Gusto Icon" title="Gusto Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://rippling.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4GyKiQzxdxJHMzrE6b3W8v/90c00285a1091a94b54ca48bc4f56101/Rippling.svg" alt="Rippling Icon" title="Rippling Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://bamboohr.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4GQVsp96tBxfx9CTU7Zdft/219ab2a368e64bff04bf20dcae7aa35b/BambooHR.svg" alt="BambooHR Icon" title="BambooHR Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://justworks.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6pnkAjBGmdFrvrnDmvvrXC/c6b06dfce807a2e5bdef640870d9a8d6/Justworks.svg" alt="Justworks Icon" title="Justworks Icon" class="logo-media"></a></div></div></div><div class="logo-slider slider-4"><div class="marquee"><div class="logo-item"><a href="https://cloud.google.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg" alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg" alt="Azure Icon" title="Azure Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gusto.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/142KAgkI9ALVWSvbrXR3aI/6ab36ae718c2ba4c58ef0442a6ee16fd/Gusto.svg" alt="Gusto Icon" title="Gusto Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://rippling.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4GyKiQzxdxJHMzrE6b3W8v/90c00285a1091a94b54ca48bc4f56101/Rippling.svg" alt="Rippling Icon" title="Rippling Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://bamboohr.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4GQVsp96tBxfx9CTU7Zdft/219ab2a368e64bff04bf20dcae7aa35b/BambooHR.svg" alt="BambooHR Icon" title="BambooHR Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://justworks.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6pnkAjBGmdFrvrnDmvvrXC/c6b06dfce807a2e5bdef640870d9a8d6/Justworks.svg" alt="Justworks Icon" title="Justworks Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://linear.app/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/29qH7phJuVe2SWXafNTksn/c9bfd7313eb8429c7de7b40238d56ed0/Linear.svg" alt="Linear Icon" title="Linear Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gitlab.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg" alt="GitLab Icon" title="GitLab Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://github.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/eoDwv9YT0L0xVLBwOs7jz/bf8417fb445a57d05c9a07b1e2d4795c/GitHub.svg" alt="GitHub Icon" title="GitHub Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.freshworks.com/hrms"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4JS6qX6NywCVe3T9xOw5wd/a11ee331c1a035f8fd1eb36ace8ad876/Freshteam.svg" alt="Freshteam Icon" title="Freshteam Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://cloud.google.com/identity"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5RPgBnW5vJzrKaFLddgw60/c6b426ad755118b9e0fb1cbeb9b707d2/Google_Cloud_Identity.svg" alt="Google Cloud Identity Icon" title="Google Cloud Identity Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gitlab.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg" alt="GitLab Icon" title="GitLab Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://bitbucket.org/product"><img src="https://images.ctfassets.net/x3hoqyjm3c27/9TEURxCRYNYCcRVVQ0SY4/e950c12488f77d93f23f37089d7b6abf/Bitbucket.svg" alt="Bitbucket Icon" title="Bitbucket Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://auth0.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/24MseNidVOQVfs04FLVxDM/47e42cddadcbda5b0ef72c28d7daa209/Auth0.svg" alt="Auth0 Icon" title="Auth0 Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://okta.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/27gogN0UNqQlGz6Fa6e7QI/43ca209eeda1f202c610f1339c4079e5/Okta_Icon.svg" alt="Okta Icon" title="Okta Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/w79FmT6REFNnkaAXhiNdo/a54280fc4703de7cd8deecb8668ff262/Azure_Active_Directory.svg" alt="Azure Active Directory Icon" title="Azure Active Directory Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/en-us/services/devops"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3ihf8MiGyMaP27hzSnHHis/0ab7c9369f2eb86a3390dafd34971b2b/Azure_DevOps.svg" alt="Azure DevOps Icon" title="Azure DevOps Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.atlassian.com/software/jira"><img src="https://images.ctfassets.net/x3hoqyjm3c27/1tL8t8RgViv0sdi2pj4OYh/15089b58cbde25dd071b8e07b0419e60/Jira.svg" alt="Jira Icon" title="Jira Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://certn.co/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5pc1bJEsE7xMYZoTE7W1E2/df8a5ffb9b5d64006694ffd431d65622/Certn.svg" alt="Certn Icon" title="Certn Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://karmacheck.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3AMXwTyew7bWlGYY3I3oKm/df28f542a9268c8e2524fdde93cd817e/Karmacheck.svg" alt="Karmacheck Icon" title="Karmacheck Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.onelogin.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/46l8F2OYzzieehKBFbh0iF/c4f13fe0f926448644d2164916cdbb4b/Onelogin.svg" alt="Onelogin Icon" title="Onelogin Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg" alt="Azure Icon" title="Azure Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://shortcut.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4bgLwZHGFLGcSnfcZ4LNO8/062526c303724042e5b45815c3bbf95f/Shortcut-1.svg" alt="Shortcut Icon" title="Shortcut Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://clickup.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4SgO0NVAIKyeOC0Gj2rx6s/0c9ae8b96975cbd6af0681596e8a2d7e/ClickUp.svg" alt="ClickUp Icon" title="ClickUp Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://checkr.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6EXzsCr6EEAxfj1cqBKJjO/6dcf402735156c2f495b31e18b11ea57/Checkr.svg" alt="Checkr Icon" title="Checkr Icon" class="logo-media"></a></div></div><div class="marquee"><div class="logo-item"><a href="https://cloud.google.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg" alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg" alt="Azure Icon" title="Azure Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gusto.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/142KAgkI9ALVWSvbrXR3aI/6ab36ae718c2ba4c58ef0442a6ee16fd/Gusto.svg" alt="Gusto Icon" title="Gusto Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://rippling.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4GyKiQzxdxJHMzrE6b3W8v/90c00285a1091a94b54ca48bc4f56101/Rippling.svg" alt="Rippling Icon" title="Rippling Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://bamboohr.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4GQVsp96tBxfx9CTU7Zdft/219ab2a368e64bff04bf20dcae7aa35b/BambooHR.svg" alt="BambooHR Icon" title="BambooHR Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://justworks.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6pnkAjBGmdFrvrnDmvvrXC/c6b06dfce807a2e5bdef640870d9a8d6/Justworks.svg" alt="Justworks Icon" title="Justworks Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://linear.app/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/29qH7phJuVe2SWXafNTksn/c9bfd7313eb8429c7de7b40238d56ed0/Linear.svg" alt="Linear Icon" title="Linear Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gitlab.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg" alt="GitLab Icon" title="GitLab Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://github.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/eoDwv9YT0L0xVLBwOs7jz/bf8417fb445a57d05c9a07b1e2d4795c/GitHub.svg" alt="GitHub Icon" title="GitHub Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.freshworks.com/hrms"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4JS6qX6NywCVe3T9xOw5wd/a11ee331c1a035f8fd1eb36ace8ad876/Freshteam.svg" alt="Freshteam Icon" title="Freshteam Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://cloud.google.com/identity"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5RPgBnW5vJzrKaFLddgw60/c6b426ad755118b9e0fb1cbeb9b707d2/Google_Cloud_Identity.svg" alt="Google Cloud Identity Icon" title="Google Cloud Identity Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://gitlab.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg" alt="GitLab Icon" title="GitLab Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://bitbucket.org/product"><img src="https://images.ctfassets.net/x3hoqyjm3c27/9TEURxCRYNYCcRVVQ0SY4/e950c12488f77d93f23f37089d7b6abf/Bitbucket.svg" alt="Bitbucket Icon" title="Bitbucket Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://auth0.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/24MseNidVOQVfs04FLVxDM/47e42cddadcbda5b0ef72c28d7daa209/Auth0.svg" alt="Auth0 Icon" title="Auth0 Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://okta.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/27gogN0UNqQlGz6Fa6e7QI/43ca209eeda1f202c610f1339c4079e5/Okta_Icon.svg" alt="Okta Icon" title="Okta Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/w79FmT6REFNnkaAXhiNdo/a54280fc4703de7cd8deecb8668ff262/Azure_Active_Directory.svg" alt="Azure Active Directory Icon" title="Azure Active Directory Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/en-us/services/devops"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3ihf8MiGyMaP27hzSnHHis/0ab7c9369f2eb86a3390dafd34971b2b/Azure_DevOps.svg" alt="Azure DevOps Icon" title="Azure DevOps Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.atlassian.com/software/jira"><img src="https://images.ctfassets.net/x3hoqyjm3c27/1tL8t8RgViv0sdi2pj4OYh/15089b58cbde25dd071b8e07b0419e60/Jira.svg" alt="Jira Icon" title="Jira Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://certn.co/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/5pc1bJEsE7xMYZoTE7W1E2/df8a5ffb9b5d64006694ffd431d65622/Certn.svg" alt="Certn Icon" title="Certn Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://karmacheck.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/3AMXwTyew7bWlGYY3I3oKm/df28f542a9268c8e2524fdde93cd817e/Karmacheck.svg" alt="Karmacheck Icon" title="Karmacheck Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://www.onelogin.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/46l8F2OYzzieehKBFbh0iF/c4f13fe0f926448644d2164916cdbb4b/Onelogin.svg" alt="Onelogin Icon" title="Onelogin Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://azure.microsoft.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg" alt="Azure Icon" title="Azure Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://shortcut.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4bgLwZHGFLGcSnfcZ4LNO8/062526c303724042e5b45815c3bbf95f/Shortcut-1.svg" alt="Shortcut Icon" title="Shortcut Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://clickup.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/4SgO0NVAIKyeOC0Gj2rx6s/0c9ae8b96975cbd6af0681596e8a2d7e/ClickUp.svg" alt="ClickUp Icon" title="ClickUp Icon" class="logo-media"></a></div><div class="logo-item"><a href="https://checkr.com/"><img src="https://images.ctfassets.net/x3hoqyjm3c27/6EXzsCr6EEAxfj1cqBKJjO/6dcf402735156c2f495b31e18b11ea57/Checkr.svg" alt="Checkr Icon" title="Checkr Icon" class="logo-media"></a></div></div></div></div><div class="btn"><a href="https://drata.com/platform/integrations" class="view-all-btn">View All</a></div></section>`;
}

// Add class 'safari' on body if browser is safari
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari')
}


// Check if nearest parent .hs-form-field has style attribute with display: none (for ClearBit)
function forClearBitForms() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
        if (el.closest('.hs-form-field[style*="display: none"]')) {
            el.closest('fieldset').classList.add('field-hidden');
        } else {
            el.closest('fieldset').classList.remove('field-hidden');
        }
    });
}

const cbInt6002 = setInterval(function () {
  if (document.querySelectorAll('fieldset:not(.form-columns-3) .hs-form-field[style*="display: none"]').length > 0) {
    // clearInterval(cbInt);
    forClearBitForms();
  }
}, 500);

// on user type in .hs-input run forClearBitForms() function
// document.addEventListener('keyup', function (e) {
//   if (e.target.classList.contains('hs-input')) {
//     forClearBitForms();
//   }
// });