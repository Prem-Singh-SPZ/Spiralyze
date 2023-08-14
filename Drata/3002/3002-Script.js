function createTest3002() {
    document.body.classList.add('spz-3002');

    waitForElm('#__next #reactHubspotForm0 .hs-form-private').then(function () {
        insertStickySection();
    });

    waitForElm('#__next .spz-sticky-footer').then(function () {
        window.onload = checkScrollPosition();
        window.onscroll = function () {
            checkScrollPosition();
        };
    });
}

function insertStickySection() {
    console.log('ffffff')
    if (document.querySelectorAll('#__next .spz-sticky-footer').length == 0) {
        document.querySelector('#__next').insertAdjacentHTML('beforeend', `<div class="spz-sticky-footer"><div class="sticky-footer">
        <div class="sticky-container">
            <div class="left-content">
                <img class="left-arrow" src="https://res.cloudinary.com/spiralyze/image/upload/v1690987004/drata/3002/decoration-arrow.svg" alt="Arrow" />
                <span>Get Compliant 80% Faster With Drata</span>
            </div>
            <div class="center-content">
                <img class="g2-logo" src="https://res.cloudinary.com/spiralyze/image/upload/v1690986738/drata/3002/hero_logo-g2.svg" alt="G2 Logo" />
                <img class="star-ratings" src="https://res.cloudinary.com/spiralyze/image/upload/v1690986738/drata/3002/rating-4_9.svg" alt="Ratings" />
                <div class="ratings"><span>4.9 </span> (461 reviews)</div>
            </div>
            <div class="right-content">
                <a href="javascript:void(0)" class="hs-cta-primary trigger-demo-btn">Get a Demo <img src="https://res.cloudinary.com/spiralyze/image/upload/v1690987050/drata/3002/cta_arrow.svg" alt="Arrow" /></a>
            </div>
            </div>
            <div class="close-sticky">
            <a href="javascript:void(0)" class="sticky-close-btn"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1690986863/drata/3002/close.svg" alt="Close" /></a>
            </div>
        </div>
    </div>
    `)
    }
}

function checkScrollPosition() {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var headerHeight = document.querySelector('header#header').offsetHeight;
    var heroHeight = document.querySelector('main.l-body-wrapper section.c-hero').offsetHeight;
    var totalHeight = headerHeight + heroHeight + 56;
    if (scrollTop > totalHeight) {
        document.querySelector('body .spz-sticky-footer').classList.add('show-sticky');
        document.querySelector('body .c-scroll-to-top.js-scroll-to-top').classList.add('show-sticky');
    }
    else {
        if (document.querySelector('body .spz-sticky-footer').classList.contains('show-sticky')) {
            document.querySelector('body .spz-sticky-footer').classList.remove('show-sticky');
            document.querySelector('body .c-scroll-to-top.js-scroll-to-top').classList.remove('show-sticky');
        }
    }
}

function removeTest() {
    document.body.classList.remove("spz-3002");
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
window.addEventListener('locationchange', function () {
    removeTest();

    url = location.href;
    urlCheck(url);
});
var url = location.href;
urlCheck(url);

function urlCheck(url) {
    let testURL = '';
    if (window.location.href.indexOf("https://drata.com/blog") > -1) {
        testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
        createTest3002();
        console.log('dddddddd')
    } else {
        removeTest();
    }
}

// isSameUrl Parameters
// currentUrl = current page url
// specifiedUrl = url on which we have to run test
// includeQueryParams = set true, if query params are allowed
function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ?
        currentUrl.slice(0, currentUrl.indexOf("#")) :
        currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ?
        specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
        specifiedUrl;
    if (includeQueryParams)
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