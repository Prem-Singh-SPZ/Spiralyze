waitForElm('#bodyId .body-wrapper #form-over .mktoForm .mktoFormRow .mktoField').then(function () {
    loadTest();
});

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
            document.querySelectorAll('#form-over .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
                checkError(el);
                showGlobalError();
            });
        }
    });
    document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="https://lp.eptura.com/rs/267-JUP-120/images/form-checkmark-errored.svg?version=0" as="image"><link rel="preload" href="https://lp.eptura.com/rs/267-JUP-120/images/form-checkmark-hover.svg?version=0" as="image"><link rel="preload" href="https://lp.eptura.com/rs/267-JUP-120/images/form-checkmark-checked.svg?version=0" as="image">`
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
    document.querySelector('#form-over .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;


    document.querySelector('#form-over .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
    document.querySelector('#form-over .mktoForm .spz-email').before(document.querySelector('#form-over .mktoForm .mktoButtonRow'));

    document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic">+ Comment</a></div>`);

    document.querySelector('#I_am__c').addEventListener('change', function () {
        dropdownFunctionality(this.value);
    });

    document.querySelector('#LblI_am__c').textContent = 'I am...*';

    document.querySelectorAll('#form-over .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
        el.closest('.mktoFormCol').classList.add('col-' + el.getAttribute('name'));
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
    document.querySelectorAll('#form-over .mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {

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