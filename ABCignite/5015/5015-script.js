if (window.location.pathname == '/') {
    // 5010 Winner test code
    var url = location.href;
    urlCheck(url);

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

    window.addEventListener("locationchange", function () {
        url = location.href;
        urlCheck(url);
    });

    function urlCheck(url) {
        var allblogsurlstring = "https://abcfitness.com/";
        if (window.location.pathname.indexOf("/") > -1) { // Add " / " to run on all urls
            allblogsurlstring = window.location.href;
        }
        if (isSameUrl(url, allblogsurlstring, true)) {
            init5014();
        } else {
            // Remove Test
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
}
else if ((window.location.pathname == '/ihrsa-2024/') || (window.location.pathname == '/ihrsa-vip/')) {
    waitForElm('body').then((elm) => {
    });
} else {
    (function () {
        let path = window.location.pathname;

        waitForElm('body').then((elm) => {
            if (variant5014Urls.indexOf(path) !== -1 || variant5014BlogUrls.indexOf(path) !== -1 || variant5014EbooksUrls.indexOf(path) !== -1 || variant5014WebinarsUrls.indexOf(path) !== -1) {
                init5014();
            }
        });

    })()
}

// Lists of 5014 Varaiant URLs

let variant5014Urls = [
    '/contact/',
    '/our-story/',
    '/request-a-demo/',
    '/ignite/',
    '/abc-articles/',
    '/our-team/',
    '/resources/ebooks-and-articles/',
    '/sales-contact/',
    '/vendor-partners/swift-financial/',
    '/resources/webinars-and-videos/',
    '/our-mission/',
    '/resources/press-releases/'
]

let variant5014BlogUrls = [
    '/abc-articles/the-top-4-ways-ai-has-impacted-the-fitness-industry/',
    '/abc-articles/americas-top-fitness-clubs/',
    '/abc-articles/gym-debt-collection/',
    '/abc-articles/employee-portal-is-here/',
    '/abc-articles/people-powering-business-success/',
    '/abc-articles/competitive-advantage/',
    '/abc-articles/gym-membership-sales/',
    '/abc-articles/the-impact-of-virtual-reality-on-the-fitness-industry/',
    '/abc-articles/transform-your-member-experience/',
    '/abc-articles/cost-of-owning-a-gym/',
    '/abc-articles/hiring-right-how-to-create-a-vision-and-mission-for-your-fitness-club/',
    '/abc-articles/thoma-bravo-completes-acquisition-of-abc-financial/',
    '/abc-articles/health-club-software-provider-teams-with-anytime-fitness/',
    '/abc-articles/gym-marketing-strategies/',
    '/abc-articles/most-common-causes-of-gym-failures/',
    '/abc-articles/how-to-connect-with-gen-z/',
    '/abc-articles/full-service-billing/',
    '/abc-articles/datatrak-your-solution-for-the-best-club-management-software/',
    '/abc-articles/gym-promotions/',
    '/abc-articles/gym-layout/',
    '/abc-articles/important-message-regarding-chargebacks/',
    '/abc-articles/workout-anytime-expands-relationship-with-abc-fitness-solutions-through-deployment-of-abc-ignite/',
    '/abc-articles/one-team-to-turn-fitness-visions-into-seamless-reality/',
    '/abc-articles/gym-products/'
]

let variant5014EbooksUrls = [
    '/ebook/crack-the-code-member-experience-for-gym-retention/',
    '/ebook/10-unexpected-insights-into-gen-z/',
    '/ebook/the-gen-z-fitness-consumer/',
    '/ebook/choosing-gym-management-software/',
    '/ebook/how-to-optimize-personalization-using-fitness-personas/',
    '/ebook/crack-the-code-to-sales/',
    '/ebook/four-keys-to-retention/',
    '/ebook/fitness-industry-trends-and-insights/',
    '/ebook/the-data-behind-member-motivation/',
    '/ebook/recession-proof-your-fitness-business/',
    '/ebook/crack-the-code-operational-efficiency-for-your-gym-business/',
    '/ebook/essential-gym-kpis-to-measure-success/',
    '/ebook/five-strategies-for-gym-lead-generation/',
    '/ebook/the-wellness-journey-a-shift-to-well-being/',
    '/ebook/the-new-gym-member-onboarding-guide/',
    '/ebook/club-management-conversion-calendar-countdown/',
    '/ebook/the-next-big-box-gym-consumer/',
    '/ebook/crm-and-lead-management-fundamentals-for-gyms/',
    '/ebook/get-shredded-get-wedded/',
    '/ebook/free-fitness-marketing-strategies-for-the-holidays/',
    '/ebook/download-17-gym-sales-email-templates/',
    '/ebook/black-friday-cyber-monday-gym-marketing-guide/',
    '/ebook/ten-summer-activations-to-grow-gym-membership/',
    '/ebook/motivations-of-the-next-fitness-consumer/'
]

let variant5014WebinarsUrls = [
    '/webinars/2024-fitness-forecast/',
    '/webinars/10-unexpected-insights-into-gen-z/',
    '/webinars/future-fitness-industry-trends/',
    '/webinars/create-a-data-driven-programming-and-pricing-strategy/',
    '/webinars/abc-ignite-product-tour/',
    '/webinars/crack-the-code-member-experience/',
    '/webinars/club-management-for-operational-efficiency/',
    '/webinars/crack-the-code-drive-sales-revenue/',
    '/webinars/2023-ihrsa-recap/',
    '/webinars/retention-starts-now/',
    '/webinars/innovative-software-for-gym-management/',
    '/webinars/embrace-tech-unleash-your-growth-and-member-experience/',
    '/webinars/state-of-the-industry-whats-next-in-fitness/',
    '/webinars/sales-strategies-to-boost-gym-revenue/',
    '/webinars/fitness-personas-leveraging-data-to-maximize-engagement/',
    '/webinars/where-motivation-gets-personal-data-insights-on-consumer-motivations/',
    '/webinars/three-keys-to-gym-membership-sales-success-masterclass/',
    '/webinars/maximizing-retention-with-new-gym-member-onboarding-strategies/',
    '/webinars/technology-strategies-to-lower-costs-and-accelerate-growth-lifetime-value/',
    '/webinars/marketing-masterclass-holiday-gym-promotions-at-your-club/',
    '/webinars/high-impact-member-engagement-strategies/',
    '/webinars/innovating-for-whats-next-in-fitness/',
]



function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

// 5014 Start
function init5014() {

    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-5015')) {
        bodyEle.classList.add('spz-5015');

        document.head.insertAdjacentHTML('beforeend', `<style id="5015-css">@media (min-width: 1199.98px) {
            body .site-cta {
              margin-right: 27px;
              margin-left: 12px;
            }
            // body #mega-menu-wrap-primary #mega-menu-primary {
            //   width: auto !important;
            // }
            body #mega-menu-wrap-primary #mega-menu-primary > li.mega-menu-item > a.mega-menu-link {
              white-space: nowrap;
            }
          }</style>`);

        //5015 changes
        waitForElm('#mega-menu-primary .mega-menu-grid.mega-has-icon').then((elm) => {
            if (document.querySelectorAll('#mega-menu-primary .mega-menu-grid.mega-has-icon .spz-custom-menu').length == 0) {
                document.querySelector('#mega-menu-primary .mega-menu-grid.mega-has-icon').insertAdjacentHTML("beforebegin", `<li class="spz-custom-menu mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout"><a class="mega-menu-link" href="https://client.abcfinancial.com/(S(24medb3ygyhq2u45e1hpzqnd))/default.aspx" target="_blank">MEMBER LOGIN</a></li>`)
            }
        });

        if (window.location.pathname == '/') {
            bodyEle.classList.add('border-footer');
        }
    }
}

