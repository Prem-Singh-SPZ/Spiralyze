(function () {
    document.body.classList.add('spz-4003');
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.querySelector('body').classList.add(identifyPage);


    const pageContent = [{
        pageName: "website-proxyclick-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575703/eptura/4003/proxyclick_logo.svg",
        logoAlt: "Proxyclick Demo",
        rightTitle: "Make the visitor check-in experience <span>50% faster</span> while improving security.",
        rightHeroImgWEBP: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_6.webp",
        rightHeroImgPNG: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_6.png",
        heroImgAlt: "Proxyclick UI Image",
        listItem1: "<span>Visitor check-in.</span> Create badges, control access, and get real-time alerts. Pre-screen. Self-check in kiosks.",
        listItem2: "<span>Security & compliance.</span> Include identity verification, NDAs, safety briefings, or health screens. Log compliance.",
        listItem3: "<span>Integrations.</span> Sync data with internal access and security systems. Automated email or Slack notifications."
    },
    {
        pageName: "website-managerplus-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575720/eptura/4003/managerplus-eptura-logo-1.svg",
        logoAlt: "Managerplus Demo",
        rightTitle: "Reduce asset downtime <span>by&nbsp;</span><span> 50%.</span> Streamline inventory and maintenance.",
        rightHeroImgWEBP: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_21.webp",
        rightHeroImgPNG: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_21.png",
        heroImgAlt: "Managerplus UI Image",
        listItem1: "<span>Asset management.</span> Track and manage all assets. Service history, maintenance, budgeting, and more.",
        listItem2: "<span>Maintenance workflows.</span> Automatically trigger work orders at set intervals or when a usage threshold is met.",
        listItem3: "<span>Inventory.</span> See exactly how many parts you have and when it&#8217;s time to order more. Auto-reorder when low."
    },
    {
        pageName: "website-archibus-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575732/eptura/4003/archibus-eptura-logo-color_1.svg",
        logoAlt: "Archibus Demo",
        rightTitle: "Reduce costs <span>by 30%</span> by automating space and facility management.",
        rightHeroImgWEBP: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_23.webp",
        rightHeroImgPNG: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_23.png",
        heroImgAlt: "Archibus UI Image",
        listItem1: "<span>Space planning.</span> Sort office desks, tables, and rooms. Plan for moves and occupancy changes.",
        listItem2: "<span>Work orders.</span> Automatically generate detailed work orders when assets are due for maintenance. See repair status.",
        listItem3: "<span>Scheduling.</span> Reserve desks, meeting rooms, and parking. Book rooms with the right equipment for any meeting."
    },
    {
        pageName: "website-spaceiq-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575752/eptura/4003/spaceiq-eptura-logo-color_1.svg",
        logoAlt: "SpaceIQ Demo",
        rightTitle: "Automate space planning and management. Reduce costs <span>by 30%.</span>",
        rightHeroImgWEBP: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_29.webp",
        rightHeroImgPNG: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_29.png",
        heroImgAlt: "SpaceIQ UI Image",
        listItem1: "<span>Space planning.</span> Track spaces, people, furniture, and assets in one place. Sort office desks, tables, and rooms. ",
        listItem2: "<span>Move management.</span> Plan for moves using drag-and-drop. Auto-update floor plans once you&#8217;ve relocated.",
        listItem3: "<span>Real estate portfolio.</span> Track your real estate for all your locations. Lease costs, utilization rates, and occupancies."
    },
    {
        pageName: "website-ioffice-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575766/eptura/4003/ioffice-eptura-logo-color_1.svg",
        logoAlt: "IOffice Demo",
        rightTitle: "Plan, optimize, and manage your entire facility <span>in 87%</span> less time.",
        rightHeroImgWEBP: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_31.webp",
        rightHeroImgPNG: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_31.png",
        heroImgAlt: "IOffice UI Image",
        listItem1: "<span>Space planning.</span> Get a digital floor plan of your facilities. Drag-and-drop teams, desks, assets, amenities, and more.",
        listItem2: "<span>Assets.</span> Track asset costs, service requests, and repair history. Auto-create preventive maintenance work orders. ",
        listItem3: "<span>Employee services.</span> Book meeting rooms and desks. Notify hosts of visitors. Request catering. Reduce turnover 59%."
    },

    ];

    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-4003');
        loadTest();
    });

    function loadTest() {
        updateHeroImage();
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
                document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {
                    checkError(el);
                    showGlobalError();
                });
            }
        });

        // Add class 'safari' 
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.querySelector('body').classList.add('safari')
        }

        document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1693889244/eptura/4003/form-checkmark-errored.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1693889242/eptura/4003/form-checkmark-checked.svg" as="image">`
        );
    }


    function updatePageContent() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {
            pageContent.forEach(function (url) {
                if (identifyPage == url.pageName) {

                    document.querySelector('#hero > .hero_container > .row > #HeroFormCol').insertAdjacentHTML('afterbegin', `<div class="spz-logo"><a href="https://eptura.com/" target="_blank"> <img src="` + url.pageLogo + `" alt="` + url.logoAlt + `"></a></div>`);

                    document.querySelector('#hero > .hero_container > .row > #HeroFormCol').insertAdjacentHTML('beforeend', `<div class="spz-social-section"><div class="social-section-title">Trusted by 16,000+ customers worldwide</div><div class="social-logo-section"><div class="logo-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-zoom.svg" alt="Zoom"></div><div class="logo-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-comcast.svg" alt="Comcast"></div><div class="logo-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-nasdaq.svg" alt="Nasdaq"></div><div class="logo-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693906373/eptura/4003/logo-slack_1.svg" alt="Slack"></div><div class="logo-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-johnson.svg" alt="Johnson"></div><div class="logo-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-pepsico.svg" alt="Pepsico"></div><div class="logo-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-starbucks.svg" alt="Starbucks coffee"></div><div class="logo-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-generalelectric.svg" alt="General Electric"></div><div class="logo-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-unilever.svg" alt="Unilever"></div></div></div>`);

                    document.querySelector('#hero > .hero_container > .row > .col-md.pb-5').insertAdjacentHTML('beforeend', `<div class="spz-copy">
                    <div class="wrap">
                        <div class="main">
                            <div class="hero-title">`+ url.rightTitle + `
                            </div>
                            <div class="hero-banner-img"><picture>
                                <source srcset="`+ url.rightHeroImgWEBP + `" type="image/webp">
                                    <source srcset="`+ url.rightHeroImgPNG + `" type="image/png">
                                        <img src="`+ url.rightHeroImgWEBP + `" alt="` + url.heroImgAlt + `">
                                        </picture>
                                    </div>
                                    <div class="bullets">
                                        <div class="bullet">
                                        `+ url.listItem1 + `
                                        </div>
                                        <div class="bullet">
                                            `+ url.listItem2 + `
                                        </div>
                                        <div class="bullet">
                                            `+ url.listItem3 + `
                                        </div>
                                    </div>
                                </div>
                                <div class="spz-simplified-footer">
                                    <div class="footer-container">
                                        <div class="links">
                                            <a href="https://eptura.com/terms/saas-privacy-policy">SaaS Privacy Policy</a>
                                            <a href="https://eptura.com/terms/privacy-policy/">Privacy Policy</a>
                                            <a href="https://eptura.com/terms/modern-slavery/">Modern Slavery</a>
                                        </div>
                                        <div class="saas-privacy-policy">All Rights Reserved © Eptura™</div>
                                    </div>
                                </div>
                            </div>
                        </div>`);
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

    //Marketo form update
    function formUpdate() {
        if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6>Request a demo</h6>';
        }

        document.querySelector('#HeroFormCol .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
        document.querySelector('#HeroFormCol .mktoForm em').innerHTML = `Trouble submitting? Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;

        document.querySelector('#HeroFormCol .mktoForm .spz-email').before(document.querySelector('#HeroFormCol .mktoForm .mktoButtonRow'));

        document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic">+ Comment</a></div>`);

        document.querySelector('#I_am__c').addEventListener('change', function () {
            dropdownFunctionality(this.value);
        });

        document.querySelector('#LblI_am__c').textContent = 'I am...*';

        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {

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
    function updateHeroImage() {
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
            if (window.location.href.indexOf('ppc-proxyclick-discover-a-better-way-to-check-in-visitors') > -1) {
                if (document.body.classList.contains('safari')) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989323/eptura/3001/endorsed_logos_1.png" alt="Proxyclick" class="logo-img">`);
                }
                else {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_1.webp" alt="Proxyclick" class="logo-img">`);
                }

                document.querySelector('#hero #HeroText img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/proxyclick-ui.webp');
                document.querySelector('#hero #HeroText img').setAttribute('alt', 'Simplify visitor check-in');
                document.body.classList.add('ppc-proxyclick');
            }

            else if (window.location.href.indexOf('ppc-condeco-make-your-flexible-office-work-better') > -1) {
                if (document.body.classList.contains('safari')) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989344/eptura/3001/endorsed_logos_2.png" alt="Condeco" class="logo-img">`);
                }
                else {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_2.webp" alt="Condeco" class="logo-img">`);
                }

                document.querySelector('#hero #HeroText img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/condeco-ui.webp');
                document.querySelector('#hero #HeroText img').setAttribute('alt', 'Make hybrid work, work');
                document.body.classList.add('ppc-condeco');
            }

            else if (window.location.href.indexOf('ppc-archibus-maintenance-software') > -1) {
                if (document.body.classList.contains('safari')) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989355/eptura/3001/endorsed_logos_3.png" alt="Archibus" class="logo-img">`);
                }
                else {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_3.webp" alt="Archibus" class="logo-img">`);
                }

                if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
                    document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6>Fill in your details and <span>let&#x2019;s get started <span></span></span></h6>';
                }

                document.querySelector('#hero #HeroText').insertAdjacentHTML('beforeend', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/archibus-ui.webp" alt="optimize your maintenance operation" width= "488px"
                height="260px">`);
                document.body.classList.add('ppc-archibus');
            }

            else if (window.location.href.indexOf('https://lp.eptura.com/ppc-archibus') > -1) {
                if (document.body.classList.contains('safari')) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989355/eptura/3001/endorsed_logos_3.png" alt="Archibus" class="logo-img">`);
                }
                else {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_3.webp" alt="Archibus" class="logo-img">`);
                }

                if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
                    document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6>Fill in your details and <span>let&#x2019;s get started <span></span></span></h6>';
                }

                document.querySelector('#hero #HeroText > h1.pt-4').innerHTML = `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/archibus-ui.webp" alt="optimize your maintenance operation" width= "488px"
                height="260px">`;
                document.body.classList.add('ppc-archibus-demo');
            }

            else if (window.location.href.indexOf('ppc-eptura-room-management') > -1) {
                document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg" alt="Eptura" class="logo-img">`);

                // document.querySelector('#hero #HeroText').insertAdjacentHTML('afterbegin', `<div class="spz-wrapper-div"></div>`);
                // document.querySelector('.spz-wrapper-div').insertAdjacentElement('afterbegin', document.querySelector('#hero #HeroText > p'));
                // document.querySelector('.spz-wrapper-div').insertAdjacentElement('afterbegin', document.querySelector('#hero #HeroText > h6'));
                // document.querySelector('.spz-wrapper-div').insertAdjacentElement('afterbegin', document.querySelector('#hero #HeroText > h1'));

                // document.querySelector('#hero #HeroText img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/eptura-demo-ui.webp');
                document.querySelector('#hero #HeroText img').setAttribute('alt', 'Make hybrid work, work');
                document.body.classList.add('ppc-eptura-room');
            }

            else if (window.location.href.indexOf('ppc-eptura-asset-management') > -1) {
                document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg" alt="Eptura" class="logo-img">`);

                // document.querySelector('#hero #HeroText').insertAdjacentHTML('afterbegin', `<div class="spz-wrapper-div"></div>`);
                // document.querySelector('.spz-wrapper-div').insertAdjacentElement('afterbegin', document.querySelector('#hero #HeroText > p'));
                // document.querySelector('.spz-wrapper-div').insertAdjacentElement('afterbegin', document.querySelector('#hero #HeroText > h1'));
                // document.querySelector('.spz-wrapper-div').insertAdjacentElement('afterbegin', document.querySelector('#hero #HeroText > h6'));

                // document.querySelector('#hero #HeroText img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/eptura-demo-ui.webp');
                document.querySelector('#hero #HeroText img').setAttribute('alt', 'Maximize the performance');
                document.body.classList.add('ppc-eptura-asset');
            }

            else if (window.location.href.indexOf('ppc-eptura') > -1) {
                document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg" alt="Eptura" class="logo-img">`);

                document.querySelector('#hero #HeroText img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/eptura-demo-ui.webp');
                document.querySelector('#hero #HeroText img').setAttribute('alt', 'one platform to bring together');
                document.body.classList.add('ppc-eptura');
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

    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

})();



