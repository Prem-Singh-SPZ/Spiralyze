let bodyInterval;
let formObservers = {}; // To store observers for each form

function formInit(formElement) {
    const formId = formElement.id || Math.random().toString(36).substring(7); // Get existing ID or create a random one
    formObservers[formId] = new MutationObserver(function (mutations) {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                checkAndShowFields(formElement);
                focusFields(formElement);
            } else if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
                // Value of an input changed, could be autofill
                checkAndShowFields(formElement);
            }
        });
    });

    // Start observing the specific form for changes
    formObservers[formId].observe(formElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['value'] });

    const inputElements = formElement.querySelectorAll('.hs-input');
    focusFields(formElement);
    setupEventListeners(formElement);
    checkAndShowFields(formElement);

    // Optionally, set a timeout to stop observing after a reasonable delay
    // setTimeout(() => {
    //     if (formObservers[formId]) {
    //         formObservers[formId].disconnect();
    //         delete formObservers[formId];
    //     }
    // }, 10000);
}

function initScript() {
    bodyInterval = setInterval(function () {
        const formWrappers = document.querySelectorAll('.form-wrapper-spz');
        if (formWrappers.length > 0) {
            formWrappers.forEach(wrapper => {
                const formsInWrapper = wrapper.querySelectorAll('form');
                formsInWrapper.forEach(form => {
                    // Check if this form has already been initialized
                    if (!formObservers[form.id || 'noId']) {
                        formInit(form);
                    }
                });
            });
        }
    }, 200);

    setTimeout(() => {
        clearInterval(bodyInterval);
    }, 5000);
}

function setupEventListeners(formElement) {
    formElement.addEventListener("click", function (e) {
        if (e.target.classList.contains("hs-button")) {
            checkError(formElement);
        }
        if (e.target.closest('ul') && e.target.closest('ul').classList.contains('hs-error-msgs')) {
            checkError(formElement);
        }
    });

    const showFields = ['spz-firstname', 'spz-lastname', 'spz-email'];
    formElement.querySelectorAll('.hs-input').forEach(function (el) {
        let name = el.getAttribute('name');
        if (name && el.closest('.hs-form-field')) {
            el.closest('.hs-form-field').classList.add(`spz-${name}`);

            // check if the label span is empty and add the input placeholder as a label with all the null checks
            if (el.closest('.field').querySelector('label span').textContent === '' && el.getAttribute('placeholder')) {
                el.closest('.field').querySelector('label span').textContent = el.getAttribute('placeholder');
            }
        }

        if (formElement.querySelectorAll('.hs-input:not([type="checkbox"]):not([type="hidden"])').length > 2) {
            if (el.closest('.hs-form-field') && !showFields.some(field => el.closest('.hs-form-field').classList.contains(field))) {
                el.closest('.hs-form-field').classList.add('spz-hidden');
            }
            if (formElement.querySelector('.legal-consent-container')) {
                formElement.querySelector('.legal-consent-container').classList.add('spz-hidden');
            }
        }
    });

    // const commentField = formElement.querySelector('.spz-comments');
    // if (commentField && !formElement.querySelector('.spz-anchor')) {
    //     commentField.querySelector('.field').classList.add('spz-hidden');
    //     commentField.insertAdjacentHTML(`afterbegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic" rel="nofollow">[Comment +]</a></div>`);

    //     const commentAnchor = formElement.querySelector('.spz-anchor a.show-comment-dynamic');
    //     commentAnchor.addEventListener('click', function () {
    //         commentField.querySelector('.field').classList.toggle('spz-hidden');
    //         formElement.querySelector('.spz-anchor').classList.add('spz-hidden');
    //     });
    // }

    const fieldsToCheck = ['hs-firstname', 'hs-lastname', 'hs-email'];
    fieldsToCheck.forEach(function (field) {
        const fieldElement = formElement.querySelector(`.${field} .hs-input`);
        if (fieldElement) {
            fieldElement.addEventListener('input', () => checkAndShowFields(formElement));
            fieldElement.addEventListener('change', () => checkAndShowFields(formElement));
        }
    });

    // Ensure event listeners are also set for any initially hidden fields that become visible
    const allInputs = formElement.querySelectorAll('.hs-input');
    allInputs.forEach(input => {
        // Re-apply focus/blur listeners in case new fields appeared
        input.removeEventListener('focus', handleFocus); // Avoid duplicate listeners
        input.addEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
        input.addEventListener('blur', handleBlur);
    });

    makeFormCompatible(formElement);
}

