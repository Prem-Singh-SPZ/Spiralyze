(function () {
    const TEST_ENV = {
        name: 'spz-ABC-Contact-Triage',
        class: 'spz-8003', // class will be used in body ex. spz-1001
        date: '13-04-23',
        base_url: 'https://abcfitness.com', // control domain url
        main_class: 'body', // parent class where test is going to be applied
    }

    function loadTest() {
        // Set test class
        document.body.classList.add(TEST_ENV.class);
        waitForElm('main.l-body-wrapper section.c-hero .c-hero__content.l-container .c-hero__repeater').then(function () {
            if (document.querySelectorAll('.spz-login-btn').length == 0) {
                headerChange();
            }
            if (location.href.indexOf('contact') > - 1) {
                heroContentUpdate();
                modalUpdate();
            }
        });
        document.body.classList.add("loaded");
    }

    function heroContentUpdate() {
        document.querySelector('main.l-body-wrapper section.c-hero .c-hero__content.l-container').insertAdjacentHTML('afterbegin', `<div class="spx-hero-cards">
        <div class="hero-cards-title">
            <h6>Contact Us</h6>
        </div>
        <div class="hero-cards-subtitle">
            <h4>Which of the following best describes you?</h4>
        </div>
        <div class="cards-section">
            <div class="cards-container">
                <div class="spz-card">
                    <div class="card-image">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/8003/assets/Left-card.png"
                            alt="Gym Owner">
                    </div>
                    <div class="card-content">
                        <h5 class="card-title">Gym Owner</h5>
                        <p class="card-desc">I&#8217;m a gym owner or manager, and I&#8217;m considering ABC Fitness for my
                            facility.</p>
                        <div class="card-cta">
                            <button id="trigger-demo-modal" class="trigger-demo-modal">REQUEST YOUR DEMO<img
                                    src="https://res.cloudinary.com/spiralyze/image/upload/v1681363642/ABCFitnessSolutions/8003/assets/Arrow_2_Stroke.svg"
                                    alt="Arrow"></button>
                        </div>
                        <div class="card-info">
                            <p>Current customer? Need support?</p>
                            <p>Call <a href="tel:+18772225767">877-222-5767</a> or email <a
                                    href="mailto:customercare@abcfitness.com">help@abcfitness.com</a></p>
                        </div>
                    </div>
                </div>
                <div class="spz-card">
                    <div class="card-image">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/8003/assets/Right-card.png"
                            alt="Gym Member">
                    </div>
                    <div class="card-content">
                        <h5 class="card-title">Gym Member</h5>
                        <p class="card-desc">I&#8217;m a gym member and need help with my account. </p>
                        <div class="card-cta">
                            <a href="mailto:customercare@abcfitness.com"><button>EMAIL MEMBER SUPPORT <img
                                        src="https://res.cloudinary.com/spiralyze/image/upload/v1681363642/ABCFitnessSolutions/8003/assets/Arrow_2_Stroke.svg"
                                        alt="Arrow"></button></a>
                        </div>
                        <div class="card-info">
                            <p>Or log into your <a href="https://www.myiclubonline.com/">MYiCLUBonline account</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
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
        document.querySelector('#request-a-demo .l-container.c-tabs-form__container .c-tabs-form.c-tabs-form--top .c-tabs-form__tabs-content-container #c-tabs-form-tab-1 .c-tabs-form__content-wrapper').insertAdjacentHTML('afterbegin', `<div class='close-modal'><img src="https://res.cloudinary.com/spiralyze/image/upload/v1681367535/ABCFitnessSolutions/8003/assets/Close-icon.svg" class='close-modal-icon' alt="close-icon"></div>`)

    }

    //perform click actions
    window.addEventListener("click", function (e) {
        if (e.target.classList.contains("trigger-demo-modal")) {
            this.document.querySelector('#request-a-demo').style.display = 'block';
            this.document.body.classList.add('modal-open');
        }
        if (e.target.classList.contains("close-modal-icon")) {
            this.document.querySelector('#request-a-demo').style.display = 'none';
            if (this.document.body.classList.contains('modal-open')) {
                this.document.body.classList.remove('modal-open');
            }
        }
    });


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