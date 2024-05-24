if (!document.querySelector('.spz-4006')) {
    document.querySelector('body').classList.add('spz-4006')
    const loadJS = (url, implementationCode, location) => {
        var scriptTag = document.createElement('script');
        scriptTag.src = url;

        scriptTag.onload = implementationCode;
        scriptTag.onreadystatechange = implementationCode;

        location.appendChild(scriptTag);
    };
    var yourCodeToBeCalled = function () {
        //your code goes here
        //console.log("ok")
    }
    loadJS('https://res.cloudinary.com/spiralyze/raw/upload/v1698656854/KomodoHealth/4001/bodyScrollLock.js', function () { }, document.body);
    document.querySelector('body').insertAdjacentHTML("beforeend", `
        <div class="popup-wrapper">
          <div class="getdemo-popup">
            <div class="left">
              <div class="title">Get a demo</div>
              <div class="tag">Patient Data | Clinical Outcomes | Treatment Data | Lab Records</div>
              <div class="desc">Answer your complex questions with the industry's largest patient database</div>
              <a class="cta" href="#popup_request_a_demo" rel="modal:open">
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
        </div>
    `)
    document.body.onresize = function () {
    }
    document.querySelector("html").onmouseleave = function () {
        if (!localStorage.getItem("spz-4006") && !document.querySelector('.spz-4006 .jquery-modal')) {
            bodyScrollLock.disableBodyScroll(document.querySelector('.spz-4006 .popup-wrapper'));
            document.querySelector('.spz-4006 .popup-wrapper').classList.add("show");
            localStorage.setItem("spz-4006", "shown");
        }
    }
    if (window.matchMedia("(max-width: 1024.98px)").matches || navigator.maxTouchPoints) {
        console.log("mobile")
        setTimeout(function () {
            if (!localStorage.getItem("spz-4006") && !document.querySelector('.spz-4006 .jquery-modal')) {

                bodyScrollLock.disableBodyScroll(document.querySelector('.spz-4006 .popup-wrapper'));
                document.querySelector('.spz-4006 .popup-wrapper').classList.add("show");
                localStorage.setItem("spz-4006", "shown");
            }
        }, 10000)
    }
    document.querySelector('.spz-4006 .popup-wrapper').addEventListener("click", function (event) {
        if (event.target.classList.contains("popup-wrapper")) {
            document.querySelector('.spz-4006 .popup-wrapper').classList.remove("show")
            bodyScrollLock.enableBodyScroll(document.querySelector('.spz-4006 .popup-wrapper'));
        }
    })
    document.querySelector('.spz-4006 .popup-wrapper .close-popup').addEventListener("click", function (event) {

        document.querySelector('.spz-4006 .popup-wrapper').classList.remove("show")
        bodyScrollLock.enableBodyScroll(document.querySelector('.spz-4006 .popup-wrapper'));
    })
    document.querySelector('.spz-4006 .popup-wrapper .getdemo-popup .left .cta').addEventListener("click", function (event) {
        document.querySelector('.spz-4006 .popup-wrapper').classList.remove("show")
        bodyScrollLock.enableBodyScroll(document.querySelector('.spz-4006 .popup-wrapper'));
    })
}
/* EDITELEMENT */
vwo_$(".tag").html("Complete RWD | Patient-Level Analytics | Innovative Software");
/* EDITELEMENT */
vwo_$(".desc").html("Answer your complex questions with the industry’s only full-stack insights platform");
