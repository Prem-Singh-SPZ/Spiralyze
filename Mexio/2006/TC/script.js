// iFrame Code
function formPage() {
    var iframebodyInterval = setInterval(function () {
        var iframebodyEle = document.querySelector('body');
        if (iframebodyEle) {
            if (!iframebodyEle.classList.contains('SPZ-2006-TC-iframe')) {
                clearInterval(iframebodyInterval);
                iframebodyEle.classList.add('SPZ-2006-TC-iframe');
                hiddenValue();
            }
        }
    });
}

// Main Page Code
function demoPage() {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('SPZ-2006-TC')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('SPZ-2006-TC');
            cookieValue('#2006', '#2006_true_control');

            waitForElm('.theme-white iframe').then(function () {
                setTimeout(() => {
                    var iframeSrc = document.querySelector('.theme-white iframe').src;
                    //check if url has query params
                    if (iframeSrc.includes('?')) {
                        //replace question mark string with "?spz=2006&" in the url
                        document.querySelector('.theme-white iframe').src = iframeSrc.replace('?', '?spz=2006&');
                    } else {
                        document.querySelector('.theme-white iframe').src = iframeSrc + '?spz=2006';
                    }
                }, 500);
            });
        }
    });
}

if (location.href.indexOf('/demo') > -1) {
    demoPage();
}
if (location.href.indexOf('spz=2006') > -1) {
    formPage();
}

function hiddenValue() {
    var spz_cro_Interval = setInterval(function () {
        var cro_primary = document.querySelector('form#pardot-form .form-field.cro_primary input');
        if (cro_primary) {
            clearInterval(spz_cro_Interval);
            var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
            cro_primary.value = ExistingHiddenFieldValue;
        }
    });
}

function cookieValue(currentHiddenFieldName, currentHiddenFieldValue) {
    var ExistingHiddenFieldName = getCookie('HiddenFieldName');
    var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');

    if (!ExistingHiddenFieldName) {
        setCookie('HiddenFieldName', currentHiddenFieldName, 1);
        setCookie('HiddenFieldValue', currentHiddenFieldValue, 1);
    } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
        setCookie('HiddenFieldName', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
        setCookie('HiddenFieldValue', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=maxio.com;";
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
