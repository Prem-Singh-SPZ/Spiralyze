

function createTest() {
    document.body.classList.add('spz-8001');
    waitForElm('#contact-us .mktoForm input').then(function (elm) {
        formModify();
    });
}

function formModify() {
    if (document.querySelector('#page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner') && !document.querySelector('.spz-form-title-wrapper')) {
        document.querySelector('#page-container .page-transition main #contact-us .row__inner > .column:last-child .column__inner').insertAdjacentHTML('afterbegin', `<div class="spz-form-title-wrapper"><h6 class="f-title">See how SailPoint's identity security platform works</h6></div>`);
    }

    document.querySelectorAll('#mktoForm_1018.mktoForm .mktoFormRow').forEach(function (elm) {
        if (elm.querySelector('.mktoField[name]:not([type="hidden"]):not([type="checkbox"])')) {
            elm.classList.add('row_' + elm.querySelector('.mktoField').getAttribute('name'));
        }
    });

    document.querySelector('.row_FirstName').insertAdjacentElement('beforebegin', document.querySelector('.row_Email'));
    document.querySelector('.mkto-wrap .mktoForm .mktoButtonRow .mktoButtonWrap .mktoButton').textContent = 'Unlock all product tours';

    waitForElm('#contact-us .mktoForm .mktoCaptchaDisclaimer').then(function (elm) {
        document.querySelector('.page-transition main #contact-us .row__inner > .column:last-child .column__inner .disclaimer').insertAdjacentHTML('afterend', document.querySelector('.mkto-wrap .mktoForm .mktoCaptchaDisclaimer').outerHTML);

        document.querySelector('.mkto-wrap .mktoForm .mktoFormRow #LblNumber_of_Employees__c').innerHTML = '<div class="mktoAsterix">*</div>Number of employees';
        document.querySelector('.mkto-wrap .mktoForm .mktoFormRow #LblCountry').innerHTML = '<div class="mktoAsterix">*</div>Country';
        document.querySelector('.mkto-wrap .mktoForm .mktoFormRow #LblcontactFormComments').innerHTML = `<div class="mktoAsterix">*</div>I'd like to discuss`;
    });

    checkStateField();
}

function checkStateField() {
    waitForElm('.mktoForm #LblState').then(function (elm) {
        document.querySelector('.mkto-wrap .mktoForm .mktoFormRow #LblState').innerHTML = '<div class="mktoAsterix">*</div>State';
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
var url = location.href;
urlCheck(url);
window.addEventListener("locationchange", function () {
    url = location.href;
    urlCheck(url);
});

function urlCheck(url) {
    var targetTestURL = '';
    if (window.location.pathname === "/demo/interactive") {
        targetTestURL = window.location.href;
    }
    if (isSameUrl(url, targetTestURL, true)) {
        createTest();
    } else {
        removeTest();
    }
}

//Generic code
function removeTest() {
    if (document.body.classList.contains('spz-8001')) {
        document.body.classList.remove('spz-8001');
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
        observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true,
        });
    });
}
