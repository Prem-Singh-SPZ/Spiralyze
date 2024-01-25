document.body.classList.add('spz-9001');

document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700035287/netskope/1001/Checkbox_checked.svg" as="image"><link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700209674/netskope/1001/Chevron_inverted.svg" as="image">`
);

//Form internal code
waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap').then(function () {
    formModify();
});
copyModify();

function copyModify() {
    waitForElm('.landing-page__content-container .landing-page__content ul li').then(function () {
        document.querySelector('.landing-page__content-container .landing-page__title').textContent = 'Secure your entire multi-cloud environment';
        document.querySelector('.landing-page__content-container .landing-page__content').innerHTML = `<ul><li><span>Network. </span>Deliver fast, secure network connectivity. One cloud-based solution.</li><li><span>Visibility.</span> Get full visibility into your multi-cloud network. Web, SaaS, cloud, and more.</li><li><span>Security.</span> Monitor & verify network activities 24/7. Only allow access to required tasks.</li></ul>`;

        document.querySelector('#components__content').insertAdjacentHTML('beforeend', `<div class="spz-trusted-section"><div class="section-container"><div class="section-title"><p>We partner with leaders across the security industry</p></div><div class="section-content"><picture>
        <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706011189/netskope/9001/Trusted-Desktop.svg">
        <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706011189/netskope/9001/Trusted-Tablet.svg">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1706011189/netskope/9001/Trusted-Mobile.svg" alt="Trusted Partners">
        </picture></div></div></div><div class="spz-footer"><div class="footer-container"><div class="footer-badges"><picture>
        <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/9001/Badges-desktop.png">
        <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/9001/Badges-tablet.png">
        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/9001/Badges-mobile.png" alt="Badges">
        </picture></div><div class="footer-links"><div class="phone"><div class="phone-text">To contact us by phone, please call:</div><div class="mobile"><img src="//res.cloudinary.com/spiralyze/image/upload/v1706077616/netskope/9001/Call-icon.svg" alt="phone"> USA: +1 (800) 979-6988</div></div><div class="privacy-policy"><div class="p-anchor"><a href="https://www.netskope.com/privacy-policy">Privacy Policy</a></div><div class="copyright"> © 2024, All rights reserved.</div></div></div></div></div>`);
    });
}

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
        formDiv.insertAdjacentHTML('beforebegin', `<div class="form_title">Contact us</div>`);
        document.querySelector('.landing-page__form-container').insertAdjacentHTML('afterbegin','<div class="tablet-title"><h1 class="landing-page__title">Secure your entire multi-cloud environment</h1></div>')
    }

    //form Cta update
    var textChng = document.querySelector('.landing-page__container-inner .landing-page__form-container .mktoForm .mktoButtonRow .mktoButton');

    waitForElm('.mktoFormRow.hideField').then(function () {

        let changeLabels = setInterval(() => {
            textChng.textContent = 'Submit';
            document.querySelector('#LblPostalCode').textContent = "Zip/Postal Code";
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

        // document.querySelector('.LastName-row').insertAdjacentElement('afterend', document.querySelector('.Email-row'));


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


    document.getElementById("FirstName").setAttribute('tabindex', '1');
    document.getElementById("LastName").setAttribute('tabindex', '2');
    document.getElementById("Email").setAttribute('tabindex', '3');
    document.getElementById("Phone").setAttribute('tabindex', '4');
    document.getElementById("Company").setAttribute('tabindex', '5');
    document.getElementById("Title").setAttribute('tabindex', '6');
    document.getElementById("Country").setAttribute('tabindex', '7');
    document.getElementById("PostalCode").setAttribute('tabindex', '9');
    document.getElementById("Contact_Us_Form_Entry__c").setAttribute('tabindex', '10');

    // form state
    var selector = 'body form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField';

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