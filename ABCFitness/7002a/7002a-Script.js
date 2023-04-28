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
        waitForElm('body > main.l-body-wrapper .c-hero__content.l-container .c-hero__info-wrapper .__title-wrapper.c-hero__title-wrapper').then(function () {
            if (document.querySelectorAll('.spz-form-title').length == 0) {
                heroContentUpdate();
            }
        });
        document.body.classList.add("loaded");
    }

    function heroContentUpdate() {
        if (location.href.indexOf('state-of-the-industry-whats-next-in-fitness') > -1) {
            document.querySelector('body > main.l-body-wrapper .c-hero__content.l-container .c-hero__info-wrapper .c-hero__repeater .c-hero__column:first-child').insertAdjacentHTML('afterbegin', `<h6 class="spz-subtitle">State of the Industry:<br><strong>What&#8217;s Next in Fitness</strong></h6>`);

            if (document.querySelectorAll('body > main.l-body-wrapper .c-hero__content.l-container .c-hero__info-wrapper .c-hero__repeater .c-hero__column:first-child .c-hero__column-content p:last-child').length > 0) {
                document.querySelector('body > main.l-body-wrapper .c-hero__content.l-container .c-hero__info-wrapper .c-hero__repeater .c-hero__column:first-child .c-hero__column-content p:last-child').textContent = `...and more!`;
            }
        }

        document.querySelector('body > main.l-body-wrapper .c-hero__content.l-container .c-hero__info-wrapper .c-hero__repeater .c-hero__column:last-child .c-hero__column-content > p').insertAdjacentHTML('afterbegin', `<div class="spz-form-title"><h6>Get instant access to the webinar</h6></div>`);

        document.querySelector('body > main.l-body-wrapper .c-hero__content.l-container .c-hero__info-wrapper .c-hero__repeater').insertAdjacentHTML('afterend', `           <div class="hs-social-proofs-spz">
        <h4 class="hs-sp-title">Join 20,000+ gyms & studios using ABC Fitness Solutions</h4>
        <div class="hs-sp-wrapper">
            <img class="sp-img" src="//res.cloudinary.com/spiralyze/image/upload/v1681908006/ABCFitnessSolutions/7002a/assets/Club-fitness.svg" alt="Club Fitness" title="Club Fitness" />
            <img class="sp-img" src="//res.cloudinary.com/spiralyze/image/upload/v1681908005/ABCFitnessSolutions/7002a/assets/Hidden-gym.svg" alt="Hidden Gym" title="Hidden Gym" />
            <img class="sp-img" src="//res.cloudinary.com/spiralyze/image/upload/v1681908005/ABCFitnessSolutions/7002a/assets/ATC-fitness.svg" alt="ATC Fitness" title="ATC Fitness" />
            <img class="sp-img" src="//res.cloudinary.com/spiralyze/image/upload/v1681908005/ABCFitnessSolutions/7002a/assets/Golds-gym.svg" alt="Gold's Gym" title="Gold's Gym" />
            <img class="sp-img" src="//res.cloudinary.com/spiralyze/image/upload/v1681908006/ABCFitnessSolutions/7002a/assets/Workout-anytime.svg" alt="24-7 Workout Anytime" title="24-7 Workout Anytime" />
        </div>

        <div class="hs-sp-img-tab">
            <picture>
                <source media="(min-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/6001/assets/abc-solution-social-proof-tab.png">
                <source media="(min-width:280px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/6001/assets/abc-solution-social-proof-mobile.png">
                <img class="sp-group-img" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/6001/assets/abc-solution-social-proof-mobile.png" alt="Club manage hero">
            </picture>
        </div>
    </div>`);

        if (location.href.indexOf('sales-and-marketing-strategies-to-create-your-own-membership-rush') > -1 || location.href.indexOf('gym-marketing-for-long-term-success') > -1 || location.href.indexOf('delivering-the-total-fitness-experience') > -1 || location.href.indexOf('convert-more-gym-members-with-2-quick-hits') > -1 || location.href.indexOf('digital-member-engagement-at-scale') > -1 || location.href.indexOf('introducing-abc-performance-insights') > -1 || location.href.indexOf('using-a-fitness-crm-to-improve-the-member-experience') > -1 || location.href.indexOf('be-the-option-members-always-choose') > -1 || location.href.indexOf('recruiting-and-hiring-the-best-personal-trainers') > -1 || location.href.indexOf('profitable-and-engaging-personal-training-program-design') > -1 || location.href.indexOf('using-technology-to-design-personal-training-programs') > -1 || location.href.indexOf('fitness-industry-market-research-the-next-big-box-gym-consumer') > -1 || location.href.indexOf('maximizing-your-gym-marketing-budget-for-the-new-year-rush') > -1 || location.href.indexOf('introducing-abc-ignite') > -1 || location.href.indexOf('maximizing-retention-with-new-gym-member-onboarding-strategies') > -1 || location.href.indexOf('ignite-club-growth-in-2022') > -1 || location.href.indexOf('three-keys-to-gym-membership-sales-success-masterclass') > -1 || location.href.indexOf('technology-strategies-to-lower-costs-and-accelerate-growth-lifetime-value') > -1 || location.href.indexOf('high-impact-member-engagement-strategies') > -1 || location.href.indexOf('ihrsa-virtual-recap-igniting-club-growth') > -1) {
            document.querySelector('body > main.l-body-wrapper .c-hero__content.l-container .c-hero__info-wrapper .c-hero__repeater .c-hero__column:last-child .c-hero__column-content').classList.add('invert-form-color');
        }

        if (location.href.indexOf('ihrsa-virtual-recap-igniting-club-growth') > -1 || location.href.indexOf('marketing-masterclass-holiday-gym-promotions-at-your-club') > -1) {
            document.querySelector('body > main.l-body-wrapper .c-hero.c-hero--default.c-hero--columns').classList.add('spz-custom-bg');
        }
    }

    // Generic
    let url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        let testURL = TEST_ENV.base_url;
        if (document.body.classList.contains('parent-pageid-19408') && location.href.indexOf('webinars-and-videos') > -1) {
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
