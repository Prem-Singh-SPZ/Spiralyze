(function () {
    document.body.classList.add('spz-3012');
    //Adding page specific classes 
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.querySelector('body').classList.add(identifyPage);


    const pageContent = [
        {
            pageName: "ppc-proxyclick-discover-a-better-way-to-check-in-visitors",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695293167/eptura/3012/endorsed_logos.svg",
            logoAlt: "Proxyclick Logo",
            title: "VISiTOR MANAGEMENT SOFTWARE",
            subtitle: "Make the visitor <hyph>check-in</hyph> experience <span>50% faster</span> while improving security.",
            lisTitle1: "Visitor check-in.",
            listContent1: "Create badges, control access, and get real-time alerts. Pre-screen. Self-check in kiosks.",
            lisTitle2: "Security & compliance.",
            listContent2: "Include identity verification, NDAs, safety briefings, or health screens. Log compliance.",
            lisTitle3: "Integrations.",
            listContent3: "Sync data with internal access and security systems. Automated email or Slack notifications.",
        },
        {
            pageName: "ppc-archibus-maintenance-software",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695293241/eptura/3012/endorsed_logos_2.svg",
            logoAlt: "Archibus Logo",
            title: "Next-Gen Maintenance Management Software",
            subtitle: "Automate preventive maintenance and repair. Reduce costs <span>by 30%.</span>",
            lisTitle1: "Work orders.",
            listContent1: "Automatically generate detailed work orders when assets are due for maintenance.",
            lisTitle2: "Repair management.",
            listContent2: "Auto-send requests to relevant workers via the mobile app. See repair status and track orders.",
            lisTitle3: "Budgeting.",
            listContent3: "Get analytics on cost, labor, and performance of operations. Easily generate plans and budgets.",
        },
        {
            pageName: "ppc-eptura",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695293274/eptura/3012/eptura-logo.svg",
            logoAlt: "Eptura logo",
            title: "WORKPLACE AND ASSET MANAGEMENT SOFTWARE",
            subtitle: "Automate operations with one platform for workplace and asset management",
            lisTitle1: "Workplace solutions.",
            listContent1: "Desk and meeting room bookings, visitor management, and space planning. ",
            lisTitle2: "Asset visibility.",
            listContent2: "See asset inventory, lifecycles, and compliance details. Get a complete view of facilities and spaces. ",
            lisTitle3: "Maintenance.",
            listContent3: "Automate preventive maintenance, view cost history, and schedule repairs for all your assets.",
        },
        {
            pageName: "ppc-condeco-make-your-flexible-office-work-better",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695293212/eptura/3012/endorsed_logos_1.svg",
            logoAlt: "Condeco logo",
            title: "Workspace Scheduling software",
            subtitle: "Streamline desk and <br>meeting room scheduling. Simplify hybrid work.",
            lisTitle1: "Bookings.",
            listContent1: "Schedule desks, meetings, and parking via the app or your calendar. Instantly notify attendees of any changes.",
            lisTitle2: "Room selection.",
            listContent2: "Find rooms with the equipment and space you need. Auto-book new rooms if you reschedule meetings.",
            lisTitle3: "Collaboration.",
            listContent3: "See when co-workers will be in the office and their desk location. Easily manage your hybrid work schedule.",
        },
        {
            pageName: "ppc-eptura-asset-management",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695293294/eptura/3012/eptura-logo_1.svg",
            logoAlt: "Eptura logo",
            title: "Asset Management Software",
            subtitle: `Automate equipment maintenance. <br class="mob-tab">Reduce costs. Increase performance.`,
            lisTitle1: "Work orders.",
            listContent1: "View all work orders in one portal. Easily provide technicians with schedules, locations, and task descriptions.",
            lisTitle2: "Lifecycle tracking.",
            listContent2: "See your cost history, repair schedules, and upcoming preventive maintenance for all your assets.",
            lisTitle3: "Cost forecasting.",
            listContent3: "Track expenses and cost comparisons. Create monthly budgets based on historical data.",
        },
        {
            pageName: "ppc-eptura-room-management",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695293294/eptura/3012/eptura-logo_1.svg",
            logoAlt: "Eptura logo",
            title: "Desk and Meeting Room Booking Software",
            subtitle: `Streamline workspace bookings. Boost hybrid collaboration.`,
            lisTitle1: "Bookings.",
            listContent1: "Schedule desks, meeting rooms, and parking. Book rooms with the right equipment for any meeting.",
            lisTitle2: "Navigation.",
            listContent2: "Digital floor plans make it easy to find the right room or locate the one you&#8217;ve booked upon arrival.",
            lisTitle3: "Collaboration.",
            listContent3: "See when co-workers will be in-office and their desk location. Easily manage your hybrid work schedule.",
        }
    ];

    //Main test called here
    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        clearFormFields();
        document.body.classList.add('spz-3012');
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
            document.querySelector('body').classList.add('safari')
        }

        document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1692677050/eptura/3002/form-checkmark-errored.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image">`
        );
    }

    //Clear form fields
    function clearFormFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"]):not([type="hidden"])').forEach(function (el) {
            el.value = '';
            if (el.closest('.mktoFormCol').classList.contains('input-filled')) {
                el.closest('.mktoFormCol').classList.remove('input-filled');
            }
        });
    }

    //Appending sections provided in mock
    function updatePageContent() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {
            pageContent.forEach(function (url) {
                if (identifyPage == url.pageName) {
                    document.querySelector('#hero > .hero_container > .row > #HeroFormCol #HeroFormPanel').insertAdjacentHTML('afterbegin', `<div class="spz-logo"><img src="` + url.pageLogo + `" alt="` + url.logoAlt + `"></div>`);

                    document.querySelector('#hero > .hero_container > .row > #HeroFormCol').insertAdjacentHTML('beforeend', `<div class="spz-left-content"><div class="left-wrapper"><div class="copy">
                    <div class="heading">
                    <div>`+ url.title + `</div>
                    <div class="subtitle">
                    `+ url.subtitle + `
                    </div>
                    </div>
                    <div class="bullets">
                    <div class="bullet">
                    <div class="bullet-title">`+ url.lisTitle1 + `</div>
                    <div class="bullet-content">`+ url.listContent1 + `</div>
                    </div>
                    <div class="bullet">
                    <div class="bullet-title">`+ url.lisTitle2 + `</div>
                    <div class="bullet-content">`+ url.listContent2 + `</div>
                    </div>
                    <div class="bullet">
                    <div class="bullet-title">`+ url.lisTitle3 + `</div>
                    <div class="bullet-content">`+ url.listContent3 + `</div>
                    </div>
                    </div></div>`);
                }
            })
        });
    }


    //custom error logic for checkbox field in form
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

    //Marketo form updates
    function formUpdate() {
        if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6>Request a demo</h6>';
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

        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {

            let fieldName = el.getAttribute('name');
            el.closest('.mktoFormCol').setAttribute('spz_fname', fieldName);
            if (el.closest('select')) {
                el.closest('.mktoFieldWrap').classList.add('select');
            }

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
})();



