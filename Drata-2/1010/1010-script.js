(function () {
    // CSS
    var cssElement = document.createElement('style');
    cssElement.type = 'text/css';
    var cssCode = `
    .spz-1010 div#__next {display: none;}
    .spz-1010 .mui-1ek5bku-Modal-modalContentContainer {
      max-width: 633px;
      width: 100%;
      margin: auto;
      overflow: unset;
      max-height: unset;
      position: relative;
      top: initial;
      left: initial;
      transform: unset;
    }
    .spz-1010 .mui-79ws1d-MuiModal-root {
      display: flex;
      position: absolute;
      padding: 20px;
      overflow: auto;
    }
    .spz-1010 .MuiModal-root.mui-79ws1d-MuiModal-root > .MuiBox-root.mui-0 {
      display: none;
    }
    .spz-1010 .spz-video-bg {
      position: fixed;
      left: 0;
      top: 0;
      min-width: 100%; 
      min-height: 100%;
      z-index: 99;
    }
    .spz-1010 .spz-video-bg::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    }
     @media (min-width: 1900.98px) {.spz-1010 .spz-video-bg video{width:100%;}}
     @media(max-width: 767.98px) {
      .spz-1010 .mui-79ws1d-MuiModal-root {
        padding: 15px
      }
     }
    `;
    cssElement.appendChild(document.createTextNode(cssCode));
    document.head.appendChild(cssElement);
    function createTest() {
        waitForElm('.mui-79ws1d-MuiModal-root').then(function () {
            document.querySelector("body").classList.add("loading-spz_test");
            document.querySelector("body").classList.add("spz-1010");
            if (!document.querySelector('.spz-1010 .spz-video-bg')) {
                document.body.insertAdjacentHTML("afterbegin", `<div class="spz-video-bg">
              <video autoplay muted loop playsinline>
                <source src="//res.cloudinary.com/spiralyze/video/upload/v1706178007/drata/1010/Video.mp4" type="video/mp4">
              </video>
            </div>`);
            }
            waitForElm('form.hs-form-private .hs_cro_test_1 .input .hs-input').then(function () {
                let setValue = setInterval(() => {
                    if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').getAttribute('value') == '#1010_variant') {
                        clearInterval(setValue);
                    }
                    document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', '#1010_variant');
                }, 100);
            });
        });
    }

    function removeTest() {
        document.body.classList.remove("loading-spz_test");
        document.body.classList.remove("spz-1010");
        if (document.querySelector('.spz-video-bg')) {
            document.querySelector('.spz-video-bg').remove();
        }
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