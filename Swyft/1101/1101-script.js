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


const pageContent = {
    testimonials: [
        {
            title: "Swyft saves me time, time is money!",
            desc: "They make things simple and take care of the things that I don&#8217;t have time for.",
            init: "C.S.",
            date: "March 26, 2024",
        },
        {
            title: "Swyft Filings sets the bar!!",
            desc: "SWYFT FILINGS set the bar for me! I will choose them for every business endeavor!",
            init: "Ari",
            date: "May 7,  2024",
        },
        {
            title: "Great Customer Service",
            desc: "Setting up a LLC was simple and customer service is eager to help you find solutions.",
            init: "Paolo G",
            date: "May 31, 2024",
        },
    ],
    priceCards: [
        {
            planName: "Basic",
            price: "$0",
            desc: "I only want to get started with the basics to form my business",
            ctaCopy: "File my <span> Basic </span> LLC for Free",
            ctaLink: "https://cart.swyftfilings.com/?cn=sonic&entity=LLC",
            listTitle: "Includes:",
            listItems: [
                {
                    copy: "State filing service",
                },
                {
                    copy: "Articles of organization to make your business official",
                },
                {
                    copy: "A check to confirm that your business name is available before we file",
                },
                {
                    copy: "Lifetime support from real humans via phone, chat, and email",
                },
            ],
        },
        {
            planName: "Standard",
            price: "$199",
            desc: "I want the essentials to help launch my business in compliance",
            ctaCopy: "File my <span> Standard </span> LLC",
            ctaLink: "https://cart.swyftfilings.com/?cn=sonic",
            isPopular: true,
            listTitle: "Everything in <span>Basic</span>, plus:",
            listItems: [
                {
                    copy: "Mandatory federal BOI compliance filing ",
                    isSwift: true,
                },
                {
                    copy: "250+ attorney-crafted legal forms for business",
                    isSwift: true,
                },
                {
                    copy: "Privacy protection with a professional business address",
                    isSwift: true,
                },
                {
                    copy: "An operating agreement to protect you from liability",
                },
                {
                    copy: "An EIN to file taxes, open a bank account, and hire",
                },
            ],
        },
        {
            planName: "Premium",
            price: "$299",
            desc: "I want everything my business needs at the best value",
            ctaCopy: "File my <span> Premium </span> LLC",
            ctaLink: "https://cart.swyftfilings.com/?cn=sonic&entity=LLC",
            listTitle: "Everything in <span>Standard</span>, plus:",
            listItems: [
                {
                    copy: "Personalized guidance from a business attorney in your state",
                    isSwift: true,
                },
                {
                    copy: "Legal review of your contracts and documents ",
                    isSwift: true,
                },
                {
                    copy: "Same-day processing to push your application to the front of the line",
                },
                {
                    copy: "1-year web.com domain subscription and resources to build your website",
                    isSwift: true,
                },
            ],
        },
    ],
};

let testimonialHTML = '';
pageContent.testimonials.forEach((testimonial) => {
    testimonialHTML += `<div class="swiper-slide">
        <div class="tm-card">
            <div class="tm-body">
                <p class="t-title">${testimonial.title}</p>
                <p class="t-desc">${testimonial.desc}</p>
                <div class="tm-quote desk-only">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1726755049/swyftfilings/1101/stars-5_1.svg" alt="Star Rating">
                </div>
            </div>
            <div class="tm-footer">
                <div class="tm-write">
                    <div class="tm-avatar">
                        <p class="t-date"><b>${testimonial.init}</b> , ${testimonial.date}</p>
                        <p class="t-verify"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/swyftfilings/1101/icons.svg" alt="Verified"> Verified</p>
                    </div>
                    <div class="tm-quote tab-mob">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/swyftfilings/1101/stars-5_1.svg" alt="Star Rating">
                    </div>
                </div>
            </div>
        </div>
    </div>`;
});

