document.body.classList.add('spz-9001');

document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700035287/netskope/1001/Checkbox_checked.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700209674/netskope/1001/Chevron_inverted.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1709197595/netskope/9001/Checkbox_checked.svg" as="image">`
);

//Form internal code
waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap').then(function () {
    formModify();
});
copyModify();

function copyModify() {
    waitForElm('.landing-page__content-container .landing-page__content ul li').then(function () {

        if (document.querySelectorAll('.landing-page__content-container .landing-page__content .content_3').length == 0) {
            document.querySelector('.landing-page__content-container .landing-page__title').innerHTML = 'Protect and accelerate<br>everything to everywhere';
            document.querySelector('.landing-page__content-container .landing-page__content').innerHTML = `<p class="content_1">Get in touch with a Netskope representative to see a demo or simply learn more about our products</p><ul><li><span>The Power of One </span>- Reduce cost and complexity through one platform, one client, one gateway, and one private security cloud.</li><li><span>Ultimate visibility & protection </span>- Decode cloud and SaaS user activity with AI & Zero Trust Engine to stop data loss and threats.</li><li><span>A phenomenal user experience </span>- Accelerate your enterprise on our private security cloud & manage the experience end-to-end.</li></ul><p class="content_2">To contact us by phone, please call: USA: +1 (800) 979-6988</p><p class="content_3">Requesting support? Contact us <a href="https://www.netskope.com/netskope-technical-support" target="_blank">here</a></p>`;

            document.querySelector('#components__content').insertAdjacentHTML('beforeend', `<div class="spz-trusted-section"><div class="section-container"><div class="section-title"><p>We partner with leaders across the security industry</p></div><div class="section-content"><picture>
        <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706011189/netskope/9001/Trusted-Desktop.svg">
        <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706011189/netskope/9001/Trusted-Tablet.svg">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1706011189/netskope/9001/Trusted-Mobile.svg" alt="Trusted Partners">
        </picture></div></div></div><div class="spz-footer"><div class="footer-container"><div class="footer-badges"><picture>
        <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/9001/Badges-desktop.png">
        <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/9001/Badges-tablet.png">
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/9001/Badges-mobile.png" alt="Badges">
        </picture></div><div class="footer-links"><div class="phone"><div class="phone-text">To contact us by phone, please call:</div><div class="mobile"><img src="//res.cloudinary.com/spiralyze/image/upload/v1706077616/netskope/9001/Call-icon.svg" alt="phone"> USA: +1 (800) 979-6988</div></div><div class="privacy-policy"><div class="p-anchor"><a href="https://www.netskope.com/privacy-policy">Privacy Policy</a></div><div class="copyright"> © 2024, All rights reserved.</div></div></div></div></div>`);
        }
    });
}

function rearrangeFields() {
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
}

