let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz-3003')) {
            body.classList.add('spz-3003');
            waitForElm('#hero-section').then(function () {
                document.querySelector('#hero-section .row.hero .col.content').insertAdjacentHTML('afterend', `
                    <div class="col spz-content">
                        <a href="https://expel.com/" class="site-logo-link" rel="home">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1718963562/expel/3003/expel_logosvg.svg" class="site-logo-img" alt="Expel">
                        </a>
                        <p class="eye-brow-text">Our Pricing</p>
                        <h1 class="section-heading">Expel pricing: flexibility, transparency, & ROI</h1>
                        <p class="s-copy">Expel offers flexible packaging options that meet you where you are with your security program. Whether you need us to augment your team, level-up your existing program, or unlock the ROI of your tech stack, we provide 24x7 MDR that works the way you need it to.</p>
                        <p class="s-copy">Either way, we integrate with your existing tech, apply our world-class detections and remediation actions, and provide 100% transparency into how our people and tech are building your cyber resilience.</p>
                    </div>`);

                document.querySelector('#hero-section .row.hero').insertAdjacentHTML('afterend', `
                    <div class="hero-client-logos">
                        <div class="container">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275521.svg" alt="Visa" class="client-logo" />
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275522.svg" alt="Uber" class="client-logo" />
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275523.svg" alt="Markel" class="client-logo" />
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275524.svg" alt="Carter's" class="client-logo" />
                            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/2003/frame_1171275525.svg" alt="Doordash" class="client-logo" />
                        </div>  
                    </div>`);

                // Form Title
                document.querySelector('#hero-section .hero .ex-form .form-title').textContent = "Get Pricing";

                // Form Reviews and Gartner


                //Form Fields Update
                waitForElm('#hero-section .ex-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
                    formModify();
                });
            });
        }
    }
});

