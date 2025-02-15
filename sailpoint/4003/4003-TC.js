(function () {
    var css = `.ca-sp-077 .hero {overflow: hidden;} .mkto-wrap form.mktoForm, .mkto-wrap form.mktoForm .select-dropdown {padding: 0;}`;
    head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));

    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!body.classList.contains('spz_4003_tc')) {
                    removeSpecificCookieValue('SPZ_4003', 'SPZ_4003_variant');
                    body.classList.add('spz_4003_tc');
                    hiddenValue('SPZ_4003', 'SPZ_4003_truecontrol');
                    waitForElm('#ca-sp-077-root-form .form').then((elem) => {
                        elem.classList.add('mkto-wrap', 'bg-gradient');
                    });
                }
                else {
                    removeSpecificCookieValue('SPZ_4003', 'SPZ_4003_variant');
                    hiddenValue('SPZ_4003', 'SPZ_4003_truecontrol');
                }
            }
        });
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
        "https://www.sailpoint.com/identity-library/identity-governance-administration",
        "https://www.sailpoint.com/identity-library/dora-compliance",
        "https://www.sailpoint.com/identity-library/iga-gartner",
        "https://www.sailpoint.com/identity-library/identity-first-security"
    ];

    window.addEventListener("locationchange", function () {
        const url = getBaseUrl(location.href);
        urlCheck(url);
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

    //Generic code
    function removeTest() {
        if (document.body.classList.contains('spz_4003_tc')) {
            document.body.classList.remove('spz_4003_tc');
        }
    }

    function removeSpecificCookieValue(targetName, targetValue) {
        ['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
            var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
            setCookie(key, values || '', 1);
        });
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