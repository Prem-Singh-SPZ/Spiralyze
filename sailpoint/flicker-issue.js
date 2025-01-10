(function () {
    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!body.classList.contains('spz_flicker_test')) {
                    body.classList.add('spz_flicker_test');
                    waitForElm('.spz_flicker_test #page-container main.container > div p.font-normal.text-h3').then(function (elm) {
                        elm.textContent = "FBut fear not, you’re still at the helm. Do a search, read our FAQs or sail through any of our identity content.";
                    });
                }
                else {
                    if (body.classList.contains('spz_flicker_test')) {
                        waitForElm('.spz_flicker_test #page-container main.container > div p.font-normal.text-h3').then(function (elm) {
                            elm.textContent = "FBut fear not, you’re still at the helm. Do a search, read our FAQs or sail through any of our identity content.";
                        });
                    }
                }
            }
        });
    }

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.spz_flicker_test')) {
                document.body.classList.remove("spz_flicker_test");
            }
        }, 2000);
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


    // List of URLs
    const urls = [
        "https://www.sailpoint.com/idn/api"
    ];
    window.addEventListener("locationchange", function () {
        url = location.href;
        urlCheck(url);
        if (document.querySelector('.spz_flicker_test')) {
            document.body.classList.remove("spz_flicker_test");
        }
    });
    var url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        if (urls.includes(url)) {
            createTest();
        } else {
            removeTest();
        }
    }

    // Generic Code
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