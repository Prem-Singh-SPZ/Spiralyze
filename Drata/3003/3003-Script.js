(function () {
    function createTest3003() {
        document.body.classList.add('spz-3003');

        waitForElm('#__next .hs-form-private').then(function () {
            insertStickySection();
        });

        waitForElm('#__next .spz-sticky-blog-section').then(function () {
            window.onload = checkScrollPosition();
            window.onscroll = function () {
                checkScrollPosition();
            };
        });
    }

    //perform click actions
    // window.addEventListener("click", function (e) {
    //     if (e.target.classList.contains("trigger-demo-btn")) {
    //         document.querySelector('a[href="/demo"]').click();
    //     }
    // });


    function insertStickySection() {
        if (document.querySelectorAll('#__next .spz-sticky-blog-section').length == 0 && document.querySelector('#__next main .css-1d27wf-MuiContainer-root-Blog-contentContainer .css-1h9xxvu-Blog-relatedItemsWrapper')) {
            document.querySelector('#__next main .css-1d27wf-MuiContainer-root-Blog-contentContainer .css-1h9xxvu-Blog-relatedItemsWrapper').insertAdjacentHTML('beforeend', `<div class="spz-sticky-blog-section for-desktop">` + blogHTML + `</div>`);
            document.querySelector('#__next main .css-14lvbd4-Blog-relatedResources ').insertAdjacentHTML('beforebegin', `<div class="spz-sticky-blog-section for-mobile">` + blogHTML + `</div>`);
        }
    }

    //Blog section html content
    const blogHTML = `<div class="sticky-blog-section">
<div class="blog-img">
    <picture>
        <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/3003/img.webp" type="image/webp">
        <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/3003/img.png" type="image/png"> <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/3003/img.webp" alt="Get Compliant 80% Faster With Drata"> </picture>
</div>
<div class="blog-container">
    <h6 class="blog-title">Get Compliant 80% Faster<br> With Drata</h6>
    <div class="blog-rating"> <img class="g2-logo" src="//res.cloudinary.com/spiralyze/image/upload/v1690989370/drata/3003/logo-g2.svg" alt="G2 Logo" /> <img class="star-ratings" src="//res.cloudinary.com/spiralyze/image/upload/v1690989369/drata/3003/rating-4_9.svg" alt="Ratings" />
        <div class="ratings"> <span>4.9 </span> (500+ reviews) </div>
    </div>
    <div class="blog-cta"> <a href="/demo" target="_blank" class="hs-cta-primary trigger-demo-btn">Get a Demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1690987050/drata/3002/cta_arrow.svg" alt="Arrow" />
            </a> </div>
</div>
</div>`;

    function checkScrollPosition() {
        waitForElm('#__next header.MuiAppBar-positionFixed').then(function () {
            if (document.querySelector('.spz-sticky-blog-section')) {
                if (document.querySelector('header.MuiAppBar-positionFixed.css-qqlydz-MuiPaper-root-MuiAppBar-root-Header-root')) {
                    document.querySelector('.spz-sticky-blog-section.for-desktop').style.top = "98px";
                }
                else if (document.querySelector('header.MuiAppBar-positionFixed.css-1p0wz3u-MuiPaper-root-MuiAppBar-root-Header-root')) {
                    document.querySelector('.spz-sticky-blog-section.for-desktop').style.top = "24px";
                }
            }
        });
    }

    function removeTest() {
        if (document.querySelector('.spz-sticky-blog-section')) {
            document.querySelectorAll('.spz-sticky-blog-section').forEach(function (elem) {
                elem.remove();
            })
        }
        document.body.classList.remove("spz-3003");
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
        url = location.href;
        urlCheck(url);
    });

    var url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        let testURL = '';
        if (window.location.href.indexOf("/blog/") > -1) {
            testURL = window.location.href;
        }

        if (isSameUrl(url, testURL, false)) {
            createTest3003();
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
})();
