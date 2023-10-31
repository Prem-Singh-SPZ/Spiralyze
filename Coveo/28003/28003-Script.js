let init_timer = 1;

var css28003 = `/* Stop scroll when pop is visible */
@-webkit-keyframes scaleIn {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scaleIn {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@-webkit-keyframes scaleOut {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0;
  }
}
@keyframes scaleOut {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0;
  }
}
@-webkit-keyframes opIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes opOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes opOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.spz-coveo-28003 .spz-coveo-overlay {
  display: none;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}

@media (min-width: 1024px) {
  html.spz-coveo-28003-popup-visible {
    overflow: hidden;
  }
  body.spz-coveo-28003.exitpopup28003displayed {
    overflow: hidden;
  }
  .spz-coveo-28003 .spz-coveo-overlay {
    overflow-x: hidden !important;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.64);
    display: none;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 2rem 0;
    overflow: auto;
    opacity: 0;
    -webkit-animation-name: opIn;
    animation-name: opIn;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-direction: normal;
    animation-direction: normal;
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .spz-coveo-28003 .spz-coveo-popup {
    opacity: 0;
    -webkit-animation-name: scaleIn;
    animation-name: scaleIn;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-direction: normal;
    animation-direction: normal;
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    display: block;
    max-width: 749px;
    width: 100%;
    margin: auto;
    border-radius: 8px;
    background: var(--popup-background, linear-gradient(0deg, rgba(69, 28, 92, 0.45) 0%, rgba(69, 28, 92, 0.45) 100%), linear-gradient(56deg, #41165a 4.04%, #620597 44.67%, #6900a4 55.21%, #650899 67.4%, #4f1d6b 89%));
    -webkit-box-shadow: 0px 32px 64px 0px rgba(0, 0, 0, 0.36);
            box-shadow: 0px 32px 64px 0px rgba(0, 0, 0, 0.36);
    padding-top: 58px;
    padding-left: 52px;
    padding-bottom: 72px;
    padding-right: 52px;
    position: relative;
  }
  .spz-coveo-28003 .spz-coveo-popup .spz-close {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    line-height: 1;
    cursor: pointer;
  }
  .spz-coveo-28003 .spz-coveo-popup .spz-close svg {
    display: block;
    opacity: 0.7;
  }
  .spz-coveo-28003 .spz-coveo-popup .spz-close:hover svg {
    opacity: 1;
  }
  .spz-coveo-28003 .spz-coveo-popup .spz-coveo-popup-logo img {
    display: block;
    max-width: 140px;
    width: 100%;
  }
  .spz-coveo-28003 .spz-coveo-popup .spz-coveo-popup-content-title {
    font-size: 42px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: 0.42px;
    text-align: left;
    color: #ffffff;
    margin: 0;
    margin-top: 36px;
    margin-bottom: 24px;
  }
  .spz-coveo-28003 .spz-coveo-popup .spz-coveo-popup-content-title span {
    color: #16dcc1;
    font-size: 42px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: 0.42px;
  }
  .spz-coveo-28003 .spz-coveo-popup .spz-coveo-popup-content-description {
    display: block;
    max-width: 272px;
    margin-bottom: 65px;
  }
  .spz-coveo-28003 .spz-coveo-popup .spz-coveo-popup-content-description p {
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    margin: 0;
  }
  .spz-coveo-28003 .spz-coveo-popup .spz-coveo-popup-greview {
    display: block;
    max-width: 243px;
    width: 100%;
  }
  .spz-coveo-28003 .spz-coveo-popup .spz-coveo-popup-cta {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.176px;
    text-align: left;
    color: #390c53;
    height: 56px;
    max-width: 203px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 32px;
    padding: 5px;
    background: var(--CTA-gradient, linear-gradient(262deg, #1cebcf -21.66%, #399ffe 118.19%), linear-gradient(81deg, #1cebcf -2.38%, #399ffe 104.62%));
    border-radius: 8px;
    text-decoration: none !important;
  }
  .spz-coveo-28003 .spz-coveo-popup .spz-coveo-popup-cta:hover {
    background: linear-gradient(81deg, #1cebcf -2.38%, #399ffe 104.62%);
  }
  .spz-coveo-28003 .spz-coveo-popup .spz-bg-diamond {
    display: block;
    max-width: 347px;
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    height: auto;
    border-bottom-right-radius: 8px;
  }
  .spz-coveo-28003 .spz-coveo-popup .spz-result {
    display: block;
    position: absolute;
    right: -124px;
    bottom: 58px;
    width: 549.524px;
    height: 343.284px;
    -webkit-box-shadow: 0px 14px 12px 0px rgba(0, 0, 0, 0.25);
            box-shadow: 0px 14px 12px 0px rgba(0, 0, 0, 0.25);
    -webkit-transform: rotate(-4deg);
            transform: rotate(-4deg);
    border-radius: 1.5%;
  }
  .spz-coveo-28003.scaleoutpopup .spz-coveo-overlay {
    -webkit-animation-name: opOut;
    animation-name: opOut;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-direction: normal;
    animation-direction: normal;
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .spz-coveo-28003.scaleoutpopup .spz-coveo-overlay .spz-coveo-popup {
    -webkit-animation-name: scaleOut;
    animation-name: scaleOut;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-direction: normal;
    animation-direction: normal;
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .spz-coveo-28003.exitpopup28003displayed .spz-coveo-overlay {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}`;

