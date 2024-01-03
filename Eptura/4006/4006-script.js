(function () {
    document.body.classList.add('spz-4006');
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.body.classList.add(identifyPage);

    const assetURL = 'https://res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/4006/';

    const rightBullets = [
        {
            pageName: "website-proxyclick-demo",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695293167/eptura/3012/endorsed_logos.svg",
            logoAlt: "Proxyclick Logo",
            formSubTitle: "Make the visitor check-in experience 50% faster",
            title: "VISiTOR MANAGEMENT SOFTWARE",
            subtitle: "How does it work?",
            lisTitle1: "Set up pre-screening process",
            listContent1: "Upload pre-screening documents, like legal forms and questionnaires, to send to guests before arrival.",
            lisTitle2: "Invite visitors",
            listContent2: "Send invites that automatically include check-in requirements. Approve or deny based on responses.",
            lisTitle3: "Enjoy streamlined check-in",
            listContent3: "Check visitors in with a couple of clicks. Or let them scan for entry. Reduce front desk admin.",
            bgDesktop: assetURL + "proxyclick_bg_1440.webp",
            bgTablet: assetURL + "proxyclick_bg_1441.webp",
            bgMobile: assetURL + "proxyclick_bg_1456.webp",
        },
        {
            pageName: "website-managerplus-demo",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696950672/eptura/4006/logo_-managerplus.svg",
            logoAlt: "Manager Plus Logo",
            formSubTitle: "Streamline asset maintenance",
            title: "All-in-one Asset MANAGEMENT SOFTWARE",
            subtitle: "How does it work?",
            lisTitle1: "Set up asset details",
            listContent1: "Upload maintenance history, equipment lists, and warranty information for all assets. ",
            lisTitle2: "Schedule automated maintenance",
            listContent2: "Auto-send work orders based on usage thresholds, or as needed. See asset status.",
            lisTitle3: "Enjoy streamlined asset management",
            listContent3: "Track progress. Auto-reorder inventory. Reduce time spent managing assets.",
            bgDesktop: assetURL + "proxyclick_bg_1443.webp",
            bgTablet: assetURL + "proxyclick_bg_1444.webp",
            bgMobile: assetURL + "proxyclick_bg_1445.webp",
        },
        {
            pageName: "website-archibus-demo",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696950683/eptura/4006/archibus-eptura-logo-color_2.svg",
            logoAlt: "Archibus Logo",
            formSubTitle: "Automate facility management to reduce costs by 30%",
            title: "Space and Facility MANAGEMENT SOFTWARE",
            subtitle: "How does it work?",
            lisTitle1: "Set up facility and asset info",
            listContent1: "Upload your facility and asset details, such as condition, space usage, costs, and occupancy.",
            lisTitle2: "Monitor your workplace",
            listContent2: "Adjust floor plans. Track occupancy. Set asset maintenance schedules.",
            lisTitle3: "Enjoy streamlined maintenance",
            listContent3: "Optimize facilities and assets based on usage analytics. Track inventory and work orders in one place.",
            bgDesktop: assetURL + "proxyclick_bg_1446.webp",
            bgTablet: assetURL + "proxyclick_bg_1447.webp",
            bgMobile: assetURL + "proxyclick_bg_1448.webp",
        },
        {
            pageName: "website-spaceiq-demo",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1696950695/eptura/4006/spaceiq-eptura-logo-color_2.svg",
            logoAlt: "SpaceIQ logo",
            formSubTitle: "Plan facility moves in a fraction of the time",
            title: "Workplace operations SOFTWARE",
            subtitle: "How does it work?",
            lisTitle1: "Set up your workspace environment",
            listContent1: "Upload details about your space, like floor plans, equipment, and lease costs.",
            lisTitle2: "Plan space and facility moves",
            listContent2: "Drag-and-drop desks, equipment, structures, and more. Track your real estate portfolio.",
            lisTitle3: "Enjoy streamlined operations",
            listContent3: "Send updated floor plans in a few clicks. Streamline moves and real estate planning.",
            bgDesktop: assetURL + "proxyclick_bg_1449.webp",
            bgTablet: assetURL + "proxyclick_bg_1450.webp",
            bgMobile: assetURL + "proxyclick_bg_1451.webp",
        },
        {
            pageName: "website-ioffice-demo",
            pageLogo: "https://res.cloudinary.com/dxprfaxf3/image/upload/v1696950704/eptura/4006/ioffice-eptura-logo-color_2.svg",
            logoAlt: "iOffice Logo",
            formSubTitle: "Plan and manage your entire facility in 87% less time",
            title: "Facility MANAGEMENT SOFTWARE",
            subtitle: "How does it work?",
            lisTitle1: "Set up workplace details",
            listContent1: "Add your floor plans, inventory, employee roles and locations, and additional details.",
            lisTitle2: "Manage your workplace",
            listContent2: "Drag-and-drop to plan spaces. Track assets and send work orders. Book spaces in <br class='mobile-only'/> 1-click.",
            lisTitle3: "Enjoy a unified workplace strategy",
            listContent3: "Optimize space usage, asset health, and employee services based on usage trends.",
            bgDesktop: assetURL + "proxyclick_bg_1452.webp",
            bgTablet: assetURL + "proxyclick_bg_1453.webp",
            bgMobile: assetURL + "proxyclick_bg_1454.webp",
        }
    ];

    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        clearFormFields();
        document.body.classList.add('spz-4006');
        loadTest();
    });

    function loadTest() {
        formUpdate();
        focusFields();
        updatePageContent();

        window.addEventListener("click", function (e) {
            if (e.target.classList.contains("show-comment-dynamic")) {
                e.target.parentElement.classList.add('spz-hidden');
                this.document.querySelector('#Lead_Notes__c').focus();
            }

            if (e.target.classList.contains("mktoField")) {
                showGlobalError();
            }

            if (e.target.classList.contains("mktoButton")) {
                document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
                    checkError(el);
                    showGlobalError();
                });
            }
        });

        // Add class 'safari' 
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.body.classList.add('safari')
        }

        document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1692677050/eptura/3002/form-checkmark-errored.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image">`);
    }

    //Clear form fields
    function clearFormFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
            el.value = '';
            if (el.closest('.mktoFormCol').classList.contains('input-filled')) {
                el.closest('.mktoFormCol').classList.remove('input-filled');
            }
        });
    }

    function updatePageContent() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {
            rightBullets.forEach(function (con) {
                if (identifyPage == con.pageName) {
                    document.querySelector('#hero > .hero_container > .row > #HeroFormCol #HeroFormPanel').insertAdjacentHTML('afterbegin', `<div class="spz-logo"><img src="` + con.pageLogo + `" alt="` + con.logoAlt + `"></div>`);
                    document.querySelector('#HeroFormCol #HeroFormTitleText').insertAdjacentHTML('afterend', `<div class="sub-title">${con.formSubTitle}</div>`);

                    document.querySelector('#hero > .hero_container > .row > #HeroFormCol').insertAdjacentHTML('beforeend', `
                    <div class="spz-left-content">
                        <div class="left-wrapper">
                            <div class="copy">
                                <div class="heading">
                                    <div>`+ con.title + `</div>
                                    <div class="subtitle">`+ con.subtitle + `</div>
                                </div>
                                <div class="bullets">
                                    <span class="dotted-bullet"></span>
                                    <div class="bullet">
                                        <div class="bullet-title">`+ con.lisTitle1 + `</div>
                                        <div class="bullet-content">`+ con.listContent1 + `</div>
                                    </div>
                                    <div class="bullet">
                                        <div class="bullet-title">`+ con.lisTitle2 + `</div>
                                        <div class="bullet-content">`+ con.listContent2 + `</div>
                                    </div>
                                    <div class="bullet">
                                        <div class="bullet-title">`+ con.lisTitle3 + `</div>
                                        <div class="bullet-content">`+ con.listContent3 + `</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`);

                    setBgImage(con);
                }
            })
        });
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

    // remove all section from .body-wrapper except #hero
    // function removeSections() {
    //     document.querySelectorAll('.body-wrapper > section').forEach(function (el) {
    //         console.log(el.getAttribute('id'));
    //         if (el.getAttribute('id') != 'hero') {
    //             el.remove();
    //         }
    //     });
    // }
    // removeSections()

    //Marketo form update
    function formUpdate() {
        if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6>Get a demo</h6>';

            // debugger;
            // rightBullets.forEach(function (con) {
            //     debugger;
            //     if (identifyPage == con.pageName) {
            //         debugger;
            //         document.querySelector('#HeroFormCol #HeroFormTitleText').insertAdjacentHTML('afterend', `<div class="sub-title">${con.formSubTitle}</div>`);
            //     }
            // });
        }

        document.querySelector('#HeroFormCol .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
        document.querySelector('#HeroFormCol .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;

        document.querySelector('body .body-wrapper #hero .hero_container.page_padding > .row #HeroFormCol #HeroFormPanel #HeroForm form.mktoForm .mktoFormRow .mktoFormCol .mktoFieldWrap .mktoHtmlText.mktoHasWidth span').innerText = 'If you consent to us contacting you, please tick below to confirm you would like us to contact you:';

        document.querySelector('#HeroFormCol .mktoForm .spz-email').before(document.querySelector('#HeroFormCol .mktoForm .mktoButtonRow'));

        document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic">+ Comment</a></div>`);

        document.querySelector('#I_am__c').addEventListener('change', function () {
            dropdownFunctionality(this.value);
        });

        document.querySelector('#LblI_am__c').textContent = 'I am...*';
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
    }

    // On input focus add class on closest parent field class
    function focusFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {

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
        document.querySelector('#NumberOfEmployees').addEventListener("keydown", function (e) {
            if (e.key == 'e' || e.key == 'E') {
                e.preventDefault();
            }
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

    // Set background image on body according to screen size (1200px, 1024px, 768px)
    function setBgImage(con) {
        document.body.insertAdjacentHTML('afterbegin', `
            <style>
                body {
                    background-image: url(${con.bgDesktop});
                    @media (max-width: 1199.98px) {
                        background-image: url(${con.bgTablet});
                    }
                    @media (max-width: 767.98px) {
                        background-image: url(${con.bgMobile});
                    }
                }
            </style>
        `);
    }
})();



