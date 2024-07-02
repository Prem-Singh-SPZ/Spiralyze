let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz-5001')) {
            body.classList.add('spz-5001');

            heroSection();
            footerFormSection();
        }
    }
});

function heroSection() {

    document.querySelector('.zy-hero-container-accordion .zy-hero-container-inner').innerHTML = `<div class="spz-hero-copy-container"><p class="eye-brow-text">Personal lines Solutions</p></div>`;

    salesCloud();
}

function salesCloud() {
    document.querySelector('.zy-hero-container-general.zy-hero-container-accordion').insertAdjacentHTML('afterend', `<div class="benefits-section">
        <div class="benefits-row">
            <div class="benefits-col">
                <div class="benefits-title">Benefits</div>
                <div class="benefits-content">
                    <div class="benefits-line benefits-left">
                        <div class="benefits-text">
                            <div class="title-img-wrapper">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/10001/frame_1171275599.svg" alt="Streamline manual workflows">
                                <h3>Streamline manual workflows</h3>
                            </div>
                            <p>Let clients complete digital forms that consolidate carrier questionnaires. Auto-capture plan needs and other details. Get instant pricing from 1,000+ carriers. No more manually entering client data across every carrier site. Streamline the request for proposal (RFP) process no matter what plan design your employer requires.</p>
                        </div>
                        <div class="benefits-image">
                            <picture>
                                <source media="(min-width:1025px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1000003441.webp">
                                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1000003440.webp">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1000003439.webp" alt="Streamline manual workflows">
                            </picture>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
        <div class="benefits-section">
        <div class="benefits-row">
            <div class="benefits-col">
                <div class="benefits-title">Benefits</div>
                <div class="benefits-content">
                    <div class="benefits-line benefits-right">
                        <div class="benefits-image">
                           <picture>
                                <source media="(min-width:1025px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1171275611.webp">
                                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1171275610.webp">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/10001/frame_1171275609.webp" alt="Boost sales">
                            </picture>
                        </div>
                        <div class="benefits-text">
                            <div class="title-img-wrapper">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/10001/frame_1171275600.svg" alt="Boost sales">
                                <h3>Boost sales</h3>
                            </div>
                            <p>Build instant quotes based on real-time carrier rates. New policies, renewals, and alternative plan options. Add professional branding so your quotes stand out. Send to clients in 1 click. Send 2x more quotes. Turn more prospects into clients.</p>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>`);
}

function footerFormSection() {
    waitForElm('.spz-5001 #zy-demo-form-section').then(function () {
        document.querySelector('.spz-5001 #zy-demo-form-section .zy-col-text h3').textContent = "Ready to rocket your ROI?";
        document.querySelector('.spz-5001 #zy-demo-form-section .zy-col-text .zy-content').textContent = "Improve efficiency of prospecting and selling. Make smarter decisions with data-driven insights. Increase productivity and achieve profitable growth.";
        //Form internal code
        waitForElm('.spz-5001 #zy-demo-form-section .zy-col-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
            formModify();
        });
        //Add Hidden field value
        waitForElm('.spz-5001 .zy-marketo-form-container .mktoForm input[name="cR02"]').then(function () {
            document.querySelector(`.spz-5001 .zy-marketo-form-container .mktoForm input[name="cR01"]`).setAttribute("value", "1004_variant");
        });
    });
}

function formModify() {
    // Add class in mktoFormRow using count
    var form_fields = document.querySelectorAll('.spz-5001 #zy-demo-form-section .zy-col-form form.mktoForm .mktoFormRow fieldset.mktoFormCol .mktoFormRow');
    for (var i = 0; i < form_fields.length; i++) {
        var dynamicClass = 'field-' + (i + 1);
        form_fields[i].classList.add(dynamicClass);
    }
    var formDiv = document.querySelector('.spz-5001 #zy-demo-form-section form.mktoForm');
    // Form Extra Titles
    if (formDiv && document.querySelectorAll('.form_title').length == 0) {
        formDiv.insertAdjacentHTML('beforebegin', `<h3 class="form_title">Get a demo</h3>`);
    }
    // form CTA Update
    var form_button = setInterval(() => {
        var textChng = document.querySelector('.spz-5001 #zy-demo-form-section form.mktoForm .mktoButtonRow .mktoButton');
        if (textChng) {
            textChng.innerText = 'Submit';
            clearInterval(form_button);
        }
    }, 100);
    // Updating Form Labels
    document.querySelector('#LblFirstName').textContent = "First name";
    document.querySelector('#LblLastName').textContent = "Last name";
    document.querySelector('#LblEmail').textContent = "Business email";
    document.querySelector('#LblCompany').textContent = "Company";
    document.querySelector('#LblwebsiteFormJobDescription').textContent = "Job category";
    document.querySelector('select#websiteFormJobDescription').options[0].textContent = 'Job category';
    document.querySelector('#LblPhone').textContent = "Phone";
    document.querySelector('#Lblringdna100__ProductInterest__c').textContent = "I want to discuss";
    document.querySelector('select#ringdna100__ProductInterest__c').options[0].textContent = 'I want to discuss';
    // Change Field Position
    var email_field = document.querySelector('.spz-5001 .mktoForm .mktoFormRow.field-7');
    var lname_field = document.querySelector('.spz-5001 .mktoFormRow.field-2');
    lname_field.after(email_field);
    var all_inputs = document.querySelectorAll('.spz-5001 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz-5001 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select');
    all_inputs.forEach(function (element) {
        element.removeAttribute('placeholder');
    });
    // form state
    var selector = '.spz-5001 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz-5001 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select';
    document.addEventListener('focus', function (event) {
        if (event.target.matches(selector)) {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
        }
    }, true);
    var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
    for (s_event of eventList) {
        document.addEventListener(s_event, function (event) {
            if (event.target.matches(selector)) {
                if (event.target.value == null || event.target.value == '') {
                    event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('filled');
                } else {
                    event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('filled');
                }
                if (event.type == "change" && event.target.tagName == 'SELECT') {
                    if (event.target.value == "") {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
                    } else {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                        if (event.target.parentNode.querySelector('.mktoError').length > 0) {
                            event.target.parentNode.querySelector('.mktoError').style.display = 'none';
                        }
                    }
                } else {
                    if (event.target.classList.contains('mktoInvalid')) {
                        var closestError = event.target.parentNode.querySelector('.mktoError');
                        if (closestError && closestError.style.display == '') {
                            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
                        } else {
                            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                        }
                    } else {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                    }
                }
            }
        });
    }

    document.addEventListener('focusout', function (event) {
        document.querySelectorAll('body form .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
            elem.classList.remove('active', 'typing');
        })
    }, true);
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
