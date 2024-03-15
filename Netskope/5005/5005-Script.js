
(function () {
    let init_timer = 1;

    if (location.pathname.includes('resources/ebooks/6-zero-trust-use-cases-for-netskope-one-a-unified-sase-platform')) {
        waitForElm('.mktoFormRow [name="utm_location__c"]').then(function (elm) {
            submitTestDetails();
        });
    }
    else {
        waitForElm('.page .v3__container #components__content').then(function (elm) {
            createTest5005();
            exitIntentPopup(false);
        });
    }

    //Passing test details to hidden fields
    function submitTestDetails() {
        // const field_int = setInterval(function () {
        //     if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
        //         if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#5005_spzaa_variant") {
        //             clearInterval(field_int);
        //         }
        //         document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#5005_spzaa_variant');
        //     }
        // }, 100);

        MktoForms2.whenReady(function (form) {
            document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#5005_spzaa_variant');
        });
    }

    function createTest5005() {
        document.body.classList.add('spz-5005');
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


    // Append popup content to body
    function appendPopup() {
        // Append popup content
        if (document.querySelectorAll('.page .exit-modal-sec-spz').length == 0) {
            document.querySelector('.page .v3__container').insertAdjacentHTML('afterend',
                `<div class="exit-modal-sec-spz">
                    <div class="ems-content">
                    <a href="javascript:void(0)" class="ems-close-btn"></a>
                        <div class="ems-content-inner">
                          <div class="ems-left-copy">
                            <h6>Learn more about security & network transformation in the age of SASE</h6>
                            <ul class="ems-points">
                                <li>Cost savings</li>
                                <li>Bridging skills gap</li>
                                <li>Network & security convergence</li>
                            </ul>
                            <div class="ems-cta">
                                <a href="https://www.netskope.com/resources/ebooks/6-zero-trust-use-cases-for-netskope-one-a-unified-sase-platform" class="get-a-demo">Download ebook now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 12L10 8L6 4" stroke="#081A59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg></a>
                            </div>
                          </div>
                          <div class="ems-right-img">
                          <picture>
                            <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/5005/ui_1.png" type="image/png">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/netskope/5005/ui_1.webp" alt="Image">
                            </picture>
                          </div>
                        </div>
                    </div>
                    <div class="ems-tab-spacer"></div>
                </div>`);
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

