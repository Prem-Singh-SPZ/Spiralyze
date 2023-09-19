(function () {
    document.body.classList.add('spz-3002');
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.querySelector('body').classList.add(identifyPage);


    const pageData = [
        {
            pageName: "ppc-proxyclick-discover-a-better-way-to-check-in-visitors",
            pageLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/endorsed_logos.webp",
            logoAlt: "Proxyclick Logo",
            heroImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/proxyclick-ui_2.webp",
            heroImgAlt: "Proxyclick UI Image",
            features: [
                {
                    featureTitle: "Check-in",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-check-in",
                    title: "Automate guest <hyph>check-in.</hyph>",
                    subTitle: "Reduce front desk admin by 50%.",
                    featuresList: {
                        list1: "<span>Check-in.</span> Create badges, control access, and get real-time alerts. Pre-screen. Self-check in kiosks.",
                        list2: "<span>Questionnaires.</span> Customize check-in questionnaires and guidelines. Approve or deny visitors based on responses.",
                        list3: "<span>Notifications.</span> Automatically notify hosts via Slack, email, text message, and other platforms.",
                    }
                },
                {
                    featureTitle: "Security",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-security_8",
                    title: "Increase security with visitor",
                    subTitle: "screenings, approvals, and more.",
                    featuresList: {
                        list1: "<span>Screening.</span> Automatically screen visitors against internal and external watchlists. Require ID verification.",
                        list2: "<span>Visit approvals.</span> Require internal approvals, pre-registration, and legal document completion. ",
                        list3: "<span>Emergency management.</span> Get emergency lists, send facility-wide alerts, and coordinate with responders.",
                    }
                },
                {
                    featureTitle: "Integrations",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-integrations",
                    title: "Streamline your entire visitor flow.",
                    subTitle: "39+ integrations.",
                    featuresList: {
                        list1: "<span>Operations.</span> Integrations for access control, bookings/check-in, SSO, user provisioning, compliance, and more.",
                        list2: "<span>Integrations.</span> Azure, Microsoft, Teams, Slack, Cisco, Google, OnGuard, S2 Netbox, SCIM, Vpod, and more.",
                        list3: "<span>Custom API.</span> Create your own integration with our API access. Step-by-step documentation. ",
                    }
                },
                {
                    featureTitle: "Guest experience",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-guest_experience",
                    title: "Boost guest experience",
                    subTitle: "while streamlining <hyph>check-in.</hyph>",
                    featuresList: {
                        list1: "<span>Wi-Fi.</span> Automatically create time-constrained, one-time guest Wi-Fi credentials upon check-in.",
                        list2: "<span>Kiosk languages.</span> Let visitors choose from 33+ languages. Spanish, French, German, Chinese, and more.",
                        list3: "<span>Pre check-in.</span> Send check-in info, legal documents, and questionnaires to guests before arrival.",
                    }
                },
                {
                    featureTitle: "Operations and admin",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-operations_and_admin",
                    title: "Automate operations and admin",
                    subTitle: "across every location.",
                    featuresList: {
                        list1: "<span>Logbook.</span> Access visitor, employee, and delivery logbooks. Customize and filter views. Stay compliant.",
                        list2: "<span>Multiple locations.</span> Track, manage, and monitor visitors across locations. Get analytics and reporting.",
                        list3: "<span>Compliance.</span> Remain compliant with GDPR, CCPA, ITAR, EAR, PCI DSS, C-TPAT, and HIPAA. ",
                    }
                }
            ]
        },
        {
            pageName: "ppc-archibus-maintenance-software",
            pageLogo: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_3.webp",
            logoAlt: "Archibus Logo",
            heroImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/archibus-ui_1.webp",
            heroImgAlt: "Archibus UI Image",
            features: [
                {
                    featureTitle: "Service & work Orders",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-check-in_2",
                    title: "Automate asset maintenance.",
                    subTitle: "Reduce costs by 30%.",
                    featuresList: {
                        list1: "<span>Service requests.</span> Instantly submit maintenance requests on broken equipment across your facilities.",
                        list2: "<span>Preventive maintenance.</span> Automatically send work orders based on time or usage intervals.",
                        list3: "<span>Maintenance analysis.</span> See upcoming asset service and inspection dates. View lifecycle history.",
                    }
                },
                {
                    featureTitle: "maintenance management",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-security_2",
                    title: "View and manage all maintenance",
                    subTitle: "from one platform.",
                    featuresList: {
                        list1: "<span>Asset details.</span> Get a complete view of all your assets, maintenance status, and open work orders in one place.",
                        list2: "<span>Work orders.</span> Approve, schedule, and close requests. Auto-assign tasks based on technician availability.",
                        list3: "<span>Communications.</span> Communicate directly with technicians via mobile app. Send feedback reports.",
                    }
                },
                {
                    featureTitle: "Technician portal",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-integrations_7",
                    title: "Enable technician self-serve",
                    subTitle: "with an all-in-one online portal.",
                    featuresList: {
                        list1: "<span>Tasks.</span> Let technicians view task descriptions, status, and location. Log task completion. ",
                        list2: "<span>Alerts.</span> Automatically send alerts to technicians when they&#8217;re assigned new work orders.",
                        list3: "<span>Prioritization.</span> Automatically re-prioritize and move requests based on urgency, location, or trade.",
                    }
                },
                {
                    featureTitle: "Operations and admin",
                    featureImg: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3010/img-guest_experience_3",
                    title: "Streamline manual maintenance ",
                    subTitle: "operations and admin.",
                    featuresList: {
                        list1: "<span>Budgeting.</span> Get analytics on asset performance and costs. Create monthly budgets based on historical data.",
                        list2: "<span>Vendor assignment.</span> Automatically assign tasks to third-party vendors. Track tasks and send invoice links.",
                        list3: "<span>Inventory planner.</span> See how many parts you have and what you need. Set limits for automatic restocks.",
                    }
                }
            ]
        },
    ];


    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-3002');
        clearFormFields();
        loadTest();
    });

    //Clear form fields
    function clearFormFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {
            el.value = '';
            if (el.closest('.mktoFormCol').classList.contains('input-filled')) {
                el.closest('.mktoFormCol').classList.remove('input-filled');
            }
        });
    }

    function loadTest() {
        updatePageContent();
        formUpdate();
        focusFields();

        // Add class 'safari' (used for cart scrollbar)
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.querySelector('body').classList.add('safari')
        }
        window.addEventListener("click", function (e) {
            if (e.target.classList.contains("show-comment-dynamic")) {
                e.target.parentElement.classList.add('spz-hidden');
                this.document.querySelector('#Lead_Notes__c').focus();
            }

            if (e.target.classList.contains("mktoField")) {
                showGlobalError();
            }

            if (e.target.classList.contains("mktoButton")) {
                document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {
                    checkError(el);
                    showGlobalError();
                });
            }

            if (e.target.classList.contains("get-started-cta")) {
                scrollToElement('#HeroFormPanel', 50);
                // this.document.querySelector('#HeroFormPanel').classList.add('angry-shake');
                // setTimeout(() => {
                //     this.document.querySelector('#HeroFormPanel').classList.remove('angry-shake');
                // }, 1500);
            }
        });
        document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1692677050/eptura/3002/form-checkmark-errored.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image">`
        );
    }

    //custom error for checkbox field
    function showGlobalError() {
        let checkErrorforCheckBox = setInterval(() => {
            if (document.querySelector('.mktoLogicalField.mktoCheckboxList.mktoInvalid') && document.querySelector('.mktoLogicalField.mktoCheckboxList.mktoInvalid + .mktoError')) {
                document.querySelector('#LblSingle_Opt_In__c').closest('.mktoFieldWrap').classList.add('spz-cstm-error');
            }
            else {
                document.querySelector('#LblSingle_Opt_In__c').closest('.mktoFieldWrap').classList.remove('spz-cstm-error');
            }
        }, 50);

        setTimeout(() => {
            clearInterval(checkErrorforCheckBox);
        }, 1000);
    }

    //Marketo form update
    function formUpdate() {
        // document.querySelector('#HeroFormCol .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;


        if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6>Fill in your details and <span>let&#8217;s get started <span></h6>';
        }

        document.querySelector('#HeroFormCol .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
        document.querySelector('#HeroFormCol .mktoForm .spz-email').before(document.querySelector('#HeroFormCol .mktoForm .mktoButtonRow'));

        document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic">+ Comment</a></div>`);

        document.querySelector('#I_am__c').addEventListener('change', function () {
            dropdownFunctionality(this.value);
        });

        document.querySelector('#LblI_am__c').textContent = 'I am...*';

        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {

            let fieldName = el.getAttribute('name');
            el.closest('.mktoFormCol').setAttribute('spz_fname', fieldName);

        });
    }

    //On value change of "I am.." field switch label od comment button
    function dropdownFunctionality(val) {
        let setBuffer = setInterval(() => {
            if (document.querySelector('#Lead_Notes__c')) {
                if (document.querySelector('.spz-anchor').classList.contains('spz-hidden')) {
                    document.querySelector('.spz-anchor').classList.remove('spz-hidden');
                }
            }
            else {
                document.querySelector('.spz-anchor').classList.add('spz-hidden');
            }

            if (val == 'Other' || val == 'A current client' || val == 'A current Partner') {
                document.querySelector('.show-comment-dynamic').textContent = '+ Please let us know how we may assist you';
            }
            else {
                document.querySelector('.show-comment-dynamic').textContent = '+ Comment';
            }
            focusFields();
        }, 5);

        setTimeout(() => {
            clearInterval(setBuffer);
        }, 50);

        waitForElm('#Solution_Type__c').then(function () {
            // document.querySelector('#Solution_Type__c option:first-child').textContent = '';
            let fieldName = document.querySelector('#Solution_Type__c').getAttribute('name');
            document.querySelector('#Solution_Type__c').closest('.mktoFormCol').setAttribute('spz_fname', fieldName);
        });
    }

    // On input focus add class on closest parent field class
    function focusFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {

            blockChar();

            el.addEventListener('focus', function () {
                el.closest('.mktoFormCol').classList.add('field-focus');
            });
            el.addEventListener('blur', function () {
                el.closest('.mktoFormCol').classList.remove('field-focus');
                checkError(el);
            });

            // add event listeners to the input element
            el.addEventListener('keypress', () => {
                checkError(el);
            });

            el.addEventListener('change', () => {
                checkError(el);
            });

            el.addEventListener('keydown', () => {
                checkError(el);
            });

            el.addEventListener('keyup', () => {
                checkError(el);
            });
        });
    }

    // Function to add .field-error class on closest parent .field class if .error is exist on input
    function checkError(elem) {
        let timeBuffer = setInterval(() => {
            if (elem.closest('.mktoFormCol ').querySelector('.mktoError') && elem.closest('.mktoFormCol').querySelector('.mktoInvalid')) {
                elem.closest('.mktoFormCol').classList.add('field-error');
            } else {
                elem.closest('.mktoFormCol').classList.remove('field-error');
            }
            if (elem && elem.value && (elem.value != '')) {
                // console.log(elem.value)
                elem.closest('.mktoFormCol').classList.add('input-filled');
                // elem.closest('.mktoFormCol').classList.remove('field-error');
            } else {
                elem.closest('.mktoFormCol').classList.remove('input-filled');
                // elem.closest('.mktoFormCol').classList.add('field-error');
            }

        }, 100);

        setTimeout(() => {
            clearInterval(timeBuffer);
        }, 1000);
    }

    //Block "e" from number of employees field
    function blockChar() {
        var inputBox = document.getElementById("NumberOfEmployees");

        var invalidChars = ["e",];

        inputBox.addEventListener("input", function () {
            this.value = this.value.replace(/[e\+\-]/gi, "");
        });

        inputBox.addEventListener("keydown", function (e) {
            if (invalidChars.includes(e.key)) {
                e.preventDefault();
            }
        });
    }

    //Hero image update
    function updatePageContent() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {

            //Footer logo updates for all URLs
            document.querySelector('#FooterLogo a img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg');

            document.querySelector('#FooterSocial a:nth-child(1) img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_twitter_footer.svg');
            document.querySelector('#FooterSocial a:nth-child(1) img').setAttribute('alt', 'Twitter');

            document.querySelector('#FooterSocial a:nth-child(2) img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_facebook_footer.svg');
            document.querySelector('#FooterSocial a:nth-child(2) img').setAttribute('alt', 'Facebook');

            document.querySelector('#FooterSocial a:nth-child(3) img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_linkedin_footer.svg');
            document.querySelector('#FooterSocial a:nth-child(3) img').setAttribute('alt', 'Linkedin');


            //URL specific image updates
            pageData.forEach(function (url) {
                if (identifyPage == url.pageName) {
                    //Update logo for pages
                    let updatedLogo = checkIfSafari(url.pageLogo);
                    document.querySelector('#NavLogo a').insertAdjacentHTML('afterbegin', `<img src="` + updatedLogo + `" alt="` + url.logoAlt + `" class="logo-img">`);

                    //Update hero images
                    let updatedHeroImg = checkIfSafari(url.heroImg);
                    if (document.querySelector('#HeroText img')) {
                        document.querySelector('#HeroText img').setAttribute('src', updatedHeroImg);
                        document.querySelector('#HeroText img').setAttribute('alt', url.heroImgAlt);
                    }
                    else {
                        document.querySelector('#HeroText').insertAdjacentHTML('beforeend', `<h1 class="pt-4"><img src="` + updatedHeroImg + `" alt="` + url.heroImgAlt + `"></h1>`);
                    }

                    document.querySelector('#HeroText').insertAdjacentHTML('afterend', `<div class="hero-img-tab"><img src="` + updatedHeroImg + `" alt="` + url.heroImgAlt + `"></div>`);

                    //Tabs feature section
                    document.querySelector('body > .body-wrapper > .d-flex.flex-column').insertAdjacentHTML('afterend', `<section class="spz-feature-section">
                        <div class="features-tabbed page_padding">
                            <div class="features-title">Features</div>
                                <div class="features-section">
                                `+ featureSecTabs(url.pageName) + featureSecContent(url.pageName) + `  
                                </div>
                           
                        </div>
                    </section>`);
                }
            });
        });
    }

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

    //Convert img for safari
    function checkIfSafari(imgSrc) {
        if (document.body.classList.contains('safari') && imgSrc.indexOf('webp') > -1) {
            return imgSrc.replace(/webp/g, "png");
        }
        else {
            return imgSrc;
        }
    }

    //Creating feature content
    function featureSecTabs(page) {
        let thisPage = page;
        //search index by page name
        const searchIndex = pageData.findIndex(page => page.pageName === thisPage);
        let featureEl = '<ul class="nav nav-tabs" id="myTab" role="tablist">'
        pageData[searchIndex].features.forEach((element, index) => {
            const activeClass = index == 0 ? "active" : "";

            featureEl += `<li class="nav-item" role="presentation"><button class="nav-link ` + activeClass + `" id="${element.featureTitle}-tab" data-toggle="tab" data-target="#${element.featureTitle.replace(/\s+/g, '').replace('&', '')}" type="button" role="tab" aria-controls="${element.featureTitle}" aria-selected="true">${element.featureTitle}</button></li>`
        });
        featureEl += '</ul>';

        return featureEl;
    }

    function featureSecContent(page) {
        let thisPage = page;
        //search index by page name
        const searchIndex = pageData.findIndex(page => page.pageName === thisPage);
        let featureEl = '<div class="tab-content" id="myTabContent">'
        pageData[searchIndex].features.forEach((element, index) => {
            const activeClass = index == 0 ? "show active" : "";


            featureEl += `<div class="tab-pane fade ` + activeClass + `" id="${element.featureTitle.replace(/\s+/g, '').replace('&', '')}" role="tabpanel" aria-labelledby="${element.featureTitle}-tab"><div class="feature-wrapper"><div class="img-wrapper"><picture>
            <source srcset="${element.featureImg}.webp" type="image/webp">
            <source srcset="${element.featureImg}.png" type="image/png"> 
            <img src="${element.featureImg}.webp" alt="${element.title}">
            </picture></div><div class="content-wrapper"><div class="copy">
            <div class="heading">
                <div class="independent-title">${element.title}<span> ${element.subTitle}</span></div>
                <div class="indent-title">
                    <div>${element.subTitle}</div>
                </div>
            </div>
            <div class="bullets">
                <div class="bullet">
                    ${element.featuresList.list1}
                </div>
                <div class="bullet">
                    ${element.featuresList.list2}
                </div>
                <div class="bullet">
                    ${element.featuresList.list3}
                </div>
            </div>
            <div class="button-wrapper">
                <div class="button">
                    <a href="javascript:void(0);" class="get-started-cta">Get started</a>
                </div>
            </div>
        </div></div></div>
            </div>`
        });
        featureEl += '</div>';

        return featureEl;
    }

    // Function to Scroll to position using smooth scroll vanilla JS
    // target: Element to scroll to
    // offset: Offset from the top of the element
    function scrollToElement(target, offset) {
        const targetElm = document.querySelector(target);
        const targetElmOffset = targetElm.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetElmOffset,
            behavior: 'smooth'
        });
    }
})();