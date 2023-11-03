(function () {
    document.body.classList.add('spz-5004');
    waitForElm('.page-id-768 .site-content .get-touch-form .get-form .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-5004');
        clearFormFields();
        loadTest();
    });

    //Clear form fields
    function clearFormFields() {
        document.querySelectorAll('.get-form .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
            el.value = '';
            if (el.closest('.mktoFormCol').classList.contains('input-filled')) {
                el.closest('.mktoFormCol').classList.remove('input-filled');
            }
        });
    }

    function loadTest() {
        formUpdate();
        focusFields();
        addPageContent();
        checkVisibleInputs();

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
                document.querySelectorAll('.get-form .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
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
        document.querySelector('.get-form .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;


        // if (document.querySelector('.get-form #HeroFormTitleText h6')) {
        document.querySelector('.get-form').insertAdjacentHTML('afterbegin', `<h2 class="get-form-title">Get a demo</h2>`);
        // }

        document.querySelector('.get-form .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
        document.querySelector('.get-form .mktoForm .spz-email').before(document.querySelector('.get-form .mktoForm .mktoButtonRow'));

        document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic">+ Comment</a></div>`);

        document.querySelector('#I_am__c').addEventListener('change', function () {
            dropdownFunctionality(this.value);
        });

        document.querySelector('#LblI_am__c').textContent = 'I am...*';

        document.querySelectorAll('.get-form .mktoForm .mktoFormRow').forEach(function (el, index) {
            el.closest('.mktoFormRow').setAttribute('spz_row_num', index);
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
    }

    // On input focus add class on closest parent field class
    function focusFields() {
        document.querySelectorAll('.get-form .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {

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

            checkVisibleInputs();
        }, 100);

        setTimeout(() => {
            clearInterval(timeBuffer);
        }, 1000);
    }

    //5004 Specific form css where counting field and accordingly switching classes
    function checkVisibleInputs() {
        waitForElm('.mktoFormCol[style*="display: none"]').then(function () {
            if (document.querySelectorAll('.mktoFormCol[style*="display: none"]').length == 6) {
                document.querySelector('.get-form .mktoForm').classList.add('initial-load');
            }

            if (document.querySelectorAll('.mktoFormCol[style*="display: none"]').length == 1) {
                document.querySelector('.get-form .mktoForm').classList.replace('initial-load','fully-load');
            }
        });

        // waitForElm('#LblSolution_Type__c').then(function () {
        //     if (document.querySelectorAll('.mktoFormCol[style*="display: none"]').length == 6) {
        //         document.querySelector('.get-form .mktoForm').classList.replace('initial-load','partial-load');
        //     }
        // });
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

    //adding page contents
    function addPageContent() {
        document.querySelector('.get-touch-form.og-contact-resources').insertAdjacentHTML('afterbegin', `<div class="spz-page-title"><h1>Get in touch</h1></div>`);

        document.querySelector('.default-form.get-form').insertAdjacentHTML('afterend', `<div class="additional-section">
                <div class="need-support">
                    <div class="copy">
                        <h6>Need support?</h6>
                        <p>Visit our help center to speak to our support team & find helpful articles.</p>
                        <a href="https://eptura.com/support/" class="visit-support">Support center  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 6.5L11.8 9.25L9 12" stroke="#7AA0FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
                    </div>
                </div>
                <div class="border-line">

                </div>
                <div class="need-support">
                    <div class="copy">
                        <h6>Trying to find us?</h6>
                        <p>See our office locations and contact details.</p>
                        <a href="https://eptura.com/offices/" class="visit-support">Our offices <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 6.5L11.8 9.25L9 12" stroke="#7AA0FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
                    </div>
                </div>
            </div>`);

        document.querySelector('.get-touch-form.og-contact-resources').insertAdjacentHTML('afterend', `<section class="spz-trusted-logos"><div class="logo-title"><h6>Trusted by <span>16,000+</span> customers worldwide</h6></div><div class="logos-parent"><picture>
        <source media="(min-width:1200px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1697646155/eptura/5004/logo_set_2.svg">
        <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1697646192/eptura/5004/logo_set_-_tablet.svg">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1697646201/eptura/5004/logo_set_-_mobile.svg" alt="Trusted Logos">
      </picture></div></section>`);

        document.querySelector('.keep-update.bg-purple').insertAdjacentHTML('beforebegin', `<div class="gradient-border-line"></div>`);
        document.querySelector('.keep-update.bg-purple').insertAdjacentHTML('afterend', `<div class="gradient-border-line"></div>`);

    }
})();


