const TEST_ENV = {
    name: 'spz-ABC-Additional-CTA',
    class: 'spz-5001', // class will be used in body ex. spz-1001
    date: '15-02-23',
    base_url: 'https://abcfitness.com/', // control domain url
    main_class: '.home', // parent class where test is going to be applied
}

function loadTest() {
    var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
    var cookieValue = "1";
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

    // Set test class
    document.body.classList.add(TEST_ENV.class);
    waitForElm('.l-body-wrapper .c-hero__content').then(function () {
        document.querySelector('.l-body-wrapper .c-hero__content .c-hero__info-wrapper .c-hero__subtitle.c-subtitle').insertAdjacentHTML('beforeend', `<a class="c-grid-simple__btn c-btn--internal-type  c-btn c-btn--primary " href="https://abcfitness.com/solutions/">
        BOOK A DEMO
    </a>`);
        headerChange();
    });

    document.body.classList.add("loaded");
}

function headerChange() {
    document.querySelector('header#header .l-header__inner .l-header__action-links-wrapper--top.c-header-action-links__wrapper').insertAdjacentHTML('beforeend', `<div class="spz-header-cta-container"><div class="spz-header-cta-primary"><a class="c-header-action-links__item c-header-action-links__item--first spz-login-btn" target="">
    Log In / Support
</a> </div><div class="spz-header-cta-secondary"><a class="c-header-action-links__item c-header-action-links__item--second " target="_blank" href="">
    Book A Demo
</a> </div></div>`);
    waitForElm('header#header .l-header__inner .l-header__action-links-wrapper--top.c-header-action-links__wrapper .spz-header-cta-container').then(function () {
        moveElement('header#header .l-header__inner .l-header__action-links-wrapper--top.c-header-action-links__wrapper .c-header-action-links__items-wrapper', '.spz-header-cta-container .spz-header-cta-primary');
    });

    waitForElm('.spz-header-cta-container .c-header-action-links__items-wrapper').then(function () {
        cloneElement('.spz-header-cta-container', 'header#header');
    });
    waitForElm('header#header > .spz-header-cta-container .c-header-action-links__items-wrapper').then(function () {
        window.addEventListener("click", function (e) {
            if (e.target.classList.contains("spz-login-btn")) {
                console.log("Change link pressed");
                if (e.target.parentElement.classList.contains('.dropdown-show')) {
                    e.target.parentElement.classList.remove('.dropdown-show');
                    e.target.parentElement.querySelector('.c-header-action-links__items-wrapper').classList.remove('active');
                }
                else {
                    e.target.parentElement.classList.add('.dropdown-show');
                    e.target.parentElement.querySelector('.c-header-action-links__items-wrapper').classList.add('active');
                }
            }
        });
    });
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

function cloneElement(source, target) {
    if (document.querySelector(source) && document.querySelector(target)) {
        const sc = document.querySelector(source);
        const clone = sc.cloneNode(true);
        document.querySelector(target).appendChild(clone);
    }
}

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