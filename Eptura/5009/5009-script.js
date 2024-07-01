var bodyInterval = setInterval(function () {

    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-5009')) {
        clearInterval(bodyInterval);
        document.body.classList.add('spz-5009');

        const lInt = setInterval(() => {
            if (document.querySelector('body .site-content .get-touch-form .get-form .mktoForm .mktoFormRow .mktoField')) {
                clearInterval(lInt);
                document.body.classList.add('spz-5009');
                clearFormFields();
                loadTest();
            }
        }, 100);

        const apInt = setInterval(() => {
            if (document.querySelector('body .site-content .get-touch-form .get-form')) {
                clearInterval(apInt);
                addPageContent();
            }
        }, 100);
    }
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
    document.querySelector('head').insertAdjacentHTML("afterbegin", `
        <link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/3002/form-checkmark-errored.svg" as="image">
        <link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/3001/custom/form-checkmark-hover.svg" as="image">
        <link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/3001/custom/form-checkmark-checked.svg" as="image">`
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

    setHiddenFields();

    document.querySelector('.get-form .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
    document.querySelector('.get-form .mktoForm .spz-email').before(document.querySelector('.get-form .mktoForm .mktoButtonRow'));

    document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic">+ Comment</a></div>`);

    document.querySelector('#I_am__c').addEventListener('change', function () {
        dropdownFunctionality(this.value);
    });

    document.querySelector('#LblI_am__c').textContent = 'I am...*';
    // document.querySelector('form.mktoForm .mktoFormRow .mktoFormCol .mktoFieldWrap .mktoCheckboxList label').innerHTML = 'By submitting this form, you agree to the processing of your personal data by Eptura as described in the  <a href="https://eptura.com/terms/privacy-policy/">Privacy Statement</a>';

    document.querySelectorAll('.get-form .mktoForm .mktoFormRow').forEach(function (el, index) {
        el.closest('.mktoFormRow').setAttribute('spz_row_num', index);
    });

    checkVisibleInputs();

    document.querySelector('#mktoForm_1002 .mktoButtonRow button[type="submit"].mktoButton').addEventListener('click', function () {
        setTimeout(() => {
            if (!document.querySelector('.get-form .mktoForm').classList.contains('fully-load')) {
                var eventclick = new Event('focus');
                var inpEmail = document.querySelector('.mktoEmailField');
                var inpIam = document.querySelector('#I_am__c');

                if (inpEmail.value == '' || !validateEmail(inpEmail.value)) {
                    var eml = MktoForms2.allForms()[0].getFormElem().find("#Email")
                    MktoForms2.allForms()[0].showErrorMessage('Must be valid email. example@yourdomain.com', eml)
                    inpEmail.dispatchEvent(eventclick);
                    inpEmail.closest('.mktoFormCol').classList.add('field-error');
                    inpEmail.focus();
                } else {
                    if (inpIam.value == '') {
                        var emlIam = MktoForms2.allForms()[0].getFormElem().find("#I_am__c")
                        MktoForms2.allForms()[0].showErrorMessage('This field is required.', emlIam)
                        inpIam.dispatchEvent(eventclick);
                        inpIam.closest('.mktoFormCol').classList.add('field-error')
                    }
                }
            }
        }, 200)
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
            checkError(el);
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
        if (document.querySelectorAll('.mktoFormCol[style*="display: none"]').length <= 1) {
            document.querySelector('.get-form .mktoForm').classList.replace('initial-load', 'fully-load');
        }
    });
}

//Block "e" from number of employees field
function blockChar() {
    document.querySelector('#NumberOfEmployees').addEventListener("keydown", function (e) {
        if (e.key == 'e' || e.key == 'E') {
            e.preventDefault();
        }
    });
}

// Email validation
function validateEmail(email) {
    var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(String(email).toLowerCase());
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
    document.querySelector('.title-part').innerHTML = '';

    if (document.querySelector('header .right-links > .link')) {
        const csLink = document.querySelector('header .right-links > .link');
        csLink.querySelector('a').textContent = 'Customer support';
        csLink.classList.add('button-1');
        csLink.classList.remove('link');
    }

    document.querySelector('.form-container').insertAdjacentHTML('afterbegin', `<div class="left-section-title">Get in touch</div><div class="line-header"><div class="header-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1718811851/eptura/5009/icon-04.svg" alt="Contact Sales"></div><div class="header-title"><p class="title">Contact Sales</p><p class="sub-title">For demo & pricing</p></div></div>`);
    document.querySelector('.form-container').insertAdjacentHTML('beforeend', `<div class="line-header"><a href="https://eptura.com/support/"><div class="header-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1718811851/eptura/5009/icon-01.svg" alt="Customer support"></div><div class="header-title"><p class="title">Customer support</p><p class="sub-title">For questions & Inquiries</p></div></a></div><div class="line-header"><a href="https://eptura.com/offices/"><div class="header-img"><img src="//res.cloudinary.com/spiralyze/image/upload/v1718811851/eptura/5009/icon-03.svg" alt="Our locations"></div><div class="header-title"><p class="title">Our locations</p><p class="sub-title">For office addresses </p></div></a></div>`);

    // Add browser specific class safari
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.querySelector('body').classList.add('safari');
    }

    // Add browser specific class firefox
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        document.querySelector('body').classList.add('firefox');
    }
}

//Add hidden fields
function setHiddenFields() {
    if (document.querySelector('.mktoFormRow [name="CP2__c"]')) {
        document.querySelectorAll('.mktoFormRow [name="CP2__c"]').forEach(function (el, k) {
            el.setAttribute('value', '5009_Variant');
        });
    } else if (!document.querySelector('.mktoForm .mktoFormRow [name="CP2__c"]')) {
        // If [name="CP2__c"] doesn't exist, add hidden field
        document.querySelector('.mktoForm').insertAdjacentHTML('beforeend', '<input type="hidden" name="CP2__c" value="5009_Variant">');
    }
}