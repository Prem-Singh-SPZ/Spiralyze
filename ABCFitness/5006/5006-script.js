(function () {
  const TEST_ENV = {
    name: 'spz-home-hero-5006',
    class: 'spz-5006',
    date: '31-05-23',
    test_url: 'https://abcfitness.com/',
    main_class: 'body',
  }

  var slickCDN = document.createElement("script");
  slickCDN.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/10.1.0/swiper-bundle.min.js";
  document.head.appendChild(slickCDN);
  document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />`)

  function loadTest() {
    // Set test class
    document.body.classList.add(TEST_ENV.class);
    waitForElm('#main').then(function () {
      // heroContentUpdate();
      webinarSlider();

      slickCDN.onload = function () {
        initSlider();
      };

    });
    // document.body.classList.add("loaded");

    document.querySelector('head').insertAdjacentHTML('beforeend', `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap" rel="stylesheet">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1685534659/ABCFitnessSolutions/5006/assets/arrow-hovered.svg" as="image">`);
  }

  function initSlider() {
    if (document.querySelectorAll('.swiper-wrapper').length > 0) {
      let sliderInt = setInterval(() => {
        if (document.querySelectorAll('.swiper.swiper-initialized ').length > 0) {
          clearInterval(sliderInt);
          document.querySelector('.swiper-wrapper').style.opacity = 1;
        }
        else {
          const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: 1,
            loop: true,
            centeredSlides: true,
            // autoplay: {
            //   delay: 3000,
            //   disableOnInteraction: false
            // },


            // Navigation arrows
            navigation: {
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev',
            },

           
          });
          // jQuery('.swiper-wrapper').slick({
          //   slidesToShow: 1,
          //   slidesToScroll: 1,
          //   autoplay: true,
          //   autoplaySpeed: 3000,
          // });
          // jQuery('.slick-arrow').on('click', function () {
          //   jQuery('.swiper-wrapper').slick('slickPlay');
          // });
          // jQuery('.swiper-wrapper').on('afterChange', function () {
          //   jQuery('.swiper-wrapper').slick('slickPlay');
          // });
        }
      }, 200);
    }
  }

  function webinarSlider() {
    document.querySelector('#primary #main .entry-content > .wp-block-genesis-blocks-gb-columns:nth-child(4)').insertAdjacentHTML('afterend', `<div class="spz-webinar-slider-section">
        <div class="webinar-section-title">
            <h3>Get free resources to grow your gym and streamline operations</h3>
        </div>
      <div class="swiper webinar-slider-parent">
        <div class="swiper-wrapper webinar-slider-container">
          <div class="swiper-slide webinar-slide">
            <div class="slider-img">
              <img
                src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/5006/assets/New_Member_Onboarding_Guide-min.png"
                alt="New Member Onboarding Guide"
              />
            </div>
            <div class="slider-content">
              <h6>New Member Onboarding Guide</h6>
              <p>
              Get our step-by-step playbook to attracting, onboarding, and retaining more members. Includes 5 loyalty-boosting email templates and when to send them.
              </p>
              <div class="slider-cta">
                <a class="lg-cta"
                  href="https://abcfitness.com/resources/ebooks-and-articles/new-gym-member-onboarding-guide/"
                  >Download Free</a
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide webinar-slide">
            <div class="slider-img">
              <img
                src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/5006/assets/Recession-Proof_Your_Business-min.png"
                alt="Recession-Proof Your Business"
              />
            </div>
            <div class="slider-content">
              <h6>Recession-Proof Your Business</h6>
              <p>
                Top 5 factors that drive retention for every gym type. Pricing
                strategies that actually increase retention, even during a
                recession.
              </p>
              <div class="slider-cta">
                <a class="lg-cta"
                  href="https://abcfitness.com/resources/ebooks-and-articles/recession-proof-your-fitness-business/"
                  >Download Free</a
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide webinar-slide">
            <div class="slider-img">
              <img
                src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/5006/assets/Increasing_New_Joins_Retention_During_Summer-min.png"
                alt="Increasing New Joins & Retention During Summer"
              />
            </div>
            <div class="slider-content">
              <h6>Increasing New Joins & Retention During Summer</h6>
              <p>
                Get 10 proven promotions that drive new summer registrations. Plus
                simple tactics for generating free publicity.
              </p>
              <div class="slider-cta">
                <a class="lg-cta"
                  href="https://abcfitness.com/resources/ebooks-and-articles/ten-summer-activations-to-grow-gym-membership/"
                  >Download Free</a
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide webinar-slide">
            <div class="slider-img">
              <img
                src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/5006/assets/Building_Engagement_with_Automation-min.png"
                alt="Building Engagement with Automation"
              />
            </div>
            <div class="slider-content">
              <h6>Building Engagement with Automation</h6>
              <p>
                5 simple automations that boost customer engagement. Plus 3 fitness
                apps that can increase member participation from 20% to 50%.
              </p>
              <div class="slider-cta">
                <a class="sm-cta"
                  href="https://abcfitness.com/resources/webinars-and-videos/2023-ihrsa-recap/"
                  >Watch Now</a
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide webinar-slide">
            <div class="slider-img">
              <img
                src="//res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/5006/assets/ABC_Ignite_Product_Tour-min.png"
                alt="ABC Ignite Product Tour"
              />
            </div>
            <div class="slider-content">
              <h6>ABC Ignite Product Tour</h6>
              <p>
                See how gym owners use ABC Ignite to grow sales 30%, streamline member management, and automate operations. 
              </p>
              <div class="slider-cta">
                <a class="sm-cta"
                  href="https://abcfitness.com/resources/webinars-and-videos/abc-ignite-product-tour/"
                  >Watch Now</a
                >
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="swiper-prev"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1691559726/abcfitnessignite/5006/arrow_10.svg" alt="left arrow" class="unhovered" /><img src="//res.cloudinary.com/spiralyze/image/upload/v1691559726/abcfitnessignite/5006/arrow_11.svg" alt="left arrow" class="hovered" /></div>
        <div class="swiper-next"><img src="//res.cloudinary.com/spiralyze/image/upload/v1691559726/abcfitnessignite/5006/arrow_9.svg" alt="right arrow" class="unhovered" /><img src="//res.cloudinary.com/spiralyze/image/upload/v1691559726/abcfitnessignite/5006/arrow_12.svg" alt="right arrow" class="hovered" /></div>
    </div>`);
  }


  // Generic
  let url = location.href;
  urlCheck(url);

  function urlCheck(url) {
    let testURL = location.href;
    if (url == testURL) {
      waitForElm(TEST_ENV.main_class).then(function () {
        loadTest();
      });
    } else {
      removeTest();
    }

    // if (document.querySelectorAll('.spz-login-btn').length == 0) {
    //   headerNavChange();
    // }
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
