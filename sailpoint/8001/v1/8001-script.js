function createTest() {
    document.body.classList.add('spz-8001');
    waitForElm('#contact-us .mktoForm input').then(function (elm) {
    });
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
var url = location.href;
urlCheck(url);
window.addEventListener("locationchange", function () {
    url = location.href;
    urlCheck(url);
});

function urlCheck(url) {
    var targetTestURL = '';
    if (window.location.pathname === "/demo/interactive") {
        targetTestURL = window.location.href;
    }
    if (isSameUrl(url, targetTestURL, true)) {
        createTest();
    } else {
        removeTest();
    }
}


//Generic code
function removeTest() {
    if (document.body.classList.contains('spz-8001')) {
        document.body.classList.remove('spz-8001');
    }
}

function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#")
        ? currentUrl.slice(0, currentUrl.indexOf("#"))
        : currentUrl;
    specifiedUrl = specifiedUrl.includes("#")
        ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
        : specifiedUrl;
    if (!includeQueryParams)
        currentUrl = currentUrl.includes("?")
            ? currentUrl.slice(0, currentUrl.indexOf("?"))
            : currentUrl;
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
        observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true,
        });
    });
}
