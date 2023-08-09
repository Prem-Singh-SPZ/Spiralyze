(function () {
    function loadTest() {
        // Set test class
        document.body.classList.add("spz-6005");

        waitForElm('.integrations-logo-slider').then(function () {

            let posChanged = setInterval(() => {
                if (document.querySelector('.logo-section + .footer') && document.querySelector('.hero-section + .review-section')) {
                    clearInterval(posChanged);
                }
                document.querySelector('.hero-section').after(document.querySelector('.review-section'));
                document.querySelector('.integrations-section').after(document.querySelector('.logo-section'));
            }, 50);

            waitForElm('.hero-section + .review-section').then(function () {
                document.querySelector('.review-slider .avg-star-rating').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1691579562/drata/6005/stars.svg');
                document.querySelectorAll('.review-slider .star-rating').forEach(function (elem, i) {
                    elem.setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1687342816/drata/6005/frame.svg');
                })

                document.querySelector('.logo-section .ls-logo-group').insertAdjacentHTML('beforebegin',`<div class="testimonial"><div class="testimonial-card"><div class="testimonial-img"><picture><source srcset="//res.cloudinary.com/spiralyze/image/upload/v1687342816/drata/6005/image.webp" type="image/webp"><source srcset="//res.cloudinary.com/spiralyze/image/upload/v1687342816/drata/6005/image.png" type="image/png"><img src="//res.cloudinary.com/spiralyze/image/upload/v1687342816/drata/6005/image.webp" alt="Jonathan Jaffe" title="Jonathan Jaffe"></picture></div><div class="testimonial-content"><div class="auth-name"><h3>Jonathan Jaffe</h3><h6>CISO, Lemonade</h6></div><div class="auth-review"><p>“We saved 80% of time using Drata&#8217;s continuous compliance automation. I&#8217;ve spent well over 200 hours before using Drata just in preparing for and dealing with our SOC 2 audit. Drata has been great for automating evidence collection. I find it really flexible, and I&#8217;m able to make my own control framework.” </p></div></div></div></div>`)
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
        let testURL = '';
        if (window.location.pathname.indexOf("demo") > -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
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
        document.body.classList.remove("spz-6005");
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
})();
