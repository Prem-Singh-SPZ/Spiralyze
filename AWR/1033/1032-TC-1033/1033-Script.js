
(function () {

    const ENV_1033 = {
        name: '1033_Homepage_redesign',
        class: 'spz-1033',
        date: '15-11-2022',
        base_url: 'https://www.awrusa.com/',
        test_url: 'https://www.awrusa.com/',
        main_class: 'body',
    }
    // var datalayerFlag = false;

    function loadTest() {
        // if (datalayerFlag == false) {
        //     dataLayer.push({
        //         'experimentID': 1032
        //     })
        //     datalayerFlag = true;
        // }
        var cookieName = ENV_1033.name + "-" + ENV_1033.date;
        var cookieValue = "1";
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

        // Set test class
        document.body.classList.add(ENV_1033.class);

        waitForElm(ENV_1033.main_class).then(function (elm) {
            inputFilled('hos-hero-banner .hero-slider[class] .zip-code-search-box hos-google-places .search-field input.search-zipcode');
            loadTest1033();
            formFields();
            waitForElm('.multi-product-card .ngucarousel-items .card .description-heading-text-content div:last-child br').then(function () {
                document.querySelectorAll('.multi-product-card .ngucarousel-items ngu-tile').forEach(function (v, i) {
                    if (v.querySelectorAll('.card .description-heading-text-content div:last-child br').length > 0) {
                        v.querySelector('.card .description-heading-text-content div:last-child br').remove();
                    }
                    jQuery("div.description-heading-text-content > div:contains(\u00a0)").each(function () {
                        jQuery(this).html(jQuery(this).html().replace(/&nbsp;/gi, ""));
                    });
                    v.querySelectorAll("div.description-heading-text-content > div").forEach(function (k, j) {
                        if (k.innerHTML === '') {
                            k.remove();
                        }
                    });
                    var source = v.querySelector(".product-card-details-footer");
                    v.querySelector(".description-heading-text-content").appendChild(source);
                    var source1 = v.querySelector(".description-heading-text-content");
                    v.querySelector(".card").appendChild(source1);
                });
            });
        });

        document.body.classList.add("loaded");
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

    var url = location.href;
    urlCheck(url);
    function urlCheck(url) {
        let testURL = ENV_1033.test_url;
        if (window.location.pathname.indexOf(ENV_1033.test_url) > -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, false)) {
            waitForElm('ENV_1033.main_class').then(function () {
                loadTest();
            });
            window.addEventListener("resize", function () {
                loadTest();
            });
            if (document.querySelectorAll(ENV_1033.main_class).length > 0) {
                loadTest();
            }
            waitForElm('.pace-inactive').then(function () {
                loadTest()
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
        document.body.classList.remove(ENV_1033.class);
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


    function loadTest1033() {
        var heroSection = setInterval(function () {
            if (document.querySelectorAll('.hero-slider').length > 0 && document.querySelector('button[angularticscategory="Header-Login"]')) {

                jQuery('body').addClass(ENV_1033.class)
                if (document.querySelectorAll('.hc-spz').length == 0) {
                    jQuery('.search-box-content .justify-content-center').prepend(`<div class="head-content hc-spz"> <h3 _ngcontent-c8="">With Us, Your Home&#8217;s Protected</h3><h5 _ngcontent-c8="">Make the Smart Choice</h5></div>`)
                    jQuery('.search-box-content').after('<div class="mobile-spz-img"><img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1033/Mobile.jpg" alt="Hero Image" title="Hero Image"/></div>')
                    jQuery('.zip-code-search-box').after('<div class="spz-toll-no">or call <p>855-800-5195</p></div>')
                    jQuery('input.search-zipcode').each(function (index, value) { jQuery(this).attr('placeholder', '') })
                    jQuery('.hero-slider[class] hos-google-places .search-bar .search-field').prepend('<label _ngcontent-c7="" for="selectType">Zip Code</label>')
                }
            }
        });
    }



    // Related to Form Starts
    // Floating label for form fields
    function formFields() {
        const selector = 'body.spz-1033 hos-hero-banner .hero-slider[class] .zip-code-search-box hos-google-places .search-field input.search-zipcode';
        jQuery(document).on('focus', selector, function () {
            jQuery(this).closest('.form-group').addClass('active typing');
        });
        jQuery(document).on('blur focusout keyup', selector, function (e) {
            inputFilled(this);
        });
        jQuery(document).on('focusout', selector, function (e) {
            jQuery(this).closest('.form-group').removeClass('typing');
        });
        jQuery(document).on('blur focusout keyup focus change', selector, function (e) {
            setTimeout(function () {
                jQuery(selector).each(function (i) {
                    isInputValid(this);
                });
            }, 10);

            setTimeout(function () {
                jQuery('.search-zipcode.ng-valid').closest('.form-group').removeClass('error');
            }, 300);
        });
        window.addEventListener('click', function (e) {
            jQuery(selector).each(function (i) {
                if (jQuery(this).closest('.search-zipcode.ng-invalid.is-invalid').length > 0) {
                    jQuery(this).closest('.form-group').addClass('error');
                } else {
                    jQuery(this).closest('.form-group').removeClass('error');
                }
            });
        });
        jQuery('input.search-zipcode').each(function (i) {
            inputFilled(this)
        });
    }


    // Check if input is FILLED
    function inputFilled(el) {
        if (jQuery(el).val() == null || jQuery(el).val() == '') {
            jQuery(el).closest('.form-group').removeClass('active filled');
        } else {
            jQuery(el).closest('.form-group').addClass('active filled');
        }
    }

    // Check if input is VALID
    function isInputValid(el) {
        if (jQuery(el).closest('.search-zipcode.ng-invalid.ng-touched').length > 0) {
            jQuery(el).closest('.form-group').addClass('error');
        } else if (jQuery(el).closest('.search-zipcode.ng-valid').length > 0) {
            jQuery(el).closest('.form-group').removeClass('error');
            jQuery(el).find('.error-ico-spz').remove();
        }
    }
})();
