(function () {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-3001')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('spz-3001');

            waitForElm('span#hs_cos_wrapper_flexible_column .hero-section .animate').then(function (elm) {
                document.querySelector('span#hs_cos_wrapper_flexible_column .hero-section .animate').insertAdjacentHTML('beforeend', `<div class="mt-3"><a href="https://www.jackhenry.com/contact-us" class="btn btn-white spz-hero-btn">Contact Us</a></div>`);

                
                document.querySelectorAll('.dynamic-scroller-section .container .sticky-super-row .sticky-sidekick-inner').forEach(function (elem, i) {
                    elem.querySelector('.ssk div.mt-3').insertAdjacentHTML('beforeend', `<a href="https://www.jackhenry.com/contact-us" class="btn btn-vibrant-cobalt spz-scroller-btn">Contact Us</a>`);
                    if(elem.querySelector('.ssk div.mt-3 .btn-ghost')){
                        elem.querySelector('.ssk div.mt-3 .btn-ghost').classList.add('btn-text-link');
                        elem.querySelector('.ssk div.mt-3 .btn-ghost').classList.remove('btn-arrow');
                    }
                })

                document.querySelectorAll('.dynamic-scroller-section .container .mobile-cards .card').forEach(function (elem, i) {
                    elem.querySelector('.card-inner div.mt-3').insertAdjacentHTML('beforeend', `<a href="https://www.jackhenry.com/contact-us" class="btn btn-vibrant-cobalt spz-scroller-btn">Contact Us</a>`);
                    if(elem.querySelector('.card-inner div.mt-3 .btn-ghost')){
                        elem.querySelector('.card-inner div.mt-3 .btn-ghost').classList.add('btn-text-link');
                        elem.querySelector('.card-inner div.mt-3 .btn-ghost').classList.remove('btn-arrow');
                    }
                })
            });
        }
    });

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