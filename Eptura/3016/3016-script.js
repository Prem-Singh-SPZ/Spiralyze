(function () {
    document.body.classList.add('spz-3016');
    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-3016');
        loadTest();
        clearFormFields();

        document.querySelectorAll('a[href="#DemoRequest"]').forEach(function (el) {
            el.setAttribute('href', '#HeroFormPanel');
        });
    });

    //Clear form fields
    function clearFormFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
            el.value = '';
            if (el.closest('.mktoFormCol').classList.contains('input-filled')) {
                el.closest('.mktoFormCol').classList.remove('input-filled');
            }
        });
    }

    function loadTest() {
        updateHeroImage();
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
                document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
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


        if (document.querySelector('#HeroFormCol #HeroFormTitleText h6')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText h6').innerHTML = '<span>Let&#8217;s get started <span>';
        }

        document.querySelector('#HeroFormCol .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
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
            if (e.key == 'e') {
                e.preventDefault();
            }
        });
    }

    //Hero image update
    function updateHeroImage() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {

            let partnerLogo = `<div class="spz-partner-logo">
                <div class="spz-partner-title">
                    <h4>Trusted by 16,000+ customers worldwide</h4>
                </div>
                <div class="spz-partner-images">
                    <div class="spz-partner-row">
                        <img class="logo-zoom" src="//res.cloudinary.com/spiralyze/image/upload/v1702895819/eptura/3016/logo-zoom.svg" alt="Zoom logo" />
                        <img class="logo-comcast" src="//res.cloudinary.com/spiralyze/image/upload/v1702895819/eptura/3016/logo-comcast.svg" alt="Comcast logo" />
                        <img class="logo-nasdaq" src="//res.cloudinary.com/spiralyze/image/upload/v1702895819/eptura/3016/logo-nasdaq.svg" alt="Nasdaq logo" />
                        <img class="logo-johnson" src="//res.cloudinary.com/spiralyze/image/upload/v1702895819/eptura/3016/logo-johnson.svg" alt="Johnson logo" />
                    </div>
                    <div class="spz-partner-row">
                        <img class="logo-starbucks" src="//res.cloudinary.com/spiralyze/image/upload/v1702895819/eptura/3016/logo-starbucks.svg" alt="Starbucks logo" />
                        <img class="logo-slack" src="//res.cloudinary.com/spiralyze/image/upload/v1702895819/eptura/3016/logo-slack_1.svg" alt="Slack logo" />
                        <img class="logo-ge" src="//res.cloudinary.com/spiralyze/image/upload/v1702895819/eptura/3016/logo-generalelectric.svg" alt="Generalelectric logo" />
                        <img class="logo-pepsi" src="//res.cloudinary.com/spiralyze/image/upload/v1702895819/eptura/3016/logo-pepsico.svg" alt="Pepsico logo" />
                        <img class="logo-unilever" src="//res.cloudinary.com/spiralyze/image/upload/v1702895819/eptura/3016/logo-unilever.svg" alt="Unilever logo" />
                    </div>
                </div>
            </div>`;

            document.querySelector('#HeroFormPanel').insertAdjacentHTML('afterend', partnerLogo)

            //URL specific image updates
            if (window.location.href.indexOf('ppc-proxyclick-discover-a-better-way-to-check-in-visitors') > -1) {

                document.querySelector('#nav #NavLogo').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1702895793/eptura/3016/proxyclick_logo.svg" alt="Proxyclick" class="logo-img">`);

                document.querySelector('#HeroFormPanel').before(document.querySelector('#nav #NavLogo'));

                let pageTitle = `<div class="spz-hero-title"><h1>Make the visitor check-in experience <span>50% faster</span> while improving security.</h1></div>`;
                document.querySelector('#HeroFormPanel').insertAdjacentHTML('afterbegin', pageTitle);
                document.querySelector('#HeroFormTitleText h6 span').innerHTML = 'Get instant demo';

                document.body.classList.add('ppc-proxyclick');
            }

            else if (window.location.href.indexOf('ppc-condeco-make-your-flexible-office-work-better') > -1) {

                document.querySelector('#nav #NavLogo').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1702895864/eptura/3016/endorsed_logos_2.svg" alt="Condeco" class="logo-img">`);

                document.querySelector('#HeroFormPanel').before(document.querySelector('#nav #NavLogo'));
                let pageTitle = `<div class="spz-hero-title"><h1>Streamline desk and meeting room scheduling. Simplify hybrid work.</div>`;
                document.querySelector('#HeroFormPanel').insertAdjacentHTML('afterbegin', pageTitle);
                document.querySelector('#HeroFormTitleText h6 span').innerHTML = 'Get instant demo';

                document.body.classList.add('ppc-condeco');
            }

            else if (window.location.href.indexOf('ppc-archibus-maintenance-software') > -1) {

                document.querySelector('#nav #NavLogo').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3016/endorsed_logos_3.webp" alt="Archibus" class="logo-img">`);
                document.querySelector('#HeroFormPanel').before(document.querySelector('#nav #NavLogo'));


                let pageTitle = `<div class="spz-hero-title"><h1>Automate preventive maintenance and repair. Reduce costs  <span>by 30%.</span></h1></div>`;
                document.querySelector('#HeroFormPanel').insertAdjacentHTML('afterbegin', pageTitle);


                if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
                    document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6><span>Get instant demo</span></h6>';
                }
                document.body.classList.add('ppc-archibus');
            }

            else if (window.location.href.indexOf('ppc-eptura-asset-management') > -1) {
                document.querySelector('#nav #NavLogo').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1702895966/eptura/3016/main_logo_1.svg" alt="Eptura" class="logo-img">`);
                document.querySelector('#HeroFormPanel').before(document.querySelector('#nav #NavLogo'));

                let pageTitle = `<div class="spz-hero-title"><h1>Automate equipment maintenance. Reduce costs. Increase performance.</h1></div>`;
                document.querySelector('#HeroFormPanel').insertAdjacentHTML('afterbegin', pageTitle);
                document.querySelector('#HeroFormTitleText h6 span').innerHTML = 'Get instant demo';

                document.body.classList.add('ppc-eptura-asset-management');
            }

            else if (window.location.href.indexOf('ppc-eptura-room-management') > -1) {
                document.querySelector('#nav #NavLogo').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1702895966/eptura/3016/main_logo_1.svg" alt="Eptura" class="logo-img">`);
                document.querySelector('#HeroFormPanel').before(document.querySelector('#nav #NavLogo'));

                let pageTitle = `<div class="spz-hero-title"><h1>Streamline workspace bookings. Boost hybrid collaboration.</h1></div>`;
                document.querySelector('#HeroFormPanel').insertAdjacentHTML('afterbegin', pageTitle);
                document.querySelector('#HeroFormTitleText h6 span').innerHTML = 'Get instant demo';

                document.body.classList.add('ppc-eptura-room-management');
            }

            else if (window.location.href.indexOf('ppc-eptura') > -1) {
                document.querySelector('#nav #NavLogo').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1702895966/eptura/3016/main_logo_1.svg" alt="Eptura" class="logo-img">`);
                document.querySelector('#HeroFormPanel').before(document.querySelector('#nav #NavLogo'));

                let pageTitle = `<div class="spz-hero-title"><h1>Automate operations with one platform for workplace and asset management.</div>`;
                document.querySelector('#HeroFormPanel').insertAdjacentHTML('afterbegin', pageTitle);
                document.querySelector('#HeroFormTitleText h6 span').innerHTML = 'Get instant demo';

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
})();