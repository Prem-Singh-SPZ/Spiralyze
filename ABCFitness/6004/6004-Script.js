// (function () {
const TEST_ENV = {
    name: 'spz-abc-solutions',
    class: 'spz-6004',
    date: '15-08-2023',
    base_url: 'https://abcfitness.com/',
    test_url: 'solutions',
    main_class: '.site',
}
let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);


        function loadTest() {
            // Set test class
            document.body.classList.add(TEST_ENV.class);
            waitForElm('body #page #colophon').then(function () {
                stickyFooter();
            });

            waitForElm('body #page .spz-sticky-footer').then(function () {
                window.onload = checkScrollPosition();
                window.onscroll = function () {
                    checkScrollPosition();
                };
            });

        }

        //perform click actions
        window.addEventListener("click", function (e) {
            if (e.target.classList.contains("trigger-demo-modal")) {
                this.document.querySelector('.n2-ow[href="#"]').click();
            }
        });

        function stickyFooter() {
            if (document.querySelectorAll('body #page #colophon .spz-sticky-footer').length == 0) {
                document.querySelector('body #page #colophon').insertAdjacentHTML('afterend', `<div class="spz-sticky-footer">
                <div class="sticky-container">
                <div class="desktop-only-image">
                <picture>
                <source srcset="//res.cloudinary.com/spiralyze/image/upload/v1683782485/abc_fitness_ignite/6003/image_3.webp"
                    type="image/webp">
                <source
                    srcset="//res.cloudinary.com/spiralyze/image/upload/v1683782485/abc_fitness_ignite/6003/image_3.png"
                    type="image/png">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1683782485/abc_fitness_ignite/6003/image_3.webp"
                    alt="Trending" title="Trending">
            </picture>
                </div>
                <div class="sticky-content"><p><span>Grow revenue 30%</span> by automating<br class="for-tab"> operations,<br class="for-mob"> sales, and member management.</p></div>
                <div class="sticky-cta"><a class="hs-cta-primary trigger-demo-modal">Request a demo <img src="https://res.cloudinary.com/spiralyze/image/upload/v1683032144/ABCFitnessSolutions/6003/src/Arrow.svg"
                alt="Arrow"></a></div>
                </div>
                </div>`)
            }
        }

        function checkScrollPosition() {
            var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            var headerHeight = document.querySelector('.bkg-header').offsetHeight;
            var heroHeight = document.querySelector('#main .entry-content .wp-block-genesis-blocks-gb-columns').offsetHeight;
            var totalHeight = headerHeight + heroHeight + 56;

            if (scrollTop > totalHeight) {
                document.querySelector('body .spz-sticky-footer').classList.add('show-sticky');
                // document.querySelector('body .c-scroll-to-top.js-scroll-to-top').classList.add('show-sticky');
            }
            else {
                if (document.querySelector('body .spz-sticky-footer').classList.contains('show-sticky')) {
                    document.querySelector('body .spz-sticky-footer').classList.remove('show-sticky');
                    // document.querySelector('body .c-scroll-to-top.js-scroll-to-top').classList.remove('show-sticky');
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
            let testURL = '';

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

        // Add class 'safari' (used for cart scrollbar)
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.body.classList.add('safari')
        }
    }
});
// })();