
let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz_2003')) {
            body.classList.add('spz_2003');
            waitForElm('.spz_2003 #hero-section').then(function () {
                document.querySelector('.spz_2003 #hero-section .row.hero .col.content').insertAdjacentHTML('afterend', `<div class="col spz-content">
          <a href="https://expel.com/" class="site-logo-link" rel="home">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1717661498/expel/2003/expel_logosvg.svg" class="site-logo-img" alt="Expel">
          </a>
          <h6 class="section-label">Managed Detection and Response Services</h6>
          <h2 class="section-heading">Streamline detection and remediation</h2>
          <p class="info-text"><strong>With Expel you get:</strong></p>
          <ul class="section-highlight-point">
            <li class="list-item"><span class="highlight-text">24x7 SOC services</span> with threat detection, alert triage, remediation recommendations, automated responses & a 23-minute MTTR.</li>
            <li class="list-item"><span class="highlight-text">Extensive protection</span> across cloud workloads, control plans, identity management, SaaS, endpoints, and networks.</li>
            <li class="list-item"><span class="highlight-text">120+ integrations</span> including AWS, CrowdStrike, Google, Microsoft, Okta, Palo Alto, SentinelOne, Splunk, Salesforce, Wiz, and more.</li>
          </ul>
          <p class="info-text">See Expel in action!</p>
        </div>`);
                document.querySelector('.spz_2003 #hero-section .row.hero').insertAdjacentHTML('afterend', `<div class="hero-client-logos">
          <div class="container">
            <div class="img-wrapper">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1717661498/expel/2003/frame_1171275521.svg" alt="Visa" class="client-logo" />
            </div>
            <div class="img-wrapper">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1717661499/expel/2003/frame_1171275522.svg" alt="Uber" class="client-logo" />
            </div>
            <div class="img-wrapper">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1717661498/expel/2003/frame_1171275523.svg" alt="Markel" class="client-logo" />
            </div>
            <div class="img-wrapper">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1717661498/expel/2003/frame_1171275524.svg" alt="Carter's" class="client-logo" />
            </div>
            <div class="img-wrapper">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1717661499/expel/2003/frame_1171275525.svg" alt="Doordash" class="client-logo" />
            </div>
          </div>  
        </div>`);
                document.querySelector('.spz_2003 #hero-section .hero .ex-form .form-title').textContent = "Watch Demo";

                //Form internal code
                waitForElm('.spz_2003 #hero-section .ex-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
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
    // Add class in mktoFormRow using count
    var form_fields = document.querySelectorAll('.spz_2003 #hero-section .hero .ex-form form.mktoForm .mktoFormCol');
    for (var i = 0; i < form_fields.length; i++) {
        var dynamicClass = 'field-' + (i + 1);
        form_fields[i].classList.add(dynamicClass);
    }
    // Updating Form Labels
    document.querySelector('#LblCompany_Size__c').textContent = "Company Size";
    document.querySelector('#Company_Size__c').options[0].textContent = 'Select';
    document.querySelector('#LblPerson_Country__c').textContent = "Country";
    // document.querySelector('#LblhowDidYouHearAboutUs').textContent = "What would you like to see?";
    document.querySelector('.spz_2003 .mktoForm .field-8 .mktoHtmlText').innerHTML = `Information submitted on this form may be associated with other information we have collected and used pursuant to the <a href="https://expel.com/notices/" target="_blank">Expel Online Privacy Policy</a>.`;
    // form CTA Update
    let form_CTA = setInterval(() => {
        let textChng = document.querySelector('.spz_2003 #hero-section .hero .ex-form form.mktoForm .mktoButtonRow .mktoButton');
        if (textChng && !textChng.classList.contains('updated')) {
            textChng.innerHTML = '<svg width="19" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.745 8.188L4.958 2.362a.738.738 0 00-.383-.112.701.701 0 00-.696.703h-.004v12.094h.004c0 .387.312.703.696.703.144 0 .263-.05.393-.12l9.777-5.818a1.06 1.06 0 000-1.624z" fill="#fff"/></svg> Instant access ';
            textChng.classList.add('updated');
            clearInterval(form_CTA);
        }
    }, 100);
    // Change Field Position
    var phone_field = document.querySelector('.spz_2003 .mktoForm .field-2');
    var lname_field = document.querySelector('.spz_2003 .mktoForm .field-4');
    lname_field.after(phone_field);

    var disclaimer_field = document.querySelector('.spz_2003 .mktoForm .mktoCaptchaDisclaimer');
    var form_button = document.querySelector('.spz_2003 .mktoForm .mktoButtonRow');
    form_button.after(disclaimer_field);

    // + Additional comments
    // document.querySelector('.spz_2003 .mktoForm .field-9 .mktoFieldWrap').insertAdjacentHTML('beforebegin', `<a href="javascript:void(0);" class="comment-toggler">+ Additional comments</a>`);
    // var comment_toggler = document.querySelector(".spz_2003 .mktoForm .field-9 .comment-toggler");
    // comment_toggler.addEventListener("click", (event) => {
    //   comment_toggler.classList.add("show-field");
    //   document.querySelector('.spz_2003 .mktoForm .field-9 textarea.mktoField').focus();
    // });

    // form state
    var selector = '.spz_2003 #hero-section form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField';
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
                if (event.type == "change") {
                    if (event.target.value == "") {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
                    } else {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                        //event.target.parentNode.querySelector('.mktoError').style.display = 'none';
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
                // if(event.type == "focusout" && event.target.name == 'Email' && !event.target.classList.contains('mktoInvalid') && event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.contains('filled') && !event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.contains('error')) {
                //   document.body.classList.add('form-expand');
                // }
                if (event.target.name == 'Email') {
                    let counterA = 0;
                    const intervalIdA = setInterval(() => {
                        if (document.querySelector('.spz_2003 #hero-section form.mktoForm .mktoFormCol.field-3').style.display !== "none") {
                            document.body.classList.add('form-expand');
                        }
                        counterA++;
                        if (counterA >= 20) {
                            clearInterval(intervalIdA);
                        }
                    }, 500);
                }
                if (event.target.name == 'Person_Country__c') {
                    waitForElm('.spz_2003 #hero-section form.mktoForm .mktoFormCol[data-wrapper-for="mktoCheckbox_27626_0 Privacy_Compliance_Explicit_Opt_In__c"]').then(function (elm) {
                        document.querySelector('.spz_2003 #hero-section form.mktoForm .mktoFormCol.field-8').after(elm);
                    });
                }
            }
        });
    }

    document.addEventListener('focusout', function (event) {
        document.querySelectorAll('body form .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
            elem.classList.remove('active', 'typing');
        })
    }, true);

    document.querySelector('.spz_2003 #hero-section form.mktoForm .mktoButtonRow .mktoButton').addEventListener('click', function () {
        waitForElm('.spz_2003 #hero-section .hero .ex-form form.mktoForm .mktoError').then(function (elm) {
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
                    if (document.querySelector('.spz_2003 #hero-section .hero .ex-form form.mktoForm .mktoError #ValidMsgEmail') !== null) {
                        document.querySelector('.spz_2003 #hero-section .hero .ex-form form.mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
                    }
                    counterA++;
                    if (counterA >= 10) {
                        clearInterval(intervalIdA);
                    }
                }, 500);
            }
        });
    })

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
    hiddenValue('#2003 | Expel | Demo | Shortform SPZ Baseline', 'variant_#2003');
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