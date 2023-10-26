waitForElm('body').then((elm) => {

    console.log('shiv')
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-coveo-28002')) {
        bodyEle.classList.add('spz-coveo-28002');
    }
    document.body.addEventListener("mousemove", function () {
        if (!bodyEle.classList.contains('spz-coveo-28002')) {
            bodyEle.classList.add('spz-coveo-28002');
        }
    });
    exitpopupconfig();

    // document.body.addEventListener('click', function(e){
    //     if(e.target.classList.contains('spz-coveo-overlay'))
    //     {
    //         document.body.classList.add('scaleoutpopup');
    //         setTimeout(function() {
    //             document.body.classList.remove('exitpopup28002displayed');
    //             document.body.classList.remove('scaleoutpopup');
    //             document.querySelectorAll('html')[0].classList.remove('spz-coveo-28002-popup-visible');
    //         }, 1000);
    //     }
    // });
});

function exitpopupconfig() {
    exitPopupInit();
    var mouseY = 0;
    var topValue = 10;
    addEvent(document, 'mouseout', function (evt) {
        mouseY = evt.clientY;
        var myCookie = getCookie("spzcoveo28002exitpopup");
        if (mouseY <= topValue && myCookie == null) {
            var bodyTag = document.querySelector('body');
            if (!bodyTag.classList.contains('exitpopup28002displayed')) {
                bodyTag.classList.add('exitpopup28002displayed');
                document.querySelectorAll('html')[0].classList.add('spz-coveo-28002-popup-visible');
                if (myCookie == null) {
                    document.cookie = `spzcoveo28002exitpopup=1; expires=${new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365).toGMTString()}; path=/`;
                }
                else { }
            }
        }
    });
}

function exitPopupInit() {
    let popup_html = `
        <div class="spz-coveo-overlay">
            <div class="spz-coveo-popup">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/Coveo/28002/diamond-shape.png" alt="Diamond" class="spz-bg-diamond">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1694609669/coveo/28002/desktop_image_1.svg" alt="Coveo Result" class="spz-result">
                <!-- close popup icon -->
                <a class="spz-close">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8334 1.34166L10.6584 0.166656L6.00008 4.82499L1.34175 0.166656L0.166748 1.34166L4.82508 5.99999L0.166748 10.6583L1.34175 11.8333L6.00008 7.17499L10.6584 11.8333L11.8334 10.6583L7.17508 5.99999L11.8334 1.34166Z" fill="#C5CACF"/></svg>    
                </a>
                <div class="spz-coveo-popup-wrapper">
                    <div class="spz-coveo-popup-logo">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1694609732/coveo/28002/coveo_horizontal_logo.svg" alt="Coveo Logo">
                    </div>
                    <div class="spz-coveo-popup-content">
                        <h2 class="spz-coveo-popup-content-title">The world's first relevance <br>AI platform</h2>
                        <div class="spz-coveo-popup-content-description">
                            <p>Factually accurate, contextually relevant question answering. Enterprise-grade security. <br>Multiple content sources.</p>
                        </div>
                        <a href="https://www.coveo.com/en/contact/generative-ai" class="spz-coveo-popup-cta">Get a demo</a>
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1694755399/Coveo/28002/google-reviews.svg" alt="Google Review" class="spz-coveo-popup-greview">
                    </div>
                </div>
            </div>
        </div>
    `;

    if (document.querySelectorAll('body .spz-coveo-popup').length == 0) {
        document.body.insertAdjacentHTML('beforeend', popup_html);

        waitForElm('.spz-coveo-28002 .spz-close').then((elm) => {
            document.querySelectorAll('.spz-coveo-28002 .spz-close')[0].addEventListener('click', function () {
                document.body.classList.add('scaleoutpopup');
                setTimeout(function () {
                    document.body.classList.remove('exitpopup28002displayed');
                    document.body.classList.remove('scaleoutpopup');
                    document.querySelectorAll('html')[0].classList.remove('spz-coveo-28002-popup-visible');
                }, 1000);
            });
        });
    }
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) { end = dc.length; }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}

function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
