document.body.classList.add('spz-8001');

document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700035287/netskope/1001/Checkbox_checked.svg" as="image">`
);

//create html for hero section, with header logo in row and copy and form in 2nd row
document.body.insertAdjacentHTML('afterbegin', `
    <section class="hero-section">
        <div class="header-row">
            <div class="header-col">
                <a href="https://www.zywave.com/" target="_blank">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/8001/yi7brhljad4mwktwdvelxvlydk9pkamkfwni2dpr_1.svg" alt="Zywave Logo" class="zywave-logo">
                </a>
            </div>
        </div>
        <div class="hero-row">
            <div class="hero-col">
                <h1 class="hero-title
                ">Get a demo</h1>
                <p class="hero-copy">See how Zywave can help you grow your business</p>
            </div>
            <div class="hero-col">
                <div class="hero-form">
                    <div class="zy-marketo-form-container"></div>
                </div>
            </div>
        </div>
    </section>
`);

//Form internal code
waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField[id]').then(function () {
    formModify();
});

function rearrangeFields() {
    const mktoFormRowElements = document.querySelectorAll('form.mktoForm .mktoFormRow');
    mktoFormRowElements.forEach(function (element) {
        const mktoField = element.querySelector('.mktoField');

        if (mktoField && mktoField.getAttribute('type') == 'hidden') {
            element.classList.add('hideField');
        }
        else {
            element.querySelectorAll('.mktoFieldDescriptor.mktoFormCol').forEach(function (elm, index) {
                elm.classList.add('field_' + index);
                document.querySelector('.mktoForm fieldset.mktoFormCol').insertAdjacentElement('beforeend', elm);
                // check if mktoField has placeholder
                if (elm.querySelector('.mktoField[placeholder]')) {
                    elm.querySelector('.mktoField').setAttribute('placeholder', '');
                }
            });
        }
    });
}

function formModify() {
    rearrangeFields();

    //form title update
    var formDiv = document.querySelector('.zy-marketo-form-container');
    if (formDiv && document.querySelectorAll('.form_title').length == 0) {
        formDiv.insertAdjacentHTML('beforebegin', `<div class="form_title">Get a demo</div>`);
    }

    //form Cta update
    var textChng = document.querySelector('.zy-demo-form-section-container .zy-marketo-form-container button.mktoButton');

    let changeLabels = setInterval(() => {
        textChng.textContent = 'Submit';
        document.querySelector('#LblEmail').textContent = "Business Email";
        document.querySelector('#LblCompany').textContent = "Company";
        document.querySelector('#LblwebsiteFormJobDescription').textContent = "Job category";
        document.querySelector('#LblPhone').textContent = "Phone";
        document.querySelector('#LblFirstName').textContent = "First Name";
        document.querySelector('#LblLastName').textContent = "Last Name";
        document.querySelector('#Lblringdna100__ProductInterest__c').textContent = "I want to discuss";

        document.querySelector(".mktoButton").setAttribute('tabindex', '14');
    }, 10);
    setTimeout(() => {
        clearInterval(changeLabels);
    }, 100);

    document.getElementById("FirstName").setAttribute('tabindex', '1');
    document.getElementById("LastName").setAttribute('tabindex', '2');
    document.getElementById("Email").setAttribute('tabindex', '3');
    document.getElementById("websiteFormJobDescription").setAttribute('tabindex', '4');
    document.getElementById("Company").setAttribute('tabindex', '5');
    document.getElementById("Phone").setAttribute('tabindex', '6');
    document.getElementById("ringdna100__ProductInterest__c").setAttribute('tabindex', '7');

    var countryOptions = document.querySelectorAll('.mktoFieldWrap select');
    countryOptions.forEach(function (select) {
        if (select.querySelector('option[value=""]')) {
            select.querySelector('option[value=""]').setAttribute('disabled', 'disabled');
            select.querySelector('option[value=""]').setAttribute('style', 'color: #ccc');
            select.querySelector('option[value=""]').textContent = '';
        }
    });

    // form state
    var selector = 'body form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField';

    document.addEventListener('click', function (event) {
        if (event.target.matches(selector)) {
            event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
        }
    }, true);

    document.addEventListener('focus', function (event) {
        if (event.target.matches(selector)) {
            event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
        }
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
        });
    }

    document.addEventListener('focusout', function (event) {
        document.querySelectorAll('body form.mktoForm .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
            elem.classList.remove('typing');
        })
    }, true);
};

//Add hidden fields
function setHiddenFields() {
    if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
        document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#9001_spz_variant');
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
// });