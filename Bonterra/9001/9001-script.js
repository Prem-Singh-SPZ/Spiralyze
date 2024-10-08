let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz-9001')) {
            body.classList.add('spz-9001');

            waitForElm('body.spz-9001 #HERO .container .block-wrapper .block-2').then(function () {
                document.querySelector('body.spz-9001 #HERO .container .block-wrapper .block-2').innerHTML = `<div class="spz-hero-wrap"><div class="spz-hero-container"><div class="hero-left" id="spz-email-cta"><p class="eyebrow-title">Maximize the impact of your programs</p><div class="h-headline">Impact Management Pricing</div><p class="h-subline">Elevate your case management with our portfolio of
                unified impact management solutions</p>
                <div class="form-group-wrapper">
                                <div class="form-group-spz">
                                    <input type="email" name="email" class="form-field-spz email-hero-spz" placeholder=" ">
                                    <label class="form-label-spz">Email Address</label>
                                </div>
                                <a href="javascript:;" class="hero-trigger-form hero-btn spz_tracking_9001">
                                    Get Pricing
                                </a>
                            </div></div><div class="hero-right"><div class="hero-img-container"></div></div></div></div>`;

                emailEvents();
            })

            waitForElm('#HERO form.mktoForm .mktoButtonRow .mktoButtonWrap button.mktoButton').then(function () {
                formModify();
                setHiddenFields();

                if (!document.querySelector('spz-modal-form')) {
                    document.querySelector('.spz-9001 #HERO').insertAdjacentHTML('afterend', '<div class="spz-modal-form"><div class="modal-form-container"> </div> </div>');
                    document.querySelector('.spz-9001 .spz-modal-form .modal-form-container').insertAdjacentElement('afterbegin', document.querySelector('body.spz-9001 #HERO .container .block-wrapper .block-3 > .mktoForm'));
                }
            });
        }
    }
});

window.addEventListener('click', function (e) {
    if (e.target.classList.contains('hero-trigger-form')) {
        const email = this.document.querySelector('body.spz-9001 .spz-modal-form form.mktoForm .form-fields-row .mktoFormCol .mktoFieldWrap #Email');

        document.body.classList.add('spz-show-modal');
        email.value = this.document.querySelector('body.spz-9001 .spz-hero-wrap .email-hero-spz').value;
        // this.document.querySelector('body.spz-9001 .spz-modal-form form.mktoForm .form-fields-row .mktoFormCol .mktoFieldWrap #Email').dispatchEvent(new Event('focus'));

        if (email.value === '') {
            email.closest('.mktoFieldWrap').classList.remove('filled');
        } else {
            email.closest('.mktoFieldWrap').classList.add('filled');
        }
    }
    if (e.target.classList.contains('hero-close-form')) {
        document.body.classList.remove('spz-show-modal');
    }

    if (event.target.getAttribute('href') == '#form') {
        event.preventDefault();
        document.querySelector('.spz-9001 #HERO #spz-email-cta').scrollIntoView({
            behavior: 'smooth'
        });
    }
});

function emailEvents() {
    const email = document.querySelector('.email-hero-spz');

    // Add 'focused' class on closest '.form-group-wrapper' on focus
    email.addEventListener('focus', function () {
        email.closest('.form-group-wrapper').classList.add('focused');
        email.closest('.form-group-wrapper').classList.remove('filled');
    });

    // On focusout, remove 'focused' class if input is empty
    email.addEventListener('blur', function () {
        email.closest('.form-group-wrapper').classList.remove('focused');

        if (email.value === '') {
            email.closest('.form-group-wrapper').classList.remove('filled');
        } else {
            email.closest('.form-group-wrapper').classList.add('filled');
        }
    });

    // on 'Enter' key press, click on the 'Get Started' button
    email.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            document.querySelector('.hero-trigger-form').click();
            email.blur();
        }
    });
}

