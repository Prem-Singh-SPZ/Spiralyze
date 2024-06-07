createTest4001();

function createTest4001() {
    document.body.classList.add('spz-4001');

    waitForElm('.zy-header-bottom-inner .zy-header-bottom-demo>a').then(function () {
        insertStickySection();
    });

    waitForElm('body .spz-sticky-footer').then(function () {
        // window.onload = checkScrollPosition();
        window.onscroll = function () {
            checkScrollPosition();
        };
    });
}

//perform click actions
window.addEventListener("click", function (e) {
    // console.log(e.target)
    if (e.target.classList.contains("sticky-close-btn")) {
        this.document.querySelector('.spz-sticky-footer').remove();
        // document.querySelector('body').style.paddingBottom = "0px";
        document.body.classList.remove('sticky-footer-show');
    }
    if (e.target.classList.contains("trigger-demo-btn")) {
        this.document.querySelector('.zy-header-bottom-demo>a').click();
    }
});


function insertStickySection() {
    if (document.querySelectorAll('body .spz-sticky-footer').length == 0) {
        document.querySelector('body').insertAdjacentHTML('beforeend', `<div class="spz-sticky-footer"><div class="sticky-footer">
        <div class="sticky-container">
            <div class="left-content">
                <span>Streamline every step of the insurance lifecycle management</span>
            </div>
            <div class="right-content">
                <a href="javascript:void(0)" class="hs-cta-primary trigger-demo-btn">Book a Demo</a>
            </div>
            </div>
            <div class="close-sticky">
            <a href="javascript:void(0)" class="sticky-close-btn"></a>
            </div>
        </div>
    </div>
    `)
    }
}

function checkScrollPosition() {
    waitForElm('body .zy-mobile-header').then(function () {
        let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        let headerHeight = document.querySelector('body .zy-mobile-header').offsetHeight + document.querySelector('body .zy-header-container').offsetTop;
        var heroHeight = document.querySelector('.zy-hero-container-general').offsetHeight;
        var totalHeight = headerHeight;
        if (document.querySelector('body .spz-sticky-footer')) {
            let stickyHeight = document.querySelector('body .spz-sticky-footer').offsetHeight;

            if (scrollTop > totalHeight) {
                document.querySelector('body .spz-sticky-footer').classList.add('show-sticky');
                document.body.classList.add('sticky-footer-show');
                // document.querySelector('body').style.paddingBottom = stickyHeight + "px";
            }
            else {
                if (document.querySelector('body .spz-sticky-footer').classList.contains('show-sticky')) {
                    document.querySelector('body .spz-sticky-footer').classList.remove('show-sticky');
                    document.body.classList.remove('sticky-footer-show');
                    // document.querySelector('body').style.paddingBottom = "0px";
                }
            }
        }
    });

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