//progressive form code starts
waitForElm('form#pardot-form .country.pd-select').then(function (elm) {
    //hiding last fields and checkbox
    document.querySelector('form#pardot-form .country.pd-select').classList.add('p-field-hidden');
    document.querySelector('form#pardot-form .Employee_Count').classList.add('p-field-hidden');
    document.querySelector('form#pardot-form .pd-checkbox').classList.add('p-field-hidden');

    var all_inputs = document.querySelectorAll(' form#pardot-form input,  form#pardot-form select');
    all_inputs.forEach(function (element) {
        element.removeAttribute('placeholder');
        if (element.tagName == 'SELECT' && element.selectedIndex !== 0 && element.closest('.form-field') !== null) {
            element.closest(' form#pardot-form .form-field').classList.add('filled');
        }
        if (element.tagName !== 'SELECT' && element.value != '' && element.closest('.form-field') !== null) {
            element.closest(' form#pardot-form .form-field').classList.add('filled');
        }
    });

    //applying classes if fields are filled
    var all_inputs = document.querySelectorAll('form#pardot-form input, form#pardot-form select');
    all_inputs.forEach(function (element) {
        if (element.tagName == 'SELECT' && element.selectedIndex !== 0 && element.closest('.form-field') !== null) {
            element.closest('form#pardot-form .form-field').classList.add('filled');
        }
        if (element.tagName !== 'SELECT' && element.value != '' && element.closest('.form-field') !== null) {
            element.closest('form#pardot-form .form-field').classList.add('filled');
        }
    });
    var selector = 'form#pardot-form .form-field input, form#pardot-form .form-field select';
    document.addEventListener('focus', function (event) {
        if (event.target.matches && event.target.matches(selector)) {
            event.target.closest('form#pardot-form .form-field').classList.add('typing');
        }
    }, true);
    checkFilledVisibility();

    //applying classes on focus, blur, keyup, change events
    var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
    for (let s_event of eventList) {
        document.addEventListener(s_event, function (event) {
            checkFilledVisibility();
            if (event.target.matches && event.target.matches(selector)) {
                if (event.target.value == null || event.target.value == '') {
                    event.target.closest('form#pardot-form .form-field').classList.remove('filled');
                } else {
                    if (event.target.tagName == 'SELECT' && event.target.selectedIndex !== 0) {
                        event.target.closest('form#pardot-form .form-field').classList.add('filled');
                    }
                    if (event.target.tagName !== 'SELECT') {
                        event.target.closest('form#pardot-form .form-field').classList.add('filled');
                    }
                }
            }
        });
    }
    document.addEventListener('focusout', function (event) {
        document.querySelectorAll('form#pardot-form .form-field.typing').forEach(function (elem) {
            elem.classList.remove('typing');
            checkFilledVisibility();
        })
    }, true);

    function checkFilledVisibility() {
        if (document.querySelector('form#pardot-form .form-field.first_name').classList.contains('filled') && document.querySelector('form#pardot-form .form-field.last_name').classList.contains('filled') && document.querySelector('form#pardot-form .form-field.email').classList.contains('filled') && document.querySelector('form#pardot-form .form-field.company').classList.contains('filled')) {
            document.querySelectorAll('.form-field.p-field-hidden').forEach(function (elem) {
                elem.classList.remove('p-field-hidden');
            })

            document.querySelector('form#pardot-form ').classList.add('p-full-form');
        }
    }
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
        observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true,
        });
    });
}
//progressive form code ends