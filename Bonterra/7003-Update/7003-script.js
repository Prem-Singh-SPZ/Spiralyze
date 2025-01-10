let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz-7003')) {
            body.classList.add('spz-7003');

            waitForElm('#site-wrapper .form-content form.mktoForm .mktoButtonRow .mktoButtonWrap button.mktoButton').then(function () {
                formModify();
                updateContent();
                setHiddenFields();
            });

            //add url pathname to body class
            let url = window.location.pathname;
            let urlArr = url.split('/');
            let urlPath = urlArr[urlArr.length - 1].split('.')[0];
            body.classList.add(urlPath);

            //preload images
            const imagesToPreload = [
                '//res.cloudinary.com/spiralyze/image/upload/v1724831150/bonterra/1002/Helper_container.svg'
            ];
        }
    }
});

//update rest of page content
function updateContent() {
    //logo change
    if (document.querySelectorAll('body.spz-7003 #site-wrapper .form-content .spz-social-proof').length == 0) {
        //social proof
        document.querySelector('body.spz-7003 #site-wrapper .form-content .container').insertAdjacentHTML('beforeend', '<div class="spz-social-proof"><div class="sp-container"><div class="sp-title">Over <span>400,000 Customers</span> from Small Business to Enterprise</div><div class="sp-content"><picture><source media="(min-width:1025px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/7003/logos_1440.webp" type="image/webp"><source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/7003/logos_768.webp" type="image/webp"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/bonterra/7003/logo_360.webp" alt="Social Proof"></picture></div></div></div>');

        //get the string inside .lead break it as per "." in it and wrap it in span
        let leadText = document.querySelector('body.spz-7003 #site-wrapper .form-content #HeroForm-Content > p:not(.eyebrow-large)').textContent;
        let leadTextArr = leadText.split('.');
        var newLeadText = '';
        leadTextArr.forEach(function (el) {
            newLeadText += `<p>${el}.</p>`;
        });

        document.querySelector('body.spz-7003 #site-wrapper .form-content #HeroForm-Content').insertAdjacentHTML('beforeend', `<div class="lead">${newLeadText}</div>`);

        // check if session storage has value then show all the sections
        if (!sessionStorage.getItem('spz-learn-more')) {
            document.querySelector('body.spz-7003 #site-wrapper .form-content .container').insertAdjacentHTML('beforeend', `<div class="lm-cta-wrapper"><a href="javascript:;" class="spz_learn_more">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="#381360" stroke-width="1.5" stroke-linecap="square"/>
            </svg></a></div>`);

            //hide all the sections except HERO
            document.querySelectorAll('body.spz-7003 #site-wrapper #site-main > section:not(.form-content)').forEach(function (el) {
                el.classList.add('spz-hidden');
            });
            document.querySelector('body.spz-7003 #site-footer').classList.add('spz-hidden');
        }
    }
}

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('spz_learn_more')) {
        document.querySelectorAll('body.spz-7003 #site-wrapper #site-main > section:not(.form-content)').forEach(function (el) {
            el.classList.remove('spz-hidden');
        });
        document.querySelector('body.spz-7003 #site-footer').classList.remove('spz-hidden');

        event.target.parentElement.classList.add('spz-hidden');
        document.querySelector('.spz-7003 #SEC2').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        //store value in session storage so that it will be available on page refresh
        sessionStorage.setItem('spz-learn-more', 'true');
    }
});

function formModify() {
    document.querySelector('#site-wrapper .form-content #HeroForm-Title').innerHTML = `<h4 class="spz-form-title">Get a demo</h4>`;
    document.querySelector('#site-wrapper .form-content form.mktoForm .mktoButtonRow .mktoButtonWrap button.mktoButton').textContent = "Submit";


    addUniqueClass();

    // Change Label Text
    document.querySelector('label#LblFirstName').textContent = "First Name";
    document.querySelector('label#LblLastName').textContent = "Last Name";
    document.querySelector('label#LblCompany').textContent = "Organization Name";
    document.querySelector('label#LblEmail').textContent = "Email Address";
    document.querySelector('label#LblPhone').textContent = "Phone Number";
    document.querySelector('label#LblIndustry').textContent = "Organization Type";
    document.querySelector('label#LblList_Size__c').textContent = "Supporter/Donor List Size";
    document.querySelector('label#LblProduct_Interest__c').textContent = "Product Interest";

    // Change Field Positions
    const email_field = document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm .Email-row');
    const orgname_field = document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm .Company-row');
    email_field.before(orgname_field);

    const donor_field = document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm .List_Size__c-row');
    const orgtype_field = document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm .Industry-row');
    orgtype_field.after(donor_field);


    focusFields();

    document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm .mktoButtonRow button.mktoButton').addEventListener('click', function (event) {
        document.querySelectorAll(`.spz-7003 #site-wrapper .form-content form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (elem) {
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

                document.querySelector('#site-wrapper .form-content form.mktoForm .mktoButtonRow .mktoButtonWrap button.mktoButton').textContent = "Submit";
            }, 100);

            setTimeout(() => {
                clearInterval(Buffertime);
            }, 1000);
        });
    });
}

function addUniqueClass() {
    document.querySelectorAll('.spz-7003 #site-wrapper .form-content form.mktoForm .mktoFormRow').forEach(function (element) {
        const mktoField = element.querySelector('.mktoField');

        if (mktoField && mktoField.getAttribute('type') == 'hidden') {
            element.classList.add('hideField');
        }
        else {
            element.classList.add(element.querySelector('.mktoField').getAttribute('id') + '-row');
            element.querySelector('.mktoField').setAttribute('placeholder', '');
        }
    });

    document.querySelector('.mktoFormRow.Phone-row').classList.add('spz-hidden');
    document.querySelector('.mktoFormRow.Industry-row').classList.add('spz-hidden');
    document.querySelector('.mktoFormRow.List_Size__c-row').classList.add('spz-hidden');
    document.querySelector('.mktoFormRow.Product_Interest__c-row').classList.add('spz-hidden');
}

// On input focus add class on closest parent field class
function focusFields() {
    document.querySelectorAll(`.spz-7003 #site-wrapper .form-content form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
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

    checkValidFields();
}

function checkValidFields() {
    // let validFields = document.querySelectorAll('.spz-7003 #site-wrapper .form-content form.mktoForm  .mktoFormCol:not(.spz-hidden) .mktoRequiredField.filled').length;

    if ((document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm #FirstName').value != null && document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm #FirstName').value != '') && (document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm #LastName').value != null && document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm #LastName').value != '') && (document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm #Email').value != null && document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm #Email').value != '') && (document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm #Company').value != null && document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm #Company').value != '')) {

        document.querySelectorAll('.mktoFormRow.spz-hidden').forEach(function (elem) {
            elem.classList.remove('spz-hidden');
        })

        document.querySelector('.spz-7003 #site-wrapper .form-content form.mktoForm ').classList.add('spz-full-form');
        if (document.querySelector('.spz-7003 .lm-cta-wrapper')) {
            document.querySelector('.spz-7003 .lm-cta-wrapper').classList.add('push-cta-down');
        }
    }
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