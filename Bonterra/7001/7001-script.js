let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz-7001')) {
            body.classList.add('spz-7001');

            waitForElm('#HERO form.mktoForm .mktoButtonRow .mktoButtonWrap button.mktoButton').then(function () {
                formModify();
                setHiddenFields();
            });

            //add url pathname to body class
            let url = window.location.pathname;
            let urlArr = url.split('/');
            let urlPath = urlArr[urlArr.length - 1].split('.')[0];
            body.classList.add(urlPath);

            //logo change
            document.querySelector('body.spz-7001 #HEAD > .container .block .my-3 a img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/bonterra/7001/Bonterra-logo.svg');

            document.querySelector('body.spz-7001 #HERO .container .block-wrapper .block-2 > .mktoText > div .stats .stats__item:last-child .stats__item-footer img').setAttribute('src', 'https://488-ILM-190.mktoweb.com/rs/488-ILM-190/images/handshake-icon-periwinkle.webp');

            //preload images
            const imagesToPreload = [
                '//res.cloudinary.com/spiralyze/image/upload/v1724831150/bonterra/1002/Helper_container.svg'
            ];

            //clone existing section to new place
            let cloneSection = document.querySelector('body.spz-7001 #HERO .container .block-wrapper .block-2 > .mktoText > div .stats').cloneNode(true);
            document.querySelector('body.spz-7001 #HERO .container .block-wrapper .block-3 > .mktoForm').insertAdjacentElement('afterend', cloneSection);

        }
    }
});

function formModify() {
    if (document.querySelectorAll('.spz-7001 #HERO .mktoForm .lpeCElement.Bonterra__Demo_Request__FE h2.spz-form-title').length == 0)
        document.querySelector('#HERO .mktoForm .lpeCElement.Bonterra__Demo_Request__FE').insertAdjacentHTML('afterbegin', `<h2 class="spz-form-title">Get a Demo</h2>`);


    document.querySelector('#HERO form.mktoForm .mktoButtonRow .mktoButtonWrap button.mktoButton').textContent = "Submit";

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
    const email_field = document.querySelector('.spz-7001 #HERO form.mktoForm .Email-row');
    const orgname_field = document.querySelector('.spz-7001 #HERO form.mktoForm .Company-row');
    email_field.before(orgname_field);

    const donor_field = document.querySelector('.spz-7001 #HERO form.mktoForm .List_Size__c-row');
    const orgtype_field = document.querySelector('.spz-7001 #HERO form.mktoForm .Industry-row');
    orgtype_field.after(donor_field);


    focusFields();

    document.querySelector('.spz-7001 #HERO form.mktoForm .mktoButtonRow button.mktoButton').addEventListener('click', function (event) {
        document.querySelectorAll(`.spz-7001 #HERO form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (elem) {
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
    document.querySelectorAll('.spz-7001 #HERO form.mktoForm .mktoFormRow').forEach(function (element) {
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
    document.querySelectorAll(`.spz-7001 #HERO form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
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
    // let validFields = document.querySelectorAll('.spz-7001 #HERO form.mktoForm  .mktoFormCol:not(.spz-hidden) .mktoRequiredField.filled').length;

    if ((document.querySelector('.spz-7001 #HERO form.mktoForm #FirstName').value != null && document.querySelector('.spz-7001 #HERO form.mktoForm #FirstName').value != '') && (document.querySelector('.spz-7001 #HERO form.mktoForm #LastName').value != null && document.querySelector('.spz-7001 #HERO form.mktoForm #LastName').value != '') && (document.querySelector('.spz-7001 #HERO form.mktoForm #Email').value != null && document.querySelector('.spz-7001 #HERO form.mktoForm #Email').value != '') && (document.querySelector('.spz-7001 #HERO form.mktoForm #Company').value != null && document.querySelector('.spz-7001 #HERO form.mktoForm #Company').value != '')) {
        
        document.querySelectorAll('.spz-hidden').forEach(function (elem) {
            elem.classList.remove('spz-hidden');
        })

        document.querySelector('.spz-7001 #HERO form.mktoForm ').classList.add('spz-full-form');
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