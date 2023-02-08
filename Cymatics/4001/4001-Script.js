const TEST_ENV = {
    name: '4001-Checkout-Upsell',
    class: 'spz-4001', // class will be used in body ex. spz-1001
    date: '08-02-2023',
    base_url: 'https://cymatics.fm/', // control domain url
    test_url: 'products', // url segment where test will run on
    main_class: 'body', // parent class where test is going to be applied
}

function loadTest() {
    var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
    var cookieValue = "1";
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

    // Set test class
    document.body.classList.add(TEST_ENV.class);
    waitForElm('.bonus-section #overview #payment').then(function () {
        if (document.querySelectorAll('.bonus-section #overview #payment > div.row .spz-no-thanks').length == 0) {
            document.querySelector('.bonus-section #overview #payment > div.row .text-center.cta').classList.remove('col-md-6', 'mx-auto');
            document.querySelector('.bonus-section #overview #payment > div.row .text-center.cta').classList.add('col-lg-6');
            document.querySelector('.bonus-section #overview #payment > div.row').insertAdjacentHTML('beforeend', `<div class="no-thanks-txt spz-no-thanks col-12 col-lg-6"><a href="#" onclick="AddOk();">No thanks, continue to checkout</a></div>`);
            document.querySelector('#review-order > .logo.text-center').insertAdjacentHTML('afterbegin',`<div class="spz-close" ><img onclick="AddOk();" src="https://res.cloudinary.com/spiralyze/image/upload/v1675857602/Cymatics/4001/assets/Close.svg" alt="Close Icon"></div>`);
        }
    });

    document.body.classList.add("loaded");
}

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
        waitForElm(TEST_ENV.main_class).then(function () {
            loadTest();
        });
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

function removeTest() {
    document.body.classList.remove(TEST_ENV.class);
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

// Clone element
// source: Element which we have to copy
// target: New location of an element 
function cloneElement(source, target) {
    if (document.querySelector(source) && document.querySelector(target)) {
        const sc = document.querySelector(source);
        const clone = sc.cloneNode(true);
        document.querySelector(target).appendChild(clone);
    }
}

// Move element
// sourceElm: Element which we have to move
// targetLoc: New location of an element 
function moveElement(sourceElm, targetLoc) {
    const f = document.createDocumentFragment();
    if (document.querySelector(sourceElm) != null) {
        f.appendChild(document.querySelector(sourceElm));
        document.querySelector(targetLoc).appendChild(f);
    }
}

// Add class 'safari' (used for cart scrollbar)
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari')
}