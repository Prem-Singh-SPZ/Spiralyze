(function () {

    //append swiper js script in head and onload of that call function initSlider_28001
    function appendScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;

        var css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "https://res.cloudinary.com/spiralyze/raw/upload/v1722331974/drata/28001/src/assets/swiper-bundle.min.css";

        document.getElementsByTagName("head")[0].appendChild(script);
        document.getElementsByTagName("head")[0].appendChild(css);

        script.onload = function () {
            callback();
        };
    }

    appendScript("https://res.cloudinary.com/spiralyze/raw/upload/v1722331975/drata/28001/src/assets/swiper-bundle.min.js", function () {
        initSlider_2026();
    });

    const heroSelector = `section[variant="collectionCheckboxesSectionWrapper"]`;
    const position = "afterend";
    const heroInterfaceContent = {
        slides: {
            slideItems: [
                { slideImageURL: `//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2026/left_image.webp`, imageAlt: `SOC 2` },
                { slideImageURL: `//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2026/central_default_image.webp`, imageAlt: `SOC 2` },
                { slideImageURL: `//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2026/right_image.webp`, imageAlt: `SOC 2` },
            ],
        },
    }

    function addHeroInterface(InterfaceData, whereToPut, heroSelector) {
        const InterfaceTemplate = `<div class="spz-hero-interface">
        <div class="spz-hero-interface__slides swiper">
          <div class="swiper-wrapper">
            ${InterfaceData.slides.slideItems.map((slideItem) => {
            return `<div class="spz-hero-interface__slide swiper-slide">
                <img src="${slideItem.slideImageURL}" alt="${slideItem.imageAlt}">
                </div>`;
        }).join('')}
            </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
        </div>
      </div>`;
        document.querySelector(heroSelector).insertAdjacentHTML(whereToPut, InterfaceTemplate);
    }

    // Initialize slider
    function initSlider_2026() {
        waitForElm('.spz-hero-interface__slides').then(function () {
            const swiper = new Swiper(".spz-hero-interface__slides", {
                // Optional parameters
                effect: "coverflow",
                grabCursor: false,
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 900,
                    modifier: 1
                },
                keyboard: {
                    enabled: false
                },
                mousewheel: {
                    enabled: false
                },
                spaceBetween: 30,
                loop: false,
                breakpoints: {
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 1.6
                    }
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },

                // If we need navigation
                navigation: {
                    nextEl: ".swiper-btn-next",
                    prevEl: ".swiper-btn-prev"
                },
            });

            swiper.slideTo(1, false, false);
        });

    }

    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!body.classList.contains('spz-2026')) {
                    body.classList.add('spz-2026');
                    waitForElm('.spz-2026 main section[variant="collectionCheckboxesSectionWrapper"]').then(function () {
                        addHeroInterface(heroInterfaceContent, position, heroSelector);
                        // document.querySelector('.spz-2026 .hero-section form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', 'Control_6022');

                        // If swiper is initialized, run initSlider_28001 function
                        // waitForElm('.spz-hero-interface').then(function () {
                        //     if (typeof Swiper !== 'undefined') {
                        //         initSlider_2026();
                        //     }
                        // });
                    });
                }
            }
        });
    }

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.spz-2026')) {
                document.body.classList.remove("spz-2026");
            }
        }, 2000);
    }

    history.pushState = (function (f) {
        return function pushState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event("pushstate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event("replacestate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        };
    })(history.replaceState);
    window.addEventListener("popstate", function () {
        window.dispatchEvent(new Event("locationchange"));
    });
    var url = location.href;
    urlCheck(url);
    window.addEventListener("locationchange", function () {
        url = location.href;
        urlCheck(url);
    });

    function urlCheck(url) {
        let testURL = "";
        if (window.location.pathname.indexOf("/") !== -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            createTest();
        } else {
            removeTest();
        }
    }

    function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
        currentUrl = currentUrl.includes("#")
            ? currentUrl.slice(0, currentUrl.indexOf("#"))
            : currentUrl;
        specifiedUrl = specifiedUrl.includes("#")
            ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
            : specifiedUrl;
        if (!includeQueryParams)
            currentUrl = currentUrl.includes("?")
                ? currentUrl.slice(0, currentUrl.indexOf("?"))
                : currentUrl;
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
            observer.observe(document, {
                attributes: true,
                childList: true,
                subtree: true,
                characterData: true,
            });
        });
    }
})();