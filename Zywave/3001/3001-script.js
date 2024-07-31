const timer = 5000;
let autoAccordionInterval;

const bodyInterval = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(bodyInterval)

        document.body.classList.add('spz-3001');

        // Set Hero Content
        setHeroContent();
    }
}, 10);

// Set the hero content
function setHeroContent() {
    document.body.insertAdjacentHTML('afterbegin', `<section class="hero-section">
        <div class="header-row">
            <div class="header-col">
                <a href="https://www.zywave.com/" target="_blank">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/8001/yi7brhljad4mwktwdvelxvlydk9pkamkfwni2dpr_1.svg"
                        alt="Zywave Logo" class="zywave-logo">
                </a>
            </div>
        </div>
        <div class="hero-row">
            <div class="hero-col">
                <div class="hero-copy">
                    <h1 class="hero-title"><span>Streamline</span> insurance sales and management</h1>
                    <ul class="hero-list">
                        <li><span>Sales.</span> Find qualified prospects instantly. Automatically send bulk email campaigns. Generate quotes and proposals in minutes. </li>
                        <li><span>Client portal.</span> Let clients enroll in benefits, manage plans, make payments and access resources from a dedicated client portal. </li>
                        <li><span>Content library.</span> Over 150,000 resources including benefit booklets and compliance guides. Customize and send to prospects and clients.</li>
                    </ul>
                </div>
                <div class="hero-form">
                </div>
            </div>
            <div class="social-proof-title">Join 18,000+ insurers, agencies, and service providers using Zywave.</div>
            <div class="brand-logo">
                <picture>
                <source media="(min-width:1025px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/logos.webp">
                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/logos_t.webp">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/logos_mobile.webp" alt="Social Proof">
                </picture>
            </div>
        </div>
    </div>`);

    setTabsContent();
}

