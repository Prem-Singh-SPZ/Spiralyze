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
                        <img src="https://storage.googleapis.com/optimizely-images/clients/swyftfilings/1101/trustpilot-logo.png" alt="Trustpilot Logo">
                        <img src="https://storage.googleapis.com/optimizely-images/clients/swyftfilings/1101/trustpilot-stars.png" alt="Trustpilot Stars">
                        <b>4.5</b>
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
								<div class="tm-quote">
									<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_768_webp_2.webp" alt="Quote">
								</div>
								<div class="tm-body">
									<p class="t-title">Swyft saves me time, time is money!</p>
									<p class="t-desc">They make things simple and take care of the things that I don’t have time for.</p>
								</div>
								<div class="tm-footer">
									<div class="tm-write">
										<p class="t-date"><b>C.S.</b> , March 26, 2024</p>
										<p class="t-verify">Verified</p>
									</div>
								</div>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="tm-card">
								<div class="tm-quote">
									<picture>
										<source media="(min-width: 1025px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_1441.webp" type="image/webp">
										<source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_768_webp.webp" type="image/webp">
										<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_768_webp_2.webp" alt="Quote">
									</picture>
								</div>
								<div class="tm-body">
									<p>We can make a better, more accurate business plan. It engages our sales associates. And we&#8217;ve reduced costs.
</p>
								</div>
								<div class="tm-footer">
									<div class="tm-logo">
										<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/shaw_logo_1440.webp" alt="Shaw">
									</div>
									<div class="tm-write">
										<p class="name">Melissa Crawley</p>
										<p class="designation">Director Sales Compensation</p>
									</div>
								</div>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="tm-card">
								<div class="tm-quote">
									<picture>
										<source media="(min-width: 1025px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_1441.webp" type="image/webp">
										<source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_768_webp.webp" type="image/webp">
										<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/quotemark_768_webp_2.webp" alt="Quote">
									</picture>
								</div>
								<div class="tm-body">
									<p>Sellers can see the expected payment on a daily level. It&#8217;s a great way to help motivate them to do more and more.
</p>
								</div>
								<div class="tm-footer">
									<div class="tm-logo">
										<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/varicent/1005/magyar_telekom_logo_1440.webp" alt="Magyar Telekom">
									</div>
									<div class="tm-write">
										<p class="name">Sebestyén Melega</p>
										<p class="designation">Incentive Development and Operations CoE Lead</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					</div> 
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
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
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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