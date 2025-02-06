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
        // initSlider_2026();
    });

    const heroSelector = `section[variant="collectionCheckboxesSectionWrapper"]`;
    const position = "afterend";
    const heroInterfaceContent = {
        slides: {
            slideItems: [
                { slideImageURL: `//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2026/central_default_image.webp`, imageAlt: `Dashboard` },
                { slideImageURL: `//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2026/right_image_1.webp`, imageAlt: `Vendor Directory` },
                { slideImageURL: `//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2026/left_image.webp`, imageAlt: `Controls` },
                { slideImageURL: `//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2026/central_default_image.webp`, imageAlt: `Dashboard` },
                { slideImageURL: `//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2026/right_image_1.webp`, imageAlt: `Vendor Directory` },
                { slideImageURL: `//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2026/left_image.webp`, imageAlt: `Controls` },
            ],
        },
    }

    function addHeroInterface(InterfaceData, whereToPut, heroSelector) {
        const InterfaceTemplate = `<div class="spz-hero-interface">
        <div class="spz-hero-interface__slides swiper">
          <div class="swiper-wrapper">
            ${InterfaceData.slides.slideItems.map((slideItem) => {
            return `<div class="spz-hero-interface__slide swiper-slide">
                    <div class="swiper-slide-img">
                     <img src="${slideItem.slideImageURL}" alt="${slideItem.imageAlt}">
                    </div>
                </div>`;
        }).join('')}
            </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-btn-prev"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="19.9999" cy="19.9999" r="19.9999" fill="#EEF2F6"/>
                    <path d="M27.3737 20.707C27.7642 20.3165 27.7642 19.6833 27.3737 19.2928L21.0098 12.9288C20.6192 12.5383 19.9861 12.5383 19.5955 12.9288C19.205 13.3193 19.205 13.9525 19.5955 14.343L25.2524 19.9999L19.5955 25.6567C19.205 26.0473 19.205 26.6804 19.5955 27.0709C19.9861 27.4615 20.6192 27.4615 21.0098 27.0709L27.3737 20.707ZM12.5 20.9999H26.6666V18.9999H12.5V20.9999Z" fill="#293642"/>
                    </svg></div>
                                    <div class="swiper-btn-next"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="19.9999" cy="19.9999" r="19.9999" fill="#EEF2F6"/>
                    <path d="M27.3737 20.707C27.7642 20.3165 27.7642 19.6833 27.3737 19.2928L21.0098 12.9288C20.6192 12.5383 19.9861 12.5383 19.5955 12.9288C19.205 13.3193 19.205 13.9525 19.5955 14.343L25.2524 19.9999L19.5955 25.6567C19.205 26.0473 19.205 26.6804 19.5955 27.0709C19.9861 27.4615 20.6192 27.4615 21.0098 27.0709L27.3737 20.707ZM12.5 20.9999H26.6666V18.9999H12.5V20.9999Z" fill="#293642"/>
                    </svg></div>
        </div>
      </div>`;
        document.querySelector(heroSelector).insertAdjacentHTML(whereToPut, InterfaceTemplate);
    }

    // Initialize slider
    function initSlider_2026() {
        // waitForElm('.spz-hero-interface__slides').then(function () {
        const swiper = new Swiper(".spz-hero-interface__slides", {
            // Optional parameters
            effect: "coverflow",
            grabCursor: false,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 342,
                depth: 342,
                modifier: 1
            },
            // spaceBetween: 30,
            loop: true,
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    coverflowEffect: {
                        stretch: 160,
                        depth: 160,
                    },
                },
                768: {
                    slidesPerView: 1.369,
                    coverflowEffect: {
                        stretch: 272,
                        depth: 272,
                    },
                },
                992: {
                    slidesPerView: 1.5,
                    coverflowEffect: {
                        stretch: 342,
                        depth: 342,
                    },
                },
                1199: {
                    slidesPerView: 1.595
                },
                1279: {
                    slidesPerView: 1.62
                }
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },

            // If we need navigation
            navigation: {
                nextEl: ".swiper-btn-next",
                prevEl: ".swiper-btn-prev",
                clickable: true
            },
        });

        // setTimeout(() => {
        // swiper.slideTo(3, 1000);
        // }, 200);
        //take the height of the image of active slide and set the height of the slider
        swiper.on('slideChange', function () {
            let activeSlide = document.querySelector('.spz-hero-interface__slide.swiper-slide-active img');
            let slider = document.querySelector('.spz-hero-interface__slides .swiper-wrapper');
            if (activeSlide && slider) {
                slider.style.height = activeSlide.offsetHeight + 'px';
            }
        });
        // });

    }

    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                // if (!body.classList.contains('spz-2026')) {
                body.classList.add('spz-2026');
                waitForElm('.spz-2026 main section[variant="collectionCheckboxesSectionWrapper"]').then(function () {
                    if (document.querySelectorAll('.spz-2026 .spz-hero-interface').length == 0) {
                        addHeroInterface(heroInterfaceContent, position, heroSelector);
                        createCookie('spz-2026-loaded', 'true', 1);
                        submitTestDetails('variant_#2026');

                        let swiperInterval = setInterval(() => {
                            if (document.querySelector('.spz-hero-interface__slides.swiper-initialized')) {
                                clearInterval(swiperInterval);
                            }
                            if (typeof Swiper !== 'undefined' && document.querySelector('.spz-2026 .spz-hero-interface .spz-hero-interface__slide') && !document.querySelector('.spz-hero-interface__slides.swiper-initialized')) {
                                initSlider_2026();
                            }
                        }, 100);
                    }


                    if (document.querySelector('body.spz-2026 section[variant=collectionImageCollageSectionWrapper]'))
                        document.querySelector('body.spz-2026 section[variant=collectionImageCollageSectionWrapper]').parentElement.style.display = 'none';
                    // If swiper is initialized, run initSlider_28001 function

                });
                // }
            }
        });
    }

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.spz-2026')) {
                document.body.classList.remove("spz-2026");
            }

            if (document.querySelector('.spz-2026 .spz-hero-interface')) {
                document.querySelector('.spz-2026 .spz-hero-interface').remove();
            }
        }, 200);
    }


    // Passing test details to hidden fields
    function submitTestDetails(cro_test) {
        if (document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input')) {
            document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input').setAttribute('value', cro_test);
        }
    }

    function demoChecked() {
        const sInt = setInterval(() => {
            var cro_field = document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input');

            // Check if spz-2020-loaded cookie is present and cro_field is present
            if ((cro_field && cro_field.val != '') && isCookieExist('spz-2026-loaded')) {
                clearInterval(sInt);
                submitTestDetails('variant_#2026');

                deleteCookie('spz-2026-loaded');
            }
        }, 1000);

        setTimeout(() => {
            clearInterval(sInt);
        }, 10000);
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
        if (window.location.pathname === "/") {
            createTest();
        }
        else if (window.location.pathname.indexOf("/demo") > -1) {
            demoChecked();
            waitForElm('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video').then(function () {
                if (document.querySelector('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video')) {
                    document.querySelector('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video').setAttribute('playsinline', '');
                }
            });
        }
        else {
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

    // Create cookie
    function createCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    // Check if cookie exists
    function isCookieExist(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Delete cookie
    function deleteCookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
})();