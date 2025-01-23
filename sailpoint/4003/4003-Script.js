(function () {
    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!document.body.classList.contains('SPZ_4003_V1')) {
                    removeSpecificCookieValue('SPZ_4003_V1', 'SPZ_4003_V1_truecontrol');
                    document.body.classList.add('SPZ_4003_V1');
                    hiddenValue('SPZ_4003_V1', 'SPZ_4003_variant');
                    waitForElm('.SPZ_4003_V1 #mktoForm_1016.mktoForm .mktoFormRow input').then(() => {
                        const template_heroSelector = `section.hero`;
                        const template_position = "beforebegin"
                        const template_formSelector = `form#mktoForm_1016`;

                        let contentSuperHeading = document.querySelector('.SPZ_4003_V1 .hero .hero__eyebrow')?.textContent.trim() || "";
                        let contentHeading = document.querySelector('.SPZ_4003_V1 .hero .hero__heading')?.textContent.trim();
                        const contentInnerHTML = document.querySelector('.SPZ_4003_V1 .hero + .gated__body .column:first-child .column__inner')?.innerHTML.trim() || document.querySelector('.SPZ_4003_V1 .hero ~ .article .content .content__body .block')?.innerHTML.trim() || "";
                        const template_formContent = {
                            customHTMLBefore: `Get the report`,
                            customHTMLAfter: `This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.`,
                        };
                        const template_additionalSection = {
                            socialProofLogos: {
                                socialProofHeading: "Trusted by leading companies",
                                socialProofImages: [
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/4003/container.webp",
                                        imgAlt: "GM",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/v1734511105/sailpoint/4003/container_4.svg",
                                        imgAlt: "Hershey",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/v1734511103/sailpoint/4003/container_3.svg",
                                        imgAlt: "Paccar",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/v1734511102/sailpoint/4003/container_2.svg",
                                        imgAlt: "Philips",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/v1734511111/sailpoint/4003/container_7.svg",
                                        imgAlt: "RWE",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/4003/container_1.webp",
                                        imgAlt: "T Mobile",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/v1734511109/sailpoint/4003/container_6.svg",
                                        imgAlt: "The Home Depot",
                                    },
                                    {
                                        url: "//res.cloudinary.com/spiralyze/image/upload/v1734511107/sailpoint/4003/container_5.svg",
                                        imgAlt: "Toyota",
                                    },
                                ]
                            },
                        }

                        function addBaseline(formData, whereToPut, template_formSelector, template_heroSelector, additionalSection) {
                            const formTemplate = `<section class="spz-hero">
                  <div class="spz-form-wrap">
                    <div class="content-section">
                      ${contentSuperHeading ? `<div class="content-superheading">${contentSuperHeading}</div>` : ""}
                      ${contentHeading ? `<div class="content-heading">${contentHeading}</div>` : ""}
                      ${contentInnerHTML ? `<div class="content-text">${contentInnerHTML}</div>` : ""}
                    </div>
                    <div class="spz-form-section">
                      <div class="form-heading">${formData.customHTMLBefore.replace(/\s/g, "").length !== 0 ? formData.customHTMLBefore : ""}</div>
                      <div class="the-form"></div>
                    </div>
                  </div>
                </section>
                ${typeof additionalSection.socialProofLogos !== 'undefined' ? `<div class="social-proof-logos">
                  <div class="social-proof-heading">${additionalSection.socialProofLogos.socialProofHeading}</div>
                  <div class="social-proof-images">
                    ${additionalSection.socialProofLogos.socialProofImages.length > 0 ? additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
                                return `<img src="${item.url}" alt="${item.imgAlt}">`;
                            }).join("") : ""}
                  </div>
                </div>` : ``}
                `;

                            document.querySelector(template_heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
                            let formLoaded = setInterval(() => {
                                if (document.querySelector(template_formSelector)) {
                                    clearInterval(formLoaded)
                                    document.querySelector(".spz-form-wrap .the-form").appendChild(document.querySelector(template_formSelector));
                                    document.querySelector(".spz-form-wrap .the-form")?.appendChild(document.querySelector('.mkto-wrap + .disclaimer')?.cloneNode(true));
                                    document.querySelector(".spz-form-wrap .the-form .mktoForm .mktoButtonRow").insertAdjacentHTML('beforebegin', `<div class="form-footer">${formData.customHTMLAfter.replace(/\s/g, "").length !== 0 ? formData.customHTMLAfter : ""}</div>`);
                                    formModify();
                                }
                            })

                        }
                        addBaseline(template_formContent, template_position, template_formSelector, template_heroSelector, template_additionalSection);

                        function formModify() {
                            // Add class in mktoFormRow using count
                            var form_fields = document.querySelectorAll('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow');
                            for (var i = 0; i < form_fields.length; i++) {
                                var dynamicClass = 'field-' + (i + 1);
                                form_fields[i].classList.add(dynamicClass);
                            }

                            // Change Label Text
                            ['#LblCountry:Country', '#LblState:State', '#LblTitle:Job title', '#LblPhone:Phone number (optional)'].forEach(item => {
                                const [id, text] = item.split(':');
                                waitForElm(`.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
                                    label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
                                });
                            });

                            waitForElm('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow label#LblGlobal_Opt_out__c ~ .mktoCheckboxList label').then(label => {
                                label.textContent = "Uncheck to stop receiving SailPoint email communications.";
                            });

                            // Locate the phone field
                            const phoneField = document.querySelector(".SPZ_4003_V1 .spz-form-section form.mktoForm input[name*='Phone']");
                            if (phoneField && phoneField.type !== "hidden") {
                                document.querySelector(".SPZ_4003_V1 .spz-form-section form.mktoForm").classList.add("phone-exists");
                                const phoneFieldRow = phoneField.closest(".mktoFormRow");
                                const targetFieldRow = document.querySelector(".SPZ_4003_V1 .spz-form-section form.mktoForm .field-6");
                                if (phoneFieldRow && targetFieldRow) {
                                    targetFieldRow.after(phoneFieldRow);
                                }
                            }

                            function checkEmail() {
                                const emailField = document.querySelector('.SPZ_4003_V1 .spz-form-section form.mktoForm input[name="Email"]');
                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                                if (emailField) {
                                    if (emailField.value.trim() === '' || !emailRegex.test(emailField.value.trim())) {
                                        if (!emailField.parentElement.querySelector('.customError')) {
                                            emailField.insertAdjacentHTML('afterend', '<div class="mktoError customError"><div class="mktoErrorMsg">valid email required.</div></div>');
                                        }
                                    }
                                }
                            }
                            // On input focus add class on closest parent field class
                            function focusFields() {
                                // Attach events using event delegation
                                const form = document.querySelector('.SPZ_4003_V1 form.mktoForm');
                                let emailFocusCount = 0;
                                form.addEventListener('focus', function (event) {
                                    const el = event.target;
                                    if (el.classList.contains('mktoField')) {
                                        el.closest('.mktoFieldWrap').classList.add('active', 'typing');
                                        checkAllFields();
                                    }
                                    if (el.getAttribute('name') === 'Email' && !document.body.classList.contains('form-expand')) {
                                        emailFocusCount++;
                                        if (emailFocusCount > 2) {
                                            emailFocusCount = 2;
                                        }
                                        if (emailFocusCount === 2) {
                                            el.closest('.mktoFieldWrap').classList.add('emailerror');
                                            checkEmail();
                                        }
                                    }
                                }, true);
                                form.addEventListener('keyup', function (event) {
                                    if (!document.body.classList.contains('form-expand')) {
                                        const el = event.target;
                                        const fieldName = el.getAttribute('name');
                                        if (document.querySelector('input[name="Email"]').value.trim() !== '') {
                                            var newEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                                            if (newEmailRegex.test(document.querySelector('input[name="Email"]').value.trim())) {
                                                el.closest('.mktoFieldWrap').classList.remove('emailerror');
                                            } else {
                                                el.closest('.mktoFieldWrap').classList.add('emailerror');
                                            }
                                        }

                                        if (document.querySelector(".SPZ_4003_V1 .spz-form-section form.mktoForm").classList.contains('phone-exists')) {
                                            const firstName = document.querySelector('input[name="FirstName"]').value.trim();
                                            const lastName = document.querySelector('input[name="LastName"]').value.trim();
                                            const emailValue = document.querySelector('input[name="Email"]').value.trim();
                                            const companyValue = document.querySelector('input[name="Company"]').value.trim();
                                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                                            if (['FirstName', 'LastName', 'Email', 'Company'].includes(fieldName)) {
                                                if (firstName && lastName && companyValue && emailRegex.test(emailValue)) {
                                                    document.body.classList.add('form-expand');
                                                }
                                            }
                                        } else {
                                            const firstName = document.querySelector('input[name="FirstName"]').value.trim();
                                            const lastName = document.querySelector('input[name="LastName"]').value.trim();
                                            const emailValue = document.querySelector('input[name="Email"]').value.trim();
                                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                                            if (['FirstName', 'LastName', 'Email'].includes(fieldName)) {
                                                if (firstName && lastName && emailRegex.test(emailValue)) {
                                                    document.body.classList.add('form-expand');
                                                }
                                            }
                                        }
                                    }
                                }, true);

                                form.addEventListener('blur', function (event) {
                                    const el = event.target;
                                    if (el.classList.contains('mktoField')) {
                                        el.closest('.mktoFieldWrap').classList.remove('active', 'typing');
                                        checkAllFields();
                                    }
                                }, true);

                                form.addEventListener('input', function (event) {
                                    const el = event.target;
                                    if (el.classList.contains('mktoField')) {
                                        checkAllFields();
                                    }
                                });

                                form.addEventListener('change', function (event) {
                                    const el = event.target;
                                    if (el.classList.contains('mktoField')) {
                                        checkAllFields();
                                    }
                                });

                                // Function to reapply functionality for dynamic fields
                                function reapplyStateFieldListeners() {
                                    const stateField = document.querySelector('.SPZ_4003_V1 form.mktoForm .mktoFieldWrap .mktoField#State');
                                    if (stateField) {
                                        stateField.addEventListener('focus', function () {
                                            stateField.closest('.mktoFieldWrap').classList.add('active', 'typing');
                                            checkAllFields();
                                        });
                                        stateField.addEventListener('blur', function () {
                                            stateField.closest('.mktoFieldWrap').classList.remove('active', 'typing');
                                            checkAllFields();
                                        });
                                        stateField.addEventListener('input', function () {
                                            checkAllFields();
                                        });
                                        stateField.addEventListener('change', function () {
                                            checkAllFields();
                                        });
                                    }
                                }

                                // Reapply listeners whenever the state field is dynamically updated
                                const observer = new MutationObserver(() => {
                                    reapplyStateFieldListeners();
                                });

                                const container = document.querySelector('.SPZ_4003_V1 form.mktoForm');
                                if (container) {
                                    observer.observe(container, { childList: true, subtree: true });
                                }
                            }
                            focusFields();
                            function checkAllFields() {
                                const fields = document.querySelectorAll('.SPZ_4003_V1 form.mktoForm .mktoField');
                                const timeBuffer = setInterval(() => {
                                    fields.forEach(field => {
                                        const fieldWrap = field.closest('.mktoFieldWrap');
                                        if (fieldWrap) {
                                            // Check for error
                                            const errorElement = fieldWrap.querySelector('.mktoError');
                                            if (errorElement && errorElement.style.display !== 'none') {
                                                fieldWrap.classList.add('error');
                                            } else {
                                                fieldWrap.classList.remove('error');
                                            }

                                            // Check if the field is filled
                                            if (field.value && field.value.trim() !== '') {
                                                fieldWrap.classList.add('filled');
                                            } else {
                                                fieldWrap.classList.remove('filled');
                                            }
                                        }
                                    });
                                }, 100);

                                setTimeout(() => {
                                    clearInterval(timeBuffer);
                                }, 1000);
                            }

                            document.querySelector('select#Country').addEventListener('change', () => {
                                const countryRow = document.querySelector('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-7');
                                const stateRow = document.querySelector('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-8');
                                const stateExists = document.querySelector('select#State');
                                stateExists ? (document.querySelector('label#LblState').textContent = "State", stateRow.classList.remove('hidden'), countryRow.classList.remove('spz-full')) : (stateRow.classList.add('hidden'), countryRow.classList.add('spz-full'));

                                const optOutRow = document.querySelector('.SPZ_4003_V1 .spz-form-section form.mktoForm .mktoFormRow.field-28');
                                document.querySelector('label#LblGlobal_Opt_out__c') ? (optOutRow.querySelector('.mktoCheckboxList label').textContent = "Uncheck to stop receiving SailPoint email communications.") : '';
                            });

                            const form = document.querySelector('form#mktoForm_1016');
                            const button = form.querySelector('button[type="submit"]');
                            const changeButtonText = (text) => {
                                if (button) {
                                    button.textContent = text;
                                }
                            };

                            changeButtonText("Download");

                            form.addEventListener("submit", function (e) {
                                changeButtonText("Please Wait");
                            });

                            form.addEventListener("input", function () {
                                if (form.checkValidity()) {
                                    changeButtonText("Download");
                                } else {
                                    changeButtonText("Download");
                                }
                            });

                            const observer = new MutationObserver(() => {
                                changeButtonText("Download");
                            });
                            observer.observe(button, { childList: true, });

                            MktoForms2.whenReady(function (form) {
                                form.onSuccess(function (values, followUpUrl) {
                                    document.body.classList.add('form-submit');
                                });
                            });
                        }
                    });
                } else {
                    if (document.body.classList.contains('SPZ_4003_V1')) {
                        removeSpecificCookieValue('SPZ_4003_V1', 'SPZ_4003_V1_truecontrol');
                        hiddenValue('SPZ_4003_V1', 'SPZ_4003_variant');
                        let callHF = setInterval(() => {
                            setHiddenFieldValue();
                        }, 100);

                        setTimeout(() => {
                            clearInterval(callHF);
                        }, 10000);
                    }
                }
            }
        });
    }

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.SPZ_4003_V1')) {
                document.body.classList.remove("SPZ_4003_V1");
            }
        }, 2000);
    }

    function removeSpecificCookieValue(targetName, targetValue) {
        ['HiddenFieldName1016', 'HiddenFieldValue1016'].forEach((key, i) => {
            var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
            setCookie(key, values || '', 1);
        });
    }

    // Do not touch below hidden field code for any Experiment Start
    function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
        var ExistingHiddenFieldName = getCookie('HiddenFieldName1016');
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValue1016');

        if (!ExistingHiddenFieldName) {
            setCookie('HiddenFieldName1016', currentHiddenFieldName, 1);
            setCookie('HiddenFieldValue1016', currentHiddenFieldValue, 1);
        } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
            setCookie('HiddenFieldName1016', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
            setCookie('HiddenFieldValue1016', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
        }

        let callHF = setInterval(() => {
            setHiddenFieldValue();
        }, 100);

        setTimeout(() => {
            clearInterval(callHF);
        }, 10000);
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=sailpoint.com;";
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

    function setHiddenFieldValue() {
        var spz_cro_Interval = setInterval(function () {
            var intellimize1 = document.querySelector('form.mktoForm#mktoForm_1016 input[name="intellimize1"]');
            if (intellimize1) {
                clearInterval(spz_cro_Interval);
                var ExistingHiddenFieldValue = getCookie('HiddenFieldValue1016');
                //check if hidden field value is empty then only set the value else set the value with , seperated
                if (intellimize1.value == '') {
                    intellimize1.value = ExistingHiddenFieldValue;
                }
                else {
                    if (!intellimize1.value.includes(ExistingHiddenFieldValue)) {
                        intellimize1.value = intellimize1.value + ',' + ExistingHiddenFieldValue;
                    }
                }
            }
        });

        document.addEventListener('click', function (e) {
            if (e.target.closest('#mktoForm_1016 .mktoButton')) {
                //inject current time and date in EST timezone into .intellimize2 hidden field
                var d = new Date();
                var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
                var int2 = e.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');
                if (int2)
                    int2.value = n;
            }
        });
    }
    // Do not touch below hidden field code for any Experiment over

    history.pushState = (function (f) {
        return function pushState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event("pushstate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event("replacestate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        };
    })(history.replaceState);
    window.addEventListener("popstate", function () {
        window.dispatchEvent(new Event("locationchange"));
    });


    // List of URLs
    const urls = [
        "https://www.sailpoint.com/identity-library/identity-governance-administration",
        "https://www.sailpoint.com/identity-library/dora-compliance",
        "https://www.sailpoint.com/identity-library/iga-gartner",
        "https://www.sailpoint.com/identity-library/identity-first-security"
    ];

    window.addEventListener("locationchange", function () {
        const url = getBaseUrl(location.href);
        urlCheck(url);
        if (document.querySelector('.SPZ_7001')) {
            document.body.classList.remove("SPZ_7001");
        }
    });
    let url = getBaseUrl(location.href);
    urlCheck(url);

    function urlCheck(url) {
        if (urls.includes(url)) {
            createTest();
        } else {
            removeTest();
        }
    }

    function getBaseUrl(url) {
        return url.split('?')[0];
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
})();