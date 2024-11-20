(function () {
    // CSS
    var cssElement = document.createElement('style');
    cssElement.type = 'text/css';
    var cssCode = ``;
    cssElement.appendChild(document.createTextNode(cssCode));
    document.head.appendChild(cssElement);
    function createTest() {
        waitForElm('body').then(function () {
            document.querySelector("body").classList.add("spz-1023-V2");

            waitForElm('form.hs-form-private[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .hs_cro_test_1 .input .hs-input').then(function () {
                let setValue = setInterval(() => {
                    if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').getAttribute('value') == '1023_Variant2') {
                        clearInterval(setValue);
                    }
                    document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', '1023_Variant2');
                }, 100);
            });

            waitForElm('form.hs-form-private[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .MuiButton-ctaModulePrimary').then(function () {
                document.querySelector('form.hs-form-private[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .MuiButton-ctaModulePrimary').innerHTML = `<span>Schedule Now</span><svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
                        <path d="M1 1L5 5L1 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                </svg>`;

                const wiggle = document.querySelector('.spz-1023-V2 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary');
                let animation_interval;
    
                const stopAnimation = function () {
                  clearInterval(animation_interval);
                  wiggle.classList.remove('animate');
                };
    
                const startAnimation = function () {
                  wiggle.classList.add('animate');
                  animation_interval = setInterval(button_animation, 5000);
                  setTimeout(() => {
                    wiggle.classList.remove('animate');
                  }, 2000);
                };
    
                setTimeout(() => {
                  startAnimation();
                }, 3000);
    
                const button_animation = function () {
                  wiggle.classList.add('animate');
                  setTimeout(() => {
                    wiggle.classList.remove('animate');
                  }, 2000);
                }
    
                wiggle.addEventListener('mouseover', stopAnimation);
                wiggle.addEventListener('mouseout', startAnimation);
    
                // Adding touch events for mobile devices
                wiggle.addEventListener('touchstart', stopAnimation);
                wiggle.addEventListener('touchend', startAnimation);
            });
        });
    }

    function removeTest() {
        document.body.classList.remove("spz-1023-V2");
    }

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
    var url = location.href;
    urlCheck(url);
    window.addEventListener('locationchange', function () {
        url = location.href;
        urlCheck(url);
    });

    function urlCheck(url) {
        let testURL = '';
        if (window.location.pathname.indexOf("demo") !== -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            createTest();
        } else {
            removeTest();
        }
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
})();