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
    var allblogsurlstring = "https://www.coveo.com/";
    if (window.location.pathname.indexOf("en/resources/reports/gartner-magic-quadrant-for-insight-engines") > -1) { /* Add " / " to run on all urls */
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url, allblogsurlstring, true)) {
        /* Create Test */
        initTest();
    } else {
        /* Remove Test */
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
    document.body.style.opacity = 1;
}

function initTest() {
    try {
        var config = {
            'default_class': 'spz-coveo-6002',
            'default_cookie': '6002_coveo_gartner_form_on_hero_15022023'
        };
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains(config.default_class)) {
            bodyEle.classList.add(config.default_class);

            /* PG Cookies Add */
            var cookieName = config.default_cookie;
            var cookieValue = '1';
            var myDate = new Date();
            myDate.setDate(myDate.getDate() + 30);
            if (typeof OnetrustActiveGroups !== 'undefined' && OnetrustActiveGroups.includes('C0004')) {
                document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
            }
        }

        let heroHtml = '\
			<div class="spz-coveo-hero">\
	            <div class="spz-coveo-hero-wrapper">\
	            	<svg width="2243" height="2243" viewBox="0 0 2243 2243" fill="none" xmlns="http://www.w3.org/2000/svg" class="spz-diamond-large"><path d="M1098.2 2242.25C1057.56 2242.25 1005.71 2221.19 963.671 2179.09C663.777 1878.77 363.882 1578.45 65.3878 1278.13C-24.2995 1188.31 -21.497 1050.78 72.3947 958.16C366.684 662.047 662.375 367.338 958.065 71.2256C1051.96 -22.8011 1187.89 -24.2044 1283.18 69.8222C1467.93 253.428 1651.98 437.74 1835.32 622.753C1943.24 730.813 2051.14 838.873 2159.05 946.933C2269.75 1057.8 2269.75 1184.1 2160.44 1294.97C1867.55 1588.27 1574.67 1881.59 1281.78 2174.88C1235.54 2219.8 1182.29 2242.25 1098.2 2242.25Z" fill="#2E45BA"/></svg>\
	            	<svg width="853" height="853" viewBox="0 0 853 853" fill="none" xmlns="http://www.w3.org/2000/svg" class="spz-diamond-small"><path d="M417.78 853C402.32 853 382.595 844.989 366.601 828.973C252.515 714.724 138.428 600.475 24.8749 486.228C-9.24404 452.06 -8.17792 399.74 27.5405 364.505C139.495 251.857 251.981 139.743 364.468 27.0957C400.187 -8.67401 451.899 -9.20788 488.151 26.5619C558.433 96.4096 628.449 166.526 698.195 236.908C739.25 278.017 780.299 319.125 821.348 360.234C863.462 402.41 863.462 450.459 821.878 492.634C710.457 604.213 599.037 715.795 487.618 827.372C470.025 844.459 449.767 853 417.78 853Z" fill="#2E45BA"/></svg>\
	                <div class="spz-coveo-hero-inner">\
	                    <div class="spz-coveo-left-col">\
	                        <div class="spz-coveo-hero-details">\
	                            <h5>2022 Edition</h5>\
	                            <h2>Gartner<sup>®</sup> Magic Quadrant<sup>™</sup> for Insight Engines</h2>\
	                            <ul>\
	                                <li><span>Market Overview.</span> Understand Insight Engine technology and the latest developments in the industry.</li>\
	                                <li><span>Evaluation Criteria.</span> 7 key criteria for evaluating vendors including product capabilities, pricing structure, and implementation.</li>\
	                                <li><span>Compare Vendors.</span> See the ranking of the 15 leading vendors. See the analysis of strengths, weaknesses, and pricing.</li>\
	                            </ul>\
	                        </div>\
	                        <div class="spz-coveo-image">\
	                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/Coveo/6002/coveo-hero-figure1.png" alt="Gartner Magic Quadrant for Insight Engines report - Coveo a Leader.">\
	                        </div>\
	                    </div>\
	                    <div class="spz-coveo-right-col">\
	                        <div class="spz-coveo-form-wrapper"></div>\
	                        <div class="spz-coveo-hero-description">\
	                            <div class="spz-coveo-hero-description-wrapper">\
	                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1676462465/Coveo/6002/curved-arrow.svg" class="spz-curved-arrow" alt="Curved Arrow">\
	                                <p>\
	                                    <label>Magic Quadrant<sup>™</sup> research reports</label>\
	                                    <span>A Gartner Magic Quadrant is a culmination of research in a specific market, giving you a wide-angle view of the relative positions of the market’s competitors. By applying a graphical treatment and a uniform set of evaluation criteria, a Magic Quadrant helps you quickly ascertain how well technology providers are executing their stated visions and how well they are performing against Gartner’s market view.</span>\
	                                </p>\
	                                <p>\
	                                	<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/Coveo/6002/coveo-hero-figure1.png" alt="Gartner Magic Quadrant for Insight Engines report - Coveo a Leader." class="spz-hero-figure-tablet">\
	                                    <label>The insight engines category</label>\
	                                    <span>In this latest report, Gartner<sup>®</sup> recognized 15 vendors in the insight engine market, including Coveo. Once referred to as enterprise search, “insight engines combine search with AI to deliver actionable insights derived from the full spectrum of content and data sourced within and external to the enterprise,” according to Gartner<sup>®</sup>.</span>\
	                                </p>\
	                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/Coveo/6002/coveo-hero-figure1.png" alt="Gartner Magic Quadrant for Insight Engines report - Coveo a Leader." class="spz-hero-figure-mobile">\
	                            </div>\
	                        </div>\
	                    </div>\
	                </div>\
	            </div>\
	        </div>\
	        <div class="spz-customers">\
				<div class="spz-customers-wrapper">\
					<h2>Join over 600+ customers from small business to enterprise</h2>\
					<picture>\
						<source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/Coveo/6002/customer-logos-mobile.png">\
						<source media="(max-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/Coveo/6002/customer-logos-tablet.png">\
						<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/Coveo/6002/customer-logos-desktop.png" alt="Customers">\
					</picture>\
				</div>\
			</div>\
			<div class="spz-about-content">\
				<div class="spz-about-content-wrapper">\
					<div class="spz-about-description">\
						<p>Gartner Inc., Magic Quadrant for Insight Engines, Stephen Emmott, Anthony Mullen, David Pidsley, and Tim Nelms, 12th December 2022</p>\
						<p>This graphic was published by Gartner, Inc. as part of a larger research document and should be evaluated in the context of the entire document. The Gartner document is available upon request from Coveo.</p>\
						<p>Gartner does not endorse any vendor, product, or service depicted in its research publications and does not advise technology users to select only those vendors with the highest ratings or other designation. Gartner research publications consist of the opinions of Gartner’s research organization and should not be construed as statements of fact. Gartner disclaims all warranties, expressed or implied, with respect to this research, including any warranties of merchantability or fitness for a particular purpose.</p>\
						<p>Gartner and Magic Quadrant are registered trademarks of Gartner, Inc. and/or its affiliates in the U.S. and internationally and are used herein with permission. All rights reserved.</p>\
						<p><a href="https://www.gartner.com/en/research/methodologies/magic-quadrants-research">Magic Quadrant research methodology</a></p>\
					</div>\
				</div>\
			</div>\
			<div class="spz-footer">\
				<div class="spz-footer-wrapper">\
					<div class="spz-footer-menu-mobile">\
						<ul>\
							<li><a href="#ot_toggleInfoDisplay">Cookies Preferences</a></li>\
							<li><a href="https://www.coveo.com/en/pages/customer-agreement">Legal</a></li>\
							<li><img src="//res.cloudinary.com/spiralyze/image/upload/v1676610595/Coveo/6002/hippa-logo.svg" alt="Hippa Compliant"></li>\
							<li><img src="//res.cloudinary.com/spiralyze/image/upload/v1676610596/Coveo/6002/aicpa-soc-icon.svg" alt="Aicpa Soc"></li>\
							<li>© 2023 Coveo Solutions Inc. | All Rights Reserved.</li>\
						</ul>\
					</div>\
					<div class="spz-footer-menu">\
						<ul>\
							<li>© 2023 Coveo Solutions Inc. | All Rights Reserved.</li>\
							<li><a href="#ot_toggleInfoDisplay">Cookies Preferences</a></li>\
							<li><a href="https://www.coveo.com/en/pages/customer-agreement">Legal</a></li>\
						</ul>\
					</div>\
					<div class="spz-footer-icons">\
						<img src="//res.cloudinary.com/spiralyze/image/upload/v1676610595/Coveo/6002/hippa-logo.svg" alt="Hippa Compliant">\
						<img src="//res.cloudinary.com/spiralyze/image/upload/v1676610596/Coveo/6002/aicpa-soc-icon.svg" alt="Aicpa Soc">\
					</div>\
				</div>\
			</div>\
		';

        /* Check jQuery */
        var checkjQuery = setInterval(function () {
            if (typeof jQuery != 'undefined' && jQuery.fn) {
                clearInterval(checkjQuery);

                waitForElm('div.main').then((elm) => {
                    if (jQuery(elm).find('.spz-coveo-hero').length == 0) {
                        jQuery(elm).prepend(heroHtml);

                        waitForElm('div[am-modal-container] div[am-form]').then((sub_elm) => {
                            if (jQuery('.spz-coveo-form-wrapper').find('div[am-form]').length == 0) {
                                jQuery('.spz-coveo-form-wrapper').append(jQuery(sub_elm));

                                let checkFormFields = setInterval(function () {
                                    if (!jQuery(sub_elm).find('div[am-form-fields]').hasClass('hidden') && jQuery(sub_elm).find('div[am-form-fields]').find('div[parent-name]').find('input').length > 0) {
                                        clearInterval(checkFormFields);
                                        jQuery('.spz-coveo-right-col').addClass('spz-form-expanded');
                                    }
                                }, 1000);

                                let checkFormInputs = setInterval(function () {
                                    if (jQuery(sub_elm).find('div[am-form-fields]').length > 0) {
                                        clearInterval(checkFormInputs);
                                        // Add parent class
                                        jQuery(sub_elm).find('div[am-form-fields]').find('div[am-form-field]').each(function () {
                                            let $this = jQuery(this);
                                            if ($this.find('input').length > 0) {
                                                let fieldName = $this.find('input').attr('name');
                                                $this.parent().attr('parent-name', 'parent_' + fieldName);
                                            }
                                            if ($this.find('select').length > 0) {
                                                let fieldName = $this.find('select').attr('name');
                                                $this.parent().attr('parent-name', 'parent_' + fieldName);
                                            }
                                        });
                                    }
                                }, 500);
                            }
                        });
                    }
                });
            }
        });
        document.body.style.opacity = 1;
    }
    catch (error) {
        document.body.style.opacity = 1;
    }
    finally {
        document.body.style.opacity = 1;
    }
}

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