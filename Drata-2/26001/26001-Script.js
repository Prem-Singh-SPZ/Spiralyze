// COntrol URL
// https://drata.com/blog/supply-chain-security?mutiny_preview=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI2NDAzZWJlMC1lMGIwLTRmYTUtYWViOS1mNzYwODM0ZTkyZWIiLCJpc3MiOiI4NDFhMTYzYjg1ZWFhM2YxIiwiY29tcGFueV9pZCI6Ijg0MWExNjNiODVlYWEzZjEiLCJleHBlcmllbmNlX2lkIjoiZDRiM2RhYzAtYjE0Mi00MDIzLTlhNTgtMWQ3ZGJiZWEzZGUwIiwidmFyaWF0aW9uX2lkIjoiNDMxOTJiZGItOGEyNy00NzU4LWFiZTEtZDZlMmY2MzUzNmY2IiwiZXhwIjoxNzAxMTg2Mzg5LCJ2YXJpYWJsZV9vdmVycmlkZXMiOnt9fQ.HcOeFi_9lPiEXCrZDQfNfgYRlZCOT6V89UHyqbcrkEs

function createTest3002() {
    document.body.classList.add('spz-3002-drataverse');

    waitForElm('#__next .hs-form-private').then(function () {
        insertStickySection();
    });

    waitForElm('#__next .spz-sticky-footer').then(function () {
        window.onload = checkScrollPosition();
        window.onscroll = function () {
            checkScrollPosition();
        };
    });
}

//perform click actions
window.addEventListener("click", function (e) {
    // console.log(e.target)
    if (e.target.classList.contains("sticky-close-btn")) {
        this.document.querySelector('.spz-sticky-footer').remove();
        document.querySelector('#__next').style.paddingBottom = "0px";
    }
});


function insertStickySection() {
    if (document.querySelectorAll('#__next .spz-sticky-footer').length == 0) {
        document.querySelector('#__next').insertAdjacentHTML('beforeend', `<div class="spz-sticky-footer"><div class="sticky-footer">
        <div class="sticky-container">
            <div class="left-content">
                <img class="left-arrow" src="https://res.cloudinary.com/spiralyze/image/upload/v1690987004/drata/3002/decoration-arrow.svg" alt="Arrow" />
                <span>Witness our biggest product updates yet at Drataverse Digital</span>
            </div>
            <div class="right-content">
                <a href="https://drata.com/events/drataverse-oct-2023" target="_blank" class="hs-cta-primary trigger-demo-btn">Register Now <img src="https://res.cloudinary.com/spiralyze/image/upload/v1690987050/drata/3002/cta_arrow.svg" alt="Arrow" /></a>
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
    waitForElm('#__next header.MuiAppBar-positionFixed').then(function () {
        let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        let headerHeight = document.querySelector('#__next header.MuiAppBar-positionFixed').offsetHeight;
        // var heroHeight = document.querySelector('header.mui-fixed + div').offsetHeight;
        var totalHeight = headerHeight + 506;
        if (document.querySelector('body .spz-sticky-footer')) {
            let stickyHeight = document.querySelector('#__next .spz-sticky-footer').offsetHeight;

            if (scrollTop > totalHeight) {
                document.querySelector('body .spz-sticky-footer').classList.add('show-sticky');
                document.querySelector('#__next').style.paddingBottom = stickyHeight + "px";
            }
            else {
                if (document.querySelector('body .spz-sticky-footer').classList.contains('show-sticky')) {
                    document.querySelector('body .spz-sticky-footer').classList.remove('show-sticky');
                    document.querySelector('#__next').style.paddingBottom = "0px";
                }
            }
        }
    });

}

function removeTest() {
    if (document.querySelector('.spz-sticky-footer')) {
        document.querySelector('.spz-sticky-footer').remove();
        document.querySelector('#__next').style.paddingBottom = "0px";
    }
    document.body.classList.remove("spz-3002-drataverse");
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
    if (window.location.href.indexOf("/product") > -1 ||
        window.location.href.indexOf("/platform") > -1 ||
        window.location.href.indexOf("/blog") > -1 ||
        window.location.href.indexOf("/resources/reports") > -1 ||
        window.location.href == "https://drata.com/") {
        testURL = window.location.href;
    }

    if (isSameUrl(url, testURL, false)) {
        createTest3002();
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