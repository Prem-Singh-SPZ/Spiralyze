(function () {
    function createTest() {
        waitForElm('body').then(() => {
            if (!document.body.classList.contains('SPZ_7001')) {

                let checkForm = setInterval(() => {
                    if (!document.body.classList.contains('.spz-mkto-ready')) {
                        removeSpecificCookieValue('SPZ_7001', 'SPZ_7001_true_control');
                        document.body.classList.add('SPZ_7001');
                        hiddenValue('SPZ_7001', 'SPZ_7001_Variant');

                        waitForElm('.SPZ_7001 #mktoForm_1017.mktoForm input').then(() => {
                            formModify();
                        });
                    }
                }, 100);

            } else {
                if (document.body.classList.contains('SPZ_7001')) {
                    removeSpecificCookieValue('SPZ_7001', 'SPZ_7001_true_control');
                    hiddenValue('SPZ_7001', 'SPZ_7001_Variant');
                }
            }
        });
    }

    function formModify() {
        console.log('form modify');
        // Add class in mktoFormRow using count
        var form_fields = document.querySelectorAll('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow');
        for (var i = 0; i < form_fields.length; i++) {
            var dynamicClass = 'field-' + (i + 1);
            form_fields[i].classList.add(dynamicClass);
        }

        // Change Label Text
        ['#LblCountry:Country', '#LblState:State', '#LblreasonforInquiry:Reason for inquiry'].forEach(item => {
            const [id, text] = item.split(':');
            waitForElm(`.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap label.mktoLabel${id}`).then(label => {
                label.innerHTML = (label.querySelector('.mktoAsterix')?.outerHTML || '') + text;
            });
        });

        waitForElm('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-32 .mktoCheckboxList label').then(label => {
            label.textContent = "Uncheck to stop receiving SailPoint email communications.";
        });

        // Change Field Position
        var compnay_field = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .field-7');
        var last_name_field = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .field-4');
        var inquiry_field = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .field-11');
        compnay_field.after(inquiry_field);
        last_name_field.after(compnay_field);

        var disclaimer_field = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .mktoCaptchaDisclaimer');
        var button = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .mktoButtonRow');
        button.after(disclaimer_field);

        waitForElm(`.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap select#Country`).then((elm) => {
            setTimeout(() => {
                document.querySelectorAll(`.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormCol .mktoFieldWrap .mktoField`).forEach(function (el) {
                    if (el && el.value && (el.value != '')) {
                        el.closest('.mktoFieldWrap').classList.add('filled');
                    }
                });
            }, 1000);
        });

        // On input focus add class on closest parent field class
        function focusFields() {
            // Attach events using event delegation
            const form = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm');

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
                const stateField = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFieldWrap .mktoField#State');
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

            const container = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm');
            if (container) {
                observer.observe(container, { childList: true, subtree: true });
            }
        }
        focusFields();
        function checkAllFields() {
            const fields = document.querySelectorAll('.SPZ_7001 #mktoForm_1017.mktoForm .mktoField');
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
            const stateRow = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-10');
            const optOutRow = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-32');
            const countryRow = document.querySelector('.SPZ_7001 #mktoForm_1017.mktoForm .mktoFormRow.field-9');

            document.querySelector('select#State') ? (document.querySelector('label#LblState').textContent = "State", stateRow.classList.remove('hidden'), countryRow.classList.remove('spz-full-width')) : (stateRow.classList.add('hidden'), countryRow.classList.add('spz-full-width'));
            document.querySelector('label#LblmktoCheckbox_26287_0') ? (optOutRow.querySelector('.mktoCheckboxList label').textContent = "Uncheck to stop receiving SailPoint email communications.", optOutRow.classList.remove('hidden')) : optOutRow.classList.add('hidden');
        });

        MktoForms2.whenReady(function (form) {
            form.onSuccess(function (values, followUpUrl) {
                document.body.classList.add('form-submit');
            });

            document.body.classList.add('spz-mkto-ready');
        });
    }

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.SPZ_7001')) {
                document.body.classList.remove("SPZ_7001");
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
        var ExistingHiddenFieldName = getCookie('HiddenFieldName');
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');

        if (!ExistingHiddenFieldName) {
            setCookie('HiddenFieldName', currentHiddenFieldName, 1);
            setCookie('HiddenFieldValue', currentHiddenFieldValue, 1);
        } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
            setCookie('HiddenFieldName', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
            setCookie('HiddenFieldValue', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
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
            var intellimize1 = document.querySelector('form.mktoForm input[name="intellimize1"]');
            if (intellimize1) {
                clearInterval(spz_cro_Interval);
                var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
                intellimize1.value = ExistingHiddenFieldValue;
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
        "https://www.sailpoint.com/services/professional",
        "https://www.sailpoint.com/why-us",
        "https://www.sailpoint.com/why-us/diversity-inclusion-belonging",
        "https://www.sailpoint.com/why-us/leadership"
    ];


    window.addEventListener("locationchange", function () {
        url = location.href;
        urlCheck(url);
        if (document.querySelector('.SPZ_7001')) {
            document.body.classList.remove("SPZ_7001");
        }
    });
    var url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        console.log(url);
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