function makeFormCompatible(formElement) {
    //country field label change
    let country_row = formElement.querySelector('.hs_contacts_country') || formElement.querySelector('.hs_country');
    if (country_row ) {
        country_row.querySelector('label span').textContent = 'Country';
    }

    let email_row = formElement.querySelector('.hs_email');
    if (email_row && email_row.querySelector('label span').textContent.toLowerCase().includes('email')) {
        email_row.querySelector('label span').textContent = 'Work Email';
    }

    let phone_input = formElement.querySelector('.hs-input[name="phone"]');
    if (phone_input) {
        phone_input.setAttribute('placeholder', 'Work Phone');
    }

    if (formElement.querySelector('.spz-lastname') && formElement.querySelector('.spz-email') && !formElement.querySelector('.spz-lastname + .spz-email')) {
        if (formElement.querySelector('.spz-lastname').closest('fieldset')) {
            formElement.querySelector('.spz-lastname').closest('fieldset').insertAdjacentElement('afterend', formElement.querySelector('.spz-email'));
        }
        else {
            formElement.querySelector('.spz-lastname').insertAdjacentElement('afterend', formElement.querySelector('.spz-email'));
        }
    }
}

function handleFocus(el) {
    el.target.closest('.field').classList.add('field-focus');
    checkValid(el.target);
}

function handleBlur(el) {
    setTimeout(() => {
        el.target.closest('.field').classList.remove('field-focus');
        checkError(el.target.form); // Pass the form element to checkError
        checkValid(el.target);
    }, 500);
}

function checkAndShowFields(formElement) {
    const fields = ['hs-firstname', 'hs-lastname', 'hs-email'];
    const hiddenFields = formElement.querySelectorAll('.spz-hidden');
    const allInitialFieldsFilled = fields.every(field => {
        const input = formElement.querySelector(`.${field} .hs-input`);
        return input && input.value.trim() !== null && input.value.trim() !== '' && input.value.trim() !== undefined;
    });

    if (allInitialFieldsFilled) {
        hiddenFields.forEach(function (el) {
            el.classList.remove('spz-hidden');
        });
    }
}

// On input focus add class on closest parent .field class
function focusFields(formElement) {
    setTimeout(() => {
        formElement.querySelectorAll('.hs-input').forEach(function (el) {
            el.removeEventListener('focus', handleFocus);
            el.addEventListener('focus', handleFocus);
            el.removeEventListener('blur', handleBlur);
            el.addEventListener('blur', handleBlur);
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

    // const formElement = el.closest('form');
    // if (formElement && formElement.querySelectorAll('.field-valid').length >= 4) {
    //     formElement.querySelectorAll('.spz-hidden:not(.hs-comments)').forEach(function (el) {
    //         el.classList.remove('spz-hidden');
    //     });
    // }
}

// Add .field-error class on closest parent .field class if .error is exist on .hs-input
function checkError(formElement) {
    let timeBuffer = setInterval(() => {
        formElement.querySelectorAll('.hs-input').forEach(function (el) {
            if (el.closest('.field').querySelector('.error') != null) {
                el.closest('.field').classList.add('field-error');
            } else {
                el.closest('.field').classList.remove('field-error');
            }
        });
        formElement.querySelectorAll('.hs-input:not([type="checkbox"])').forEach(function (el) {
            if (el && el.value) {
                el.closest('.field').classList.add('input-filled');
            } else {
                el.closest('.field').classList.remove('input-filled');
            }
        });
    }, 10);

    setTimeout(() => {
        clearInterval(timeBuffer);
    }, 500);
}

// Generic Code
function waitForElm(selector) {
    return new Promise(function (resolve) {
        const element = document.querySelector(selector);
        if (element) {
            resolve(element);
            return;
        }

        const observer = new MutationObserver(mutations => {
            const foundElement = document.querySelector(selector);
            if (foundElement) {
                resolve(foundElement);
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

initScript();