(function () {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-4002')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('spz-4002');

            if (location.href.indexOf('resources/articles/elevate-your-website-for-the-digital-age') > -1) {
                waitForElm('body.hs-site-page #hs_cos_wrapper_resource_individual .resource-individual-section').then(function (elm) {
                    document.querySelectorAll('body.hs-site-page #hs_cos_wrapper_resource_individual .resource-individual-section .body-content h4')[1].insertAdjacentHTML('beforebegin', blogBannerSection);
                    document.querySelectorAll('body.hs-site-page #hs_cos_wrapper_resource_individual .resource-individual-section .body-content p')[23].insertAdjacentHTML('beforebegin', blogBannerSection);
                    document.querySelectorAll('body.hs-site-page #hs_cos_wrapper_resource_individual .resource-individual-section .body-content .blog-banner-section')[1].classList.add('spz-second');
                    
                });
            }

            else {
                waitForElm('body.hs-blog-post #hs_cos_wrapper_blog_individual #hs_cos_wrapper_post_body').then(function (elm) {
                    loadTest4002();
                });
            }
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

    const blogBannerSection = `<div class="blog-banner-section"><div class="blog-banner-container"><div class="blog-banner-content"><h6>See how 8,000+ banks and credit unions use Jack Henry to modernize operations</h6><div class="blog-rating"><img src="//res.cloudinary.com/spiralyze/image/upload/v1692709279/jackhenry/4002/frame_5595.svg" alt="rating"><div class="reviews">
    <span>4.5</span> (246 Reviews)</div></div></div><div class="blog-banner-cta"><a class="btn spz-btn" href="https://www.jackhenry.com/contact-us/other">Contact Us</a></div></div></div>`;

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