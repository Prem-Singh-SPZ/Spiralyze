(function () {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-4002')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('spz-4002');

            //preload an image in the <head>
            document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1696558645/Jack%20Henry/4002/tooltip_bg.svg" as="image">`
            );

            if (location.href.indexOf('resources/articles/elevate-your-website-for-the-digital-age') > -1) {
                waitForElm('body.hs-site-page #hs_cos_wrapper_resource_individual .resource-individual-section').then(function (elm) {
                    document.querySelectorAll('body.hs-site-page #hs_cos_wrapper_resource_individual .resource-individual-section .body-content h4')[1].insertAdjacentHTML('beforebegin', blogBannerSection);
                    document.querySelectorAll('body.hs-site-page #hs_cos_wrapper_resource_individual .resource-individual-section .body-content p')[24].insertAdjacentHTML('beforebegin', blogBannerSection);
                    document.querySelectorAll('body.hs-site-page #hs_cos_wrapper_resource_individual .resource-individual-section .body-content .blog-banner-section')[1].classList.add('spz-second');
                    document.querySelectorAll('body.hs-site-page #hs_cos_wrapper_resource_individual .resource-individual-section .body-content .blog-banner-section .btn.spz-btn').forEach(function name(elem) {
                        elem.setAttribute('href', '/contact-us/sales?form=outcomes-improving-financial-health');
                    })
                });
            }

            else {
                waitForElm('body.hs-blog-post #hs_cos_wrapper_blog_individual #hs_cos_wrapper_post_body').then(function (elm) {
                    loadTest4002();
                });
            }

            //On hover of .info-icon addclass show-tool-tip to .spz-tooltip
            waitForElm('body .spz-tooltip').then(function (elm) {

                document.querySelectorAll('.info-icon img').forEach(function (elem) {
                    elem.addEventListener('mouseenter', function () {
                        elem.closest('.blog-rating').querySelector('.spz-tooltip').classList.add('show-tool-tip');
                    });
                    elem.addEventListener('mouseleave', function () {
                        elem.closest('.blog-rating').querySelector('.spz-tooltip').classList.remove('show-tool-tip');
                    });
                });

                // document.querySelectorAll('.spz-tooltip').forEach(function (elem) {
                //     elem.addEventListener('mouseenter', function () {
                //         elem.classList.add('show-tool-tip');
                //     });
                //     elem.addEventListener('mouseleave', function () {
                //         elem.classList.remove('show-tool-tip');
                //     });
                // });
            });
        }
    });

    function loadTest4002() {
        if (document.querySelectorAll('body.hs-blog-post #hs_cos_wrapper_blog_individual .blog-individual-section .blog-banner-section').length == 0) {
            document.querySelector('body.hs-blog-post #hs_cos_wrapper_blog_individual .blog-individual-section .social-share-wrapper').insertAdjacentHTML('afterend', blogBannerSection);

            if (location.href.indexOf('now-is-the-time-to-add-ai-and-ml-to-combat-fraudsters') > -1) {
                document.querySelectorAll('body.hs-blog-post #hs_cos_wrapper_blog_individual #hs_cos_wrapper_post_body h2')[1].insertAdjacentHTML('beforebegin', blogBannerSection);
            }

            else if (location.href.indexOf('3-lessons-i-learned-by-rebranding-a-45-year-old-company') > -1) {
                document.querySelectorAll('body.hs-blog-post #hs_cos_wrapper_blog_individual #hs_cos_wrapper_post_body h3')[1].insertAdjacentHTML('beforebegin', blogBannerSection);
            }

            else if (location.href.indexOf('passing-the-acams-exam-a-first-hand-experience-fintalk') > -1) {
                document.querySelectorAll('body.hs-blog-post #hs_cos_wrapper_blog_individual #hs_cos_wrapper_post_body h3')[1].insertAdjacentHTML('beforebegin', blogBannerSection);
            }

            else if (location.href.indexOf('five-ways-lenders-can-grow-portfolios-during-slower-economic-cycles') > -1) {
                document.querySelector('body.hs-blog-post #hs_cos_wrapper_blog_individual #hs_cos_wrapper_post_body p:nth-child(2) span').insertAdjacentHTML('beforebegin', blogBannerSection);
            }

            else if (location.href.indexOf('how-to-email-an-executive-six-tips-from-senior-management') > -1) {
                document.querySelectorAll('body.hs-blog-post #hs_cos_wrapper_blog_individual #hs_cos_wrapper_post_body h2')[1].insertAdjacentHTML('beforebegin', blogBannerSection);
            }
        }
    }

    const blogBannerSection = `<div class="blog-banner-section"><div class="blog-banner-container"><div class="blog-banner-content"><h6>See how 7,500 banks and credit unions use Jack Henry to modernize operations</h6><div class="blog-rating"><img src="//res.cloudinary.com/spiralyze/image/upload/v1696836931/Jack%20Henry/4002/Frame_5599.svg" alt="rating"><div class="reviews">
    <b>4.8</b> (2,596 Reviews) <icon class="info-icon"><img src="//res.cloudinary.com/spiralyze/image/upload/v1696558646/Jack%20Henry/4002/info-icon.svg" alt="info icon"></icon></div><div class="spz-tooltip"><span>Ratings from <u>featuredcustomers.com</u></span></div></div></div><div class="blog-banner-cta"><a class="btn spz-btn" href="https://www.jackhenry.com/contact-us/other">Contact Us</a></div></div></div>`;

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

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari')
    }
})();