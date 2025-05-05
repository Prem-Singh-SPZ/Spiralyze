let bodyInterval;

function formInit() {
    waitForElm('form.hs-form-private .hs-input').then(function (formElement) {

        focusFields();
        setupEventListeners();
        checkAndShowFields();

        // Set up a MutationObserver to watch for changes within the form
        formObserver = new MutationObserver(function (mutations) {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    checkAndShowFields();
                    focusFields();
                } else if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
                    // Value of an input changed, could be autofill
                    checkAndShowFields();
                }
            });
        });

        // Start observing the form for changes (add more options if needed)
        formObserver.observe(formElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['value'] });

        // Optionally, set a timeout to stop observing after a reasonable delay
        // setTimeout(() => {
        //     if (formObserver) {
        //         formObserver.disconnect();
        //     }
        // }, 10000);

    });
}

function initScript() {
    bodyInterval = setInterval(function () {
        if (document.querySelectorAll('form.hs-form-private .hs-input').length > 0) {
            formInit();
        }
    }, 200);

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
        }

        if (!showFields.some(field => el.closest('fieldset').classList.contains(field))) {
            el.closest('fieldset').classList.add('spz-hidden');
        }
    });

    const commentField = document.querySelector('.spz-comments');
    if (commentField && !document.querySelector('.spz-anchor')) {
        commentField.querySelector('.field').classList.add('spz-hidden');
        commentField.insertAdjacentHTML(`afterbegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic" rel="nofollow">[Comment +]</a></div>`);

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
            fieldElement.addEventListener('change', checkAndShowFields);
        }
    });

    // Ensure event listeners are also set for any initially hidden fields that become visible
    const allInputs = document.querySelectorAll('.hs-input');
    allInputs.forEach(input => {
        // Re-apply focus/blur listeners in case new fields appeared
        input.removeEventListener('focus', handleFocus); // Avoid duplicate listeners
        input.addEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
        input.addEventListener('blur', handleBlur);
    });
}

function handleFocus(el) {
    el.target.closest('.field').classList.add('field-focus');
    checkValid(el.target);
}

function handleBlur(el) {
    setTimeout(() => {
        el.target.closest('.field').classList.remove('field-focus');
        checkError();
        checkValid(el.target);
    }, 500);
}

function checkAndShowFields() {
    const fields = ['hs-firstname', 'hs-lastname', 'hs-email'];
    const hiddenFields = document.querySelectorAll('fieldset.spz-hidden:not(.hs-comments)');
    const allInitialFieldsFilled = fields.every(field => {
        const input = document.querySelector(`.${field} .hs-input`);
        return input && input.value.trim() !== null && input.value.trim() !== '' && input.value.trim() !== undefined;
    });

    if (allInitialFieldsFilled) {
        hiddenFields.forEach(function (el) {
            el.classList.remove('spz-hidden');
        });
    }
}

// On input focus add class on closest parent .field class
function focusFields() {
    setTimeout(() => {
        document.querySelectorAll('.hs-input').forEach(function (el) {
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

    if (document.querySelectorAll('.field-valid').length >= 4) {
        document.querySelectorAll('.spz-hidden:not(.hs-comments)').forEach(function (el) {
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


document.addEventListener('DOMContentLoaded', function () {
    const marqInt = setInterval(() => {
        const spMarquee = document.querySelector('.sp-marquee');
        if (spMarquee) {
            let totalWidth = 0;
            const logoItems = spMarquee.querySelectorAll('.sp-logo-item .sp-img');

            logoItems.forEach(item => {
                totalWidth += item.offsetWidth + 50;
            });

            spMarquee.style.width = `${totalWidth}px`;

            if (totalWidth > 0) {
                clearInterval(this);
            }

            // enable animation
            spMarquee.style.animation = 'marquee 40s linear infinite';

            // Optional: Force a reflow/repaint after setting the width
            void spMarquee.offsetWidth;
        }
    }, 500);

    setTimeout(() => {
        clearInterval(marqInt);
    }, 5000);
});

// Add class 'safari' (used for cart scrollbar)
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari');
}