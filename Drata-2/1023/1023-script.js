(function () {
    // CSS
    var cssElement = document.createElement('style');
    cssElement.type = 'text/css';
    var cssCode = ``;
    cssElement.appendChild(document.createTextNode(cssCode));
    document.head.appendChild(cssElement);
    function createTest() {
        waitForElm('body').then(function () {
            document.querySelector("body").classList.add("spz-1023-V1");

            waitForElm('form.hs-form-private[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .hs_cro_test_1 .input .hs-input').then(function () {
                let setValue = setInterval(() => {
                    if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').getAttribute('value') == '1023_Variant1') {
                        clearInterval(setValue);
                    }
                    document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', '1023_Variant1');
                }, 100);
            });

            waitForElm('form.hs-form-private[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .MuiButton-ctaModulePrimary').then(function () {
                document.querySelector('form.hs-form-private[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .MuiButton-ctaModulePrimary').innerHTML = `<span>Get Started</span><svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
                        <path d="M1 1L5 5L1 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                </svg>`;
            });
        });
    }

    function removeTest() {
        document.body.classList.remove("spz-1023-V1");
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