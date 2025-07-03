document.addEventListener('DOMContentLoaded', function () {
    waitForElm(`.spz_1006 .control-form-wrapper-1001 .control-signup-field-1001`).then((elm) => {
        const parentBox = elm.closest('.control-signup-box-1001');
        const submitBtn = document.querySelector('.control-signup-submit-1001');

        function isValidEmail(value) {
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value);
        }

        function validateField() {
            const value = elm.value.trim();
            parentBox.classList.remove('error', 'error-valid');

            if (value === '') {
                parentBox.classList.remove('filled');
                parentBox.classList.add('error');
                return false;
            } else {
                parentBox.classList.add('filled');
                if (!isValidEmail(value)) {
                    parentBox.classList.add('error-valid');
                    return false;
                }
            }

            return true;
        }

        elm.addEventListener('focus', () => {
            parentBox.classList.add('active', 'typing');
        });

        elm.addEventListener('focusout', () => {
            parentBox.classList.remove('active', 'typing');
        });

        ['input', 'change', 'keyup', 'keydown'].forEach(evt => {
            elm.addEventListener(evt, () => {
                const value = elm.value.trim();
                if (value === '') {
                    parentBox.classList.remove('filled');
                } else {
                    parentBox.classList.add('filled');
                }
            });
        });

        ['focusout', 'blur'].forEach(evt => {
            elm.addEventListener(evt, validateField);
        });

        submitBtn?.addEventListener('click', function (e) {
            const value = elm.value.trim();
            if (!isValidEmail(value)) {
                parentBox.classList.remove('error', 'error-valid');
                if (value === '') {
                    parentBox.classList.add('error');
                } else {
                    parentBox.classList.add('error-valid');
                }
                elm.focus();
            } else {
                localStorage.setItem('userEmail1001', value);
            }
        });
    });

    waitForElm('.spz_1006 .how_is_zeffy_free_1006').then((elm) => {
        const copyBox = document.querySelector('.spz_1006 .hizf_copy_1006');
        elm.addEventListener('click', function (e) {
            e.preventDefault();
            if (copyBox) {
                copyBox.classList.add('active');
            }
        });
        elm.addEventListener('mouseleave', function () {
            if (copyBox) {
                copyBox.classList.remove('active');
            }
        });
    }).catch((err) => {
        console.error('Error waiting for element:', err);
    });
});


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