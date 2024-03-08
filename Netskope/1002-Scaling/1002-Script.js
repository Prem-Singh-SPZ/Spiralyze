document.body.classList.add('spz-1002');

document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700035287/netskope/1001/Checkbox_checked.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700209674/netskope/1001/Chevron_inverted.svg" as="image">`
);

//Form internal code
waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap').then(function () {
    formModify();
});

function formModify() {
    const mktoFormRowElements = document.querySelectorAll('.netskope-component--request-demo-form form.mktoForm .mktoFormRow');
    mktoFormRowElements.forEach(function (element) {
        const mktoField = element.querySelector('.mktoField');

        if (mktoField && mktoField.getAttribute('type') == 'hidden') {
            element.classList.add('hideField');
        }
        else {
            element.querySelectorAll('.mktoFieldDescriptor.mktoFormCol').forEach(function (elm) {
                elm.classList.add(elm.querySelector('.mktoField').getAttribute('id') + '-row');
                document.querySelector('.mktoForm').insertAdjacentElement('beforeend', elm);
                elm.querySelector('.mktoField').setAttribute('placeholder', '');
            });
        }
    });


    //form title update
    var formDiv = document.querySelector('.landing-page__form-container .landing-page__form .landing-page__form-content .mktoForm');
    if (formDiv && document.querySelectorAll('.form_title').length == 0) {
        formDiv.insertAdjacentHTML('beforebegin', `<div class="form_title">Get Started</div>`);
    }

    //form Cta update
    var textChng = document.querySelector('.landing-page__container-inner .landing-page__form-container .mktoForm .mktoButtonRow .mktoButton');

    waitForElm('.mktoFormRow.hideField').then(function () {

        let changeLabels = setInterval(() => {
            textChng.textContent = 'Submit';
            // document.querySelector('#mOICustomField11 option:first-child').textContent = "";
            // document.querySelector('#LblmOICustomField11').textContent = "I would like to";
            document.querySelector('#numEmployeesRange option:first-child').textContent = "";
            document.querySelector('#LblEmail').textContent = "Business Email";
            document.querySelector('#LblCompany').textContent = "Company";
            document.querySelector('#LblTitle').textContent = "Job title";
            document.querySelector('#LblnumEmployeesRange').textContent = "Number of Employees";
            document.querySelector('#LblPhone').textContent = "Phone";

            document.querySelector('#Country option:first-child').textContent = "";
            document.querySelector('#LblCountry').textContent = "Country";
            document.querySelector('#LblFirstName').textContent = "First Name";
            document.querySelector('#LblLastName').textContent = "Last Name";

            document.querySelector(".mktoButton").setAttribute('tabindex', '14');
            setHiddenFields();
        }, 10);
        setTimeout(() => {
            clearInterval(changeLabels);
        }, 100);

        // document.querySelector('.mktoFormCol.Contact_Us_Form_Entry__c-row').classList.add('spz-hidden');
        document.querySelector('.mktoFormCol[class*="mktoCheckbox_"]').classList.add('spz-hidden');
        document.querySelector('.mktoFormCol.Country-row').classList.add('spz-hidden');
        document.querySelector('.mktoFormCol.Phone-row').classList.add('spz-hidden');
        document.querySelector('.mktoFormCol.numEmployeesRange-row').classList.add('spz-hidden');
        document.querySelector('.mktoFormCol.Title-row').classList.add('spz-hidden');

        document.querySelector('.LastName-row').insertAdjacentElement('afterend', document.querySelector('.Email-row'));


        waitForElm('body .netskope-component--request-demo-form form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap').then(function () {
            if (document.querySelectorAll('.frm-commt').length == 0) {
                document.querySelector('body .netskope-component--request-demo-form form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap').insertAdjacentHTML('beforebegin', `<div class="frm-commt">
                    <div class="commt-text">Comment</div>
                    </div>`);
            }
            document.querySelector('body form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .frm-commt').addEventListener('click', function () {
                this.classList.toggle("close-cmnt");
                var mktoFieldWrapList = document.querySelectorAll('body form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap');
                mktoFieldWrapList.forEach(function (element) {
                    element.classList.toggle("visible");
                });
            });
        });
    });


    // document.getElementById("mOICustomField11").setAttribute('tabindex', '1');
    document.getElementById("FirstName").setAttribute('tabindex', '2');
    document.getElementById("LastName").setAttribute('tabindex', '3');
    document.getElementById("Email").setAttribute('tabindex', '4');
    document.getElementById("Company").setAttribute('tabindex', '5');
    document.getElementById("Title").setAttribute('tabindex', '6');
    document.getElementById("numEmployeesRange").setAttribute('tabindex', '7');
    document.getElementById("Phone").setAttribute('tabindex', '8');
    document.getElementById("Country").setAttribute('tabindex', '9');
    // document.getElementById("Contact_Us_Form_Entry__c").setAttribute('tabindex', '11');

    // form state
    var selector = 'body form.mktoForm .mktoFormCol .mktoFieldWrap input, body form.mktoForm .mktoFormCol .mktoFieldWrap select';

    document.addEventListener('focus', function (event) {
        if (event.target.matches(selector)) {
            event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
        }
        checkValidFields();
        checkState();
    }, true);

    var eventList = ["blur", "focusout", "keyup"];
    for (s_event of eventList) {
        document.addEventListener(s_event, function (event) {
            if (event.target.matches(selector)) {
                if (event.target.value == null || event.target.value == '') {
                    event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.remove('active');
                    event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.remove('filled');
                } else {
                    event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('active');
                    event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('filled');

                }
            }
            checkState();
        });
    }

    document.addEventListener('focusout', function (event) {

        document.querySelectorAll('body form.mktoForm .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
            elem.classList.remove('typing');
        })
        checkState();
    }, true);
};