function formModify() {
    if (document.querySelectorAll('.spz-9001 #HERO .mktoForm .lpeCElement.Bonterra__Pricing_Request__IM h2.spz-form-title').length == 0)
        document.querySelector('#HERO .mktoForm .lpeCElement.Bonterra__Pricing_Request__IM').insertAdjacentHTML('afterbegin', `<h2 class="spz-form-title">Request Pricing</h2><a href="javascript:;" class="hero-close-form close-btn"><img src="//res.cloudinary.com/spiralyze/image/upload/v1727281804/bonterra/9001/x.svg" alt="Close"></a>`);


    // document.querySelector('#HERO form.mktoForm .mktoButtonRow .mktoButtonWrap button.mktoButton').textContent = "Submit";
    addUniqueClass();

    // Change Label Text
    document.querySelector('label#LblFirstName').textContent = "First Name";
    document.querySelector('label#LblLastName').textContent = "Last Name";
    document.querySelector('label#LblCompany').textContent = "Organization Name";
    document.querySelector('label#LblEmail').textContent = "Email Address";
    document.querySelector('label#LblPhone').textContent = "Phone Number";
    document.querySelector('label#LblIndustry').textContent = "Organization Type";
    document.querySelector('label#LblNumber_of_Employees_Range__c').textContent = "Organization Size";
    // document.querySelector('label#LblProduct_Interest__c').textContent = "Product Interest";

    // Change Field Positions
    const email_field = document.querySelector('.spz-9001 #HERO form.mktoForm .spz-email');
    const orgname_field = document.querySelector('.spz-9001 #HERO form.mktoForm .spz-company');
    email_field.before(orgname_field);

    // const donor_field = document.querySelector('.spz-9001 #HERO form.mktoForm .spz-number_of_employees_range__c');
    // const orgtype_field = document.querySelector('.spz-9001 #HERO form.mktoForm .spz-company');
    // orgtype_field.after(donor_field);


    focusFields();

    document.querySelector('.spz-9001 #HERO form.mktoForm .mktoButtonRow button.mktoButton').addEventListener('click', function (event) {
        document.querySelectorAll(`.spz-9001 form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (elem) {
            let Buffertime = setInterval(() => {
                if (elem.closest('.mktoFieldWrap').querySelector('.mktoError') && elem.closest('.mktoFieldWrap').querySelector('.mktoError').style.display != 'none') {
                    elem.closest('.mktoFieldWrap').classList.add('error');
                } else {
                    elem.closest('.mktoFieldWrap').classList.remove('error');
                }
                if (elem && elem.value && (elem.value != '')) {
                    elem.closest('.mktoFieldWrap').classList.add('filled');
                } else {
                    elem.closest('.mktoFieldWrap').classList.remove('filled');
                }
            }, 100);

            setTimeout(() => {
                clearInterval(Buffertime);
            }, 1000);
        });
    });
}

function addUniqueClass() {
    if (!document.querySelector('.spz-9001 #HERO form.mktoForm .form-fields-row'))
        document.querySelector('.spz-9001 #HERO form.mktoForm').insertAdjacentHTML('afterbegin', '<div class="form-fields-row"></div>');

    // Move all '.mktoFormCol' to '.form-fields-row'
    document.querySelectorAll(`.spz-9001 #HERO form.mktoForm .mktoFormCol:not(.mktoButtonRow)`).forEach(function (col) {
        if (col.querySelector('.mktoField:not([type="hidden"])')) {
            // Append each '.mktoFormCol' to '.form-fields-row'
            document.querySelector('.form-fields-row').appendChild(col);

            // Removing inline styles from mktoFormCol
            col.removeAttribute('style');

            // Remove inline styles from .mktoField
            col.querySelector('.mktoField').removeAttribute('style');
            col.querySelector('.mktoField').removeAttribute('placeholder');

            // Add unique class to each field group, take input name and add it as class
            col.classList.add('spz-' + col.querySelector('.mktoField').name.toLowerCase());
        }
    });
}

// On input focus add class on closest parent field class
function focusFields() {
    document.querySelectorAll(`.spz-9001 #HERO form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
        el.addEventListener('focus', function () {
            el.closest('.mktoFieldWrap').classList.add('active', 'typing');
            checkError(el);
        });
        el.addEventListener('blur', function () {
            el.closest('.mktoFieldWrap').classList.remove('active', 'typing');
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

        //on mouse over add class on closest parent field class and remove on mouse out
        el.addEventListener('mouseover', function () {
            el.closest('.mktoFieldWrap').classList.add('hover');
        });
        el.addEventListener('mouseout', function () {
            el.closest('.mktoFieldWrap').classList.remove('hover');
        });
    });
}

// Function to add .field-error class on closest parent .field class if .error is exist on input
function checkError(elem) {
    let timeBuffer = setInterval(() => {
        if (elem.closest('.mktoFieldWrap').querySelector('.mktoError') && elem.closest('.mktoFieldWrap').querySelector('.mktoError').style.display != 'none' && elem.closest('.mktoFieldWrap').querySelector('.mktoInvalid')) {
            elem.closest('.mktoFieldWrap').classList.add('error');
        } else {
            elem.closest('.mktoFieldWrap').classList.remove('error');
        }
        if (elem && elem.value && (elem.value != '')) {
            elem.closest('.mktoFieldWrap').classList.add('filled');
        } else {
            elem.closest('.mktoFieldWrap').classList.remove('filled');
        }
    }, 100);

    setTimeout(() => {
        clearInterval(timeBuffer);
    }, 1000);
}

function setHiddenFields() {
    waitForElm('.mktoFormRow [name="utm_location__c"]').then(function () {
        const field_int = setInterval(function () {
            if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
                if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "SPZ_#7001_variant") {
                    clearInterval(field_int);
                }
                if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') != '') {
                    document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', 'SPZ_#7001_variant');
                }
                document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', 'SPZ_#7001_variant');
            }
        }, 100);

        setTimeout(() => {
            clearInterval(field_int);
        }, 2000);
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