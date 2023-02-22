(function () {
    const TEST_ENV = {
        name: 'spz-ABC-Gym-Management-software',
        class: 'spz-2003', // class will be used in body ex. spz-1001
        date: '22-02-23',
        base_url: 'https://learn.abcfitness.com/switch/gym-management-software/', // control domain url
        main_class: 'body', // parent class where test is going to be applied
    }
    // Add Slick
    var jQueryScript = document.createElement('script');
    jQueryScript.src = '//code.jquery.com/jquery-3.6.3.min.js';
    jQueryScript.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(jQueryScript);

    var isSlickLoad = 0;
    jQueryScript.onload = function () {
        var slickStyle = document.createElement('link');
        slickStyle.rel = 'stylesheet';
        slickStyle.type = 'text/css';
        slickStyle.href = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
        document.getElementsByTagName('HEAD')[0].appendChild(slickStyle);

        var slickScript = document.createElement('script');
        slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
        slickScript.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(slickScript);

        slickScript.onload = function () {
            console.log('jquery enabled');
            isSlickLoad = 1;
        };
    };

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
            initSlider();
        });
        document.body.classList.add("loaded");
    }

    function heroContentUpdate() {
        document.querySelector('#landing-page > main section.section:first-child .section-block .section-inner a.url-link .item-content-box').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1677053803/ABCFitnessSolutions/2003/assets/ABC-logo.svg');
        document.querySelector('#landing-page > main section.section:first-child .section-block .section-inner a.url-link .item-content-box').setAttribute('srcset', '//res.cloudinary.com/spiralyze/image/upload/v1677053803/ABCFitnessSolutions/2003/assets/ABC-logo.svg');
        document.querySelector('#landing-page > main section.section:nth-child(2) .section-block .section-inner').insertAdjacentHTML('afterbegin', `<div class="spz-hero-container">
        <div class="hero-top-content">
        <div class="hero-left-summary">
        <p>CLUB MANAGEMENT SOFTWARE</p>
<h6>Switch to ABC Fitness. Grow your gym and streamline operations.</h6>
<ul><li> <span>Sales Automation.</span> Send text and email reminders based on incomplete registrations, trials, and other sales triggers.</li><li>
<span>CRM.</span> Track and manage members, leads, check-ins, classes, payments, and more, in one place.
 </li><li> <span>Onboarding.</span> Onboarding & migration fully handled for you. Plus, discover and resolve incorrect billing rates. Increase collections 7%.</li> </ul>
        </div>
        <div class="hero-right-form">
        <picture>
            <source media="(min-width:1200px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/2003/assets/Form-desk.png">
            <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/2003/assets/form-tab.png">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/2003/assets/Form-mobile.png" alt="Form">
            </picture>
        </div>
        </div>
        <div class="hero-bottom-content">
        <p>Join 20,000+ gyms & studios using ABC Fitness Solutions</p>
        <picture>
        <source media="(min-width:1200px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1677053804/ABCFitnessSolutions/2003/assets/logos-desktop.svg">
        <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1677053804/ABCFitnessSolutions/2003/assets/logos-tablet.svg">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1677053804/ABCFitnessSolutions/2003/assets/logos-mobile.svg" alt="Social Icons">
        </picture>
        </div>
        <div class="spz-review-slider">
        <div class="review-slider-container">
        <div class="review-slider-item">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1677054735/ABCFitnessSolutions/2003/assets/Five-star.svg" alt="Rating"/>
        <h6>“Fantastic for running a gym!”</h6>
        <p class="card-content">“We&apos;ve solved nearly every club management issue with ABC. From creating memberships, managing employee timesheets, tracking trainer sessions, monitoring door access, and more we could not function without it!”</p>
        <p><span>&#8212;</span>MIKAELA g.</p>
        </div>
        <div class="review-slider-item">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1677054735/ABCFitnessSolutions/2003/assets/Five-star.svg" alt="Rating"/>
        <h6>“Awesome software!”</h6>
        <p class="card-content">“This is by far one of the best softwares. Holds so much info on members, their training, payment and more.”</p>
        <p><span>&#8212;</span>kristen s.</p>
        </div>
        <div class="review-slider-item">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1677054735/ABCFitnessSolutions/2003/assets/Five-star.svg" alt="Rating"/>
        <h6>“It&apos;s fantastic!”</h6>
        <p class="card-content">IGNITE allows me to track all my leads, trials, and sales easily. Leads never get lost!</p>
        <p><span>&#8212;</span>DANIEL HAYES</p>
        </div>
        <div class="review-slider-item">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1677054735/ABCFitnessSolutions/2003/assets/Five-star.svg" alt="Rating"/>
        <h6>“We were able to add new locations”</h6>
        <p class="card-content">“With ABC, we were able to add new locations, strengthening our foothold in our market. We have also doubled the size of several existing facilities.”</p>
        <p><span>&#8212;</span>ERIC SCHREIMANN</p>
        </div>
        </div>
        </div>
        </div>`);
    }

    function initSlider() {
        let sliderEnabled = setInterval(() => {
            if (isSlickLoad == 1) {
                console.log('slick enabled')
                clearInterval(sliderEnabled);
                jQuery('.review-slider-container').slick({
                    arrows: true,
                    dots: true,
                    infinite: false,
                    // speed: 1000,
                    // autoplay: true,
                    // autoplaySpeed: 2000,
                    slidesToShow: 2,
                    // centerMode: false,
                    slidesToScroll: 2,
                    prevArrow: '<button class="slide_arrow prev-arrow"><img class="grey-arrow" src="//res.cloudinary.com/spiralyze/image/upload/v1677054735/ABCFitnessSolutions/2003/assets/grey-arrow-left.svg" alt="Previous" /><img class="orange-arrow" src="//res.cloudinary.com/spiralyze/image/upload/v1677054735/ABCFitnessSolutions/2003/assets/orange-arrow-left.svg" alt="Previous" /></button>',
                    nextArrow: '<button class="slide_arrow next-arrow"><img class="grey-arrow" src="//res.cloudinary.com/spiralyze/image/upload/v1677054735/ABCFitnessSolutions/2003/assets/grey-arrow-right.svg" alt="Next" /><img class="orange-arrow" src="//res.cloudinary.com/spiralyze/image/upload/v1677054735/ABCFitnessSolutions/2003/assets/orange-arrow-right.svg" alt="Next" /></button>',

                    responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }, {
                        breakpoint: 300,
                        settings: "unslick" // destroys slick
                    }]
                });
            }
        }, 100);
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
