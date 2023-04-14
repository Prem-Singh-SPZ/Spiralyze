(function () {
    const TEST_ENV = {
        name: 'spz-Demo',
        class: 'spz-9001', // class will be used in body ex. spz-1001
        date: '12-04-23',
        base_url: 'https://abcfitness.com/request-a-demo/', // control domain url
        main_class: 'body', // parent class where test is going to be applied
    }

    function loadTest() {
        // Set test class
        document.body.classList.add(TEST_ENV.class);
        waitForElm('.l-body-wrapper .c-hero > .c-hero__content.l-container .c-hero__subtitle.c-subtitle').then(function () {
            if (document.querySelectorAll('.spz-hero-container').length == 0) {
                heroContentUpdate();
            }
        });
        document.body.classList.add("loaded");

        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
        if (isAndroid) {
            document.querySelector('body > main.l-body-wrapper > section.c-hero > .c-hero__content.l-container > .c-hero__info-wrapper > .c-hero__repeater .c-hero__column:last-child').classList.add('android');
        }
    }

    function heroContentUpdate() {
        document.querySelector('.l-body-wrapper .c-hero > .c-hero__content.l-container').insertAdjacentHTML('afterbegin', `<div class="spz-header">
        <a href="https://abcfitness.com"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1681281097/ABCFitnessSolutions/9001/assets/Header-Logo.svg" alt="ABC Fitness" class="header-logo"> </a> </div>`);

        document.querySelector('.l-body-wrapper .c-hero > .c-hero__content.l-container .c-hero__info-wrapper .c-hero__repeater .c-hero__column:first-child').insertAdjacentHTML('afterbegin', `<div class="spz-hero-container">
        <div class="hero-top-content">
        <div class="hero-left-summary">
        <p>#1 CLUB & GYM MANAGEMENT SOFTWARE</p>
        <h6>Automate sales, operations, and member management.<br><span> Grow your gym by 30%.</span></h6>
        <ul><li> <span>Operations.</span> Enable scan for entry. Process new joins and product sales via POS. Automate billing & payment collection.</li><li>
        <span>Sales Automation.</span> Send text & email reminders based on incomplete registrations, trials, and other sales triggers. Let members book classes via mobile app.
        </li><li> <span>CRM.</span> Track & manage members, leads, check-ins, classes, payments, and more. Let members update their billing info.</li> </ul>
        </div>
        </div>
        </div>`);
        document.querySelector('.l-body-wrapper .c-hero > .c-hero__content.l-container .c-hero__info-wrapper').insertAdjacentHTML('beforeend', ` <div class="hero-bottom-content">
        <p>Join 24,000+ gyms & studios using ABC Fitness Solutions</p>
        <div class="partner-img-container">
        <picture>
            <source media="(min-width:1024px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/9001/assets/Logos-desktop.png">
            <source media="(min-width:767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/9001/assets/Logos-tablet.png">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/9001/assets/Logos-mobile.png" alt="Partner Logos">
        </picture>
        </div>
        </div>`);
        document.querySelector('.l-body-wrapper .c-hero > .c-hero__content.l-container').insertAdjacentHTML('afterend', `<div class="spz-footer"><div class="footer-container"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1681281097/ABCFitnessSolutions/9001/assets/Footer-Logo.svg" alt="ABC Fitness" class="footer-logo"> <p class="copyright-text">© 2023 ABC Fitness Solutions. All rights reserved.</p></div></div>`);
    }

    // Generic
    let url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        let testURL = TEST_ENV.base_url;
        if (url == testURL || location.href.indexOf('request-a-demo') > -1) {
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
