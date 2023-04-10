(function () {
    const TEST_ENV = {
        name: 'spz-home-hero-5002',
        class: 'spz-5002',
        date: '16-03-23',
        test_url: 'https://abcfitness.com/',
        main_class: 'body',
    }

    function loadTest() {
        var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
        var cookieValue = "1";
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

        // Set test class
        document.body.classList.add(TEST_ENV.class);
        waitForElm('main').then(function () {
            heroContentUpdate();
        });
        document.body.classList.add("loaded");

        document.querySelector('head').insertAdjacentHTML('beforeend', `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap" rel="stylesheet">`);
    }

    function heroContentUpdate() {
        document.querySelector('body > main.l-body-wrapper section.c-hero .c-hero__content .c-hero__info-wrapper').insertAdjacentHTML('afterend', `
        <div class="interface-hero-spz">
            <picture>
                <source media="(min-width:1200px)"
                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/5002/hero-interface.png">
                <source media="(min-width:768px)"
                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/5002/hero-interface.png">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/5002/hero-interface-mob.png"
                    alt="Interface hero" title="Interface hero">
            </picture>
        </div>`);

        document.querySelector('body > main.l-body-wrapper section.c-hero .c-hero__content .c-hero__info-wrapper').insertAdjacentHTML('beforeend', `
            <div class="spz-hero-container">
                <a href="https://abcfitness.com/request-a-demo/" class="c-btn c-btn--primary btn-hero-spz">Request a demo</a>
                <div class="hero-bottom-content">
                    <p>Join 20,000+ gyms & studios using ABC Fitness Solutions</p>
                    <picture>
                        <source media="(min-width:1200px)"
                            srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/5002/social-proof.png">
                        <source media="(min-width:768px)"
                            srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/5002/social-proof-tab.png">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/5002/social-proof-mob.png"
                            alt="Social Icons" title="Social Icons">
                    </picture>
                </div>
            </div>

            <div class="border-rainbow-spz">
                <div class="rainbow-bg-spz"></div>
            </div>`);
    }

    function headerNavChange() {
        document.body.classList.add('spz-5001-header');
        document.querySelector('header#header .l-header__inner .l-header__action-links-wrapper--top.c-header-action-links__wrapper').insertAdjacentHTML('beforeend', `
            <div class="spz-header-cta-container">
                <div class="spz-header-cta-primary">
                    <a class="c-header-action-links__item c-header-action-links__item--first spz-login-btn" target="">LogIn / Support </a>
                </div>
                <div class="spz-header-cta-secondary">
                    <a class="c-header-action-links__item c-header-action-links__item--second" href="https://abcfitness.com/request-a-demo/">Book A Demo</a>
                </div>
            </div>`);

        waitForElm('header#header .l-header__inner .l-header__action-links-wrapper--top.c-header-action-links__wrapper .spz-header-cta-container').then(function () {
            moveElement('header#header .l-header__inner .l-header__action-links-wrapper--top.c-header-action-links__wrapper .c-header-action-links__items-wrapper', '.spz-header-cta-container .spz-header-cta-primary');
        });

        waitForElm('.spz-header-cta-container .c-header-action-links__items-wrapper').then(function () {
            cloneElement('.spz-header-cta-container', 'header#header');
            cloneElement('.spz-header-cta-container', 'header#header .l-header__inner .l-header__container.l-header__container--bottom .l-header__action-links-wrapper--not-top');


        });

        waitForElm('header#header > .spz-header-cta-container .c-header-action-links__items-wrapper').then(function () {
            document.querySelectorAll('.c-header-action-links__items-wrapper').forEach(function (v, i) {
                v.insertAdjacentHTML('afterbegin', `<p>Your Account</p>`);
            });
        });
    }

    // Generic
    let url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        let testURL = TEST_ENV.test_url;
        if (url == testURL) {
            waitForElm(TEST_ENV.main_class).then(function () {
                loadTest();
            });
        } else {
            removeTest();
        }

        if (document.querySelectorAll('.spz-login-btn').length == 0) {
            headerNavChange();
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
