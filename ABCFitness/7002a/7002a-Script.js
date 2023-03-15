(function () {
    const TEST_ENV = {
        name: 'spz-ABC-Webinars-Form-In-Left',
        class: 'spz-7002a', // class will be used in body ex. spz-1001
        date: '14-03-23',
        base_url: 'https://abcfitness.com/resources/webinars-and-videos/state-of-the-industry-whats-next-in-fitness/', // control domain url
        main_class: 'body', // parent class where test is going to be applied
    }

    function loadTest() {
        // Set test class
        document.body.classList.add(TEST_ENV.class);
        waitForElm('.state-of-the-industry-whats-next-in-fitness > main.l-body-wrapper .c-hero__content.l-container .c-hero__info-wrapper .__title-wrapper.c-hero__title-wrapper').then(function () {
            heroContentUpdate();
        });
        document.body.classList.add("loaded");
    }

    function heroContentUpdate() {
        document.querySelector('.state-of-the-industry-whats-next-in-fitness > main.l-body-wrapper .c-hero__content.l-container .c-hero__info-wrapper .c-hero__repeater .c-hero__column:first-child').insertAdjacentHTML('afterbegin', `<h6 class="spz-subtitle">State of the Industry:<br><strong>What’s Next in Fitness</strong></h6>`);
    }

    // Generic
    let url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        let testURL = TEST_ENV.base_url;
        if (url == testURL) {
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
