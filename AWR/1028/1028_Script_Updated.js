(function () {

    document.querySelector('head').insertAdjacentHTML("beforeend", `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />`);

    const slickLib = document.createElement('script');
    slickLib.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
    document.head.appendChild(slickLib);

    const ENV_1031 = {
        name: '1031_homepage_email',
        class: 'spz-1028',
        date: '08-11-2022',
        base_url: 'https://www.awrusa.com/',
        main_class: 'hos-category',
    }

    function createTest() {
        var cookieName = ENV_1031.name + "-" + ENV_1031.date;
        var cookieValue = "1";
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

        // Set test class
        document.body.classList.add(ENV_1031.class);


        // Homepage changes
        if (document.querySelector('button[angularticscategory="Header-Login"]')) {
            waitForElm(ENV_1031.main_class).then(function (elm) {
                loadTest1001();
                load_1028_Test();
                loadTest1030();
            });
        }


        document.body.classList.add("loaded");
    }

    function loadTest1001() {
        load_1028_Test();

        var triageInt = setInterval(function () {
            if (jQuery('main.content hos-category').length > 0 && jQuery('.spz-protection-section').length == 0) {
                jQuery('main.content hos-category').append('<div class="spz-protection-section">\
                <div class="protection-heading">Protection Plans</div>\
              <div class="protection-subheading">Starting from $4.99 per month</div>\
              <div class="plans-wrap">\
                  <div class="plan-item">\
                      <div class="plan-image-wrap">\
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/water-protection.png" alt="Water Line Protection Program" class="plan-image" />\
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/water-icon.png" alt="plan icon" class="plan-icon" />\
                      </div>\
                      <div class="plan-name">Water Line<br> Protection Program</div>\
                      <div class="plan-desc">Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.</div>\
                      <div class="plan-price">Starts at <b>$4.99</b> / month</div>\
                      <div class="plan-button">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/chevron-right.svg" alt="icon-right"/></div>\
                  </div>\
                  <div class="plan-item">\
                      <div class="plan-image-wrap">\
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/sewer-protection.png" alt="Sewer Line Protection Program" class="plan-image" />\
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/sewer-icon.png" alt="plan icon" class="plan-icon" />\
                      </div>\
                      <div class="plan-name">Sewer Line <br>Protection Program</div>\
                      <div class="plan-desc">Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.</div>\
                      <div class="plan-price">Starts at <b>$7.99</b> / month</div>\
                      <div class="plan-button">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/chevron-right.svg" alt="icon-right"/></div>\
                  </div>\
                  <div class="plan-item recommended">\
                      <div class="plan-image-wrap">\
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/water-sewer-protection.png" alt="Water Line and Sewer Line Protection Program" class="plan-image" />\
                          <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/sewerandwater-icon.png" alt="plan icon" class="plan-icon" />\
                      </div>\
                      <div class="plan-name">Water Line and Sewer Line Protection Program</div>\
                      <div class="plan-desc">Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks.</div>\
                      <div class="plan-price">Starts at <b>$9.89</b> / month <span>(Save $3.00)</span></div>\
                      <div class="plan-button">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/chevron-right.svg" alt="icon-right"/></div>\
                  </div>\
              </div>\
          </div>\
            <div class="spz-how-it-works">\
          <div class="how-heading">How It Works</div>\
          <div class="how-subheading">Get protection in just 3 simple steps </div>\
          <picture>\
              <source media="(min-width:992px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1028/Assets/Compressed/how-it-works-desktop.png">\
              <source media="(min-width: 768px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1028/Assets/Compressed/how-it-works-tablet.png" >\
              <source media="(min-width: 320px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1028/Assets/Compressed/how-it-works-mobile.png" >\
              <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1028/Assets/Compressed/how-it-works-desktop.png" alt="How it works" class="how-it-works-img">\
          </picture>\
          <div class="spz-get-started-btn">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/chevron-right.svg" alt="icon-right"/></div>\
      </div >\
            <div class="feedback-slider">\
                <div class="feedback-container">\
                    <div class="feedback-item">\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320969/AWR/1001/barbara-r.png" alt="Barbara R." class="feedback-image"/>\
                        <div class="feedback-info">\
                            <div class="feedback-copy">So glad we signed up for this program best thing we ever did as homeowners!</div>\
                            <div class="person-name">Barbara R.</div>\
                            <div class="person-location">New York - Water Line Leak</div>\
                        </div>\
                    </div>\
                    <div class="feedback-item">\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/theodora-d.png" alt="Theodora D." class="feedback-image"/>\
                        <div class="feedback-info">\
                            <div class="feedback-copy">You saved us thousands!</div>\
                            <div class="person-name">Theodora D.</div>\
                            <div class="person-location">Iowa - Leaking Valve</div>\
                        </div>\
                    </div>\
                    <div class="feedback-item">\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/carol-m.png" alt="Carol M." class="feedback-image"/>\
                    <div class="feedback-info">\
                        <div class="feedback-copy">My neighbors spent thousands for the same work.</div>\
                        <div class="person-name">Carol M.</div>\
                        <div class="person-location">Oklahoma - Sewer Line Blockage</div>\
                    </div>\
                </div>\
                </div>\
            </div>\
            <div class="companies-section">\
                <div class="companies-heading">Protect Your Customers From the Unexpected</div>\
                <div class="companies-subheading">We partner with cities, utilities and private companies of all sizes across the nation to provide peace of mind to their homeowners, customers and members. Get more information about becoming a partner.</div>\
                <div class="companies-wrap">\
                    <picture>\
                        <source media="(min-width:992px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/companies.png">\
                        <source media="(min-width:768px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/companies-tablet.png">\
                        <source media="(min-width:320px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/companies-mobile.png">\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/companies.png" alt="companies">\
                    </picture>\
                </div>\
                <div class="call-us">\
                    <div class="call-us-heading">To learn more about partnering with us call</div>\
                    <a href="tel:18009311548"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/phone-icon.svg" alt="tel icon"/> 1-800-931-1548</a>\
                </div>\
            </div>\
            <div class="spz-popup">\
                    <div class="spz-overlay"></div>\
                    <div class="popup-form">\
                        <div class="close-button"></div>\
                        <div class="form-heading">With Us, Your Home\'s Protected</div>\
                        <div class="form-subheading">Find Your Protection Plan</div>\
                        <div class="input-wrap">\
                            <div class="spz-button-submit">Get Started</div>\
                        </div>\
                    </div>\
            </div>')
                if (
                    document.querySelectorAll(".spz-protection-section").length > 0 &&
                    window.location.href === "https://www.awrusa.com/nyc/"
                ) {
                    document.querySelector(".spz-protection-section").innerHTML =
                        '<div class="protection-heading">Protection Plans</div>\
                                <div class="protection-subheading">Starting from $5.57 per month</div>\
                                <div class="plans-wrap plans-wrap-nyc">\
                                    <div class="plan-item">\
                                        <div class="plan-image-wrap">\
                                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/water-protection.png" alt="Water Line Protection Program" class="plan-image" />\
                                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/water-icon.png" alt="plan icon" class="plan-icon" />\
                                        </div>\
                                        <div class="plan-name">Water Line<br> Protection Program</div>\
                                        <div class="plan-desc">Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.</div>\
                                        <div class="plan-price">Starts at <b>$5.57</b> / month</div>\
                                        <div class="plan-button">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/chevron-right.svg" alt="icon-right"/></div>\
                                    </div>\
                                    <div class="plan-item recommended">\
                                        <div class="plan-image-wrap">\
                                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/sewer-protection.png" alt="Sewer Line Protection Program" class="plan-image" />\
                                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/sewer-icon.png" alt="plan icon" class="plan-icon" />\
                                        </div>\
                                        <div class="plan-name">Sewer Line  <br>Protection Program</div>\
                                        <div class="plan-desc">Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.</div>\
                                        <div class="plan-price">Starts at <b>$9.55</b> / month</div>\
                                        <div class="plan-button">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/chevron-right.svg" alt="icon-right"/></div>\
                                    </div>\
                                </div>\
                                '
                        ;
                }
                jQuery('.spz-button-submit').click(function () {
                    jQuery('.search-bar .search .get-started-btn').click()
                    var errorMoved = setInterval(function () {
                        if (jQuery('.spz-popup').hasClass('popup-visible') && jQuery('.error-zipcode.invalid-error')) {
                            clearInterval(errorMoved)
                            jQuery('.error-zipcode.invalid-error').insertBefore('.spz-button-submit')
                        }
                    })
                })
                jQuery('.spz-get-started-btn').click(function () {
                    window.location.href = 'https://www.awrusa.com/user/register'
                })
                jQuery('.plan-button').click(function () {
                    jQuery('.hero-slider hos-google-places .search-bar .search-zipcode').insertBefore('.spz-button-submit')
                    jQuery('.spz-popup').addClass('popup-visible')
                    jQuery('body').css('overflow', 'hidden')
                })
                jQuery('body').on("click", ".spz-popup .popup-form .input-wrap .spz-button-submit", function () {
                    const oldLocation = window.location.pathname;
                    const _overflow = setInterval(function () {
                        var newLocation = window.location.pathname;
                        if (oldLocation !== newLocation) {
                            clearInterval(_overflow);
                            jQuery('body').css('overflow', '');
                        }

                    }, 100);
                })
                jQuery('.spz-overlay, .close-button').click(function () {
                    jQuery('.form-inline .form-group').append(jQuery('.popup-form .search-zipcode'))
                    jQuery('.spz-popup').removeClass('popup-visible')
                    jQuery('body').css('overflow', '')
                    var errorMovedBack = setInterval(function () {
                        if (!jQuery('.spz-popup').hasClass('popup-visible') && jQuery('.spz-popup .error-zipcode')) {
                            clearInterval(errorMovedBack)
                            jQuery('.spz-popup .error-zipcode.invalid-error').insertAfter('.search-bar form.search')
                        }
                    })
                });
                load_1028_Test();
            }
        }, 100);
        load_1028_Test();

        slickLib.onload = feedbackSlick;

        setTimeout(() => {
            if (document.querySelectorAll('.feedback-container.slick-initialized').length > 0 && document.querySelectorAll('.spz-protection-section').length > 0) {
                clearInterval(triageInt);
            }
        }, 5000);
    }

    function googleSlick() {
        const gInt = setInterval(() => {
            if (document.querySelector('.review_slider') && !document.querySelector('.review_slider.slick-initialized')) {
                $('.review_slider').slick({
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

            if (document.querySelector('.review_slider.slick-initialized')) {
                clearInterval(gInt);
            }
        }, 1000);
    };

    function feedbackSlick() {
        googleSlick();
        if (document.querySelectorAll('.spz-protection-section').length > 0 && !document.querySelector('.feedback-container.slick-initialized')) {
            jQuery('.feedback-container').slick({
                arrows: false,
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 1000,
            });
        }
    }

    function loadTest1030() {
        setTimeout(function () {
            var $div = $("body");
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.attributeName === "class") {
                        var attributeValue = $(mutation.target).prop(mutation.attributeName);
                        if (!$('body').hasClass(ENV_1031.main_class)) {
                            $('body').addClass(ENV_1031.main_class);
                        }
                    }
                });
            });
            observer.observe($div[0], { attributes: true });
        }, 500);
        $(document).ready(function () {
            if (navigator.userAgent.indexOf('Mac OS X') != -1) {
                $("body").addClass("mac");
            } else {
                $("body").addClass("pc");
            }
            var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
            var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
            var is_chrome = !!window.chrome && !is_opera && !is_Edge;
            var is_firefox = typeof window.InstallTrigger !== 'undefined';
            if (is_chrome) {
                $('body').addClass('chrome');
            } else if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                $('body').addClass('safari');
            } else if (is_firefox) {
                $('body').addClass('firefox');
            }
            var $div = $("body");
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.attributeName === "class") {
                        var attributeValue = $(mutation.target).prop(mutation.attributeName);
                        Google_review();
                        // load_1028_Test();
                    }
                });
            });
            observer.observe($div[0], { attributes: true });
            function Google_review() {
                if ($('.google_review').length < 1) {
                    $('<section class="google_review">\
                        <div class="review_inner">\
                            <div class="review_header">\
                            <div class="logo_block">\
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/Google_logo.png" class="google_logo" alt="Google Logo" title="Google Logo" >\
                                <h4>Rating</h4>\
                            </div>\
                            <div class="rating_block">\
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/4.2_rating_star.png" class="avg_rating_star" alt="4.2 Rating Star" title="4.2 Rating Star">\
                                <a href="https://www.google.com/search?q=google+reviews+american+water+resources&rlz=1C5CHFA_enIN810IN810&oq=google+reviews+american+water+resources&aqs=chrome..69i57j0i22i30j69i64.10989j0j4&sourceid=chrome&ie=UTF-8#lrd=0x87df454f97c25fe3:0x6939417d5e99b74c,1" class="rating_number">4.2/5 (735 Reviews)</a>\
                            </div>\
                            </div>\
                            <div class="review_slider">\
                                <div class="review_box">\
                                    <div class="review_content">\
                                        <h2 class="reviewer_name">Hugo Dominguez</h2>\
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                                        <p class="review_text">American Water Resources is prompt in providing assistance to one\'s sewage related issues.</p>\
                                    </div>\
                                </div>\
                                <div class="review_box">\
                                    <div class="review_content">\
                                        <h2 class="reviewer_name">Cathy Bozzolo</h2>\
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                                        <p class="review_text">I called about a sewer back up. They responded quickly. The company they sent were wonderful.</p>\
                                    </div>\
                                </div>\
                                <div class="review_box">\
                                    <div class="review_content">\
                                        <h2 class="reviewer_name">antoinette cottman</h2>\
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                                        <p class="review_text">This company is great. I\'m so happy I signed up they are professional, courteous and prompt.</p>\
                                    </div>\
                                </div>\
                                <div class="review_box">\
                                    <div class="review_content">\
                                        <h2 class="reviewer_name">Mark De Simon</h2>\
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                                        <p class="review_text">Great company. Every aspect from the phone call to the follow up to the service was outstanding.</p>\
                                    </div>\
                                </div>\
                                <div class="review_box">\
                                    <div class="review_content">\
                                        <h2 class="reviewer_name">RON CARUSO</h2>\
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                                        <p class="review_text">FAST RESPONSE TO MY SEWER BACKUP. GOOD CUSTOMER SERVICE AND PROFESSIONAL SERVICE.</p>\
                                    </div>\
                                </div>\
                                <div class="review_box">\
                                    <div class="review_content">\
                                        <h2 class="reviewer_name">Judy Collins</h2>\
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                                        <p class="review_text">I have had to use mine 3 times, once I was actually out of town and it was great all 3 times.</p>\
                                    </div>\
                                </div>\
                                <div class="review_box">\
                                    <div class="review_content">\
                                        <h2 class="reviewer_name">Judy Stott</h2>\
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                                        <p class="review_text">Have had AWR for years all experiences have been great, also very prompt.</p>\
                                    </div>\
                                </div>\
                                <div class="review_box">\
                                    <div class="review_content">\
                                        <h2 class="reviewer_name">Grace Cannistra</h2>\
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                                        <p class="review_text">Homeowners should add these service plans to their residential accounts as it is a wise choice.</p>\
                                    </div>\
                                </div>\
                                <div class="review_box">\
                                    <div class="review_content">\
                                        <h2 class="reviewer_name">Susan Jones</h2>\
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                                        <p class="review_text">The 1st rep had prob with computer, but called back and 2nd rep took care of billing prob.</p>\
                                    </div>\
                                </div>\
                                <div class="review_box">\
                                    <div class="review_content">\
                                        <h2 class="reviewer_name">WILLIAM MILLER</h2>\
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                                        <p class="review_text">Excellent service provided, contacted plumber who called us immediately and service was performed same day!</p>\
                                    </div>\
                                </div>\
                                <div class="review_box">\
                                    <div class="review_content">\
                                        <h2 class="reviewer_name">John Davis</h2>\
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                                        <p class="review_text">I already submitted 2 reviews of your excellent service which you may post online.</p>\
                                    </div>\
                                </div>\
                                <div class="review_box">\
                                    <div class="review_content">\
                                        <h2 class="reviewer_name">Gaby Beck</h2>\
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                                        <p class="review_text">Getting service was easy and the plumber they sent was great. I highly recommend this service.</p>\
                                    </div>\
                                </div>\
                            </div>\
                        <div>\
                    </section>').insertAfter('#category-section');
                    // jQuery('.review_slider').slick({
                    //     arrow: true,
                    //     dots: false,
                    //     infinite: false,
                    //     speed: 1500,
                    //     slidesToShow: 4,
                    //     slidesToScroll: 4,
                    //     prevArrow: '<button class="slide_arrow prev-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="17.5" stroke="#AAAAAA"/><path d="M20.0079 21.2887C20.2641 21.0514 20.2644 20.6463 20.0084 20.4088L17.8873 18.4398C17.6315 18.2024 17.6315 17.7977 17.8873 17.5603L20.0084 15.5913C20.2644 15.3537 20.2641 14.9486 20.0079 14.7113L19.9455 14.6535C19.7155 14.4404 19.3601 14.4404 19.1301 14.6535L15.9924 17.5598C15.736 17.7973 15.736 18.2027 15.9924 18.4402L19.1301 21.3465C19.3601 21.5596 19.7155 21.5596 19.9455 21.3465L20.0079 21.2887Z" fill="#757575"/></svg></button>',
                    //     nextArrow: '<button class="slide_arrow next-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="17.5" transform="matrix(-1 0 0 1 18 18)" stroke="#AAAAAA"/><path d="M15.9919 21.2887C15.7357 21.0514 15.7355 20.6463 15.9914 20.4087L18.1126 18.4397C18.3683 18.2024 18.3683 17.7977 18.1126 17.5603L15.9914 15.5913C15.7355 15.3537 15.7357 14.9486 15.9919 14.7113L16.0543 14.6535C16.2844 14.4404 16.6397 14.4404 16.8698 14.6535L20.0075 17.5598C20.2639 17.7973 20.2639 18.2027 20.0075 18.4402L16.8698 21.3465C16.6397 21.5596 16.2844 21.5596 16.0543 21.3465L15.9919 21.2887Z" fill="#757575"/></svg></button>',
                    //     responsive: [{
                    //         breakpoint: 992,
                    //         settings: {
                    //             slidesToShow: 2,
                    //             slidesToScroll: 2
                    //         }
                    //     },
                    //     {
                    //         breakpoint: 600,
                    //         settings: {
                    //             slidesToShow: 1,
                    //             slidesToScroll: 1
                    //         }
                    //     }
                    //     ]
                    // });
                } else {
                    return false;
                }
            }
        });
    };

    function load_1028_Test() {
        if (document.querySelectorAll(
            ".hero-slider .hero-content[class] .head-content[class] h3"
        ).length > 0
        ) {

            document.querySelector(
                ".hero-slider .hero-content[class] .head-content[class] h3"
            ).textContent = "With Us, Your Home's Protected";
            document.querySelector(
                ".hero-slider .hero-content[class] .head-content[class] h5"
            ).textContent = "Make the Smart Choice.";
        }

        if (document.querySelectorAll("hos-hero-banner ngu-item .bannerStyle").length > 0) {
            switch (window.location.href) {
                case "https://www.awrusa.com/nyc/":
                    document.querySelector("hos-hero-banner ngu-item .bannerStyle").classList.add('NYC');
                    break;
                case "https://www.awrusa.com/tx/":
                    document.querySelector("hos-hero-banner ngu-item .bannerStyle").classList.add('TX');
                    changeSubHeadAndPrice(
                        "Starting from $5.00 per month",
                        "Starts at <b>$12.00</b> / month",
                        "Starts at <b>$5.00</b> / month",
                        "Starts at <b>$9.00</b> / month"
                    );
                    break;
                case "https://www.awrusa.com/nashville/":
                    document.querySelector("hos-hero-banner ngu-item .bannerStyle").classList.add('Nash');
                    changeSubHeadAndPrice(
                        "Starting from $4.49 per month",
                        "Starts at <b>$12.49</b> / month",
                        "Starts at <b>$4.49</b> / month",
                        "Starts at <b>$8.49</b> / month"
                    );
                    break;
                case "https://www.awrusa.com/detroit/":
                    document.querySelector("hos-hero-banner ngu-item .bannerStyle").classList.add('DT');
                    changeSubHeadAndPrice(
                        "Starting from $2.49 per month",
                        "Starts at <b>$7.98</b> / month",
                        "Starts at <b>$2.49</b> / month",
                        "Starts at <b>$5.49</b> / month"
                    );
                    break;
                case "https://www.awrusa.com/philadelphia/":
                    document.querySelector("hos-hero-banner ngu-item .bannerStyle").classList.add('PH');
                    if (document.querySelectorAll(".plans-wrap").length > 0) {
                        document.querySelector(".plans-wrap").classList.add('plans-wrap-phil');
                    }
                    break;
            }
        }


        if (document.querySelectorAll("hos-partner-detail .partner-section section.page-wrap .partner-card .card header img").length > 0) {
            if (document.querySelectorAll("#partner-detail-spz").length == 0 && document.querySelectorAll(".spz-protection-section").length > 0) {
                document.querySelector(".spz-protection-section").insertAdjacentHTML("afterend", '<div id="partner-detail-spz"></div>');
                moveElement('hos-partner-detail', '#partner-detail-spz');
            }
            document.querySelector(
                "hos-partner-detail .partner-section section.page-wrap .partner-card:first-child .card header img"
            ).setAttribute(
                "src",
                "https://res.cloudinary.com/spiralyze/image/upload/v1663566290/AWR/1028/Assets/Normal/Group_20109.svg"
            );
            document.querySelector(
                "hos-partner-detail .partner-section section.page-wrap .partner-card:first-child .card header img"
            ).setAttribute(
                "alt",
                "Call"
            );
            document.querySelector(
                "hos-partner-detail .partner-section section.page-wrap .partner-card:last-child .card header img"
            ).setAttribute(
                "src",
                "https://res.cloudinary.com/spiralyze/image/upload/v1663566289/AWR/1028/Assets/Normal/Group_20110.svg"
            );
            document.querySelector(
                "hos-partner-detail .partner-section section.page-wrap .partner-card:last-child .card header img"
            ).setAttribute(
                "alt",
                "Homeowner Hub"
            );
            const liElements = document.querySelectorAll("hos-partner-detail .partner-section section.page-wrap .partner-card");

            for (let i = 0; i < liElements.length + 1; i++) {
                if (liElements[i]) {
                    liElements[i].classList.remove("col-md-6");
                    liElements[i].classList.add("col-lg-6");
                }
            }
        }
    }

    //To change subheading and pricing
    function changeSubHeadAndPrice(
        subHead, priceTriage1, priceTriage2, priceTriage3) {
        if (document.querySelectorAll(".spz-protection-section .protection-subheading").length > 0) {
            console.log('I am here');
            document.querySelector(".spz-protection-section .protection-subheading").innerHTML = subHead;
            document.querySelector(
                ".spz-protection-section .plans-wrap .plan-item:nth-child(3) .plan-price"
            ).innerHTML = priceTriage1;
            document.querySelector(
                ".spz-protection-section .plans-wrap .plan-item:nth-child(1) .plan-price"
            ).innerHTML = priceTriage2;
            document.querySelector(
                ".spz-protection-section .plans-wrap .plan-item:nth-child(2) .plan-price"
            ).innerHTML = priceTriage3;
        }
    }


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

    var url = location.href;
    urlCheck(url);
    function urlCheck(url) {
        let testURL = '';
        let test1 = "https://www.awrusa.com/nyc/";
        let test2 = "https://www.awrusa.com/tx/";
        let test3 = "https://www.awrusa.com/nashville/";
        let test4 = "https://www.awrusa.com/detroit/";
        let test5 = "https://www.awrusa.com/philadelphia/";
        if (window.location.href === test1 || test2 || test3 || test4 || test5) {
            testURL = window.location.href;
        }

        if (isSameUrl(url, testURL, true)) {
            waitForElm(ENV_1031.main_class).then(function () {
                createTest();
            });
            window.addEventListener("resize", function () {
                createTest();
            });
            if (document.querySelectorAll(ENV_1031.main_class).length > 0) {
                createTest();
            }
            waitForElm('.pace-inactive').then(function () {
                createTest();
                feedbackSlick()
            });
        } else {
            removeTest();
        }
    }

    // isSameUrl Parameters
    // currentUrl = current page url
    // specifiedUrl = url on which we have to run test
    // includeQueryParams = set true, if query params are allowed
    function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
        currentUrl = currentUrl.includes("#") ? currentUrl.slice(0, currentUrl.indexOf("#")) : currentUrl;
        specifiedUrl = specifiedUrl.includes("#") ? specifiedUrl.slice(0, specifiedUrl.indexOf("#")) : specifiedUrl;

        if (includeQueryParams) {
            currentUrl = currentUrl.includes("?") ? currentUrl.slice(0, currentUrl.indexOf("?")) : currentUrl;
        }
        if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/") {
            return true;
        }
        return false;
    }

    function removeTest() {
        document.body.classList.remove(ENV_1031.class);
    }

    function moveElement(source, target) {
        const f = document.createDocumentFragment();
        if (document.querySelector(source) != null) {
            f.appendChild(document.querySelector(source));
            document.querySelector(target).appendChild(f);
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
})()