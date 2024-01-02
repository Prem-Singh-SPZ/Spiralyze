

(function () {
    if (location.pathname.includes('/get-started')) {
        waitForElm('.mktoFormRow [name="utm_location__c"]').then(function (elm) {
            document.body.classList.add('spz-3001');
            submitEmail();
        });
    }
    else {
        waitForElm('.header__get-started-button.btn').then(function (elm) {
            document.body.classList.add('spz-3001');
            createTest3001();
        });
    }

    //Passing test details to hidden fields
    function submitEmail() {
        MktoForms2.whenReady(function (form) {
            document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#3001_spzaa_variant');
        });
    }

    function createTest3001() {
        document.querySelector('.header__get-started').insertAdjacentHTML('afterbegin', '<div class="spz-3001-email"><input class="spz-email" type="email" placeholder="Email"></div>');
    }

    //on focus of .spz-email addClass to .header__get-started
    waitForElm('.spz-email').then(function (elm) {
        document.querySelector('.spz-email').addEventListener('focus', function (event) {
            document.querySelector('.header__get-started').classList.add('i-focused');
        });

        document.querySelector('.spz-email').addEventListener('blur', function (event) {
            document.querySelector('.header__get-started').classList.remove('i-focused');
        });

        hover(document.querySelector('.spz-email'), "i-hover");
    });

    function hover(element, className) {
        element.addEventListener('mouseenter', e => element.closest('.header__get-started').classList.add(className))
        element.addEventListener('mouseleave', e => element.closest('.header__get-started').classList.remove(className))
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

