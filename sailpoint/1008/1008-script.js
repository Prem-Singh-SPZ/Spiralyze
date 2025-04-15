(function () {
    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!body.classList.contains('spz_1008')) {
                    body.classList.add('spz_1008');

                    const heroSelector = `footer`;
                    const position = "beforebegin";
                    const formSelector = `#mktoForm_1018`;
                    const heroContent = {
                        siteLogo: "//res.cloudinary.com/spiralyze/image/upload/v1742375540/sailpoint/1008/logo.svg",
                        siteLogoAlt: "SailPoint",
                        contentSuperHeading: "Discover, manage, and secure all identities",
                        features: [
                            {
                                checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1742375626/sailpoint/1008/check.svg",
                                featureItemContent: "<b>Access management.</b> Monitor user access. Auto-implement roles. Streamline access approval or removal.",
                            },
                            {
                                checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1742375626/sailpoint/1008/check.svg",
                                featureItemContent: "<b>Complete coverage.</b> Manage non-employee or privileged access, machine identities, entitlements across clouds, passwords, risk, etc. Detect threats.",
                            },
                            {
                                checkmarkImage: "//res.cloudinary.com/spiralyze/image/upload/v1742375626/sailpoint/1008/check.svg",
                                featureItemContent: "<b>Compliance.</b> Demonstrate compliance with audit trails. GDPR, HIPAA, PCI, CCPA, FISMA, PCPD, PDPA, and more.",
                            },
                        ],
                        formArrow: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/1008/image_dashboard.webp",
                        formHeading: "Get live demo",
                    };
                    const additionalSection = {
                        socialProofLogos: {
                            socialProofHeading: "Trusted by 50% of the Fortune 500",
                            socialProofImages: [
                                { url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/1008/logo-1.webp", imgAlt: "AES" },
                                { url: "//res.cloudinary.com/spiralyze/image/upload/v1742375541/sailpoint/1008/logo-2.svg", imgAlt: "GM" },
                                { url: "//res.cloudinary.com/spiralyze/image/upload/v1742375541/sailpoint/1008/logo-3.svg", imgAlt: "Hershey" },
                                { url: "//res.cloudinary.com/spiralyze/image/upload/v1742375598/sailpoint/1008/logo-4_1.svg", imgAlt: "Paccar" },
                                { url: "//res.cloudinary.com/spiralyze/image/upload/v1742375541/sailpoint/1008/logo-5.svg", imgAlt: "The Home Depot" },
                                { url: "//res.cloudinary.com/spiralyze/image/upload/v1742375541/sailpoint/1008/logo-6.svg", imgAlt: "Legal & General" },
                                { url: "//res.cloudinary.com/spiralyze/image/upload/v1742375541/sailpoint/1008/logo-7.svg", imgAlt: "The Salvation Army" },
                                { url: "//res.cloudinary.com/spiralyze/image/upload/v1742375541/sailpoint/1008/logo-8.svg", imgAlt: "Vodafone" },
                            ]
                        },
                    }

                    function addBaseline(formData, whereToPut, formSelector, heroSelector, additionalSection) {
                        const formTemplate = `<section class="spz-hero">
                <div class="spz-wrapper">
                  <div class="spz-form-wrap">
                    <div class="form-wrapper">
                        <div class="logo-wrap">
                            ${formData.siteLogo.length !== 0 ? `<a class="site-logo" data-sentry-element="NextLink" data-sentry-source-file="MainLargeNavigation.tsx" href="/">
                                <img src="${formData.siteLogo}" alt="${formData.siteLogoAlt}" />
                            </a>` : ""}               
                        </div>                                          
                        <div class="spz-form-section">
                            ${formData.formHeading.replace(/\s/g, "").length !== 0 ? `<div class="form-heading">${formData.formHeading}</div>` : ""}
                            <div class="the-form"><div class="contact_us_submit_spz"><h3 class="text-center">Thank you!</h3><h4 class="text-center">A representative will reach out to you shortly.</h4></div></div>
                        </div>
                        ${typeof additionalSection.socialProofLogos !== 'undefined' ? `<div class="social-proof-logos">
                            <div class="social-proof-heading">${additionalSection.socialProofLogos.socialProofHeading}</div>
                                <div class="social-proof-images">
                                    ${additionalSection.socialProofLogos.socialProofImages.length > 0 ? additionalSection.socialProofLogos.socialProofImages.map((item, index) => {
                            return `<img src="${item.url}" alt="${item.imgAlt}">`;
                        }).join("") : ""}
                            </div>
                        </div>` : ``}
                    </div>
                    <div class="content-section">
                        <span class="arrow-icon"><img src="//res.cloudinary.com/spiralyze/image/upload/v1742375541/sailpoint/1008/polygon.svg" alt="White Arrow"></span>
                        <div class="content-wrapper">
                      ${formData.contentSuperHeading.replace(/\s/g, "").length !== 0 ? `<div class="content-superheading">${formData.contentSuperHeading}</div>` : ""}
                      <div class="content-banner-image">
                        ${formData.formArrow.length !== 0 ? `<img src="${formData.formArrow}" class="spz-banner-img" alt="Product UI Image Collage" />` : ""}
                      </div>
                      <div class="spz-features-wrap">
                        ${formData.features.length > 0 ? formData.features.map((item) => {
                            return `<div class="feature-item">
                            <img src="${item.checkmarkImage}" alt="checkmark" />
                            <span>${item.featureItemContent}</span>
                          </div>`;
                        }).join("") : ""}
                      </div>
                    </div>
                        <div class="content-footer"><div class="footer-links"><ul class="links-list"><a class="f-anchor" href="/legal/terms-of-use">Terms of Use</a><a class="f-anchor" href="/legal/cookie-notice">Cookie notice</a><a class="f-anchor" href="/legal/privacy">Privacy</a><a class="f-anchor" href="/legal">Legal</a><a class="f-anchor" target="_blank" href="https://go.sailpoint.com/Preference-Center.html">Email preferences</a><a class="f-anchor" href="/legal/security">Disclosure policy</a></ul></div><p class="copyright-text"> © 2025 SailPoint Technologies, Inc. All Rights Reserved. </p></div>
                    </div>
                  </div>
                </div>
              </section>`;
                        waitForElm(heroSelector).then(() => {
                            document.querySelector(heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
                        });
                        let formLoaded = setInterval(() => {
                            if (document.querySelector(".spz_1008 .spz-form-wrap .the-form") && document.querySelector(formSelector) && document.querySelectorAll(`${formSelector} input`).length > 0) {
                                clearInterval(formLoaded)
                                document.querySelector(".spz_1008 .spz-form-wrap .the-form").appendChild(document.querySelector(formSelector));
                                waitForElm('.spz_1008 .mkto-wrap + .disclaimer').then(() => {
                                    document.querySelector(".spz_1008 .spz-form-wrap .the-form").insertAdjacentElement('afterend', document.querySelector('.spz_1008 .mkto-wrap + .disclaimer'));
                                });
                                formModify();
                            }
                        });
                    }

                    let spzHeroInterval = setInterval(() => {
                        if (document.querySelectorAll('.spz-hero').length == 0 && window.location.pathname === '/demo') {
                            addBaseline(heroContent, position, formSelector, heroSelector, additionalSection);
                            removeSpecificCookieValue('SPZ_1008', 'SPZ_1008_truecontrol');
                            hiddenValue('SPZ_1008', 'SPZ_1008_variant');
                            setHiddenFieldValue();
                        }
                        else {
                            if (window.location.pathname.indexOf("/demo") == -1 && document.querySelectorAll('.spz-hero').length > 0) {
                                document.querySelectorAll('.spz-hero').forEach(item => {
                                    item.remove();
                                });
                            }
                        }
                    }, 1000);
                    setTimeout(function () {
                        clearInterval(spzHeroInterval);
                    }, 10000);


                    function formModify() {
                        var form_fields = document.querySelectorAll('.spz_1008 .spz-form-section form.mktoForm .mktoFormRow');
                        for (var i = 0; i < form_fields.length; i++) {
                            var dynamicClass = 'field-' + (i + 1);
                            form_fields[i].classList.add(dynamicClass);
                        }

                        ['#LblCountry:Country', '#LblState:State', '#LblNumber_of_Employees__c:Number of employees'].forEach(item => {
                            const [id, text] = item.split(':');
                            waitForElm(`.spz_1008 .spz-form-section form.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
                                label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
                            });
                        });

                        // waitForElm('.spz_1008 .spz-form-section form.mktoForm .mktoFormRow.field-31 .mktoCheckboxList label').then(label => {
                        //     label.textContent = "Uncheck to stop receiving SailPoint email communications.";
                        // });

                        //   var company_field = document.querySelector('.spz_1008 form.mktoForm .field-6');
                        //   var lastName_field = document.querySelector('.spz_1008 form.mktoForm .field-4');
                        //   company_field.after(lastName_field);

                        //   var phone_field = document.querySelector('.spz_1008 form.mktoForm .field-5');
                        //   var job_field = document.querySelector('.spz_1008 form.mktoForm .field-7');
                        //   job_field.after(phone_field);

                        var employees_field = document.querySelector('.spz_1008 form.mktoForm .field-8');
                        var state_field = document.querySelector('.spz_1008 form.mktoForm .field-10');
                        state_field.after(employees_field);

                        waitForElm('.spz_1008 form.mktoForm .disclaimer').then((elm) => {
                            changePos();
                        });

                        document.querySelector('.spz_1008 form.mktoForm .field-11 .mktoField').value = 'Get live demo';

                        waitForElm(`.spz_1008 .spz-form-section form.mktoForm .mktoFieldWrap select#Country`).then((elm) => {
                            setTimeout(() => {
                                document.querySelectorAll(`.spz_1008 form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
                                    if (el && el.value && (el.value != '')) {
                                        el.closest('.mktoFieldWrap').classList.add('filled');
                                    }
                                });
                            }, 1000);
                        });

                        function focusFields() {
                            const form = document.querySelector('.spz_1008 form.mktoForm');
                            let emailFocusCount = 0;
                            form.addEventListener('focus', function (event) {
                                const el = event.target;
                                if (el.classList.contains('mktoField')) {
                                    el.closest('.mktoFieldWrap').classList.add('active', 'typing');
                                    checkAllFields();
                                }
                                var email_field = document.querySelector('.spz_1008 .spz-form-section form.mktoForm input[name="Email"]');
                                if (email_field.value.trim() === '') {
                                    email_field.closest('.mktoFieldWrap').classList.remove('emailerror');
                                }
                                if (el.getAttribute('name') === 'Email' && !document.body.classList.contains('form-expand')) {
                                    var checkerrorcnt = 0;
                                    var checkerrror = setInterval(function () {
                                        if (el.closest('.mktoFieldWrap') !== null) {
                                            clearInterval(checkerrror);
                                            if (el.closest('.mktoFieldWrap').querySelector('.mktoError:not(.customError)') !== null && el.closest('.mktoFieldWrap').querySelector('.mktoError:not(.customError)').style.display != 'none') {
                                                el.closest('.mktoFieldWrap').classList.add('emailerror');
                                                checkEmail();
                                            }
                                        }
                                        checkerrorcnt++;
                                    });
                                    // emailFocusCount++;
                                    // if(emailFocusCount > 2){
                                    //   emailFocusCount = 2;
                                    // }
                                    // if(emailFocusCount === 2){
                                    //   el.closest('.mktoFieldWrap').classList.add('emailerror');
                                    //   checkEmail();
                                    // }
                                }
                            }, true);

                            form.addEventListener('keyup', function (event) {
                                if (!document.body.classList.contains('form-expand')) {
                                    const el = event.target;
                                    const fieldName = el.getAttribute('name');

                                    if (fieldName === 'Email') {
                                        const newemailValue = el.value.trim();
                                        const newemailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                                        if (newemailValue == '' || !newemailRegex.test(newemailValue)) {
                                            el.closest('.mktoFieldWrap').classList.add('emailerror');
                                        } else {
                                            el.closest('.mktoFieldWrap').classList.remove('emailerror');
                                        }
                                    }

                                    const firstName = document.querySelector('input[name="FirstName"]').value.trim();
                                    const lastName = document.querySelector('input[name="LastName"]').value.trim();
                                    const emailValue = document.querySelector('input[name="Email"]').value.trim();
                                    const companyValue = document.querySelector('input[name="Phone"]').value.trim();
                                    const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                                    if (['FirstName', 'LastName', 'Email', 'Phone'].includes(fieldName)) {
                                        if (firstName && lastName && companyValue && emailRegex.test(emailValue)) {
                                            document.body.classList.add('form-expand');
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

                                if (!document.body.classList.contains('form-expand')) {
                                    const el = event.target;
                                    const fieldName = el.getAttribute('name');

                                    if (fieldName === 'Email') {
                                        const newemailValue = el.value.trim();
                                        const newemailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                                        if (newemailValue == '' || !newemailRegex.test(newemailValue)) {
                                            el.closest('.mktoFieldWrap').classList.add('emailerror');
                                            checkEmail();
                                        } else {
                                            el.closest('.mktoFieldWrap').classList.remove('emailerror');
                                        }
                                    }

                                    const firstName = document.querySelector('input[name="FirstName"]').value.trim();
                                    const lastName = document.querySelector('input[name="LastName"]').value.trim();
                                    const emailValue = document.querySelector('input[name="Email"]').value.trim();
                                    const companyValue = document.querySelector('input[name="Phone"]').value.trim();
                                    const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                                    if (['FirstName', 'LastName', 'Email', 'Phone'].includes(fieldName)) {
                                        if (firstName && lastName && companyValue && emailRegex.test(emailValue)) {
                                            document.body.classList.add('form-expand');
                                        }
                                    }
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

                            function reapplyStateFieldListeners() {
                                const stateField = document.querySelector('.spz_1008 form.mktoForm .mktoFieldWrap .mktoField#State');
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

                            const observer = new MutationObserver(() => {
                                reapplyStateFieldListeners();
                            });
                            const container = document.querySelector('.spz_1008 form.mktoForm');
                            if (container) {
                                observer.observe(container, { childList: true, subtree: true });
                            }
                        }

                        focusFields();

                        function checkAllFields() {
                            const fields = document.querySelectorAll('.spz_1008 form.mktoForm .mktoField');
                            const timeBuffer = setInterval(() => {
                                fields.forEach(field => {
                                    const fieldWrap = field.closest('.mktoFieldWrap');
                                    if (fieldWrap) {
                                        const errorElement = fieldWrap.querySelector('.mktoError:not(.customError)');
                                        if (errorElement && errorElement.style.display !== 'none') {
                                            fieldWrap.classList.add('error');
                                        } else {
                                            fieldWrap.classList.remove('error');
                                        }

                                        if (field.value && field.value.trim() !== '') {
                                            fieldWrap.classList.add('filled');
                                        } else {
                                            fieldWrap.classList.remove('filled');
                                        }
                                    }
                                });
                            }, 300);

                            setTimeout(() => {
                                clearInterval(timeBuffer);
                            }, 1000);
                        }

                        document.querySelector('select#Country').addEventListener('change', () => {
                            const stateRow = document.querySelector('.spz_1008 .spz-form-section form.mktoForm .mktoFormRow.field-10');
                            const optOutRow = document.querySelector('.spz_1008 .spz-form-section form.mktoForm .mktoFormRow.field-31');
                            const employeeNumberRow = document.querySelector('.spz_1008 .spz-form-section form.mktoForm .mktoFormRow.field-8');

                            changePos();

                            const stateExists = document.querySelector('select#State');
                            stateExists ? (document.querySelector('label#LblState').textContent = "State", stateRow.classList.remove('hidden'), employeeNumberRow.classList.remove('spz-half')) : (stateRow.classList.add('hidden'), employeeNumberRow.classList.add('spz-half'));

                            // document.querySelector('label#LblGlobal_Opt_out__c')
                            // ? (optOutRow.querySelector('.mktoCheckboxList label').textContent = "Uncheck to stop receiving SailPoint email communications.", optOutRow.classList.remove('hidden'))
                            // : optOutRow.classList.add('hidden');

                            if (stateExists) {
                                document.querySelector('select#State').addEventListener('change', () => {
                                    changePos();
                                });
                            }
                        });

                        document.querySelector('select#State').addEventListener('change', () => {
                            changePos();
                        });

                        MktoForms2.whenReady(function (form) {
                            form.onSuccess(function (values, followUpUrl) {
                                document.body.classList.add('form-submit');
                            });
                        });

                        waitForElm('.spz_1008 .mkto-wrap.w-full #confirm #contact_us_submit').then(() => {
                            document.body.classList.add('form-submit');
                        });

                    }
                } else {
                    if (body.classList.contains('spz_1008')) {
                        removeSpecificCookieValue('SPZ_1008', 'SPZ_1008_truecontrol');
                        hiddenValue('SPZ_1008', 'SPZ_1008_variant');
                        let callMultipleTimes = setInterval(() => {
                            setHiddenFieldValue();
                        }, 500);

                        setTimeout(() => {
                            clearInterval(callMultipleTimes);
                        }, 10000);
                    }
                }
            }
        });
    }

    function changePos() {
        const disclaimer_field = document.querySelector('.spz_1008 form.mktoForm .mktoCaptchaDisclaimer');
        const button = document.querySelector('.spz_1008 form.mktoForm .mktoButtonRow');

        let checkPos = setInterval(() => {
            if (disclaimer_field && button) {
                button.after(disclaimer_field);
            }
        }, 50);

        setTimeout(() => {
            clearInterval(checkPos);
        }, 500);
    }

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.spz_1008')) {
                document.body.classList.remove("spz_1008");
            }
            if (document.querySelector('.form-submit')) {
                document.body.classList.remove("form-submit");
            }
        }, 1000);
    }

    function removeSpecificCookieValue(targetName, targetValue) {
        ['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
            var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
            setCookie(key, values || '', 1);
        });
    }

    // Do not touch below hidden field code for any Experiment Start
    function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
        var ExistingHiddenFieldName = getCookie('HiddenFieldNameDemo');
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValueDemo');

        if (!ExistingHiddenFieldName) {
            setCookie('HiddenFieldNameDemo', currentHiddenFieldName, 1);
            setCookie('HiddenFieldValueDemo', currentHiddenFieldValue, 1);
        } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
            setCookie('HiddenFieldNameDemo', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
            setCookie('HiddenFieldValueDemo', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
        }

        setHiddenFieldValue();
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
            var intellimize1 = document.querySelector('form.mktoForm#mktoForm_1018 input[name="intellimize1"]');
            if (intellimize1) {
                clearInterval(spz_cro_Interval);
                var ExistingHiddenFieldValue = getCookie('HiddenFieldValueDemo');
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

        setTimeout(function () {
            clearInterval(spz_cro_Interval);
        }, 15000);
    }

    //click event listener
    document.addEventListener('click', function (e) {
        if (e.target.closest('.mktoForm .mktoButton')) {
            const fields = document.querySelectorAll('.spz_1008 form.mktoForm .mktoField');
            const timeBuffer = setInterval(() => {
                fields.forEach(field => {
                    const fieldWrap = field.closest('.mktoFieldWrap');
                    if (fieldWrap) {
                        // Check for error
                        const errorElement = fieldWrap.querySelector('.mktoError:not(.customError)');
                        if (errorElement && errorElement.style.display !== 'none') {
                            fieldWrap.classList.add('error');
                        } else {
                            fieldWrap.classList.remove('error');
                        }

                        // Check if the field is filled
                        if (field.value && field.value.trim() !== '' && field.type !== 'checkbox') {
                            fieldWrap.classList.add('filled');
                        } else {
                            fieldWrap.classList.remove('filled');
                        }
                    }
                });
            }, 300);


            setTimeout(() => {
                clearInterval(timeBuffer);
            }, 1000);

            if (!document.body.classList.contains('form-expand')) {
                const el = document.querySelector('input[name="Email"]');
                const fieldName = el.getAttribute('name');
                if (fieldName === 'Email') {
                    const newemailValue = el.value.trim();
                    const newemailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                    if (newemailValue == '' || !newemailRegex.test(newemailValue)) {
                        el.closest('.mktoFieldWrap').classList.add('emailerror');
                        checkEmail();
                    } else {
                        el.closest('.mktoFieldWrap').classList.remove('emailerror');
                    }
                }

                const firstName = document.querySelector('input[name="FirstName"]').value.trim();
                const lastName = document.querySelector('input[name="LastName"]').value.trim();
                const emailValue = document.querySelector('input[name="Email"]').value.trim();
                const companyValue = document.querySelector('input[name="Phone"]').value.trim();
                const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
                if (['FirstName', 'LastName', 'Email', 'Phone'].includes(fieldName)) {
                    if (firstName && lastName && companyValue && emailRegex.test(emailValue)) {
                        document.body.classList.add('form-expand');
                    }
                }
            }

            waitForElm('.spz_1008 .mktoForm .mktoError').then(function (elm) {
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
                    if (document.querySelector('.spz_1008 .mktoForm .mktoError #ValidMsgEmail') !== null) {
                      document.querySelector('.spz_1008 .mktoForm .mktoError #ValidMsgEmail').parentNode.parentNode.classList.add('error');
                    }
                    counterA++;
                    if (counterA >= 10) {
                      clearInterval(intervalIdA);
                    }
                  }, 500);
                }
              });

            //inject current time and date in EST timezone into .intellimize2 hidden field
            var d = new Date();
            var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
            var int2 = e.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');
            if (int2)
                int2.value = n;
        }
    });

    function checkEmail() {
        const emailField = document.querySelector('.spz_1008 .spz-form-section form.mktoForm input[name="Email"]');
        const emailRegex = /^[^\s@]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
        if (emailField) {
            if (emailField.value.trim() === '' || !emailRegex.test(emailField.value.trim())) {
                if (!emailField.parentElement.querySelector('.customError')) {
                    if (emailField.closest('.mktoFieldWrap').querySelectorAll('.customError').length == 0) {
                        emailField.insertAdjacentHTML('afterend', '<div class="mktoError_1 customError"><div class="mktoErrorMsg">Valid email required.</div></div>');
                    }
                }
            }
        }
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
    var url = location.href;
    urlCheck(url);
    window.addEventListener("locationchange", function () {
        url = location.href;
        urlCheck(url);
    });

    function urlCheck(url) {
        let testURL = "";
        if (window.location.pathname === '/demo') {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            createTest();
        } else {
            removeTest();
        }
    }

    function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
        currentUrl = currentUrl.includes("#")
            ? currentUrl.slice(0, currentUrl.indexOf("#"))
            : currentUrl;
        specifiedUrl = specifiedUrl.includes("#")
            ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
            : specifiedUrl;
        if (!includeQueryParams)
            currentUrl = currentUrl.includes("?")
                ? currentUrl.slice(0, currentUrl.indexOf("?"))
                : currentUrl;
        if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
            return true;
        return false;
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