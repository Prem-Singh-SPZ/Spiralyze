
let bodyLoad = setInterval(function () {
    const bodyEle = document.querySelector('body');
    if (bodyEle) {
        clearInterval(bodyLoad);
        var content = document.createElement("script");
        content.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.0/swiper-bundle.min.js";
        document.head.appendChild(content);
        document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.0/swiper-bundle.css" />`)
        // Set test class
        document.body.classList.add("spz-6006");

        waitForElm('.hero-section').then(function () {
            loadTest();

            content.onload = function () {
                initSlider();
            };
        });

        function loadTest() {
            document.querySelector('.hero-section').insertAdjacentHTML('afterend', `<section class="review-section">
                <div class= "container">
<h6 class="review-sub-title">Testimonials</h6>
<h2 class="review-sec-title">See What Our Customers Say About Drata</h2>
<div class="rating-section">
<div class="img-container"><img class="g2-logo" src="//res.cloudinary.com/spiralyze/image/upload/v1701245204/drata/6006/g2.svg" alt="G2 Logo"> <img class="star-logo" src="//res.cloudinary.com/spiralyze/image/upload/v1701245204/drata/6006/frame_5597.svg" alt="Rating Stars"></div>
<p><span>Excellent</span> based on <span>600+</span> reviews</p>
</div>
</div>
<div class="review-slider-container container swiper">
<div class="review-slider  swiper-wrapper">
<div class="review-item-box  swiper-slide">
<div class="review-content">
<h6 class="review-author">Ari B.</h6>
<p class="review">“The automation capabilities of DRATA resulted in a remarkable time-saving of over 50%. Tasks that used to consume a significant portion of our schedule were streamlined and simplified.”</p>
<div class="rating dis-flex"><img src="//res.cloudinary.com/spiralyze/image/upload/v1701245205/drata/6006/frame_5598.svg" alt="Rating Stars" title="Rating Stars" class="star-rating"></div>
</div>
</div>
<div class="review-item-box  swiper-slide">
<div class="review-content">
<h6 class="review-author">Debra B. </h6>
<p class="review">“Drata has been amazing in preparing my customer for SOC2. It's amazing in that 85% of the evidence is automatically gathered and tested every 24 hours. No more screenshots and manual gathering of evidence.”</p>
<div class="rating dis-flex"><img src="//res.cloudinary.com/spiralyze/image/upload/v1701245205/drata/6006/frame_5598.svg" alt="Rating Stars" title="Rating Stars" class="star-rating"></div>
</div>
</div>
<div class="review-item-box  swiper-slide">
<div class="review-content">
<h6 class="review-author">Sanjaya A.</h6>
<p class="review">“Drata makes your compliance journey a manageable one. We started our journey with Drata with SOC2 and HIPPA compliance in mind and were able to cross the finish line with “no exceptions reports” within 4 months.” </p>
<div class="rating dis-flex"><img src="//res.cloudinary.com/spiralyze/image/upload/v1701245205/drata/6006/frame_5598.svg" alt="Rating Stars" title="Rating Stars" class="star-rating"></div>
</div>
</div>
<div class="review-item-box  swiper-slide">
<div class="review-content">
<h6 class="review-author">Derek E.</h6>
<p class="review">“Undergoing any audit is a massive lift for those being audited. The entire process is confusing if not done correctly. Drata has made the process simple, easy, and innovative.”</p>
<div class="rating dis-flex"><img src="//res.cloudinary.com/spiralyze/image/upload/v1701245205/drata/6006/frame_5598.svg" alt="Rating Stars" title="Rating Stars" class="star-rating"></div>
</div>
</div>
<div class="review-item-box  swiper-slide">
<div class="review-content">
<h6 class="review-author">Greg C.</h6>
<p class="review">“What really sets Drata apart is its ability to simplify and automate the often complex and time-consuming process of compliance.”</p>
<div class="rating dis-flex"><img src="//res.cloudinary.com/spiralyze/image/upload/v1701245205/drata/6006/frame_5598.svg" alt="Rating Stars" title="Rating Stars" class="star-rating"></div>
</div>
</div>
<div class="review-item-box  swiper-slide">
<div class="review-content">
<h6 class="review-author">Gabriel R.</h6>
<p class="review">“From day one, our experience with Drata was enjoyable. They have a very well thought product to help their clients achieve their compliance goals.”</p>
<div class="rating dis-flex"><img src="//res.cloudinary.com/spiralyze/image/upload/v1701245205/drata/6006/frame_5598.svg" alt="Rating Stars" title="Rating Stars" class="star-rating"></div>
</div>
</div>
</div>
<div class="swiper-next"></div>
<div class="swiper-prev"></div>
</div>
            </section > `);

            // waitForElm('.integrations-logo-slider').then(function () {
            //     submitTestDetails();
            // });
        }

        function initSlider() {
            if (document.querySelectorAll('.review-slider-container').length > 0) {
                let sliderInt = setInterval(() => {
                    if (document.querySelectorAll('.review-slider-container.swiper-initialized').length > 0) {
                        clearInterval(sliderInt);
                        document.querySelector('.review-section').style.opacity = 1;
                    }
                    var mySwiper = new Swiper('.review-slider-container', {
                        slidesPerView: 3,
                        loop: true,
                        spaceBetween: 24,
                        // Navigation arrows
                        navigation: {
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        },
                    });
                    // if (window.innerWidth <= 1280) {
                    //     mySwiper.enable()
                    // } else {
                    //     mySwiper.disable()
                    // }
                }, 200);
            }
        }

        //Passing test details to hidden fields
        // function submitTestDetails() {
        //     if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input')) {
        //         document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', '#6005__Demo(Paid)_Testimonial');
        //         document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input').setAttribute('value', 'Variant');
        //     }
        // }

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
    }
});

