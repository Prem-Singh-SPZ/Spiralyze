(function () {
    const TEST_ENV = {
        name: 'spz-ABC-Club-Management-software',
        class: 'spz-3001', // class will be used in body ex. spz-1001
        date: '21-02-23',
        base_url: 'https://learn.abcfitness.com/club-management-software', // control domain url
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
        waitForElm('#landing-page > main section.section .widget').then(function () {
            heroContentUpdate();
        });
        document.body.classList.add("loaded");
    }

    function heroContentUpdate() {
        document.querySelector('#landing-page > main section.section:first-child .section-block .section-inner a.url-link .item-content-box').setAttribute('src','//res.cloudinary.com/spiralyze/image/upload/v1677052478/ABCFitnessSolutions/3001/assets/ABC-logo.svg');
        document.querySelector('#landing-page > main section.section:first-child .section-block .section-inner a.url-link .item-content-box').setAttribute('srcset','//res.cloudinary.com/spiralyze/image/upload/v1677052478/ABCFitnessSolutions/3001/assets/ABC-logo.svg');
        document.querySelector('#landing-page > main section.section:nth-child(2) .section-block .section-inner').insertAdjacentHTML('afterbegin', `<div class="spz-hero-container">
        <div class="hero-top-content">
        <div class="hero-left-summary">
        <p>CLUB MANAGEMENT SOFTWARE</p>
<h6>Grow your club and streamline operations.</h6>
<ul><li> <span>Sales Automation.</span> Send text and email reminders based on incomplete registrations, trials, and other sales triggers.</li><li>
<span>CRM.</span> Track and manage members, leads, check-ins, classes, payments, and more, in one place.
 </li><li> <span>Operations.</span> Let members scan for entry. Manage orders, vendors, and products. Automate billing & payment collection.</li> </ul>
        </div>
        <div class="hero-right-form">
        <picture>
            <source media="(min-width:1200px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/3001/assets/Form-desk.png">
            <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/3001/assets/form-tab.png">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/3001/assets/Form-mobile.png" alt="Form">
            </picture>
        </div>
        </div>
        <div class="hero-bottom-content">
        <p>Join 20,000+ gyms & studios using ABC Fitness Solutions</p>
        <picture>
        <source media="(min-width:1200px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1677052480/ABCFitnessSolutions/3001/assets/logos-desktop.svg">
        <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1677052480/ABCFitnessSolutions/3001/assets/logos-tablet.svg">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1677052480/ABCFitnessSolutions/3001/assets/logos-mobile.svg" alt="Social Icons">
        </picture>
        </div>
        </div>`);
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
