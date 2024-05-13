function createTest3002() {
    document.body.classList.add('spz-26001');

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
        if (document.querySelector('#hubspot-messages-iframe-container.sticky-showed')) {
            document.querySelector('#hubspot-messages-iframe-container').classList.remove('sticky-showed');
        }
    }
    // console.log(e.target.classList)
    // if (e.target.classList.contains("trigger-demo-btn")) {
    //     document.querySelector('a[href="/demo"]').click();
    // }
});


function insertStickySection() {
    if (document.querySelectorAll('#__next .spz-sticky-footer').length == 0) {
        document.querySelector('#__next').insertAdjacentHTML('beforeend', `<div class="spz-sticky-footer"><div class="sticky-footer">
        <div class="sticky-container">
            <div class="left-content">
                <span>Webinar: Grow Revenue with Compliance</span>
            </div>
            <div class="center-content">
                <img class="g2-logo" src="https://res.cloudinary.com/spiralyze/image/upload/v1690986738/drata/3002/hero_logo-g2.svg" alt="G2 Logo" />
                <img class="star-ratings" src="https://res.cloudinary.com/spiralyze/image/upload/v1690986738/drata/3002/rating-4_9.svg" alt="Ratings" />
                <div class="ratings"><span>4.9 </span> (700+ reviews)</div>
            </div>
            <div class="right-content">
                <a href="https://drata.com/resources/webinars/accelerate-revenue-with-soc-2" class="hs-cta-primary trigger-demo-btn">Register Here <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
                <path d="M1 1L5 5L1 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg></a>
            </div>
            </div>
            <div class="close-sticky">
            <a href="javascript:void(0)" class="sticky-close-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g opacity="0.5">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0674 3.6395L13.4209 3.28595L12.7138 2.57884L12.3603 2.9324L7.9999 7.29277L3.63954 2.93241L3.28598 2.57885L2.57888 3.28596L2.93243 3.63951L7.29279 7.99988L2.93218 12.3605L2.57863 12.714L3.28574 13.4211L3.63929 13.0676L7.9999 8.70698L12.3605 13.0676L12.7141 13.4212L13.4212 12.714L13.0676 12.3605L8.70701 7.99988L13.0674 3.6395Z" fill="black"/>
            </g>
          </svg></a>
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
        var heroHeight = document.querySelector('header.MuiAppBar-positionFixed + div[class*="HeroSubpage-root"]').offsetHeight;
        var totalHeight = headerHeight;
        if (document.querySelector('body .spz-sticky-footer')) {
            let stickyHeight = document.querySelector('#__next .spz-sticky-footer').offsetHeight;

            if (scrollTop > totalHeight) {
                document.querySelector('body .spz-sticky-footer').classList.add('show-sticky');
                document.querySelector('#__next').style.paddingBottom = stickyHeight + "px";

                if (document.querySelector('#hubspot-messages-iframe-container')) {
                    document.querySelector('#hubspot-messages-iframe-container').classList.add('sticky-showed');
                }
            }
            else {
                if (document.querySelector('body .spz-sticky-footer').classList.contains('show-sticky')) {
                    document.querySelector('body .spz-sticky-footer').classList.remove('show-sticky');
                    document.querySelector('#__next').style.paddingBottom = "0px";

                    if (document.querySelector('#hubspot-messages-iframe-container.sticky-showed')) {
                        document.querySelector('#hubspot-messages-iframe-container').classList.remove('sticky-showed');
                    }
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
    document.body.classList.remove("spz-26001");
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
    if (window.location.href.indexOf("/platform/startup") > -1) {
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