let priceCardHTML = '';
pageContent.priceCards.forEach((priceCard) => {
    priceCardHTML += `
        ${priceCard.isPopular ? `<div class="price-card active"><div class="pc-popular">Most Popular</div>` : '<div class="price-card">'}
        <div class="price-card-head">
            <div class="price-card-title">
                <p class="pc-title">${priceCard.planName}</p>
                <p class="pc-desc">${priceCard.desc}</p>
            </div>
            <div class="pc-price-wrapper">
                <p class="pc-price">${priceCard.price}</p>
                <p class="pc-tag">+government fees</p>
            </div>
        </div>
        <div class="pc-cta-wrapper">
            <a href="${priceCard.ctaLink}" class="spz-btn spz-1101-tracking">${priceCard.ctaCopy}</a>
        </div>
        <div class="price-card-body">
            <div class="pc-list">
                <p class="pc-list-title">${priceCard.listTitle}</p>
                <ul class="pc-list-items">`;
    priceCard.listItems.forEach((listItem) => {
        priceCardHTML += `<li class="pc-list-item">
                    <p>${listItem.copy}
                    ${listItem.isSwift ? `<img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/swyftfilings/1101/v2_1.svg" alt="Swift Exclusive">` : ''}
                </p></li>`;
    });
    priceCardHTML += `</ul>
            </div>
        </div>
    </div>`;
});


function createTest() {
    document.body.classList.add('spz-1101');

    let heroSelector = window.location.pathname.indexOf("/marketing/llc/") > -1 ? '#marketing-llc-hero-section' : '#exclusives-hero-section';

    waitForElm('body.spz-1101 ' + heroSelector + ' .hero-wrap').then(function () {
        let heroHTML = setInterval(() => {
            if (!document.querySelector('body.spz-1101 ' + heroSelector + ' .spz-wrap')) {
                document.querySelector('body.spz-1101 ' + heroSelector + '').insertAdjacentHTML('beforeend', `<div class="spz-wrap"><div class="spz-row"><div class="spz-col left-copy">
                    <div class="tp-reviews">
                        <div class="tp-logo-parent"><img class="tp-logo" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/swyftfilings/1101/logo-Trustpilot.svg" alt="Trustpilot Logo"></div>
                        <img class="sr-logo" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/swyftfilings/1101/stars-47.svg" alt="4.7 Stars">
                        <b>4.7</b>
                        <p>Based on 6,726 Reviews</p>
                    </div>
                    <h1 class="c-headline">Take action to launch your entity in minutes</h1>
                    <p class="c-subhead">We'll handle the paperwork and set your [entity type] up for success with the most tools for growth, protection, and compliance*.</p>
                    <div class="c-btn-wrap">
                        <a href="https://www.swyftfilings.com/choose-a-business-structure/" class="spz-btn spz-1101-tracking">Start Now</a>
                    </div>

                    <div class="spz-testimonial"><div class="swiper spz-slider">
					<div class="swiper-wrapper">
                        ${testimonialHTML}
					</div>
					</div> 
                    <div class="swiper-btn-next"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <rect x="-0.5" y="0.5" width="31" height="31" rx="15.5" transform="matrix(-1 0 0 1 31.6667 0)" stroke="#FAFCFF"/>
                        <path d="M18.7971 22.0286L12.7685 16L18.7971 9.97131" stroke="#FAFCFF" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></div>
                    <div class="swiper-btn-prev"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <rect x="1.16675" y="0.5" width="31" height="31" rx="15.5" stroke="#FAFCFF"/>
                        <path d="M14.5364 22.0286L20.565 16L14.5364 9.97131" stroke="#FAFCFF" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></div>
				</div>

                    </div>
                <div class="spz-col right-img"></div></div></div>`);

                if (typeof Swiper !== 'undefined' && document.querySelector('.spz-1101 .spz-slider')) {
                    initSlider();
                }

                //for landing page only
                if (window.location.pathname.indexOf("/marketing/llc/") > -1) {
                    document.querySelector('.spz-1101 #marketing-llc-hero-section').insertAdjacentHTML('afterend', `<div class="spz-price-section"><div class="price-card-row">${priceCardHTML}</div></div>`);
                }
            }
        }, 100);
    });
}

function initSlider() {
    // Initialize Swiper
    var swiper = new Swiper('.spz-1101 .spz-slider', {
        slidesPerView: 1,
        spaceBetween: 24,
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
    if (document.querySelector('.spz-wrap')) {
        document.querySelector('.spz-wrap').remove();
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