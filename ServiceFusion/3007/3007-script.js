let checkBody = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkBody);
        detect_browser();
        detectOS();
        load_3007();
    }
});
function load_3007() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-3007')) {
        bodyEle.classList.add('spz-3007');

        waitForElm('#pricing-inner .demo-cta a').then(function () {
            document.querySelectorAll('#pricing-inner .demo-cta a').forEach(function (elm) {
                elm.textContent = 'Get Started';
            });
        });
    }
}

//wait for element
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


function detect_browser() {
    let browser_class = '';
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        browser_class = 'spz-opera';
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
        browser_class = 'spz-edge';
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        browser_class = 'spz-chrome';
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        browser_class = 'spz-safari';
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        browser_class = 'spz-firefox';
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        browser_class = 'spz-ie';
    } else {
        browser_class = '';
    }
    document.querySelector('body').classList.add(browser_class);
}
function detectOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'MacOS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }
    document.querySelector('body').classList.add(os);
}
