(function () {
    const TEST_ENV = {
        name: 'spz-pricing-testimonials-14004',
        class: 'spz-14004',
        date: '03-10-2024',
        test_url: 'https://abcfitness.com/pricing/',
        main_class: 'main#main',
    }

    function loadTest() {
        var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
        var cookieValue = "1";
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

        // Set test class
        document.body.classList.add(TEST_ENV.class);
        waitForElm(TEST_ENV.main_class).then(function () {
            document.querySelector(TEST_ENV.main_class).classList.add('spz-14004-testimonial');

            document.querySelector('.pricing-new__form-title').textContent = 'Get a Demo';
            appendTestimonial();
        });
        document.body.classList.add("loaded");
    }

    function appendTestimonial() {
        document.querySelector('.pricing-new__form').insertAdjacentHTML('afterend', `
            <div class="spz-testimonial-wrapper">
                <div class="spz-testimonial__content">
                    <div class="spz-testimonial__content__quote">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/abcfitness/14004/quote.svg" alt="Quote">
                    </div>
                    <div class="spz-testimonial__content__text">ABC Fitness's daily reports help me tremendously. They paint a daily picture for me of what is going on and what is needed by location. Without the certainty from those numbers, I would not have opened two more gyms.</div>
                    <div class="spz-testimonial__content__author">
                        <span class="st-name">Deuce Robertson</span>
                        <span class="st-position">CEO, 4:13 Fitness Center</span>
                    </div>
                </div>
            </div>`);
    }

    // Generic
    let url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        let testURL = TEST_ENV.test_url;
        if (window.location.pathname.indexOf(TEST_ENV.test_url) > -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, false)) {
            waitForElm(TEST_ENV.main_class).then(function () {
                loadTest();
            });
        } else {
            removeTest();
        }
    }

    function removeTest() {
        document.body.classList.remove(TEST_ENV.class);
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

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari');
    }
})();