function formModify() {
    rearrangeFields();

    //form title update
    var formDiv = document.querySelector('.landing-page__form-container .landing-page__form .landing-page__form-content .mktoForm');
    if (formDiv && document.querySelectorAll('.form_title').length == 0) {
        formDiv.insertAdjacentHTML('beforebegin', `<div class="form_title">Contact us</div>`);
        document.querySelector('.landing-page__form-container').insertAdjacentHTML('afterbegin', '<div class="tablet-title"><h1 class="landing-page__title">Protect and accelerate<br>everything to everywhere</h1></div>')
    }

    //form Cta update
    var textChng = document.querySelector('.landing-page__container-inner .landing-page__form-container .mktoForm .mktoButtonRow .mktoButton');

    waitForElm('.mktoFormRow.hideField').then(function () {

        let changeLabels = setInterval(() => {
            textChng.textContent = 'Submit';
            document.querySelector('#LblEmail').textContent = "Business Email";
            document.querySelector('#LblCompany').textContent = "Company";
            document.querySelector('#LblTitle').textContent = "Job Title";
            document.querySelector('#LblPhone').textContent = "Phone";
            document.querySelector('#LblCountry').textContent = "Country";
            document.querySelector('#Country option:first-child').textContent = "";
            document.querySelector('#LblFirstName').textContent = "First Name";
            document.querySelector('#LblLastName').textContent = "Last Name";
            document.querySelector('#LblContact_Us_Form_Entry__c').textContent = "Give us a brief description why you are contacting us.";

            document.querySelector(".mktoButton").setAttribute('tabindex', '14');
        }, 10);
        setTimeout(() => {
            clearInterval(changeLabels);
        }, 100);

        MktoForms2.whenReady(function (form) {
            // Change field sequences
            document.querySelector('.LastName-row').insertAdjacentElement('afterend', document.querySelector('.Email-row'));
            document.querySelector('.Email-row').insertAdjacentElement('afterend', document.querySelector('.Phone-row'));
            document.querySelector('.Phone-row').insertAdjacentElement('afterend', document.querySelector('.Company-row'));

            // Update consent checkbox 'LblConsent_to_Processing__c' to parents 'mktoFormRow' class
            document.querySelector('.mktoPlaceholderConsent_to_Processing__c').parentElement.classList.add('consent-check-spz');

            // Add hidden fields
            setHiddenFields();

            // Disable option in 'Country' field where value contains '-------'
            var countryOptions = document.querySelectorAll('#Country option');
            countryOptions.forEach(function (option) {
                if (option.textContent.includes('-------')) {
                    option.setAttribute('disabled', 'disabled');
                    option.setAttribute('style', 'color: #ccc');
                }
            });
        });

        waitForElm('body .netskope-component--request-demo-form form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap').then(function () {
            if (document.querySelectorAll('.frm-commt').length == 0) {
                document.querySelector('body .netskope-component--request-demo-form form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap').insertAdjacentHTML('beforebegin', `<div class="frm-commt">
                    <div class="commt-text">Comment</div>
                    </div>`);
            }
            document.querySelector('body form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .frm-commt .commt-text').addEventListener('click', function () {
                this.parentElement.classList.toggle("close-cmnt");
                var mktoFieldWrapList = document.querySelectorAll('body form.mktoForm .mktoFormCol.Contact_Us_Form_Entry__c-row .mktoFieldWrap');
                mktoFieldWrapList.forEach(function (element) {
                    element.classList.toggle("visible");
                });
            });
        });
    });

    function zipCodeField() {
        waitForElm('#LblPostalCode').then(function () {
            document.querySelector('#LblPostalCode').textContent = "Zip/Postal Code";
            document.getElementById("PostalCode").setAttribute('tabindex', '9');
            document.getElementById("PostalCode").setAttribute('placeholder', '');;
            document.getElementById("PostalCode").closest('.mktoFormCol').classList.add('row-PostalCode');
            rearrangeFields();
        });
    }

    document.getElementById("FirstName").setAttribute('tabindex', '1');
    document.getElementById("LastName").setAttribute('tabindex', '2');
    document.getElementById("Email").setAttribute('tabindex', '3');
    document.getElementById("Phone").setAttribute('tabindex', '4');
    document.getElementById("Company").setAttribute('tabindex', '5');
    document.getElementById("Title").setAttribute('tabindex', '6');
    document.getElementById("Country").setAttribute('tabindex', '7');
    document.getElementById("Contact_Us_Form_Entry__c").setAttribute('tabindex', '10');

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

    // On change of '#Country' field add class '.consent-check-oo-spz' on '.consent-check-spz .mktoFormCol' element
    document.querySelector('#Country').addEventListener('change', function () {
        zipCodeField();
        if (document.querySelector('.consent-check-spz .mktoFormCol')) {
            document.querySelector('.consent-check-spz .mktoFormCol').classList.add('consent-check-oo-spz');
        }
    });
};

//Add hidden fields
function setHiddenFields() {
    if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
        document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#9001_spz_variant');
    } else if (document.querySelectorAll('#mktoForm_1169 .mktoFormRow [name="utm_location__c"]').length == 0) {
        // If [name="utm_location__c"] doesn't exist, add hidden field
        document.querySelector('#mktoForm_1169').insertAdjacentHTML('beforeend', '<input type="hidden" name="utm_location__c" value="#9001_spz_variant">');
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