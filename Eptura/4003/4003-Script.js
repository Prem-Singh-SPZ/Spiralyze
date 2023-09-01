(function () {
    document.body.classList.add('spz-4003');
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.querySelector('body').classList.add(identifyPage);


    const pageContent = [{
        pageName: "website-proxyclick-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575703/eptura/4003/proxyclick_logo.svg",
        logoAlt: "Proxyclick Demo",
        rightTitle: "Make the visitor check-in experience <span>50% faster</span> while improving security. ",
        rightHeroImgWEBP: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_6.webp",
        rightHeroImgPNG: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_6.png",
        heroImgAlt: "Proxyclick UI Image",
        listItem1: "<span>Visitor check-in.</span> Create badges, control access, and get real-time alerts. Pre-screen. Self-check in kiosks.",
        listItem2: "<span>Security & compliance.</span> Include identity verification, NDAs, safety briefings, or health screens. Log compliance.",
        listItem3: "<span>Integrations.</span> Sync data with internal access and security systems. Automated email or Slack notifications."
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

        document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1692677050/eptura/3002/form-checkmark-errored.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image">`
        );
    }


    function updatePageContent() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {
            pageContent.forEach(function (url) {
                if (identifyPage == url.pageName) {

                    document.querySelector('#hero > .hero_container > .row > #HeroFormCol').insertAdjacentHTML('afterbegin', `<div class="spz-logo"> <img src="` + url.pageLogo + `" alt="` + url.logoAlt + `"></div>`);

                    document.querySelector('#hero > .hero_container > .row > #HeroFormCol').insertAdjacentHTML('beforeend', `<div class="spz-social-section"><div class="social-section-title">Trusted by 16,000+ customers worldwide</div><div class="social-logo-section"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-zoom.svg" alt="Zoom"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-comcast.svg" alt="Comcast"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-nasdaq.svg" alt="Nasdaq"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-slack.svg" alt="Slack"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-johnson.svg" alt="Johnson"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-pepsico.svg" alt="Pepsico"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-starbucks.svg" alt="Starbucks coffee"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-generalelectric.svg" alt="General Electric"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693481278/eptura/4003/logo-unilever.svg" alt="Unilever"></div></div>`);

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
                                            <a href="https://eptura.com/terms/privacy-policy/">Privacy policy</a>
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
        document.querySelector('#HeroFormCol .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;

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



