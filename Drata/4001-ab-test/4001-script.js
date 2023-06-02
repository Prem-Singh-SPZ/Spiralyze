// Load Hubspot libs
const hubSpotJS = document.createElement('script');
hubSpotJS.src = '//js.hsforms.net/forms/embed/v2.js';
hubSpotJS.type = 'text/javascript';
hubSpotJS.setAttribute('charset', 'utf-8');
document.head.appendChild(hubSpotJS);

const formInt = setInterval(() => {
    if (document.querySelectorAll('.hbspt-form form').length > 0) {
        clearInterval(formInt);

        appendInputLabel();

        // Set input label
        document.querySelector('[name="source__inbound_demo_"] + .hs-label-spz').innerHTML = 'How did you hear about us?*';

        // Set SOC-2 checkbox checked
        document.querySelector('[name="demo_product_of_interest"]').setAttribute('checked', 'checked');

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

        moveElement('.hs_source__inbound_demo_', '.hbspt-form .form-columns-1');

        // Set focus on input
        focusFields();

        removeStyleTags();

        document.body.classList.add('spz-4001');
    }
}, 100);

function appendFavicon() {
    document.querySelector('head').insertAdjacentHTML("afterbegin", `
        <link rel="shortcut icon" href="https://drata.com/images/favicon.ico">
        <link rel="icon" type="image/png" sizes="256x256" href="https://drata.com/images/favicon-256x256.png">
        <link rel="icon" type="image/png" sizes="48x48" href="https://drata.com/images/favicon-48x48.png">
        <link rel="icon" type="image/png" sizes="32x32" href="https://drata.com/images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="https://drata.com/images/favicon-16x16.png">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1681388733/drata/4001/System_Icons_open.svg" as="image">`
    );
}

function appendGTM() {
    document.body.insertAdjacentHTML("afterbegin", `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5K4ZZ96"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`);
}
// appendGTM();
appendFavicon();


// Remove all style tags without id in header
function removeStyleTags() {
    document.querySelectorAll('style:not([id])').forEach(function (el) {
        el.remove();
    });

    // Remove link tag which contains main.min.css or Social_follow.min.css in href attribute
    document.querySelectorAll('link').forEach(function (el) {
        if (el.href.indexOf('main.min.css') > -1 || el.href.indexOf('Social_follow.min.css') > -1) {
            el.remove();
        }
    });
}


// Create input label with placeholder text
function appendInputLabel() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
        const label = document.createElement("label");
        label.innerHTML = el.placeholder;
        if (!el.hasAttribute('type') && el.options.length > 0) {
            label.innerHTML = el.options[0].text;
        }
        label.setAttribute('for', el.id);
        label.classList.add('hs-label-spz');
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

            // el.addEventListener('focus', function () {
            //     el.closest('.field').classList.add('field-focus');
            //     setTimeout(function () {
            //         el.closest('.field').classList.remove('field-untouched');
            //     }, 100);
            // });
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


// Add .field-error class on closest parent .field class if .error is exist on .hs-input
function checkError() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
        if (el.closest('.field').querySelector('.error') != null) {
            el.closest('.field').classList.add('field-error');
        } else {
            el.closest('.field').classList.remove('field-error');
        }
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

// Add class 'safari' on body if browser is safari
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari')
}