head = document.head || document.getElementsByTagName('head')[0],
style28003 = document.createElement('style');
head.appendChild(style28003);
style28003.type = 'text/css';
style28003.appendChild(document.createTextNode(css28003));

waitForElm('body').then((elm) => {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-coveo-28003')) {
        bodyEle.classList.add('spz-coveo-28003');
    }
    document.body.addEventListener("mousemove", function () {
        if (!bodyEle.classList.contains('spz-coveo-28003')) {
            bodyEle.classList.add('spz-coveo-28003');
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
    //             document.body.classList.remove('exitpopup28003displayed');
    //             document.body.classList.remove('scaleoutpopup');
    //             document.querySelectorAll('html')[0].classList.remove('spz-coveo-28003-popup-visible');
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
        exitpopupconfig();
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
        var myCookie = getCookie("spzcoveo28003exitpopup");
        let count = +(getCookie('spz_existing_user'));
        let isFormSubmitted = getCookie('spz_form_submitted')
        if (mouseY <= topValue && myCookie == null && count < 4 && isFormSubmitted == null) {
            var bodyTag = document.querySelector('body');
            if (!bodyTag.classList.contains('exitpopup28003displayed')) {
                bodyTag.classList.add('exitpopup28003displayed');
                document.querySelectorAll('html')[0].classList.add('spz-coveo-28003-popup-visible');
                if (myCookie == null) {
                    document.cookie = `spzcoveo28003exitpopup=1; path=/`;

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
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1697516906/coveo/28003/shape__focus_6.svg" alt="Diamond" class="spz-bg-diamond">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/coveo/28003/genaiheadaches_cover_1440_-_without_shadow_3.webp" alt="Coveo Result" class="spz-result">
                <!-- close popup icon -->
                <a class="spz-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15.8332 5.34166L14.6582 4.16666L9.99984 8.82499L5.3415 4.16666L4.1665 5.34166L8.82484 9.99999L4.1665 14.6583L5.3415 15.8333L9.99984 11.175L14.6582 15.8333L15.8332 14.6583L11.1748 9.99999L15.8332 5.34166Z" fill="#8E959D"/>
              </svg>   
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

        waitForElm('.spz-coveo-28003 .spz-close').then((elm) => {
            document.querySelectorAll('.spz-coveo-28003 .spz-close')[0].addEventListener('click', function () {
                document.body.classList.add('scaleoutpopup');
                setTimeout(function () {
                    document.body.classList.remove('exitpopup28003displayed');
                    document.body.classList.remove('scaleoutpopup');
                    document.querySelectorAll('html')[0].classList.remove('spz-coveo-28003-popup-visible');
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
