
(function () {
    let init_timer = 1;

    if (location.pathname.includes('/get-started')) {
        waitForElm('.mktoFormRow [name="utm_location__c"]').then(function (elm) {
            submitTestDetails();
        });
    }
    else {
        waitForElm('body div').then(function (elm) {
            createTest5003();
            exitIntentPopup(false);
        });
    }

    //Passing test details to hidden fields
    function submitTestDetails() {
        // const field_int = setInterval(function () {
        //     if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
        //         if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#5003_spzaa_variant") {
        //             clearInterval(field_int);
        //         }
        //         document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#5003_spzaa_variant');
        //     }
        // }, 100);

        MktoForms2.whenReady(function (form) {
            document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#5003_spzaa_variant');
        });
    }

    function createTest5003() {
        document.body.classList.add('spz-5003');
        appendPopup();
        // if (!getCookie('spz_existing_user')) {
        // }
        // else {
        //     showExitPopup(false);
        // }
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

    const htmlContent = `<div class="exit-modal-sec-spz">
    <div class="ems-content">
    <a href="javascript:void(0)" class="ems-close-btn"></a>
        <div class="ems-content-inner">
            <h6>Get a quick demo to see how Netskope can protect and accelerate everything to everywhere</h6>
            <ul class="ems-points">
                <li>Visibility</li>
                <li>Security</li>
                <li>Network</li>
            </ul>
            <div class="ems-cta">
                <a href="https://www.netskope.com/get-started" class="get-a-demo">Get Started</a>
            </div>
        </div>
    </div>
    <div class="ems-tab-spacer"></div>
</div>`;

    // Append popup content to body
    function appendPopup() {
        if (document.querySelectorAll('body .exit-modal-sec-spz').length == 0) {
            if (document.querySelector('.page .v3__container')) {
                document.querySelector('.page .v3__container').insertAdjacentHTML('afterend', htmlContent);
            }
            else {
                document.querySelector('body').insertAdjacentHTML('beforeend', htmlContent);
            }
        }

        exitIntentPopup();

        // Close popup
        document.querySelector('.ems-close-btn').addEventListener('click', function () {
            showExitPopup(false);
            // setCookieForTimer('spz_existing_user', '2');
        });
    }

    // Show/Hide popup
    function showExitPopup(isVisible = false) {
        if (isVisible) {
            document.body.classList.add('active');
            document.querySelector('html').classList.add('active');
            setCookieForTimer('spz_existing_user', init_timer);
        } else if (!isVisible) {
            document.body.classList.remove('active');
            document.querySelector('html').classList.remove('active');
        }
    }

    // Show popup when mouse leaves the window (to top only)
    function exitIntentPopup() {
        var mouseY = 0;
        var topValue = 10;
        window.addEventListener("mouseout", function (e) {
            mouseY = e.clientY;
            // let count = +(getCookie('spz_existing_user'));

            if (mouseY <= topValue && (!getCookie('spz_existing_user'))) {
                showExitPopup(true);
            }
        }, false);
    }
})();

