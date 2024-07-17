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
            <div class="section-title">Features</div>
                <div class="accordion-col">
                    <nav id="tabs">
                        <li class="active" data-index="1"><a href="#tab1"><span class="hover"></span>
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719331938/zywave/3001/sales_cloud.svg" alt="Sales Cloud" class="i-default">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719331957/zywave/3001/sales_cloud_hov.svg" alt="Sales Cloud" class="i-hover">
                            Sales Cloud</a>
                        </li>
                        <li data-index="2"><a href="#tab2">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719331997/zywave/3001/client_cloud.svg" alt="Client Cloud" class="i-default">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719332026/zywave/3001/client_cloud_hov.svg" alt="Client Cloud" class="i-hover">
                            Client Cloud</a>
                        </li>
                         <li data-index="3"><a href="#tab3">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719332050/zywave/3001/content_cloud.svg" alt="Content Cloud" class="i-default">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719332077/zywave/3001/content_cloud_hov.svg" alt="Content Cloud" class="i-hover">
                            Content Cloud</a>
                        </li>
                         <li data-index="4"><a href="#tab4">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719332099/zywave/3001/analytics_cloud.svg" alt="Analytics Cloud" class="i-default">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1719332128/zywave/3001/analytics_cloud_hov.svg" alt="Analytics Cloud" class="i-hover">
                            Analytics Cloud</a>
                        </li>
                    </nav>
                    
                    <div id="tab-contents">
                        <div id="tab1" class="tab-contents active">
                            <div class="accordion-wrapper ac-wrapper-1">
                                <div class="child">
                                    <div class="bar"><div class="line"></div></div>
                                    <div class="title">
                                    <div class="text">Carrier pricing</div>
                                    </div>
                                    <div class="content">
                                    <div class="text">Access exclusive, highly-curated data sources — including lab, genomics, oncology, EMR data, race and ethnicity, social determinants of health, mortality, and more.</div>
                                    <picture>
                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/specialty_data_enhancements_1440.webp">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/specialty_data_enhancements_1440.webp" alt="Specialty Data Enhancements" width="688" height="404">
                                    </picture>
                                    <a href="#popup_request_a_demo" rel="modal:open" class="cta">
                                        <span>get a demo</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"></path>
                                        </svg>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab2" class="tab-contents">
                            <div class="accordion-wrapper ac-wrapper-2">
                                <div class="child">
                                    <div class="bar"><div class="line"></div></div>
                                    <div class="title">
                                    <div class="text">Carrier pricing</div>
                                    </div>
                                    <div class="content">
                                    <div class="text">Access exclusive, highly-curated data sources — including lab, genomics, oncology, EMR data, race and ethnicity, social determinants of health, mortality, and more.</div>
                                    <picture>
                                        <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/specialty_data_enhancements_1440.webp">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/3008/specialty_data_enhancements_1440.webp" alt="Specialty Data Enhancements" width="688" height="404">
                                    </picture>
                                    <a href="#popup_request_a_demo" rel="modal:open" class="cta">
                                        <span>get a demo</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"></path>
                                        </svg>
                                    </a>
                                    </div>
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
        label.addEventListener("click", activateTab);
    });

    // accordionHandler('#tabs');

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
                    <div class="footer-text">Zywave, Inc.</div>
                    <div class="footer-social">
                        <div class="social-link">
                            <a href="https://linkedin.com/zywave" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5.78335 4.16652C5.78313 4.60855 5.60732 5.03239 5.2946 5.34479C4.98188 5.6572 4.55787 5.83258 4.11585 5.83236C3.67382 5.83214 3.24998 5.65633 2.93758 5.34361C2.62517 5.0309 2.44979 4.60688 2.45001 4.16486C2.45023 3.72283 2.62604 3.29899 2.93876 2.98659C3.25147 2.67419 3.67548 2.4988 4.11751 2.49902C4.55954 2.49924 4.98338 2.67505 5.29578 2.98777C5.60818 3.30049 5.78357 3.7245 5.78335 4.16652ZM5.83335 7.06652H2.50001V17.4999H5.83335V7.06652ZM11.1 7.06652H7.78335V17.4999H11.0667V12.0249C11.0667 8.97486 15.0417 8.69152 15.0417 12.0249V17.4999H18.3333V10.8915C18.3333 5.74986 12.45 5.94152 11.0667 8.46652L11.1 7.06652Z" fill="white"/>
                            </svg></a>
                        </div>
                        <div class="social-link">
                            <a href="https://www.facebook.com/Zywave/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.665 17.9168H10.9983V11.2418H14.0017L14.3317 7.92516H10.9983V6.25016C10.9983 6.02915 11.0861 5.81719 11.2424 5.66091C11.3987 5.50463 11.6107 5.41683 11.8317 5.41683H14.3317V2.0835H11.8317C10.7266 2.0835 9.66679 2.52248 8.88539 3.30388C8.10399 4.08529 7.665 5.14509 7.665 6.25016V7.92516H5.99833L5.66833 11.2418H7.665V17.9168Z" fill="white"/>
                            </svg></a>
                        </div>
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
        document.querySelector('form.mktoForm #LblCompany').closest('.mktoFormRow').classList.add('spz-row');
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