//Add hidden fields
function setHiddenFields() {
    if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
        document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#1002_spzaa_variant');
    }
}

function checkValidFields() {
    let validFields = document.querySelectorAll('.mktoFormCol:not(.spz-hidden) .mktoRequiredField.filled').length;
    if (validFields >= 4) {
        document.querySelectorAll('.spz-hidden').forEach(function (elem) {
            elem.classList.remove('spz-hidden');
        })

        document.querySelector('.get-started-form__container').classList.add('spz-full-form');
    }
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

function checkState() {
    waitForElm('#PostalCode').then(function () {
        document.querySelector('#PostalCode').closest('.mktoFormRow').classList.add('row-PostalCode');
        // document.querySelector('.Country-row').insertAdjacentElement('afterend', document.querySelector('#PostalCode').closest('.mktoFormRow'));
        document.querySelector('#PostalCode').setAttribute('tabindex', '12');
        if (document.querySelector('.mktoFormCol.Country-row.spz-hidden')) {
            document.querySelector('#PostalCode').closest('.mktoFormRow').classList.add('spz-hidden');
        }
    });
    waitForElm('.netskope-fm').then(function () {
        document.querySelector('.netskope-fm').closest('.mktoFormRow').classList.add('row-netskope-fm');
        if (document.querySelector('.mktoFormCol.Country-row.spz-hidden')) {
            document.querySelector('.netskope-fm').closest('.mktoFormRow').classList.add('spz-hidden');
        }
        document.querySelector(".netskope-fm a").setAttribute('tabindex', '13');
    });
    waitForElm('.single_checkbox').then(function () {
        document.querySelector('.single_checkbox').closest('.mktoFormRow').classList.add('row-single_checkbox');
        if (document.querySelector('.mktoFormCol.Country-row.spz-hidden')) {
            document.querySelector('.single_checkbox').closest('.mktoFormRow').classList.add('spz-hidden');
        }
        document.querySelector("#LblConsent_to_Processing__c .p11 a").setAttribute('tabindex', '12');
    });
}
// });

