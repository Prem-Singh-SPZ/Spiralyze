
(function () {
    let isFormSubmitted = false;
    console.log("isFormSubmitted == " + isFormSubmitted);

    function createTest3001() {
        document.body.classList.add('spz-3001');

        if (window.location.href.indexOf("/demo") > -1) {
            waitForElm('#reactHubspotForm1 .hs-form-private').then(function () {
                checkFormSubmission();
            });
        }
        else {
            console.log("is Form Submitted == " + isFormSubmitted);
            if (!isFormSubmitted) {
                appendPopup();
                console.log("pop up function called...");
            }
        }

    }

    // Check if hubspot form is successfully submitted and store value in local storage
    function checkFormSubmission() {
        if (sessionStorage.getItem("query.utm_form") == "book_meeting" || sessionStorage.getItem("utm_form") == "book_meeting") {
            isFormSubmitted = true;
            console.log("isFormSubmitted = " + isFormSubmitted);
        }
    }


    //perform click actions
    window.addEventListener("click", function (e) {
        // console.log(e.target)
        if (e.target.classList.contains("sticky-close-btn")) {
            this.document.querySelector('.spz-sticky-footer').remove();
            document.querySelector('#__next').style.paddingBottom = "0px";
        }
        // console.log(e.target.classList)
        if (e.target.classList.contains("trigger-demo-btn")) {
            document.querySelector('a[href="/demo"]').click();
        }
    });


    history.pushState = (function (f) {
        return function pushState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('replacestate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.replaceState);
    window.addEventListener('popstate', function () {
        window.dispatchEvent(new Event('locationchange'));
    });
    window.addEventListener('locationchange', function () {
        removeTest();
        url = location.href;
        urlCheck(url);
    });

    var url = location.href;
    urlCheck(url);

    function urlCheck(url) {

        let testURL = 'https://drata.com/';
        if ((window.location.href.indexOf("/demo") > -1 ||
            window.location.href.indexOf("/product") > -1 ||
            window.location.href.indexOf("/platform") > -1 ||
            window.location.href.indexOf("/blog") > -1 ||
            window.location.href.indexOf("/resources/reports") > -1) &&
            window.location.href.indexOf("https://drata.com/") > -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            createTest3001();
        } else {
            removeTest();
        }
    }

    function removeTest() {
        if (document.querySelector('.spz-sticky-footer')) {
            document.querySelector('.spz-sticky-footer').remove();
            document.querySelector('#__next').style.paddingBottom = "0px";
        }
        document.body.classList.remove("spz-3001");
    }

    function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
        currentUrl = currentUrl.includes("#") ?
            currentUrl.slice(0, currentUrl.indexOf("#")) :
            currentUrl;
        specifiedUrl = specifiedUrl.includes("#") ?
            specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
            specifiedUrl;
        if (!includeQueryParams)
            currentUrl = currentUrl.includes("?") ?
                currentUrl.slice(0, currentUrl.indexOf("?")) :
                currentUrl;
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
            observer.observe(document, { attributes: true, childList: true, subtree: true, characterData: true });
        });
    }

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari')
    }


    // #4008 Exit popup 
    let coolDown = false;
    let count = 0;
    const coolDownTime = 30; // in seconds

    // Append popup content to body
    function appendPopup() {
        // Append popup content
        if (document.querySelectorAll('#__next .exit-modal-sec-spz').length == 0) {
            document.querySelector('#__next').insertAdjacentHTML('beforeend',
                `<div class="exit-modal-sec-spz">
                    <div class="ems-content">
                    <div class="ems-content-header">
                        <div class="ems-drata-logo">
                        <a href="javascript:void(0)" class="drata-logo">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691053180/drata/3001/drata-full-wordmark.svg" alt="Drata" />
                            </a>
                        </div>
                        <a href="javascript:void(0)" class="ems-close-btn">
                        
                        </a>
                    </div>
                        <div class="ems-content-inner">
                            <div class="ratings-section">
                                <img class="g2-logo" src="//res.cloudinary.com/spiralyze/image/upload/v1691053160/drata/3001/logo-g2.svg" alt="G2 Logo" />
                                <img class="star-rating" src="//res.cloudinary.com/spiralyze/image/upload/v1691053160/drata/3001/rating-4_9.svg" alt="Star Ratings" />
                                <div class="rating-no">
                                <span>4.9 </span>(461 reviews)
                                </div>
                            </div>
                            <h6>Put Compliance on Autopilot</h6>
                            <p>Automate compliance for 16+ security frameworks including SOC 2, ISO 27001, HIPPA, GDPR, and PCI.  Get certified faster at a fraction of the cost.</p>
                            <div class="ems-cta">
                                <a href="javascript:void(0)" class="get-a-demo">Get a Demo
                                <img class="close-ico default" src="//res.cloudinary.com/spiralyze/image/upload/v1690987050/drata/3002/cta_arrow.svg" alt="Arrow" />
                            </a>
                            </div>
                        </div>
                    </div>
                    <div class="ems-tab-spacer"></div>
                </div>`);
        }

        // Add class to body
        document.body.classList.add('spz-3001');

        // Close popup
        document.querySelector('.ems-close-btn').addEventListener('click', function () {
            showExitPopup(false);
            coolDown = true;

            count = count + 1;

            setTimeout(() => {
                coolDown = false;
            }, coolDownTime * 1000);
        });
    }

    // Show/Hide popup
    function showExitPopup(isVisible = false) {
        if (isVisible) {
            document.body.classList.add('active');

            // if window height is less than 768px, add top: 3px to .exit-modal-sec-spz .ems-content
            // Added this because the popup was not visible from top and close icon was getting cut off
            if (window.innerHeight < 768 && window.innerWidth > 1280) {
                document.querySelector('.exit-modal-sec-spz .ems-content').style.top = '3px';
            }
        } else if (!isVisible) {
            document.body.classList.remove('active');
        }
    }

    // Show popup when mouse leaves the window (to top only)
    function exitIntentPopup() {
        var mouseY = 0;
        var topValue = 10;
        window.addEventListener("mouseout", function (e) {
            mouseY = e.clientY;

            if (mouseY <= topValue && !coolDown && count < 3) {
                showExitPopup(true);
            }
        }, false);
    }
    exitIntentPopup();

    // Show popup after {coolDownTime} seconds in tablet and mobile
    if (window.innerWidth < 1280) {
        setTimeout(() => {
            showExitPopup(true);
            coolDown = true;
        }, coolDownTime * 1000);
    }
})();

