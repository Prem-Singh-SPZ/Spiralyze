(function () {
    function createtest() {
        document.querySelector("body").classList.add("loading-spz_test");
        document.querySelector("body").classList.add("spz-14001");
        // document.querySelector("body").classList.remove("remove-spz-14001-test");

        waitForElm('body.spz-14001 header + div[data-csk-entry-type="hero"] > .MuiContainer-root').then(function () {
            if (document.querySelector('body .MuiContainer-root .hero-section-14001')) {
                document.querySelector('body .MuiContainer-root .hero-section-14001').remove();
                document.querySelector('body .MuiContainer-root .logo-section-14001').remove();
            }
            let appendHero = setInterval(() => {
                if (document.querySelector('body header + div[data-csk-entry-type="hero"] > .MuiContainer-root')) {
                    if (document.querySelectorAll('body header + div[data-csk-entry-type="hero"] > .MuiContainer-root .hero-section-14001').length == 0) {
                        document.querySelector('body header + div[data-csk-entry-type="hero"] > .MuiContainer-root').insertAdjacentHTML("afterbegin", '<section class="hero-section-14001">\
            <div class="hero-content dis-flex flex-wrap justify-content-between">\
            <div class="hero-left-section">\
            <h1 class="hc-title">Accelerate <span class="dynamic-product-name">SOC 2</span> Compliance. Reduce Time and Cost by 50%.</h1>\
            <div class="star-rating dis-flex align-items-center"><img src="//res.cloudinary.com/spiralyze/image/upload/v1685011156/drata/14001/hero_logo-g2.svg" class="g2-img" alt="G2 Logo" title="G2 Logo" draggable="false"><img src="//res.cloudinary.com/spiralyze/image/upload/v1685011156/drata/14001/rating-4_9.svg" class="sr-img" alt="Ratings" title="Ratings" draggable="false"><span class="sr-number"><strong>4.9</strong> (500+ reviews)</span></div>\
            <div class="list-grp-wrapper">\
            <ul class="list-group">\
            <li class="list-item"><strong>Evidence Collection.</strong> Create <span class="dynamic-product-name">SOC 2</span> documentation in minutes via integrations with your tech stack.</li>\
            <li class="list-item"><strong>Policy Implementation.</strong> Pre-mapped controls, risk assessments, and security training. Automated implementation.</li>\
            <li class="list-item"><strong>Compliance Experts.</strong> Never get stuck. Our compliance experts can walk you through the entire process.</li>\
            </ul>\
            </div>\
            <a href="/demo" id="hero-copy-url" class="hero-btn">Get Started <img src="//res.cloudinary.com/spiralyze/image/upload/v1685011157/drata/14001/cta_arrow.svg" class="button_arrow" alt="CTA Arrow" title="CTA Arrow"></a>\
            </div>\
            <div class="hero-right-section">\
            <picture>\
                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14001/image.webp">\
                <source media="(min-width:300px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14001/Offboarding_Workflow_mobile.png">\
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/14001/image.webp" class="hero-img" alt="Accelerate SOC 2 Compliance. Reduce Time and Cost by 50%." title="Accelerate SOC 2 Compliance. Reduce Time and Cost by 50%.">\
                                </picture>\
            </div>\
            </div>\
            </section>\
            <section class="logo-section-14001">\
            <h2 class="sec-title border-title">Join Over 3,000 Companies Using Drata to Automate Compliance</h2>\
            <div class="ls-logo-group dis-flex flex-wrap">\
            <div class="ls-logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1685011150/drata/14001/abnormal_logo_1.svg" class="ls-img" alt="Abnormal" title="Abnormal"></div>\
            <div class="ls-logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1685011150/drata/14001/airbase_logo_1.svg" class="ls-img" alt="Airbase" title="Airbase"></div>\
            <div class="ls-logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/6001/superhuman.png" class="ls-img" alt="SuperHuman" title="SuperHuman"></div>\
            <div class="ls-logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1685011150/drata/14001/clearbit_logo_1.svg" class="ls-img" alt="Clearbit" title="Clearbit"></div>\
            <div class="ls-logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1685011150/drata/14001/bamboohr_logo_1.svg" class="ls-img" alt="bamboo HR" title="bamboo HR"></div>\
            <div class="ls-logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1685011152/drata/14001/notion_logo_1.svg" class="ls-img" alt="Notion" title="Notion"></div>\
            <div class="ls-logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1685011153/drata/14001/postman_logo_1.svg" class="ls-img" alt="Postman" title="Postman"></div>\
            <div class="ls-logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1685011153/drata/14001/vercel_logo_1.svg" class="ls-img" alt="Vercel" title="Vercel"></div>\
            <div class="ls-logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1685011153/drata/14001/lemonade_logo_1.svg" class="ls-img" alt="Lemonade" title="Lemonade"></div>\
            <div class="ls-logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1685011153/drata/14001/fivetran_logo_1.svg" class="ls-img" alt="Fivetran" title="Fivetran"></div>\
            <div class="ls-logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1685011154/drata/14001/wordpress_logo_1.svg" class="ls-img" alt="Wvip" title="Wvip"></div>\
            <div class="ls-logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1685011155/drata/14001/clearco_logo_1.svg" class="ls-img" alt="Clearco" title="Clearco"></div>\
            </div>\
            </section>');
                        if (window.location.href.indexOf("iso-27001") > -1) {
                            document.querySelectorAll('.dynamic-product-name').forEach(function (v, i) {
                                v.textContent = "ISO 27001";
                            });
                        }
                        if (window.location.href.indexOf("hipaa") > -1) {
                            document.querySelectorAll('.dynamic-product-name').forEach(function (v, i) {
                                v.textContent = "HIPAA";
                            });
                        }
                        if (window.location.href.indexOf("gdpr") > -1) {
                            document.querySelectorAll('.dynamic-product-name').forEach(function (v, i) {
                                v.textContent = "GDPR";
                            });
                        }
                        if (window.location.href.indexOf("soc-2") > -1) {
                            document.querySelectorAll('.dynamic-product-name').forEach(function (v, i) {
                                v.textContent = "SOC 2";
                            });
                        }

                    }
                }
            }, 100);

            setTimeout(() => {
                clearInterval(appendHero);
                // document.querySelector('#hero-copy-url').addEventListener('click', function () {
                //     document.querySelector('header > .MuiContainer-root > .MuiToolbar-root > .MuiList-root .MuiButton-cta1').click();
                // });
            }, 500);

        });
    }

    function removetest() {
        document.querySelector("body").classList.remove("loading-spz_test");
        document.querySelector("body").classList.remove("spz-14001");
        if (document.querySelector('body .MuiContainer-root .hero-section-14001')) {
            document.querySelector('body .MuiContainer-root .hero-section-14001').remove();
            document.querySelector('body .MuiContainer-root .logo-section-14001').remove();
        }
        // document.querySelector("body").classList.add("remove-spz-14001-test");
    }

    history.pushState = (function (f) {
        return function pushState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            var ret = f.apply(this, arguments);
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
        let testURL = '';
        if (window.location.pathname.indexOf("/product/iso-27001") > -1 || window.location.pathname.indexOf("/product/soc-2") > -1 || window.location.pathname.indexOf("/product/hipaa") > -1 || window.location.pathname.indexOf("/product/gdpr") > -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            createtest();
        } else {
            removetest();
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
})();