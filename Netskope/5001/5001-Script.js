
(function () {
    if (location.pathname.includes('/get-started')) {
        waitForElm('.mktoFormRow [name="utm_location__c"]').then(function (elm) {
            document.body.classList.add('spz-5001');
            submitEmail();
        });
    }
    else {
        waitForElm('.header__get-started-button.btn').then(function (elm) {
            document.body.classList.add('spz-5001');
            createTest5001();
        });
    }

    //Passing test details to hidden fields
    function submitEmail() {
        MktoForms2.whenReady(function (form) {
            document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#5001_spzaa_variant');
        });
    }

    function createTest5001() {
        document.querySelector('.header__get-started').insertAdjacentHTML('afterbegin', '<div class="spz-5001-email"><input type="email" placeholder="Email"></div>');
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
            observer.observe(document, { attributes: true, childList: true, subtree: true, characterData: true });
        });
    }

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari')
    }

    // Set a Cookie
    function setCookieForTimer(cName, cValue) {
        document.cookie = cName + "=" + cValue + "; path=/";
    }

    //Get a cookie
    function getCookie(cName) {
        const name = cName + "=";
        const cDecoded = decodeURIComponent(document.cookie); //to be careful
        const cArr = cDecoded.split('; ');
        let res;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        return res;
    }
})();

