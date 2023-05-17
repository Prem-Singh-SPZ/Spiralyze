// (function () {
const TEST_ENV = {
    name: 'spz-abc-solutions',
    class: 'spz-6002',
    date: '27-03-2023',
    base_url: 'https://abcfitness.com/',
    test_url: 'solutions',
    main_class: '.c-hero__title-wrapper',
}

function loadTest() {
    // Set test class
    document.body.classList.add(TEST_ENV.class);
    waitForElm('main .c-hero--size-default .c-hero__content').then(function () {
        heroContent();
        if (document.querySelectorAll('.spz-form-title').length == 0) {
            modalUpdate();
        }
    });
    document.body.classList.add("loaded");
    if (document.querySelectorAll('.spz-login-btn').length == 0) {
        headerChange();
    }
}

function heroContent() {
    if (document.querySelectorAll('.hero-section-solutions-spz').length == 0) {
        document.querySelector('main .c-hero--size-default .c-hero__content').insertAdjacentHTML('afterend', `
                <div class="hero-section-solutions-spz">
                    <div class="hs-flex-spz">
                        <div class="hs-content-spz">
                            <div class="ab-ignite">ABC IGNITE</div>
                            <h1 class="hs-title">Increase revenue while streamlining operations with the <strong>#1 club management software</strong></h1>

                            <div class="c-hero__line-wrapper"><span class="c-hero__line"></span></div>

                            <ul class="hs-op-list">
                                <li class="op-li"><strong>Operations.</strong> Let members scan for entry. Automate billing & payment collection. Manage orders, vendors, and products.</li>
                                <li class="op-li"><strong>Sales Automation.</strong> Send text and email reminders based on incomplete registrations, trials, and other sales triggers.</li>
                                <li class="op-li"><strong>CRM.</strong> Track and manage members, leads, check-ins, classes, payments, and more, in one place.</li>
                            </ul>

                            <div class="hs-cta-wrapper">
                                <a class="hs-cta-primary trigger-demo-modal" id="trigger-demo-modal">Request a demo</a>
                            </div>
                        </div>
                        <div class="hs-image-spz">
                            <picture>
                                <source media="(min-width:768px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/6001/assets/club-manage-hero.png">
                                <source media="(min-width:280px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/6001/assets/club-manage-hero-mobile.png">
                                <img class="hs-img" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/6001/assets/club-manage-hero.png" alt="Club management software hero">
                            </picture>
                        </div>
                    </div>
                    <div class="hs-social-proofs-spz">
                        <h4 class="hs-sp-title">Join 20,000+ gyms & studios using ABC Fitness Solutions</h4>
                        <div class="hs-sp-wrapper">
                            <img class="sp-img" src="https://res.cloudinary.com/spiralyze/image/upload/v1676981590/ABCFitnessSolutions/6001/assets/club-fitness-logo.svg" alt="Club Fitness" title="Club Fitness" />
                            <img class="sp-img" src="https://res.cloudinary.com/spiralyze/image/upload/v1676981589/ABCFitnessSolutions/6001/assets/hidden-gym-logo.svg" alt="Hidden Gym" title="Hidden Gym" />
                            <img class="sp-img" src="https://res.cloudinary.com/spiralyze/image/upload/v1676981589/ABCFitnessSolutions/6001/assets/atc-fitness-logo.svg" alt="ATC Fitness" title="ATC Fitness" />
                            <img class="sp-img" src="https://res.cloudinary.com/spiralyze/image/upload/v1676981590/ABCFitnessSolutions/6001/assets/golds-gym-logo.svg" alt="Gold's Gym" title="Gold's Gym" />
                            <img class="sp-img" src="https://res.cloudinary.com/spiralyze/image/upload/v1676981590/ABCFitnessSolutions/6001/assets/workout-time-logo.svg" alt="24-7 Workout Anytime" title="24-7 Workout Anytime" />
                        </div>

                        <div class="hs-sp-img-tab">
                            <picture>
                                <source media="(min-width:767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/6001/assets/abc-solution-social-proof-tab.png">
                                <source media="(min-width:280px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/6001/assets/abc-solution-social-proof-mobile.png">
                                <img class="sp-group-img" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/6001/assets/abc-solution-social-proof-mobile.png" alt="Club manage hero">
                            </picture>
                        </div>
                    </div>
                </div>
            `);
    }
}

function headerChange() {
    document.querySelector('header#header .l-header__inner .l-header__action-links-wrapper--top.c-header-action-links__wrapper').insertAdjacentHTML('beforeend', `<div class="spz-header-cta-container"><div class="spz-header-cta-primary"><a class="c-header-action-links__item c-header-action-links__item--first spz-login-btn" target="">
Login / Support
</a> </div><div class="spz-header-cta-secondary"><a class="c-header-action-links__item c-header-action-links__item--second "  href="https://abcfitness.com/request-a-demo/">
Book A Demo
</a> </div></div>`);
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

function modalUpdate() {
    document.querySelector('#get-in-contact .l-container.c-form__container .c-dbm__content.c-form__content.c-content ').insertAdjacentHTML('afterbegin', `<div class='close-modal'>
    <img src="//res.cloudinary.com/spiralyze/image/upload/v1681809630/ABCFitnessSolutions/6002/assets/close_1.svg" class='close-modal-icon' alt="Close">
   </div><div class="spz-form-title">Schedule a Demo</div>`)

}
//perform click actions
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("trigger-demo-modal")) {
        // this.document.querySelector('#get-in-contact').style.display = 'block';
        this.document.querySelector('#get-in-contact').classList.add('show-modal');
        this.document.body.classList.add('modal-open');
    }
    // console.log(e.target.classList)
    if (e.target.classList.contains("close-modal-icon")) {
        // this.document.querySelector('#get-in-contact').style.display = 'none';
        if (this.document.querySelector('#get-in-contact').classList.contains('show-modal')) {
            this.document.querySelector('#get-in-contact').classList.remove('show-modal');
        }
        if (this.document.body.classList.contains('modal-open')) {
            this.document.body.classList.remove('modal-open');
        }
    }
});


// Generic
history.pushState = (function (f) {
    return function pushState() {
        let ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };
})(history.pushState);
history.replaceState = (function (f) {
    return function replaceState() {
        let ret = f.apply(this, arguments);
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
        setTimeout(function () {
            document.body.classList.add("loaded");

            // Load again if device rotate 
            window.onorientationchange = function () {
                var orientation = window.orientation;
                switch (orientation) {
                    case 0:
                    case 90:
                    case -90: loadTest();
                        break;
                }
            };

        }, 5000);
        if (document.querySelectorAll(TEST_ENV.main_class).length > 0) {
            loadTest();
        }
    } else {
        removeTest();
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
// })();