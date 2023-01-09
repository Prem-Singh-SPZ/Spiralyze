// (function () {
'use strict'
const TEST_ENV = {
    name: 'spz-2036',
    date: '02-12-22',
    base_url: 'https://www.awrusa.com/', // control domain url
    main_class: 'body', // parent class where test is going to be applied
}
var comboManagement = [];
var singleProduct = [];
// If you need to load any external libs or content
const content = document.createElement('script');
content.src = 'https://res.cloudinary.com/spiralyze/raw/upload/f_auto/AWR/2036/Assets/products-data.js';
document.head.appendChild(content);
content.onload = function () {
    let url = location.href;
    urlCheck(url);
}

function loadTest() {
    //Create cookie
    var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
    var cookieValue = "1";
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
    // Set test class
    document.body.classList.add('spz-2036');
    //test function call
    loadTest_2036();
    document.body.classList.add("loaded");
}

function loadTest_2036() {
    waitForElm('.product-list .product-item .card-body .price-cls .small-txt').then(function () {
        saveTag();
        updateCardContent();
    });
}

function updateCardContent() {
    document.querySelectorAll('.product-list .product-item .card').forEach(function (v, i) {
        if (v.parentElement.querySelectorAll('.card-body .price-cls .small-txt').length > 0) {
            v.querySelector('.card-body .price-cls .small-txt').innerText = ' / Month';
        }
        v.parentElement.parentElement.classList.add('prod-card-2036');
        if (!v.querySelector('.spz-product-details')) {
            v.insertAdjacentHTML('afterbegin', '<div class="spz-product-content"><div class="spz-product-arrow"> <img alt="Product Icon" class="spz-product-arrow" loading="lazy" src="https://res.cloudinary.com/spiralyze/image/upload/v1673244234/AWR/2036/Assets/chevron-right.svg"> </div></div>');
            v.querySelector('.spz-product-content').insertAdjacentHTML('afterbegin', '<div class="spz-product-details"><div class="spz-product-name"></div><div class="spz-product-price"></div></div>');
            v.insertAdjacentHTML('afterbegin', '<div class="spz-product-image"></div>');
            customMoveElement(v.querySelector('.card-img'), v.querySelector('.spz-product-image'));
            customMoveElement(v.querySelector('.program-name'), v.querySelector('.spz-product-name'));
            customMoveElement(v.querySelector('.card-body div:first-child div:first-child'), v.querySelector('.spz-product-details .spz-product-price'));

            v.addEventListener('click', function () {
                console.log('card is clicked  ' + v.classList);
                v.querySelector('.card-body .enroll-now').click();
            })
        }
        console.log('this is update content');

        //Update image of cards
        let prodTitle = v.querySelector('.program-name').textContent.trim();
        let prodImage = v.querySelector('.card-img');

        if (undefined != singleProduct) {
            singleProduct.some(function (prod, i) {
                if (prodTitle == prod.productName) {
                    if (prod.productImage) {
                        // prodImage.setAttribute('src', prod.productImage);
                        prodImage.src = prod.productImage;
                        setTimeout(function () {
                            prodImage.style.opacity = 1;
                        }, 500);
                    }

                    //Add Popular tag
                    if ('popular' == prod.isPopular) {
                        v.classList.add('is-popular');
                    }
                    if ('yes' == prod.isBestValue) {
                        v.classList.add('is-best-value');
                    }
                }
            });
        }
    });
}

function saveTag() {
    // Add save tag to product cards
    console.log('this is save tag function');
    const allProducts = document.querySelectorAll('.product-list .product-item .program-name');
    comboManagement.forEach(function (cmbo, i) {
        let totalprice = 0;
        let comboPrice = 0;
        allProducts.forEach(function (v, i) {
            console.log('this is combo price for each');

            if (v.innerText == cmbo.comboName) {
                if (v.parentElement.querySelectorAll('.card-body .price-cls .notranslate').length > 0) {
                    comboPrice = v.parentElement.querySelector('.card-body .price-cls .notranslate').innerHTML;
                    comboPrice = Number(comboPrice.replaceAll("$", ""));
                }
            }
        });

        cmbo.comboProducts.forEach(function (ind, intProduct) {
            allProducts.forEach(function (v, i) {
                if (v.innerText == ind && v.parentElement.querySelectorAll('.card-body .price-cls .notranslate').length > 0) {
                    const singlePrice = v.parentElement.querySelector('.card-body .price-cls .notranslate').innerHTML;
                    totalprice += Number(singlePrice.replaceAll("$", ""));
                    var finalprice = (totalprice - comboPrice).toFixed(2);
                    if (comboPrice > 0 && finalprice >= 1) {
                        allProducts.forEach(function (u, p) {
                            if (u.innerText == cmbo.comboName) {
                                console.log('this is combo price save tag');

                                if (!u.parentElement.querySelector('.card-body.amount-save .save-price-spz')) {
                                    u.parentElement.querySelector('.card-body .price-cls').insertAdjacentHTML('afterend', `<span class="save-price-spz">save $` + finalprice + `</span>`);
                                    // u.parentElement.parentElement.querySelector('.card').classList.add('amount-save');
                                }
                            }
                        });
                    }

                }
            });
        })
    });
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
    // if (window.location.pathname.indexOf("/products/") > -1) {
    if (window.location.pathname.indexOf("/products/") > -1 && window.innerWidth <= 766) {
        // if (window.location.pathname.indexOf("/nj") || window.location.pathname.indexOf("/pa") || window.location.pathname.indexOf("/il") == -1) {
        const ltInt = setInterval(function () {
            if (document.querySelectorAll('.product-list').length > 0 && document.querySelectorAll('.prod-card-2036').length == 0 && (window.location.pathname.indexOf("/nj") || window.location.pathname.indexOf("/pa") || window.location.pathname.indexOf("/il")) == -1) {
                loadTest();
            }
        }, 200);
        setTimeout(function () {
            if (document.querySelectorAll('.pace.pace-inactive .prod-card-2036').length > 0) {
                clearInterval(ltInt)
            }
        }, 3000);
    }
    // }
    // }
});

let url = location.href;
urlCheck(url);
function urlCheck(url) {
    let testURL = '';
    if (window.location.pathname.indexOf("/products/") > -1 && window.innerWidth <= 766 && (window.location.pathname.indexOf("/nj") || window.location.pathname.indexOf("/pa") || window.location.pathname.indexOf("/il")) == -1) {
        testURL = window.location.href;
    }
    else {
        removeTest();
        console.log('removing test 1');
    }
    if (isSameUrl(url, testURL, true) && window.innerWidth <= 766) {
        loadTest();
        setTimeout(function () {
            window.addEventListener("resize", function () {
                loadTest();
            });
        }, 2000);
    } else {
        removeTest();
        console.log('removing test 2');
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
    document.body.classList.remove('spz-2036', 'loaded');
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

function customMoveElement(sourceElm, targetLoc) {
    if (sourceElm && targetLoc) {
        const sc = sourceElm;
        const clone = sc.cloneNode(true);
        targetLoc.appendChild(clone);
    }
}

// Add class 'safari' (used for cart scrollbar)
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari')
}
// })()