var cssElement = document.createElement('style');
cssElement.type = 'text/css';
var cssCode = `.spz-1019 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary {
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
  transition:all 0.5s ease;
}
.spz-1019 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: black;
  z-index: -1;
  border-radius: 12px;
  transition: all 0.4s ease-in-out;
}
.spz-1019 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary:hover::before {
  background: #293642;
}
.spz-1019 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary svg {
  margin-left: 12px;
}
.spz-1019 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary.animate{
	animation: wiggle 500ms 1; 
  animation-delay:1s; 
}
.spz-1019 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary.animate::before {
	transform: scale(1.1334);
}
.css-w1vsk7-MuiTypography-root-Form-styledTypography a{
  text-decoration: none;
}
@keyframes wiggle{
  10%{ transform:rotate(-2deg); }
  20%{ transform:rotate(2deg); }
  40%{ transform:rotate(-2deg); }
  60%{ transform:rotate(2deg); }
  80%{ transform:rotate(0deg); }
}
@media(max-width: 767.98px) {
  .spz-1019 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary {
    max-width: 265px;
    height: 56px;
  }
  .spz-1019 .css-jvfx0u-MuiTypography-root-Form-disclaimerMessage{
    text-align: center;
  }
  .spz-1019 .css-1vc680q-Modal-modalContentContainer{
   max-height: 90vh;
   width: 100%;
  }
}`;
cssElement.appendChild(document.createTextNode(cssCode));
document.head.appendChild(cssElement);

(function () {
  function createTest() {
    let bodyLoaded = setInterval(function () {
      const body = document.querySelector('body');
      if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz-1019')) {
          body.classList.add('spz-1019');
          waitForElm('.spz-1019 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary').then(function () {
            setHiddenFields();
            document.querySelector(`.spz-1019 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary`).innerHTML = `Get Started<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3.99707L10 7.99707L6 11.9971" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>`;
            const wiggle = document.querySelector('.spz-1019 form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] button.MuiButton-ctaModulePrimary');
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
        }
      }
    });
  }

  function removeTest() {
    setTimeout(() => {
      if (document.querySelector('.spz-1019')) {
        document.body.classList.remove("spz-1019");
      }
    }, 2000);
  }

  function setHiddenFields() {
    waitForElm('form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .hs_cro_test_1 .input .hs-input').then(function () {
      document.querySelector('form[data-form-id="3d064146-843f-404a-97b0-6515b61c518b"] .hs_cro_test_1 .input .hs-input').setAttribute('value', 'Variant_#1019a');
    });
  }

  history.pushState = (function (f) {
    return function pushState() {
      var ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("pushstate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };
  })(history.pushState);
  history.replaceState = (function (f) {
    return function replaceState() {
      var ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("replacestate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };
  })(history.replaceState);
  window.addEventListener("popstate", function () {
    window.dispatchEvent(new Event("locationchange"));
  });
  var url = location.href;
  urlCheck(url);
  window.addEventListener("locationchange", function () {
    url = location.href;
    urlCheck(url);
  });

  function urlCheck(url) {
    let testURL = "";
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
    currentUrl = currentUrl.includes("#")
      ? currentUrl.slice(0, currentUrl.indexOf("#"))
      : currentUrl;
    specifiedUrl = specifiedUrl.includes("#")
      ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
      : specifiedUrl;
    if (!includeQueryParams)
      currentUrl = currentUrl.includes("?")
        ? currentUrl.slice(0, currentUrl.indexOf("?"))
        : currentUrl;
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
      observer.observe(document, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
      });
    });
  }
})();