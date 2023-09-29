(function () {
    document.body.classList.add('spz-3013');
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.querySelector('body').classList.add(identifyPage);


    const pageContent = [
        {
            pageName: "ppc-proxyclick-discover-a-better-way-to-check-in-visitors",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695762846/eptura/3013/endorsed_logos.svg",
            logoAlt: "Proxyclick Logo",
            title: "VISiTOR MANAGEMENT SOFTWARE",
            subtitle: "Make the visitor <hyph>check-in</hyph> experience 50% faster while improving security.",
            list1: "<span>Visitor check-in.</span> Create badges, control access, and get real-time alerts. Pre-screen. Self-check in kiosks.",
            list2: "<span>Security & compliance.</span> Include identity verification, NDAs, safety briefings, or health screens. Log compliance.",
            list3: "<span>Integrations.</span> Sync data with internal access and security systems. Automated email or Slack notifications.",
            bannerImgHD: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/desktop__proxyclick__image-interfaces_1.webp",
            bannerImgDesk: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/desktop__proxyclick__image-interfaces.webp",
            bannerImgTab: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/tablet__proxyclick__image-interfaces.webp",
            bannerImgMob: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/mobile__proxyclick__image-interfaces.webp",
            bannerAlt: "Proxyclick Banner Image",
        },
        {
            pageName: "ppc-archibus-maintenance-software",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695975635/eptura/3013/endorsed_logos_3.svg",
            logoAlt: "Archibus Logo",
            title: "Next-Gen Maintenance Management Software",
            subtitle: "Automate preventive maintenance and repair. Reduce costs by 30%.",
            list1: "<span>Work orders.</span> Automatically generate detailed work orders when assets are due for maintenance. ",
            list2: "<span>Repair management.</span> Auto-send requests to relevant workers via the mobile app. See repair status and track orders.",
            list3: "<span>Budgeting.</span> Get analytics on cost, labor, and performance of operations. Easily generate plans and budgets.",
            bannerImgHD: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/desktop__archibus__image-interfaces_1.webp",
            bannerImgDesk: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/desktop__archibus__image-interfaces.webp",
            bannerImgTab: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/tablet__archibus__image-interfaces.webp",
            bannerImgMob: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/mobile__archibus__image-interfaces.webp",
            bannerAlt: "Archibus Banner Image",
        },
        {
            pageName: "ppc-eptura",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695975646/eptura/3013/main_logo.svg",
            logoAlt: "Eptura logo",
            title: "WORKPLACE AND ASSET MANAGEMENT SOFTWARE",
            subtitle: "Automate operations with one platform for workplace and asset management",
            list1: "<span>Workplace solutions.</span> Desk and meeting room bookings, visitor management, and space planning.",
            list2: "<span>Asset visibility.</span> See asset inventory, lifecycles, and compliance details. Get a complete view of facilities and spaces. ",
            list3: "<span>Maintenance.</span> Automate preventive maintenance, view cost history, and schedule repairs for all your assets.",
            bannerImgHD: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/desktop__eptura__image-interfaces_1.webp",
            bannerImgDesk: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/desktop__eptura__image-interfaces.webp",
            bannerImgTab: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/tablet__eptura__image-interfaces.webp",
            bannerImgMob: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/mobile__eptura__image-interfaces.webp",
            bannerAlt: "Eptura Banner Image",
        },
        {
            pageName: "ppc-condeco-make-your-flexible-office-work-better",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695975623/eptura/3013/endorsed_logos_2.svg",
            logoAlt: "Condeco logo",
            title: "Workspace Scheduling software",
            subtitle: "Streamline desk and <br>meeting room scheduling. Simplify hybrid work.",
            list1: "<span>Bookings.</span> Schedule desks, meetings, and parking via the app or your calendar. Instantly notify attendees of any changes. ",
            list2: "<span>Room selection.</span> Find rooms with the equipment and space you need. Auto-book new rooms if you reschedule meetings.",
            list3: "<span>Collaboration.</span> See when co-workers will be in the office and their desk location. Easily manage your hybrid work schedule. ",
            bannerImgHD: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/desktop__condeco__image-interfaces_1.webp",
            bannerImgDesk: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/desktop__condeco__image-interfaces.webp",
            bannerImgTab: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/tablet__condeco__image-interfaces.webp",
            bannerImgMob: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/mobile__condeco__image-interfaces.webp",
            bannerAlt: "Condeco Banner Image",
        },
        {
            pageName: "ppc-eptura-asset-management",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695975646/eptura/3013/main_logo.svg",
            logoAlt: "Eptura logo",
            title: "Asset Management Software",
            subtitle: `Automate equipment maintenance. Reduce costs. Increase performance.`,
            list1: "<span>Work orders.</span> View all work orders in one portal. Easily provide technicians with schedules, locations, and task descriptions.",
            list2: "<span>Lifecycle tracking.</span> See your cost history, repair schedules, and upcoming preventive maintenance for all your assets.",
            list3: "<span>Cost forecasting.</span> Track expenses and cost comparisons. Create monthly budgets based on historical data.",
            bannerImgHD: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/desktop__ppc-eptura-asset-management__image-interfaces_1.webp",
            bannerImgDesk: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/desktop__ppc-eptura-asset-management__image-interfaces.webp",
            bannerImgTab: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/tablet__ppc-eptura-asset-management__image-interfaces.webp",
            bannerImgMob: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/mobile__ppc-eptura-asset-management__image-interfaces.webp",
            bannerAlt: "Asset Management Banner Image",
        },
        {
            pageName: "ppc-eptura-room-management",
            pageLogo: "//res.cloudinary.com/dxprfaxf3/image/upload/v1695975646/eptura/3013/main_logo.svg",
            logoAlt: "Eptura logo",
            title: "Desk and Meeting Room Booking Software",
            subtitle: `Streamline workspace bookings. Boost hybrid collaboration.`,
            list1: "<span>Bookings.</span> Schedule desks, meeting rooms, and parking. Book rooms with the right equipment for any meeting.",
            list2: "<span>Navigation.</span> Digital floor plans make it easy to find the right room or locate the one you&#8217;ve booked upon arrival.",
            list3: "<span>Collaboration.</span> See when co-workers will be in-office and their desk location. Easily manage your hybrid work schedule. ",
            bannerImgHD: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/desktop__ppc-eptura-room-management__image-interfaces_2.webp",
            bannerImgDesk: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/desktop__ppc-eptura-room-management__image-interfaces_1.webp",
            bannerImgTab: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/tablet__ppc-eptura-room-management__image-interfaces_1.webp",
            bannerImgMob: "//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3013/mobile__ppc-eptura-room-management__image-interfaces_1.webp",
            bannerAlt: "Room Management Banner Image",
        }
    ];

    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-3013');
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
        document.querySelector('#HeroFormCol .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;


        if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6><span>Let&#8217;s get started <span></h6>';
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


            //URL specific content updates
            pageContent.forEach(function (url) {
                if (identifyPage == url.pageName) {
                    document.querySelector('#nav  #NavLogo > a').insertAdjacentHTML('afterbegin', `<div class="spz-logo"><img src="` + url.pageLogo + `" alt="` + url.logoAlt + `"></div>`);

                    document.querySelector('#hero > .hero_container > .row > .col-md.pb-5').insertAdjacentHTML('beforeend', `<div class="spz-left-content"><div class="left-wrapper"><div class="copy">
                    <div class="heading">
                    <div>`+ url.title + `</div>
                    <div class="subtitle">
                    `+ url.subtitle + `
                    </div>
                    </div>
                    <div class="bullets">
                    <div class="bullet">
                    `+ url.list1 + `
                    </div>
                    <div class="bullet">
                    `+ url.list2 + `
                    </div>
                    <div class="bullet">
                    `+ url.list3 + `
                    </div>
                    </div></div>`);

                    let imgHD = checkIfSafari(url.bannerImgHD);
                    let imgDesk = checkIfSafari(url.bannerImgDesk);
                    let imgTab = checkIfSafari(url.bannerImgTab);
                    let imgMob = checkIfSafari(url.bannerImgMob);
                    document.querySelector("#hero").insertAdjacentHTML('afterend', `<div class="spz-banner-section"><div class="img-banner-wrapper"><picture>
                    <source media="(min-width:1900px)" srcset="` + imgHD + `">
                    <source media="(min-width:1200px)" srcset="` + imgDesk + `">
                    <source media="(min-width:768px)" srcset="` + imgTab + `">
                    <img src="` + imgMob + `" alt="` + url.bannerAlt + `">
                  </picture></div></div><div class="spz-logo-section page_padding"><h6 class="logo-title">Trusted by 16,000+ customers worldwide</h6><div class="img-logo-wrapper"><picture>
                  <source media="(min-width:1200px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/v1695762702/eptura/3013/logo_set_-_desktop.svg">
                  <source media="(min-width:768px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/v1695762679/eptura/3013/logo_set_-_tablet.svg">
                  <img src="//res.cloudinary.com/dxprfaxf3/image/upload/v1695762665/eptura/3013/logo_set_-_mobile.svg" alt="Partner logo">
                </picture></div></div>`);
                }
            })
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
})();
