const TEST_ENV = {
    name: 'spz-pdp-mobile-optimize-tc',
    class: 'spz-3025-tc', // class will be used in body ex. spz-1001
    date: '03-01-23',
    base_url: 'https://www.awrusa.com/', // control domain url
    test_url: '/product/', // url segment where test will run on
    main_class: 'body', // parent class where test is going to be applied
}



function loadTest() {
    if (window.innerWidth <= 766) {
        var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
        var cookieValue = "1";
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
        document.body.classList.add(TEST_ENV.class);
        waitForElm('.ga-track-enroll-now').then(function (elm) {
            contentScroll();
            window.onscroll = function (e) {
                contentScroll();
            }
        });
        document.body.classList.add("loaded");
    }
}


function contentScroll() {
    if (window.innerWidth <= 766) {
        if (document.querySelectorAll('.enroll-now.ga-track-enroll-now').length > 0) {
            document.querySelectorAll('.enroll-now.ga-track-enroll-now').forEach(function (v, i) {
                v.innerText = 'Get Started';
                v.setAttribute('title', 'Get Started');
            });
        }

        if (document.querySelectorAll('.general-section .page-wrap .selected-zipcode-area .page-wrap.program-content').length > 0) {
            document.querySelector('.general-section .selected-zipcode-area > .page-wrap.program-content .enroll-now-btn').innerText = 'Get Started';
            document.querySelector('.general-section .selected-zipcode-area > .page-wrap.program-content .enroll-now-btn').setAttribute('title', 'Get Started');
        }

        if (document.querySelectorAll(' .selected-zipcode-area  .page-wrap.program-content > .zipcode-searched-mobile .pricing-not-leak > .ng-tns-c9-0').length > 0 && document.querySelectorAll('.pricing-section-label').length == 0) {
            document.querySelector('.selected-zipcode-area > .page-wrap.program-content .enroll-now-btn-mob').innerText = 'Get Started';
            document.querySelector(' .selected-zipcode-area > .page-wrap.program-content .enroll-now-btn-mob').setAttribute('title', 'Get Started');
        }
    }
};

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

let url = location.href;
urlCheck(url);
function urlCheck(url) {
    let testURL = TEST_ENV.base_url;
    if (window.location.pathname.indexOf(TEST_ENV.test_url) > -1) {
        testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
        var myCookie = getCookie("_evidon_suppress_notification_cookie");

        if (myCookie == null) {
            waitForElm('#_evidon-decline-button').then(function (elm) {
                document.getElementById("_evidon-decline-button").addEventListener("click", function (e) {
                    let url = location.href;
                    urlCheck(url);
                });
            });
        }
        else {
            if (window.innerWidth <= 766) {
                waitForElm(TEST_ENV.main_class).then(function () {
                    loadTest();
                });
                setTimeout(function () {
                    document.body.classList.add("loaded");

                    window.addEventListener("resize", function () {
                        loadTest();
                    });
                }, 5000);
                if (document.querySelectorAll(TEST_ENV.main_class).length > 0) {
                    loadTest();
                }
            }
            else {
                removeTest();
            }
        }

    } else {
        removeTest();
    }
}


window.addEventListener("resize", function () {
    let url = location.href;
    urlCheck(url);
});


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

function removeTest() {
    document.body.classList.remove(TEST_ENV.class);
    document.body.classList.remove('loaded');
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

//Check if cookie exist
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}

// Add class 'safari' (used for cart scrollbar)
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari')
}