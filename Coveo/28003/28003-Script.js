let init_timer = 1;


waitForElm('body').then((elm) => {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-coveo-28002')) {
        bodyEle.classList.add('spz-coveo-28002');
    }
    document.body.addEventListener("mousemove", function () {
        if (!bodyEle.classList.contains('spz-coveo-28002')) {
            bodyEle.classList.add('spz-coveo-28002');
        }
    });

    if (!getCookie('spz_existing_user')) {
        setCookieForTimer('spz_existing_user', init_timer, (30 * 24));
    }

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

    if (location.href.indexOf('resources/ebooks/cio-cure-genai-headaches') > -1) {
        waitForElm('.large[data-form-id="resources_details"] div[am-form-messages] div[data-cy="resource-document-success-message"]').then((elm) => {
            setCookieForTimer('spz_form_submitted', 1, (30 * 24));
        });
        waitForElm('.form-container .card [data-cy="resource-cta"] [data-tracking="view-resource-cta"]').then((elm) => {
            setCookieForTimer('spz_form_submitted', 1, (30 * 24));
        });
    }

    else {
        exitpopupconfig();
    }
});

function exitpopupconfig() {
    exitPopupInit();
    var mouseY = 0;
    var topValue = 10;
    addEvent(document, 'mouseout', function (evt) {
        mouseY = evt.clientY;
        var myCookie = getCookie("spzcoveo28002exitpopup");
        let count = +(getCookie('spz_existing_user'));
        let isFormSubmitted = getCookie('spz_form_submitted')
        if (mouseY <= topValue && myCookie == null && count < 4 && isFormSubmitted == null) {
            var bodyTag = document.querySelector('body');
            if (!bodyTag.classList.contains('exitpopup28002displayed')) {
                bodyTag.classList.add('exitpopup28002displayed');
                document.querySelectorAll('html')[0].classList.add('spz-coveo-28002-popup-visible');
                if (myCookie == null) {
                    document.cookie = `spzcoveo28002exitpopup=1; expires=${new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365).toGMTString()}; path=/`;

                    let count = +(getCookie('spz_existing_user'));

                    if (getCookie('spz_existing_user')) {
                        count = parseInt(getCookie('spz_existing_user')) + 1;
                        setCookieForTimer('spz_existing_user', count, (30 * 24));
                    }
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
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/coveo/28003/genaiheadaches_cover_1440_-_without_shadow.webp" alt="Coveo Result" class="spz-result">
                <!-- close popup icon -->
                <a class="spz-close">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8334 1.34166L10.6584 0.166656L6.00008 4.82499L1.34175 0.166656L0.166748 1.34166L4.82508 5.99999L0.166748 10.6583L1.34175 11.8333L6.00008 7.17499L10.6584 11.8333L11.8334 10.6583L7.17508 5.99999L11.8334 1.34166Z" fill="#C5CACF"/></svg>    
                </a>
                <div class="spz-coveo-popup-wrapper">
                    <div class="spz-coveo-popup-logo">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1694609732/coveo/28002/coveo_horizontal_logo.svg" alt="Coveo Logo">
                    </div>
                    <div class="spz-coveo-popup-content">
                        <h2 class="spz-coveo-popup-content-title">GenAI Headaches:<br><span>The Cure for CIOs</span></h2>
                        <div class="spz-coveo-popup-content-description">
                            <p>Pressure is mounting to create Generative AI solutions – but cautions abound. Here&#8217;s how to meet your goals, while reducing your costs and risks.</p>
                        </div>
                        <a href="https://www.coveo.com/en/resources/ebooks/cio-cure-genai-headaches" class="spz-coveo-popup-cta">Download the Ebook</a>
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

// Set a Cookie
function setCookieForTimer(cName, cValue, expHours) {
    let date = new Date();
    date.setTime(date.getTime() + (expHours * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
