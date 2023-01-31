var url = location.href;
urlCheck(url);
var lotteLoad = 0;
var lotteConfigLoad = 0;
var lotteMobileConfigLoad = 0;
var isSlickLoad = 0;
var isMenuOpen = 0;

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
    var allblogsurlstring = "https://www.awrusa.com";
    if (window.location.pathname.indexOf("https://www.awrusa.com") > -1) { // Add " / " to run on all urls
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url, allblogsurlstring, false)) {
        initTest();
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
    document.body.classList.remove('spz-1034-V2');
    if (document.querySelectorAll('.spz-1034-V2-main').length > 0) {
        document.querySelector('.spz-1034-V2-main').remove();
    }
    if (document.querySelectorAll('.spz-menu-active').length > 0) {
        document.querySelector('.spz-menu-active').classList.remove('spz-menu-active');
    }
    if (isMenuOpen == 1) {
        jQuery('#backdrop-sidemenu').trigger('click');
        isMenuOpen = 0;
    }
    // Site Logo Reset
    const logo_url = localStorage.getItem('logoURL');
    const logo = document.querySelector('hos-navigation-bar .logo.base-logo img');
    logo.src = logo_url;
}
function initTest() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-1034-V2')) {
        bodyEle.classList.add('spz-1034-V2');

        // PG Cookies Add
        var cookieName = '1018_awr_home_redesign_v3';
        var cookieValue = '1';
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
    }

    isMenuOpen = 1;

    // Add Lotte JS
    var lotteScript = document.createElement('script');
    lotteScript.src = '//res.cloudinary.com/spiralyze/raw/upload/v1669792264/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/animation-scripts/lottie.min.js';
    lotteScript.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(lotteScript);

    var lotteConfigScript = document.createElement('script');
    lotteConfigScript.src = '//res.cloudinary.com/spiralyze/raw/upload/v1669790991/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/animation-scripts/lotte-config.js';
    lotteConfigScript.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(lotteConfigScript);

    var lotteMobileConfigScript = document.createElement('script');
    lotteMobileConfigScript.src = '//res.cloudinary.com/spiralyze/raw/upload/v1672746094/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/animation-scripts/Anim_Mobile.json';
    lotteMobileConfigScript.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(lotteMobileConfigScript);

    // Add Slick
    var slickStyle = document.createElement('link');
    slickStyle.rel = 'stylesheet';
    slickStyle.type = 'text/css';
    slickStyle.href = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
    document.getElementsByTagName('HEAD')[0].appendChild(slickStyle);

    var slickScript = document.createElement('script');
    slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
    slickScript.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(slickScript);

    slickScript.onload = function () {
        isSlickLoad = 1;
    };
    lotteScript.onload = function () {
        lotteLoad = 1;
    };
    lotteConfigScript.onload = function () {
        lotteConfigLoad = 1;
    };
    lotteMobileConfigScript.onload = function () {
        lotteMobileConfigLoad = 1;
    };

    // Check jquery
    let checkJq = setInterval(function () {
        if (jQuery.fn) {
            clearInterval(checkJq);

            // Replace header logo
            replaceHeaderLogo();

            // Append Custom sections
            waitForElm('hos-body').then(() => {
                // if (jQuery('hos-body').length > 0) {
                if (jQuery('.spz-1034-V2-main').length == 0) {
                    jQuery('hos-hero-banner').after('<div class="spz-1034-V2-main"></div>');
                }

                // Add contact in side menu
                waitForElm('hos-right-navigation-menu').then(() => {
                    let menuHtml = '\
								<div class="spz-1034-V2-menu-contact">\
								    <div class="spz-1034-V2-menu-contact-wrapper">\
								        <a href="tel:18558005195" class="spz-1034-V2-menu-contact-cta"><hr>Contact Us 24/7<hr><strong>1.855.800.5195</strong></a>\
								    </div>\
								</div>\
							';
                    if (jQuery('hos-right-navigation-menu .spz-1034-V2-menu-contact').length == 0) {
                        jQuery('hos-right-navigation-menu .head-box').after(menuHtml);
                    }
                });

                // Check zipcode form
                waitForElm('.spz-1034-V2-main').then((elm) => {
                    // Hero Section
                    if (jQuery('.spz-1034-V2-hero').length == 0) {
                        // Hero
                        jQuery(elm).append(initHero());
                        // Append Form
                        waitForElm('hos-google-places').then((elm) => {
                            if (jQuery('.spz-1034-V2-hero-sticky-form-append hos-google-places').length == 0) {
                                jQuery('.spz-1034-V2-hero-sticky-form-append').append(jQuery(elm));
                                jQuery('.search-zipcode').attr('placeholder', 'Zip Code');
                                if (document.querySelectorAll('.search-bar .search-field.form-group .spz-error-icon').length == 0) {
                                    document.querySelector('.search-bar .search-field.form-group').insertAdjacentHTML('beforeend', `<img src="https://res.cloudinary.com/spiralyze/image/upload/v1675063706/AWR/1034/assets/warning_1.svg" alt="Error Icon" class="spz-error-icon">`);
                                }

                                waitForElm('.search-bar.search-panel .get-started-btn').then((elm) => {
                                    document.querySelector('.search-bar.search-panel .get-started-btn').addEventListener('click', function () {
                                        console.log('heelo')
                                        waitForElm('.search-field.form-group.is-invalid').then((elm) => {
                                            document.querySelector('.search-field.form-group.is-invalid .spz-error-icon').addEventListener('click', function () {
                                                document.querySelector('.search-bar.search-panel .error-zipcode.invalid-error').style.display = 'block';
                                            })
                                        });
                                    })
                                    document.querySelector('.search-bar.search-panel input.search-zipcode').addEventListener('click', function () {
                                        console.log('heelo')
                                        waitForElm('.search-field.form-group:not(.is-invalid)').then((elm) => {
                                            document.querySelector('.search-bar.search-panel .error-zipcode:last-child').style.display = 'none';
                                        });
                                    })
                                });

                            }
                        });
                        // Init Animation
                        let checkLotteiMobile = setInterval(function () {
                            replaceHeaderLogo();
                            if (lotteMobileConfigLoad == 1 && lotteLoad == 1) {
                                clearInterval(checkLotteiMobile);
                                var paramsMobile = {
                                    container: document.getElementById('lottie-mobile'),
                                    renderer: 'svg',
                                    loop: true,
                                    autoplay: true,
                                    animationData: mobileAnimation
                                };

                                var animMobile;

                                animMobile = lottie.loadAnimation(paramsMobile);
                            }
                            if (lotteLoad == 1 && lotteConfigLoad == 1) {
                                var params = {
                                    container: document.getElementById('lottie'),
                                    renderer: 'svg',
                                    loop: true,
                                    autoplay: true,
                                    animationData: animationData
                                };

                                var anim;

                                anim = lottie.loadAnimation(params);
                            }
                        }, 500);

                        // Toggle Menu
                        jQuery('.spz-1034-V2 #navTrigger a').unbind('click').click(function () {
                            if (jQuery('.spz-1034-V2 hos-right-navigation-menu .sidebar-menu.spz-menu-active').length > 0) {
                                jQuery('.spz-1034-V2 hos-right-navigation-menu .sidebar-menu').removeClass('active spz-menu-active');
                                jQuery('.spz-1034-V2 #backdrop-sidemenu').hide();
                                jQuery('body').removeClass('sidebar-open');
                                jQuery('header').removeClass('spz-menu-open');
                                jQuery('.spz-active-parent-menu [aria-expanded="true"]').attr('aria-expanded', false);
                                jQuery('.spz-active-parent-menu').removeClass('spz-active-parent-menu');
                            }
                            else {
                                jQuery('.spz-1034-V2 hos-right-navigation-menu .sidebar-menu').addClass('spz-menu-active');
                                jQuery('header').addClass('spz-menu-open');
                            }
                        });
                        jQuery(document).on('click', '.spz-1034-V2 .accordmenucls', function () {
                            let $thisMenu = jQuery(this);
                            jQuery('.spz-active-parent-menu').removeClass('spz-active-parent-menu');
                            if (jQuery(this).hasClass('accordmenucls') && !(jQuery(this).hasClass('collapsed'))) {
                                $thisMenu.parent().addClass('spz-active-parent-menu');
                            }
                            else {
                                $thisMenu.parent().removeClass('spz-active-parent-menu');
                            }
                        });
                        jQuery('body').click(function (e) {
                            if (e.target.classList.contains('backdrop-sidemenu') == true) {
                                jQuery('.spz-active-parent-menu').removeClass('spz-active-parent-menu');
                                jQuery('.spz-1034-V2 hos-right-navigation-menu .sidebar-menu').removeClass('active spz-menu-active');
                            }
                        });
                    }
                });
            });
        }
    }, 500);

    let headerChanged = setInterval(() => {
        replaceHeaderLogo();
    }, 200);
    setTimeout(() => {
        clearInterval(headerChanged);
    }, 5000);
}
function initHero() {
    let htmlD = '\
		<section class="spz-1034-V2-hero">\
			<div class="spz-1034-V2-hero-wrapper">\
				<div id="lottie"></div>\
				<div id="lottie-mobile"></div>\
				<div class="spz-1034-V2-hero-sticky-info">\
					<div class="spz-1034-V2-hero-sticky-info-wrapper">\
						<p class="spz-1034-V2-hero-info-title-small">Make the smart choice</p>\
						<h2 class="spz-1034-V2-hero-info-title">With Us, Your Home&#8217;s Protected</h2>\
						<div class="spz-1034-V2-hero-sticky-form">\
							<h3 class="spz-1034-V2-hero-sticky-form-title">Find Your Protection Plan</h3>\
							<div class="spz-1034-V2-hero-sticky-form-append"></div>\
						</div>\
					</div>\
				</div>\
			</div>\
		</section>\
	';

    return htmlD;
}

function replaceHeaderLogo() {
    // Replace header logo
    waitForElm('.spz-1034-V2 .logo.base-logo').then((elm) => {
        jQuery('.logo.base-logo img:not(.spz-1034-V2-mobile-logo)').attr({ src: '//res.cloudinary.com/spiralyze/image/upload/v1669783657/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/Logo.svg', alt: 'AWR Logo' });

        if (jQuery('.spz-1034-V2-mobile-logo').length == 0) {
            jQuery('.logo.base-logo').append('<img src="//res.cloudinary.com/spiralyze/image/upload/v1670216808/AWR/1018%20%7C%20AWR%20%7C%20Home%20%7C%20Redesign%20V3/Logo-short.svg" alt="AWR Logo" class="spz-1034-V2-mobile-logo">');
        }
        jQuery('.logo.base-logo img').css('opacity', 1);
    });
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