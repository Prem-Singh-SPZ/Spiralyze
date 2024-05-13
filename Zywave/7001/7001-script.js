waitForElm('.zy-header-bottom-inner .zy-header-bottom-demo>a').then(function () {
    document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/7001/frame_1.svg" as="image">`)

    if (document.querySelector('#zy-demo-form-section') && location.href.indexOf('/login-redirect') < 0) {
        document.body.classList.add('spz-7001');

        if (document.querySelectorAll('body .popup-wrapper').length == 0) {
            document.querySelector('body').insertAdjacentHTML("beforeend", `
        <div class="popup-wrapper">
          <div class="getdemo-popup">
            <div class="left">
              <div class="title"><span>Streamline</span> the insurance lifecycle <br>from sales to customer retention.</div>
              <ul class="tag-list">
              <li><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/7001/icon_1.svg" alt="Agencies"> <p><span>Agencies.</span> Prospect, engage, quote and manage your clients and prospects for all lines of business.</p></li>
              <li><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/7001/frame_2.svg" alt="Insurers"> <p><span>Insurers.</span> Create innovative products, distribute them to key markets, seamlessly engage and retain policyholders and clients.</p></li>
              <li><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/7001/analytics_2.svg" alt="Service Providers"> <p><span>Service Providers.</span> Simplify market analyses, streamline workflows and maximize growth opportunities.</p></li>
              </ul>
              <a class="cta" href="javascript:void(0)">
                Get a demo
              </a>
            </div>
            <div class="right">
              <picture>
                <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/7001/mobile-img-min.png">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/7001/desktop-img-min.png" alt="Streamline the insurance lifecycle from sales to customer retention" class="popup-hero">
              </picture>
            </div>
            <div class="close-popup"></div>
            </div>
          </div>
        </div>`)
        }

        document.body.onresize = function () {
        }

        if (window.innerWidth < 1024 || navigator.maxTouchPoints) {
            setTimeout(function () {
                if (!sessionStorage.getItem("spz-7001") && !document.querySelector('.spz-7001 .jquery-modal')) {
                    document.body.classList.add('spz-no-scroll');
                    document.querySelector('.spz-7001 .popup-wrapper').classList.add("show");
                    sessionStorage.setItem("spz-7001", "shown");
                }
            }, 10000)
        }
        else {
            document.querySelector("html").onmouseleave = function () {
                if (!sessionStorage.getItem("spz-7001") && !document.querySelector('.spz-7001 .jquery-modal')) {
                    document.body.classList.add('spz-no-scroll');
                    document.querySelector('.spz-7001 .popup-wrapper').classList.add("show");
                    sessionStorage.setItem("spz-7001", "shown");
                }
            }
        }

        document.querySelector('.spz-7001 .popup-wrapper').addEventListener("click", function (event) {
            if (event.target.classList.contains("popup-wrapper")) {
                document.querySelector('.spz-7001 .popup-wrapper').classList.remove("show")
                document.body.classList.remove('spz-no-scroll');
            }
        })
        document.querySelector('.spz-7001 .popup-wrapper .close-popup').addEventListener("click", function (event) {
            document.body.classList.remove('spz-no-scroll');
            document.querySelector('.spz-7001 .popup-wrapper').classList.remove("show")
        })
        document.querySelector('.spz-7001 .popup-wrapper .getdemo-popup .left .cta').addEventListener("click", function (event) {
            document.querySelector('.zy-header-container-inner .zy-top-demo-container>a').click();
            document.querySelector('.spz-7001 .popup-wrapper').classList.remove("show")
            document.body.classList.remove('spz-no-scroll');
        })

    }
});


// Generic Code
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