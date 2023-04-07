const TEST_ENV = {
    class: 'spz-5001', // class will be used in body ex. spz-1001
    base_url: 'https://try.drata.com/drata-vs-vanta', // control domain url
    main_class: 'body', // parent class where test is going to be applied
}

function loadTest() {
    // Set test class
    document.body.classList.add(TEST_ENV.class);
    waitForElm('.hs-form-3d064146-843f-404a-97b0-6515b61c518b').then(function (elm) {
        formUpdates();
    });
    document.body.classList.add("loaded");
}

function formUpdates() {
    document.querySelector('.hs-form-3d064146-843f-404a-97b0-6515b61c518b').insertAdjacentHTML('afterbegin', '<h3 class="spz-demo-form-title">Get a Demo</h3>');
    document.querySelector('.hs-form-3d064146-843f-404a-97b0-6515b61c518b .hs_submit.hs-submit .actions .hs-button').setAttribute('value', 'Get Started');
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
    if (isSameUrl(url, testURL, true) || location.pathname.indexOf('drata-vs-vanta') > -1) {
        loadTest();
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

// Set text, image etc.
// elm: Element where we have to set content
// value: Value to be set
// type: Pass content type - TEXT / IMAGE etc.
function setContent(elm, value, type = 'STRING') {
    if (document.querySelector(elm)) {
        const tg = document.querySelector(elm);
        if (type == 'IMAGE') {
            tg.src = value;
        } else {
            tg.innerText = value;
        }
    }
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

