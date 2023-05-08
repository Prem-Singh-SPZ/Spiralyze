(function () {
  const TEST_ENV = {
    name: 'spz-Demo',
    class: 'spz-9003', // class will be used in body ex. spz-1001
    date: '12-04-23',
    base_url: 'https://abcfitness.com/request-a-demo/', // control domain url
    main_class: 'body', // parent class where test is going to be applied
  }
  // var content = document.createElement("script");
  // content.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.0/swiper-bundle.min.js";
  // document.head.appendChild(content);
  // document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.0/swiper-bundle.css" />`)
  function loadTest() {
    // Set test class
    document.body.classList.add(TEST_ENV.class);
    waitForElm('.l-body-wrapper .c-hero > .c-hero__content.l-container .c-hero__subtitle.c-subtitle').then(function () {
      if (document.querySelectorAll('.spz-hero-container').length == 0) {
        heroContentUpdate();
      }
      // content.onload = function () {
      //     initSlider();
      // };
    });
    document.body.classList.add("loaded");

    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if (isAndroid) {
      document.querySelector('body > main.l-body-wrapper > section.c-hero > .c-hero__content.l-container > .c-hero__info-wrapper > .c-hero__repeater .c-hero__column:last-child').classList.add('android');
    }

    if (document.querySelectorAll('.spz-login-btn').length == 0) {
      headerChange();
    }
  }

  function heroContentUpdate() {
    document.querySelector('.l-body-wrapper .c-hero > .c-hero__content.l-container').insertAdjacentHTML('afterbegin', `<div class="spz-header">
        <a href="https://abcfitness.com"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1681281097/ABCFitnessSolutions/9001/assets/Header-Logo.svg" alt="ABC Fitness" class="header-logo"> </a> </div>`);

    document.querySelector('.l-body-wrapper .c-hero > .c-hero__content.l-container .c-hero__info-wrapper .c-hero__repeater .c-hero__column:first-child').insertAdjacentHTML('afterbegin', `<div class="spz-hero-container">
        <div class="hero-top-content">
          <div class="hero-left-summary">
            <p>#1 CLUB & GYM MANAGEMENT SOFTWARE</p>
            <h6>
              <span>Grow your gym 30%</span> by automating operations, sales, and member management. 
            </h6>
            <ul>
              <li>
                <span>Operations.</span> Enable scan for entry. Process new joins and product sales via POS. Automate billing & payment collection.
              </li>
              <li>
                <span>Sales Automation.</span> Send text & email reminders based on incomplete registrations, trials, and other sales triggers. Let members book classes via mobile app. 
              </li>
              <li>
                <span>CRM.</span> Track & manage members, leads, check-ins, classes, payments, and more. Let members update their billing info.
              </li>
            </ul>
          </div>
        </div>
        <div class="hero-logo-slider">
          <p>Join 24,000+ gyms & studios using ABC Fitness Solutions</p>
          <div class="partner-img-container swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1682922366/ABCFitnessSolutions/9003/assets/Club_Fitness.svg" alt="ClubFitness">
              </div>
              <div class="swiper-slide">
                <picture>
                  <img src="https://res.cloudinary.com/spiralyze/image/upload/v1682922365/ABCFitnessSolutions/9003/assets/Hiddem_Gym.svg" alt="Hidden Gym">
              </div>
              <div class="swiper-slide">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1682922365/ABCFitnessSolutions/9003/assets/ATC_Fitness.svg" alt="ATC Fitness">
              </div>
              <div class="swiper-slide">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1682922366/ABCFitnessSolutions/9003/assets/Golds_Gym.svg" alt="Gold's Gym">
              </div>
              <div class="swiper-slide">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1682922366/ABCFitnessSolutions/9003/assets/Workout_Anytime.svg" alt="24-7 Workout Anytime">
              </div>
  <div class="swiper-slide">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1682922366/ABCFitnessSolutions/9003/assets/Club_Fitness.svg" alt="ClubFitness">
              </div>
              <div class="swiper-slide">
                <picture>
                  <img src="https://res.cloudinary.com/spiralyze/image/upload/v1682922365/ABCFitnessSolutions/9003/assets/Hiddem_Gym.svg" alt="Hidden Gym">
              </div>
              <div class="swiper-slide">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1682922365/ABCFitnessSolutions/9003/assets/ATC_Fitness.svg" alt="ATC Fitness">
              </div>
              <div class="swiper-slide">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1682922366/ABCFitnessSolutions/9003/assets/Golds_Gym.svg" alt="Gold's Gym">
              </div>
              <div class="swiper-slide">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1682922366/ABCFitnessSolutions/9003/assets/Workout_Anytime.svg" alt="24-7 Workout Anytime">
              </div>
            </div>
          </div>
        </div>`);


    document.querySelector('.l-body-wrapper .c-hero > .c-hero__content.l-container .c-hero__info-wrapper').insertAdjacentHTML('beforeend', ` <div class="hero-bottom-content">
        <p>Join 24,000+ gyms & studios using ABC Fitness Solutions</p>
        <div class="partner-img-container">
        <picture>
            <source media="(min-width:1024px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/9001/assets/Logos-desktop.png">
            <source media="(min-width:767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/9001/assets/Logos-tablet.png">
            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessSolutions/9001/assets/Logos-mobile.png" alt="Partner Logos">
        </picture>
        </div>
        </div>`);
    document.querySelector('.l-body-wrapper .c-hero > .c-hero__content.l-container').insertAdjacentHTML('afterend', `<div class="footer-banner-section">
        <div class="footer-banner-container">
        <picture>
            <source media="(min-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1683533235/ABCFitnessSolutions/9003/assets/Interface_Image-min.png">
            <source media="(min-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1683543313/ABCFitnessSolutions/9003/assets/Interface_Image_-_768-min.png">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1683543312/ABCFitnessSolutions/9003/assets/Interface_Image_-_360-min.png" alt="Interface Hero">
        </picture>
        </div>
        </div><div class="spz-footer"><div class="footer-container"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1681281097/ABCFitnessSolutions/9001/assets/Footer-Logo.svg" alt="ABC Fitness" class="footer-logo"> <p class="copyright-text">© 2023 ABC Fitness Solutions. All rights reserved.</p></div></div>`);
  }


  function initSlider() {
    if (document.querySelectorAll('.swiper-container').length > 0) {
      let sliderInt = setInterval(() => {
        if (document.querySelectorAll('.swiper-container.swiper-initialized').length > 0) {
          clearInterval(sliderInt);
          document.querySelector('.swiper-wrapper').style.opacity = 1;
        }
        var mySwiper = new Swiper('.swiper-container', {
          slidesPerView: 'auto',
          autoplay: { delay: 1000 },
          spaceBetween: 61,
          loop: true,
          speed: 1000,
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
            },
            599: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            1199: {
              slidesPerView: 3,
            }
          }
        });
      }, 200);
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

  // Generic
  let url = location.href;
  urlCheck(url);

  function urlCheck(url) {
    let testURL = TEST_ENV.base_url;
    if (url == testURL || location.href.indexOf('abcfitness') > -1) {
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
