
(function () {
    let init_timer = 1;

    if (location.pathname.includes('/get-started')) {
        waitForElm('.mktoFormRow [name="utm_location__c"]').then(function (elm) {
            submitTestDetails();
        });
    }
    else {
        waitForElm('.page .v3__container #components__content').then(function (elm) {
            createTest5003();
            exitIntentPopup(false);
        });
    }

    //Passing test details to hidden fields
    function submitTestDetails() {
        const field_int = setInterval(function () {
            if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
                if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#5003_spzaa_variant") {
                    clearInterval(field_int);
                }
                document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#5003_spzaa_variant');
            }
        }, 100);
    }

    function createTest5003() {
        document.body.classList.add('spz-5003');
        appendPopup();
        // if (!getCookie('spz_existing_user')) {
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


    // Append popup content to body
    function appendPopup() {
        // Append popup content
        if (document.querySelectorAll('.page .exit-modal-sec-spz').length == 0) {
            document.querySelector('.page .v3__container').insertAdjacentHTML('afterend',
                `<div class="exit-modal-sec-spz">
                    <div class="ems-content">
                    <a href="javascript:void(0)" class="ems-close-btn"></a>
                        <div class="ems-content-inner">
                            <h6>Get a quick demo to see how Netskope can 
                            secure your entire multi-cloud environment</h6>
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
                </div>`);
        }

        exitIntentPopup();
        setCookieForTimer('spz_existing_user', init_timer);

        // Close popup
        document.querySelector('.ems-close-btn').addEventListener('click', function () {
            showExitPopup(false);
            setCookieForTimer('spz_existing_user', '2');
        });
    }

    // Show/Hide popup
    function showExitPopup(isVisible = false) {
        if (isVisible) {
            document.body.classList.add('active');
            document.querySelector('html').classList.add('active');
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
            let count = +(getCookie('spz_existing_user'));

            console.log('hello');

            console.log(count);
            if (mouseY <= topValue && count < 2) {
                showExitPopup(true);

            }
        }, false);
    }
})();

