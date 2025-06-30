(function () {
    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                document.body.classList.add('SPZ_7006_V1');
                addCta();
                waitForElm('.SPZ_7006_V1 .mktoForm .mktoFormRow input').then(() => {
                    removeSpecificCookieValue('SPZ_7006_V1', 'SPZ_7006_truecontrol');
                    removeSpecificCookieValue('SPZ_7006_V1', 'SPZ_7006_variant2');
                    hiddenValue('SPZ_7006_V1', 'SPZ_7006_variant1');
                    formModify();
                });
            }
        });
    }

    function addCta() {
        let checkCtaInterval = setInterval(function () {
            if (document.querySelectorAll('.SPZ_7006_V1 #page-container nav.navigation .desktop div.relative a.spz-demo-interactive').length == 0 && document.querySelector('.SPZ_7006_V1 #page-container nav.navigation .desktop div.relative a[href="/demo"]')) {
                document.querySelector('.SPZ_7006_V1 #page-container nav.navigation .desktop div.relative a[href="/demo"]').insertAdjacentHTML('afterend', `<a class="btn btn--outline spz-demo-interactive spz-btn-desk" href="javascript:;">Take a product tour</a>`);


                removeSpecificCookieValue('SPZ_7006_V1', 'SPZ_7006_truecontrol');
                removeSpecificCookieValue('SPZ_7006_V1', 'SPZ_7006_variant2');
                hiddenValue('SPZ_7006_V1', 'SPZ_7006_variant1');

                // Add click event listener to the new CTA
                document.querySelector('.SPZ_7006_V1 #page-container nav.navigation .desktop div.relative a.spz-demo-interactive').addEventListener('click', function (event) {
                    event.preventDefault();
                    if (document.querySelector('a[href="/demo/interactive"]')) {
                        document.querySelector('a[href="/demo/interactive"]').click();
                    }
                    else {
                        // If the link is not present, redirect to the demo page
                        window.location.href = '/demo/interactive';
                    }
                });
            }
        }, 100);

        // Clear the interval after 10 seconds to avoid infinite loop
        setTimeout(() => {
            clearInterval(checkCtaInterval);
        }, 1000);
    }

    function formModify() {
        //click event listener
        waitForElm('.SPZ_7006_V1 .mktoForm .mktoButton').then(() => {
            document.querySelector('.mktoForm .mktoButton').addEventListener('click', (event) => {
                //inject current time and date in EST timezone into .intellimize2 hidden field
                var d = new Date();
                var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
                var int2 = event.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');
                if (int2)
                    int2.value = n;

            });
        });
    }

    function removeTest() {
        if (document.querySelector('.SPZ_7006_V1')) {
            document.body.classList.remove("SPZ_7006_V1");
        }
        if (document.querySelector('.spz-demo-interactive')) {
            document.querySelectorAll('.spz-demo-interactive').forEach(function (el) {
                el.remove();
            });
        }
    }

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
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/suites",
        "https://www.sailpoint.com/products/identity-security-software/identity-iq",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/cloud-infrastructure-entitlement-management",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/non-employee-risk-management",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/data-access-security",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/password-management",
        "https://www.sailpoint.com/products/identity-security-cloud/atlas/add-ons/access-risk-management",
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
        "https://www.sailpoint.com/why-us/leadership",
        "https://www.sailpoint.com/why-us/welcoming-to-all",
        "https://www.sailpoint.com/demo/interactive"
    ];


    window.addEventListener("locationchange", function () {
        url = location.href;
        urlCheck(url);
        if (document.querySelector('.SPZ_7006_V1')) {
            document.body.classList.remove("SPZ_7006_V1");
        }
    });
    var url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        if (urls.indexOf(window.location.href.split('?')[0]) >= 0 || window.location.origin == 'https://www.sailpoint.com') {
            createTest();
        } else {
            removeTest();
        }
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

    // Do not touch below hidden field code for any Experiment Start
    function removeSpecificCookieValue(targetName, targetValue) {
        ['HiddenFieldNameContact', 'HiddenFieldValueContact'].forEach((key, i) => {
            var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
            setCookie(key, values || '', 1);
        });
    }

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
            var intellimize1 = document.querySelector('#mktoForm_1017.mktoForm input[name="intellimize1"]') || document.querySelector('#mktoForm_1016.mktoForm input[name="intellimize1"]');
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
    // Do not touch below hidden field code for any Experiment End
})();