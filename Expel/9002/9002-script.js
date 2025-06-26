const asana_URL = `https://app.asana.com/0/1209252326686875/1209522683422095`;

const template_position = "afterend"

const template_sectionSelector = "body.spz_9002 #page .site-main #hero-section"

const template_formSelector = "body.spz_9002 #page .site-main #form-section"

const template_sectionContent =
    `<div class="spz-form-section">
              <div class="spz-form-overlay"></div>
              <div class="spz-form-wrapper">
                <button id="form-close-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M14.0909 12L18.5441 7.54687C18.7554 7.3359 18.8743 7.04962 18.8746 6.75099C18.8748 6.45237 18.7564 6.16587 18.5455 5.95453C18.3345 5.74319 18.0482 5.62431 17.7496 5.62404C17.451 5.62378 17.1645 5.74215 16.9531 5.95312L12.5 10.4062L8.04687 5.95312C7.83553 5.74178 7.54888 5.62305 7.25 5.62305C6.95111 5.62305 6.66447 5.74178 6.45312 5.95312C6.24178 6.16447 6.12305 6.45111 6.12305 6.75C6.12305 7.04888 6.24178 7.33553 6.45312 7.54687L10.9062 12L6.45312 16.4531C6.24178 16.6645 6.12305 16.9511 6.12305 17.25C6.12305 17.5489 6.24178 17.8355 6.45312 18.0469C6.66447 18.2582 6.95111 18.377 7.25 18.377C7.54888 18.377 7.83553 18.2582 8.04687 18.0469L12.5 13.5938L16.9531 18.0469C17.1645 18.2582 17.4511 18.377 17.75 18.377C18.0489 18.377 18.3355 18.2582 18.5469 18.0469C18.7582 17.8355 18.877 17.5489 18.877 17.25C18.877 16.9511 18.7582 16.6645 18.5469 16.4531L14.0909 12Z" fill="#CCCCCC"></path>
                  </svg>
                </button>
                <p>Watch Expel MDR demo</p>
                <div class="ratings-wrapper">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1743084626/expel/9002/gartner-logo.svg" alt="Gartner Logo" />
                  <div class="stars-rating">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1745257364/expel/9002/stars.svg" alt="Star" />
                    <span>4.7</span>
                  </div>
                </div>
                <div class="the-form"></div>
              </div>
            </div>`;