function formModify() {
    // Unwrap all child elemnts of mktoFormRow
    var mktoForm = document.querySelector('.mktoForm');
    var mktoFormRows = document.querySelectorAll('.mktoFormRow');
    mktoFormRows.forEach(function (row) {
        while (row.firstChild) {
            mktoForm.insertBefore(row.firstChild, row);
        }
        row.remove();
    });

    // Add Unique class to each field in form as per the label name
    var form_fields = document.querySelectorAll('#hero-section .hero .ex-form form.mktoForm .mktoFormCol');
    form_fields.forEach(function (el) {
        if (el.querySelector('.mktoField:not([type="hidden"])')) {
            var label = el.querySelector('.mktoField:not([type="hidden"])').getAttribute('name').toLowerCase();
            el.classList.add(label);
        } else {
            el.classList.add('no-label');

            // Add class to privacy policy disclaimer
            if (el.querySelector('.mktoHtmlText') && el.querySelector('.mktoHtmlText').textContent.includes('Expel Online Privacy Policy')) {
                el.classList.add('spz-privacy-policy');
            }
        }
    });

    // Updating Form Labels
    document.querySelector('#LblEmail').textContent = "Business Email";
    document.querySelector('#LblCompany_Size__c').textContent = "Company Size";
    document.querySelector('#Company_Size__c').options[0].textContent = 'Select';
    document.querySelector('#LblPerson_Country__c').textContent = "Country";
    document.querySelector('#LblpersonNotestoAppend').textContent = "What would you like to see?";
    // if (document.querySelector('.mktoForm .spz-privacy-policy .mktoHtmlText')) {
    //     document.querySelector('.mktoForm .spz-privacy-policy .mktoHtmlText').innerHTML = `Information submitted on this form may be associated with other information we have collected and used pursuant to the <a href="https://expel.com/notices/" target="_blank">Expel Online Privacy Policy</a>.`;
    // }

    // form CTA Update
    //   let form_CTA = setInterval(() => {
    //     let textChng = document.querySelector('#hero-section .hero .ex-form form.mktoForm .mktoButtonRow .mktoButton');
    //     if (textChng && !textChng.classList.contains('updated')) {
    //       textChng.innerHTML = '<svg width="19" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.745 8.188L4.958 2.362a.738.738 0 00-.383-.112.701.701 0 00-.696.703h-.004v12.094h.004c0 .387.312.703.696.703.144 0 .263-.05.393-.12l9.777-5.818a1.06 1.06 0 000-1.624z" fill="#fff"/></svg> Instant access ';
    //       textChng.classList.add('updated');
    //       clearInterval(form_CTA);
    //     }
    //   }, 100);

    // Change Field Position
    var phone_field = document.querySelector('.mktoForm .phone');
    var lname_field = document.querySelector('.mktoForm .lastname');
    lname_field.after(phone_field);

    var disclaimer_field = document.querySelector('.mktoForm .mktoCaptchaDisclaimer');
    var form_button = document.querySelector('.mktoForm .mktoButtonRow');
    form_button.after(disclaimer_field);

    var isPartner_field = document.querySelector('.mktoForm .ispartner');
    var privacy_button = document.querySelector('.mktoForm .spz-privacy-policy');
    privacy_button.after(isPartner_field);

    // waitForElm('#hero-section form.mktoForm .mktoFormCol.ispartner').then(function (elm) {
    //     document.querySelector('#hero-section form.mktoForm .mktoFormCol.spz-privacy-policy').after(elm);
    // });

    // + Additional comments
    document.querySelector('.mktoForm .personnotestoappend .mktoFieldWrap').insertAdjacentHTML('beforebegin', `<a href="javascript:void(0);" class="comment-toggler">+ Additional comments</a>`);
    var comment_toggler = document.querySelector(".mktoForm .personnotestoappend .comment-toggler");
    comment_toggler.addEventListener("click", (event) => {
        comment_toggler.classList.add("show-field");
        document.querySelector('.mktoForm .personnotestoappend textarea.mktoField').focus();
    });


    focusFields();

    document.querySelector('#hero-section form.mktoForm .mktoButtonRow .mktoButton').addEventListener('click', function () {
        waitForElm('#hero-section .hero .ex-form form.mktoForm .mktoError').then(function (elm) {
            if (elm.parentNode.querySelector('#ValidMsgEmail')) {
                const targetNode = elm.parentNode;
                const config = { attributes: true, childList: true, subtree: true };
                const callback = (mutationList, observer) => {
                    for (const mutation of mutationList) {
                        if (mutation.type === "childList") {
                            if (elm.parentNode === null && elm.style.display != 'none') {
                                targetNode.classList.add('error');
                            } else {
                                elm.parentNode.classList.add('error');
                            }
                            observer.disconnect();
                        } else if (mutation.type === "attributes") {
                            if (elm.parentNode === null) {
                                targetNode.classList.add('error');
                            } else {
                                elm.parentNode.classList.add('error');
                            }
                            observer.disconnect();
                        }
                    }
                };
                const observer = new MutationObserver(callback);
                observer.observe(targetNode, config);
            } else {
                let counterA = 0;
                const intervalIdA = setInterval(() => {
                    if (document.querySelector('#hero-section .hero .ex-form form.mktoForm .mktoError #ValidMsgEmail') !== null) {
                        document.querySelector('#hero-section .hero .ex-form form.mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
                    }
                    counterA++;
                    if (counterA >= 10) {
                        clearInterval(intervalIdA);
                    }
                }, 500);
            }
        });
    });


    // Disable auto-fill for all input, select and textarea
    var inputFields = document.querySelectorAll('input, select, textarea');
    inputFields.forEach(function (field) {
        field.setAttribute('autocomplete', 'nofill');
    });
}

// On input focus add class on closest parent field class
function focusFields() {
    document.querySelectorAll(`#hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
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
    });
}

// Function to add .field-error class on closest parent .field class if .error is exist on input
function checkError(elem) {
    let timeBuffer = setInterval(() => {
        if (elem.closest('.mktoFieldWrap').querySelector('.mktoError') && elem.closest('.mktoFieldWrap').querySelector('.mktoInvalid')) {
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

    waitForElm('#hero-section form.mktoForm .mktoFormCol .mktoField[data-zi-input-enriched="false"]').then(function (elm) {
        document.body.classList.add('form-expand');
    });

    if (elem.name == 'Person_Country__c') {
        waitForElm('#hero-section form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_27626_0 Privacy_Compliance_Explicit_Opt_In__c"]').then(function (elm) {
            document.querySelector('#hero-section form.mktoForm .mktoFormCol.spz-privacy-policy').after(elm);
        });
    }
}

// Do not touch below hidden field code for any Experiment (Set Hidden Filed Value)
function hiddenValue(currentExperimentName, currentExperimentValue) {
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    var ExistingExperimentName = getCookie('ExperimentName');
    var ExistingExperimentValue = getCookie('ExperimentValue');

    if (!ExistingExperimentName) {

        setCookie('ExperimentName', currentExperimentName, 1);
        setCookie('ExperimentValue', currentExperimentValue, 1);

    } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

        setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
        setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

    } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

        var existingNames = ExistingExperimentName.split(',');
        var existingValues = ExistingExperimentValue.split(',');

        var index = existingNames.indexOf(currentExperimentName);
        existingValues[index] = currentExperimentValue;

        setCookie('ExperimentName', existingNames.join(','), 1);
        setCookie('ExperimentValue', existingValues.join(','), 1);
    }
}
// Do not touch below hidden field code for any Experiment over (Set Hidden Filed Value)
// Use this and change value according to the experiment
hiddenValue('#3003 | Expel | Pricing | Qualifying Questions', 'variant_#3003');

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