const TEST_ENV = {
    name: '1001-PDP-Sticky-Footer',
    class: 'spz-1001', // class will be used in body ex. spz-1001
    date: '13-02-2023',
    base_url: 'https://cymatics.fm/', // control domain url
    test_url: '/products/', // url segment where test will run on
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
    waitForElm('.shopify-section').then(function () {
        document.querySelector('.shopify-section').insertAdjacentHTML('afterbegin', `<div class="spz-sticky-footer"><div class="footer-logo d-none d-md-block"></div> <div class="footer-content d-none d-md-block"></div> <div class="footer-cta"></div> </div>`);
        cloneElement(".ss-button.text-center", ".spz-sticky-footer .footer-cta");
        if (location.pathname.includes('horizons-gospel-melody-collection') || location.pathname.includes('anthem-drill-melody-collection')) {
            cloneElement(".cta-button.text-center", ".spz-sticky-footer .footer-cta");
        }
        cloneElement(".main-header", ".spz-sticky-footer .footer-content");
        if (location.pathname.includes('fractals-synth-melodies')) {
            cloneElement(".h1-header.new-header", ".spz-sticky-footer .footer-content");
        }
        if (location.pathname.includes('drill-essential-drum-kit') || location.pathname.includes('aura-trapsoul-vocal-chops') || location.pathname.includes('shimmer-fx-sample-pack')) {
            cloneElement(".h1-header", ".spz-sticky-footer .footer-content");
            cloneElement(".glow-btn", ".spz-sticky-footer .footer-cta");

        }
        if (location.pathname.includes('7th-anniversary-mystery-pack')) {
            cloneElement(".h1-header.new-header", ".spz-sticky-footer .footer-content");
            cloneElement(".order-1.order-md-2 .btn.gold-btn", ".spz-sticky-footer .footer-cta");
        }
        document.querySelector(".spz-sticky-footer .footer-logo").insertAdjacentHTML("afterbegin", `<img alt="Cymatics" src="https://res.cloudinary.com/spiralyze/image/upload/v1676269950/Cymatics/1001/assets/image_2.svg" >`);
        showSticky();
        window.onscroll = function () {
            showSticky();
        };

    });
    document.body.classList.add("loaded");
}

function showSticky() {
    if (300 < document.documentElement.scrollTop) {
        document.querySelector(".spz-sticky-footer").classList.add('active');
        document.querySelector('.site-footer').style.paddingBottom = document.querySelector('.spz-sticky-footer').offsetHeight + "px";
    } else {
        if (document.querySelector(".spz-sticky-footer").classList.contains('active')) {
            document.querySelector(".spz-sticky-footer").classList.remove('active');
        }
    }
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
    if (window.location.pathname.indexOf(TEST_ENV.test_url) > -1 || window.location.pathname.indexOf("/pages/") > -1) {
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

// Add class 'safari' (used for cart scrollbar)
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari')
}

function cloneElement(source, target) {
    if (document.querySelector(source) && document.querySelector(target)) {
        const sc = document.querySelector(source);
        const clone = sc.cloneNode(true);
        document.querySelector(target).appendChild(clone);
    }
}