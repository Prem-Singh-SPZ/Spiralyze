var bodyInterval;

function initScript() {
    bodyInterval = setInterval(function () {
        waitForElm('form.hs-form-private .hs-form-field .hs-input').then(function (elm) {
            focusFields();
            setupEventListeners(); // Call a function to set up event listeners
            // clearInterval(bodyInterval);
        });
    }, 100);

    setTimeout(() => {
        clearInterval(bodyInterval);
    }, 5000);
}

function setupEventListeners() {
    window.addEventListener("click", function (e) {
        if (e.target.classList.contains("hs-button")) {
            checkError();
        }
        if (e.target.closest('ul') && e.target.closest('ul').classList.contains('hs-error-msgs')) {
            checkError();
        }
    });

    const showFields = ['spz-firstname', 'spz-lastname', 'spz-email'];
    document.querySelectorAll('.hs-input').forEach(function (el) {
        let name = el.getAttribute('name');
        if (name) {
            el.closest('fieldset').classList.add(`spz-${name}`);

            // Disable the autocomplete for email field, to reduce flickering
            // if (el.getAttribute('name') == 'email') {
            //     el.setAttribute('autocomplete', 'no-emails');
            // }
        }

        if (!showFields.some(field => el.closest('fieldset').classList.contains(field))) {
            el.closest('fieldset').classList.add('spz-hidden');
        }
    });

    const commentField = document.querySelector('.spz-comments');
    if (commentField && !document.querySelector('.spz-anchor')) {
        commentField.querySelector('.field').classList.add('spz-hidden');
        commentField.insertAdjacentHTML(`afterbegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic">[Comment +]</a></div>`);

        const commentAnchor = document.querySelector('.spz-anchor a.show-comment-dynamic');
        commentAnchor.addEventListener('click', function () {
            commentField.querySelector('.field').classList.toggle('spz-hidden');
            document.querySelector('.spz-anchor').classList.add('spz-hidden');
        });
    }


    const fieldsToCheck = ['hs-firstname', 'hs-lastname', 'hs-email'];
    fieldsToCheck.forEach(function (field) {
        const fieldElement = document.querySelector(`.${field} .hs-input`);
        if (fieldElement) {
            fieldElement.addEventListener('input', checkAndShowFields);
            // Event listener for the input when browser autofills the field
            fieldElement.addEventListener('change', function () {
                setTimeout(() => {
                    checkAndShowFields();
                }, 1000);
            });
        }
    });
}

function checkAndShowFields() {
    const fields = ['hs-firstname', 'hs-lastname', 'hs-email'];
    const hiddenFields = document.querySelectorAll('fieldset.spz-hidden:not(.hs-comments)');

    const allFieldsFilled = fields.every(field => {
        const input = document.querySelector(`.${field} .hs-input`);
        return input && input.value.trim() !== null && input.value.trim() !== '' && input.value.trim() !== undefined;
    });

    if (allFieldsFilled) {
        hiddenFields.forEach(function (el) {
            el.classList.remove('spz-hidden');
        });
    }
}

// On input focus add class on closest parent .field class
function focusFields() {
    setTimeout(() => {
        document.querySelectorAll('.hs-input').forEach(function (el) {
            el.addEventListener('focus', function () {
                el.closest('.field').classList.add('field-focus');
                checkValid(el);
            });

            el.addEventListener('blur', function () {
                el.closest('.field').classList.remove('field-focus');
                setTimeout(() => {
                    checkError();
                    checkValid(el);
                }, 1000);
            });

            el.addEventListener('input', () => { // Using 'input' for more consistent updates
                checkError();
            });

            checkValid(el);
        });
    });
}

// Check if fields are valid
function checkValid(el) {
    if (el.closest('.field').querySelector('.error') != null || (el.getAttribute('value') === '' || el.getAttribute('value') == null || el.getAttribute('value') == undefined)) {
        el.closest('.field').classList.remove('field-valid');
    } else {
        el.closest('.field').classList.add('field-valid');
    }

    if (document.querySelectorAll('.field-valid').length >= 4) {
        document.querySelectorAll('.spz-hidden:not(.hs-comments)').forEach(function (el) { // Changed to target elements with 'spz-hidden' class
            el.classList.remove('spz-hidden');
        });
    }
}

// Add .field-error class on closest parent .field class if .error is exist on .hs-input
function checkError() {
    let timeBuffer = setInterval(() => {
        document.querySelectorAll('.hs-input').forEach(function (el) {
            if (el.closest('.field').querySelector('.error') != null) {
                el.closest('.field').classList.add('field-error');
            } else {
                el.closest('.field').classList.remove('field-error');
            }
        });
        document.querySelectorAll('.hs-input:not([type="checkbox"])').forEach(function (el) {
            if (el && el.value) {
                el.closest('.field').classList.add('input-filled');
            } else {
                el.closest('.field').classList.remove('input-filled');
            }
        });
    }, 10);

    setTimeout(() => {
        clearInterval(timeBuffer);
    }, 1000);
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

initScript();