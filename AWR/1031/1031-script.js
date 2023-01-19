(function () {
    const ENV_1031 = {
        name: '1031_homepage_email',
        class: 'spz-1031',
        date: '08-11-2022',
        base_url: 'https://www.awrusa.com/',
        test_url: 'https://www.awrusa.com/',
        main_class: 'body',
    }

    function createTest() {
        var cookieName = ENV_1031.name + "-" + ENV_1031.date;
        var cookieValue = "1";
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

        // Set test class
        document.body.classList.add(ENV_1031.class);

        // Cart email auto fill
        if (window.location.pathname.indexOf('checkout') > -1) {
            const uname = getEmailCookie("userEmail");
            const emailElm = document.querySelector('.general-information .form-group input[name="email"]');
            if (uname && emailElm) {
                emailElm.value = uname;
                emailElm.readOnly = true;
                emailElm.style.pointerEvents = "none";
                emailElm.style.backgroundColor = "#f9f9f9";
            }
        }
        else {
            // Homepage changes
            if (document.querySelector('button[angularticscategory="Header-Login"]')) {
                loadTest1033();
                loadTest1031();
            }
        }

        document.body.classList.add("loaded");
    }
    function loadTest1033() {
        // var heroSection = setInterval(function () {
        if (document.querySelectorAll('.hero-slider').length > 0) {
            if (document.querySelectorAll('.hc-spz').length == 0) {
                jQuery('.search-box-content .justify-content-center').prepend(`<div class="head-content hc-spz"> <h3 _ngcontent-c8="">With Us, Your Home&#8217;s Protected</h3><h5 _ngcontent-c8="">Make the Smart Choice</h5></div>`)
                jQuery('.search-box-content').after('<div class="mobile-spz-img"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1033/Mobile.jpg" alt="Hero Image" title="Hero Image"/></div>')
                jQuery('.zip-code-search-box').after('<div class="spz-toll-no">or call <p>855-800-5195</p></div>')
                // jQuery('input.search-zipcode').each(function (index, value) { jQuery(this).attr('placeholder', '') })
                // jQuery('.hero-slider[class] hos-google-places .search-bar .search-field').prepend('<label _ngcontent-c7="" for="selectType">Zip Code</label>')
            }
        }
        // });
    }
    // 1031 Starts
    function loadTest1031() {
        if (document.querySelectorAll('.email-field-spz').length == 0 && document.querySelector('hos-hero-banner .zip-code-search-box .search-field')) {
            document.querySelector('hos-hero-banner .zip-code-search-box .search-field').insertAdjacentHTML('beforebegin', `
        <div class="field-wrap-spz">
            <input type="text" name="email" class="email-field-spz ng-untouched ng-pristine" required>
            <span id="email-error-spz" class="email-error-spz">
                Please enter valid email address.
            </span>
        </div>`);
            setInterval(() => {
                waitForElm('input[name="zipcode"]').then(function () {
                    document.querySelector('[name="zipcode"]').removeAttribute('placeholder');
                });
            }, 200);
            document.querySelector('.error-zipcode').style.marginLeft = (document.querySelector('.search-field').offsetLeft - 16) + 'px';
        }

        const emailBox = document.querySelector('.email-field-spz');
        if (!document.querySelector('.gt-started-btn') && emailBox) {
            // Email validations
            emailBox.addEventListener('blur', function (e) {
                isValidEmail(e, emailBox);
            });
            emailBox.addEventListener('keyup', function (e) {
                isValidEmail(e, emailBox);
            });

            // Check if form is valid and then submit
            document.querySelector('.product-page-search').addEventListener("click", function (e) {
                isValidEmail(e, emailBox);
            });
            document.querySelector('.product-page-search').classList.add('gt-started-btn');
        }

        floatingLabels();

        if (document.querySelector('hos-hero-banner .hero-slider .ngucarousel-items .bannerStyle img')) {
            document.querySelector('hos-hero-banner .hero-slider .ngucarousel-items .bannerStyle img').alt = 'Hero background';
            if (window.innerWidth > 1024) {
                document.querySelector('hos-hero-banner .hero-slider .ngucarousel-items .bannerStyle img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1031/assets/hero-bg-desktop-min.jpg')
            } else if (window.innerWidth >= 567 && window.innerWidth < 1024) {
                document.querySelector('hos-hero-banner .hero-slider .ngucarousel-items .bannerStyle img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1031/assets/hero-bg-tablet-min.jpg')
            } else if (window.innerWidth < 567) {
                document.querySelector('hos-hero-banner .hero-slider .ngucarousel-items .bannerStyle img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1031/assets/hero-bg-mobile-min.jpg')
            }
        }
    }

    function floatingLabels() {
        jQuery('.search-zipcode').attr('required', '');
        jQuery('.search-zipcode').removeAttr('placeholder');

        const emailElm = document.querySelector('.email-field-spz');
        const zipElm = document.querySelector('.search-field');

        if (document.querySelectorAll('.field-wrap-spz').length == 1) {
            emailElm.insertAdjacentHTML('afterend', `<label>Email</label>`);
            zipElm.insertAdjacentHTML('beforeend', `<label>Zip Code</label>`);
            zipElm.classList.add('field-wrap-spz');
        }
    }

    function isValidEmail(e, email) {
        // const error_field = document.querySelector('#email-error-spz');

        if (validateEmail(email.value)) {
            if (e.type != 'blur') {
                createEmailCookie(email.value);
            }
            email.parentElement.classList.remove('is-invalid');
        } else {
            e.preventDefault();
            email.parentElement.classList.add('is-invalid');
        }
    }

    // Email validation function
    function validateEmail(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    // Create email cookie
    function createEmailCookie(value) {
        today = new Date();
        var expire = new Date();
        expire.setTime(today.getTime() + 3600000 * 24 * 30); //  Save for 30 days
        document.cookie = "userEmail=" + value + ";path=/" + ";expires=" + expire.toUTCString();
    }

    // Fetch email cookie
    function getEmailCookie(userEmail) {
        let name = userEmail + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    // 1031 Ends

    // Generic
    history.pushState = (function (f) {
        return function pushState() {
            let ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            let ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('replacestate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.replaceState);

    window.addEventListener('popstate', function () {
        window.dispatchEvent(new Event('locationchange'));
    });
    window.addEventListener('locationchange', function () {
        url = location.href;
        urlCheck(url);
    });

    var url = location.href;
    urlCheck(url);
    function urlCheck(url) {
        let testURL = ENV_1031.test_url;
        if (window.location.pathname.indexOf(ENV_1031.test_url) > -1 || window.location.pathname.indexOf('checkout') > -1) {
            testURL = window.location.href;
        }

        if (isSameUrl(url, testURL, true) || isSameUrl(url, 'https://www.awrusa.com/user/checkout', true)) {
            waitForElm(ENV_1031.main_class).then(function () {
                createTest();
            });
            window.addEventListener("resize", function () {
                createTest();
            });
            if (document.querySelectorAll(ENV_1031.main_class).length > 0) {
                createTest();
            }
        } else {
            removeTest();
        }
    }

    // isSameUrl Parameters
    // currentUrl = current page url
    // specifiedUrl = url on which we have to run test
    // includeQueryParams = set true, if query params are allowed
    function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
        currentUrl = currentUrl.includes("#") ? currentUrl.slice(0, currentUrl.indexOf("#")) : currentUrl;
        specifiedUrl = specifiedUrl.includes("#") ? specifiedUrl.slice(0, specifiedUrl.indexOf("#")) : specifiedUrl;

        if (includeQueryParams) {
            currentUrl = currentUrl.includes("?") ? currentUrl.slice(0, currentUrl.indexOf("?")) : currentUrl;
        }
        if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/") {
            return true;
        }
        return false;
    }

    function removeTest() {
        document.body.classList.remove(ENV_1031.class);
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
})()