(function () {

    var content = document.createElement('script')
    // content.src = 'https://res.cloudinary.com/spiralyze/raw/upload/f_auto/AWR/3029/products.js';
    content.src = 'http://127.0.0.1:5500/AWR/3029/products.js';
    document.head.appendChild(content)

    var slickInit = document.createElement('script')
    slickInit.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
    document.head.appendChild(slickInit)

    let intr, unitPrice;

    document.querySelector('head').insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />`);

    const TEST_ENV = {
        name: 'spz-pdp-redesign-v3',
        class: 'spz-3029',
        date: '05-01-2023',
        base_url: 'https://www.awrusa.com/',
        main_class: '#faq-accordion',
    }

    content.onload = function () {
        intr = setInterval(productDetails, 150);
    }

    function loadTest() {
        if (document.querySelector('button[angularticscategory="Header-Login"]')) {
            // productDetails()
            // faqSection();
            compProtectionAndCoverage();

            const observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.attributeName === "class") {
                        Google_review();
                        setHeader()
                    }
                });
            });

            slickInit.onload = function () {
                observer.observe(document.body, { attributes: true });
            }

            rerenderRelated();
        } else {
            removeTest();
        }
    }

    function setHeader() {
        const logo = document.querySelector('hos-navigation-bar .logo.base-logo img');
        // const phoneIco = document.querySelector('hos-navigation-bar .header-contact-number');
        const cartIco = document.querySelector('hos-navigation-bar .secondary-nav .cart-area img');
        const notifyIco = document.querySelector('hos-navigation-bar .notification .header-icon');

        if (logo && window.location.pathname.indexOf('product') == 1) {
            if (window.innerWidth > 767) {
                logo.src = 'https://res.cloudinary.com/spiralyze/image/upload/v1672923322/AWR/3029/assets/logo-awr.svg';
            } else {
                logo.src = 'https://res.cloudinary.com/spiralyze/image/upload/v1673005677/AWR/3029/assets/logo_mobile.svg';
            }
        }

        if (cartIco) {
            cartIco.src = 'https://res.cloudinary.com/spiralyze/image/upload/v1672929775/AWR/3029/assets/cart.svg';
            cartIco.classList.add('header-ico-spz');
        }

        if (notifyIco && document.querySelectorAll('.noty-ico').length == 0) {
            notifyIco.insertAdjacentHTML("afterbegin", '<img class="header-ico-spz noty-ico" src="https://res.cloudinary.com/spiralyze/image/upload/v1672929775/AWR/3029/assets/notification.svg" loading="lazy">');
        }


    }

    function productDetails() {
        if (document.querySelector('button[angularticscategory="Header-Login"]')) {
            if (/https:\/\/www.awrusa.com\/([a-zA-Z]*\/)?product\/\d\d\d\d\d\/[a-zA-Z][a-zA-Z]\d\d\d\/residential\/(.*)?/.test(window.location.href)) {
                if (!document.body.classList.contains('spz-3029')) {
                    document.body.classList.add('spz-3007-tc');
                    document.body.classList.add('spz-3029');
                }

                if (document.querySelectorAll('#general-section').length > 0) {
                    document.querySelector('#general-section').classList.remove('general-desc-section');
                    document.querySelector('#general-section').removeAttribute('id');
                }

                if (document.querySelector('.pricing-not-leak .pricing-text span')) {
                    unitPrice = document.querySelector('.pricing-not-leak .pricing-text span').textContent;
                }

                const secTitle = document.querySelector('.covered-repair-section .section-head-title.font-unbounce-title');
                if (secTitle && secTitle.innerText !== 'What\'s Covered') {
                    secTitle.innerText = 'What\'s Covered'
                }

                if (document.querySelector('.enroll-now-btn') && document.querySelector('.enroll-now-btn').innerText !== 'GET STARTED') {
                    document.querySelector('.enroll-now-btn').innerText = 'GET STARTED';
                    document.querySelector('.enroll-now-btn').setAttribute('title', 'GET STARTED');
                }
                console.log()
                if (document.querySelectorAll('.selected-zipcode-area .enroll-now-btn[disabled]').length > 0 ||
                    document.querySelectorAll('.fixed-header-wrapper .enroll-btn[disabled]').length > 0) {
                    document.querySelector('.comp-protection-button .enroll-now-btn').setAttribute('disabled', 'disabled');
                } else if (document.querySelector('.comp-protection-button .enroll-now-btn[disabled]')) {
                    document.querySelector('.comp-protection-button .enroll-now-btn').removeAttribute('disabled');
                }
                
                document.querySelectorAll('.card .card-body .enroll-now').forEach(item => {
                    if (item.innerText !== 'GET STARTED') {
                        item.innerText = 'GET STARTED';
                        item.setAttribute('title', 'GET STARTED');
                    }
                })

                if (document.querySelector('.rating-btn') && document.querySelector('.mobile-only-view.program-name .rating-label')) {
                    let ratingVal = 1;

                    if (document.querySelectorAll('.mobile-only-view .updated-rating').length == 0) {
                        ratingVal = document.querySelector('.rating-average .rating-label:not(.updated-rating)').textContent.trim().replace('(', '').replace(')', '');
                        localStorage.setItem('review_count', ratingVal);
                    } else {
                        ratingVal = localStorage.getItem('review_count');
                    }

                    document.querySelector('.rating-btn').parentElement.parentElement.classList.add('reviews-wrapper-spz');
                    document.querySelector('.mobile-only-view.program-name .rating-label').innerHTML = '';
                    document.querySelector('.desktop-only-view.program-name .rating-label').innerHTML = '';
                    document.querySelector('.mobile-only-view.program-name .rating-label').innerHTML = `4.9 <span class="rl-rev">(${ratingVal})</span>`;
                    document.querySelector('.desktop-only-view.program-name .rating-label').innerHTML = `4.9 <span class="rl-rev">(${ratingVal})</span>`;
                    document.querySelector('.mobile-only-view .rating-average .rating-label').classList.add('updated-rating');
                    document.querySelector('.desktop-only-view .rating-average .rating-label').classList.add('updated-rating');
                }
                if (document.querySelector('.detail-header-section .enroll-btn') && document.querySelector('.detail-header-section .enroll-btn').innerText !== 'GET STARTED') {
                    document.querySelector('.detail-header-section .enroll-btn').innerText = 'GET STARTED';
                    document.querySelector('.detail-header-section .enroll-btn').setAttribute('title', 'GET STARTED');
                }
                if (document.querySelector('.selected-zipcode-area.mobile-screen-only.fixed-header .program-content .zipcode-searched-mobile .pricing-box .enroll-now-btn-mob') && document.querySelector('.selected-zipcode-area.mobile-screen-only.fixed-header .program-content .zipcode-searched-mobile .pricing-box .enroll-now-btn-mob').innerText !== 'GET STARTED') {
                    document.querySelector('.selected-zipcode-area.mobile-screen-only.fixed-header .program-content .zipcode-searched-mobile .pricing-box .enroll-now-btn-mob').innerText = 'GET STARTED';
                    document.querySelector('.selected-zipcode-area.mobile-screen-only.fixed-header .program-content .zipcode-searched-mobile .pricing-box .enroll-now-btn-mob').setAttribute('title', 'GET STARTED');
                }

                updatePageContent();
                // if (document.querySelectorAll('.no-zipcode-search').length > 0) {
                // priceAndZip();
                // }
            }
        } else {
            removeTest()
        }
    }

    function updatePageContent() {
        if (document.querySelector('button[angularticscategory="Header-Login"]')) {
            if (document.querySelectorAll('.general-section .program-content hos-product-covered-repairs .covered-repair-section').length == 1) {

                if (document.querySelectorAll('#tab-review-section #covered-repair-section').length == 0) {
                    // cloneElement('hos-product-covered-repairs #covered-repair-section', '#tab-review-section');
                    moveElement('hos-product-covered-repairs #covered-repair-section', '#tab-review-section')
                    // moveElement('hos-product-covered-repairs', 'hos-root')
                }

                if (document.querySelector('#covered-repair-section .covered-repairs')) {
                    document.querySelector('#covered-repair-section .covered-repairs').classList.remove('col-8');
                    document.querySelector('#covered-repair-section .covered-repairs').classList.add('col-12');
                    if (document.querySelectorAll('.terms-btn').length > 0 && document.querySelectorAll('.terms-cond-link-spz').length == 0) {
                        document.querySelector('.terms-btn').parentElement.classList.add('terms-link-spz');
                        document.querySelector('#covered-repair-section .covered-repairs').insertAdjacentHTML('beforebegin', `<a href="javascript:void(0)" class="col-6 col-md-4 terms-cond-link-spz">Terms & Conditions</a>`);
                    }
                    document.querySelector('hos-product-detail-header .covered-repair-section .covered-repairs > .max-width-tab-100').classList.remove('scroll-li');
                }

                let ocTxt = document.querySelector('.general-section[class] .content-box[class] .middle-section[class] .col-12 li');
                if (ocTxt && ocTxt.textContent.trim().length > 0) {
                    ocTxt = ocTxt.textContent.trim();
                    document.querySelector('.general-section .program-content .description-heading-text-content > p').insertAdjacentHTML('afterend', `<div class="no-mobile middle-section ng-tns-c9-0 ng-star-inserted">
                    <div class="col-12 PD-0">
                        <ul class="ng-tns-c9-0">
                            <!----><li class="ng-tns-c9-0 ng-star-inserted"> ${ocTxt}</li>
                        </ul>
                    </div>
                </div>`);
                }

                seeMore();
            }

            if (document.querySelector('.general-section .detail-header-section .program-name h3') && document.querySelector('.breadcrumb-wrapper .custom-breadcrumb ul li.active')) {
                pages.filter(item => {
                    if (item.productFilterName === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]) {
                        const prImageElem = document.querySelector('.general-section .bg-banner-img .banner-img');
                        // document.querySelector('.general-section .detail-header-section .program-name h3').innerText = item.productNewName
                        const prName = document.querySelector('.general-section .detail-header-section .program-name h3').textContent;

                        if (document.querySelectorAll('.general-section .bg-banner-img .banner-image-div .banner-img').length == 0) {
                            document.querySelector('.general-section .bg-banner-img .banner-image-div').insertAdjacentHTML('afterbegin', '<img class="banner-img ng-tns-c9-0 ng-star-inserted" alt="' + item.productNewName + '" loading="lazy" src="' + item.productImage + '">');
                            document.querySelector('.general-section .bg-banner-img .except-mobile-only').classList.remove('except-mobile-only');
                        }

                        prImageElem.alt = prName;
                        if (prImageElem && window.innerWidth < 768) {
                            prImageElem.src = item.productImage;
                        } else if (prImageElem && window.innerWidth < 1025) {
                            prImageElem.src = item.productImage;
                        } else if (prImageElem && window.innerWidth > 1024) {
                            prImageElem.src = item.productImage;
                        }
                        if (prImageElem && document.querySelector('.mobile-banner-img .mob-banner-img') && window.innerWidth < 768) {
                            document.querySelector('.mobile-banner-img .mob-banner-img').src = item.productImage;
                            document.querySelector('.mobile-banner-img .mob-banner-img').alt = prName;
                        }

                        if (document.querySelector('.spz-cover-description')) {
                            document.querySelector('.spz-cover-description').innerText = item.coverSubheading
                            // document.querySelector('.breadcrumb-wrapper .custom-breadcrumb ul li.active').innerText = item.productNewName
                        }

                        // If what covered point is too long https://prnt.sc/5eoojNaFCYj8
                        if (item.hasLongWhatsCovered) {
                            document.querySelector('hos-product-detail-header').classList.add('long-whats-covered-spz');
                        }
                    }
                });
            }
        }
        else {
            removeTest()
        }
        waitForElm('.selected-area-text').then(function (elm) {
            const zipEl = document.querySelector('.selected-zipcode-area .selected-area-text');
            if (zipEl.textContent.includes('.')) {
                zipEl.textContent = zipEl.textContent.slice(0, -1).trim();
            }
        });
    }

    function priceAndZip() {
        if (document.querySelector('button[angularticscategory="Header-Login"]') && document.querySelectorAll('.selected-zipcode-area .description-heading-text-content').length > 0) {

            document.querySelector('.selected-zipcode-area .program-content').classList.add('change-zip-grid-spz');

            if (document.querySelectorAll('.spz-product-price').length == 0 && unitPrice) {
                document.querySelector('.selected-zipcode-area .description-heading-text-content').insertAdjacentHTML('afterend',
                    `<div class="spz-product-price pricing-box ng-tns-c9-0 ng-star-inserted">
                    <div class="pricing-not-leak ng-tns-c9-0 ng-star-inserted">
                        <label class="pricing-text">
                            <span class="notranslate">${unitPrice}</span>
                            <small class="ng-tns-c9-0">per month</small>
                        </label>
                    </div>
                    
                </div>`);
            }

            waitForElm('.details-zip-text-mobile').then(function (elm) {
                if (document.querySelector('.details-zip-text-mobile')) { document.querySelector('.details-zip-text-mobile').textContent = 'Based on your location'; }
                if (document.querySelector('.get-started-btn.product-page-search')) { document.querySelector('.get-started-btn.product-page-search').textContent = 'Change'; }
                if (document.querySelector('.search-zipcode-area input.search-zipcode')) { document.querySelector('.search-zipcode-area input.search-zipcode').setAttribute('placeholder', 'Zip Code'); }
            });
        }
    }

    function compProtectionAndCoverage() {
        const compInt = setInterval(function () {
            if (document.querySelector('button[angularticscategory="Header-Login"]') && document.querySelector('#tab-review-section') && document.querySelectorAll('.comp-protection-and-coverage').length == 0) {
                document.querySelector('#tab-review-section').insertAdjacentHTML('afterbegin',
                    `<div class="comp-protection-and-coverage">
                    <div class="comp-protection">
                        <div class="comp-protection-title">
                            <h5>Comprehensive Protection</h5>
                        </div>
                        <div class="comp-protection-content">
                            <p>Get hassle-free repairs with just one phone call.<br class="comp-break-spz" />Includes repairs, permitting, restoration, and a one-year warranty.</p>
                        </div>
                        <div class="image-container">
                            <picture>
                                <source media="(min-width: 1025px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/Comp-Protection-Desktop.jpg">
                                <source media="(min-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/Comp-Protection-Tablet.jpg">
                                <source media="(min-width: 220px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/Comp-Protection-Mobile.jpg">
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/Comp-Protection-Desktop.jpg" alt="Comprehensive Protection" title="Comprehensive Protection" draggable="false">
                            </picture>
                        </div>
                        <div class="comp-protection-button"></div>
                    </div>
                    <div class="coverage-commitment">
                        <div class="banner-container">
                            <picture>
                                <source media="(min-width: 1025px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/2Million_Baner_Desktop.jpg">
                                <source media="(min-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/2Million_Baner_Tablet.jpg">
                                <source media="(min-width: 220px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/2Million_Baner_Mobile.jpg">
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/2Million_Baner_Desktop.jpg"
                                    alt="2 Million Banner" title="2 Million Banner" draggable="false">
                            </picture>
                        </div>
                    </div>
                </div>`);

                waitForElm('.comp-protection-button').then(function () {
                    document.querySelector('.comp-protection-button').insertAdjacentHTML('afterbegin', `<button class="btn ga-track-enroll-now enroll-now-btn skiptranslate ng-tns-c9-0 ng-star-inserted compProtectionButton" title="GET STARTED">GET STARTED</button>`);
                    clearInterval(compInt);
                });
            }
        });
    }

    function Google_review() {
        if (document.querySelector('button[angularticscategory="Header-Login"]') && document.querySelectorAll('.google_review').length == 0 && document.querySelectorAll('.comp-protection-and-coverage').length > 0) {
            document.querySelector('#tab-faq-section').insertAdjacentHTML('beforebegin', `
            <section class="google_review">
                <div class="review_inner">
                    <div class="review_header">
                    <div class="logo_block">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/Google_logo.png" class="google_logo" alt="Google Logo" title="Google Logo" >
                        <h4>Rating</h4>
                    </div>
                    <div class="rating_block">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/4.2_rating_star.png" class="avg_rating_star" alt="4.2 Rating Star" title="4.2 Rating Star">
                        <a href="https://www.google.com/search?q=google+reviews+american+water+resources&rlz=1C5CHFA_enIN810IN810&oq=google+reviews+american+water+resources&aqs=chrome..69i57j0i22i30j69i64.10989j0j4&sourceid=chrome&ie=UTF-8#lrd=0x87df454f97c25fe3:0x6939417d5e99b74c,1" class="rating_number">4.2/5 (735 Reviews)</a>
                    </div>
                    </div>
                    <div class="review_slider">
                        <div class="review_box">
                            <div class="review_content">
                                <h2 class="reviewer_name">Hugo Dominguez</h2>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">
                                <p class="review_text">American Water Resources is prompt in providing assistance to one\'s sewage related issues.</p>
                            </div>
                        </div>
                        <div class="review_box">
                            <div class="review_content">
                                <h2 class="reviewer_name">Cathy Bozzolo</h2>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">
                                <p class="review_text">I called about a sewer back up. They responded quickly. The company they sent were wonderful.</p>
                            </div>
                        </div>
                        <div class="review_box">
                            <div class="review_content">
                                <h2 class="reviewer_name">Antoinette Cottman</h2>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">
                                <p class="review_text">This company is great. I\'m so happy I signed up they are professional, courteous and prompt.</p>
                            </div>
                        </div>
                        <div class="review_box">
                            <div class="review_content">
                                <h2 class="reviewer_name">Mark De Simon</h2>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">
                                <p class="review_text">Great company. Every aspect from the phone call to the follow up to the service was outstanding.</p>
                            </div>
                        </div>
                        <div class="review_box">
                            <div class="review_content">
                                <h2 class="reviewer_name">RON CARUSO</h2>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">
                                <p class="review_text">FAST RESPONSE TO MY SEWER BACKUP. GOOD CUSTOMER SERVICE AND PROFESSIONAL SERVICE.</p>
                            </div>
                        </div>
                        <div class="review_box">
                            <div class="review_content">
                                <h2 class="reviewer_name">Judy Collins</h2>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">
                                <p class="review_text">I have had to use mine 3 times, once I was actually out of town and it was great all 3 times.</p>
                            </div>
                        </div>
                        <div class="review_box">
                            <div class="review_content">
                                <h2 class="reviewer_name">Judy Stott</h2>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">
                                <p class="review_text">Have had AWR for years all experiences have been great, also very prompt.</p>
                            </div>
                        </div>
                        <div class="review_box">
                            <div class="review_content">
                                <h2 class="reviewer_name">Grace Cannistra</h2>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">
                                <p class="review_text">Homeowners should add these service plans to their residential accounts as it is a wise choice.</p>
                            </div>
                        </div>
                        <div class="review_box">
                            <div class="review_content">
                                <h2 class="reviewer_name">Susan Jones</h2>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">
                                <p class="review_text">The 1st rep had prob with computer, but called back and 2nd rep took care of billing prob.</p>
                            </div>
                        </div>
                        <div class="review_box">
                            <div class="review_content">
                                <h2 class="reviewer_name">WILLIAM MILLER</h2>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">
                                <p class="review_text">Excellent service provided, contacted plumber who called us immediately and service was performed same day!</p>
                            </div>
                        </div>
                        <div class="review_box">
                            <div class="review_content">
                                <h2 class="reviewer_name">John Davis</h2>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">
                                <p class="review_text">I already submitted 2 reviews of your excellent service which you may post online.</p>
                            </div>
                        </div>
                        <div class="review_box">
                            <div class="review_content">
                                <h2 class="reviewer_name">Gaby Beck</h2>
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">
                                <p class="review_text">Getting service was easy and the plumber they sent was great. I highly recommend this service.</p>
                            </div>
                        </div>
                    </div>
                <div>
            </section>`);
            initGoogleReviewSlick();
        } else {
            return false;
        }
    }

    function initGoogleReviewSlick() {
        if (!document.querySelector('.review_slider.slick-initialized')) {
            jQuery('.review_slider').slick({
                arrow: true,
                dots: false,
                infinite: false,
                speed: 1500,
                slidesToShow: 4,
                slidesToScroll: 4,
                prevArrow: '<button class="slide_arrow prev-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="17.5" stroke="#AAAAAA"/><path d="M20.0079 21.2887C20.2641 21.0514 20.2644 20.6463 20.0084 20.4088L17.8873 18.4398C17.6315 18.2024 17.6315 17.7977 17.8873 17.5603L20.0084 15.5913C20.2644 15.3537 20.2641 14.9486 20.0079 14.7113L19.9455 14.6535C19.7155 14.4404 19.3601 14.4404 19.1301 14.6535L15.9924 17.5598C15.736 17.7973 15.736 18.2027 15.9924 18.4402L19.1301 21.3465C19.3601 21.5596 19.7155 21.5596 19.9455 21.3465L20.0079 21.2887Z" fill="#757575"/></svg></button>',
                nextArrow: '<button class="slide_arrow next-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="17.5" transform="matrix(-1 0 0 1 18 18)" stroke="#AAAAAA"/><path d="M15.9919 21.2887C15.7357 21.0514 15.7355 20.6463 15.9914 20.4087L18.1126 18.4397C18.3683 18.2024 18.3683 17.7977 18.1126 17.5603L15.9914 15.5913C15.7355 15.3537 15.7357 14.9486 15.9919 14.7113L16.0543 14.6535C16.2844 14.4404 16.6397 14.4404 16.8698 14.6535L20.0075 17.5598C20.2639 17.7973 20.2639 18.2027 20.0075 18.4402L16.8698 21.3465C16.6397 21.5596 16.2844 21.5596 16.0543 21.3465L15.9919 21.2887Z" fill="#757575"/></svg></button>',
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                ]
            });
        }
    }

    function faqSection() {
        if (document.querySelector('button[angularticscategory="Header-Login"]')) {
            const faqInt = setInterval(function () {
                if (document.querySelectorAll('.faq-ans-spz').length == 0) {
                    const listQues = document.querySelectorAll('hos-product-faq .card-header a .faq-text');
                    const listAns = document.querySelectorAll('hos-product-faq .card-block p');
                    for (let i = 0; i < listQues.length; i++) {
                        listQues[i].classList.add('f-spz');
                        listAns[i].classList.add('fa-spz');
                        listQues[i].innerText = listQues[i].innerText.slice(2);
                        listAns[i].innerText = listAns[i].innerText.slice(2);
                    }

                    document.querySelectorAll('hos-product-faq .card-block p').forEach(function (v, k) {
                        v.insertAdjacentHTML('beforebegin', `<div class='ans-div faq-ans-spz'>A.</div>`);
                    });

                    setTimeout(() => {
                        if (document.querySelectorAll('#faq-accordion .ans-div').length > 0) {
                            clearInterval(faqInt);
                        }
                    }, 3500);
                }
            }, 200);
        }
    }

    function rerenderRelated() {
        if (document.querySelector('button[angularticscategory="Header-Login"]')) {

            if (document.querySelector('#neighbourhood-service-id article .desktop-only-view')) {
                document.querySelector('#neighbourhood-service-id article .desktop-only-view').classList.remove('desktop-only-view');
            }

            document.querySelectorAll('#tab-neighbourhood-service-id .card').forEach((cardItem, index) => {
                relatedProducts.filter(item => {

                    if (cardItem.children[0] && cardItem.children[0].innerText.trim() === item.productFilterName) {
                        // cardItem.children[0].innerText = item.productNewName;
                        cardItem.querySelector('.card-img').src = item.productMobileImage;

                        if (item.isBestValue == true) {
                            cardItem.querySelector('.program-name').classList.add("is-best-value");
                        }

                        cardItem.querySelector('.enroll-now').textContent = 'GET STARTED';
                        cardItem.querySelector('.small-txt').textContent = 'month';
                    }
                })
            });
        } else {
            removeTest()
        }
    }

    function seeMore() {
        const wcCount = 'hos-product-detail-header #covered-repair-section .covered-repairs-list.initial li';

        if (document.querySelectorAll('.see-less-l').length > 0) {
            document.querySelector('hos-product-detail-header .covered-repair-section .see-less').remove();
        }

        const screenSize = window.innerWidth;
        let showByDefault = 9;

        if (screenSize >= 1024) {
            showByDefault = 9
        } else if (screenSize > 767 && screenSize < 1024) {
            showByDefault = 6
        } else if (screenSize < 768) {
            showByDefault = 3
        }

        if (document.querySelectorAll('hos-product-detail-header .covered-repair-section .see-more').length == 0 && document.querySelectorAll(wcCount).length > showByDefault) {
            document.querySelector('hos-product-detail-header #covered-repair-section article.covered-repairs').insertAdjacentHTML('afterend', `
                <span class="see-more">
                    <a class="see-more-l" href="javascript:void(0)">See More</a>
                </span>`);


            const wcLi = document.querySelectorAll('hos-product-detail-header .covered-repair-section .covered-repairs-list.initial li');
            for (const li of wcLi) {
                li.classList.remove('show');
            }


        } else if (document.querySelector('hos-product-detail-header .covered-repair-section .see-more')) {
            document.querySelector('hos-product-detail-header .covered-repair-section .see-more').remove();
            seeMore()
        }

        if (document.querySelectorAll('.description-heading-text-content #covered-repair-section article.covered-repairs').length != 0) {
            document.querySelector('.description-heading-text-content #covered-repair-section article.covered-repairs').classList.remove('row');
            document.querySelector('.description-heading-text-content #covered-repair-section article.covered-repairs').classList.remove('col-12');
            document.querySelector('.description-heading-text-content #covered-repair-section article.covered-repairs > .max-width-tab-100').classList.remove('col-12');
        }
    }

    function productDetailContentHeight() {
        const elm = document.querySelector('body.spz-3029 .general-section .selected-zipcode-area[class] .program-content[class]');
        let sectionHeight = 460;

        if (window.innerWidth >= 1024 && elm) {
            sectionHeight = elm.clientHeight + 40
        } else if (window.innerWidth < 1024) {
            sectionHeight = elm.clientHeight
        } else if (window.innerWidth < 768) {
            sectionHeight = elm.clientHeight + 40
        }
        elm.style.maxHeight = sectionHeight + 'px';

        document.querySelector('.change-zip.change-area-link').click();
    }


    // Generic Starts
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
        let testURL = TEST_ENV.base_url;
        if (window.location.pathname.indexOf('product') > -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            waitForElm(TEST_ENV.main_class).then(function () {
                loadTest();
            });
            setTimeout(function () {
                document.body.classList.add('loaded');

                // Load again if device rotate 
                window.onorientationchange = function () {
                    var orientation = window.orientation;
                    switch (orientation) {
                        case 0:
                        case 90:
                        case -90: loadTest();
                            setTimeout(() => {
                                seeMore();
                            }, 500)
                            break;
                    }
                };

                if (jQuery('#covered-repair-section').length > 0) {
                    const sectionPos = jQuery('#covered-repair-section').offset().top;
                    jQuery(window).scroll(function () {
                        if ((window.scrollY > 100 && window.scrollY < 1000) && jQuery(this).scrollTop() >= sectionPos && document.querySelector('.fa-times')) {
                            document.querySelector('.fa-times').click();
                        }
                    });
                }

                window.addEventListener('scroll', function (e) {
                    if ((window.scrollY > 1075 && window.scrollY < 1150) || (window.scrollY > 2300 && window.scrollY < 2800)) {
                        loadTest();
                        if (document.querySelector('.fa-times')) {
                            document.querySelector('.fa-times').click();
                        }
                        initGoogleReviewSlick();
                    }

                    if (jQuery('#neighbourhood-service-id').length > 0) {
                        const relProds = jQuery('#neighbourhood-service-id').offset().top || 3800;
                        if (jQuery(this).scrollTop() >= (relProds - 100)) {
                            rerenderRelated()
                        }
                    }
                });

                faqSection();
                Google_review();
                rerenderRelated();
            }, 3000);
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
        document.body.classList.remove('spz-3007-tc');
    }

    function moveElement(source, target) {
        const f = document.createDocumentFragment();
        if (document.querySelector(source) != null) {
            f.appendChild(document.querySelector(source));
            document.querySelector(target).appendChild(f);
        }
    }

    function cloneElement(source, target) {
        if (document.querySelector(source) && document.querySelector(target)) {
            const sc = document.querySelector(source);
            const clone = sc.cloneNode(true);
            document.querySelector(target).appendChild(clone);
        }
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
    // Generic Ends

    setTimeout(function () {
        window.addEventListener('click', function (e) {
            if (e.target.classList.contains('change-area-link')) {
                priceAndZip();
            }

            if (e.target.classList.contains('product-page-search')) {
                if (document.querySelector('.description-heading-text-content')) {
                    if (document.querySelector('.covered-repair-section .see-less')) {
                        document.querySelector('.covered-repair-section .see-less').click();
                    }
                    document.querySelector('.description-heading-text-content').style.minHeight = document.querySelector('.description-heading-text-content').clientHeight + 'px';
                }

                // let wcInt;
                // wcInt = setInterval(() => {
                //     if (document.querySelectorAll('.general-section .content-box .description-heading-text-content #covered-repair-section').length == 0) {
                //         cloneElement('hos-product-covered-repairs #covered-repair-section', '.general-section .content-box .description-heading-text-content');
                //         seeMore();
                //     }
                // });

                waitForElm('.change-zip-grid-spz .zipcode-searched .selected-location-box').then(function (elm) {
                    document.querySelector('.selected-zipcode-area .program-content').classList.remove('change-zip-grid-spz');
                    // if (document.querySelectorAll('.general-section .content-box .description-heading-text-content #covered-repair-section').length == 0) {
                    //     cloneElement('hos-product-covered-repairs #covered-repair-section', '.general-section .content-box .description-heading-text-content');
                    // }
                    // seeMore();
                });

                waitForElm('.selected-location-box').then(function () {
                    setTimeout(() => {
                        document.querySelector('.description-heading-text-content').removeAttribute('style');
                        // document.querySelector('.selected-zipcode-area #crs-spz').remove();
                        // if (document.querySelector('.loading')) {
                        //     document.querySelector('.loading').remove();
                        // }
                    }, 150);
                });

                setTimeout(() => {
                    clearInterval(wcInt)
                }, 5000);
            }

            // Zip change
            if (e.target.classList.contains('selected-area-text')) {
                productDetailContentHeight();
            }

            if (e.target.classList.contains('terms-cond-link-spz')) {
                document.querySelector('.terms-btn').click();
            }

            if (e.target.classList.contains('compProtectionButton')) {
                if (document.querySelectorAll('.detail-header-section .enroll-btn').length > 0) {
                    document.querySelector('.detail-header-section .enroll-btn').click();
                } else if (document.querySelectorAll('.enroll-now-box .enroll-now-btn').length > 0) {
                    document.querySelector('.enroll-now-box .enroll-now-btn').click();
                }
            }

            if (e.target.classList.contains('see-more-l')) {
                document.querySelector('.covered-repair-section .see-more').remove();
                if (document.querySelectorAll('.covered-repair-section .covered-repairs > .max-width-tab-100').length > 0) {
                    document.querySelector('.covered-repair-section .covered-repairs > .max-width-tab-100').classList.add('scroll-li');
                }
                const wcLi = document.querySelectorAll('.covered-repair-section .covered-repairs-list.initial li');

                for (const li of wcLi) {
                    li.classList.add('show');
                }

                document.querySelector('.description-heading-text-content #covered-repair-section article.covered-repairs').insertAdjacentHTML('afterend', `
                <span class="see-less">
                    <a class="see-less-l" href="javascript:void(0)">See Less</a>
                </span>`);

                // Remove 'program content' height to avoid overlapping issue
                if (window.innerWidth < 767) {
                    document.querySelector('body.spz-3029 .general-section .selected-zipcode-area[class] .program-content[class]').removeAttribute('style');
                }

                document.querySelector('.description-heading-text-content').removeAttribute('style');
            }

            // if (e.target.classList.contains('loading-spz')) {
            //     setTimeout(() => {
            //         document.querySelector('.loading.loading-spz').remove();
            //     }, 250);
            // }

            if (e.target.classList.contains('see-less-l')) {
                document.querySelector('hos-product-detail-header .covered-repair-section .see-less').remove();
                if (document.querySelectorAll('hos-product-detail-header .covered-repair-section .covered-repairs > .max-width-tab-100').length > 0) {
                    document.querySelector('hos-product-detail-header .covered-repair-section .covered-repairs > .max-width-tab-100').classList.remove('scroll-li');
                }
                seeMore();
            }
        });
    }, 200);
})();