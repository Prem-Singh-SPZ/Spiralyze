
(function () {
    const TEST_ENV = {
        name: 'spz-mem-exit-intent-4008',
        class: 'spz-4008-tc',
        date: '16-05-23',
        test_url: 'solutions/member-management',
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

        // Append popup content
        appendPopup();

        document.body.classList.add("loaded");
    }

    function heroContentUpdate() {
        if (document.querySelectorAll('.spz-hero-container').length == 0) {

            document.querySelector('body > main.l-body-wrapper section.c-hero .c-hero__content .c-hero__info-wrapper').insertAdjacentHTML('beforeend', `
                <div class="spz-hero-container">
                    <div class="hero-top-content">
                        <div class="hero-left-summary">
                            <h1>Automate member management with the <strong>#1 gym membership software</strong></h1>
                            <ul>
                                <li><span>All-in-one.</span> Track and manage members, leads, check-ins, classes, payments, and more, in one place.</li>
                                <li><span>Operations.</span> Enable scan for entry. Automate payments. Get reports on revenue, classes, memberships, and more.</li>
                                <li><span>Text reminders.</span> Automatically send text & email reminders for upcoming training appointments.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <a href="https://abcfitness.com/request-a-demo/" class="c-btn c-btn--primary btn-hero-spz">Request a demo</a>
                </div>`);
        }
    }

    function headerNavChange() {
        document.body.classList.add('spz-5001-header');
        document.querySelector('header#header .l-header__inner .l-header__action-links-wrapper--top.c-header-action-links__wrapper').insertAdjacentHTML('beforeend', `
            <div class="spz-header-cta-container">
                <div class="spz-header-cta-primary">
                    <a class="c-header-action-links__item c-header-action-links__item--first spz-login-btn" target="">Login / Support </a>
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
        if (window.location.pathname.indexOf(TEST_ENV.test_url) > -1) {
            testURL = window.location.href;
        }

        if (isSameUrl(url, testURL, true)) {
            waitForElm(TEST_ENV.main_class).then(function () {
                loadTest();
            });
        } else {
            removeTest();
        }

        if (document.querySelectorAll('.spz-login-btn').length == 0) {
            headerNavChange()
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


    // #4008 Exit popup 
    let coolDown = false;
    let count = 0;
    const coolDownTime = 30; // in seconds

    // Append popup content to body
    function appendPopup() {
        // Append popup content
        document.body.insertAdjacentHTML('beforeend',
            `<div class="exit-modal-sec-spz">
                <div class="ems-content">
                    <a href="javascript:void(0)" class="ems-close-btn">
                        <img class="close-ico default" src="//res.cloudinary.com/spiralyze/image/upload/v1683890461/ABCFitnessSolutions/4008/close.svg" alt="Close" title="Close" />
                        <img class="close-ico tab-only active" src="//res.cloudinary.com/spiralyze/image/upload/v1683889838/ABCFitnessSolutions/4008/close-hover.svg" alt="Close" title="Close" />
                        <img class="close-ico desk-xl-only active" src="//res.cloudinary.com/spiralyze/image/upload/v1684834712/ABCFitnessSolutions/4008/close-hover-wh.svg" alt="Close" title="Close" />
                    </a>
                    <div class="ems-content-inner">
                        <div class="ems-content-inner-left">
                            <div class="hero-left-summary">
                                <h1><strong>Grow your gym 30%</strong> by automating ops, sales, & member management.</h1>
                                <ul>
                                    <li><span>Sales.</span> Send text & email reminders based on incomplete registrations, trials, and other sales triggers</li>
                                    <li><span>Operations.</span> Process new joins and product sales via POS. Automate billing & payment collection.</li>
                                    <li><span>CRM.</span> Track & manage members, leads, check-ins, classes, payments, and more. Let members update their billing info.</li>
                                </ul>
                                <a href="https://abcfitness.com/request-a-demo/" class="c-btn c-btn--primary btn-hero-spz">GET A DEMO</a>
        
                                <div class="hero-logo-slider">
                                    <p>Join 24,000+ gyms & studios using ABC Fitness Solutions</p>
                                    <div class="partner-img-container swiper-container">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/club_fitness_1.webp" alt="ClubFitness" title="ClubFitness">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/hidden_gym_1.webp" alt="Hidden Gym" title="Hidden Gym">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/atc_fitness_1.webp" alt="ATC Fitness" title="ATC Fitness">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/golds_gym_1.webp" alt="Gold's Gym" title="Gold's Gym">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/workout_anytime_1.webp" alt="24-7 Workout Anytime" title="24-7 Workout Anytime">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/club_fitness_1.webp" alt="ClubFitness" title="ClubFitness">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/hidden_gym_1.webp" alt="Hidden Gym" title="Hidden Gym">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/atc_fitness_1.webp" alt="ATC Fitness" title="ATC Fitness">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/golds_gym_1.webp" alt="Gold's Gym" title="Gold's Gym">
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/workout_anytime_1.webp" alt="24-7 Workout Anytime" title="24-7 Workout Anytime">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ems-content-inner-right">
                            <picture>
                                <source media="(min-width:1281px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/desktop.webp">
                                <source media="(min-width:768px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/tablet.webp">
                                <source media="(min-width:300px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/mobile.webp">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/4008/desktop.webp"
                                    alt="Overall Growth" title="Overall Growth" class="ems-img">
                            </picture>
                        </div>
                    </div>
                </div>
                <div class="ems-tab-spacer"></div>
            </div>`);

        // Add class to body
        document.body.classList.add('spz-4008');

        // Close popup
        document.querySelector('.ems-close-btn').addEventListener('click', function () {
            showExitPopup(false);
            coolDown = true;

            count = count + 1;

            setTimeout(() => {
                coolDown = false;
            }, coolDownTime * 1000);
        });
    }

    // Show/Hide popup
    function showExitPopup(isVisible = false) {
        if (isVisible) {
            document.body.classList.add('active');

            // if window height is less than 768px, add top: 3px to .exit-modal-sec-spz .ems-content
            // Added this because the popup was not visible from top and close icon was getting cut off
            if (window.innerHeight < 768 && window.innerWidth > 1280) {
                document.querySelector('.exit-modal-sec-spz .ems-content').style.top = '3px';
            }
        } else if (!isVisible) {
            document.body.classList.remove('active');
        }
    }

    // Show popup when mouse leaves the window (to top only)
    function exitIntentPopup() {
        var mouseY = 0;
        var topValue = 10;
        window.addEventListener("mouseout", function (e) {
            mouseY = e.clientY;

            if (mouseY <= topValue && !coolDown && count < 2) {
                showExitPopup(true);
            }
        }, false);
    }
    exitIntentPopup();

    // Show popup after {coolDownTime} seconds in tablet and mobile
    if (window.innerWidth < 1280) {
        setTimeout(() => {
            showExitPopup(true);
            coolDown = true;
        }, coolDownTime * 1000);
    }
})();