let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    let modalOpen = false;
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz_9002')) {
            body.classList.add('spz_9002');
            waitForElm(template_sectionSelector).then(function () {

                document.querySelector(template_sectionSelector).insertAdjacentHTML(template_position, template_sectionContent);

                let formLoaded = setInterval(() => {
                    if (document.querySelector(template_formSelector) && document.querySelectorAll(`${template_formSelector} input`).length > 0) {
                        clearInterval(formLoaded)

                        const form = document.querySelector(template_formSelector);
                        if (form) {
                            document.querySelector('body.spz_9002 #page .site-main .spz-form-section .spz-form-wrapper .the-form').appendChild(form);
                            waitForElm('body.spz_9002 .spz-form-section .the-form form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField').then(() => {
                                formModify();
                            });
                        }
                    }
                });

                function formModify() {
                    // Add class in mktoFormRow using count
                    var form_fields = document.querySelectorAll('body.spz_9002 .spz-form-section .mktoFormRow');
                    for (var i = 0; i < form_fields.length; i++) {
                        var dynamicClass = 'field-' + (i + 1);
                        form_fields[i].classList.add(dynamicClass);
                    }

                    // // Change Button Text
                    // var submitBtn = document.querySelector("button.mktoButton")
                    // submitBtn.textContent = "Instant access"

                    const btnTextUpdate = setInterval(() => {
                        const submitBtn = document.querySelector('.mktoButton');
                        if (submitBtn) {
                            submitBtn.textContent = "Instant access";

                            // Confirm change worked
                            if (submitBtn.textContent === "Instant access") {
                                clearInterval(btnTextUpdate);
                            }
                        }
                    }, 100);

                    // Change Label Text
                    const labels = {
                        "LblEmail": "Business Email",
                        "LblFirstName": "First Name",
                        "LblLastName": "Last Name",
                        "LblPerson_Country__c": "Country",
                        "LblCompany_Size__c": "Company Size",
                        "LblCompany": "Company",
                    };
                    Object.entries(labels).forEach(([id, text]) => {
                        const label = document.querySelector(`label#${id}`);
                        if (label) {
                            label.innerHTML = text;
                        }
                    });

                    // Change Field Positions
                    const disclaimerRow = document.querySelector('body.spz_9002 .mktoCaptchaDisclaimer');
                    const btnRow = document.querySelector('body.spz_9002 .mktoButtonRow');
                    btnRow.after(disclaimerRow);

                    // Change Disclaimer Text
                    const infoHtmlText = document.querySelector('body.spz_9002 .spz-form-section .mktoFormRow.field-8 .mktoHtmlText');
                    waitForElm('body.spz_9002 .spz-form-section .mktoFormRow.field-8 .mktoHtmlText').then(() => {
                        infoHtmlText.innerHTML = `Information submitted on this form may be associated with other information we have collected and used pursuant to the <a href="https://expel.com/notices/" target="_blank">Expel Online Privacy Policy</a>.`
                    });

                    // On input focus add class on closest parent field class
                    function focusFields() {
                        document.querySelectorAll(`body.spz_9002 .spz-form-section .the-form form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
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

                    focusFields();


                    document.querySelector('body.spz_9002 .spz-form-section .the-form form.mktoForm .mktoButtonRow button.mktoButton').addEventListener('click', function (event) {
                        document.querySelectorAll(`body.spz_9002 .spz-form-section .the-form form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (elem) {
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
                    }
                }

                let scrollTop;

                function disableScroll() {
                    scrollTop = window.scrollY;
                    document.body.style.top = `-${scrollTop}px`;
                }

                function enableScroll() {
                    window.scrollTo(0, scrollTop);
                }

                const toggleModal = function () {
                    modalOpen = !modalOpen;
                    document.querySelector('body.spz_9002 #page .site-main .spz-form-section').classList.toggle('open');
                    document.querySelector('body.spz_9002').classList.toggle('modal-open');
                }

                document.querySelectorAll('body.spz_9002 #page .site-main #cta-banner .blue-button, body.spz_9002 #page .site-main #cta-banner .blue-button-dark-bg, body.spz_9002 #page .site-main #hero-section .blue-button').forEach(function (el) {
                    el.addEventListener("click", function (e) {
                        e.preventDefault();
                        el.blur();
                        // disableScroll();
                        toggleModal();
                    });
                });

                document.querySelector('body.spz_9002 #page .site-main .spz-form-section #form-close-btn').addEventListener("click", function (e) {
                    e.preventDefault();
                    toggleModal();
                    // enableScroll();
                });

                MktoForms2.whenReady(function (form) {

                    // form.getFormElem().find('button.mktoButton').html('Instant access');
                    form.onSuccess(function (values, followUpUrl) {
                        toggleModal();
                    });
                });
            });
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

            // Sanitize inputs by trimming whitespace
            const sanitizedExperimentName = currentExperimentName.trim();
            const sanitizedExperimentValue = currentExperimentValue.trim();

            var ExistingExperimentName = getCookie('ExperimentName');
            var ExistingExperimentValue = getCookie('ExperimentValue');

            let existingNamesArray = [];
            let existingValuesArray = [];

            // Parse existing cookies, trimming each item
            if (ExistingExperimentName) {
                existingNamesArray = ExistingExperimentName.split(',').map(item => item.trim());
            }
            if (ExistingExperimentValue) {
                existingValuesArray = ExistingExperimentValue.split(',').map(item => item.trim());
            }

            // Check if the experiment already exists and get its index
            const existingIndex = existingNamesArray.indexOf(sanitizedExperimentName);

            if (existingIndex === -1) { // Experiment does NOT exist, add it
                existingNamesArray.push(sanitizedExperimentName);
                existingValuesArray.push(sanitizedExperimentValue);

            } else { // Experiment DOES exist, update its value
                existingValuesArray[existingIndex] = sanitizedExperimentValue;
            }

            // Update cookies with the new, cleaned arrays
            setCookie('ExperimentName', existingNamesArray.join(','), 1);
            setCookie('ExperimentValue', existingValuesArray.join(','), 1);
        }
        // Do not touch below hidden field code for any Experiment over (Set Hidden Filed Value)

        // Use this and change value according to the experiment
        hiddenValue('#9003 | Expel | Solutions | SPZ Baseline Hero', 'truecontrol_#9003');
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
});
