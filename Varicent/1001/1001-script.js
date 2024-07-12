document.body.classList.add('spz-1001');

waitForElm(`form.hs-form-private .hs_firstname input`).then(function (elm) {
    form_modify();
});

function form_modify() {

    // hs-button
    document.querySelector('.hs-button').addEventListener('click', function () {
        const err = setInterval(() => {
            checkError();
            clearInterval(err);
        }, 100);
    });

    // Set focus on input
    focusFields()

    // Add class in each elements of type hidden
    var hiddenFields = document.querySelectorAll('.spz-1001 .hs-custom-form input[type="hidden"].hs-input');
    hiddenFields.forEach(function (hiddenField) {
        var parentDiv = hiddenField.closest('.hs-form-field');
        if (parentDiv) {
            parentDiv.classList.add('hidden-field');
        }
    });

    document.querySelectorAll('.spz-1001 .hs-custom-form .hs-form-field select.hs-input').forEach(function (field) {
        field.querySelector('select option:first-child').textContent = '';

        field.setAttribute('autocomplete', 'progressive-field');
    });

    // On input focus add class on closest parent .field class
    function focusFields() {
        document.querySelectorAll('.spz-1001 .hs-custom-form .hs-form-field  .hs-input').forEach(function (el) {
            // On input focus add .typing class on closest parent .field class
            el.addEventListener('focus', function () {
                el.closest('.field').classList.add('typing');
                setTimeout(function () {
                    el.closest('.field').classList.remove('error');
                }, 100);
            });

            // On input blur remove .typing class on closest parent .field class
            el.addEventListener('blur', function () {
                el.closest('.field').classList.remove('typing');
                setTimeout(function () {
                    checkError();
                }, 100);
            });

            // On select element change remove .error class on closest parent .field class
            if (el.tagName == 'SELECT') {
                el.addEventListener('change', function () {
                    el.closest('.field').classList.remove('error');
                });
            }
        });
    }

    // Click on 'did you know email address' link in error message
    document.addEventListener("click", function (e) {
        const target = e.target.closest(".inputs-list label a");

        if (target) {
            checkError();
        }
    });

    // Add .error class on closest parent .field class if .error is exist on .hs-input
    function checkError() {
        document.querySelectorAll('.hs-input').forEach(function (el) {
            if (el.closest('.field').querySelector('.error') != null) {
                el.closest('.field').classList.add('error');
            } else {
                el.closest('.field').classList.remove('error');
            }
        });

        document.querySelectorAll('.hs-input').forEach(function (el) {
            if (el.value == null || el.value == '') {
                el.closest('.field').classList.remove('filled');
            } else {
                el.closest('.field').classList.add('filled');
            }
        });
    }
}
// Wait for element to load
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
