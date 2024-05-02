waitForElm('.zy-header-bottom-inner .zy-header-bottom-demo>a').then(function () {
    if (document.querySelector('#zy-demo-form-section')) {
        document.body.classList.add('spz-7001');

        if (document.querySelectorAll('body .popup-wrapper').length == 0) {
            document.querySelector('body').insertAdjacentHTML("beforeend", `
        <div class="popup-wrapper">
          <div class="getdemo-popup">
            <div class="left">
              <div class="title">Get a demo</div>
              <div class="tag">Patient Data | Clinical Outcomes | Treatment Data | Lab Records</div>
              <div class="desc">Answer your complex questions with the industry's largest patient database</div>
              <a class="cta" href="javascript:void(0)">
                Get a demo
              </a>
            </div>
            <div class="right">
              <picture>
                <source media="(max-width:767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/4001/hero-mobile.png">
                <source media="(max-width:1024.98px)" srcset="///res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/4001/hero-tablet.png">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/KomodoHealth/4001/hero-desktop.png" alt="Hero Image" class="popup-hero" width="469" height="322">
              </picture>
            </div>
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1698145805/komodohealth/4001/close__stroke.svg" alt="close" width="20" height="20" class="close-popup" />
            </div>
          </div>
        </div>`)
        }

        document.body.onresize = function () {
        }

        if (window.innerWidth < 1025 || navigator.maxTouchPoints) {
            console.log("mobile")
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
