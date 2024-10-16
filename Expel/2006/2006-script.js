const testDetails = {
    formSelector: "#mktoForm_2231",

    useCustomFormLabels: true,
    formFields: [
        {
            inputSel: "#Email", // input element selector
            labelSel: "#LblEmail", // label element selector
            labelText: "Business Email*", // label text/value
        },
        {
            inputSel: "#FirstName",
            labelSel: "#LblFirstName",
            labelText: "First Name*",
        },
        {
            inputSel: "#LastName",
            labelSel: "#LblLastName",
            labelText: "Last Name*",
        },
        {
            inputSel: "#Company",
            labelSel: "#LblCompany",
            labelText: "Company Name*",
        },
        {
            inputSel: "#Company_Size__c",
            labelSel: "#LblCompany_Size__c",
            labelText: "Company Size*",
        },
        {
            inputSel: "#Phone",
            labelSel: "#LblPhone",
            labelText: "Phone Number*",
        },
        {
            inputSel: "#Person_Country__c",
            labelSel: "#LblPerson_Country__c",
            labelText: "Country*",
        },
    ],
};


let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz-2006')) {
            body.classList.add('spz-2006');
            waitForElm('.spz-2006 #hero-section').then(function () {
                document.querySelector('.spz-2006 #hero-section .row.hero .col.content').insertAdjacentHTML('afterend', `<div class="col spz-content">
          <a href="https://expel.com/" class="site-logo-link" rel="home">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1717661498/expel/2003/expel_logosvg.svg" class="site-logo-img" alt="Expel">
          </a>
          <h6 class="section-label">Managed Detection and Response Services</h6>
          <h2 class="section-heading">Schedule your Expel MDR demo</h2>
          <ul class="section-highlight-point">
            <li class="list-item"><span class="highlight-text">24x7 monitoring:</span> Threat detection. Phishing, vulnerabilities, unusual behaviors, and more. Real-time alert triage using AI.</li>
            <li class="list-item"><span class="highlight-text">Remediation:</span> Get recommended remediation steps and automated responses. 20-minute MTTR. </li>
            <li class="list-item"><span class="highlight-text">125+ integrations:</span> Including AWS, CrowdStrike, Google, Okta, Salesforce, Microsoft, Palo Alto, SentinelOne, Splunk, and more.</li>
          </ul>
        </div>`);
                document.querySelector('.spz-2006 #hero-section .row.hero').insertAdjacentHTML('afterend', `<div class="hero-client-logos">
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
                document.querySelector('.spz-2006 #hero-section .hero .ex-form .form-title').textContent = "Get a demo";

                //Form internal code
                waitForElm('.spz-2006 #hero-section .ex-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
                    restructureForm();
                    animateLabels(testDetails);

                    document.querySelector('.spz-2006 #hero-section form.mktoForm .mktoButtonRow .mktoButton').addEventListener('click', function () {
                        waitForElm('.spz-2006 #hero-section .hero .ex-form form.mktoForm .spz-email .mktoError').then(function (elm) {
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
                                    if (document.querySelector('.spz-2006 #hero-section .hero .ex-form form.mktoForm .mktoError #ValidMsgEmail') !== null) {
                                        document.querySelector('.spz-2006 #hero-section .hero .ex-form form.mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
                                    }
                                    counterA++;
                                    if (counterA >= 40) {
                                        clearInterval(intervalIdA);
                                    }
                                }, 200);
                            }
                        });
                    })
                });
            });
        }
    }
});

// function will accept json which will contain inputSel, labelSel and labelText
function animateLabels(data) {
    data.formFields.map((item) => {
        const label = document.querySelector(item.labelSel);
        const parentDiv = findParent(item.inputSel);

        // If default labels are used then no need to change the label text
        if (data.useCustomFormLabels && parentDiv) {
            label.innerText = item.labelText;
        }
        // label.classList.add(`label-spz-${item.labelSel.replace("#", "")}`);
        if (label) {
            label.style.width = "";
            document.querySelector(item.inputSel).placeholder = "";
        }

        if (parentDiv) {
            parentDiv.classList.add("spz-input-wrap");
        }
    });
    focusFields();
}

//Helper function to find parent div of input or select element
function findParent(elementSelector) {
    try {
        let element = document.querySelector(elementSelector);
        let wrapper = element.closest("div"); //define parent's tag name

        // Check if parent div contains input or select element and label
        if ((wrapper.innerHTML.includes("<input") || wrapper.innerHTML.includes("<select") || wrapper.innerHTML.includes("<textarea")) && wrapper.innerHTML.includes("<label")) {
            return wrapper;
        } else if (wrapper.parentElement.innerHTML.includes("<input") && wrapper.parentElement.innerHTML.includes("<label")) {
            return wrapper.parentElement;
        } else {
            console.log("Something is wrong");
        }
    } catch (error) {
        console.error("Please check if selector is correct: ", elementSelector);
    }
}

// On input focus add class on closest parent field class
function focusFields() {
    document.querySelectorAll(`${testDetails.formSelector} .form-fields-row .mktoField:not([type="checkbox"]):not([type="hidden"]):not([type="checkbox"])`).forEach(function (el) {
        el.addEventListener('focus', function () {
            el.closest('.spz-input-wrap').classList.add('focused');
            checkError(el);
        });
        el.addEventListener('blur', function () {
            el.closest('.spz-input-wrap').classList.remove('focused');
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
        if (elem.closest('.spz-input-wrap').querySelector('.mktoError') && elem.closest('.spz-input-wrap').querySelector('.mktoInvalid') && elem.closest('.spz-input-wrap').querySelector('.mktoError').style.display != 'none') {
            elem.closest('.spz-input-wrap').classList.add('error');
        } else {
            elem.closest('.spz-input-wrap').classList.remove('error');
        }
        if (elem && elem.value && (elem.value != '')) {
            elem.closest('.spz-input-wrap').classList.add('filled');
            // elem.closest('.spz-input-wrap').classList.remove('field-error');
        } else {
            elem.closest('.spz-input-wrap').classList.remove('filled');
            // elem.closest('.spz-input-wrap').classList.add('field-error');
        }

        if (document.querySelectorAll('.form-fields-row [data-zi-field-enriched="false"]').length % 2 !== 0) {
            let lastField = document.querySelectorAll('.form-fields-row [data-zi-field-enriched="false"]').length - 1;
            document.querySelectorAll('.form-fields-row [data-zi-field-enriched="false"]')[lastField].closest('.mktoFormCol').classList.add('full-width');
        }
        else {
            document.querySelectorAll('.form-fields-row .mktoFormCol.full-width').forEach(function (el) {
                el.classList.remove('full-width');
            });
        }
    }, 100);

    setTimeout(() => {
        clearInterval(timeBuffer);
    }, 1000);
}

// Why? - To make it in 2 columns properly
// Add new 'div.form-fields-row' inside formSelector and move all '.mktoFormCol' in '.mktoFormRow'
function restructureForm() {
    let formSelector = testDetails.formSelector;

    // Insert new 'div.form-fields-row' inside formSelector
    document.querySelector(formSelector).insertAdjacentHTML('afterbegin', '<div class="form-fields-row"></div>');

    document.querySelector('.spz-2006 .mktoForm .mktoHtmlText.mktoHasWidth').innerHTML = `Information submitted on this form may be associated with other information we have collected and used pursuant to the <a href="https://expel.com/notices/" target="_blank">Expel Online Privacy Policy</a>.`;


    // Move all '.mktoFormCol' to '.form-fields-row'
    document.querySelectorAll(`${formSelector} .mktoFormCol:not(.mktoButtonRow)`).forEach(function (col) {
        if (col.querySelector('.mktoField:not(#honeypot)')) {
            // Append each '.mktoFormCol' to '.form-fields-row'
            document.querySelector('.form-fields-row').appendChild(col);

            // Removing inline styles from mktoFormCol
            // col.removeAttribute('style');

            // Remove inline styles from .mktoField
            col.querySelector('.mktoField').removeAttribute('style');

            // Add unique class to each field group, take input name and add it as class
            col.classList.add('spz-' + col.querySelector('.mktoField').name.toLowerCase());

            // Remove all width from .mktoHasWidth in all columns
            if (col.querySelectorAll('.mktoHasWidth').length > 0) {
                col.querySelectorAll('.mktoHasWidth').forEach(function (el) {
                    el.removeAttribute('style');
                });
            }

            // If .mktoLogicalField is present then add class to parent .mktoFormCol
            if (col.querySelector('.mktoLogicalField')) {
                col.classList.add('checkbox-group');
            }

        }
    });

    waitForElm(`.spz-company`).then(function (elm) {
        document.querySelector('body.spz-2006 .form-fields-row').insertAdjacentElement('beforeend', document.querySelector('body.spz-2006 .mktoFormCol .mktoHtmlText.mktoHasWidth').closest('.mktoFormCol'));
        // document.querySelector('body.spz-2006 .mktoFormCol .mktoHtmlText.mktoHasWidth').closest('.mktoFormCol').setAttribute('data-wrapper-for', 'spz-privacy-policy');
        document.querySelector('body.spz-2006 .mktoFormCol.spz-lastname').insertAdjacentElement('afterend', document.querySelector('body.spz-2006 form.mktoForm .mktoFormCol.spz-phone'));
        document.querySelector('body.spz-2006 form.mktoForm .mktoButtonRow').insertAdjacentElement('afterend', document.querySelector('body.spz-2006 form.mktoForm .mktoCaptchaDisclaimer'));

        document.querySelector('body.spz-2006 #Company_Size__c option[value=""]').textContent = 'Company Size';
        document.querySelector('body.spz-2006 form.mktoForm .mktoButton').textContent = 'Submit';
        document.querySelector('body.spz-2006 form.mktoForm #Person_Country__c').setAttribute('autocomplete', 'dont');

        document.querySelector('body.spz-2006 .mktoFormCol .mktoHtmlText.mktoHasWidth').closest('.mktoFormCol').removeAttribute('style');
        document.querySelector('body.spz-2006 form.mktoForm .spz-ispartner').classList.add('spz-hidden');
        document.querySelector('body.spz-2006 form.mktoForm .spz-company').classList.add('spz-hidden');
        document.querySelector('body.spz-2006 .mktoFormCol .mktoHtmlText.mktoHasWidth').closest('.mktoFormCol').classList.add('spz-hidden');

        //update tab index of all the .mktoField
        document.querySelector('body.spz-2006 form.mktoForm #Email').setAttribute('tabindex', 1);
        document.querySelector('body.spz-2006 form.mktoForm #FirstName').setAttribute('tabindex', 2);
        document.querySelector('body.spz-2006 form.mktoForm #LastName').setAttribute('tabindex', 3);
        document.querySelector('body.spz-2006 form.mktoForm #Phone').setAttribute('tabindex', 4);
        document.querySelector('body.spz-2006 form.mktoForm #Company').setAttribute('tabindex', 5);
        document.querySelector('body.spz-2006 form.mktoForm #Company_Size__c').setAttribute('tabindex', 6);
        document.querySelector('body.spz-2006 form.mktoForm #Person_Country__c').setAttribute('tabindex', 7);
        document.querySelector('body.spz-2006 form.mktoForm .mktoHtmlText.mktoHasWidth a').setAttribute('tabindex', 8);
        // document.querySelector('body.spz-2006 form.mktoForm .mktoFormCol .mktoCheckboxList input').setAttribute('tabindex', 9);
    });

    waitForElm(`.spz-firstname[data-zi-field-enriched]`).then(function (elm) {
        // document.querySelector('body.spz-2006 .mktoFormCol .mktoHtmlText.mktoHasWidth').closest('.mktoFormCol').classList.remove('spz-hidden');
        //remove all spz-hidden class from all the fields
        document.querySelectorAll('body.spz-2006 .mktoFormCol.spz-hidden').forEach(function (el) {
            el.classList.remove('spz-hidden');
        });
    });

    waitForElm('#hero-section form.mktoForm .mktoFormCol .mktoField[data-zi-input-enriched="false"]').then(function (elm) {
        document.body.classList.add('form-expand');
    });

    // waitForElm(`${formSelector} .mktoFormCol[data-wrapper-for="Person_Country__c"]`).then(function (elm) {
    //     document.querySelector(`${formSelector} .mktoFormCol[data-wrapper-for="Person_Country__c"]`).style.display = 'none';
    // });

    // Use this and change value according to the experiment
    hiddenValue('#2006 | Expel | Demo | RAD | SPZ Baseline', 'variant_#2006');
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

// Do not touch below hidden field code for any Experiment
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
// Do not touch above hidden field code for any Experiment over