const TEST_ENV = {
    name: '1002-PDP-Prozac',
    class: 'spz-1002', // class will be used in body ex. spz-1001
    date: '14-02-2023',
    base_url: 'https://cymatics.fm/', // control domain url
    test_url: '/products/', // url segment where test will run on
    main_class: 'body', // parent class where test is going to be applied
}

function loadTest() {
    var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
    var cookieValue = "1";
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

    // Set test class
    document.body.classList.add(TEST_ENV.class);
    if (location.pathname.includes('7-for-7-anniversary-bundle') || location.pathname.includes('anniversary-melodies-bundle') || location.pathname.includes('fractals-synth-melodies')) {
        if (location.pathname.includes('7-for-7-anniversary-bundle-sb1')) {
            waitForElm('.shopify-section .ss-button').then(function () {
                document.querySelector('.product-section .ss-button').classList.add('overview-txt');
                document.querySelector('.product-section .ss-button').insertAdjacentHTML('afterbegin', initIconSection());
                moveElement(".product-section .ss-button .glow-btn", ".spz-icons-section");
            });
        }
        else {
            waitForElm('.shopify-section .ss-button').then(function () {
                document.querySelector('.ss-button').insertAdjacentHTML('afterbegin', initIconSection());
                moveElement(".ss-button .glow-btn", ".spz-icons-section");
            });
        }

        waitForElm('.spz-icons-section .glow-btn').then(function () {
            document.querySelector('.spz-icons-section .glow-btn').innerHTML = "Add to cart";
        });
    }
    if (location.pathname.includes('horizons-gospel-melody-collection') || location.pathname.includes('anthem-drill-melody-collection')) {
        waitForElm('.shopify-section .cta-button').then(function () {
            document.querySelector('.cta-button').insertAdjacentHTML('afterbegin', initIconSection());
            moveElement(".cta-button .glow-btn", ".spz-icons-section");
        });
        waitForElm('.spz-icons-section .glow-btn').then(function () {
            document.querySelector('.spz-icons-section .glow-btn').innerHTML = "Add to cart";
        });
    }
    if (location.pathname.includes('7th-anniversary-mystery-pack')) {
        waitForElm('#MainContent .btn.gold-btn').then(function () {
            console.log('lll')
            document.querySelector('.mystery-specs.standard-edition').insertAdjacentHTML('beforeend', initIconSection());
            moveElement(".mystery-specs .btn.gray-btn", ".mystery-specs.standard-edition .spz-icons-section");
            document.querySelector('.mystery-specs.gold-edition').insertAdjacentHTML('beforeend', initIconSection());
            moveElement(".mystery-specs .btn.gold-btn", ".mystery-specs.gold-edition .spz-icons-section");
        });
    }
    if (location.pathname.includes('drill-essential-drum-kit') || location.pathname.includes('aura-trapsoul-vocal-chops') || location.pathname.includes('shimmer-fx-sample-pack')) {
        waitForElm('.shopify-section .cta-btns').then(function () {
            document.querySelector('.cta-btns.d-block.d-md-none').insertAdjacentHTML('beforeend', initIconSection());
            moveElement(".cta-btns.d-block.d-md-none .glow-btn", ".cta-btns.d-block.d-md-none .spz-icons-section");
            document.querySelector('.cta-btns.d-none.d-md-block').insertAdjacentHTML('beforeend', initIconSection());
            moveElement(".cta-btns.d-none.d-md-block .glow-btn", ".cta-btns.d-none.d-md-block .spz-icons-section");
        });
    }
    document.body.classList.add("loaded");
}

// function iconToolTip(elem) {
//     waitForElm('.spz-icons-section .icon-item').then(function () {
//         document.querySelectorAll('.spz-icons-section .icon-item').forEach(function (v, i) {
//             if (v.classList.contains('active') && v.querySelector('.icon-img').getAttribute('alt') != elem) {
//                 v.classList.remove('active');
//                 v.parentElement.classList.remove('icon-active');
//             }
//         });
//     });
// }
// window.addEventListener("click", function (e) {
//     if (e.target.classList.contains("icon-img")) {
//         iconToolTip(e.target.getAttribute('alt'));
//         setTimeout(() => {
//             e.target.parentElement.classList.add('active');
//             e.target.parentElement.parentElement.classList.add('icon-active');
//         }, 200);
//     } else {
//         iconToolTip('null');
//     }
// });

function initIconSection() {
    return `
    <div class="spz-icons-section"><div class="spz-icon-container"><div class="icon-title">Works with</div><div class="spz-icons">
    `+ loopIconData() + `
    </div></div></div>
`
        ;
}
function loopIconData() {
    let reviewData = [
        {
            title: "FL Studio",
            src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/Cymatics/1002/Icons/FL_Studio.jpg",
        },
        {
            title: "Ableton",
            src: "//res.cloudinary.com/spiralyze/image/upload/v1676439859/Cymatics/1002/Icons/Ableton_logo.svg",
        },
        {
            title: "Garageband",
            src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/Cymatics/1002/Icons/Garageband.jpg",
        },
        {
            title: "Garageband ",
            src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/Cymatics/1002/Icons/Garageband2.jpg",
        },
        {
            title: "Logic Pro X",
            src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/Cymatics/1002/Icons/Logic_Pro_X.jpg",
        },
        {
            title: "Ableton ",
            src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/Cymatics/1002/Icons/Ableton_Live.jpg",
        },
        {
            title: "Bitwig Studio",
            src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/Cymatics/1002/Icons/Bitwig_Studio.jpg",
        },
        {
            title: "Reasons Studio",
            src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/Cymatics/1002/Icons/Reasons_Studio.jpg",
        },
        {
            title: "Studio One",
            src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/Cymatics/1002/Icons/Studio_One.jpg",
        },
        {
            title: "Cubasis",
            src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/Cymatics/1002/Icons/Cubasis.jpg",
        },
        {
            title: "Cockos",
            src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/Cymatics/1002/Icons/Cockos.jpg",
        },
        {
            title: "Pro Tools",
            src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/Cymatics/1002/Icons/Pro_Tools.jpg",
        },
    ];
    let htmlD = '';

    if (reviewData.length > 0) {
        for (let i = 0; i < reviewData.length; i++) {
            htmlD += `<div class= "icon-item"><img class="icon-img" alt="` + reviewData[i].title + `" src="` + reviewData[i].src + `">
            <p>`+ reviewData[i].title + `</p>
            </div>
        `;
        }
    }

    return htmlD;
}

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
    let testURL = TEST_ENV.base_url;
    if (window.location.pathname.indexOf(TEST_ENV.test_url) > -1 || window.location.pathname.indexOf("/pages/") > -1) {
        testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
        waitForElm(TEST_ENV.main_class).then(function () {
            loadTest();
        });
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
    document.body.classList.remove(TEST_ENV.class);
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

// Add class 'safari' (used for cart scrollbar)
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari')
}

function moveElement(source, target) {
    const f = document.createDocumentFragment();
    if (document.querySelector(source) != null) {
        f.appendChild(document.querySelector(source));
        document.querySelector(target).appendChild(f);
    }
}