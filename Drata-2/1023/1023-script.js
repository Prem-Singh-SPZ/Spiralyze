(function () {
    // CSS
    var cssElement = document.createElement('style');
    cssElement.type = 'text/css';
    var cssCode = `body.spz-1023-V1 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .MuiButton-ctaModulePrimary {
  width: 203px;
  height: 60px;
}
  body.spz-1023-V1 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] select option {
  color: black;
}
@media (max-width: 775.98px) {
  body.spz-1023-V1 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .MuiButton-ctaModulePrimary {
    width: 100%;
  }
}
body.spz-1023-V1 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .MuiButton-ctaModulePrimary span {
  pointer-events: none;
}
body.spz-1023-V1 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .MuiButton-ctaModulePrimary svg {
  margin-left: 30px;
  pointer-events: none;
  margin-right: -8px;
}

.spz-1023-V1 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #fff;
  width: 100%;
  max-width: 158px;
  height: 60px;
  padding: 18px 20px;
  background: transparent;
  border: none;
  position: relative;
  cursor: pointer;
  border-radius: 12px;
  position: relative;
  isolation: isolate;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.spz-1023-V1 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: black;
  z-index: -1;
  border-radius: 12px;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.spz-1023-V1 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary:hover::before {
  background: #293642;
}

.spz-1023-V1 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary svg {
  margin-left: 12px;
}

.spz-1023-V1 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary.animate {
  -webkit-animation: wiggle 500ms 1;
          animation: wiggle 500ms 1;
  -webkit-animation-delay: 1s;
          animation-delay: 1s;
}

.spz-1023-V1 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary.animate::before {
  -webkit-transform: scale(1.1334);
          transform: scale(1.1334);
}

.css-w1vsk7-MuiTypography-root-Form-styledTypography a {
  text-decoration: none;
}

@-webkit-keyframes wiggle {
  10% {
    -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
  }
  20% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  40% {
    -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
  }
  60% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  80% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}

@keyframes wiggle {
  10% {
    -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
  }
  20% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  40% {
    -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
  }
  60% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  80% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@media (max-width: 767.98px) {
  .spz-1023-V1 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary {
    max-width: 265px;
    height: 56px;
  }
  .spz-1023-V1 .css-jvfx0u-MuiTypography-root-Form-disclaimerMessage {
    text-align: center;
  }
  .spz-1023-V1 .css-1vc680q-Modal-modalContentContainer {
    max-height: 90vh;
    width: 100%;
  }
}`;
    cssElement.appendChild(document.createTextNode(cssCode));
    document.head.appendChild(cssElement);
    function createTest() {
        waitForElm('body').then(function () {
            document.querySelector("body").classList.add("spz-1023-V1");

            waitForElm('form.hs-form-private[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .hs_cro_test_1 .input .hs-input').then(function () {
                let setValue = setInterval(() => {
                    if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').getAttribute('value') == '1023_Variant1') {
                        clearInterval(setValue);
                    }
                    document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', '1023_Variant1');
                }, 100);
            });

            waitForElm('form.hs-form-private[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .MuiButton-ctaModulePrimary').then(function () {
                document.querySelector('form.hs-form-private[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .MuiButton-ctaModulePrimary').innerHTML = `<span>Get Demo</span><svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
                        <path d="M1 1L5 5L1 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                </svg>`;

                const wiggle = document.querySelector('.spz-1023-V1 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary');
                let animation_interval;

                const stopAnimation = function () {
                    clearInterval(animation_interval);
                    wiggle.classList.remove('animate');
                };

                const startAnimation = function () {
                    wiggle.classList.add('animate');
                    animation_interval = setInterval(button_animation, 5000);
                    setTimeout(() => {
                        wiggle.classList.remove('animate');
                    }, 2000);
                };

                setTimeout(() => {
                    startAnimation();
                }, 3000);

                const button_animation = function () {
                    wiggle.classList.add('animate');
                    setTimeout(() => {
                        wiggle.classList.remove('animate');
                    }, 2000);
                }

                wiggle.addEventListener('mouseover', stopAnimation);
                wiggle.addEventListener('mouseout', startAnimation);

                // Adding touch events for mobile devices
                wiggle.addEventListener('touchstart', stopAnimation);
                wiggle.addEventListener('touchend', startAnimation);
            });
        });
    }

    function removeTest() {
        document.body.classList.remove("spz-1023-V1");
    }

    history.pushState = (function (f) {
        return function pushState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('replacestate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.replaceState);
    window.addEventListener('popstate', function () {
        window.dispatchEvent(new Event('locationchange'));
    });
    var url = location.href;
    urlCheck(url);
    window.addEventListener('locationchange', function () {
        url = location.href;
        urlCheck(url);
    });

    function urlCheck(url) {
        let testURL = '';
        if (window.location.pathname.indexOf("demo") !== -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            createTest();
        } else {
            removeTest();
        }
    }

    function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
        currentUrl = currentUrl.includes("#") ?
            currentUrl.slice(0, currentUrl.indexOf("#")) :
            currentUrl;
        specifiedUrl = specifiedUrl.includes("#") ?
            specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
            specifiedUrl;
        if (!includeQueryParams)
            currentUrl = currentUrl.includes("?") ?
                currentUrl.slice(0, currentUrl.indexOf("?")) :
                currentUrl;
        if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
            return true;
        return false;
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
})();