// Set the tabs content of accordion
function setTabsContent() {
    document.querySelector('.hero-section').insertAdjacentHTML('afterend', `<div class="accordion-section">
            <div class="accordion-row">
            <div class="section-title">Solutions</div>
                <div class="accordion-col">
                    <nav id="tabs">
                        <li class="active" data-index="1"><a href="#tab1"><div class="desk-only"><span class="hover"></span>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719331938/zywave/3001/sales_cloud.svg" alt="Sales Cloud" class="i-default">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719331957/zywave/3001/sales_cloud_hov.svg" alt="Sales Cloud" class="i-hover">
                            <span class="text">Sales Cloud</span></div><div class="no-desk"><span class="hover"></span><span class="text">1</span></div></a>
                        </li>
                        <li data-index="2"><a href="#tab2"><div class="desk-only"><span class="hover"></span>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719331997/zywave/3001/client_cloud.svg" alt="Client Cloud" class="i-default">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719332026/zywave/3001/client_cloud_hov.svg" alt="Client Cloud" class="i-hover">
                            <span class="text">Client Cloud</span></div><div class="no-desk"><span class="hover"></span><span class="text">2</span></div></a>
                        </li>
                         <li data-index="3"><a href="#tab3"><div class="desk-only"><span class="hover"></span>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719332050/zywave/3001/content_cloud.svg" alt="Content Cloud" class="i-default">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719332077/zywave/3001/content_cloud_hov.svg" alt="Content Cloud" class="i-hover">
                            <span class="text">Content Cloud</span></div><div class="no-desk"><span class="hover"></span><span class="text">3</span></div></a>
                        </li>
                         <li data-index="4"><a href="#tab4"><div class="desk-only"><span class="hover"></span>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719332099/zywave/3001/analytics_cloud.svg" alt="Analytics Cloud" class="i-default">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719332128/zywave/3001/analytics_cloud_hov.svg" alt="Analytics Cloud" class="i-hover">
                            <span class="text">Analytics Cloud</span></div><div class="no-desk"><span class="hover"></span><span class="text">4</span></div></a>
                        </li>
                    </nav>
                    
                    <div id="tab-contents">
                        <div id="tab1" class="tab-contents active">
                            <div class="accordion-wrapper ac-wrapper-1">
                                <div class="left-copy">
                                    <div class="title">Sales Cloud</div>
                                    <div class="description">Streamline prospecting, follow-up, and renewal workflows. Find qualified leads. Connect directly in-app and follow up instantly. Auto-generate quotes.</div>
                                    <div class="cta-wrapper">
                                        <a href="javascript:void(0);" class="spz-cta">Get a Demo</a>
                                    </div>
                                </div>
                                <div class="right-img">
                                    <picture>
                                        <source media="(min-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/sales_cloud_1.webp">
                                        <source media="(min-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/sales_cloud__tablet.webp">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/sales_cloud__mobile.webp" alt="Sales Cloud">
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div id="tab2" class="tab-contents">
                            <div class="accordion-wrapper ac-wrapper-2">
                                <div class="left-copy">
                                    <div class="title">Client Cloud</div>
                                    <div class="description">Streamline prospecting, follow-up, and renewal workflows. Find qualified leads. Connect directly in-app and follow up instantly. Auto-generate quotes.</div>
                                    <div class="cta-wrapper">
                                        <a href="javascript:void(0);" class="spz-cta">Get a Demo</a>
                                    </div>
                                </div>
                                <div class="right-img">
                                    <picture>
                                        <source media="(min-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/client_cloud_1.webp">
                                        <source media="(min-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/client_cloud_tablet.webp">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/client_cloud_mobile.webp" alt="Client Cloud">
                                    </picture>
                                </div>
                            </div>
                        </div>
                       
                        <div id="tab3" class="tab-contents">
                            <div class="accordion-wrapper ac-wrapper-3">
                                <div class="left-copy">
                                    <div class="title">Content Cloud</div>
                                    <div class="description">Streamline prospecting, follow-up, and renewal workflows. Find qualified leads. Connect directly in-app and follow up instantly. Auto-generate quotes.</div>
                                    <div class="cta-wrapper">
                                        <a href="javascript:void(0);" class="spz-cta">Get a Demo</a>
                                    </div>
                                </div>
                                <div class="right-img">
                                    <picture>
                                        <source media="(min-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/content_cloud_1.webp">
                                        <source media="(min-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/content_cloud_tablet.webp">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/content_cloud_mobile.webp" alt="Content Cloud">
                                    </picture>
                                </div>
                            </div>
                        </div>
                         <div id="tab4" class="tab-contents">
                            <div class="accordion-wrapper ac-wrapper-4">
                                <div class="left-copy">
                                    <div class="title">Analytics Cloud</div>
                                    <div class="description">Streamline prospecting, follow-up, and renewal workflows. Find qualified leads. Connect directly in-app and follow up instantly. Auto-generate quotes.</div>
                                    <div class="cta-wrapper">
                                        <a href="javascript:void(0);" class="spz-cta">Get a Demo</a>
                                    </div>
                                </div>
                                <div class="right-img">
                                    <picture>
                                        <source media="(min-width:1024.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/analytics_cloud_1.webp">
                                        <source media="(min-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/analytics_cloud_tablet.webp">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/3001/analytics_cloud_mobile.webp" alt="Analytics Cloud">
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);

    // Nav buttons functionality
    var tabLabels = document.querySelectorAll("#tabs li");
    var tabPanes = document.getElementsByClassName("tab-contents");

    function activateTab(e) {
        e.preventDefault();
        clearInterval(autoAccordionInterval);

        // Deactivate all tabs
        tabLabels.forEach(function (label, index) {
            label.classList.remove("active");
        });
        [].forEach.call(tabPanes, function (pane, index) {
            pane.classList.remove("active");
        });

        // Activate current tab
        e.target.parentNode.classList.add("active");
        var clickedTab = e.target.getAttribute("href");
        document.querySelector(clickedTab).classList.add("active");
        accordionHandler('#tabs');
    }

    // Apply event listeners
    tabLabels.forEach(function (label, index) {
        label.querySelector('a').addEventListener("click", activateTab);
    });

    // accordionHandler('#tabs');

    //check event listener on window
    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('spz-cta')) {
            //scroll to form smoothly
            document.querySelector('.mktoForm').scrollIntoView({ behavior: 'smooth' });
        }
    });

    footer();
}

// Accordion functionality
function accordionHandler(parentClass) {
    const tabs = document.querySelectorAll('' + parentClass + ' > li');
    let i = 0;
    autoAccordionInterval = setInterval(function () {
        if (i > timer) {
            let curIndex = parseInt(document.querySelector('' + parentClass + ' > li.active').getAttribute("data-index"));
            if (curIndex != tabs.length) {
                curIndex = curIndex + 1
            } else {
                curIndex = 1;
            }
            document.querySelector('' + parentClass + ' > li[data-index="' + curIndex + '"] a').click();
            i = 0;
        }
        i += 200;
    }, 200);
}

function footer() {
    document.querySelector('.accordion-section').insertAdjacentHTML('afterend', `<div class="footer-section">
        <div class="footer-row">
            <div class="footer-col">
                    <div class="footer-text">© 2024 ZYWAVE</div>
                    <div class="footer-links">
                        <ul class="spz-subfooter-menu"><li><a href="/terms-conditions/">Terms &amp; Conditions</a></li><li><a href="/privacy-statement/">Privacy</a></li><li><a href="/training-cancellation-policy/">Training Cancellation Policy</a></li><li><a href="/dmca-notice/">DMCA Notice</a></li><li><a href="/hipaa-security/">HIPAA Security</a></li></ul>
                    </div>
                </div>
            </div>
        </div>`);
}

//Form internal code
waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField[id]').then(function () {
    formModify();
});

function formModify() {
    //form title update
    document.querySelector('body form.mktoForm').closest('div[style]:not([class])').classList.add('spz-form-container');
    document.querySelector('.spz-form-container').removeAttribute('style');

    waitForElm('body .hero-form').then(function () {
        document.querySelector('.hero-form').insertAdjacentElement('beforeend', document.querySelector('.spz-form-container'));
    });

    if (document.querySelectorAll('.spz-form-container .form_title').length == 0) {
        document.querySelector('.spz-form-container .formSpan').insertAdjacentHTML('beforebegin', `<div class="form_title">Get a demo</div>`);
    }

    //form Cta update
    var textChng = document.querySelector('form.mktoForm .mktoButtonRow button.mktoButton');

    document.querySelector('form.mktoForm #LblFirstName').textContent = 'First Name';
    document.querySelector('form.mktoForm #LblLastName').textContent = 'Last Name';
    document.querySelector('form.mktoForm #LblEmail').textContent = 'Email';
    document.querySelector('form.mktoForm #LblPhone').textContent = 'Phone';

    waitForElm('form.mktoForm #LblCompany').then(function () {
        document.querySelector('form.mktoForm #LblCompany').textContent = 'Company';
        document.querySelector('form.mktoForm #LblCompany').closest('.mktoFormRow').classList.add('spz-row','full-width');
    });

    textChng.textContent = 'Submit';

    document.querySelectorAll('form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField:not([type="hidden"])').forEach(function (input) {
        setTimeout(() => {
            if (input.closest('.mktoFieldWrap').querySelector('.mktoGutter.mktoHasWidth')) {
                input.closest('.mktoFieldWrap').querySelector('.mktoGutter.mktoHasWidth').remove();
            }

            input.closest('.mktoFormRow').classList.add('spz-row');
        }, 100);
    });

    var countryOptions = document.querySelectorAll('.mktoFieldWrap select');
    countryOptions.forEach(function (select) {
        if (select.querySelector('option[value=""]')) {
            select.querySelector('option[value=""]').setAttribute('disabled', 'disabled');
            select.querySelector('option[value=""]').setAttribute('style', 'color: #ccc');
            select.querySelector('option[value=""]').textContent = '';
        }
    });

    // form state
    var selector = '.spz-3001 .spz-form-container form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz-3001 .spz-form-container form.mktoForm .mktoFormCol .mktoFieldWrap select';
    document.addEventListener('focus', function (event) {
        if (event.target.matches(selector)) {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
        }
    }, true);
    var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
    for (s_event of eventList) {
        document.addEventListener(s_event, function (event) {
            if (event.target.matches(selector)) {
                if (event.target.value == null || event.target.value == '') {
                    event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('filled');
                } else {
                    event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('filled');
                }
                if (event.type == "change" && event.target.tagName == 'SELECT') {
                    if (event.target.value == "") {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
                    } else {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                        if (event.target.parentNode.querySelector('.mktoError').length > 0) {
                            event.target.parentNode.querySelector('.mktoError').style.display = 'none';
                        }
                    }
                } else {
                    if (event.target.classList.contains('mktoInvalid')) {
                        var closestError = event.target.parentNode.querySelector('.mktoError');
                        if (closestError && closestError.style.display == '') {
                            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
                        } else {
                            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                        }
                    } else {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                    }
                }

                waitForElm('form.mktoForm #LblCompany').then(function () {
                    document.querySelector('form.mktoForm #LblCompany').textContent = 'Company';
                    document.querySelector('form.mktoForm #LblCompany').closest('.mktoFormRow').classList.add('spz-row');
                });
            }
        });
    }

    document.addEventListener('focusout', function (event) {
        document.querySelectorAll('body form .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
            elem.classList.remove('active', 'typing');
        })
    }, true);

};

// Generic Code
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