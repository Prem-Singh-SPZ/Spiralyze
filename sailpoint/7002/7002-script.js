(function () {
    function createTest() {
        waitForElm('body').then(() => {
            if (!document.body.classList.contains('spz_7002')) {
                removeSpecificCookieValue('spz_7002', 'spz_7002_true_control');
                document.body.classList.add('spz_7002');
                hiddenValue('spz_7002', 'spz_7002_Variant');

                waitForElm('.spz_7002 #mktoForm_1017.mktoForm .mktoFormRow input').then(() => {
                    let spzFormInterval = setInterval(() => {
                        if (document.querySelectorAll('#mktoForm_1017.mktoForm .mktoFormRow.field-1').length == 0) {
                            addCta();
                            formModify();
                            hiddenValue('spz_7002', 'spz_7002_Variant');
                        }
                    }, 500);
                    setTimeout(function () {
                        clearInterval(spzFormInterval);
                    }, 15000);
                });

            } else {
                if (document.body.classList.contains('spz_7002')) {
                    removeSpecificCookieValue('spz_7002', 'spz_7002_true_control');
                    hiddenValue('spz_7002', 'spz_7002_Variant');
                }
            }
        });
    }

    function addCta() {
        if (document.querySelectorAll('.spz_7002 #page-container nav.navigation .desktop div.relative a.spz-contact-us').length == 0) {
            document.querySelector('.spz_7002 #page-container nav.navigation .desktop div.relative a[href="/demo"]').insertAdjacentHTML('afterend', `<a class="btn btn--outline spz-contact-us spz-btn-desk" href="javascript:;">Contact us</a>`);
            document.querySelector('.spz_7002 #page-container nav.navigation .mobile a[href="/demo"]').insertAdjacentHTML('afterend', `<a class="btn btn--outline p-2 text-sm spz-contact-us spz-btn-mob" href="javascript:;">Contact us</a>`);
        }
    }

    function formModify() {
        if (document.querySelectorAll('.spz-form-container').length == 0) {
            document.querySelector('.spz_7002 #page-container .flex.min-h-screen').insertAdjacentHTML('beforeend', `<div class="spz-form-container"><div class="spz-form-inner"><div class="spz-form-content"><div class="spz-form-title">Contact Us</div><a href="javascript:;" class="spz-close-modal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M18 18L6 6" stroke="#415364" stroke-width="2" stroke-linecap="round"/>
            </svg></a></div></div></div>`);

            document.querySelector('.spz_7002 #page-container .flex.min-h-screen .spz-form-content').insertAdjacentElement('beforeend', document.querySelector('.spz_7002 #contact-us .mkto-wrap.w-full').parentElement);
            document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .mktoButtonRow').insertAdjacentElement('beforeend', document.querySelector('.spz_7002 .disclaimer'));
        }
        else if (document.querySelectorAll('.spz-form-container').length == 1 && document.querySelectorAll('.spz-form-container .mkto-wrap.w-full').length == 0) {
            document.querySelector('.spz_7002 #page-container .flex.min-h-screen .spz-form-content').insertAdjacentElement('beforeend', document.querySelector('.spz_7002 #contact-us .mkto-wrap.w-full').parentElement);
            document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .mktoButtonRow').insertAdjacentElement('beforeend', document.querySelector('.spz_7002 .disclaimer'));
        }


        // Add class in mktoField using the name attribute
        var form_fields = document.querySelectorAll('.spz_7002 #mktoForm_1017.mktoForm .mktoFormRow');
        for (var i = 0; i < form_fields.length; i++) {
            if (form_fields[i].querySelector('.mktoField[name]:not([type="hidden"])')) {
                var dynamicClass = form_fields[i].querySelector('.mktoField[name]:not([type="hidden"])').getAttribute('name');
                form_fields[i].classList.add('row_' + dynamicClass);
            }
            else {
                form_fields[i].classList.add('hidden');
            }
        }

        // Change Label Text
        ['#LblCountry:Country', '#LblState:State', '#LblreasonforInquiry:Reason for inquiry'].forEach(item => {
            const [id, text] = item.split(':');
            waitForElm(`.spz_7002 #mktoForm_1017.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
                label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
            });
        });

        waitForElm('.spz_7002 #mktoForm_1017.mktoForm .mktoFormRow.field-32 .mktoCheckboxList label').then(label => {
            label.textContent = "Uncheck to stop receiving SailPoint email communications.";
        });

        // Change Field Position
        const email_field = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .row_Email');
        const last_name_field = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .row_LastName');
        const inquiry_field = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .row_reasonforInquiry');
        const country_field = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .row_Country');
        const company_field = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .row_Company');
        const title_field = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .row_Title');
        const disclaimer_field = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .mktoCaptchaDisclaimer');
        const button = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .mktoButtonRow');

        last_name_field.insertAdjacentElement('afterend', email_field);
        country_field.insertAdjacentElement('beforebegin', inquiry_field);
        company_field.after(title_field);
        button.after(disclaimer_field);

        waitForElm(`.spz_7002 #mktoForm_1017.mktoForm .mktoFieldWrap select#Country`).then((elm) => {
            setTimeout(() => {
                document.querySelectorAll(`.spz_7002 #mktoForm_1017.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
                    if (el && el.value && (el.value != '')) {
                        el.closest('.mktoFieldWrap').classList.add('filled');
                    }
                });
            }, 1000);
        });

        // On input focus add class on closest parent field class
        function focusFields() {
            // Attach events using event delegation
            const form = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm');

            form.addEventListener('focus', function (event) {
                const el = event.target;
                if (el.classList.contains('mktoField')) {
                    el.closest('.mktoFieldWrap').classList.add('active', 'typing');
                    checkAllFields();
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
                const stateField = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .mktoFieldWrap .mktoField#State');
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

            const container = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm');
            if (container) {
                observer.observe(container, { childList: true, subtree: true });
            }
        }
        focusFields();
        function checkAllFields() {
            const fields = document.querySelectorAll('.spz_7002 #mktoForm_1017.mktoForm .mktoField');
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
        function checkError(elem) {
            let timeBuffer = setInterval(() => {
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
                clearInterval(timeBuffer);
            }, 1000);
        }

        document.querySelector('select#Country').addEventListener('change', () => {
            const stateRow = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .mktoFormRow.field-10');
            const optOutRow = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .mktoFormRow.field-32');
            const countryRow = document.querySelector('.spz_7002 #mktoForm_1017.mktoForm .mktoFormRow.field-9');

            document.querySelector('select#State') ? (document.querySelector('label#LblState').textContent = "State", stateRow.classList.remove('hidden'), countryRow.classList.remove('spz-full-width')) : (stateRow.classList.add('hidden'), countryRow.classList.add('spz-full-width'));
            document.querySelector('label#LblmktoCheckbox_26287_0') ? (optOutRow.querySelector('.mktoCheckboxList label').textContent = "Uncheck to stop receiving SailPoint email communications.", optOutRow.classList.remove('hidden')) : optOutRow.classList.add('hidden');
        });

        MktoForms2.whenReady(function (form) {
            form.onSuccess(function (values, followUpUrl) {
                document.body.classList.add('form-submit');
            });

            if (document.body.classList.contains('spz-form-loaded')) {
                document.body.classList.remove('spz-form-loaded');
            }
        });
    }

    //click event listener
    document.addEventListener('click', function (e) {
        if (e.target.closest('.spz-contact-us')) {
            document.body.classList.add('spz-show-modal');
            document.querySelector('html').classList.add('spz-no-scroll');
        }
        if (e.target.closest('.spz-close-modal')) {
            document.querySelector('.spz-form-container').classList.add('closing-modal');
            setTimeout(() => {
                document.body.classList.remove('spz-show-modal');
                document.querySelector('.spz-form-container').classList.remove('closing-modal');
                document.querySelector('html').classList.remove('spz-no-scroll');
            }, 500);
        }
    });

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.spz_7002')) {
                document.body.classList.remove("spz_7002");
            }
        }, 2000);
    }

    function removeSpecificCookieValue(targetName, targetValue) {
        ['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
            var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
            setCookie(key, values || '', 1);
        });
    }

    // Do not touch below hidden field code for any Experiment Start
    function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
        var ExistingHiddenFieldName = getCookie('HiddenFieldNameContact');
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContact');

        if (!ExistingHiddenFieldName) {
            setCookie('HiddenFieldNameContact', currentHiddenFieldName, 1);
            setCookie('HiddenFieldValueContact', currentHiddenFieldValue, 1);
        } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
            setCookie('HiddenFieldNameContact', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
            setCookie('HiddenFieldValueContact', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
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
            var intellimize1 = document.querySelector('form.mktoForm#mktoForm_1017 input[name="intellimize1"]');
            if (intellimize1) {
                clearInterval(spz_cro_Interval);
                var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContact');
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
        "https://www.sailpoint.com/",
        "https://www.sailpoint.com/products/identity-security-cloud",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/suites",
        "https://www.sailpoint.com/products/identity-security-software/identity-iq",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/cloud-infrastructure-entitlement-management",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/non-employee-risk-management",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/data-access-security",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/password-management",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/access-risk-management",
        "https://www.sailpoint.com/demo/interactive",
        "https://www.sailpoint.com/products/connectivity/application-onboarding",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas",
        "https://www.sailpoint.com/solutions/mitigate-cyber-risk",
        "https://www.sailpoint.com/solutions/zero-trust",
        "https://www.sailpoint.com/solutions/improve-it-efficiency",
        "https://www.sailpoint.com/solutions/onboarding-offboarding",
        "https://www.sailpoint.com/solutions/maintain-compliance",
        "https://www.sailpoint.com/solutions/industries/higher-education",
        "https://www.sailpoint.com/solutions/industries/financial-services",
        "https://www.sailpoint.com/solutions/industries/government",
        "https://www.sailpoint.com/solutions/industries/healthcare",
        "https://www.sailpoint.com/solutions/industries/manufacturing",
        "https://www.sailpoint.com/why-us",
        "https://www.sailpoint.com/why-us/diversity-inclusion-belonging",
        "https://www.sailpoint.com/why-us/leadership"
    ];


    window.addEventListener("locationchange", function () {
        url = location.href;
        urlCheck(url);
        if (document.querySelector('.spz_7002')) {
            document.body.classList.remove("spz_7002");
        }
    });
    var url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        if (urls.includes(url)) {
            createTest();
        } else {
            removeTest();
        }
    }

    // function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    //     currentUrl = currentUrl.includes("#")
    //         ? currentUrl.slice(0, currentUrl.indexOf("#"))
    //         : currentUrl;
    //     specifiedUrl = specifiedUrl.includes("#")
    //         ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
    //         : specifiedUrl;
    //     if (!includeQueryParams)
    //         currentUrl = currentUrl.includes("?")
    //             ? currentUrl.slice(0, currentUrl.indexOf("?"))
    //             : currentUrl;
    //     if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
    //         return true;
    //     return false;
    // }

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