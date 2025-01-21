let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz_8001_tc')) {
            body.classList.add('spz_8001_tc');
            hiddenValue('SPZ_8001', 'SPZ_8001_truecontrol');
        }
        else{
            hiddenValue('SPZ_8001', 'SPZ_8001_truecontrol');
        }
    }
});

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
    var ExistingHiddenFieldName = getCookie('HiddenFieldNameContact');
    var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContact');

    if (!ExistingHiddenFieldName) {
        setCookie('HiddenFieldNameContact', currentHiddenFieldName, 1);
        setCookie('HiddenFieldValueContact', currentHiddenFieldValue, 1);
    } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
        setCookie('HiddenFieldNameContact', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
        setCookie('HiddenFieldValueContact', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
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
        var intellimize1 = document.querySelector('form.mktoForm#mktoForm_1018 input[name="intellimize1"]');
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

    document.addEventListener('click', function (e) {
        if (e.target.closest('#mktoForm_1018 .mktoButton')) {
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