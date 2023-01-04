const TEST_ENV = {
    name: 'spz-pdp-mobile-optimize',
    class: 'spz-3025', // class will be used in body ex. spz-1001
    date: '03-01-23',
    base_url: 'https://www.awrusa.com/', // control domain url
    test_url: '/product/', // url segment where test will run on
    main_class: 'body', // parent class where test is going to be applied
}



function loadTest() {
    var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
    var cookieValue = "1";
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

    console.log('Test is running...')
    // Set test class
    document.body.classList.add(TEST_ENV.class);
    waitForElm('.mob-gen-section .program-head .program-name').then(function (elm) {
        if (document.querySelectorAll('.spz-pname').length == 0) {
            document.querySelector('hos-breadcrumb.detail-header-breadcrum').insertAdjacentHTML('beforeend', `<div class='spz-pname'> <div>`);
            moveElement('.content-section .page-wrap .left-box', '.spz-pname');


            contentInt = setInterval(contentScroll, 100);
            window.onscroll = function (e) {
                contentScroll();
            }

            // document.body.addEventListener('click', contentScroll);
        }
    });
    waitForElm('.spz-pname .rating-link .rating-average span.rating-label').then(function (elm) {
        if (document.querySelectorAll('.spz-pname .rating-link .rating-average span.rating-label.changed').length == 0) {
            document.querySelector('.spz-pname .rating-link .rating-average span.rating-label').innerHTML = '<span>4.9</span>' + document.querySelector('.spz-pname .rating-link .rating-average span.rating-label').innerHTML.split(')')[0] + ' reviews)';
            document.querySelector('.spz-pname .rating-link .rating-average span.rating-label').classList.add('changed');
        }
    });
    document.body.classList.add("loaded");
}

function contentScroll() {
    console.log('Interval is running...')

    if (document.querySelectorAll('.spz-desc-title').length > 0) {
        clearInterval(contentInt);
    }

    if (document.querySelectorAll('.spz-desc-title').length == 0 && document.querySelectorAll('.general-section .page-wrap .selected-zipcode-area .page-wrap.program-content').length > 0) {
        document.querySelector('.general-section .page-wrap .selected-zipcode-area .page-wrap.program-content').insertAdjacentHTML('afterbegin', `<div class='spz-desc-title'> <h6>Product Description</h6> <div>`);

        document.querySelector('.general-section .selected-zipcode-area > .page-wrap.program-content').insertAdjacentHTML('beforeend', `<div class='spz-pricing-parent'> <div>`);
        clearInterval(contentInt);

    }
    if (document.querySelectorAll('.general-section .selected-zipcode-area > .page-wrap.program-content .zipcode-searched').length > 0) {
        moveElement('.general-section .selected-zipcode-area > .page-wrap.program-content .zipcode-searched', '.spz-pricing-parent');
    }
    if (document.querySelectorAll('.general-section .selected-zipcode-area > .page-wrap.program-content .no-zipcode-search').length > 0) {
        moveElement('.general-section .selected-zipcode-area > .page-wrap.program-content .no-zipcode-search', '.spz-pricing-parent');
        document.querySelector('.no-zipcode-search .search-zipcode-area form button').innerHTML = '<img class="get-started-btn-icon" loading="lazy" src="https://res.cloudinary.com/spiralyze/image/upload/v1672815320/AWR/3025/assets/Get-started-icon.svg" alt="Get Started">';
    }
    if (document.querySelectorAll('.general-section .selected-zipcode-area > .page-wrap.program-content .enroll-box.enroll-now-box').length > 0) {
        moveElement('.general-section .selected-zipcode-area > .page-wrap.program-content .enroll-box.enroll-now-box', '.spz-pricing-parent');
    }

    if (document.querySelectorAll(' .selected-zipcode-area  .page-wrap.program-content > .zipcode-searched-mobile .pricing-not-leak > .ng-tns-c9-0').length > 0 && document.querySelectorAll('.pricing-section-label').length == 0) {
        document.querySelector('.selected-zipcode-area  .page-wrap.program-content > .zipcode-searched-mobile .pricing-not-leak > .ng-tns-c9-0').insertAdjacentHTML('afterbegin', '<label class="pricing-section-label">Based on your location</label>');
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
            console.log('coockie not found..');
            if (document.querySelector('#_evidon-decline-button')) {
                document.getElementById("_evidon-decline-button").addEventListener("click", function () {
                    let url = location.href;
                    urlCheck(url);
                });
            }
        }
        else {
            if (window.innerWidth <= 767) {
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
        }

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