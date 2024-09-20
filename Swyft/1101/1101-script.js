let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);

        //add swiper js and css in head
        const swiperStyle = document.createElement('link');
        swiperStyle.rel = 'stylesheet';
        swiperStyle.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        document.head.appendChild(swiperStyle);

        const swiperScript = document.createElement('script');
        swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        swiperScript.async = false;
        document.head.appendChild(swiperScript);

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
            let testURL = "https://www.swyftfilings.com/";
            if (window.location.pathname.indexOf("/marketing/llc/") > -1) {
                testURL = window.location.href;
            }
            if (isSameUrl(url, testURL, true)) {
                createTest();
            } else {
                removeTest();
            }
        }
    }
});

function createTest() {
    document.body.classList.add('spz-1101');

    let heroSelector = window.location.pathname.indexOf("/marketing/llc/") > -1 ? '#marketing-llc-hero-section' : '#exclusives-hero-section';

    waitForElm('body.spz-1101 ' + heroSelector + ' .hero-wrap').then(function () {
        let heroHTML = setInterval(() => {
            if (!document.querySelector('body.spz-1101 ' + heroSelector + ' .spz-wrap')) {
                document.querySelector('body.spz-1101 ' + heroSelector + '').insertAdjacentHTML('beforeend', `<div class="spz-wrap"><div class="spz-row"><div class="spz-col left-copy">
                    <div class="tp-reviews">
                        <img class="tp-logo" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/swyftfilings/1101/logo-Trustpilot.svg" alt="Trustpilot Logo">
                        <img class="sr-logo" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/swyftfilings/1101/stars-47.svg" alt="4.7 Stars">
                        <b>4.7</b>
                        <p>Based on 6,726 Reviews</p>
                    </div>
                    <h1 class="c-headline">Take action to launch your entity in minutes</h1>
                    <p class="c-subhead">We'll handle the paperwork and set your [entity type] up for success with the most tools for growth, protection, and compliance*.</p>
                    <div class="c-btn-wrap">
                        <a href="#cta" class="spz-btn">Start Now</a>
                    </div>

                    <div class="spz-testimonial"><div class="swiper spz-slider">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="tm-card">
								<div class="tm-body">
									<p class="t-title">Swyft saves me time, time is money!</p>
									<p class="t-desc">They make things simple and take care of the things that I don’t have time for.</p>
                                     <div class="tm-quote desk-only">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726755049/swyftfilings/1101/stars-5_1.svg" alt="Star Rating">
                                    </div>
								</div>
								<div class="tm-footer">
									<div class="tm-write">
                                        <div class="tm-avatar">
                                            <p class="t-date"><b>C.S.</b> , March 26, 2024</p>
                                            <p class="t-verify"><img src="//res.cloudinary.com/spiralyze/image/upload/v1726755049/swyftfilings/1101/icons.svg" alt="Verified"> Verified</p>
                                        </div>
                                        <div class="tm-quote tab-mob">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726755049/swyftfilings/1101/stars-5_1.svg" alt="Star Rating">
                                        </div>
									</div>
								</div>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="tm-card">
								<div class="tm-body">
									<p class="t-title">Swyft saves me time, time is money!</p>
									<p class="t-desc">They make things simple and take care of the things that I don’t have time for.</p>
                                     <div class="tm-quote desk-only">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726755049/swyftfilings/1101/stars-5_1.svg" alt="Star Rating">
                                    </div>
								</div>
								<div class="tm-footer">
									<div class="tm-write">
                                        <div class="tm-avatar">
                                            <p class="t-date"><b>C.S.</b> , March 26, 2024</p>
                                            <p class="t-verify">Verified <img src="//res.cloudinary.com/spiralyze/image/upload/v1726755049/swyftfilings/1101/icons.svg" alt="Verified"></p>
                                        </div>
                                        <div class="tm-quote tab-mob">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726755049/swyftfilings/1101/stars-5_1.svg" alt="Star Rating">
                                        </div>
									</div>
								</div>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="tm-card">
								<div class="tm-body">
									<p class="t-title">Swyft saves me time, time is money!</p>
									<p class="t-desc">They make things simple and take care of the things that I don’t have time for.</p>
                                     <div class="tm-quote desk-only">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726755049/swyftfilings/1101/stars-5_1.svg" alt="Star Rating">
                                    </div>
								</div>
								<div class="tm-footer">
									<div class="tm-write">
                                        <div class="tm-avatar">
                                            <p class="t-date"><b>C.S.</b> , March 26, 2024</p>
                                            <p class="t-verify">Verified <img src="//res.cloudinary.com/spiralyze/image/upload/v1726755049/swyftfilings/1101/icons.svg" alt="Verified"></p>
                                        </div>
                                        <div class="tm-quote tab-mob">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1726755049/swyftfilings/1101/stars-5_1.svg" alt="Star Rating">
                                        </div>
									</div>
								</div>
							</div>
						</div>
					</div>
					</div> 
                    <div class="swiper-btn-next"><img src="//res.cloudinary.com/spiralyze/image/upload/v1726755049/swyftfilings/1101/arrow_left.svg" alt="Previous"></div>
                    <div class="swiper-btn-prev"><img src="//res.cloudinary.com/spiralyze/image/upload/v1726755049/swyftfilings/1101/arrow_right.svg" alt="Next"></div>
				</div>

                    </div>
                <div class="spz-col right-img"></div></div></div>`);

                if (typeof Swiper !== 'undefined' && document.querySelector('.spz-1101 .spz-slider')) {
                    console.log('Swiper loaded');
                    initSlider();
                }
            }
        }, 100);
    });
}

function initSlider() {
    // Initialize Swiper
    var swiper = new Swiper('.spz-1101 .spz-slider', {
        slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
    });
}

//Generic code
function removeTest() {
    if (document.querySelector('.spz-1101')) {
        document.querySelector('.spz-1101').remove();
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