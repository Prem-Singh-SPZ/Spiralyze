(function () {


    const TEST_ENV = {
        name: 'spz-ABC-Additional-CTA',
        class: 'spz-5001-V1', // class will be used in body ex. spz-1001
        date: '15-02-23',
        base_url: 'https://abcfitness.com', // control domain url
        main_class: 'body', // parent class where test is going to be applied
    }

    function loadTest() {
        var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
        var cookieValue = "1";
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

        // Set test class
        document.body.classList.add(TEST_ENV.class);
        if (document.body.classList.contains('home')) {

            waitForElm('.l-body-wrapper .c-hero__content').then(function () {
                document.querySelector('.l-body-wrapper .c-hero__content .c-hero__info-wrapper .c-hero__subtitle.c-subtitle').insertAdjacentHTML('beforeend', `<a class="book-a-demo-btn c-grid-simple__btn c-btn--internal-type  c-btn c-btn--primary " target="_blank" href="https://abcfitness.com/request-a-demo/">
            BOOK A DEMO
        </a>`);
            });
        }
        headerChange();

        document.body.classList.add("loaded");
    }

    function headerChange() {
        waitForElm('header#header .l-header__inner .l-header__action-links-wrapper--top.c-header-action-links__wrapper .c-header-action-links__items-wrapper').then(function () {
            document.querySelector('header#header .l-header__inner .l-header__action-links-wrapper--top.c-header-action-links__wrapper .c-header-action-links__items-wrapper').insertAdjacentHTML('beforeend', `<a class="book-a-demo-btn" target="_blank" href="https://abcfitness.com/request-a-demo/">
        BOOK A DEMO
    </a>`);

            document.querySelector('header#header .l-header__inner .l-header__container--bottom .l-header__container-inner .c-header-action-links__items-wrapper').insertAdjacentHTML('beforeend', `<a class="book-a-demo-btn c-header-action-links__item" target="_blank" href="https://abcfitness.com/request-a-demo/">
        Book A Demo
    </a>`);

            document.querySelector('header#header .l-header__inner .l-header__action-links-wrapper--top.c-header-action-links__wrapper .c-header-action-links__items-wrapper').classList.add('spz-btn-container');
        });

        waitForElm('header#header .l-header__action-links-wrapper--top.c-header-action-links__wrapper .spz-btn-container').then(function () {
            cloneElement('.spz-btn-container', 'header#header');
        });
        // waitForElm('header#header > .spz-header-cta-container .c-header-action-links__items-wrapper').then(function () {
        //     document.querySelectorAll('.c-header-action-links__items-wrapper').forEach(function (v, i) {
        //         v.insertAdjacentHTML('afterbegin', `<p>Your Account</p>`);
        //     });
        // });
    }


    // Generic
    let url = location.origin;
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

    function cloneElement(source, target) {
        if (document.querySelector(source) && document.querySelector(target)) {
            const sc = document.querySelector(source);
            const clone = sc.cloneNode(true);
            document.querySelector(target).appendChild(clone);
        }
    }

    function moveElement(sourceElm, targetLoc) {
        const f = document.createDocumentFragment();
        if (document.querySelector(sourceElm) != null) {
            f.appendChild(document.querySelector(sourceElm));
            document.querySelector(targetLoc).appendChild(f);
        }
    }

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari')
    }
})();