function pageContent() {
    return `<section class="hero-section">
                <div class="header-nav">
                    <div class="nav-section">
                        <a href="https://drata.com/" class="brand-logo">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1680260802/drata/4001/drata_logo_1.svg"
                                class="logo-img" alt="Drata" title="Drata" draggable="false">
                        </a>
                    </div>
                </div>
                <div class="container hero-container">
                    <div class="hero-content">
                        <h1 class="hc-title">Automate and Accelerate SOC 2 Compliance</h1>

                        <div class="star-rating">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1682057378/drata/4001/star_rating_orange.svg"
                                class="sr-img" alt="Ratings" title="Ratings" draggable="false">
                        </div>

                        <div class="list-grp-wrapper">
                            <ul class="list-group">
                                <li class="list-item">
                                    <div class="ls-title">Reduce Time by Up to 80%</div>
                                    <div class="ls-desc">Automate documentation and evidence collection. Integrates with your tech stack out of the box.</div>
                                </li>
                                <li class="list-item">
                                    <div class="ls-title">Ongoing Compliance</div>
                                    <div class="ls-desc">Achieve peace of mind, knowing Drata is automating ongoing security and compliance monitoring.</div>
                                </li>
                                <li class="list-item">
                                    <div class="ls-title">Continuous Compliance</div>
                                    <div class="ls-desc">Maintain compliance as your business grows and your tech stack expands. Easily add new compliance frameworks.</div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div class="hero-right-section">
                        <div class="form-wrapper-spz">
                            <h2 class="form-title-spz">Get SOC 2 Compliant Fast at a Fraction of the Cost</h2>                            
                        </div>
                    </div>
                </div>
                <div class="dir-arrow">
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/v1680260806/drata/4001/vector_5.svg" alt="Arrow"
                        draggable="false">
                </div>
            </section>

            <section class="social-proof-sec">
                <div class="sp-title">
                    Join over 2,000 <br class="mobile-only" /> companies that have already achieved SOC 2 compliance with Drata
                </div>
                <div class="sp-logos-wrapper">
                    <div class="sp-logo"><img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1680260806/drata/4001/abnormal_logo_1.svg"
                            alt="Abnormal" title="Abnormal"></div>
                    <div class="sp-logo"><img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1680260806/drata/4001/airbase_logo_1.svg"
                            alt="Airbase" title="Airbase"></div>
                    <div class="sp-logo"><img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1680260806/drata/4001/bigid_logo_1.svg"
                            alt="BigID" title="BigID"></div>
                    <div class="sp-logo"><img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1680260806/drata/4001/clearbit_logo_1.svg"
                            alt="Clearbit" title="Clearbit"></div>
                    <div class="sp-logo"><img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1680260809/drata/4001/bamboohr_logo_1.svg"
                            alt="BambooHR" title="BambooHR"></div>
                    <div class="sp-logo"><img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1680260809/drata/4001/notion_logo_1.svg"
                            alt="Notion" title="Notion"></div>
                    <div class="sp-logo"><img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1680260809/drata/4001/postman_logo_1.svg"
                            alt="Postman" title="Postman"></div>
                    <div class="sp-logo"><img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1680260809/drata/4001/vercel_logo_1.svg"
                            alt="Vercel" title="Vercel"></div>
                    <div class="sp-logo"><img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1680260810/drata/4001/lemonade_logo_1.svg"
                            alt="Lemonade" title="Lemonade"></div>
                    <div class="sp-logo"><img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1680260810/drata/4001/fivetran_logo_1.svg"
                            alt="Fivetran" title="Fivetran"></div>
                    <div class="sp-logo"><img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1680260812/drata/4001/wordpress_logo_1.svg"
                            alt="WordPress VIP" title="WordPress VIP"></div>
                    <div class="sp-logo"><img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1680260812/drata/4001/clearco_logo_1.svg"
                            alt="Clearco" title="Clearco"></div>
                </div>
            </section>

            <section class="footer-sec">
                <div class="footer-container">
                    <div class="footer-copyrights">© 2023 Drata Inc. All rights reserved.</div>
                    <div class="footer-flex">
                        <div class="footer-links">
                            <a href="https://drata.com/terms" class="fl-link">Terms and Conditions</a>
                            <a href="https://drata.com/privacy" class="fl-link">Privacy Policy</a>
                        </div>
                        <a href="https://drata.com/" class="footer-logo">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1680767172/drata/4001/Drata-logo-footer.svg"
                                alt="Drata" title="Drata">
                        </a>
                    </div>
                </div>
            </section>`;
}

document.body.insertAdjacentHTML("afterbegin", pageContent());

// append pageContent() in body without using insertAdjacentHTML
// function appendPageContent() {
//     const div = document.createElement('div');
//     div.innerHTML = pageContent();
//     document.body.appendChild(div);
// }
// appendPageContent()


// Append hubspot script in '.form-wrapper-spz' div
function appendHubspotScript() {
    const script = document.createElement('script');
    // script.setAttribute('charset', 'utf-8');
    // script.setAttribute('type', 'text/javascript');
    // script.setAttribute('src', '//js.hsforms.net/forms/embed/v2.js');

    script.innerHTML = 'hbspt.forms.create({region: "na1", portalId: "7817592", formId: "429140d2-bd90-4a8b-a561-5d732c9bd514", cssClass: "hs-form-spz", css: "", submitText: "Get a Demo", onFormReady: function ($form) { }, onFormSubmit: function ($form) { }, onFormSubmitted: function ($form) { } });';

    document.querySelector('.form-wrapper-spz').appendChild(script);
}

hubSpotJS.onload = function () {
    appendHubspotScript();
}
