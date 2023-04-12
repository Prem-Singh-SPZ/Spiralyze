(function () {
    const TEST_ENV = {
        name: 'spz-ABC-Gym-Management-software',
        class: 'spz-2001', // class will be used in body ex. spz-1001
        date: '20-02-23',
        base_url: 'https://learn.abcfitness.com/switch/gym-management-software/', // control domain url
        main_class: 'body', // parent class where test is going to be applied
    }

    var content = document.createElement("script");
    content.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.0/swiper-bundle.min.js";
    document.head.appendChild(content);
    document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.0/swiper-bundle.css" />`)
    function loadTest() {
        // Set test class
        document.body.classList.add(TEST_ENV.class);
        waitForElm('#landing-page > main section.section .widget').then(function () {
            if (document.querySelectorAll('.spz-hero-container').length == 0) {
                heroContentUpdate();
            }
            content.onload = function () {
                initSlider();
            };
        });
        document.body.classList.add("loaded");
    }


    function initSlider() {
        if (document.querySelectorAll('.swiper-container').length > 0) {
            let sliderInt = setInterval(() => {
                if (document.querySelectorAll('.swiper-container.swiper-initialized').length > 0) {
                    clearInterval(sliderInt);
                    document.querySelector('.swiper-wrapper').style.opacity = 1;
                }
                var mySwiper = new Swiper('.swiper-container', {
                    slidesPerView: 3,
                    autoplay: { delay: 1000 },
                    spaceBetween: 70,
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

    function heroContentUpdate() {
        document.querySelector('#landing-page > main section.section:first-child .section-block .section-inner a.url-link .item-content-box').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1676883933/ABCFitnessSolutions/2001/assets/ABC-logo.svg');
        document.querySelector('#landing-page > main section.section:first-child .section-block .section-inner a.url-link .item-content-box').setAttribute('srcset', '//res.cloudinary.com/spiralyze/image/upload/v1676883933/ABCFitnessSolutions/2001/assets/ABC-logo.svg');
        document.querySelector('#landing-page > main section.section:nth-child(2) .section-block .section-inner #element-556').insertAdjacentHTML('afterbegin', `<div class="spz-hero-container">
        <div class="hero-top-content">
        <div class="hero-left-summary">
        <p>CLUB MANAGEMENT SOFTWARE</p>
<h6>Switch to ABC Fitness. Grow your gym and streamline operations.</h6>
<ul><li> <span>Sales Automation.</span> Send text and email reminders based on incomplete registrations, trials, and other sales triggers.</li><li>
<span>CRM.</span> Track and manage members, leads, check-ins, classes, payments, and more, in one place.
 </li><li> <span>Billing.</span> Automate billing & payment collection. Accept family & group subscriptions. Increase collections 7%.</li> </ul>
        </div>
        </div>
        <div class="hero-bottom-content">
        <p>Join 20,000+ gyms & studios using ABC Fitness Solutions</p>
        <div class="partner-img-container swiper-container">
        <div class="swiper-wrapper">
        <div class="swiper-slide">
        <picture>
        <source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1679920096/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3789.webp" type="image/webp">
        <source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3789.png" type="image/png"> 
        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1679920096/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3789.webp" alt="ClubFitness">
      </picture>
      </div> <div class="swiper-slide">
      <picture>
      <source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1679920097/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3788_1.webp" type="image/webp">
      <source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3788_1.png" type="image/png"> 
      <img src="https://res.cloudinary.com/spiralyze/image/upload/v1679920097/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3788_1.webp" alt="Hidden Gym">
    </picture>
    </div> <div class="swiper-slide">
    <picture>
    <source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1679920097/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/61a7e523d773b974b9560af5_ATC-Fitness_LogoHorizontal1.webp" type="image/webp">
    <source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/61a7e523d773b974b9560af5_ATC-Fitness_LogoHorizontal1.png" type="image/png"> 
    <img src="https://res.cloudinary.com/spiralyze/image/upload/v1679920097/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/61a7e523d773b974b9560af5_ATC-Fitness_LogoHorizontal1.webp" alt="ABC Fitness">
  </picture>
  </div> <div class="swiper-slide">
  <picture>
  <source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1679920098/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3790.webp" type="image/webp">
  <source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3790.png" type="image/png"> 
  <img src="https://res.cloudinary.com/spiralyze/image/upload/v1679920098/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3790.webp" alt="Gold's Gym">
</picture>
</div> <div class="swiper-slide">
<picture>
<source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1679920099/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame.webp" type="image/webp">
<source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame.png" type="image/png"> 
<img src="https://res.cloudinary.com/spiralyze/image/upload/v1679920099/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame.webp" alt="Work Anytime">
</picture>
                 </div>
                 <div class="swiper-slide">
        <picture>
        <source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1679920096/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3789.webp" type="image/webp">
        <source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3789.png" type="image/png"> 
        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1679920096/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3789.webp" alt="ClubFitness">
      </picture>
      </div> <div class="swiper-slide">
      <picture>
      <source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1679920097/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3788_1.webp" type="image/webp">
      <source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3788_1.png" type="image/png"> 
      <img src="https://res.cloudinary.com/spiralyze/image/upload/v1679920097/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3788_1.webp" alt="Hidden Gym">
    </picture>
    </div> <div class="swiper-slide">
    <picture>
    <source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1679920097/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/61a7e523d773b974b9560af5_ATC-Fitness_LogoHorizontal1.webp" type="image/webp">
    <source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/61a7e523d773b974b9560af5_ATC-Fitness_LogoHorizontal1.png" type="image/png"> 
    <img src="https://res.cloudinary.com/spiralyze/image/upload/v1679920097/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/61a7e523d773b974b9560af5_ATC-Fitness_LogoHorizontal1.webp" alt="ABC Fitness">
  </picture>
  </div> <div class="swiper-slide">
  <picture>
  <source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1679920098/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3790.webp" type="image/webp">
  <source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3790.png" type="image/png"> 
  <img src="https://res.cloudinary.com/spiralyze/image/upload/v1679920098/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame3790.webp" alt="Gold's Gym">
</picture>
</div> <div class="swiper-slide">
<picture>
<source srcset="https://res.cloudinary.com/spiralyze/image/upload/v1679920099/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame.webp" type="image/webp">
<source srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame.png" type="image/png"> 
<img src="https://res.cloudinary.com/spiralyze/image/upload/v1679920099/ABCFitnessIgnite/2001ABCGymMngtSoftwareSPZBaseline/Frame.webp" alt="Work Anytime">
</picture>
                 </div>
                 </div>
        </div>
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

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari')
    }
})();
