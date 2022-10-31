const lottieLib = document.createElement('script');
lottieLib.src = 'https://unpkg.com/@lottiefiles/lottie-player@1.5.7/dist/lottie-player.js';
document.head.appendChild(lottieLib);
let player = document.querySelector("lottie-player");
let proceed = false;
const zipPopup = ['va', 'ca', 'tx'];
const urlSegs = window.location.pathname.split('/');

function loadTest() {
    let loaderAnimJSON = 'AWR-animation.json';
    document.querySelector('body').classList.add("spz-1025");

    if (window.innerWidth < 768) {
        loaderAnimJSON = 'AWR-animation-mobile.json';
    }


    if (!proceed) {
        for (let i = 0; i < zipPopup.length; i++) {
            const zip = zipPopup[i];
            if (zipPopup.includes(urlSegs[1])) {
                proceed = true;
                break;
            } else if (window.location.pathname.indexOf(zip) == -1) {
                if (window.location.pathname.indexOf('products') != 1) {
                    return false;
                }
            }
        }
    }

    if (document.querySelectorAll('lottie-player').length == 0) {
        document.querySelector('body .pace').insertAdjacentHTML('afterend', `<div class="loader-wrapper-spz"><lottie-player class="loader-lot-spz" autoplay
            src="https://res.cloudinary.com/spiralyze/raw/upload/f_auto/AWR/1025_AWR_Home_Show_Delay_Animation/${loaderAnimJSON}">
        </lottie-player></div>`);
        player = document.querySelector("lottie-player");

        player.addEventListener('play', (event) => {
            event.target.shadowRoot.querySelector('svg').style.transform = '';
        });
    }

    if (window.location.pathname == '/') {
        removeTest();
    } else {
        document.querySelector('body').classList.add("active");
        waitForElement('lottie-player').then(function () {
            player.addEventListener("ready", () => {
                player.play();
            });
        });

        setTimeout(function () {
            document.querySelector('body').classList.remove("active");
            if (document.querySelector('.loader-wrapper-spz')) {
                document.querySelector('.loader-wrapper-spz').remove();
            }
        }, 8700)
    }
}

window.addEventListener('click', function (e) {
    if (document.querySelectorAll('hos-app-provider-modal').length > 0) {
        document.querySelector('hos-app-provider-modal button.btn-margin-right').classList.add('run-anim-spz');
        document.querySelector('hos-app-provider-modal button.btn-margin-left').classList.add('run-anim-spz');
    }
    if (e.target.classList.contains('run-anim-spz')) {
        proceed = true;
        loadTest();
    }
});

// Generic
history.pushState = (function (f) {
    return function pushState() {
        let ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };
})(history.pushState);
history.replaceState = (function (f) {
    return function replaceState() {
        let ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };
})(history.replaceState);

window.addEventListener('popstate', function () {
    window.dispatchEvent(new Event('locationchange'));
});
window.addEventListener('locationchange', function () {
    url = location.href;
    urlCheck(url);
});

let url = location.href;
urlCheck(url);
function urlCheck(url) {
    let testURL = 'https://www.awrusa.com/';
    if (window.location.pathname.indexOf("products") > -1) {
        testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
        loadTest();
        // lottieLib.onload = function () {
        //     loadTest();
        // }
        // setTimeout(function () {
        //     window.addEventListener("resize", function () {
        //         loadTest();
        //     });
        // }, 3000);

        setTimeout(function () {
            if (document.querySelectorAll('.loader-wrapper-spz').length == 0) {
                removeTest();
            }
        }, 10000);
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

function removeTest() {
    document.querySelector('body').classList.remove("spz-1025");
    if (document.querySelectorAll('lottie-player').length > 0) {
        document.querySelector('.loader-wrapper-spz').remove();
    }
}

function waitForElement(selector) {
    return new Promise(function (resolve, reject) {
        var element = document.querySelector(selector);

        if (element) {
            resolve(element);
            return;
        }

        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                var nodes = Array.from(mutation.addedNodes);
                for (var node of nodes) {
                    if (node.matches && node.matches(selector)) {
                        observer.disconnect();
                        resolve(node);
                        return;
                    }
                };
            });
        });

        observer.observe(document.documentElement, { childList: true, subtree: true });
    });
}

// Set text, image etc.
function setContent(el, value, type = 'STRING') {
    if (document.querySelector(el)) {
        const tg = document.querySelector(el);
        if (type == 'IMAGE') {
            tg.src = value;
        } else {
            tg.innerText = value;
        }
    }
}

