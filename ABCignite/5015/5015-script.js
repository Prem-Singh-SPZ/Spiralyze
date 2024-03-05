if (window.location.pathname == '/') {
    (function () {

        // Include script file
        function addScript(filename) {
            var head = document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.src = filename;
            script.type = 'text/javascript';
            script.async = 'defer';
            head.append(script);
        }
        // Include CSS file
        function addCSS(filename) {
            var head = document.getElementsByTagName('body')[0];
            var style = document.createElement('link');
            style.href = filename;
            style.type = 'text/css';
            style.rel = 'stylesheet';
            head.append(style);
        }

        // Loading files of 13001
        addCSS('//res.cloudinary.com/spiralyze/raw/upload/v1709562755/ABCFitnessIgnite/5014/code/13001/13001-Style.css');
        addScript('//res.cloudinary.com/spiralyze/raw/upload/v1709562755/ABCFitnessIgnite/5014/code/13001/13001-Script.js');
    })()

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
            init5009();
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


    function init5009() {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('header-stick')) {
            bodyEle.classList.add('header-stick')

            window.addEventListener('scroll', function () {
                var headerNav = document.querySelector(".bkg-header");
                let getScrollposition = window.scrollY;
                if (getScrollposition > headerNav.offsetTop) {
                    headerNav.classList.add('fixed-header')
                } else {
                    if (headerNav.classList.contains('fixed-header')) {
                        headerNav.classList.remove('fixed-header')
                    }
                }
            })

        }

    }

}
else if ((window.location.pathname == '/ihrsa-2024/') || (window.location.pathname == '/ihrsa-vip/')) {
    waitForElm('body').then((elm) => {
        // Include script file
        function addScript(filename) {
            var head = document.getElementsByTagName('body')[0]; var script = document.createElement('script');
            script.src = filename; script.type = 'text/javascript'; script.async = 'defer';
            head.append(script);
        }
        // Include CSS file
        function addCSS(filename) {
            var head = document.getElementsByTagName('body')[0]; var style = document.createElement('link');
            style.href = filename; style.type = 'text/css'; style.rel = 'stylesheet';
            head.append(style);
        }

        // Loading files
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('header-stick')) {
            bodyEle.classList.add('header-stick')
            window.addEventListener('scroll', function () {
                var headerNav = document.querySelector(".bkg-header");
                let getScrollposition = window.scrollY;
                if (getScrollposition > headerNav.offsetTop) {
                    headerNav.classList.add('fixed-header')
                } else {
                    if (headerNav.classList.contains('fixed-header')) {
                        headerNav.classList.remove('fixed-header')
                    }
                }
            })
        }

    });
} else {
    (function () {
        // Include script file
        function addScript(filename) {
            var head = document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.src = filename;
            script.type = 'text/javascript';
            script.async = 'defer';
            head.append(script);
        }
        // Include CSS file
        function addCSS(filename) {
            var head = document.getElementsByTagName('body')[0];
            var style = document.createElement('link');
            style.href = filename;
            style.type = 'text/css';
            style.rel = 'stylesheet';
            head.append(style);
        }

        // Loading files
        addCSS('//res.cloudinary.com/spiralyze/raw/upload/v1709562755/ABCFitnessIgnite/5014/code/13001/13001-Style.css');
        addScript('//res.cloudinary.com/spiralyze/raw/upload/v1709562755/ABCFitnessIgnite/5014/code/13001/13001-Script.js');

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
        bodyEle.classList.add('spz-5014');

        var link5014 = document.createElement('link');
        link5014.type = 'text/css';
        link5014.rel = 'stylesheet';
        link5014.href = '//res.cloudinary.com/spiralyze/raw/upload/v1706623304/ABCFitnessIgnite/5014/code/5014-style.css';
        document.head.appendChild(link5014);

        document.head.insertAdjacentHTML('beforeend', `<style id="5015-css">@media (min-width: 1199.98px) {
            body .site-cta {
              margin-right: 27px;
              margin-left: 12px;
            }
            body #mega-menu-wrap-primary #mega-menu-primary {
              width: 778px;
            }
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

    let ctaBottomHtml = `<div class="spz-bottom-wrap">
		<div class="spz-bottom-container">
			<div class="spz-bottom-content">
				<h2>#1 club & gym management platform</h2>
				<p>Grow your gym 30% while streamlining sales, member engagement, and operations.</p>
				<form>
					<div class="spz-input-wrap">
						<input type="text" class="spz-bottom-input" placeholder="Email" />
						<button class="spz-bottom-cta has-background" type="button">GET A DEMO <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8561 0.238644L16.7737 5.42386C17.0754 5.74206 17.0754 6.25795 16.7737 6.57614L11.8561 11.7614C11.5543 12.0795 11.065 12.0795 10.7633 11.7614C10.4615 11.4432 10.4615 10.9273 10.7633 10.6091L14.3617 6.81478L0.772727 6.81478C0.345961 6.81478 -5.63876e-07 6.44999 -5.24537e-07 6C-4.85197e-07 5.55001 0.345961 5.18522 0.772727 5.18522L14.3617 5.18522L10.7633 1.39092C10.4615 1.07272 10.4615 0.556835 10.7633 0.238644C11.065 -0.0795468 11.5543 -0.0795467 11.8561 0.238644Z" fill="white"/>
							</svg>
						</button>
				</form>
			</div>
		</div>
	</div>`;

    waitForElm('.site-footer').then((elm) => {
        if (document.querySelectorAll('.spz-bottom-wrap').length == 0) {
            elm.insertAdjacentHTML("beforebegin", ctaBottomHtml)
            document.querySelector('.spz-bottom-cta').addEventListener('click', function () {
                if (document.querySelector('#flydown-modal .flydown-modal__form .mktoEmailField')) {
                    document.querySelector('#flydown-modal .flydown-modal__form .mktoEmailField').value = document.querySelector('.spz-bottom-input').value;
                }

                if (document.querySelector(".site-header .modal-flydown-trigger")) {
                    document.querySelector(".site-header .modal-flydown-trigger").click();
                } else if (document.querySelector('.spz-menu-item .spz-demo-btn')) {
                    document.querySelector('.spz-menu-item .spz-demo-btn').click()
                }
            });

            document.querySelector('.spz-bottom-input').addEventListener('focus', function (el) {
                document.querySelector('.spz-input-wrap').classList.add('field-focus');

            });
            document.querySelector('.spz-bottom-input').addEventListener('blur', function (el) {
                document.querySelector('.spz-input-wrap').classList.remove('field-focus');
                if (document.querySelector('.spz-bottom-input').value != '') {
                    document.querySelector('.spz-input-wrap').classList.add('input-filled');
                } else {
                    document.querySelector('.spz-input-wrap').classList.remove('input-filled');
                }
            });
        }
    })

    waitForElm('.modal .modal__overlay').then((elm) => {
        elm.removeAttribute('data-micromodal-close')

        elm.addEventListener('click', function (e) {
            if (e.target == elm) {
                document.querySelector('.modal__close').click();
            }
        })

    })

}

