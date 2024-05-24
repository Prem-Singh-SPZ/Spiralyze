if (!document.querySelector('.spz-4006') && window.innerWidth > 1024) {
    document.body.classList.add('spz-4006');

    document.querySelector('body').insertAdjacentHTML("beforeend", `
        <div class="popup-wrapper">
          <div class="getdemo-popup">
            <div class="left">
              <div class="title">Get a demo</div>
              <div class="description">Complete Real-World Patient Data. Optimize Strategy, Trials, and Outcomes.</div>
              <ul class="m-list">
              <li><span>Healthcare Map™:</span> Track and analyze real-time patient journeys of 330+ million unique individuals.</li>
              <li><span>Extended Demographics:</span> Get lab, EHR, genomics, race, and mortality insights. Find the perfect patients.</li>
              <li><span>Strategy:</span> Discover provider and payer market activity. Track treatments and trials. Optimize outcomes.</li>
              </ul>
              <a class="cta" href="#popup_request_a_demo" rel="modal:open">
                Get a demo
              </a>
            </div>
            <div class="right">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/komodohealth/4006/ui_1441.webp" alt="Hero Image" class="popup-hero" width="427" height="448">
            </div>
            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/komodohealth/4006/close__stroke.svg" alt="close" width="20" height="20" class="close-popup" />
            </div>
          </div>
        </div>
    `)
    document.body.onresize = function () {
    }
    document.querySelector("html").onmouseleave = function () {
        if (!localStorage.getItem("spz-4006") && !document.querySelector('.spz-4006 .jquery-modal')) {
            document.querySelector('.spz-4006 .popup-wrapper').classList.add("show");
            document.body.classList.add('spz-modal-show');
            document.querySelector('html').classList.add('spz-modal-show');
            localStorage.setItem("spz-4006", "shown");
        }
    }
    // if (window.matchMedia("(max-width: 1024.98px)").matches || navigator.maxTouchPoints) {
    //     console.log("mobile")
    //     setTimeout(function () {
    //         if (!localStorage.getItem("spz-4006") && !document.querySelector('.spz-4006 .jquery-modal')) {
    //             document.querySelector('.spz-4006 .popup-wrapper').classList.add("show");
    //             document.body.classList.add('spz-modal-show');
    //             document.querySelector('html').classList.add('spz-modal-show');
    //             localStorage.setItem("spz-4006", "shown");
    //         }
    //     }, 10000)
    // }
    document.querySelector('.spz-4006 .popup-wrapper').addEventListener("click", function (event) {
        if (event.target.classList.contains("popup-wrapper")) {
            document.querySelector('.spz-4006 .popup-wrapper').classList.remove("show");
            document.body.classList.remove('spz-modal-show');
            document.querySelector('html').classList.remove('spz-modal-show');
        }
    })
    document.querySelector('.spz-4006 .popup-wrapper .close-popup').addEventListener("click", function (event) {
        document.body.classList.remove('spz-modal-show');
        document.querySelector('.spz-4006 .popup-wrapper').classList.remove("show");
        document.querySelector('html').classList.remove('spz-modal-show');
    })
    document.querySelector('.spz-4006 .popup-wrapper .getdemo-popup .left .cta').addEventListener("click", function (event) {
        document.querySelector('.spz-4006 .popup-wrapper').classList.remove("show");
        document.body.classList.remove('spz-modal-show');
        document.querySelector('html').classList.remove('spz-modal-show');
    })
}
